import Link from "next/link";
import { desc } from "drizzle-orm";
import { Plus, Pencil } from "lucide-react";
import { db } from "@/db";
import { articles } from "@/db/schema";
import { PageHeader, Card, StatusBadge, EmptyState, AdminButton } from "@/components/admin/ui";
import { formatDate } from "@/lib/utils";

export default async function ArticlesListPage() {
  const rows = await db.select().from(articles).orderBy(desc(articles.updatedAt));
  return (
    <>
      <PageHeader
        title="Articles"
        description="Blog & insights shown under /resources."
        action={<AdminButton href="/admin/articles/new"><Plus className="h-4 w-4" /> New article</AdminButton>}
      />
      {rows.length === 0 ? (
        <EmptyState title="No articles yet" action={<AdminButton href="/admin/articles/new">Write one</AdminButton>} />
      ) : (
        <Card className="divide-y divide-mist-100">
          {rows.map((a) => (
            <Link key={a.id} href={`/admin/articles/${a.id}`} className="flex items-center justify-between gap-4 p-4 hover:bg-mist-50">
              <div className="min-w-0">
                <p className="truncate font-medium text-ink-900">{a.title} {a.isSeed && <span className="ml-1 text-xs text-mist-400">(seed)</span>}</p>
                <p className="truncate text-xs text-mist-500">/resources/{a.slug} · updated {formatDate(a.updatedAt)}</p>
              </div>
              <div className="flex shrink-0 items-center gap-3">
                <StatusBadge status={a.status} />
                <Pencil className="h-4 w-4 text-mist-400" />
              </div>
            </Link>
          ))}
        </Card>
      )}
    </>
  );
}
