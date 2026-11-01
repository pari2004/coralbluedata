/**
 * Development seed. Idempotent: clears previously-seeded rows (isSeed=true)
 * then re-inserts. Rules (ARCHITECTURE §3):
 *   - PUBLISHED seed content contains only honest, generic category copy —
 *     never fabricated numbers, clients, certifications or testimonials.
 *   - Anything that would assert an unverified company fact (testimonials,
 *     case studies, coverage, contact details) is seeded as DRAFT / unverified
 *     so it never appears on the public site until the owner confirms it.
 *   - Everything carries isSeed=true and is trivially purgeable.
 */
import { existsSync } from "node:fs";
if (existsSync(".env.local")) process.loadEnvFile(".env.local");

const { db } = await import("@/db");
const schema = await import("@/db/schema");
const { eq } = await import("drizzle-orm");
const { slugify } = await import("@/lib/utils");

const uid = () => crypto.randomUUID();
const PLACEHOLDER = "Seed placeholder — edit in /admin before publishing.";

console.log("🌱 Seeding (labelled dev content, isSeed=true)…");

/* ---- clear previously seeded rows ------------------------------------ */
await db.delete(schema.pages).where(eq(schema.pages.isSeed, true)); // sections cascade
await db.delete(schema.services).where(eq(schema.services.isSeed, true));
await db.delete(schema.industries).where(eq(schema.industries.isSeed, true));
await db.delete(schema.articles).where(eq(schema.articles.isSeed, true));
await db.delete(schema.caseStudies).where(eq(schema.caseStudies.isSeed, true));
await db.delete(schema.testimonials).where(eq(schema.testimonials.isSeed, true));
await db.delete(schema.coverageEntries).where(eq(schema.coverageEntries.isSeed, true));
await db.delete(schema.navItems);
await db.delete(schema.ctaBlocks);

/* ---- site settings (singleton) --------------------------------------- *
 * Contact fields intentionally left blank so the footer never renders a
 * fabricated email/phone/address. The owner fills these in /admin.        */
const settingsValues = {
  id: "singleton" as const,
  companyName: "Coral Blue Data",
  footerTagline:
    "B2B data intelligence — accurate company and contact data, cleansed, verified and delivered the way your team works.",
  socialLinks: [],
  primaryCtaLabel: "Request a Quote",
  primaryCtaHref: "/request-a-quote",
  secondaryCtaLabel: "Explore Solutions",
  secondaryCtaHref: "/solutions",
  defaultSeoTitle: "Coral Blue Data — B2B Data Intelligence",
  defaultSeoDescription:
    "Find the right companies and contacts, keep records accurate, and act on better sales data.",
};
const existingSettings = await db
  .select()
  .from(schema.siteSettings)
  .where(eq(schema.siteSettings.id, "singleton"))
  .then((r) => r[0]);
if (existingSettings) {
  await db.update(schema.siteSettings).set(settingsValues).where(eq(schema.siteSettings.id, "singleton"));
} else {
  await db.insert(schema.siteSettings).values(settingsValues);
}

/* ---- services (PUBLISHED: honest generic category copy) -------------- */
const services = [
  {
    title: "B2B Contact & Company Data",
    icon: "contact",
    summary:
      "Company and contact records to help sales and marketing teams reach the right accounts and decision-makers.",
    benefits: ["Role and seniority targeting", "Firmographic filters", "Human-readable export formats"],
    useCases: ["Outbound prospecting lists", "Account-based marketing", "Territory and account planning"],
  },
  {
    title: "Technology Install-Base Data",
    icon: "cpu",
    summary:
      "Insight into the technologies organisations use, so you can target accounts by their software and infrastructure stack.",
    benefits: ["Target by technology adoption", "Competitive displacement", "Stack-based segmentation"],
    useCases: ["Integration and partner targeting", "Competitive win-backs", "Product-fit segmentation"],
  },
  {
    title: "Healthcare Data",
    icon: "stethoscope",
    summary:
      "Specialised records for healthcare organisations and professionals, prepared with sector-appropriate care.",
    benefits: ["Specialty-level targeting", "Organisation hierarchies", "Compliance-aware handling"],
    useCases: ["Provider outreach", "Medical device go-to-market", "Health-sector research"],
  },
  {
    title: "Data Appending",
    icon: "plus-circle",
    summary: "Fill gaps in your existing records by adding missing fields such as firmographics and contact details.",
    benefits: ["Fewer incomplete records", "Richer segmentation", "Better routing and scoring"],
    useCases: ["CRM gap-filling", "Lead enrichment", "Reactivation campaigns"],
  },
  {
    title: "Data Cleansing",
    icon: "sparkles",
    summary: "Standardise, de-duplicate and correct records so your database is consistent and usable.",
    benefits: ["De-duplication", "Standardised formats", "Reduced data decay"],
    useCases: ["CRM hygiene", "Migration clean-up", "Deliverability improvement"],
  },
  {
    title: "Data Verification",
    icon: "shield-check",
    summary: "Check records against sources to improve accuracy and reduce bounces and wasted outreach.",
    benefits: ["Validated contact points", "Lower bounce rates", "Documented process"],
    useCases: ["Pre-campaign validation", "Periodic re-verification", "List health audits"],
  },
  {
    title: "Data Enrichment",
    icon: "layers",
    summary: "Enhance records with additional attributes to support sharper segmentation and personalisation.",
    benefits: ["More complete profiles", "Deeper segmentation", "Personalisation at scale"],
    useCases: ["Scoring models", "Personalised outreach", "Analytics and reporting"],
  },
  {
    title: "Data Licensing & API",
    icon: "plug",
    summary: "Flexible delivery of data via files or programmatic access, fitted to your systems and workflows.",
    benefits: ["Multiple delivery formats", "Workflow-friendly", "Scheduled refreshes"],
    useCases: ["System-of-record sync", "Scheduled data feeds", "Custom data projects"],
  },
];

for (const [i, s] of services.entries()) {
  await db.insert(schema.services).values({
    id: uid(),
    slug: slugify(s.title),
    title: s.title,
    icon: s.icon,
    summary: s.summary,
    heroHeading: s.title,
    heroSubheading: s.summary,
    body:
      `${s.summary}\n\n${PLACEHOLDER} Describe your specific ${s.title.toLowerCase()} capability, ` +
      `coverage and process here once confirmed by the business.`,
    benefits: s.benefits,
    useCases: s.useCases,
    workflow: [
      { title: "Source", detail: "Aggregate from the relevant sources for this dataset." },
      { title: "Validate", detail: "Apply checks to improve accuracy and remove noise." },
      { title: "Enrich", detail: "Add the attributes your team needs to act." },
      { title: "Deliver", detail: "Provide the data in your preferred format or system." },
    ],
    relatedServiceIds: [],
    seoDescription: s.summary,
    status: "published",
    order: i,
    isSeed: true,
  });
}

/* ---- industries (PUBLISHED: honest generic copy) --------------------- */
const industries = [
  { title: "Technology", icon: "cpu", summary: "Reach technology companies and the teams that buy, build and run software." },
  { title: "Healthcare", icon: "stethoscope", summary: "Connect with healthcare organisations and professionals, handled with sector-appropriate care." },
  { title: "Manufacturing", icon: "factory", summary: "Target manufacturers across sub-sectors, functions and company sizes." },
  { title: "Financial Services", icon: "landmark", summary: "Engage banking, insurance and financial-services organisations and roles." },
  { title: "Business Services", icon: "briefcase", summary: "Find professional and business-services firms that fit your ideal customer profile." },
];
for (const [i, ind] of industries.entries()) {
  await db.insert(schema.industries).values({
    id: uid(),
    slug: slugify(ind.title),
    title: ind.title,
    icon: ind.icon,
    summary: ind.summary,
    body: `${ind.summary}\n\n${PLACEHOLDER}`,
    seoDescription: ind.summary,
    status: "published",
    order: i,
    isSeed: true,
  });
}

/* ---- articles (PUBLISHED: generic educational content, not company facts) */
const articles = [
  {
    title: "What good B2B data quality actually looks like",
    summary: "A practical framework for thinking about accuracy, completeness, consistency and timeliness in B2B data.",
  },
  {
    title: "Reducing data decay in your CRM",
    summary: "Why B2B records go stale and a maintainable approach to keeping them current.",
  },
  {
    title: "Appending vs. enrichment: what's the difference?",
    summary: "Two commonly confused data operations, explained with when to use each.",
  },
];
for (const [i, a] of articles.entries()) {
  await db.insert(schema.articles).values({
    id: uid(),
    slug: slugify(a.title),
    title: a.title,
    summary: a.summary,
    body:
      `${a.summary}\n\n${PLACEHOLDER} This is educational placeholder content describing a general ` +
      `concept — it makes no claims about Coral Blue Data's specific metrics or customers.`,
    status: "published",
    publishedAt: new Date(Date.now() - (i + 1) * 86_400_000),
    seoDescription: a.summary,
    isSeed: true,
  });
}

/* ---- testimonials & case studies: DRAFT / UNVERIFIED (never public) --- */
await db.insert(schema.testimonials).values({
  id: uid(),
  author: "Pending approval",
  role: "Placeholder",
  company: "Placeholder",
  quote: `${PLACEHOLDER} Real, approved testimonials only — this seed row is unverified and stays unpublished.`,
  verified: false,
  status: "draft",
  order: 0,
  isSeed: true,
});
await db.insert(schema.caseStudies).values({
  id: uid(),
  slug: "placeholder-case-study",
  title: "Placeholder case study",
  client: null,
  summary: `${PLACEHOLDER} Published case studies require a real, approved client outcome.`,
  challenge: PLACEHOLDER,
  solution: PLACEHOLDER,
  outcomes: [],
  verified: false,
  status: "draft",
  order: 0,
  isSeed: true,
});

/* ---- coverage: DRAFT / UNVERIFIED (public map shows an honest empty state) */
for (const [i, region] of ["North America", "EMEA", "APAC", "LATAM"].entries()) {
  await db.insert(schema.coverageEntries).values({
    id: uid(),
    region,
    country: region,
    detail: `${PLACEHOLDER} Add confirmed coverage detail for ${region}.`,
    verified: false,
    status: "draft",
    order: i,
    isSeed: true,
  });
}

/* ---- navigation ------------------------------------------------------- */
const header = [
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Coverage", href: "/coverage" },
  { label: "Data Quality", href: "/data-quality" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
];
for (const [i, n] of header.entries()) {
  await db.insert(schema.navItems).values({ id: uid(), menu: "header", label: n.label, href: n.href, order: i });
}
const footerMenus: Record<string, { label: string; href: string }[]> = {
  footer_solutions: services.slice(0, 4).map((s) => ({ label: s.title, href: `/solutions/${slugify(s.title)}` })),
  footer_services: services.slice(4).map((s) => ({ label: s.title, href: `/solutions/${slugify(s.title)}` })),
  footer_resources: [
    { label: "Blog & Insights", href: "/resources" },
    { label: "Data Quality", href: "/data-quality" },
    { label: "Privacy & Responsible Use", href: "/privacy" },
  ],
  footer_company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Request a Quote", href: "/request-a-quote" },
  ],
};
for (const [menu, items] of Object.entries(footerMenus)) {
  for (const [i, n] of items.entries()) {
    await db.insert(schema.navItems).values({ id: uid(), menu: menu as never, label: n.label, href: n.href, order: i });
  }
}

/* ---- reusable CTA blocks --------------------------------------------- */
await db.insert(schema.ctaBlocks).values({
  id: uid(),
  key: "primary",
  heading: "Ready to work with better data?",
  body: "Tell us what you're trying to reach. We'll review your requirements and respond with next steps and, where relevant, a sample.",
  label: "Request a Quote",
  href: "/request-a-quote",
});

console.log("✅ Seed complete.");
console.log("   Published: services, industries, articles (generic, labelled).");
console.log("   Draft/unverified (hidden publicly): testimonials, case studies, coverage.");
console.log("   Contact details left blank — set them in /admin → Settings.");
process.exit(0);
