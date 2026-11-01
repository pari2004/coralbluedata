import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/motion/Reveal";
import { Icon } from "@/components/ui/icon";
import { getPublishedService, listPublishedServices } from "@/lib/content";

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = await getPublishedService(slug);
  if (!service) return { title: "Solution not found" };
  return {
    title: service.seoTitle || service.title,
    description: service.seoDescription || service.summary,
  };
}

export default async function ServiceDetailPage({ params }: Params) {
  const { slug } = await params;
  const service = await getPublishedService(slug);
  if (!service) notFound();

  const all = await listPublishedServices();
  const related = all.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Solution"
        title={service.heroHeading || service.title}
        description={service.heroSubheading || service.summary}
        crumbs={[{ label: "Solutions", href: "/solutions" }, { label: service.title }]}
      />

      <section className="section bg-white">
        <div className="container grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          {/* Body */}
          <Reveal className="prose-cbd">
            {service.body.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}

            {service.useCases.length > 0 && (
              <>
                <h2>Where it helps</h2>
                <ul>
                  {service.useCases.map((u) => (
                    <li key={u}>{u}</li>
                  ))}
                </ul>
              </>
            )}
          </Reveal>

          {/* Benefits sidebar */}
          <Reveal delay={100}>
            <div className="sticky top-28 rounded-2xl border border-mist-200 bg-mist-50 p-7">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-coral-500/10 text-coral-600">
                <Icon name={service.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink-900">Key benefits</h3>
              {service.benefits.length > 0 ? (
                <ul className="mt-4 space-y-3">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-ink-700">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-coral-600" />
                      {b}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-sm text-mist-500">Benefits to be confirmed.</p>
              )}
              <Link href="/request-a-quote" className="btn-primary mt-6 w-full">
                Request a quote
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Workflow */}
      {service.workflow.length > 0 && (
        <section className="section surface-dark">
          <div className="container">
            <Reveal className="max-w-2xl">
              <p className="eyebrow mb-4 text-coral-300">Process</p>
              <h2 className="text-display-md text-white">How we deliver this</h2>
            </Reveal>
            <ol className="mt-12 grid gap-5 md:grid-cols-4">
              {service.workflow.map((step, i) => (
                <Reveal as="li" key={step.title} delay={i * 80} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <span className="font-display text-sm font-semibold text-coral-400">0{i + 1}</span>
                  <h3 className="mt-3 text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist-400">{step.detail}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* Related */}
      {related.length > 0 && (
        <section className="section bg-mist-50">
          <div className="container">
            <h2 className="text-display-md text-ink-900">Related solutions</h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {related.map((r) => (
                <Link key={r.slug} href={`/solutions/${r.slug}`} className="card-hover group flex items-center justify-between gap-4 p-6">
                  <span className="flex items-center gap-3">
                    <Icon name={r.icon} className="h-5 w-5 text-coral-600" />
                    <span className="font-semibold text-ink-900 group-hover:text-coral-700">{r.title}</span>
                  </span>
                  <ArrowRight className="h-4 w-4 text-mist-400 transition-transform group-hover:translate-x-1" />
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
