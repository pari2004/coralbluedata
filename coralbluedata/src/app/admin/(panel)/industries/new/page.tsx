import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageHeader, Card } from "@/components/admin/ui";
import { AdminForm } from "@/components/admin/AdminForm";
import { IndustryFields } from "@/components/admin/forms";
import { saveIndustry } from "../../../actions/content";

export default function NewIndustryPage() {
  const action = saveIndustry.bind(null, null);
  return (
    <>
      <Link href="/admin/industries" className="mb-4 inline-flex items-center gap-2 text-sm text-mist-500 hover:text-ink-900">
        <ArrowLeft className="h-4 w-4" /> Back to industries
      </Link>
      <PageHeader title="New industry" />
      <Card className="p-6 md:p-8">
        <AdminForm action={action} submitLabel="Create industry">
          <IndustryFields />
        </AdminForm>
      </Card>
    </>
  );
}
