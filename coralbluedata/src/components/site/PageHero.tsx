import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type Crumb = { label: string; href?: string };

/**
 * Consistent inner-page hero with breadcrumbs. Dark band so the fixed header
 * reads correctly over it (header starts transparent on dark heroes).
 */
export function PageHero({
  eyebrow,
  title,
  description,
  crumbs = [],
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink-900 pt-28 md:pt-36">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(100%_90%_at_85%_-20%,rgba(0,168,255,0.18),transparent_55%),radial-gradient(80%_60%_at_0%_0%,rgba(18,88,232,0.16),transparent_55%),linear-gradient(180deg,#061426,#082746)]"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid-fade [background-size:26px_26px] opacity-[0.1]" />
      <div className="container pb-16 md:pb-20">
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-mist-400">
              <li>
                <Link href="/" className="hover:text-coral-300">Home</Link>
              </li>
              {crumbs.map((c) => (
                <li key={c.label} className="flex items-center gap-1.5">
                  <ChevronRight className="h-3.5 w-3.5 text-mist-600" />
                  {c.href ? (
                    <Link href={c.href} className="hover:text-coral-300">{c.label}</Link>
                  ) : (
                    <span className="text-mist-200">{c.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && <p className="eyebrow mb-4 text-coral-300">{eyebrow}</p>}
        <h1 className="max-w-3xl text-display-lg text-white">{title}</h1>
        {description && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-mist-300">{description}</p>}
      </div>
    </section>
  );
}
