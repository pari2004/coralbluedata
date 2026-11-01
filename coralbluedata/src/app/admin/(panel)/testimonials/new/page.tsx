import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageHeader, Card } from "@/components/admin/ui";
import { AdminForm } from "@/components/admin/AdminForm";
import { TestimonialFields } from "@/components/admin/forms";
import { saveTestimonial } from "../../../actions/content";

export default function NewTestimonialPage() {
  const action = saveTestimonial.bind(null, null);
  return (
    <>
      <Link href="/admin/testimonials" className="mb-4 inline-flex items-center gap-2 text-sm text-mist-500 hover:text-ink-900">
        <ArrowLeft className="h-4 w-4" /> Back to testimonials
      </Link>
      <PageHeader title="New testimonial" />
      <Card className="p-6 md:p-8">
        <AdminForm action={action} submitLabel="Create testimonial">
          <TestimonialFields />
        </AdminForm>
      </Card>
    </>
  );
}
