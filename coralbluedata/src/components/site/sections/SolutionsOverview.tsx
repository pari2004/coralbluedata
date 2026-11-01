import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Icon } from "@/components/ui/icon";

export type SolutionCard = {
  slug: string;
  title: string;
  summary: string;
  icon: string;
};

export function SolutionsOverview({ services }: { services: SolutionCard[] }) {
  return (
    <section className="section bg-mist-50 relative overflow-hidden" id="solutions">
      {/* Background decorations */}
      <div aria-hidden className="absolute right-0 top-0 h-96 w-96 rounded-full bg-electric-50 blur-[120px] opacity-50" />
      <div aria-hidden className="absolute left-0 bottom-0 h-80 w-80 rounded-full bg-coral-50 blur-[100px] opacity-40" />

      <div className="container relative">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-2xl">
            <p className="eyebrow mb-4">Solutions</p>
            <h2 className="text-display-md text-ink-900">
              Data and services that cover the full lifecycle
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-mist-600">
              From prospecting to enrichment, verification to delivery — integrated solutions for every stage of your data pipeline.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <Link href="/solutions" className="group inline-flex items-center gap-2 text-sm font-semibold text-coral-700 hover:text-electric-600 transition-colors">
              View all solutions
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>

        {services.length === 0 ? (
          <p className="mt-12 rounded-2xl border border-dashed border-mist-300 p-10 text-center text-mist-500">
            No solutions are published yet. Add them in <span className="font-semibold">/admin</span>.
          </p>
        ) : (
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 80}>
                <Link href={`/solutions/${s.slug}`} className="card-hover group flex h-full flex-col p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-ink-900 to-ink-800 text-cyan-400 shadow-md transition-all duration-300 group-hover:shadow-[0_0_24px_-4px_rgba(32,197,245,0.4)] group-hover:from-coral-500 group-hover:to-electric-500 group-hover:text-white">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 text-lg font-semibold text-ink-900 group-hover:text-coral-700 transition-colors">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-mist-600">{s.summary}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-coral-700 group-hover:text-electric-600 transition-colors">
                    Explore
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
