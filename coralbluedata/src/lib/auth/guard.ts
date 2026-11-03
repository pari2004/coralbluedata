/**
 * Authorization guards used by every protected admin surface.
 * UI hiding is never the control — these run server-side on each request.
 */
import "server-only";
import { redirect } from "next/navigation";
import { getSessionUser, type SessionUser } from "./session";

/** For server components / pages: redirect to login if not authenticated. */
export async function requireUser(): Promise<SessionUser> {
  const user = await getSessionUser();
  if (!user) redirect("/admin/login");
  return user;
}

/** For route handlers / server actions: throw instead of redirect. */
export async function requireApiUser(): Promise<SessionUser> {
  const user = await getSessionUser();
  if (!user) throw new UnauthorizedError();
  return user;
}

/**
 * For owner-only surfaces (user management, etc.): authenticate, then require
 * the "owner" role. Editors are bounced back to the dashboard.
 */
export async function requireOwner(): Promise<SessionUser> {
  const user = await requireUser();
  if (user.role !== "owner") redirect("/admin");
  return user;
}

/** Owner-only guard for server actions: throws instead of redirecting. */
export async function requireApiOwner(): Promise<SessionUser> {
  const user = await requireApiUser();
  if (user.role !== "owner") throw new ForbiddenError();
  return user;
}

export class UnauthorizedError extends Error {
  constructor() {
    super("Unauthorized");
    this.name = "UnauthorizedError";
  }
}

export class ForbiddenError extends Error {
  constructor() {
    super("Forbidden");
    this.name = "ForbiddenError";
  }
}
