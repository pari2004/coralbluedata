import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "About",
  description: "About Coral Blue Data — a B2B data intelligence company focused on accurate, responsibly-sourced data.",
};

const VALUES = [
  { title: "Accuracy over volume", body: "We'd rather give you data you can act on than a bigger list you can't trust." },
  { title: "Honest by default", body: "We describe what we actually do and don't claim capabilities or compliance we can't back." },
  { title: "Built around your workflow", body: "Data should fit how your team already works — in the formats and systems you use." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A B2B data company built on trust"
        description="Coral Blue Data helps organisations reach the right companies and contacts with data they can rely on."
        crumbs={[{ label: "About" }]}
      />

      <section className="section bg-white">
        <div className="container grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal className="prose-cbd">
            <h2>Who we are</h2>
            <p>
              Coral Blue Data provides B2B company and contact data, along with data-management services such as
              cleansing, verification, appending and enrichment.
            </p>
            <p className="rounded-xl border border-dashed border-mist-300 bg-mist-50 p-4 text-sm text-mist-600">
              Placeholder — the business will supply its verified company story, history, team and milestones.
              This copy is editable in <strong>/admin</strong> and makes no unverified claims.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-4">
              {VALUES.map((v) => (
                <div key={v.title} className="rounded-2xl border border-mist-200 bg-mist-50 p-6">
                  <h3 className="font-semibold text-ink-900">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist-600">{v.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
