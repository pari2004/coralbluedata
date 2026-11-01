import { readFile } from "node:fs/promises";
import { extname } from "node:path";
import { NextResponse } from "next/server";
import { resolveMediaPath, ALLOWED_MIME } from "@/lib/media";

const EXT_MIME: Record<string, string> = Object.fromEntries(
  Object.entries(ALLOWED_MIME).map(([mime, ext]) => [ext, mime]),
);

/** Public read endpoint for uploaded media stored outside the bundle. */
export async function GET(_req: Request, { params }: { params: Promise<{ file: string }> }) {
  const { file } = await params;
  const path = resolveMediaPath(file);
  if (!path) return new NextResponse("Not found", { status: 404 });

  const data = await readFile(path);
  const mime = EXT_MIME[extname(file).toLowerCase()] ?? "application/octet-stream";
  return new NextResponse(new Uint8Array(data), {
    headers: {
      "Content-Type": mime,
      "Cache-Control": "public, max-age=31536000, immutable",
      // SVGs can carry scripts; force download-safe handling in the browser.
      ...(mime === "image/svg+xml" ? { "Content-Security-Policy": "default-src 'none'; style-src 'unsafe-inline'; sandbox" } : {}),
    },
  });
}
