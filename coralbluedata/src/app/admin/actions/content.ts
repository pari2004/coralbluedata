"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import {
  services,
  industries,
  articles,
  caseStudies,
  testimonials,
  coverageEntries,
  siteSettings,
} from "@/db/schema";
import { requireApiUser } from "@/lib/auth/guard";
import { logAudit } from "@/lib/audit";
import {
  serviceSchema,
  industrySchema,
  articleSchema,
  caseStudySchema,
  testimonialSchema,
  settingsSchema,
} from "@/lib/validation/schemas";

/* ---------------------------------------------------------------- helpers */

const uid = () => crypto.randomUUID();
/** Split a textarea into trimmed, non-empty lines. */
const lines = (v: FormDataEntryValue | null) =>
  String(v ?? "")
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
const str = (v: FormDataEntryValue | null) => String(v ?? "").trim();
const bool = (v: FormDataEntryValue | null) => v === "on" || v === "true";
const num = (v: FormDataEntryValue | null) => Number(v ?? 0) || 0;

type ActionResult = { error?: string } | void;

function revalidateService(slug?: string) {
  revalidatePath("/");
  revalidatePath("/solutions");
  if (slug) revalidatePath(`/solutions/${slug}`);
}

/* ---------------------------------------------------------------- services */

export async function saveService(id: string | null, _prev: ActionResult, formData: FormData): Promise<ActionResult> {
  const user = await requireApiUser();
  const input = {
    slug: str(formData.get("slug")),
    title: str(formData.get("title")),
    summary: str(formData.get("summary")),
    icon: str(formData.get("icon")) || "database",
    heroHeading: str(formData.get("heroHeading")),
    heroSubheading: str(formData.get("heroSubheading")),
    body: str(formData.get("body")),
    benefits: lines(formData.get("benefits")),
    useCases: lines(formData.get("useCases")),
    workflow: lines(formData.get("workflow")).map((l) => {
      const [title, ...rest] = l.split("|");
      return { title: (title ?? "").trim(), detail: rest.join("|").trim() };
    }),
    relatedServiceIds: [],
    seoTitle: str(formData.get("seoTitle")),
    seoDescription: str(formData.get("seoDescription")),
    status: str(formData.get("status")) || "draft",
    order: num(formData.get("order")),
  };
  const parsed = serviceSchema.safeParse(input);
  if (!parsed.success) return { error: parsed.error.errors[0]?.message ?? "Invalid input" };
  const d = parsed.data;

  if (id) {
    await db.update(services).set({ ...d, updatedAt: new Date() }).where(eq(services.id, id));
    await logAudit({ actorId: user.id, action: "service.update", entityType: "service", entityId: id });
  } else {
    await db.insert(services).values({ id: uid(), ...d, isSeed: false });
    await logAudit({ actorId: user.id, action: "service.create", entityType: "service" });
  }
  revalidateService(d.slug);
  redirect("/admin/services");
}

export async function deleteService(id: string): Promise<void> {
  const user = await requireApiUser();
  await db.delete(services).where(eq(services.id, id));
  await logAudit({ actorId: user.id, action: "service.delete", entityType: "service", entityId: id });
  revalidateService();
  redirect("/admin/services");
}

/* ---------------------------------------------------------------- industries */

export async function saveIndustry(id: string | null, _prev: ActionResult, formData: FormData): Promise<ActionResult> {
  const user = await requireApiUser();
  const parsed = industrySchema.safeParse({
    slug: str(formData.get("slug")),
    title: str(formData.get("title")),
    summary: str(formData.get("summary")),
    body: str(formData.get("body")),
    icon: str(formData.get("icon")) || "building-2",
    seoTitle: str(formData.get("seoTitle")),
    seoDescription: str(formData.get("seoDescription")),
    status: str(formData.get("status")) || "draft",
    order: num(formData.get("order")),
  });
  if (!parsed.success) return { error: parsed.error.errors[0]?.message ?? "Invalid input" };
  const d = parsed.data;
  if (id) {
    await db.update(industries).set({ ...d, updatedAt: new Date() }).where(eq(industries.id, id));
    await logAudit({ actorId: user.id, action: "industry.update", entityType: "industry", entityId: id });
  } else {
    await db.insert(industries).values({ id: uid(), ...d, isSeed: false });
    await logAudit({ actorId: user.id, action: "industry.create", entityType: "industry" });
  }
  revalidatePath("/");
  revalidatePath("/industries");
  revalidatePath(`/industries/${d.slug}`);
  redirect("/admin/industries");
}

export async function deleteIndustry(id: string): Promise<void> {
  const user = await requireApiUser();
  await db.delete(industries).where(eq(industries.id, id));
  await logAudit({ actorId: user.id, action: "industry.delete", entityType: "industry", entityId: id });
  revalidatePath("/industries");
  redirect("/admin/industries");
}

/* ---------------------------------------------------------------- articles */

export async function saveArticle(id: string | null, _prev: ActionResult, formData: FormData): Promise<ActionResult> {
  const user = await requireApiUser();
  const parsed = articleSchema.safeParse({
    slug: str(formData.get("slug")),
    title: str(formData.get("title")),
    summary: str(formData.get("summary")),
    body: str(formData.get("body")),
    featuredMediaId: str(formData.get("featuredMediaId")),
    categoryId: str(formData.get("categoryId")),
    seoTitle: str(formData.get("seoTitle")),
    seoDescription: str(formData.get("seoDescription")),
    status: str(formData.get("status")) || "draft",
  });
  if (!parsed.success) return { error: parsed.error.errors[0]?.message ?? "Invalid input" };
  const d = parsed.data;
  // Set publishedAt the first time it becomes published.
  const publishedAt = d.status === "published" ? new Date() : null;

  if (id) {
    const existing = await db.select().from(articles).where(eq(articles.id, id)).then((r) => r[0]);
    await db
      .update(articles)
      .set({
        ...d,
        featuredMediaId: d.featuredMediaId || null,
        categoryId: d.categoryId || null,
        publishedAt: d.status === "published" ? existing?.publishedAt ?? publishedAt : null,
        updatedAt: new Date(),
      })
      .where(eq(articles.id, id));
    await logAudit({ actorId: user.id, action: "article.update", entityType: "article", entityId: id });
  } else {
    await db.insert(articles).values({
      id: uid(),
      ...d,
      featuredMediaId: d.featuredMediaId || null,
      categoryId: d.categoryId || null,
      authorId: user.id,
      publishedAt,
      isSeed: false,
    });
    await logAudit({ actorId: user.id, action: "article.create", entityType: "article" });
  }
  revalidatePath("/");
  revalidatePath("/resources");
  revalidatePath(`/resources/${d.slug}`);
  redirect("/admin/articles");
}

export async function deleteArticle(id: string): Promise<void> {
  const user = await requireApiUser();
  await db.delete(articles).where(eq(articles.id, id));
  await logAudit({ actorId: user.id, action: "article.delete", entityType: "article", entityId: id });
  revalidatePath("/resources");
  redirect("/admin/articles");
}

/* ---------------------------------------------------------------- case studies */

export async function saveCaseStudy(id: string | null, _prev: ActionResult, formData: FormData): Promise<ActionResult> {
  const user = await requireApiUser();
  const parsed = caseStudySchema.safeParse({
    slug: str(formData.get("slug")),
    title: str(formData.get("title")),
    client: str(formData.get("client")),
    summary: str(formData.get("summary")),
    challenge: str(formData.get("challenge")),
    solution: str(formData.get("solution")),
    outcomes: lines(formData.get("outcomes")),
    verified: bool(formData.get("verified")),
    status: str(formData.get("status")) || "draft",
    order: num(formData.get("order")),
  });
  if (!parsed.success) return { error: parsed.error.errors[0]?.message ?? "Invalid input" };
  const d = parsed.data;
  // Guard: a case study can only be published if it's marked verified.
  if (d.status === "published" && !d.verified) {
    return { error: "A case study must be marked 'verified' before it can be published." };
  }
  const values = { ...d, client: d.client || null };
  if (id) {
    await db.update(caseStudies).set({ ...values, updatedAt: new Date() }).where(eq(caseStudies.id, id));
    await logAudit({ actorId: user.id, action: "caseStudy.update", entityType: "case_study", entityId: id });
  } else {
    await db.insert(caseStudies).values({ id: uid(), ...values, isSeed: false });
    await logAudit({ actorId: user.id, action: "caseStudy.create", entityType: "case_study" });
  }
  revalidatePath("/case-studies");
  revalidatePath(`/case-studies/${d.slug}`);
  redirect("/admin/case-studies");
}

export async function deleteCaseStudy(id: string): Promise<void> {
  const user = await requireApiUser();
  await db.delete(caseStudies).where(eq(caseStudies.id, id));
  await logAudit({ actorId: user.id, action: "caseStudy.delete", entityType: "case_study", entityId: id });
  revalidatePath("/case-studies");
  redirect("/admin/case-studies");
}

/* ---------------------------------------------------------------- testimonials */

export async function saveTestimonial(id: string | null, _prev: ActionResult, formData: FormData): Promise<ActionResult> {
  const user = await requireApiUser();
  const parsed = testimonialSchema.safeParse({
    author: str(formData.get("author")),
    role: str(formData.get("role")),
    company: str(formData.get("company")),
    quote: str(formData.get("quote")),
    verified: bool(formData.get("verified")),
    status: str(formData.get("status")) || "draft",
    order: num(formData.get("order")),
  });
  if (!parsed.success) return { error: parsed.error.errors[0]?.message ?? "Invalid input" };
  const d = parsed.data;
  if (d.status === "published" && !d.verified) {
    return { error: "A testimonial must be marked 'verified' (approved by the client) before publishing." };
  }
  const values = { ...d, role: d.role || null, company: d.company || null };
  if (id) {
    await db.update(testimonials).set({ ...values, updatedAt: new Date() }).where(eq(testimonials.id, id));
    await logAudit({ actorId: user.id, action: "testimonial.update", entityType: "testimonial", entityId: id });
  } else {
    await db.insert(testimonials).values({ id: uid(), ...values, isSeed: false });
    await logAudit({ actorId: user.id, action: "testimonial.create", entityType: "testimonial" });
  }
  revalidatePath("/");
  redirect("/admin/testimonials");
}

export async function deleteTestimonial(id: string): Promise<void> {
  const user = await requireApiUser();
  await db.delete(testimonials).where(eq(testimonials.id, id));
  await logAudit({ actorId: user.id, action: "testimonial.delete", entityType: "testimonial", entityId: id });
  revalidatePath("/");
  redirect("/admin/testimonials");
}

/* ---------------------------------------------------------------- coverage */

export async function saveCoverage(id: string | null, _prev: ActionResult, formData: FormData): Promise<ActionResult> {
  const user = await requireApiUser();
  const region = str(formData.get("region"));
  const country = str(formData.get("country")) || region;
  const detail = str(formData.get("detail"));
  const verified = bool(formData.get("verified"));
  const status = (str(formData.get("status")) || "draft") as "draft" | "published" | "archived";
  const order = num(formData.get("order"));
  if (!region) return { error: "Region is required." };
  if (status === "published" && !verified) {
    return { error: "Coverage must be marked 'verified' before publishing (we don't claim unverified coverage)." };
  }
  if (id) {
    await db
      .update(coverageEntries)
      .set({ region, country, detail, verified, status, order, updatedAt: new Date() })
      .where(eq(coverageEntries.id, id));
    await logAudit({ actorId: user.id, action: "coverage.update", entityType: "coverage", entityId: id });
  } else {
    await db.insert(coverageEntries).values({ id: uid(), region, country, detail, verified, status, order, isSeed: false });
    await logAudit({ actorId: user.id, action: "coverage.create", entityType: "coverage" });
  }
  revalidatePath("/");
  revalidatePath("/coverage");
  redirect("/admin/coverage");
}

export async function deleteCoverage(id: string): Promise<void> {
  const user = await requireApiUser();
  await db.delete(coverageEntries).where(eq(coverageEntries.id, id));
  await logAudit({ actorId: user.id, action: "coverage.delete", entityType: "coverage", entityId: id });
  revalidatePath("/coverage");
  redirect("/admin/coverage");
}

/* ---------------------------------------------------------------- settings */

export async function saveSettings(_prev: ActionResult, formData: FormData): Promise<ActionResult> {
  const user = await requireApiUser();
  const socialPlatforms = formData.getAll("socialPlatform").map(String);
  const socialUrls = formData.getAll("socialUrl").map(String);
  const socialLinks = socialPlatforms
    .map((platform, i) => ({ platform: platform.trim(), url: (socialUrls[i] ?? "").trim() }))
    .filter((s) => s.platform && s.url);

  const parsed = settingsSchema.safeParse({
    companyName: str(formData.get("companyName")),
    contactEmail: str(formData.get("contactEmail")),
    contactPhone: str(formData.get("contactPhone")),
    contactAddress: str(formData.get("contactAddress")),
    footerTagline: str(formData.get("footerTagline")),
    socialLinks,
    defaultSeoTitle: str(formData.get("defaultSeoTitle")),
    defaultSeoDescription: str(formData.get("defaultSeoDescription")),
    primaryCtaLabel: str(formData.get("primaryCtaLabel")),
    primaryCtaHref: str(formData.get("primaryCtaHref")),
    secondaryCtaLabel: str(formData.get("secondaryCtaLabel")),
    secondaryCtaHref: str(formData.get("secondaryCtaHref")),
  });
  if (!parsed.success) return { error: parsed.error.errors[0]?.message ?? "Invalid settings" };
  const d = parsed.data;

  const values = {
    companyName: d.companyName,
    contactEmail: d.contactEmail || null,
    contactPhone: d.contactPhone || null,
    contactAddress: d.contactAddress || null,
    footerTagline: d.footerTagline,
    socialLinks: d.socialLinks,
    defaultSeoTitle: d.defaultSeoTitle || null,
    defaultSeoDescription: d.defaultSeoDescription || null,
    primaryCtaLabel: d.primaryCtaLabel,
    primaryCtaHref: d.primaryCtaHref,
    secondaryCtaLabel: d.secondaryCtaLabel,
    secondaryCtaHref: d.secondaryCtaHref,
    updatedAt: new Date(),
  };
  const existing = await db.select().from(siteSettings).where(eq(siteSettings.id, "singleton")).then((r) => r[0]);
  if (existing) {
    await db.update(siteSettings).set(values).where(eq(siteSettings.id, "singleton"));
  } else {
    await db.insert(siteSettings).values({ id: "singleton", ...values });
  }
  await logAudit({ actorId: user.id, action: "settings.update", entityType: "site_settings" });
  revalidatePath("/", "layout");
  redirect("/admin/settings?saved=1");
}
