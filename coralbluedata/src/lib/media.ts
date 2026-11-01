/**
 * Disk-backed media storage. Files live under MEDIA_DIR (outside the public
 * bundle) and are served via /api/media/[file]. For serverless hosting swap
 * this for S3/R2 (see docs/DEPLOYMENT.md §4) — the callers only use these fns.
 */
import "server-only";
import { mkdirSync, existsSync } from "node:fs";
import { writeFile, unlink } from "node:fs/promises";
import { join, resolve, extname, basename } from "node:path";
import { env } from "@/env";

export const ALLOWED_MIME: Record<string, string> = {
  "image/png": ".png",
  "image/jpeg": ".jpg",
  "image/webp": ".webp",
  "image/gif": ".gif",
  "image/svg+xml": ".svg",
};
export const MAX_BYTES = 8 * 1024 * 1024; // 8 MB

export function mediaDir(): string {
  const dir = resolve(env.MEDIA_DIR);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  return dir;
}

export type SaveResult =
  | { ok: true; filename: string; url: string; size: number; mime: string }
  | { ok: false; error: string };

export async function saveMediaFile(file: File): Promise<SaveResult> {
  if (!(file instanceof File) || file.size === 0) return { ok: false, error: "No file provided." };
  if (file.size > MAX_BYTES) return { ok: false, error: "File exceeds the 8 MB limit." };
  const ext = ALLOWED_MIME[file.type];
  if (!ext) return { ok: false, error: `Unsupported type: ${file.type || "unknown"}. Allowed: PNG, JPG, WEBP, GIF, SVG.` };

  const buf = Buffer.from(await file.arrayBuffer());
  const filename = `${crypto.randomUUID()}${ext}`;
  await writeFile(join(mediaDir(), filename), buf);
  return { ok: true, filename, url: `/api/media/${filename}`, size: file.size, mime: file.type };
}

export async function deleteMediaFile(filename: string): Promise<void> {
  // Guard against path traversal — only a bare basename is permitted.
  const safe = basename(filename);
  if (safe !== filename || !extname(safe)) return;
  const path = join(mediaDir(), safe);
  if (existsSync(path)) await unlink(path);
}

/** Resolve a safe absolute path for serving, or null if invalid/missing. */
export function resolveMediaPath(filename: string): string | null {
  const safe = basename(filename);
  if (safe !== filename) return null;
  const path = join(mediaDir(), safe);
  return existsSync(path) ? path : null;
}
