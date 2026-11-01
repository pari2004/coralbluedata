import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageHeader, Card } from "@/components/admin/ui";
import { AdminForm } from "@/components/admin/AdminForm";
import { CaseStudyFields } from "@/components/admin/forms";
import { saveCaseStudy } from "../../../actions/content";

export default function NewCaseStudyPage() {
  const action = saveCaseStudy.bind(null, null);
  return (
    <>
      <Link href="/admin/case-studies" className="mb-4 inline-flex items-center gap-2 text-sm text-mist-500 hover:text-ink-900">
        <ArrowLeft className="h-4 w-4" /> Back to case studies
      </Link>
      <PageHeader title="New case study" />
      <Card className="p-6 md:p-8">
        <AdminForm action={action} submitLabel="Create case study">
          <CaseStudyFields />
        </AdminForm>
      </Card>
    </>
  );
}
