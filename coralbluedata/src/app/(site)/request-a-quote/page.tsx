import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { EnquiryForm } from "@/components/site/EnquiryForm";

export const metadata: Metadata = {
  title: "Request a Quote",
  description: "Request a custom quote for B2B data or data-management services from Coral Blue Data.",
};

const STEPS = [
  "You share your targeting criteria and how you'll use the data.",
  "A specialist reviews feasibility and scope.",
  "We respond with next steps and, where relevant, a sample.",
];

export default function RequestQuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Request a Quote"
        title="Tell us what you need"
        description="Share your requirements and we'll prepare a tailored response. No obligation."
        crumbs={[{ label: "Request a Quote" }]}
      />
      <section className="section bg-mist-50">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 className="text-xl font-semibold text-ink-900">What happens next</h2>
            <ol className="mt-6 space-y-5">
              {STEPS.map((s, i) => (
                <li key={i} className="flex gap-4">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-coral-500 text-sm font-bold text-ink-950">
                    {i + 1}
                  </span>
                  <p className="pt-1 text-sm leading-relaxed text-mist-700">{s}</p>
                </li>
              ))}
            </ol>
            <div className="mt-8 rounded-2xl border border-mist-200 bg-white p-6">
              <ul className="space-y-3 text-sm text-ink-700">
                {["No obligation", "Your details kept confidential", "Real human review"].map((t) => (
                  <li key={t} className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-coral-600" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-mist-200 bg-white p-7 shadow-card md:p-10">
            <EnquiryForm source="quote" />
          </div>
        </div>
      </section>
    </>
  );
}
