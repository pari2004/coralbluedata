"use server";

import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { media } from "@/db/schema";
import { requireApiUser } from "@/lib/auth/guard";
import { saveMediaFile, deleteMediaFile } from "@/lib/media";
import { logAudit } from "@/lib/audit";

type Result = { error?: string; ok?: boolean } | void;

export async function uploadMedia(_prev: Result, formData: FormData): Promise<Result> {
  const user = await requireApiUser();
  const file = formData.get("file");
  const alt = String(formData.get("alt") ?? "").trim();
  if (!(file instanceof File)) return { error: "Choose a file to upload." };

  const saved = await saveMediaFile(file);
  if (!saved.ok) return { error: saved.error };

  const displayName = (file.name || saved.filename).slice(0, 200);
  await db.insert(media).values({
    id: crypto.randomUUID(),
    filename: saved.filename,
    displayName,
    url: saved.url,
    mime: saved.mime,
    size: saved.size,
    alt,
    uploadedBy: user.id,
  });
  await logAudit({ actorId: user.id, action: "media.upload", entityType: "media", meta: { displayName } });
  revalidatePath("/admin/media");
  return { ok: true };
}

export async function updateMediaAlt(id: string, formData: FormData): Promise<void> {
  const user = await requireApiUser();
  const alt = String(formData.get("alt") ?? "").trim().slice(0, 300);
  await db.update(media).set({ alt }).where(eq(media.id, id));
  await logAudit({ actorId: user.id, action: "media.update", entityType: "media", entityId: id });
  revalidatePath("/admin/media");
}

export async function deleteMedia(id: string): Promise<void> {
  const user = await requireApiUser();
  const row = await db.select().from(media).where(eq(media.id, id)).get();
  if (!row) return;
  await deleteMediaFile(row.filename);
  await db.delete(media).where(eq(media.id, id));
  await logAudit({ actorId: user.id, action: "media.delete", entityType: "media", entityId: id });
  revalidatePath("/admin/media");
}
