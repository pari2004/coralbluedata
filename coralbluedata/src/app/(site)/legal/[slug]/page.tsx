import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Legal pages. Content is honest placeholder pending the business's own
 * reviewed legal text (clearly marked). Keeping these as real routes means the
 * footer links resolve instead of 404-ing. Each is editable later via the CMS
 * or replaced with counsel-approved copy.
 */
const DOCS: Record<string, { title: string; intro: string; sections: { h: string; p: string }[] }> = {
  "privacy-policy": {
    title: "Privacy Policy",
    intro:
      "This placeholder describes the structure of our privacy policy. It must be replaced with the business's reviewed policy before launch.",
    sections: [
      { h: "Information we collect", p: "Details you provide through our forms (such as name, email and company) and basic technical data." },
      { h: "How we use it", p: "To respond to your enquiry and provide the services you request. We do not sell your personal contact details." },
      { h: "Data retention", p: "We keep enquiry data only as long as needed to respond and for legitimate business records." },
      { h: "Your rights", p: "You can request access to, correction of, or deletion of your data. Applicable rights depend on your jurisdiction." },
      { h: "Contact", p: "Reach us via the contact page for any privacy request." },
    ],
  },
  terms: {
    title: "Terms of Service",
    intro: "Placeholder terms outline. Replace with the business's reviewed terms before launch.",
    sections: [
      { h: "Use of the site", p: "This website is provided for information about our data products and services." },
      { h: "No warranty on illustrative content", p: "Illustrative figures and diagrams are examples, not guarantees of specific outcomes." },
      { h: "Engagements", p: "Any data services are governed by a separate agreement confirmed in writing." },
    ],
  },
  "cookie-policy": {
    title: "Cookie Policy",
    intro: "Placeholder cookie policy. Replace with the business's reviewed policy and actual cookie inventory.",
    sections: [
      { h: "Essential cookies", p: "Used for core functionality such as keeping you signed in to the admin area." },
      { h: "Analytics", p: "Analytics are only used if configured and authorised; none are set without that." },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(DOCS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const doc = DOCS[slug];
  return doc ? { title: doc.title, description: doc.intro, robots: { index: false } } : { title: "Not found" };
}

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = DOCS[slug];
  if (!doc) notFound();

  return (
    <>
      <PageHero eyebrow="Legal" title={doc.title} crumbs={[{ label: doc.title }]} />
      <section className="section bg-white">
        <div className="container max-w-3xl">
          <Reveal className="prose-cbd">
            <p className="rounded-xl border border-dashed border-amber-300 bg-amber-50 p-4 text-sm text-amber-800">
              {doc.intro}
            </p>
            {doc.sections.map((s) => (
              <div key={s.h}>
                <h2>{s.h}</h2>
                <p>{s.p}</p>
              </div>
            ))}
            <p className="mt-8 text-sm text-mist-500">Last updated: pending publication.</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
