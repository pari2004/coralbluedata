import { desc } from "drizzle-orm";
import { db } from "@/db";
import { enquiries } from "@/db/schema";
import { getSessionUser } from "@/lib/auth/session";
import { logAudit } from "@/lib/audit";

/** CSV export of leads — authorized admins only. */
export async function GET() {
  const user = await getSessionUser();
  if (!user) return new Response("Unauthorized", { status: 401 });

  const rows = await db.select().from(enquiries).orderBy(desc(enquiries.createdAt));
  const headers = ["createdAt", "name", "email", "company", "phone", "industry", "volume", "source", "status", "message"];
  const esc = (v: unknown) => `"${String(v ?? "").replace(/"/g, '""')}"`;
  const csv = [
    headers.join(","),
    ...rows.map((r) =>
      [
        new Date(r.createdAt).toISOString(),
        r.name,
        r.email,
        r.company,
        r.phone,
        r.industry,
        r.volume,
        r.source,
        r.status,
        r.message?.replace(/\n/g, " "),
      ]
        .map(esc)
        .join(","),
    ),
  ].join("\r\n");

  await logAudit({ actorId: user.id, action: "lead.export", entityType: "enquiry", meta: { count: rows.length } });

  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="coralblue-leads-${new Date().toISOString().slice(0, 10)}.csv"`,
    },
  });
}
