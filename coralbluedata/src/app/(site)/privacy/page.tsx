import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Privacy & Responsible Data Use",
  description: "How Coral Blue Data handles personal and business data responsibly and confidentially.",
};

const PRINCIPLES = [
  { title: "Confidential by default", body: "We treat business and personal data as confidential and limit access to those who need it." },
  { title: "Purpose-limited", body: "Data we collect through this site is used to respond to your enquiry — nothing more without consent." },
  { title: "Honest about compliance", body: "We don't auto-claim GDPR, CCPA or other frameworks. We'll confirm applicable compliance before stating it." },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy & responsible use"
        title="Responsible data, handled with care"
        description="How we think about privacy and the responsible use of business and personal data."
        crumbs={[{ label: "Privacy" }]}
      />
      <section className="section bg-white">
        <div className="container">
          <div className="grid gap-5 md:grid-cols-3">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.title} delay={i * 80} className="card p-7">
                <ShieldCheck className="h-6 w-6 text-coral-600" />
                <h2 className="mt-4 text-lg font-semibold text-ink-900">{p.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-mist-600">{p.body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="prose-cbd mt-16">
            <p className="rounded-xl border border-dashed border-mist-300 bg-mist-50 p-4 text-sm text-mist-600">
              Placeholder — the business will supply its verified privacy practices and any applicable compliance
              details. The formal policy lives at{" "}
              <Link href="/legal/privacy-policy" className="font-semibold text-coral-700">/legal/privacy-policy</Link>.
            </p>
          </Reveal>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
