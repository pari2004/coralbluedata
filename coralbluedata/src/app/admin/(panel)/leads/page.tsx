import Link from "next/link";
import { and, desc, eq, like, or, count } from "drizzle-orm";
import { db } from "@/db";
import { enquiries, ENQUIRY_STATUS } from "@/db/schema";
import { PageHeader, Card, StatusBadge, EmptyState } from "@/components/admin/ui";
import { formatDate, excerpt } from "@/lib/utils";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 20;

export default async function LeadsPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string; q?: string; page?: string }>;
}) {
  const sp = await searchParams;
  const statusFilter = ENQUIRY_STATUS.includes(sp.status as never) ? (sp.status as string) : undefined;
  const q = (sp.q ?? "").trim();
  const pageNum = Math.max(1, Number(sp.page ?? "1") || 1);

  const conditions = [];
  if (statusFilter) conditions.push(eq(enquiries.status, statusFilter as never));
  if (q) {
    conditions.push(
      or(like(enquiries.name, `%${q}%`), like(enquiries.email, `%${q}%`), like(enquiries.company, `%${q}%`))!,
    );
  }
  const where = conditions.length ? and(...conditions) : undefined;

  const [rows, totalRow] = await Promise.all([
    db
      .select()
      .from(enquiries)
      .where(where)
      .orderBy(desc(enquiries.createdAt))
      .limit(PAGE_SIZE)
      .offset((pageNum - 1) * PAGE_SIZE),
    db.select({ n: count() }).from(enquiries).where(where).then((r) => r[0]),
  ]);
  const total = totalRow?.n ?? 0;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  const buildHref = (patch: Record<string, string | undefined>) => {
    const params = new URLSearchParams();
    if (statusFilter) params.set("status", statusFilter);
    if (q) params.set("q", q);
    for (const [k, v] of Object.entries(patch)) {
      if (v === undefined) params.delete(k);
      else params.set(k, v);
    }
    const s = params.toString();
    return s ? `/admin/leads?${s}` : "/admin/leads";
  };

  return (
    <>
      <PageHeader
        title="Leads"
        description={`${total} enquir${total === 1 ? "y" : "ies"} total.`}
        action={
          <a
            href="/api/admin/leads/export"
            className="inline-flex items-center gap-2 rounded-lg border border-mist-300 bg-white px-4 py-2.5 text-sm font-semibold text-ink-800 hover:border-coral-400"
          >
            Export CSV
          </a>
        }
      />

      {/* Filters */}
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          <FilterChip href={buildHref({ status: undefined, page: undefined })} active={!statusFilter}>
            All
          </FilterChip>
          {ENQUIRY_STATUS.map((s) => (
            <FilterChip key={s} href={buildHref({ status: s, page: undefined })} active={statusFilter === s}>
              {s}
            </FilterChip>
          ))}
        </div>
        <form className="flex gap-2">
          {statusFilter && <input type="hidden" name="status" value={statusFilter} />}
          <input
            name="q"
            defaultValue={q}
            placeholder="Search name, email, company…"
            className="w-full rounded-lg border border-mist-300 bg-white px-3 py-2 text-sm outline-none focus:border-coral-400 sm:w-64"
          />
          <button className="rounded-lg bg-ink-900 px-4 py-2 text-sm font-semibold text-white">Search</button>
        </form>
      </div>

      {rows.length === 0 ? (
        <EmptyState
          title="No leads found"
          description={q || statusFilter ? "Try clearing filters." : "Enquiries from the website will appear here."}
        />
      ) : (
        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-mist-200 bg-mist-50 text-xs uppercase tracking-wide text-mist-500">
                <tr>
                  <th className="px-5 py-3 font-semibold">Name</th>
                  <th className="px-5 py-3 font-semibold">Company</th>
                  <th className="px-5 py-3 font-semibold">Message</th>
                  <th className="px-5 py-3 font-semibold">Source</th>
                  <th className="px-5 py-3 font-semibold">Status</th>
                  <th className="px-5 py-3 font-semibold">Received</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-mist-100">
                {rows.map((l) => (
                  <tr key={l.id} className="transition-colors hover:bg-mist-50">
                    <td className="px-5 py-3">
                      <Link href={`/admin/leads/${l.id}`} className="font-medium text-ink-900 hover:text-coral-700">
                        {l.name}
                      </Link>
                      <div className="text-xs text-mist-500">{l.email}</div>
                    </td>
                    <td className="px-5 py-3 text-mist-600">{l.company ?? "—"}</td>
                    <td className="px-5 py-3 text-mist-500">{l.message ? excerpt(l.message, 48) : "—"}</td>
                    <td className="px-5 py-3 text-mist-600 capitalize">{l.source}</td>
                    <td className="px-5 py-3">
                      <StatusBadge status={l.status} />
                    </td>
                    <td className="px-5 py-3 text-xs text-mist-400">{formatDate(l.createdAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {totalPages > 1 && (
        <div className="mt-5 flex items-center justify-between text-sm">
          <span className="text-mist-500">Page {pageNum} of {totalPages}</span>
          <div className="flex gap-2">
            {pageNum > 1 && (
              <Link href={buildHref({ page: String(pageNum - 1) })} className="rounded-lg border border-mist-300 px-3 py-1.5 hover:border-coral-400">
                Previous
              </Link>
            )}
            {pageNum < totalPages && (
              <Link href={buildHref({ page: String(pageNum + 1) })} className="rounded-lg border border-mist-300 px-3 py-1.5 hover:border-coral-400">
                Next
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
}

function FilterChip({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={cn(
        "rounded-full px-3 py-1.5 text-sm font-medium capitalize transition-colors",
        active ? "bg-ink-900 text-white" : "border border-mist-300 bg-white text-mist-600 hover:border-coral-400",
      )}
    >
      {children}
    </Link>
  );
}
