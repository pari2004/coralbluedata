import { listPublishedServices, listPublishedIndustries, listNav, getSettings } from "@/lib/content";
import { HeaderClient, type NavLink, type ServiceLink } from "./HeaderClient";

/**
 * Server shell: pulls published nav/services/industries + settings from the
 * CMS content layer, then hands plain data to the interactive client header.
 */
export async function SiteHeader() {
  const [services, industries, headerNav, settings] = await Promise.all([
    listPublishedServices(),
    listPublishedIndustries(),
    listNav("header"),
    getSettings(),
  ]);

  const serviceLinks: ServiceLink[] = services.map((s) => ({
    title: s.title,
    slug: s.slug,
    summary: s.summary,
    icon: s.icon,
  }));

  const industryLinks: NavLink[] = industries.map((i) => ({
    label: i.title,
    href: `/industries/${i.slug}`,
  }));

  const navLinks: NavLink[] = headerNav.map((n) => ({ label: n.label, href: n.href }));

  return (
    <HeaderClient
      navLinks={navLinks}
      services={serviceLinks}
      industries={industryLinks}
      cta={{
        primaryLabel: settings?.primaryCtaLabel ?? "Request a Quote",
        primaryHref: settings?.primaryCtaHref ?? "/request-a-quote",
        secondaryLabel: settings?.secondaryCtaLabel ?? "Explore Solutions",
        secondaryHref: settings?.secondaryCtaHref ?? "/solutions",
      }}
    />
  );
}
