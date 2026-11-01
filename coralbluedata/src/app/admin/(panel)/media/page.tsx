import { desc } from "drizzle-orm";
import { db } from "@/db";
import { media } from "@/db/schema";
import { PageHeader, Card, EmptyState } from "@/components/admin/ui";
import { MediaUploader } from "@/components/admin/MediaUploader";
import { ConfirmDeleteButton } from "@/components/admin/ConfirmButton";
import { updateMediaAlt, deleteMedia } from "../../actions/media";
import { formatDate } from "@/lib/utils";

function kb(bytes: number) {
  return bytes < 1024 * 1024 ? `${Math.round(bytes / 1024)} KB` : `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

export default async function MediaPage() {
  const items = await db.select().from(media).orderBy(desc(media.createdAt));
  return (
    <>
      <PageHeader title="Media library" description="Upload and manage images. Reuse the URL across content." />
      <div className="mb-6">
        <MediaUploader />
      </div>

      {items.length === 0 ? (
        <EmptyState title="No media yet" description="Upload your first image above." />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((m) => {
            const setAlt = updateMediaAlt.bind(null, m.id);
            const del = deleteMedia.bind(null, m.id);
            return (
              <Card key={m.id} className="overflow-hidden">
                <div className="flex aspect-video items-center justify-center bg-mist-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.url} alt={m.alt || m.displayName} className="h-full w-full object-contain" />
                </div>
                <div className="space-y-3 p-4">
                  <div>
                    <p className="truncate text-sm font-medium text-ink-900">{m.displayName}</p>
                    <p className="text-xs text-mist-500">
                      {kb(m.size)} · {m.mime.replace("image/", "")} · {formatDate(m.createdAt)}
                    </p>
                  </div>
                  <form action={setAlt} className="flex gap-2">
                    <input
                      name="alt"
                      defaultValue={m.alt}
                      placeholder="Alt text"
                      className="flex-1 rounded-lg border border-mist-300 px-2.5 py-1.5 text-xs outline-none focus:border-coral-400"
                    />
                    <button className="rounded-lg bg-ink-900 px-3 py-1.5 text-xs font-semibold text-white">Save</button>
                  </form>
                  <div className="flex items-center justify-between gap-2">
                    <code className="truncate rounded bg-mist-100 px-2 py-1 text-[11px] text-mist-600">{m.url}</code>
                    <ConfirmDeleteButton action={del} label="Delete" confirmText="Delete this asset?" />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </>
  );
}
