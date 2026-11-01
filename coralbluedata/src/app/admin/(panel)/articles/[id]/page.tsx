import Link from "next/link";
import { notFound } from "next/navigation";
import { eq } from "drizzle-orm";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { db } from "@/db";
import { articles } from "@/db/schema";
import { PageHeader, Card } from "@/components/admin/ui";
import { AdminForm } from "@/components/admin/AdminForm";
import { ArticleFields } from "@/components/admin/forms";
import { ConfirmDeleteButton } from "@/components/admin/ConfirmButton";
import { saveArticle, deleteArticle } from "../../../actions/content";

export default async function EditArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const a = await db.select().from(articles).where(eq(articles.id, id)).then((r) => r[0]);
  if (!a) notFound();
  const save = saveArticle.bind(null, id);
  const del = deleteArticle.bind(null, id);
  return (
    <>
      <Link href="/admin/articles" className="mb-4 inline-flex items-center gap-2 text-sm text-mist-500 hover:text-ink-900">
        <ArrowLeft className="h-4 w-4" /> Back to articles
      </Link>
      <PageHeader
        title={`Edit: ${a.title}`}
        action={a.status === "published" ? (
          <Link href={`/resources/${a.slug}`} target="_blank" className="inline-flex items-center gap-2 text-sm font-semibold text-coral-700">
            <ExternalLink className="h-4 w-4" /> View live
          </Link>
        ) : null}
      />
      <Card className="p-6 md:p-8">
        <AdminForm action={save} submitLabel="Save changes">
          <ArticleFields d={{ slug: a.slug, title: a.title, summary: a.summary, body: a.body, seoTitle: a.seoTitle, seoDescription: a.seoDescription, status: a.status }} />
        </AdminForm>
      </Card>
      <div className="mt-6"><ConfirmDeleteButton action={del} label="Delete article" /></div>
    </>
  );
}
