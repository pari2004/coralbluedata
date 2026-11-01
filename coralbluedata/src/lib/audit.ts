/**
 * Audit logging for important administrative actions (create/update/publish/
 * delete, login). Best-effort: a logging failure must never break the action.
 */
import "server-only";
import { db } from "@/db";
import { auditEvents } from "@/db/schema";

export async function logAudit(params: {
  actorId?: string | null;
  action: string;
  entityType: string;
  entityId?: string | null;
  meta?: Record<string, unknown>;
  ip?: string | null;
}): Promise<void> {
  try {
    await db.insert(auditEvents).values({
      id: crypto.randomUUID(),
      actorId: params.actorId ?? null,
      action: params.action,
      entityType: params.entityType,
      entityId: params.entityId ?? null,
      meta: params.meta,
      ip: params.ip ?? null,
    });
  } catch (err) {
    console.error("audit log failed", err);
  }
}
