import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, Zap, RefreshCcw, Database, BarChart3 } from "lucide-react";
import { NavPageHero } from "@/components/site/NavPageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Data Quality",
  description: "How Coral Blue Data approaches data quality: standardisation, verification, and reducing decay.",
};

const DIMENSIONS = [
  { icon: CheckCircle2, title: "Accuracy", body: "Records are checked against sources to reduce errors and bounces.", color: "text-coral-600 bg-coral-500/10" },
  { icon: Database, title: "Completeness", body: "We fill the fields your team needs to segment and act, not just the obvious ones.", color: "text-electric-600 bg-electric-500/10" },
  { icon: RefreshCcw, title: "Consistency", body: "Standardised formats and de-duplication keep your database coherent.", color: "text-cyan-600 bg-cyan-400/10" },
  { icon: Zap, title: "Timeliness", body: "Scheduled refreshes help limit decay as companies and contacts change.", color: "text-accent-600 bg-accent-500/10" },
];

const QUALITY_IMAGES = [
  {
    src: "/images/navigation/data-quality-verification.webp",
    alt: "Data verification process",
    label: "Verification",
    description: "Source-based checks to confirm contact and company data is current and accurate.",
  },
  {
    src: "/images/navigation/data-quality-cleansing.svg",
    alt: "Data cleansing pipeline",
    label: "Cleansing",
    description: "Automated de-duplication and standardisation to remove noise from your database.",
  },
  {
    src: "/images/navigation/data-quality-security.webp",
    alt: "Data security and compliance",
    label: "Security",
    description: "Privacy-conscious handling with documented access controls and data governance.",
  },
];

const PROCESS_STEPS = [
  { step: "01", title: "Ingest", body: "Data is received from permissioned sources and staged for processing." },
  { step: "02", title: "Standardise", body: "Field formats, naming conventions and phone numbers are normalised." },
  { step: "03", title: "Deduplicate", body: "Duplicate detection removes redundant records across sources." },
  { step: "04", title: "Verify", body: "Source-based checks validate key attributes against reference data." },
  { step: "05", title: "Enrich", body: "Missing firmographic attributes are appended where possible." },
  { step: "06", title: "Deliver", body: "Clean, verified data is delivered in your preferred format." },
];

const HERO_SLIDES = [
  { src: "/images/navigation/data-quality-hero.webp", alt: "3D data verification environment" },
  { src: "/images/navigation/data-quality-checks.webp", alt: "Records being verified across a network" },
  { src: "/images/navigation/data-quality-verification.webp", alt: "Data verification process" },
  { src: "/images/navigation/data-quality-grid.svg", alt: "Grid of records being checked" },
  { src: "/images/navigation/data-quality-cleansing.svg", alt: "Messy records cleansed into standard rows" },
  { src: "/images/navigation/data-quality-security.webp", alt: "Data security and compliance" },
];

export default function DataQualityPage() {
  return (
    <>
      <NavPageHero
        eyebrow="Data quality"
        title="Quality is a process,"
        titleHighlight="not a headline number"
        description="We describe our methodology rather than quoting an accuracy percentage we can't evidence. Transparent, repeatable, documented."
        primaryCta={{ label: "Request a Quote", href: "/request-a-quote" }}
        secondaryCta={{ label: "Our methodology", href: "#methodology" }}
        imageSrc="/images/navigation/data-quality-hero.webp"
        imageAlt="3D data verification and quality environment"
        images={HERO_SLIDES}
        accent="electric"
      />

      {/* Quality dimensions */}
      <section className="section bg-white relative overflow-hidden">
        <div aria-hidden className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-400/5 blur-[120px]" />
        <div className="container relative">
          <Reveal className="max-w-2xl mb-14">
            <p className="eyebrow mb-4">Four dimensions</p>
            <h2 className="text-display-md text-ink-900">How we define quality data</h2>
            <p className="mt-4 leading-relaxed text-mist-600">
              Good data isn&apos;t just a high accuracy claim — it&apos;s measurable across four distinct dimensions that together determine whether your team can actually use it.
            </p>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {DIMENSIONS.map((d, i) => (
              <Reveal key={d.title} delay={(i % 4) * 70} className="card p-7 group hover:-translate-y-1 transition-all duration-300 hover:shadow-lift">
                <span className={`grid h-12 w-12 place-items-center rounded-xl ${d.color}`}>
                  <d.icon className="h-6 w-6" />
                </span>
                <h2 className="mt-5 text-lg font-semibold text-ink-900">{d.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-mist-600">{d.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process visualization images */}
      <section className="section bg-mist-50 relative overflow-hidden">
        <div aria-hidden className="absolute right-0 top-0 h-80 w-80 rounded-full bg-electric-50 blur-[120px] opacity-50" />
        <div className="container relative">
          <Reveal className="max-w-2xl mb-12">
            <p className="eyebrow mb-4">Our approach</p>
            <h2 className="text-display-md text-ink-900">Verification, cleansing and security</h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {QUALITY_IMAGES.map((img, i) => (
              <Reveal key={img.label} delay={i * 80} className="group overflow-hidden rounded-2xl border border-mist-200 shadow-card hover:-translate-y-1 transition-all duration-300 hover:shadow-lift">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    unoptimized={img.src.endsWith(".svg")}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-sm font-semibold text-white">{img.label}</span>
                  </div>
                </div>
                <div className="p-5 bg-white">
                  <p className="text-sm leading-relaxed text-mist-600">{img.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6-step process */}
      <section className="section surface-dark relative overflow-hidden" id="methodology">
        <div aria-hidden className="absolute inset-0 bg-grid-fade [background-size:28px_28px] opacity-[0.1]" />
        <div aria-hidden className="absolute left-1/2 top-0 -translate-x-1/2 h-64 w-[600px] rounded-full bg-cyan-400/6 blur-[100px]" />
        <div className="container relative">
          <Reveal className="max-w-2xl mb-14">
            <p className="eyebrow mb-4 text-coral-300">Methodology</p>
            <h2 className="text-display-md text-white">Our verification approach</h2>
            <p className="mt-4 leading-relaxed text-mist-300">
              A documented, repeatable pipeline. The exact checks depend on the dataset and your requirements — we never promise what we can&apos;t evidence.
            </p>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PROCESS_STEPS.map((s, i) => (
              <Reveal key={s.step} delay={(i % 3) * 80} className="card-glass p-7 group">
                <span className="font-display text-4xl font-bold text-gradient">{s.step}</span>
                <h3 className="mt-3 text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist-400">{s.body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 rounded-xl border border-dashed border-white/15 p-6 text-sm text-mist-400">
            Placeholder — the business will supply specific quality controls, verification sources and any accuracy commitments it can evidence. Editable in <strong className="text-mist-300">/admin</strong>.
          </Reveal>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
