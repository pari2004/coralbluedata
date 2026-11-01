import Link from "next/link";
import { notFound } from "next/navigation";
import { eq } from "drizzle-orm";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { db } from "@/db";
import { caseStudies } from "@/db/schema";
import { PageHeader, Card } from "@/components/admin/ui";
import { AdminForm } from "@/components/admin/AdminForm";
import { CaseStudyFields } from "@/components/admin/forms";
import { ConfirmDeleteButton } from "@/components/admin/ConfirmButton";
import { saveCaseStudy, deleteCaseStudy } from "../../../actions/content";

export default async function EditCaseStudyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const c = await db.select().from(caseStudies).where(eq(caseStudies.id, id)).get();
  if (!c) notFound();
  const save = saveCaseStudy.bind(null, id);
  const del = deleteCaseStudy.bind(null, id);
  return (
    <>
      <Link href="/admin/case-studies" className="mb-4 inline-flex items-center gap-2 text-sm text-mist-500 hover:text-ink-900">
        <ArrowLeft className="h-4 w-4" /> Back to case studies
      </Link>
      <PageHeader
        title={`Edit: ${c.title}`}
        action={c.status === "published" ? (
          <Link href={`/case-studies/${c.slug}`} target="_blank" className="inline-flex items-center gap-2 text-sm font-semibold text-coral-700">
            <ExternalLink className="h-4 w-4" /> View live
          </Link>
        ) : null}
      />
      <Card className="p-6 md:p-8">
        <AdminForm action={save} submitLabel="Save changes">
          <CaseStudyFields d={{ slug: c.slug, title: c.title, client: c.client, summary: c.summary, challenge: c.challenge, solution: c.solution, outcomes: c.outcomes, verified: c.verified, status: c.status, order: c.order }} />
        </AdminForm>
      </Card>
      <div className="mt-6"><ConfirmDeleteButton action={del} label="Delete case study" /></div>
    </>
  );
}
