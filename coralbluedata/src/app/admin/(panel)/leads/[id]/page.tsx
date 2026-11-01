import Link from "next/link";
import { notFound } from "next/navigation";
import { asc, eq } from "drizzle-orm";
import { ArrowLeft, Mail, Phone, Building2, Tag, Clock } from "lucide-react";
import { db } from "@/db";
import { enquiries, enquiryNotes, adminUsers, ENQUIRY_STATUS } from "@/db/schema";
import { Card, PageHeader, StatusBadge } from "@/components/admin/ui";
import { formatDate } from "@/lib/utils";
import { updateLeadStatus, addLeadNote } from "../../../actions/leads";

export default async function LeadDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const lead = await db.select().from(enquiries).where(eq(enquiries.id, id)).get();
  if (!lead) notFound();

  const notes = await db
    .select({
      id: enquiryNotes.id,
      body: enquiryNotes.body,
      createdAt: enquiryNotes.createdAt,
      author: adminUsers.name,
    })
    .from(enquiryNotes)
    .leftJoin(adminUsers, eq(enquiryNotes.authorId, adminUsers.id))
    .where(eq(enquiryNotes.enquiryId, id))
    .orderBy(asc(enquiryNotes.createdAt));

  const setStatus = updateLeadStatus.bind(null, id);
  const addNote = addLeadNote.bind(null, id);

  return (
    <>
      <Link href="/admin/leads" className="mb-4 inline-flex items-center gap-2 text-sm text-mist-500 hover:text-ink-900">
        <ArrowLeft className="h-4 w-4" /> Back to leads
      </Link>
      <PageHeader title={lead.name} description={`Received ${formatDate(lead.createdAt)} · ${lead.source} enquiry`} />

      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="font-semibold text-ink-900">Enquiry details</h2>
            <dl className="mt-4 grid gap-4 sm:grid-cols-2">
              <Detail icon={Mail} label="Email">
                <a href={`mailto:${lead.email}`} className="text-coral-700 hover:underline">{lead.email}</a>
              </Detail>
              <Detail icon={Phone} label="Phone">{lead.phone || "—"}</Detail>
              <Detail icon={Building2} label="Company">{lead.company || "—"}</Detail>
              <Detail icon={Tag} label="Industry">{lead.industry || "—"}</Detail>
              <Detail icon={Tag} label="Volume">{lead.volume || "—"}</Detail>
              <Detail icon={Clock} label="Received">{formatDate(lead.createdAt)}</Detail>
            </dl>
            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-mist-500">Message</p>
              <p className="mt-1 whitespace-pre-line rounded-lg bg-mist-50 p-4 text-sm text-ink-800">
                {lead.message || "(no message provided)"}
              </p>
            </div>
          </Card>

          {/* Notes & history */}
          <Card className="p-6">
            <h2 className="font-semibold text-ink-900">Notes & history</h2>
            <form action={addNote} className="mt-4 flex gap-2">
              <input
                name="body"
                required
                placeholder="Add an internal note or follow-up…"
                className="flex-1 rounded-lg border border-mist-300 px-3 py-2 text-sm outline-none focus:border-coral-400"
              />
              <button className="rounded-lg bg-ink-900 px-4 py-2 text-sm font-semibold text-white">Add</button>
            </form>
            <ul className="mt-5 space-y-4">
              {notes.length === 0 ? (
                <li className="text-sm text-mist-500">No notes yet.</li>
              ) : (
                notes.map((n) => (
                  <li key={n.id} className="border-l-2 border-mist-200 pl-4">
                    <p className="text-sm text-ink-800">{n.body}</p>
                    <p className="mt-1 text-xs text-mist-400">
                      {n.author ?? "System"} · {formatDate(n.createdAt)}
                    </p>
                  </li>
                ))
              )}
            </ul>
          </Card>
        </div>

        {/* Status sidebar */}
        <div>
          <Card className="p-6">
            <h2 className="font-semibold text-ink-900">Status</h2>
            <div className="mt-3">
              <StatusBadge status={lead.status} />
            </div>
            <form action={setStatus} className="mt-5 space-y-3">
              <label htmlFor="status" className="block text-sm font-medium text-ink-700">
                Update status
              </label>
              <select
                id="status"
                name="status"
                defaultValue={lead.status}
                className="w-full rounded-lg border border-mist-300 px-3 py-2 text-sm outline-none focus:border-coral-400"
              >
                {ENQUIRY_STATUS.map((s) => (
                  <option key={s} value={s} className="capitalize">
                    {s}
                  </option>
                ))}
              </select>
              <button className="btn-primary w-full">Save status</button>
            </form>
            <p className="mt-4 text-xs text-mist-400">
              Status changes are recorded in the history for an audit trail.
            </p>
          </Card>
        </div>
      </div>
    </>
  );
}

function Detail({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ElementType;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-mist-500">
        <Icon className="h-3.5 w-3.5" /> {label}
      </dt>
      <dd className="mt-1 text-sm text-ink-800">{children}</dd>
    </div>
  );
}
