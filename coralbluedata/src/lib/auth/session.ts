/**
 * Server-side session management.
 *
 * Model: a session row lives in the DB. The browser holds an httpOnly cookie
 * containing a `jose`-signed JWT whose only claim is the session id. Verifying
 * the JWT proves the cookie was issued by us; the DB lookup proves the session
 * is still valid and not expired/revoked. Logout and expiry both invalidate
 * server-side, so a stolen-but-expired cookie is useless.
 */
import "server-only";
import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { sessions, adminUsers } from "@/db/schema";
import { env } from "@/env";

const COOKIE_NAME = "cbd_session";
const secret = new TextEncoder().encode(env.SESSION_SECRET);

export type SessionUser = {
  id: string;
  email: string;
  name: string;
  role: "owner" | "editor";
};

function ttlMs() {
  return env.SESSION_TTL_HOURS * 60 * 60 * 1000;
}

/** Create a DB session + signed cookie for a user. */
export async function createSession(userId: string): Promise<void> {
  const id = crypto.randomUUID();
  const expiresAt = new Date(Date.now() + ttlMs());

  await db.insert(sessions).values({ id, userId, expiresAt });

  const token = await new SignJWT({ sid: id })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(Math.floor(expiresAt.getTime() / 1000))
    .sign(secret);

  const store = await cookies();
  store.set(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: env.NODE_ENV === "production",
    path: "/",
    expires: expiresAt,
  });
}

/** Return the current authenticated user, or null. Safe in RSC + route handlers. */
export async function getSessionUser(): Promise<SessionUser | null> {
  const store = await cookies();
  const token = store.get(COOKIE_NAME)?.value;
  if (!token) return null;

  let sid: string;
  try {
    const { payload } = await jwtVerify(token, secret);
    sid = String(payload.sid ?? "");
  } catch {
    return null;
  }
  if (!sid) return null;

  const row = await db
    .select({
      id: adminUsers.id,
      email: adminUsers.email,
      name: adminUsers.name,
      role: adminUsers.role,
      expiresAt: sessions.expiresAt,
    })
    .from(sessions)
    .innerJoin(adminUsers, eq(sessions.userId, adminUsers.id))
    .where(eq(sessions.id, sid))
    .get();

  if (!row) return null;
  if (row.expiresAt.getTime() < Date.now()) {
    await db.delete(sessions).where(eq(sessions.id, sid));
    return null;
  }

  return { id: row.id, email: row.email, name: row.name, role: row.role };
}

/** Destroy the current session (DB row + cookie). */
export async function destroySession(): Promise<void> {
  const store = await cookies();
  const token = store.get(COOKIE_NAME)?.value;
  if (token) {
    try {
      const { payload } = await jwtVerify(token, secret);
      const sid = String(payload.sid ?? "");
      if (sid) await db.delete(sessions).where(eq(sessions.id, sid));
    } catch {
      /* ignore — cookie invalid anyway */
    }
  }
  store.delete(COOKIE_NAME);
}

export { COOKIE_NAME };
