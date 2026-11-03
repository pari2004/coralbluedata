"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { count, eq } from "drizzle-orm";
import { db } from "@/db";
import { adminUsers } from "@/db/schema";
import { requireApiOwner } from "@/lib/auth/guard";
import { hashPassword } from "@/lib/auth/password";
import { logAudit } from "@/lib/audit";
import { adminUserSchema, adminPasswordSchema } from "@/lib/validation/schemas";

type ActionResult = { error?: string } | void;

const str = (v: FormDataEntryValue | null) => String(v ?? "").trim();

/** How many owners currently exist — used to protect the last owner. */
async function ownerCount(): Promise<number> {
  const r = await db.select({ c: count() }).from(adminUsers).where(eq(adminUsers.role, "owner"));
  return Number(r[0]?.c ?? 0);
}

/**
 * Create a new admin user, or update an existing one (id set).
 * On edit the password is optional — a blank value keeps the current one.
 * Owner-only. Guards against duplicate emails and removing the last owner.
 */
export async function saveUser(id: string | null, _prev: ActionResult, formData: FormData): Promise<ActionResult> {
  const actor = await requireApiOwner();

  const parsed = adminUserSchema.safeParse({
    email: str(formData.get("email")),
    name: str(formData.get("name")),
    role: str(formData.get("role")) || "editor",
  });
  if (!parsed.success) return { error: parsed.error.errors[0]?.message ?? "Invalid input" };
  const d = parsed.data;

  const rawPassword = String(formData.get("password") ?? "");

  // Email must be unique across accounts (case-insensitive compare on the stored value).
  const emailOwner = await db
    .select({ id: adminUsers.id })
    .from(adminUsers)
    .where(eq(adminUsers.email, d.email))
    .then((r) => r[0]);
  if (emailOwner && emailOwner.id !== id) {
    return { error: "That email is already used by another account." };
  }

  if (id) {
    const existing = await db.select().from(adminUsers).where(eq(adminUsers.id, id)).then((r) => r[0]);
    if (!existing) return { error: "User not found." };

    // Never let the final owner be demoted — the CMS must always have one owner.
    if (existing.role === "owner" && d.role !== "owner" && (await ownerCount()) <= 1) {
      return { error: "You can't change the last owner to editor. Promote another user to owner first." };
    }

    const values: Partial<typeof adminUsers.$inferInsert> = {
      email: d.email,
      name: d.name,
      role: d.role,
      updatedAt: new Date(),
    };
    if (rawPassword) {
      const pw = adminPasswordSchema.safeParse(rawPassword);
      if (!pw.success) return { error: pw.error.errors[0]?.message ?? "Invalid password" };
      values.passwordHash = await hashPassword(pw.data);
    }
    await db.update(adminUsers).set(values).where(eq(adminUsers.id, id));
    await logAudit({
      actorId: actor.id,
      action: "user.update",
      entityType: "admin_user",
      entityId: id,
      meta: { email: d.email, role: d.role, passwordReset: Boolean(rawPassword) },
    });
  } else {
    // Creating: a valid password is mandatory.
    const pw = adminPasswordSchema.safeParse(rawPassword);
    if (!pw.success) return { error: pw.error.errors[0]?.message ?? "A password of at least 12 characters is required." };

    const newId = crypto.randomUUID();
    await db.insert(adminUsers).values({
      id: newId,
      email: d.email,
      name: d.name,
      role: d.role,
      passwordHash: await hashPassword(pw.data),
    });
    await logAudit({
      actorId: actor.id,
      action: "user.create",
      entityType: "admin_user",
      entityId: newId,
      meta: { email: d.email, role: d.role },
    });
  }

  revalidatePath("/admin/users");
  redirect("/admin/users");
}

/**
 * Delete an admin user. Owner-only. You cannot delete your own account or the
 * last remaining owner; those cases redirect back with an error flag.
 * Deleting a user cascades their sessions (FK onDelete: cascade), logging them out.
 */
export async function deleteUser(id: string): Promise<void> {
  const actor = await requireApiOwner();

  if (id === actor.id) redirect("/admin/users?error=self-delete");

  const target = await db.select().from(adminUsers).where(eq(adminUsers.id, id)).then((r) => r[0]);
  if (!target) redirect("/admin/users");

  if (target.role === "owner" && (await ownerCount()) <= 1) {
    redirect("/admin/users?error=last-owner");
  }

  await db.delete(adminUsers).where(eq(adminUsers.id, id));
  await logAudit({
    actorId: actor.id,
    action: "user.delete",
    entityType: "admin_user",
    entityId: id,
    meta: { email: target.email },
  });

  revalidatePath("/admin/users");
  redirect("/admin/users");
}
