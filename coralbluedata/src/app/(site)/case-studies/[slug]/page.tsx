import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/motion/Reveal";
import { getPublishedCaseStudy } from "@/lib/content";

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const cs = await getPublishedCaseStudy(slug);
  if (!cs) return { title: "Case study not found" };
  return { title: cs.title, description: cs.summary };
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const cs = await getPublishedCaseStudy(slug);
  if (!cs) notFound();

  return (
    <>
      <PageHero
        eyebrow={cs.client ? cs.client : "Case study"}
        title={cs.title}
        description={cs.summary}
        crumbs={[{ label: "Case Studies", href: "/case-studies" }, { label: cs.title }]}
      />
      <section className="section bg-white">
        <div className="container grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="prose-cbd">
            <h2>The challenge</h2>
            {cs.challenge.split("\n\n").map((p, i) => (
              <p key={`c-${i}`}>{p}</p>
            ))}
            <h2>Our approach</h2>
            {cs.solution.split("\n\n").map((p, i) => (
              <p key={`s-${i}`}>{p}</p>
            ))}
          </Reveal>
          {cs.outcomes.length > 0 && (
            <Reveal delay={100}>
              <div className="sticky top-28 rounded-2xl border border-mist-200 bg-mist-50 p-7">
                <h3 className="text-lg font-semibold text-ink-900">Outcomes</h3>
                <ul className="mt-4 space-y-3">
                  {cs.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-2.5 text-sm text-ink-700">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-coral-600" />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
