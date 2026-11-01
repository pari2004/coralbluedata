import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageHeader, Card } from "@/components/admin/ui";
import { AdminForm } from "@/components/admin/AdminForm";
import { ArticleFields } from "@/components/admin/forms";
import { saveArticle } from "../../../actions/content";

export default function NewArticlePage() {
  const action = saveArticle.bind(null, null);
  return (
    <>
      <Link href="/admin/articles" className="mb-4 inline-flex items-center gap-2 text-sm text-mist-500 hover:text-ink-900">
        <ArrowLeft className="h-4 w-4" /> Back to articles
      </Link>
      <PageHeader title="New article" />
      <Card className="p-6 md:p-8">
        <AdminForm action={action} submitLabel="Create article">
          <ArticleFields />
        </AdminForm>
      </Card>
    </>
  );
}
