import Link from "next/link";
import { asc } from "drizzle-orm";
import { Plus, Pencil } from "lucide-react";
import { db } from "@/db";
import { testimonials } from "@/db/schema";
import { PageHeader, Card, StatusBadge, EmptyState, AdminButton } from "@/components/admin/ui";
import { excerpt } from "@/lib/utils";

export default async function TestimonialsListPage() {
  const rows = await db.select().from(testimonials).orderBy(asc(testimonials.order));
  return (
    <>
      <PageHeader
        title="Testimonials"
        description="Published only when verified/approved."
        action={<AdminButton href="/admin/testimonials/new"><Plus className="h-4 w-4" /> New testimonial</AdminButton>}
      />
      {rows.length === 0 ? (
        <EmptyState title="No testimonials yet" action={<AdminButton href="/admin/testimonials/new">Create one</AdminButton>} />
      ) : (
        <Card className="divide-y divide-mist-100">
          {rows.map((t) => (
            <Link key={t.id} href={`/admin/testimonials/${t.id}`} className="flex items-center justify-between gap-4 p-4 hover:bg-mist-50">
              <div className="min-w-0">
                <p className="truncate font-medium text-ink-900">{t.author} {t.company ? `· ${t.company}` : ""}</p>
                <p className="truncate text-xs text-mist-500">{excerpt(t.quote, 70)}</p>
              </div>
              <div className="flex shrink-0 items-center gap-3">
                {!t.verified && <span className="text-xs text-amber-600">unverified</span>}
                <StatusBadge status={t.status} />
                <Pencil className="h-4 w-4 text-mist-400" />
              </div>
            </Link>
          ))}
        </Card>
      )}
    </>
  );
}
