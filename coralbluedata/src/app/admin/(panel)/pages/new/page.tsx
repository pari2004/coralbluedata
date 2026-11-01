import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageHeader, Card } from "@/components/admin/ui";
import { AdminForm } from "@/components/admin/AdminForm";
import { PageMetaFields } from "@/components/admin/PageMetaFields";
import { savePage } from "../../../actions/pages";

export default function NewPage() {
  const action = savePage.bind(null, null);
  return (
    <>
      <Link href="/admin/pages" className="mb-4 inline-flex items-center gap-2 text-sm text-mist-500 hover:text-ink-900">
        <ArrowLeft className="h-4 w-4" /> Back to pages
      </Link>
      <PageHeader title="New page" description="Save the page first, then add content blocks." />
      <Card className="p-6 md:p-8">
        <AdminForm action={action} submitLabel="Create page">
          <PageMetaFields />
        </AdminForm>
      </Card>
    </>
  );
}
