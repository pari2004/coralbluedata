import Link from "next/link";
import { notFound } from "next/navigation";
import { eq } from "drizzle-orm";
import { ArrowLeft } from "lucide-react";
import { db } from "@/db";
import { coverageEntries } from "@/db/schema";
import { PageHeader, Card } from "@/components/admin/ui";
import { AdminForm } from "@/components/admin/AdminForm";
import { CoverageFields } from "@/components/admin/forms";
import { ConfirmDeleteButton } from "@/components/admin/ConfirmButton";
import { saveCoverage, deleteCoverage } from "../../../actions/content";

export default async function EditCoveragePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const c = await db.select().from(coverageEntries).where(eq(coverageEntries.id, id)).then((r) => r[0]);
  if (!c) notFound();
  const save = saveCoverage.bind(null, id);
  const del = deleteCoverage.bind(null, id);
  return (
    <>
      <Link href="/admin/coverage" className="mb-4 inline-flex items-center gap-2 text-sm text-mist-500 hover:text-ink-900">
        <ArrowLeft className="h-4 w-4" /> Back to coverage
      </Link>
      <PageHeader title={`Edit: ${c.region}`} />
      <Card className="p-6 md:p-8">
        <AdminForm action={save} submitLabel="Save changes">
          <CoverageFields d={{ region: c.region, country: c.country, detail: c.detail, verified: c.verified, status: c.status, order: c.order }} />
        </AdminForm>
      </Card>
      <div className="mt-6"><ConfirmDeleteButton action={del} label="Delete region" /></div>
    </>
  );
}
