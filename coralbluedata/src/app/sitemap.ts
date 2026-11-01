import type { MetadataRoute } from "next";
import { env } from "@/env";
import {
  listPublishedServices,
  listPublishedIndustries,
  listPublishedArticles,
  listPublishedCaseStudies,
} from "@/lib/content";

/** Generated sitemap — includes static routes + published CMS content only. */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = env.APP_URL.replace(/\/$/, "");
  const [services, industries, articles, caseStudies] = await Promise.all([
    listPublishedServices(),
    listPublishedIndustries(),
    listPublishedArticles(),
    listPublishedCaseStudies(),
  ]);

  const staticPaths = [
    "",
    "/about",
    "/solutions",
    "/industries",
    "/coverage",
    "/data-quality",
    "/privacy",
    "/resources",
    "/case-studies",
    "/contact",
    "/request-a-quote",
    "/legal/privacy-policy",
    "/legal/terms",
    "/legal/cookie-policy",
  ];

  const entries: MetadataRoute.Sitemap = staticPaths.map((p) => ({
    url: `${base}${p}`,
    changeFrequency: "monthly",
    priority: p === "" ? 1 : 0.7,
  }));

  for (const s of services) entries.push({ url: `${base}/solutions/${s.slug}`, lastModified: s.updatedAt, priority: 0.8 });
  for (const i of industries) entries.push({ url: `${base}/industries/${i.slug}`, lastModified: i.updatedAt, priority: 0.6 });
  for (const a of articles) entries.push({ url: `${base}/resources/${a.slug}`, lastModified: a.updatedAt, priority: 0.6 });
  for (const c of caseStudies) entries.push({ url: `${base}/case-studies/${c.slug}`, lastModified: c.updatedAt, priority: 0.6 });

  return entries;
}
