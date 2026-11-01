/**
 * Content-access layer. The ONLY way public pages read content.
 * Every query here filters to published (and, where it matters, verified)
 * rows — so draft edits never leak to the live site (ARCHITECTURE §3).
 * Admin reads use the db directly; public reads go through these functions.
 */
import "server-only";
import { and, asc, desc, eq } from "drizzle-orm";
import { db } from "@/db";
import {
  pages,
  pageSections,
  services,
  industries,
  articles,
  caseStudies,
  testimonials,
  coverageEntries,
  navItems,
  ctaBlocks,
  siteSettings,
} from "@/db/schema";

/* ---------------------------------------------------------- pages */

export async function getPublishedPage(slug: string) {
  const page = await db
    .select()
    .from(pages)
    .where(and(eq(pages.slug, slug), eq(pages.status, "published")))
    .then((r) => r[0]);
  if (!page) return null;
  const sections = await db
    .select()
    .from(pageSections)
    .where(and(eq(pageSections.pageId, page.id), eq(pageSections.isVisible, true)))
    .orderBy(asc(pageSections.order));
  return { ...page, sections };
}

/* ---------------------------------------------------------- services */

export function listPublishedServices() {
  return db
    .select()
    .from(services)
    .where(eq(services.status, "published"))
    .orderBy(asc(services.order), asc(services.title));
}

export function getPublishedService(slug: string) {
  return db
    .select()
    .from(services)
    .where(and(eq(services.slug, slug), eq(services.status, "published")))
    .then((r) => r[0]);
}

/* ---------------------------------------------------------- industries */

export function listPublishedIndustries() {
  return db
    .select()
    .from(industries)
    .where(eq(industries.status, "published"))
    .orderBy(asc(industries.order), asc(industries.title));
}

export function getPublishedIndustry(slug: string) {
  return db
    .select()
    .from(industries)
    .where(and(eq(industries.slug, slug), eq(industries.status, "published")))
    .then((r) => r[0]);
}

/* ---------------------------------------------------------- articles */

export function listPublishedArticles(limit?: number) {
  const q = db
    .select()
    .from(articles)
    .where(eq(articles.status, "published"))
    .orderBy(desc(articles.publishedAt));
  return limit ? q.limit(limit) : q;
}

export function getPublishedArticle(slug: string) {
  return db
    .select()
    .from(articles)
    .where(and(eq(articles.slug, slug), eq(articles.status, "published")))
    .then((r) => r[0]);
}

/* ---------------------------------------------------------- case studies */

export function listPublishedCaseStudies() {
  return db
    .select()
    .from(caseStudies)
    .where(eq(caseStudies.status, "published"))
    .orderBy(asc(caseStudies.order));
}

export function getPublishedCaseStudy(slug: string) {
  return db
    .select()
    .from(caseStudies)
    .where(and(eq(caseStudies.slug, slug), eq(caseStudies.status, "published")))
    .then((r) => r[0]);
}

/* ---------------------------------------------------------- testimonials
 * Only verified AND published testimonials are ever shown publicly. */

export function listPublicTestimonials() {
  return db
    .select()
    .from(testimonials)
    .where(and(eq(testimonials.status, "published"), eq(testimonials.verified, true)))
    .orderBy(asc(testimonials.order));
}

/* ---------------------------------------------------------- coverage */

export function listPublicCoverage() {
  return db
    .select()
    .from(coverageEntries)
    .where(and(eq(coverageEntries.status, "published"), eq(coverageEntries.verified, true)))
    .orderBy(asc(coverageEntries.order));
}

/* ---------------------------------------------------------- nav / cta / settings */

export function listNav(menu: string) {
  return db
    .select()
    .from(navItems)
    .where(and(eq(navItems.menu, menu as never), eq(navItems.isVisible, true)))
    .orderBy(asc(navItems.order));
}

export async function getCta(key: string) {
  return db.select().from(ctaBlocks).where(eq(ctaBlocks.key, key)).then((r) => r[0]);
}

export async function getSettings() {
  const row = await db.select().from(siteSettings).where(eq(siteSettings.id, "singleton")).then((r) => r[0]);
  return row ?? null;
}
