import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { HeroNetwork } from "@/components/site/HeroNetwork";
import { HeroContent } from "@/components/site/sections/HeroContent";

export function Hero({
  heading,
  highlight,
  subheading,
  primary,
  secondary,
}: {
  heading: string;
  /** Optional trailing phrase rendered with the gradient treatment. */
  highlight?: string;
  subheading: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink-900 pt-16 md:pt-20">
      {/* Layered background: deep ocean gradient (CSS fallback) + network canvas */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(120%_90%_at_80%_-10%,rgba(0,168,255,0.24),transparent_55%),radial-gradient(90%_80%_at_0%_10%,rgba(18,88,232,0.24),transparent_50%),radial-gradient(60%_50%_at_55%_105%,rgba(56,224,245,0.10),transparent_60%),linear-gradient(180deg,#030b18,#082746)]"
      />

      {/* Hero background image with overlay */}
      <div aria-hidden className="absolute inset-0 -z-[9]">
        <Image
          src="/images/hero-global-network.png"
          alt=""
          fill
          priority
          className="object-cover opacity-30 mix-blend-lighten"
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/40 via-transparent to-ink-900" />
      </div>

      <HeroNetwork />

      {/* Bottom gradient fade */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-[8] h-40 bg-gradient-to-b from-transparent to-ink-900"
      />

      {/* Decorative floating glow orbs */}
      <div aria-hidden className="absolute left-[10%] top-[20%] -z-[7] h-72 w-72 rounded-full bg-cyan-400/10 blur-[100px] animate-pulse-glow" />
      <div aria-hidden className="absolute right-[5%] top-[40%] -z-[7] h-96 w-96 rounded-full bg-electric-500/10 blur-[120px] animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <div className="container relative flex min-h-[calc(100vh-5rem)] flex-col justify-center py-20 md:py-28">
        <HeroContent
          heading={heading}
          highlight={highlight}
          subheading={subheading}
          primary={primary}
          secondary={secondary}
        />

        {/* Trusted by band */}
        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8">
          <p className="text-xs font-medium uppercase tracking-widest text-mist-500">
            Trusted by B2B teams worldwide
          </p>
          <div className="flex flex-wrap items-center gap-8">
            {["Enterprise", "Mid-Market", "Agency", "SaaS"].map((label) => (
              <span key={label} className="flex items-center gap-2 text-sm text-mist-400">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
