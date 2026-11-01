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

export class UnauthorizedError extends Error {
  constructor() {
    super("Unauthorized");
    this.name = "UnauthorizedError";
  }
}
