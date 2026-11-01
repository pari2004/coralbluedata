import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { ChallengeVisual } from "@/components/site/sections/ChallengeVisual";

/**
 * "The business challenge" — editorial section contrasting the cost of bad data
 * with the shape of a better approach. Now features the AI-generated corporate
 * team image alongside the original SVG visualization.
 */
const PROBLEMS = [
  { stat: "Stale records", body: "Contacts change roles and companies constantly — lists decay the moment they're built." },
  { stat: "Wrong targets", body: "Generic data means reps chase accounts that were never a fit in the first place." },
  { stat: "Fragmented sources", body: "Data scattered across tools makes a single, trustworthy view hard to maintain." },
];

export function Challenge() {
  return (
    <section className="section surface-dark relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-grid-fade [background-size:26px_26px] opacity-[0.12]" />
      {/* Glow orbs */}
      <div aria-hidden className="absolute right-[10%] top-[20%] h-80 w-80 rounded-full bg-electric-500/8 blur-[100px]" />
      <div aria-hidden className="absolute left-[5%] bottom-[10%] h-64 w-64 rounded-full bg-cyan-400/6 blur-[80px]" />

      <div className="container relative grid gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="eyebrow mb-4 text-coral-300">The challenge</p>
          <h2 className="text-display-md text-white">
            Finding the right companies and contacts is harder than it should be
          </h2>
          <p className="mt-6 max-w-lg leading-relaxed text-mist-300">
            B2B teams lose time and pipeline to data that&apos;s incomplete, out of date, or simply
            aimed at the wrong accounts. The problem isn&apos;t too little data — it&apos;s data you can&apos;t
            rely on.
          </p>
          <ul className="mt-8 space-y-5">
            {PROBLEMS.map((p, i) => (
              <li key={p.stat} className="flex gap-4 group">
                <span className="mt-1.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400/20 to-electric-500/10">
                  <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_2px_rgba(32,197,245,0.65)]" />
                </span>
                <span>
                  <span className="block font-semibold text-white group-hover:text-cyan-400 transition-colors">{p.stat}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-mist-400">{p.body}</span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className="relative">
          <ChallengeVisual />
        </Reveal>
      </div>
    </section>
  );
}
