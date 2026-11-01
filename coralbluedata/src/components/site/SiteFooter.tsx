import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { listNav, getSettings } from "@/lib/content";

/**
 * Comprehensive footer. Renders contact rows and social links ONLY when the
 * business has supplied them (brief: never render empty links or invented
 * contact details). Columns come from CMS-managed nav menus.
 */
export async function SiteFooter() {
  const [solutions, servicesCol, resources, company, settings] = await Promise.all([
    listNav("footer_solutions"),
    listNav("footer_services"),
    listNav("footer_resources"),
    listNav("footer_company"),
    getSettings(),
  ]);

  const year = new Date().getFullYear();
  const social = settings?.socialLinks ?? [];

  return (
    <footer className="surface-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-fade [background-size:28px_28px] opacity-20" aria-hidden />
      <div className="container relative py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1fr]">
          {/* Brand + contact */}
          <div>
            <Image
              src="/images/brand/coralbluedata-logo-light.png"
              alt="Coral Blue Data — Data Driven Solution"
              width={711}
              height={138}
              className="h-12 w-auto md:h-14"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist-400">
              {settings?.footerTagline ?? "B2B data intelligence for teams that depend on accurate data."}
            </p>
            {(settings?.contactEmail || settings?.contactPhone || settings?.contactAddress) && (
              <ul className="mt-6 space-y-3 text-sm text-mist-300">
                {settings?.contactEmail && (
                  <li className="flex items-center gap-2.5">
                    <Mail className="h-4 w-4 text-coral-400" />
                    <a href={`mailto:${settings.contactEmail}`} className="hover:text-white">
                      {settings.contactEmail}
                    </a>
                  </li>
                )}
                {settings?.contactPhone && (
                  <li className="flex items-center gap-2.5">
                    <Phone className="h-4 w-4 text-coral-400" />
                    <a href={`tel:${settings.contactPhone}`} className="hover:text-white">
                      {settings.contactPhone}
                    </a>
                  </li>
                )}
                {settings?.contactAddress && (
                  <li className="flex items-start gap-2.5">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-coral-400" />
                    <span className="whitespace-pre-line">{settings.contactAddress}</span>
                  </li>
                )}
              </ul>
            )}
          </div>

          <FooterCol title="Solutions" items={solutions} />
          <FooterCol title="Services" items={servicesCol} />
          <FooterCol title="Resources" items={resources} />
          <FooterCol title="Company" items={company} />
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-mist-400 md:flex-row md:items-center md:justify-between">
          <p>© {year} {settings?.companyName ?? "Coral Blue Data"}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/legal/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/legal/terms" className="hover:text-white">Terms of Service</Link>
            <Link href="/legal/cookie-policy" className="hover:text-white">Cookie Policy</Link>
            {social.map((s) => (
              <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {s.platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  if (items.length === 0) return <div />;
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-mist-500">{title}</h3>
      <ul className="mt-5 space-y-3 text-sm">
        {items.map((i) => (
          <li key={`${i.href}-${i.label}`}>
            <Link href={i.href} className="text-mist-300 transition-colors hover:text-coral-400">
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
