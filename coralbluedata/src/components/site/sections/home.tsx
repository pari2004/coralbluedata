import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Globe2, FileText, Lock, Shield, Zap, BarChart3, HeartPulse, Cpu } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Icon } from "@/components/ui/icon";
import { DataWorkflowClient } from "@/components/site/sections/DataWorkflowClient";
import { GlobalCoverageClient } from "@/components/site/sections/GlobalCoverageClient";
import { DataQualityClient } from "@/components/site/sections/DataQualityClient";

/* ============================================================ Section 06
   Interactive data workflow: Source → Validate → Enrich → Deliver.
   Clearly illustrative (labelled), not a claim about real throughput.       */
const STEPS = [
  { title: "Source", body: "Aggregate from relevant, permissioned sources for each dataset.", color: "from-cyan-400 to-coral-500" },
  { title: "Validate", body: "Apply checks to improve accuracy and remove noise and duplicates.", color: "from-coral-500 to-electric-500" },
  { title: "Enrich", body: "Add the firmographic and contact attributes your team needs.", color: "from-electric-500 to-cyan-400" },
  { title: "Deliver", body: "Provide the data in your preferred format, system or cadence.", color: "from-accent-400 to-accent-600" },
];

export function DataWorkflow() {
  return (
    <section className="section bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div aria-hidden className="absolute right-0 top-0 h-96 w-96 rounded-full bg-coral-50 blur-[120px] opacity-60" />
      <div className="container relative">
        <Reveal className="max-w-2xl">
          <p className="eyebrow mb-4">How it works</p>
          <h2 className="text-display-md text-ink-900">From raw sources to data your team can act on</h2>
          <p className="mt-4 leading-relaxed text-mist-600">
            A conceptual view of how we prepare data. This illustrates the process — it is not a claim about
            volumes or performance.
          </p>
        </Reveal>

        <DataWorkflowClient steps={STEPS.map(s => ({ title: s.title, body: s.body, color: s.color }))} />
      </div>
    </section>
  );
}

/* ============================================================ Section 07
   Global coverage preview with AI-generated global coverage image.          */
export function GlobalCoveragePreview({ regions }: { regions: { region: string; detail: string }[] }) {
  return (
    <section className="section surface-dark relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-grid-fade [background-size:30px_30px] opacity-[0.1]" />
      {/* Glow orbs */}
      <div aria-hidden className="absolute left-[20%] top-[10%] h-80 w-80 rounded-full bg-cyan-400/8 blur-[100px]" />
      <div aria-hidden className="absolute right-[10%] bottom-[10%] h-96 w-96 rounded-full bg-electric-500/8 blur-[120px]" />

      <div className="container relative grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="eyebrow mb-4 text-coral-300">Global coverage</p>
          <h2 className="text-display-md text-white">Data that reflects where your market actually is</h2>
          {regions.length > 0 ? (
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {regions.map((r) => (
                <li key={r.region} className="card-glass p-4">
                  <span className="flex items-center gap-2 font-semibold text-white">
                    <Globe2 className="h-4 w-4 text-cyan-400" /> {r.region}
                  </span>
                  <span className="mt-1 block text-sm text-mist-400">{r.detail}</span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-8 rounded-xl border border-dashed border-white/15 p-6 text-sm text-mist-400">
              Confirmed coverage regions will appear here once verified by the business. We don&apos;t claim
              coverage we can&apos;t stand behind.
            </div>
          )}
          <Link href="/coverage" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-coral-300 hover:text-cyan-400 transition-colors">
            See coverage detail <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>

        <Reveal delay={120} className="relative">
          <GlobalCoverageClient />
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================ Section 08
   Industry solutions preview with images.                                   */
const INDUSTRY_IMAGES: Record<string, { src: string; icon: React.ElementType }> = {
  healthcare: { src: "/images/healthcare-data.png", icon: HeartPulse },
  technology: { src: "/images/technology-business.png", icon: Cpu },
};

export function IndustryPreview({ industries }: { industries: { slug: string; title: string; summary: string; icon: string }[] }) {
  if (industries.length === 0) return null;
  return (
    <section className="section bg-mist-50 relative overflow-hidden">
      <div aria-hidden className="absolute left-0 bottom-0 h-80 w-80 rounded-full bg-coral-100 blur-[120px] opacity-40" />
      <div className="container relative">
        <Reveal className="max-w-2xl">
          <p className="eyebrow mb-4">Industries</p>
          <h2 className="text-display-md text-ink-900">Tuned to the sectors you sell into</h2>
          <p className="mt-4 leading-relaxed text-mist-600">
            Industry-specific datasets built for teams that need precise targeting in their vertical.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <Reveal key={ind.slug} delay={(i % 3) * 80}>
              <Link href={`/industries/${ind.slug}`} className="card-hover group flex h-full items-start gap-4 p-6">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-electric-500/20 to-coral-500/10 text-electric-600">
                  <Icon name={ind.icon} className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-semibold text-ink-900 group-hover:text-coral-700 transition-colors">{ind.title}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-mist-600">{ind.summary}</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Industry hero images */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <Reveal className="relative overflow-hidden rounded-2xl group">
            <div className="relative aspect-[16/10] img-overlay">
              <Image
                src="/images/healthcare-data.png"
                alt="Healthcare data intelligence"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white">
                <HeartPulse className="h-3.5 w-3.5" /> Healthcare
              </span>
              <p className="mt-2 text-sm text-white/90">Precision data for healthcare organizations worldwide</p>
            </div>
          </Reveal>
          <Reveal delay={100} className="relative overflow-hidden rounded-2xl group">
            <div className="relative aspect-[16/10] img-overlay">
              <Image
                src="/images/technology-business.png"
                alt="Technology business intelligence"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white">
                <Cpu className="h-3.5 w-3.5" /> Technology
              </span>
              <p className="mt-2 text-sm text-white/90">Enterprise tech data for modern B2B sales teams</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============================================================ Section 09
   Data quality & verification methodology with AI-generated image.          */
export function DataQualityPreview() {
  const controls = [
    { label: "Standardisation and de-duplication", icon: Shield },
    { label: "Source-based verification checks", icon: Zap },
    { label: "Scheduled refresh to limit decay", icon: BarChart3 },
    { label: "Documented, repeatable process", icon: Cpu },
  ];
  return (
    <section className="section bg-white relative overflow-hidden">
      <div aria-hidden className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-electric-50 blur-[120px] opacity-40" />
      <div className="container relative grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="eyebrow mb-4">Data quality</p>
          <h2 className="text-display-md text-ink-900">Quality is a process, not a promise</h2>
          <p className="mt-4 leading-relaxed text-mist-600">
            We describe our methodology rather than headline accuracy numbers. We won&apos;t quote a specific
            accuracy percentage without evidence to back it.
          </p>
          <ul className="mt-8 space-y-4">
            {controls.map((c) => (
              <li key={c.label} className="flex items-center gap-4 group">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-coral-500/15 to-electric-500/10 text-coral-600 transition-colors group-hover:from-coral-500/25 group-hover:to-electric-500/20">
                  <c.icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium text-ink-800">{c.label}</span>
              </li>
            ))}
          </ul>
          <Link href="/data-quality" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-coral-700 hover:text-electric-600 transition-colors">
            Our approach to quality <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
        <Reveal delay={120}>
          <DataQualityClient />
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================ Section 10
   Delivery & integrations — honest about what exists.                      */
export function DataDelivery() {
  const formats = [
    { title: "File export", body: "CSV / Excel exports in the structure your team expects.", icon: FileText },
    { title: "Scheduled feeds", body: "Refreshed data delivered on a cadence you choose.", icon: Zap },
    { title: "API / licensing", body: "Programmatic delivery where a project calls for it.", icon: Cpu },
  ];
  return (
    <section className="section surface-dark relative overflow-hidden">
      {/* Glow decoration */}
      <div aria-hidden className="absolute left-1/2 top-0 -translate-x-1/2 h-64 w-[600px] rounded-full bg-cyan-400/6 blur-[100px]" />
      <div className="container relative">
        <Reveal className="max-w-2xl">
          <p className="eyebrow mb-4 text-coral-300">Delivery</p>
          <h2 className="text-display-md text-white">Delivered the way your systems work</h2>
          <p className="mt-4 leading-relaxed text-mist-300">
            We&apos;ll confirm the exact delivery options for your project. We won&apos;t imply an API or dashboard
            exists where it doesn&apos;t.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {formats.map((f, i) => (
            <Reveal key={f.title} delay={i * 80} className="card-glass p-8 group">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-electric-500/10 text-cyan-400 transition-all group-hover:shadow-[0_0_30px_-5px_rgba(32,197,245,0.3)]">
                <f.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist-400">{f.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================ Section 11
   Case studies — honest empty state when none verified.                    */
export function CaseStudiesPreview({ caseStudies }: { caseStudies: { slug: string; title: string; summary: string }[] }) {
  return (
    <section className="section bg-mist-50">
      <div className="container">
        <Reveal className="max-w-2xl">
          <p className="eyebrow mb-4">Outcomes</p>
          <h2 className="text-display-md text-ink-900">Case studies &amp; business outcomes</h2>
        </Reveal>
        {caseStudies.length > 0 ? (
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 3) * 80}>
                <Link href={`/case-studies/${c.slug}`} className="card-hover flex h-full flex-col p-7 group">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-coral-500/15 to-accent-500/10 text-coral-600">
                    <FileText className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-ink-900 group-hover:text-coral-700 transition-colors">{c.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-mist-600">{c.summary}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-coral-700 group-hover:text-electric-600 transition-colors">
                    Read case study <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className="mt-10 rounded-2xl border border-dashed border-mist-300 bg-white p-10 text-center">
            <p className="text-mist-600">
              Verified case studies are on the way. We publish outcomes only with client approval — no invented
              success stories.
            </p>
            <Link href="/contact" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-coral-700">
              Discuss your use case <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  );
}

/* ============================================================ Section 12
   Privacy & responsible data use.                                          */
export function PrivacyPreview() {
  return (
    <section className="section bg-white">
      <div className="container">
        <Reveal className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-mist-200 bg-gradient-to-br from-mist-50 to-white p-10 text-center md:p-14 relative">
          {/* Subtle gradient decoration */}
          <div aria-hidden className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-coral-100 blur-[80px] opacity-60" />
          <span className="relative mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-ink-900 to-ink-800 text-coral-400 shadow-lg">
            <Lock className="h-6 w-6" />
          </span>
          <h2 className="relative mt-6 text-display-md text-ink-900">Responsible data, handled with care</h2>
          <p className="relative mx-auto mt-4 max-w-xl leading-relaxed text-mist-600">
            We treat business and personal data as confidential and describe our actual practices. We don&apos;t
            auto-claim GDPR, CCPA or other compliance without confirming it first.
          </p>
          <Link href="/privacy" className="relative mt-8 inline-flex items-center gap-2 text-sm font-semibold text-coral-700 hover:text-electric-600 transition-colors">
            How we handle data <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================ Section 13
   Insights & resources.                                                    */
export function InsightsPreview({ articles }: { articles: { slug: string; title: string; summary: string }[] }) {
  if (articles.length === 0) return null;
  return (
    <section className="section bg-mist-50">
      <div className="container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-2xl">
            <p className="eyebrow mb-4">Insights</p>
            <h2 className="text-display-md text-ink-900">Guides &amp; resources on B2B data</h2>
          </Reveal>
          <Reveal delay={80}>
            <Link href="/resources" className="inline-flex items-center gap-2 text-sm font-semibold text-coral-700 hover:text-electric-600 transition-colors">
              All resources <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {articles.map((a, i) => (
            <Reveal key={a.slug} delay={i * 80}>
              <Link href={`/resources/${a.slug}`} className="card-hover group flex h-full flex-col p-7">
                <span className="text-xs font-semibold uppercase tracking-wider text-coral-600">Article</span>
                <h3 className="mt-3 text-lg font-semibold text-ink-900 group-hover:text-coral-700 transition-colors">{a.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-mist-600">{a.summary}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-coral-700">
                  Read <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
