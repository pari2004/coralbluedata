import Image from "next/image";
import { Target, RefreshCcw, ShieldCheck, Workflow } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { ValuePropClient } from "@/components/site/sections/ValuePropClient";

/**
 * Trust / value section. We have NO verified customer logos, metrics or
 * testimonials yet (see PROJECT_AUDIT §1.1), so this is a value-proposition
 * band — honest pillars, no invented numbers or brands. When the business
 * supplies verified proof, a logo strip / testimonial set can replace this.
 */
const PILLARS = [
  {
    icon: "Target",
    title: "Right-fit targeting",
    body: "Reach the companies and roles that match your ideal customer — not a generic list.",
    gradient: "from-cyan-400/20 to-coral-500/10",
  },
  {
    icon: "ShieldCheck",
    title: "Verification-first",
    body: "Records are checked against sources so your team wastes less time on bad data.",
    gradient: "from-electric-500/20 to-coral-500/10",
  },
  {
    icon: "RefreshCcw",
    title: "Kept current",
    body: "A maintainable process to reduce data decay and keep records usable over time.",
    gradient: "from-coral-500/20 to-accent-500/10",
  },
  {
    icon: "Workflow",
    title: "Fits your workflow",
    body: "Delivered in the formats and systems your team already uses, not ours.",
    gradient: "from-accent-500/15 to-electric-500/10",
  },
];

export function ValueProp() {
  return (
    <section className="section bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div aria-hidden className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-400/5 blur-[120px]" />
      <div aria-hidden className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-electric-500/5 blur-[100px]" />

      <div className="container relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="eyebrow mb-4">Why teams choose us</p>
            <h2 className="text-display-md text-ink-900">
              Better decisions start with data you don&apos;t have to second-guess
            </h2>
            <p className="mt-4 max-w-lg leading-relaxed text-mist-600">
              Our data intelligence platform helps B2B teams identify, validate, and engage the right accounts with confidence.
            </p>

            {/* Dashboard image preview */}
            <Reveal delay={150} className="mt-8 overflow-hidden rounded-2xl border border-mist-200 shadow-card group">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/images/data-intelligence-dashboard.png"
                  alt="Coral Blue Data intelligence dashboard"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>
          </Reveal>

          <ValuePropClient pillars={PILLARS} />
        </div>

        <p className="mt-10 text-xs text-mist-400">
          Customer references and verified metrics will be added here as the business confirms them.
        </p>
      </div>
    </section>
  );
}
