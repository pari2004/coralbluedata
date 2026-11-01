import Link from "next/link";
import { asc } from "drizzle-orm";
import { Plus, Pencil } from "lucide-react";
import { db } from "@/db";
import { caseStudies } from "@/db/schema";
import { PageHeader, Card, StatusBadge, EmptyState, AdminButton } from "@/components/admin/ui";

export default async function CaseStudiesListPage() {
  const rows = await db.select().from(caseStudies).orderBy(asc(caseStudies.order));
  return (
    <>
      <PageHeader
        title="Case studies"
        description="Published only when marked verified/approved."
        action={<AdminButton href="/admin/case-studies/new"><Plus className="h-4 w-4" /> New case study</AdminButton>}
      />
      {rows.length === 0 ? (
        <EmptyState title="No case studies yet" action={<AdminButton href="/admin/case-studies/new">Create one</AdminButton>} />
      ) : (
        <Card className="divide-y divide-mist-100">
          {rows.map((c) => (
            <Link key={c.id} href={`/admin/case-studies/${c.id}`} className="flex items-center justify-between gap-4 p-4 hover:bg-mist-50">
              <div className="min-w-0">
                <p className="truncate font-medium text-ink-900">{c.title} {c.isSeed && <span className="ml-1 text-xs text-mist-400">(seed)</span>}</p>
                <p className="truncate text-xs text-mist-500">{c.client ?? "no client named"} {c.verified ? "· verified" : "· unverified"}</p>
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
