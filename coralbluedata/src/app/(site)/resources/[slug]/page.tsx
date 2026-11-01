import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/motion/Reveal";
import { formatDate } from "@/lib/utils";
import { getPublishedArticle, listPublishedArticles } from "@/lib/content";

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const article = await getPublishedArticle(slug);
  if (!article) return { title: "Article not found" };
  return {
    title: article.seoTitle || article.title,
    description: article.seoDescription || article.summary,
    openGraph: { type: "article", title: article.title, description: article.summary },
  };
}

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params;
  const article = await getPublishedArticle(slug);
  if (!article) notFound();

  const more = (await listPublishedArticles(4)).filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={formatDate(article.publishedAt)}
        title={article.title}
        crumbs={[{ label: "Resources", href: "/resources" }, { label: article.title }]}
      />
      <article className="section bg-white">
        <div className="container max-w-3xl">
          <Reveal className="prose-cbd">
            <p className="text-lg text-ink-700">{article.summary}</p>
            <div className="hairline my-8" />
            {article.body.split("\n\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>
          <Link href="/resources" className="mt-12 inline-flex items-center gap-2 text-sm font-semibold text-coral-700">
            <ArrowLeft className="h-4 w-4" /> Back to resources
          </Link>
        </div>
      </article>

      {more.length > 0 && (
        <section className="section bg-mist-50">
          <div className="container">
            <h2 className="text-display-md text-ink-900">More to read</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {more.map((a) => (
                <Link key={a.slug} href={`/resources/${a.slug}`} className="card-hover group flex h-full flex-col p-6">
                  <h3 className="font-semibold text-ink-900 group-hover:text-coral-700">{a.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-mist-600">{a.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      <CtaBand />
    </>
  );
}
