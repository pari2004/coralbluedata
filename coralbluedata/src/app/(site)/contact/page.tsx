import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { getSettings } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Coral Blue Data about B2B data, data services, or a custom project.",
};

export default async function ContactPage() {
  const settings = await getSettings();
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your data"
        description="Tell us what you're trying to reach and how your team works. We'll respond with next steps."
        crumbs={[{ label: "Contact" }]}
      />
      <section className="section bg-mist-50">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 className="text-xl font-semibold text-ink-900">Reach us</h2>
            <ul className="mt-6 space-y-5 text-sm">
              {settings?.contactEmail ? (
                <ContactRow icon={Mail} label="Email">
                  <a href={`mailto:${settings.contactEmail}`} className="text-coral-700 hover:underline">
                    {settings.contactEmail}
                  </a>
                </ContactRow>
              ) : (
                <ContactRow icon={Mail} label="Email">
                  <span className="text-mist-500">Use the form — email is set up in the CMS once confirmed.</span>
                </ContactRow>
              )}
              {settings?.contactPhone && (
                <ContactRow icon={Phone} label="Phone">
                  <a href={`tel:${settings.contactPhone}`} className="text-ink-800">{settings.contactPhone}</a>
                </ContactRow>
              )}
              {settings?.contactAddress && (
                <ContactRow icon={MapPin} label="Office">
                  <span className="whitespace-pre-line text-ink-800">{settings.contactAddress}</span>
                </ContactRow>
              )}
              <ContactRow icon={Clock} label="Response time">
                <span className="text-ink-800">Typically within two business days.</span>
              </ContactRow>
            </ul>
          </div>

          <div className="rounded-3xl border border-mist-200 bg-white p-7 shadow-card md:p-10">
            <h2 className="text-xl font-semibold text-ink-900">Send an enquiry</h2>
            <p className="mt-2 text-sm text-mist-600">Fields marked * are required.</p>
            <div className="mt-6">
              <EnquiryForm source="contact" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ElementType;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink-900 text-coral-400">
        <Icon className="h-4 w-4" />
      </span>
      <span>
        <span className="block text-xs font-semibold uppercase tracking-wider text-mist-500">{label}</span>
        <span className="mt-0.5 block">{children}</span>
      </span>
    </li>
  );
}
