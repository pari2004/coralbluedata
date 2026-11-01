import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/site/PageHero";
import { SectionRenderer } from "@/components/site/SectionRenderer";
import { CtaBand } from "@/components/site/CtaBand";
import { getPublishedPage } from "@/lib/content";

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const page = await getPublishedPage(slug);
  if (!page) return { title: "Page not found" };
  return {
    title: page.seoTitle || page.title,
    description: page.seoDescription || page.heroSubheading || undefined,
  };
}

export default async function CmsPage({ params }: Params) {
  const { slug } = await params;
  // 'home' drives the homepage hero and is rendered at '/', not here.
  if (slug === "home") notFound();
  const page = await getPublishedPage(slug);
  if (!page) notFound();

  return (
    <>
      <PageHero
        title={page.heroHeading || page.title}
        description={page.heroSubheading || undefined}
        crumbs={[{ label: page.title }]}
      />
      <SectionRenderer sections={page.sections} />
      <CtaBand />
    </>
  );
}
