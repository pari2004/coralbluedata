import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/motion/Reveal";
import { getPublishedIndustry, listPublishedServices } from "@/lib/content";

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const industry = await getPublishedIndustry(slug);
  if (!industry) return { title: "Industry not found" };
  return {
    title: industry.seoTitle || `${industry.title} Data Solutions`,
    description: industry.seoDescription || industry.summary,
  };
}

export default async function IndustryDetailPage({ params }: Params) {
  const { slug } = await params;
  const industry = await getPublishedIndustry(slug);
  if (!industry) notFound();

  const services = (await listPublishedServices()).slice(0, 4);

  return (
    <>
      <PageHero
        eyebrow="Industry"
        title={`${industry.title} data solutions`}
        description={industry.summary}
        crumbs={[{ label: "Industries", href: "/industries" }, { label: industry.title }]}
      />
      <section className="section bg-white">
        <div className="container grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <Reveal className="prose-cbd">
            {industry.body.split("\n\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-2xl border border-mist-200 bg-mist-50 p-7">
              <h3 className="text-lg font-semibold text-ink-900">Relevant solutions</h3>
              <ul className="mt-4 space-y-2">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/solutions/${s.slug}`}
                      className="group flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-ink-700 transition-colors hover:bg-white hover:text-coral-700"
                    >
                      {s.title}
                      <ArrowRight className="h-4 w-4 text-mist-400 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
