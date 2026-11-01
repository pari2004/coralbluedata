import Link from "next/link";
import { notFound } from "next/navigation";
import { eq } from "drizzle-orm";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { db } from "@/db";
import { industries } from "@/db/schema";
import { PageHeader, Card } from "@/components/admin/ui";
import { AdminForm } from "@/components/admin/AdminForm";
import { IndustryFields } from "@/components/admin/forms";
import { ConfirmDeleteButton } from "@/components/admin/ConfirmButton";
import { saveIndustry, deleteIndustry } from "../../../actions/content";

export default async function EditIndustryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const s = await db.select().from(industries).where(eq(industries.id, id)).get();
  if (!s) notFound();
  const save = saveIndustry.bind(null, id);
  const del = deleteIndustry.bind(null, id);
  return (
    <>
      <Link href="/admin/industries" className="mb-4 inline-flex items-center gap-2 text-sm text-mist-500 hover:text-ink-900">
        <ArrowLeft className="h-4 w-4" /> Back to industries
      </Link>
      <PageHeader
        title={`Edit: ${s.title}`}
        action={s.status === "published" ? (
          <Link href={`/industries/${s.slug}`} target="_blank" className="inline-flex items-center gap-2 text-sm font-semibold text-coral-700">
            <ExternalLink className="h-4 w-4" /> View live
          </Link>
        ) : null}
      />
      <Card className="p-6 md:p-8">
        <AdminForm action={save} submitLabel="Save changes">
          <IndustryFields d={{ slug: s.slug, title: s.title, summary: s.summary, body: s.body, icon: s.icon, seoTitle: s.seoTitle, seoDescription: s.seoDescription, status: s.status, order: s.order }} />
        </AdminForm>
      </Card>
      <div className="mt-6"><ConfirmDeleteButton action={del} label="Delete industry" /></div>
    </>
  );
}
