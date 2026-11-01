import Link from "next/link";
import { count, desc, eq, sql } from "drizzle-orm";
import { Inbox, FileStack, Newspaper, Boxes, ArrowRight } from "lucide-react";
import { db } from "@/db";
import { pages, articles, services, enquiries, auditEvents, adminUsers } from "@/db/schema";
import { Card, PageHeader, StatusBadge } from "@/components/admin/ui";
import { formatDate } from "@/lib/utils";

async function countWhere(table: typeof pages | typeof articles, status: string) {
  const r = await db.select({ n: count() }).from(table).where(eq(table.status, status as never)).get();
  return r?.n ?? 0;
}

export default async function DashboardPage() {
  const [publishedPages, draftPages, publishedArticles, publishedServices, newLeads, totalLeads, recentLeads, recentActivity] =
    await Promise.all([
      countWhere(pages, "published"),
      countWhere(pages, "draft"),
      countWhere(articles, "published"),
      db.select({ n: count() }).from(services).where(eq(services.status, "published")).get().then((r) => r?.n ?? 0),
      db.select({ n: count() }).from(enquiries).where(eq(enquiries.status, "new")).get().then((r) => r?.n ?? 0),
      db.select({ n: count() }).from(enquiries).get().then((r) => r?.n ?? 0),
      db.select().from(enquiries).orderBy(desc(enquiries.createdAt)).limit(5),
      db
        .select({
          id: auditEvents.id,
          action: auditEvents.action,
          entityType: auditEvents.entityType,
          createdAt: auditEvents.createdAt,
          actorName: adminUsers.name,
        })
        .from(auditEvents)
        .leftJoin(adminUsers, eq(auditEvents.actorId, adminUsers.id))
        .orderBy(desc(auditEvents.createdAt))
        .limit(6),
    ]);

  const stats = [
    { label: "New leads", value: newLeads, icon: Inbox, href: "/admin/leads", accent: "text-coral-600" },
    { label: "Published pages", value: publishedPages, icon: FileStack, href: "/admin/pages", accent: "text-electric-600" },
    { label: "Published articles", value: publishedArticles, icon: Newspaper, href: "/admin/articles", accent: "text-coral-600" },
    { label: "Published services", value: publishedServices, icon: Boxes, href: "/admin/services", accent: "text-electric-600" },
  ];

  return (
    <>
      <PageHeader title="Dashboard" description="Live overview from your database." />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <Link key={s.label} href={s.href}>
            <Card className="p-5 transition-shadow hover:shadow-lift">
              <div className="flex items-center justify-between">
                <s.icon className={`h-5 w-5 ${s.accent}`} />
                <ArrowRight className="h-4 w-4 text-mist-300" />
              </div>
              <p className="mt-4 font-display text-3xl font-bold text-ink-900">{s.value}</p>
              <p className="mt-1 text-sm text-mist-600">{s.label}</p>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        {/* Recent leads */}
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-ink-900">Recent leads</h2>
            <Link href="/admin/leads" className="text-sm font-semibold text-coral-700 hover:underline">
              View all ({totalLeads})
            </Link>
          </div>
          <div className="mt-4 divide-y divide-mist-100">
            {recentLeads.length === 0 ? (
              <p className="py-6 text-center text-sm text-mist-500">No enquiries yet.</p>
            ) : (
              recentLeads.map((l) => (
                <Link
                  key={l.id}
                  href={`/admin/leads/${l.id}`}
                  className="flex items-center justify-between gap-3 py-3 hover:opacity-80"
                >
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-ink-900">{l.name}</p>
                    <p className="truncate text-xs text-mist-500">
                      {l.company ? `${l.company} · ` : ""}
                      {l.email}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-3">
                    <StatusBadge status={l.status} />
                    <span className="text-xs text-mist-400">{formatDate(l.createdAt)}</span>
                  </div>
                </Link>
              ))
            )}
          </div>
        </Card>

        {/* Recent activity */}
        <Card className="p-6">
          <h2 className="font-semibold text-ink-900">Recent activity</h2>
          <ul className="mt-4 space-y-3">
            {recentActivity.length === 0 ? (
              <p className="py-6 text-center text-sm text-mist-500">No recorded activity yet.</p>
            ) : (
              recentActivity.map((a) => (
                <li key={a.id} className="flex items-center justify-between gap-3 text-sm">
                  <span className="text-ink-700">
                    <span className="font-medium">{a.actorName ?? "System"}</span>{" "}
                    <span className="text-mist-500">— {a.action.replace(/[._]/g, " ")}</span>
                  </span>
                  <span className="shrink-0 text-xs text-mist-400">{formatDate(a.createdAt)}</span>
                </li>
              ))
            )}
          </ul>
        </Card>
      </div>

      {draftPages > 0 && (
        <p className="mt-6 text-sm text-mist-500">
          You have <span className="font-semibold text-ink-700">{draftPages}</span> draft page(s) not yet published.
        </p>
      )}
    </>
  );
}
