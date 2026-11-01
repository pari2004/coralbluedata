import Link from "next/link";
import { notFound } from "next/navigation";
import { eq } from "drizzle-orm";
import { ArrowLeft } from "lucide-react";
import { db } from "@/db";
import { testimonials } from "@/db/schema";
import { PageHeader, Card } from "@/components/admin/ui";
import { AdminForm } from "@/components/admin/AdminForm";
import { TestimonialFields } from "@/components/admin/forms";
import { ConfirmDeleteButton } from "@/components/admin/ConfirmButton";
import { saveTestimonial, deleteTestimonial } from "../../../actions/content";

export default async function EditTestimonialPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const t = await db.select().from(testimonials).where(eq(testimonials.id, id)).then((r) => r[0]);
  if (!t) notFound();
  const save = saveTestimonial.bind(null, id);
  const del = deleteTestimonial.bind(null, id);
  return (
    <>
      <Link href="/admin/testimonials" className="mb-4 inline-flex items-center gap-2 text-sm text-mist-500 hover:text-ink-900">
        <ArrowLeft className="h-4 w-4" /> Back to testimonials
      </Link>
      <PageHeader title={`Edit: ${t.author}`} />
      <Card className="p-6 md:p-8">
        <AdminForm action={save} submitLabel="Save changes">
          <TestimonialFields d={{ author: t.author, role: t.role, company: t.company, quote: t.quote, verified: t.verified, status: t.status, order: t.order }} />
        </AdminForm>
      </Card>
      <div className="mt-6"><ConfirmDeleteButton action={del} label="Delete testimonial" /></div>
    </>
  );
}
