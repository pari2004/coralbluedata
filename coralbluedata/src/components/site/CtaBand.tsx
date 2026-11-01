import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getCta, getSettings } from "@/lib/content";

/**
 * Reusable conversion band driven by the CMS `cta_blocks` ("primary" key),
 * with a sensible fallback. Explains what happens after submitting.
 * Now features the AI-generated hero image as a background.
 */
export async function CtaBand() {
  const [cta, settings] = await Promise.all([getCta("primary"), getSettings()]);
  const heading = cta?.heading ?? "Ready to work with better data?";
  const body =
    cta?.body ??
    "Tell us what you're trying to reach. We'll review your requirements and respond with next steps.";
  const label = cta?.label ?? settings?.primaryCtaLabel ?? "Request a Quote";
  const href = cta?.href ?? settings?.primaryCtaHref ?? "/request-a-quote";

  return (
    <section className="section">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-ink-900 px-6 py-16 text-center md:px-16 md:py-24">
          {/* Background image layer */}
          <div className="absolute inset-0 -z-[1]">
            <Image
              src="/images/hero-global-network.png"
              alt=""
              fill
              className="object-cover opacity-20 mix-blend-lighten"
              sizes="100vw"
            />
          </div>

          {/* Gradient overlays */}
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(100%_120%_at_50%_-20%,rgba(32,197,245,0.22),transparent_60%),radial-gradient(80%_90%_at_85%_120%,rgba(18,88,232,0.18),transparent_55%)]"
          />
          {/* Glow orbs */}
          <div aria-hidden className="absolute left-[10%] top-[20%] h-40 w-40 rounded-full bg-cyan-400/10 blur-[60px] animate-pulse-glow" />
          <div aria-hidden className="absolute right-[15%] bottom-[20%] h-48 w-48 rounded-full bg-electric-500/10 blur-[80px] animate-pulse-glow" style={{ animationDelay: "2s" }} />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-display-md text-white">{heading}</h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-mist-300">{body}</p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href={href} className="btn-primary group">
                {label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link href="/contact" className="btn-ghost-dark">
                Talk to us
              </Link>
            </div>
            <p className="mt-8 text-xs text-mist-500">
              After you submit, a specialist reviews your request and replies by email — typically within two
              business days.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
