import Link from "next/link";
import { desc } from "drizzle-orm";
import { Plus, Pencil } from "lucide-react";
import { db } from "@/db";
import { pages } from "@/db/schema";
import { PageHeader, Card, StatusBadge, EmptyState, AdminButton } from "@/components/admin/ui";
import { formatDate } from "@/lib/utils";

export default async function PagesListPage() {
  const rows = await db.select().from(pages).orderBy(desc(pages.updatedAt));
  return (
    <>
      <PageHeader
        title="Pages"
        description="Structured, block-based pages served at /pages/[slug]. Use the 'home' slug to control the homepage hero."
        action={<AdminButton href="/admin/pages/new"><Plus className="h-4 w-4" /> New page</AdminButton>}
      />
      {rows.length === 0 ? (
        <EmptyState
          title="No pages yet"
          description="Create a page and build it from content blocks."
          action={<AdminButton href="/admin/pages/new">Create a page</AdminButton>}
        />
      ) : (
        <Card className="divide-y divide-mist-100">
          {rows.map((p) => (
            <Link key={p.id} href={`/admin/pages/${p.id}`} className="flex items-center justify-between gap-4 p-4 hover:bg-mist-50">
              <div className="min-w-0">
                <p className="truncate font-medium text-ink-900">{p.title}</p>
                <p className="truncate text-xs text-mist-500">/pages/{p.slug} · updated {formatDate(p.updatedAt)}</p>
              </div>
              <div className="flex shrink-0 items-center gap-3">
                <StatusBadge status={p.status} />
                <Pencil className="h-4 w-4 text-mist-400" />
              </div>
            </Link>
          ))}
        </Card>
      )}
    </>
  );
}
