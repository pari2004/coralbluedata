import { NextResponse, type NextRequest } from "next/server";
import { db } from "@/db";
import { enquiries } from "@/db/schema";
import { enquirySchema } from "@/lib/validation/schemas";
import { rateLimit } from "@/lib/rate-limit";
import { sendMail } from "@/lib/email";
import { logAudit } from "@/lib/audit";

/**
 * Public enquiry endpoint. Persists every valid submission, applies a honeypot
 * + rate limit for spam, and attempts (but never fakes) an email notification.
 */
export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  const limit = rateLimit(`enquiry:${ip}`, 5, 60_000);
  if (!limit.ok) {
    return NextResponse.json(
      { error: "Too many submissions. Please try again shortly." },
      { status: 429, headers: { "Retry-After": String(Math.ceil(limit.retryAfterMs / 1000)) } },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const parsed = enquirySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the form.", fields: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }
  const data = parsed.data;

  // Honeypot: silently accept (so bots don't learn) but don't store.
  if (data.website && data.website.length > 0) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const id = crypto.randomUUID();
  await db.insert(enquiries).values({
    id,
    name: data.name,
    email: data.email,
    company: data.company || null,
    phone: data.phone || null,
    industry: data.industry || null,
    volume: data.volume || null,
    message: data.message || "",
    source: data.source,
    status: "new",
    ip,
    userAgent: req.headers.get("user-agent")?.slice(0, 500) ?? null,
  });

  await logAudit({ action: "enquiry.create", entityType: "enquiry", entityId: id, ip });

  const mail = await sendMail({
    subject: `New ${data.source} enquiry — ${data.name}`,
    text: [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Company: ${data.company || "—"}`,
      `Phone: ${data.phone || "—"}`,
      `Industry: ${data.industry || "—"}`,
      `Volume: ${data.volume || "—"}`,
      `Source: ${data.source}`,
      "",
      data.message || "(no message)",
    ].join("\n"),
  });

  // Report honestly whether the notification email was actually sent.
  return NextResponse.json({ ok: true, emailSent: mail.sent }, { status: 201 });
}
