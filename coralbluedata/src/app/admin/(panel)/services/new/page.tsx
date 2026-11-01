import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageHeader, Card } from "@/components/admin/ui";
import { AdminForm } from "@/components/admin/AdminForm";
import { ServiceFields } from "@/components/admin/forms";
import { saveService } from "../../../actions/content";

export default function NewServicePage() {
  const action = saveService.bind(null, null);
  return (
    <>
      <Link href="/admin/services" className="mb-4 inline-flex items-center gap-2 text-sm text-mist-500 hover:text-ink-900">
        <ArrowLeft className="h-4 w-4" /> Back to services
      </Link>
      <PageHeader title="New service" />
      <Card className="p-6 md:p-8">
        <AdminForm action={action} submitLabel="Create service">
          <ServiceFields />
        </AdminForm>
      </Card>
    </>
  );
}
