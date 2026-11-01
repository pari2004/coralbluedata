import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import type { SectionType } from "@/db/schema";

type Section = { id: string; type: SectionType; data: Record<string, unknown> };
type Item = Record<string, string>;

const items = (d: Record<string, unknown>): Item[] => (Array.isArray(d.items) ? (d.items as Item[]) : []);
const s = (v: unknown) => (typeof v === "string" ? v : "");

/** Renders CMS content blocks into premium markup, alternating surfaces. */
export function SectionRenderer({ sections }: { sections: Section[] }) {
  return (
    <>
      {sections.map((section, i) => {
        const d = section.data ?? {};
        const alt = i % 2 === 1;
        const bg = alt ? "bg-mist-50" : "bg-white";

        switch (section.type) {
          case "rich_text":
          case "hero":
            return (
              <section key={section.id} className={`section ${bg}`}>
                <div className="container max-w-3xl">
                  <Reveal className="prose-cbd">
                    {s(d.heading) && <h2 className="text-display-md text-ink-900">{s(d.heading)}</h2>}
                    {s(d.body)
                      .split("\n\n")
                      .filter(Boolean)
                      .map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}
                  </Reveal>
                </div>
              </section>
            );

          case "feature_grid":
            return (
              <section key={section.id} className={`section ${bg}`}>
                <div className="container">
                  {s(d.heading) && <h2 className="text-display-md text-ink-900">{s(d.heading)}</h2>}
                  <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {items(d).map((it, idx) => (
                      <Reveal key={idx} delay={(idx % 3) * 70} className="card p-6">
                        <h3 className="font-semibold text-ink-900">{it.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-mist-600">{it.detail}</p>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </section>
            );

          case "steps":
            return (
              <section key={section.id} className={`section ${bg}`}>
                <div className="container">
                  {s(d.heading) && <h2 className="text-display-md text-ink-900">{s(d.heading)}</h2>}
                  <ol className="mt-10 grid gap-5 md:grid-cols-4">
                    {items(d).map((it, idx) => (
                      <Reveal as="li" key={idx} delay={idx * 70} className="card p-6">
                        <span className="font-display text-sm font-semibold text-coral-600">0{idx + 1}</span>
                        <h3 className="mt-2 font-semibold text-ink-900">{it.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-mist-600">{it.detail}</p>
                      </Reveal>
                    ))}
                  </ol>
                </div>
              </section>
            );

          case "faq":
            return (
              <section key={section.id} className={`section ${bg}`}>
                <div className="container max-w-3xl">
                  {s(d.heading) && <h2 className="text-display-md text-ink-900">{s(d.heading)}</h2>}
                  <dl className="mt-8 divide-y divide-mist-200">
                    {items(d).map((it, idx) => (
                      <div key={idx} className="py-5">
                        <dt className="font-semibold text-ink-900">{it.q}</dt>
                        <dd className="mt-2 text-sm leading-relaxed text-mist-600">{it.a}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </section>
            );

          case "stat_band":
            if (items(d).length === 0) return null; // no fabricated stats
            return (
              <section key={section.id} className="section surface-dark">
                <div className="container">
                  {s(d.heading) && <h2 className="text-display-md text-white">{s(d.heading)}</h2>}
                  <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {items(d).map((it, idx) => (
                      <div key={idx}>
                        <p className="font-display text-4xl font-bold text-coral-400">{it.value}</p>
                        <p className="mt-1 text-sm text-mist-400">{it.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );

          case "cta":
            return (
              <section key={section.id} className={`section ${bg}`}>
                <div className="container">
                  <div className="rounded-3xl bg-ink-900 px-6 py-14 text-center md:px-16">
                    {s(d.heading) && <h2 className="text-display-md text-white">{s(d.heading)}</h2>}
                    {s(d.body) && <p className="mx-auto mt-4 max-w-xl text-mist-300">{s(d.body)}</p>}
                    {s(d.label) && s(d.href) && (
                      <Link href={s(d.href)} className="btn-primary mt-8">
                        {s(d.label)}
                      </Link>
                    )}
                  </div>
                </div>
              </section>
            );

          case "media":
            if (!s(d.url)) return null;
            return (
              <section key={section.id} className={`section ${bg}`}>
                <div className="container max-w-4xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s(d.url)} alt={s(d.alt)} className="w-full rounded-2xl" />
                  {s(d.caption) && <p className="mt-3 text-center text-sm text-mist-500">{s(d.caption)}</p>}
                </div>
              </section>
            );

          default:
            return null;
        }
      })}
    </>
  );
}
