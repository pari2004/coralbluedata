/**
 * Shared Zod schemas. Imported by client forms AND server handlers so one
 * definition validates both sides and types the data end to end.
 */
import { z } from "zod";
import { CONTENT_STATUS, ENQUIRY_STATUS, SECTION_TYPES } from "@/db/schema";

/* --------------------------------------------------- public: enquiries */

export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(120),
  email: z.string().trim().email("Enter a valid work email").max(200),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  industry: z.string().trim().max(80).optional().or(z.literal("")),
  volume: z.string().trim().max(80).optional().or(z.literal("")),
  message: z.string().trim().max(4000).optional().or(z.literal("")),
  source: z.enum(["contact", "quote"]).default("contact"),
  // Honeypot — must stay empty. Bots fill it.
  website: z.string().max(0).optional().or(z.literal("")),
});
export type EnquiryInput = z.infer<typeof enquirySchema>;

/* --------------------------------------------------- admin: auth */

export const loginSchema = z.object({
  email: z.string().trim().email().max(200),
  password: z.string().min(1, "Password is required").max(200),
});
export type LoginInput = z.infer<typeof loginSchema>;

/** Password policy shared by the CLI bootstrap and the in-CMS user manager. */
export const adminPasswordSchema = z
  .string()
  .min(12, "Use at least 12 characters")
  .max(200)
  .regex(/[a-z]/, "Include a lowercase letter")
  .regex(/[A-Z]/, "Include an uppercase letter")
  .regex(/[0-9]/, "Include a number");

export const adminRoleSchema = z.enum(["owner", "editor"]);

export const createAdminSchema = z.object({
  email: z.string().trim().email().max(200),
  name: z.string().trim().min(2).max(120),
  password: adminPasswordSchema,
  role: adminRoleSchema.default("owner"),
});

/* --------------------------------------------------- admin: user manager */

/**
 * Identity fields for creating/editing an admin user inside the CMS.
 * The password is validated separately (adminPasswordSchema) because it is
 * required when creating but optional when editing (blank = keep current).
 */
export const adminUserSchema = z.object({
  email: z.string().trim().email("Enter a valid email").max(200),
  name: z.string().trim().min(2, "Enter a name").max(120),
  role: adminRoleSchema.default("editor"),
});

/* --------------------------------------------------- admin: content */

const slug = z
  .string()
  .trim()
  .min(1)
  .max(160)
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Lowercase letters, numbers and hyphens only");

const status = z.enum(CONTENT_STATUS);

export const pageSchema = z.object({
  slug,
  title: z.string().trim().min(1).max(200),
  status,
  heroHeading: z.string().trim().max(240).optional().or(z.literal("")),
  heroSubheading: z.string().trim().max(600).optional().or(z.literal("")),
  ctaLabel: z.string().trim().max(80).optional().or(z.literal("")),
  ctaHref: z.string().trim().max(300).optional().or(z.literal("")),
  seoTitle: z.string().trim().max(200).optional().or(z.literal("")),
  seoDescription: z.string().trim().max(320).optional().or(z.literal("")),
});

export const pageSectionSchema = z.object({
  type: z.enum(SECTION_TYPES),
  order: z.number().int().min(0),
  isVisible: z.boolean(),
  data: z.record(z.unknown()).default({}),
});

export const serviceSchema = z.object({
  slug,
  title: z.string().trim().min(1).max(200),
  summary: z.string().trim().max(600).default(""),
  icon: z.string().trim().max(60).default("database"),
  heroHeading: z.string().trim().max(240).optional().or(z.literal("")),
  heroSubheading: z.string().trim().max(600).optional().or(z.literal("")),
  body: z.string().trim().max(20000).default(""),
  benefits: z.array(z.string().trim().max(300)).default([]),
  useCases: z.array(z.string().trim().max(300)).default([]),
  workflow: z
    .array(z.object({ title: z.string().trim().max(120), detail: z.string().trim().max(500) }))
    .default([]),
  relatedServiceIds: z.array(z.string()).default([]),
  seoTitle: z.string().trim().max(200).optional().or(z.literal("")),
  seoDescription: z.string().trim().max(320).optional().or(z.literal("")),
  status,
  order: z.number().int().min(0).default(0),
});

export const industrySchema = z.object({
  slug,
  title: z.string().trim().min(1).max(200),
  summary: z.string().trim().max(600).default(""),
  body: z.string().trim().max(20000).default(""),
  icon: z.string().trim().max(60).default("building-2"),
  seoTitle: z.string().trim().max(200).optional().or(z.literal("")),
  seoDescription: z.string().trim().max(320).optional().or(z.literal("")),
  status,
  order: z.number().int().min(0).default(0),
});

export const articleSchema = z.object({
  slug,
  title: z.string().trim().min(1).max(200),
  summary: z.string().trim().max(600).default(""),
  body: z.string().trim().max(60000).default(""),
  featuredMediaId: z.string().optional().or(z.literal("")),
  categoryId: z.string().optional().or(z.literal("")),
  seoTitle: z.string().trim().max(200).optional().or(z.literal("")),
  seoDescription: z.string().trim().max(320).optional().or(z.literal("")),
  status,
});

export const caseStudySchema = z.object({
  slug,
  title: z.string().trim().min(1).max(200),
  client: z.string().trim().max(160).optional().or(z.literal("")),
  summary: z.string().trim().max(600).default(""),
  challenge: z.string().trim().max(8000).default(""),
  solution: z.string().trim().max(8000).default(""),
  outcomes: z.array(z.string().trim().max(300)).default([]),
  verified: z.boolean().default(false),
  status,
  order: z.number().int().min(0).default(0),
});

export const testimonialSchema = z.object({
  author: z.string().trim().min(1).max(160),
  role: z.string().trim().max(160).optional().or(z.literal("")),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  quote: z.string().trim().min(1).max(1200),
  verified: z.boolean().default(false),
  status,
  order: z.number().int().min(0).default(0),
});

export const enquiryStatusSchema = z.object({
  status: z.enum(ENQUIRY_STATUS),
});

export const enquiryNoteSchema = z.object({
  body: z.string().trim().min(1).max(4000),
});

export const settingsSchema = z.object({
  companyName: z.string().trim().min(1).max(160),
  contactEmail: z.string().trim().email().max(200).optional().or(z.literal("")),
  contactPhone: z.string().trim().max(60).optional().or(z.literal("")),
  contactAddress: z.string().trim().max(400).optional().or(z.literal("")),
  footerTagline: z.string().trim().max(400).default(""),
  socialLinks: z
    .array(z.object({ platform: z.string().trim().max(40), url: z.string().url().max(300) }))
    .default([]),
  defaultSeoTitle: z.string().trim().max(200).optional().or(z.literal("")),
  defaultSeoDescription: z.string().trim().max(320).optional().or(z.literal("")),
  primaryCtaLabel: z.string().trim().min(1).max(80),
  primaryCtaHref: z.string().trim().min(1).max(300),
  secondaryCtaLabel: z.string().trim().min(1).max(80),
  secondaryCtaHref: z.string().trim().min(1).max(300),
});
