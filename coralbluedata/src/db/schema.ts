/**
 * Drizzle schema — single source of truth for the data model.
 * Dialect: PostgreSQL (Neon). Column types mirror the previous SQLite model:
 *  - text primary keys hold UUIDs (generated in app code via crypto.randomUUID)
 *  - timestamps use `timestamp` (returned as JS Date) — all app code uses Date
 *  - structured block / list payloads are stored as `jsonb`
 *  - every public-facing content table has an explicit status + isSeed flag
 */
import { relations } from "drizzle-orm";
import {
  pgTable,
  text,
  integer,
  boolean,
  jsonb,
  timestamp,
  index,
  uniqueIndex,
} from "drizzle-orm/pg-core";

/** Shared timestamp columns. */
const timestamps = {
  createdAt: timestamp("created_at", { withTimezone: true, mode: "date" })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true, mode: "date" })
    .notNull()
    .defaultNow(),
};

export const CONTENT_STATUS = ["draft", "published", "archived"] as const;
export type ContentStatus = (typeof CONTENT_STATUS)[number];

export const ENQUIRY_STATUS = ["new", "contacted", "qualified", "closed"] as const;
export type EnquiryStatus = (typeof ENQUIRY_STATUS)[number];

/* ---------------------------------------------------------------- auth */

export const adminUsers = pgTable(
  "admin_users",
  {
    id: text("id").primaryKey(),
    email: text("email").notNull(),
    name: text("name").notNull(),
    passwordHash: text("password_hash").notNull(),
    role: text("role", { enum: ["owner", "editor"] }).notNull().default("editor"),
    lastLoginAt: timestamp("last_login_at", { withTimezone: true, mode: "date" }),
    ...timestamps,
  },
  (t) => ({ emailIdx: uniqueIndex("admin_users_email_idx").on(t.email) }),
);

export const sessions = pgTable(
  "sessions",
  {
    id: text("id").primaryKey(), // random opaque id; signed reference stored in cookie
    userId: text("user_id")
      .notNull()
      .references(() => adminUsers.id, { onDelete: "cascade" }),
    expiresAt: timestamp("expires_at", { withTimezone: true, mode: "date" }).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "date" }).notNull().defaultNow(),
  },
  (t) => ({ userIdx: index("sessions_user_idx").on(t.userId) }),
);

/* ---------------------------------------------------------------- pages */

export const pages = pgTable(
  "pages",
  {
    id: text("id").primaryKey(),
    slug: text("slug").notNull(),
    title: text("title").notNull(),
    status: text("status", { enum: CONTENT_STATUS }).notNull().default("draft"),
    heroHeading: text("hero_heading"),
    heroSubheading: text("hero_subheading"),
    ctaLabel: text("cta_label"),
    ctaHref: text("cta_href"),
    seoTitle: text("seo_title"),
    seoDescription: text("seo_description"),
    ogImageId: text("og_image_id"),
    publishedAt: timestamp("published_at", { withTimezone: true, mode: "date" }),
    isSeed: boolean("is_seed").notNull().default(false),
    ...timestamps,
  },
  (t) => ({
    slugIdx: uniqueIndex("pages_slug_idx").on(t.slug),
    statusIdx: index("pages_status_idx").on(t.status),
  }),
);

export const SECTION_TYPES = [
  "hero",
  "rich_text",
  "feature_grid",
  "stat_band",
  "logo_strip",
  "cta",
  "steps",
  "faq",
  "testimonial_set",
  "media",
] as const;
export type SectionType = (typeof SECTION_TYPES)[number];

export const pageSections = pgTable(
  "page_sections",
  {
    id: text("id").primaryKey(),
    pageId: text("page_id")
      .notNull()
      .references(() => pages.id, { onDelete: "cascade" }),
    type: text("type", { enum: SECTION_TYPES }).notNull(),
    order: integer("order").notNull().default(0),
    isVisible: boolean("is_visible").notNull().default(true),
    // Structured block payload — shape depends on `type`; validated by Zod in the editor.
    data: jsonb("data").$type<Record<string, unknown>>().notNull().default({}),
    ...timestamps,
  },
  (t) => ({ pageIdx: index("page_sections_page_idx").on(t.pageId, t.order) }),
);

/* ---------------------------------------------------------------- services */

export const services = pgTable(
  "services",
  {
    id: text("id").primaryKey(),
    slug: text("slug").notNull(),
    title: text("title").notNull(),
    summary: text("summary").notNull().default(""),
    icon: text("icon").notNull().default("database"),
    heroHeading: text("hero_heading"),
    heroSubheading: text("hero_subheading"),
    body: text("body").notNull().default(""),
    benefits: jsonb("benefits").$type<string[]>().notNull().default([]),
    useCases: jsonb("use_cases").$type<string[]>().notNull().default([]),
    workflow: jsonb("workflow")
      .$type<{ title: string; detail: string }[]>()
      .notNull()
      .default([]),
    relatedServiceIds: jsonb("related_service_ids")
      .$type<string[]>()
      .notNull()
      .default([]),
    seoTitle: text("seo_title"),
    seoDescription: text("seo_description"),
    status: text("status", { enum: CONTENT_STATUS }).notNull().default("draft"),
    order: integer("order").notNull().default(0),
    isSeed: boolean("is_seed").notNull().default(false),
    ...timestamps,
  },
  (t) => ({
    slugIdx: uniqueIndex("services_slug_idx").on(t.slug),
    statusIdx: index("services_status_idx").on(t.status),
  }),
);

/* ---------------------------------------------------------------- industries */

export const industries = pgTable(
  "industries",
  {
    id: text("id").primaryKey(),
    slug: text("slug").notNull(),
    title: text("title").notNull(),
    summary: text("summary").notNull().default(""),
    body: text("body").notNull().default(""),
    icon: text("icon").notNull().default("building-2"),
    seoTitle: text("seo_title"),
    seoDescription: text("seo_description"),
    status: text("status", { enum: CONTENT_STATUS }).notNull().default("draft"),
    order: integer("order").notNull().default(0),
    isSeed: boolean("is_seed").notNull().default(false),
    ...timestamps,
  },
  (t) => ({
    slugIdx: uniqueIndex("industries_slug_idx").on(t.slug),
    statusIdx: index("industries_status_idx").on(t.status),
  }),
);

/* ---------------------------------------------------------------- blog */

export const categories = pgTable(
  "categories",
  {
    id: text("id").primaryKey(),
    slug: text("slug").notNull(),
    name: text("name").notNull(),
    ...timestamps,
  },
  (t) => ({ slugIdx: uniqueIndex("categories_slug_idx").on(t.slug) }),
);

export const tags = pgTable(
  "tags",
  {
    id: text("id").primaryKey(),
    slug: text("slug").notNull(),
    name: text("name").notNull(),
  },
  (t) => ({ slugIdx: uniqueIndex("tags_slug_idx").on(t.slug) }),
);

export const articles = pgTable(
  "articles",
  {
    id: text("id").primaryKey(),
    slug: text("slug").notNull(),
    title: text("title").notNull(),
    summary: text("summary").notNull().default(""),
    body: text("body").notNull().default(""),
    featuredMediaId: text("featured_media_id"),
    authorId: text("author_id").references(() => adminUsers.id, { onDelete: "set null" }),
    categoryId: text("category_id").references(() => categories.id, { onDelete: "set null" }),
    seoTitle: text("seo_title"),
    seoDescription: text("seo_description"),
    status: text("status", { enum: CONTENT_STATUS }).notNull().default("draft"),
    publishedAt: timestamp("published_at", { withTimezone: true, mode: "date" }),
    isSeed: boolean("is_seed").notNull().default(false),
    ...timestamps,
  },
  (t) => ({
    slugIdx: uniqueIndex("articles_slug_idx").on(t.slug),
    statusIdx: index("articles_status_idx").on(t.status, t.publishedAt),
  }),
);

export const articleTags = pgTable(
  "article_tags",
  {
    articleId: text("article_id")
      .notNull()
      .references(() => articles.id, { onDelete: "cascade" }),
    tagId: text("tag_id")
      .notNull()
      .references(() => tags.id, { onDelete: "cascade" }),
  },
  (t) => ({ pk: uniqueIndex("article_tags_pk").on(t.articleId, t.tagId) }),
);

/* ---------------------------------------------------------------- case studies / testimonials */

export const caseStudies = pgTable(
  "case_studies",
  {
    id: text("id").primaryKey(),
    slug: text("slug").notNull(),
    title: text("title").notNull(),
    client: text("client"), // nullable until a real, approved client is supplied
    summary: text("summary").notNull().default(""),
    challenge: text("challenge").notNull().default(""),
    solution: text("solution").notNull().default(""),
    outcomes: jsonb("outcomes").$type<string[]>().notNull().default([]),
    verified: boolean("verified").notNull().default(false),
    status: text("status", { enum: CONTENT_STATUS }).notNull().default("draft"),
    order: integer("order").notNull().default(0),
    isSeed: boolean("is_seed").notNull().default(false),
    ...timestamps,
  },
  (t) => ({
    slugIdx: uniqueIndex("case_studies_slug_idx").on(t.slug),
    statusIdx: index("case_studies_status_idx").on(t.status),
  }),
);

export const testimonials = pgTable(
  "testimonials",
  {
    id: text("id").primaryKey(),
    author: text("author").notNull(),
    role: text("role"),
    company: text("company"),
    quote: text("quote").notNull(),
    verified: boolean("verified").notNull().default(false),
    status: text("status", { enum: CONTENT_STATUS }).notNull().default("draft"),
    order: integer("order").notNull().default(0),
    isSeed: boolean("is_seed").notNull().default(false),
    ...timestamps,
  },
  (t) => ({ statusIdx: index("testimonials_status_idx").on(t.status) }),
);

/* ---------------------------------------------------------------- coverage */

export const coverageEntries = pgTable(
  "coverage_entries",
  {
    id: text("id").primaryKey(),
    region: text("region").notNull(),
    country: text("country").notNull(),
    detail: text("detail").notNull().default(""),
    lat: integer("lat"),
    lng: integer("lng"),
    verified: boolean("verified").notNull().default(false),
    status: text("status", { enum: CONTENT_STATUS }).notNull().default("draft"),
    order: integer("order").notNull().default(0),
    isSeed: boolean("is_seed").notNull().default(false),
    ...timestamps,
  },
  (t) => ({ statusIdx: index("coverage_status_idx").on(t.status) }),
);

/* ---------------------------------------------------------------- media */

export const media = pgTable(
  "media",
  {
    id: text("id").primaryKey(),
    filename: text("filename").notNull(), // stored (randomised) filename
    displayName: text("display_name").notNull(),
    url: text("url").notNull(),
    mime: text("mime").notNull(),
    size: integer("size").notNull(),
    width: integer("width"),
    height: integer("height"),
    alt: text("alt").notNull().default(""),
    title: text("title"),
    uploadedBy: text("uploaded_by").references(() => adminUsers.id, { onDelete: "set null" }),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "date" }).notNull().defaultNow(),
  },
  (t) => ({ createdIdx: index("media_created_idx").on(t.createdAt) }),
);

/* ---------------------------------------------------------------- nav / cta */

export const navItems = pgTable(
  "nav_items",
  {
    id: text("id").primaryKey(),
    menu: text("menu", { enum: ["header", "footer_solutions", "footer_services", "footer_resources", "footer_company"] })
      .notNull(),
    label: text("label").notNull(),
    href: text("href").notNull(),
    parentId: text("parent_id"),
    order: integer("order").notNull().default(0),
    isVisible: boolean("is_visible").notNull().default(true),
    ...timestamps,
  },
  (t) => ({ menuIdx: index("nav_items_menu_idx").on(t.menu, t.order) }),
);

export const ctaBlocks = pgTable(
  "cta_blocks",
  {
    id: text("id").primaryKey(),
    key: text("key").notNull(),
    heading: text("heading").notNull(),
    body: text("body").notNull().default(""),
    label: text("label").notNull(),
    href: text("href").notNull(),
    ...timestamps,
  },
  (t) => ({ keyIdx: uniqueIndex("cta_blocks_key_idx").on(t.key) }),
);

/* ---------------------------------------------------------------- enquiries */

export const enquiries = pgTable(
  "enquiries",
  {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull(),
    company: text("company"),
    phone: text("phone"),
    industry: text("industry"),
    volume: text("volume"),
    message: text("message").notNull().default(""),
    source: text("source").notNull().default("contact"), // contact | quote
    status: text("status", { enum: ENQUIRY_STATUS }).notNull().default("new"),
    spamScore: integer("spam_score").notNull().default(0),
    ip: text("ip"),
    userAgent: text("user_agent"),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "date" }).notNull().defaultNow(),
  },
  (t) => ({
    statusIdx: index("enquiries_status_idx").on(t.status, t.createdAt),
    emailIdx: index("enquiries_email_idx").on(t.email),
  }),
);

export const enquiryNotes = pgTable(
  "enquiry_notes",
  {
    id: text("id").primaryKey(),
    enquiryId: text("enquiry_id")
      .notNull()
      .references(() => enquiries.id, { onDelete: "cascade" }),
    authorId: text("author_id").references(() => adminUsers.id, { onDelete: "set null" }),
    body: text("body").notNull(),
    // Optional status transition recorded alongside the note.
    statusFrom: text("status_from"),
    statusTo: text("status_to"),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "date" }).notNull().defaultNow(),
  },
  (t) => ({ enquiryIdx: index("enquiry_notes_enquiry_idx").on(t.enquiryId) }),
);

/* ---------------------------------------------------------------- settings / audit */

export const siteSettings = pgTable("site_settings", {
  id: text("id").primaryKey().default("singleton"),
  companyName: text("company_name").notNull().default("Coral Blue Data"),
  logoMediaId: text("logo_media_id"),
  faviconMediaId: text("favicon_media_id"),
  contactEmail: text("contact_email"),
  contactPhone: text("contact_phone"),
  contactAddress: text("contact_address"),
  footerTagline: text("footer_tagline").notNull().default(""),
  socialLinks: jsonb("social_links")
    .$type<{ platform: string; url: string }[]>()
    .notNull()
    .default([]),
  defaultSeoTitle: text("default_seo_title"),
  defaultSeoDescription: text("default_seo_description"),
  defaultShareImageId: text("default_share_image_id"),
  primaryCtaLabel: text("primary_cta_label").notNull().default("Request a Quote"),
  primaryCtaHref: text("primary_cta_href").notNull().default("/request-a-quote"),
  secondaryCtaLabel: text("secondary_cta_label").notNull().default("Explore Solutions"),
  secondaryCtaHref: text("secondary_cta_href").notNull().default("/solutions"),
  ...timestamps,
});

export const auditEvents = pgTable(
  "audit_events",
  {
    id: text("id").primaryKey(),
    actorId: text("actor_id").references(() => adminUsers.id, { onDelete: "set null" }),
    action: text("action").notNull(), // e.g. "page.publish"
    entityType: text("entity_type").notNull(),
    entityId: text("entity_id"),
    meta: jsonb("meta").$type<Record<string, unknown>>(),
    ip: text("ip"),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "date" }).notNull().defaultNow(),
  },
  (t) => ({ createdIdx: index("audit_events_created_idx").on(t.createdAt) }),
);

/* ---------------------------------------------------------------- relations */

export const pagesRelations = relations(pages, ({ many }) => ({
  sections: many(pageSections),
}));
export const pageSectionsRelations = relations(pageSections, ({ one }) => ({
  page: one(pages, { fields: [pageSections.pageId], references: [pages.id] }),
}));
export const articlesRelations = relations(articles, ({ one, many }) => ({
  author: one(adminUsers, { fields: [articles.authorId], references: [adminUsers.id] }),
  category: one(categories, { fields: [articles.categoryId], references: [categories.id] }),
  tags: many(articleTags),
}));
export const enquiriesRelations = relations(enquiries, ({ many }) => ({
  notes: many(enquiryNotes),
}));
