import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageHeader, Card } from "@/components/admin/ui";
import { AdminForm } from "@/components/admin/AdminForm";
import { CoverageFields } from "@/components/admin/forms";
import { saveCoverage } from "../../../actions/content";

export default function NewCoveragePage() {
  const action = saveCoverage.bind(null, null);
  return (
    <>
      <Link href="/admin/coverage" className="mb-4 inline-flex items-center gap-2 text-sm text-mist-500 hover:text-ink-900">
        <ArrowLeft className="h-4 w-4" /> Back to coverage
      </Link>
      <PageHeader title="New coverage region" />
      <Card className="p-6 md:p-8">
        <AdminForm action={action} submitLabel="Create region">
          <CoverageFields />
        </AdminForm>
      </Card>
    </>
  );
}
