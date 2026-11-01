import Link from "next/link";
import { notFound } from "next/navigation";
import { asc, eq } from "drizzle-orm";
import { ArrowLeft, ExternalLink, Plus } from "lucide-react";
import { db } from "@/db";
import { pages, pageSections, SECTION_TYPES } from "@/db/schema";
import { PageHeader, Card } from "@/components/admin/ui";
import { AdminForm } from "@/components/admin/AdminForm";
import { PageMetaFields } from "@/components/admin/PageMetaFields";
import { SectionEditorCard } from "@/components/admin/SectionEditorCard";
import { ConfirmDeleteButton } from "@/components/admin/ConfirmButton";
import { savePage, deletePage, addSection } from "../../../actions/pages";

const ADDABLE = SECTION_TYPES.filter((t) => t !== "hero" && t !== "logo_strip" && t !== "testimonial_set");

export default async function EditPagePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const page = await db.select().from(pages).where(eq(pages.id, id)).then((r) => r[0]);
  if (!page) notFound();

  const sections = await db.select().from(pageSections).where(eq(pageSections.pageId, id)).orderBy(asc(pageSections.order));

  const save = savePage.bind(null, id);
  const del = deletePage.bind(null, id);
  const add = addSection.bind(null, id);

  return (
    <>
      <Link href="/admin/pages" className="mb-4 inline-flex items-center gap-2 text-sm text-mist-500 hover:text-ink-900">
        <ArrowLeft className="h-4 w-4" /> Back to pages
      </Link>
      <PageHeader
        title={`Edit: ${page.title}`}
        action={
          page.status === "published" ? (
            <Link href={`/pages/${page.slug}`} target="_blank" className="inline-flex items-center gap-2 text-sm font-semibold text-coral-700">
              <ExternalLink className="h-4 w-4" /> View live
            </Link>
          ) : null
        }
      />

      <Card className="p-6 md:p-8">
        <h2 className="mb-5 font-semibold text-ink-900">Page details</h2>
        <AdminForm action={save} submitLabel="Save page">
          <PageMetaFields
            d={{
              slug: page.slug, title: page.title, status: page.status,
              heroHeading: page.heroHeading, heroSubheading: page.heroSubheading,
              ctaLabel: page.ctaLabel, ctaHref: page.ctaHref,
              seoTitle: page.seoTitle, seoDescription: page.seoDescription,
            }}
          />
        </AdminForm>
      </Card>

      <div className="mt-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-semibold text-ink-900">Content blocks</h2>
          <form action={add} className="flex items-center gap-2">
            <select name="type" className="rounded-lg border border-mist-300 px-3 py-2 text-sm" defaultValue="rich_text">
              {ADDABLE.map((t) => (
                <option key={t} value={t}>{t.replace(/_/g, " ")}</option>
              ))}
            </select>
            <button className="inline-flex items-center gap-1.5 rounded-lg bg-coral-500 px-4 py-2 text-sm font-semibold text-ink-950 hover:bg-coral-400">
              <Plus className="h-4 w-4" /> Add block
            </button>
          </form>
        </div>

        {sections.length === 0 ? (
          <p className="rounded-xl border border-dashed border-mist-300 bg-white p-8 text-center text-sm text-mist-500">
            No content blocks yet. Add one above to start building the page body.
          </p>
        ) : (
          <div className="space-y-4">
            {sections.map((s, i) => (
              <SectionEditorCard key={s.id} section={s} pageId={id} index={i} total={sections.length} />
            ))}
          </div>
        )}
      </div>

      <div className="mt-10 border-t border-mist-200 pt-6">
        <ConfirmDeleteButton action={del} label="Delete page" confirmText="Delete this page and all its blocks?" />
      </div>
    </>
  );
}
