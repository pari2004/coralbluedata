import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/motion/Reveal";
import { listPublishedCaseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Client outcomes with Coral Blue Data. We publish only real, approved case studies.",
};

export default async function CaseStudiesPage() {
  const studies = await listPublishedCaseStudies();
  return (
    <>
      <PageHero
        eyebrow="Outcomes"
        title="Case studies & business outcomes"
        description="Real results from real projects. We publish outcomes only with client approval."
        crumbs={[{ label: "Case Studies" }]}
      />
      <section className="section bg-mist-50">
        <div className="container">
          {studies.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {studies.map((c, i) => (
                <Reveal key={c.slug} delay={(i % 3) * 70}>
                  <Link href={`/case-studies/${c.slug}`} className="card-hover group flex h-full flex-col p-7">
                    <FileText className="h-6 w-6 text-coral-600" />
                    <h2 className="mt-4 text-lg font-semibold text-ink-900 group-hover:text-coral-700">{c.title}</h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-mist-600">{c.summary}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-coral-700">
                      Read <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal className="rounded-2xl border border-dashed border-mist-300 bg-white p-12 text-center">
              <h2 className="text-lg font-semibold text-ink-900">Case studies coming soon</h2>
              <p className="mx-auto mt-2 max-w-md text-sm text-mist-600">
                We&apos;re preparing approved client stories. We won&apos;t publish invented success stories — only
                outcomes a client has agreed to share.
              </p>
              <Link href="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-coral-700">
                Discuss your use case <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          )}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
