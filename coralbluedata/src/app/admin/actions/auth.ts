"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { adminUsers } from "@/db/schema";
import { verifyPassword } from "@/lib/auth/password";
import { createSession, destroySession } from "@/lib/auth/session";
import { loginSchema } from "@/lib/validation/schemas";
import { rateLimit } from "@/lib/rate-limit";
import { logAudit } from "@/lib/audit";

export type LoginState = { error?: string };

export async function loginAction(_prev: LoginState, formData: FormData): Promise<LoginState> {
  const hdrs = await headers();
  const ip = hdrs.get("x-forwarded-for")?.split(",")[0]?.trim() || hdrs.get("x-real-ip") || "unknown";

  // Throttle brute force: 10 attempts / 5 min / IP.
  const limit = rateLimit(`login:${ip}`, 10, 5 * 60_000);
  if (!limit.ok) return { error: "Too many attempts. Please wait a few minutes and try again." };

  const parsed = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!parsed.success) return { error: "Enter a valid email and password." };

  const user = await db.select().from(adminUsers).where(eq(adminUsers.email, parsed.data.email)).then((r) => r[0]);

  // Constant-ish response: verify against a dummy hash when user is missing to
  // avoid trivial user-enumeration via timing.
  const hash = user?.passwordHash ?? "$2a$12$0000000000000000000000000000000000000000000000000000";
  const ok = await verifyPassword(parsed.data.password, hash);

  if (!user || !ok) {
    await logAudit({ action: "auth.login_failed", entityType: "admin_user", meta: { email: parsed.data.email }, ip });
    return { error: "Invalid email or password." };
  }

  await db.update(adminUsers).set({ lastLoginAt: new Date() }).where(eq(adminUsers.id, user.id));
  await createSession(user.id);
  await logAudit({ actorId: user.id, action: "auth.login", entityType: "admin_user", entityId: user.id, ip });

  redirect("/admin");
}

export async function logoutAction(): Promise<void> {
  await destroySession();
  redirect("/admin/login");
}
