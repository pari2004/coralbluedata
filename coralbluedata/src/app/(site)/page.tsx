import { Hero } from "@/components/site/sections/Hero";
import { ValueProp } from "@/components/site/sections/ValueProp";
import { Challenge } from "@/components/site/sections/Challenge";
import { SolutionsOverview } from "@/components/site/sections/SolutionsOverview";
import {
  DataWorkflow,
  GlobalCoveragePreview,
  IndustryPreview,
  DataQualityPreview,
  DataDelivery,
  CaseStudiesPreview,
  PrivacyPreview,
  InsightsPreview,
} from "@/components/site/sections/home";
import { CtaBand } from "@/components/site/CtaBand";
import {
  listPublishedServices,
  listPublishedIndustries,
  listPublishedArticles,
  listPublishedCaseStudies,
  listPublicCoverage,
  getSettings,
  getPublishedPage,
} from "@/lib/content";

export default async function HomePage() {
  const [services, industries, articles, caseStudies, coverage, settings, page] = await Promise.all([
    listPublishedServices(),
    listPublishedIndustries(),
    listPublishedArticles(3),
    listPublishedCaseStudies(),
    listPublicCoverage(),
    getSettings(),
    getPublishedPage("home"),
  ]);

  const primary = {
    label: settings?.primaryCtaLabel ?? "Request a Quote",
    href: settings?.primaryCtaHref ?? "/request-a-quote",
  };
  const secondary = {
    label: settings?.secondaryCtaLabel ?? "Explore Solutions",
    href: settings?.secondaryCtaHref ?? "/solutions",
  };

  return (
    <>
      <Hero
        heading={page?.heroHeading ?? "Reach the right companies with"}
        highlight="data you can trust"
        subheading={
          page?.heroSubheading ??
          "Coral Blue Data helps B2B teams find the right accounts and contacts, keep records accurate, and act on better sales data."
        }
        primary={primary}
        secondary={secondary}
      />
      <ValueProp />
      <Challenge />
      <SolutionsOverview
        services={services.map((s) => ({ slug: s.slug, title: s.title, summary: s.summary, icon: s.icon }))}
      />
      <DataWorkflow />
      <GlobalCoveragePreview regions={coverage.map((c) => ({ region: c.region, detail: c.detail }))} />
      <IndustryPreview
        industries={industries.map((i) => ({ slug: i.slug, title: i.title, summary: i.summary, icon: i.icon }))}
      />
      <DataQualityPreview />
      <DataDelivery />
      <CaseStudiesPreview
        caseStudies={caseStudies.map((c) => ({ slug: c.slug, title: c.title, summary: c.summary }))}
      />
      <PrivacyPreview />
      <InsightsPreview articles={articles.map((a) => ({ slug: a.slug, title: a.title, summary: a.summary }))} />
      <CtaBand />
    </>
  );
}
