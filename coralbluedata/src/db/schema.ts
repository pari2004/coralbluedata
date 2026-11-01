/**
 * Drizzle schema — single source of truth for the data model.
 * Dialect: SQLite/libSQL (dev + simple prod). Column types are kept portable
 * so the schema can be regenerated for Postgres (see docs/ARCHITECTURE.md §6).
 *
 * Conventions:
 *  - text primary keys hold UUIDs (generated in app code via crypto.randomUUID)
 *  - timestamps are stored as epoch-ms integers (mode: "timestamp")
 *  - structured block / list payloads are stored as JSON text (mode: "json")
 *  - every public-facing content table has an explicit status + isSeed flag
 */
import { sql, relations } from "drizzle-orm";
import {
  sqliteTable,
  text,
  integer,
  index,
  uniqueIndex,
} from "drizzle-orm/sqlite-core";

const now = sql`(unixepoch() * 1000)`;

/** Shared timestamp columns. */
const timestamps = {
  createdAt: integer("created_at", { mode: "timestamp_ms" })
    .notNull()
    .default(now),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" })
    .notNull()
    .default(now),
};

export const CONTENT_STATUS = ["draft", "published", "archived"] as const;
export type ContentStatus = (typeof CONTENT_STATUS)[number];

export const ENQUIRY_STATUS = ["new", "contacted", "qualified", "closed"] as const;
export type EnquiryStatus = (typeof ENQUIRY_STATUS)[number];

/* ---------------------------------------------------------------- auth */

export const adminUsers = sqliteTable(
  "admin_users",
  {
    id: text("id").primaryKey(),
    email: text("email").notNull(),
    name: text("name").notNull(),
    passwordHash: text("password_hash").notNull(),
    role: text("role", { enum: ["owner", "editor"] }).notNull().default("editor"),
    lastLoginAt: integer("last_login_at", { mode: "timestamp_ms" }),
    ...timestamps,
  },
  (t) => ({ emailIdx: uniqueIndex("admin_users_email_idx").on(t.email) }),
);

export const sessions = sqliteTable(
  "sessions",
  {
    id: text("id").primaryKey(), // random opaque id; signed reference stored in cookie
    userId: text("user_id")
      .notNull()
      .references(() => adminUsers.id, { onDelete: "cascade" }),
    expiresAt: integer("expires_at", { mode: "timestamp_ms" }).notNull(),
    createdAt: integer("created_at", { mode: "timestamp_ms" }).notNull().default(now),
  },
  (t) => ({ userIdx: index("sessions_user_idx").on(t.userId) }),
);

/* ---------------------------------------------------------------- pages */

export const pages = sqliteTable(
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
    publishedAt: integer("published_at", { mode: "timestamp_ms" }),
    isSeed: integer("is_seed", { mode: "boolean" }).notNull().default(false),
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

export const pageSections = sqliteTable(
  "page_sections",
  {
    id: text("id").primaryKey(),
    pageId: text("page_id")
      .notNull()
      .references(() => pages.id, { onDelete: "cascade" }),
    type: text("type", { enum: SECTION_TYPES }).notNull(),
    order: integer("order").notNull().default(0),
    isVisible: integer("is_visible", { mode: "boolean" }).notNull().default(true),
    // Structured block payload — shape depends on `type`; validated by Zod in the editor.
    data: text("data", { mode: "json" }).$type<Record<string, unknown>>().notNull().default({}),
    ...timestamps,
  },
  (t) => ({ pageIdx: index("page_sections_page_idx").on(t.pageId, t.order) }),
);

/* ---------------------------------------------------------------- services */

export const services = sqliteTable(
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
    benefits: text("benefits", { mode: "json" }).$type<string[]>().notNull().default([]),
    useCases: text("use_cases", { mode: "json" }).$type<string[]>().notNull().default([]),
    workflow: text("workflow", { mode: "json" })
      .$type<{ title: string; detail: string }[]>()
      .notNull()
      .default([]),
    relatedServiceIds: text("related_service_ids", { mode: "json" })
      .$type<string[]>()
      .notNull()
      .default([]),
    seoTitle: text("seo_title"),
    seoDescription: text("seo_description"),
    status: text("status", { enum: CONTENT_STATUS }).notNull().default("draft"),
    order: integer("order").notNull().default(0),
    isSeed: integer("is_seed", { mode: "boolean" }).notNull().default(false),
    ...timestamps,
  },
  (t) => ({
    slugIdx: uniqueIndex("services_slug_idx").on(t.slug),
    statusIdx: index("services_status_idx").on(t.status),
  }),
);

/* ---------------------------------------------------------------- industries */

export const industries = sqliteTable(
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
    isSeed: integer("is_seed", { mode: "boolean" }).notNull().default(false),
    ...timestamps,
  },
  (t) => ({
    slugIdx: uniqueIndex("industries_slug_idx").on(t.slug),
    statusIdx: index("industries_status_idx").on(t.status),
  }),
);

/* ---------------------------------------------------------------- blog */

export const categories = sqliteTable(
  "categories",
  {
    id: text("id").primaryKey(),
    slug: text("slug").notNull(),
    name: text("name").notNull(),
    ...timestamps,
  },
  (t) => ({ slugIdx: uniqueIndex("categories_slug_idx").on(t.slug) }),
);

export const tags = sqliteTable(
  "tags",
  {
    id: text("id").primaryKey(),
    slug: text("slug").notNull(),
    name: text("name").notNull(),
  },
  (t) => ({ slugIdx: uniqueIndex("tags_slug_idx").on(t.slug) }),
);

export const articles = sqliteTable(
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
    publishedAt: integer("published_at", { mode: "timestamp_ms" }),
    isSeed: integer("is_seed", { mode: "boolean" }).notNull().default(false),
    ...timestamps,
  },
  (t) => ({
    slugIdx: uniqueIndex("articles_slug_idx").on(t.slug),
    statusIdx: index("articles_status_idx").on(t.status, t.publishedAt),
  }),
);

export const articleTags = sqliteTable(
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

export const caseStudies = sqliteTable(
  "case_studies",
  {
    id: text("id").primaryKey(),
    slug: text("slug").notNull(),
    title: text("title").notNull(),
    client: text("client"), // nullable until a real, approved client is supplied
    summary: text("summary").notNull().default(""),
    challenge: text("challenge").notNull().default(""),
    solution: text("solution").notNull().default(""),
    outcomes: text("outcomes", { mode: "json" }).$type<string[]>().notNull().default([]),
    verified: integer("verified", { mode: "boolean" }).notNull().default(false),
    status: text("status", { enum: CONTENT_STATUS }).notNull().default("draft"),
    order: integer("order").notNull().default(0),
    isSeed: integer("is_seed", { mode: "boolean" }).notNull().default(false),
    ...timestamps,
  },
  (t) => ({
    slugIdx: uniqueIndex("case_studies_slug_idx").on(t.slug),
    statusIdx: index("case_studies_status_idx").on(t.status),
  }),
);

export const testimonials = sqliteTable(
  "testimonials",
  {
    id: text("id").primaryKey(),
    author: text("author").notNull(),
    role: text("role"),
    company: text("company"),
    quote: text("quote").notNull(),
    verified: integer("verified", { mode: "boolean" }).notNull().default(false),
    status: text("status", { enum: CONTENT_STATUS }).notNull().default("draft"),
    order: integer("order").notNull().default(0),
    isSeed: integer("is_seed", { mode: "boolean" }).notNull().default(false),
    ...timestamps,
  },
  (t) => ({ statusIdx: index("testimonials_status_idx").on(t.status) }),
);

/* ---------------------------------------------------------------- coverage */

export const coverageEntries = sqliteTable(
  "coverage_entries",
  {
    id: text("id").primaryKey(),
    region: text("region").notNull(),
    country: text("country").notNull(),
    detail: text("detail").notNull().default(""),
    lat: integer("lat"),
    lng: integer("lng"),
    verified: integer("verified", { mode: "boolean" }).notNull().default(false),
    status: text("status", { enum: CONTENT_STATUS }).notNull().default("draft"),
    order: integer("order").notNull().default(0),
    isSeed: integer("is_seed", { mode: "boolean" }).notNull().default(false),
    ...timestamps,
  },
  (t) => ({ statusIdx: index("coverage_status_idx").on(t.status) }),
);

/* ---------------------------------------------------------------- media */

export const media = sqliteTable(
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
    createdAt: integer("created_at", { mode: "timestamp_ms" }).notNull().default(now),
  },
  (t) => ({ createdIdx: index("media_created_idx").on(t.createdAt) }),
);

/* ---------------------------------------------------------------- nav / cta */

export const navItems = sqliteTable(
  "nav_items",
  {
    id: text("id").primaryKey(),
    menu: text("menu", { enum: ["header", "footer_solutions", "footer_services", "footer_resources", "footer_company"] })
      .notNull(),
    label: text("label").notNull(),
    href: text("href").notNull(),
    parentId: text("parent_id"),
    order: integer("order").notNull().default(0),
    isVisible: integer("is_visible", { mode: "boolean" }).notNull().default(true),
    ...timestamps,
  },
  (t) => ({ menuIdx: index("nav_items_menu_idx").on(t.menu, t.order) }),
);

export const ctaBlocks = sqliteTable(
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

export const enquiries = sqliteTable(
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
    createdAt: integer("created_at", { mode: "timestamp_ms" }).notNull().default(now),
  },
  (t) => ({
    statusIdx: index("enquiries_status_idx").on(t.status, t.createdAt),
    emailIdx: index("enquiries_email_idx").on(t.email),
  }),
);

export const enquiryNotes = sqliteTable(
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
    createdAt: integer("created_at", { mode: "timestamp_ms" }).notNull().default(now),
  },
  (t) => ({ enquiryIdx: index("enquiry_notes_enquiry_idx").on(t.enquiryId) }),
);

/* ---------------------------------------------------------------- settings / audit */

export const siteSettings = sqliteTable("site_settings", {
  id: text("id").primaryKey().default("singleton"),
  companyName: text("company_name").notNull().default("Coral Blue Data"),
  logoMediaId: text("logo_media_id"),
  faviconMediaId: text("favicon_media_id"),
  contactEmail: text("contact_email"),
  contactPhone: text("contact_phone"),
  contactAddress: text("contact_address"),
  footerTagline: text("footer_tagline").notNull().default(""),
  socialLinks: text("social_links", { mode: "json" })
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

export const auditEvents = sqliteTable(
  "audit_events",
  {
    id: text("id").primaryKey(),
    actorId: text("actor_id").references(() => adminUsers.id, { onDelete: "set null" }),
    action: text("action").notNull(), // e.g. "page.publish"
    entityType: text("entity_type").notNull(),
    entityId: text("entity_id"),
    meta: text("meta", { mode: "json" }).$type<Record<string, unknown>>(),
    ip: text("ip"),
    createdAt: integer("created_at", { mode: "timestamp_ms" }).notNull().default(now),
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
