import Link from "next/link";
import { asc } from "drizzle-orm";
import { Plus, Pencil } from "lucide-react";
import { db } from "@/db";
import { industries } from "@/db/schema";
import { PageHeader, Card, StatusBadge, EmptyState, AdminButton } from "@/components/admin/ui";

export default async function IndustriesListPage() {
  const rows = await db.select().from(industries).orderBy(asc(industries.order), asc(industries.title));
  return (
    <>
      <PageHeader
        title="Industries"
        description="Industry pages shown under /industries."
        action={<AdminButton href="/admin/industries/new"><Plus className="h-4 w-4" /> New industry</AdminButton>}
      />
      {rows.length === 0 ? (
        <EmptyState title="No industries yet" action={<AdminButton href="/admin/industries/new">Create one</AdminButton>} />
      ) : (
        <Card className="divide-y divide-mist-100">
          {rows.map((s) => (
            <Link key={s.id} href={`/admin/industries/${s.id}`} className="flex items-center justify-between gap-4 p-4 hover:bg-mist-50">
              <div className="min-w-0">
                <p className="truncate font-medium text-ink-900">{s.title} {s.isSeed && <span className="ml-1 text-xs text-mist-400">(seed)</span>}</p>
                <p className="truncate text-xs text-mist-500">/industries/{s.slug}</p>
              </div>
              <div className="flex shrink-0 items-center gap-3">
                <StatusBadge status={s.status} />
                <Pencil className="h-4 w-4 text-mist-400" />
              </div>
            </Link>
          ))}
        </Card>
      )}
    </>
  );
}
