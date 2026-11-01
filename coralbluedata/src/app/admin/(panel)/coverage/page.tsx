import Link from "next/link";
import { asc } from "drizzle-orm";
import { Plus, Pencil } from "lucide-react";
import { db } from "@/db";
import { coverageEntries } from "@/db/schema";
import { PageHeader, Card, StatusBadge, EmptyState, AdminButton } from "@/components/admin/ui";

export default async function CoverageListPage() {
  const rows = await db.select().from(coverageEntries).orderBy(asc(coverageEntries.order));
  return (
    <>
      <PageHeader
        title="Coverage"
        description="Published only when verified. Shown on /coverage and the homepage."
        action={<AdminButton href="/admin/coverage/new"><Plus className="h-4 w-4" /> New region</AdminButton>}
      />
      {rows.length === 0 ? (
        <EmptyState title="No coverage entries yet" action={<AdminButton href="/admin/coverage/new">Create one</AdminButton>} />
      ) : (
        <Card className="divide-y divide-mist-100">
          {rows.map((c) => (
            <Link key={c.id} href={`/admin/coverage/${c.id}`} className="flex items-center justify-between gap-4 p-4 hover:bg-mist-50">
              <div className="min-w-0">
                <p className="truncate font-medium text-ink-900">{c.region}</p>
                <p className="truncate text-xs text-mist-500">{c.verified ? "verified" : "unverified"}</p>
              </div>
              <div className="flex shrink-0 items-center gap-3">
                <StatusBadge status={c.status} />
                <Pencil className="h-4 w-4 text-mist-400" />
              </div>
            </Link>
          ))}
        </Card>
      )}
    </>
  );
}
