import Link from "next/link";
import { notFound } from "next/navigation";
import { eq } from "drizzle-orm";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { db } from "@/db";
import { services } from "@/db/schema";
import { PageHeader, Card } from "@/components/admin/ui";
import { AdminForm } from "@/components/admin/AdminForm";
import { ServiceFields } from "@/components/admin/forms";
import { ConfirmDeleteButton } from "@/components/admin/ConfirmButton";
import { saveService, deleteService } from "../../../actions/content";

export default async function EditServicePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const s = await db.select().from(services).where(eq(services.id, id)).then((r) => r[0]);
  if (!s) notFound();

  const save = saveService.bind(null, id);
  const del = deleteService.bind(null, id);

  return (
    <>
      <Link href="/admin/services" className="mb-4 inline-flex items-center gap-2 text-sm text-mist-500 hover:text-ink-900">
        <ArrowLeft className="h-4 w-4" /> Back to services
      </Link>
      <PageHeader
        title={`Edit: ${s.title}`}
        action={
          s.status === "published" ? (
            <Link href={`/solutions/${s.slug}`} target="_blank" className="inline-flex items-center gap-2 text-sm font-semibold text-coral-700">
              <ExternalLink className="h-4 w-4" /> View live
            </Link>
          ) : null
        }
      />
      <Card className="p-6 md:p-8">
        <AdminForm action={save} submitLabel="Save changes">
          <ServiceFields
            d={{
              slug: s.slug, title: s.title, summary: s.summary, icon: s.icon,
              heroHeading: s.heroHeading, heroSubheading: s.heroSubheading, body: s.body,
              benefits: s.benefits, useCases: s.useCases, workflow: s.workflow,
              seoTitle: s.seoTitle, seoDescription: s.seoDescription, status: s.status, order: s.order,
            }}
          />
        </AdminForm>
      </Card>
      <div className="mt-6">
        <ConfirmDeleteButton action={del} label="Delete service" />
      </div>
    </>
  );
}
