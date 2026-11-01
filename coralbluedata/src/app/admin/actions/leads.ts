"use server";

import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { enquiries, enquiryNotes } from "@/db/schema";
import { requireApiUser } from "@/lib/auth/guard";
import { enquiryStatusSchema, enquiryNoteSchema } from "@/lib/validation/schemas";
import { logAudit } from "@/lib/audit";

export async function updateLeadStatus(id: string, formData: FormData) {
  const user = await requireApiUser();
  const parsed = enquiryStatusSchema.safeParse({ status: formData.get("status") });
  if (!parsed.success) return;

  const current = await db.select().from(enquiries).where(eq(enquiries.id, id)).get();
  if (!current) return;

  await db.update(enquiries).set({ status: parsed.data.status }).where(eq(enquiries.id, id));

  // Record the status change as a note for history.
  if (current.status !== parsed.data.status) {
    await db.insert(enquiryNotes).values({
      id: crypto.randomUUID(),
      enquiryId: id,
      authorId: user.id,
      body: `Status changed from "${current.status}" to "${parsed.data.status}".`,
      statusFrom: current.status,
      statusTo: parsed.data.status,
    });
  }
  await logAudit({ actorId: user.id, action: "lead.status", entityType: "enquiry", entityId: id, meta: parsed.data });
  revalidatePath(`/admin/leads/${id}`);
  revalidatePath("/admin/leads");
}

export async function addLeadNote(id: string, formData: FormData) {
  const user = await requireApiUser();
  const parsed = enquiryNoteSchema.safeParse({ body: formData.get("body") });
  if (!parsed.success) return;

  await db.insert(enquiryNotes).values({
    id: crypto.randomUUID(),
    enquiryId: id,
    authorId: user.id,
    body: parsed.data.body,
  });
  await logAudit({ actorId: user.id, action: "lead.note", entityType: "enquiry", entityId: id });
  revalidatePath(`/admin/leads/${id}`);
}
