"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { eq, max, asc } from "drizzle-orm";
import { db } from "@/db";
import { pages, pageSections, SECTION_TYPES, type SectionType } from "@/db/schema";
import { requireApiUser } from "@/lib/auth/guard";
import { pageSchema } from "@/lib/validation/schemas";
import { logAudit } from "@/lib/audit";

const uid = () => crypto.randomUUID();
const str = (v: FormDataEntryValue | null) => String(v ?? "").trim();
const lines = (v: FormDataEntryValue | null) =>
  String(v ?? "").split("\n").map((l) => l.trim()).filter(Boolean);

type Result = { error?: string } | void;

function revalidatePage(slug?: string) {
  revalidatePath("/");
  if (slug) revalidatePath(`/pages/${slug}`);
}

/* ------------------------------------------------------------- page meta */

export async function savePage(id: string | null, _prev: Result, formData: FormData): Promise<Result> {
  const user = await requireApiUser();
  const parsed = pageSchema.safeParse({
    slug: str(formData.get("slug")),
    title: str(formData.get("title")),
    status: str(formData.get("status")) || "draft",
    heroHeading: str(formData.get("heroHeading")),
    heroSubheading: str(formData.get("heroSubheading")),
    ctaLabel: str(formData.get("ctaLabel")),
    ctaHref: str(formData.get("ctaHref")),
    seoTitle: str(formData.get("seoTitle")),
    seoDescription: str(formData.get("seoDescription")),
  });
  if (!parsed.success) return { error: parsed.error.errors[0]?.message ?? "Invalid input" };
  const d = parsed.data;
  const publishedAt = d.status === "published" ? new Date() : null;

  if (id) {
    const existing = await db.select().from(pages).where(eq(pages.id, id)).then((r) => r[0]);
    await db
      .update(pages)
      .set({
        ...d,
        publishedAt: d.status === "published" ? existing?.publishedAt ?? publishedAt : null,
        updatedAt: new Date(),
      })
      .where(eq(pages.id, id));
    await logAudit({ actorId: user.id, action: "page.update", entityType: "page", entityId: id });
    revalidatePage(d.slug);
    redirect(`/admin/pages/${id}`);
  } else {
    const newId = uid();
    await db.insert(pages).values({ id: newId, ...d, publishedAt, isSeed: false });
    await logAudit({ actorId: user.id, action: "page.create", entityType: "page", entityId: newId });
    revalidatePage(d.slug);
    redirect(`/admin/pages/${newId}`);
  }
}

export async function deletePage(id: string): Promise<void> {
  const user = await requireApiUser();
  await db.delete(pages).where(eq(pages.id, id)); // sections cascade
  await logAudit({ actorId: user.id, action: "page.delete", entityType: "page", entityId: id });
  revalidatePath("/");
  redirect("/admin/pages");
}

/* ------------------------------------------------------------- sections */

export async function addSection(pageId: string, formData: FormData): Promise<void> {
  const user = await requireApiUser();
  const type = str(formData.get("type")) as SectionType;
  if (!SECTION_TYPES.includes(type)) return;
  const maxRow = await db.select({ m: max(pageSections.order) }).from(pageSections).where(eq(pageSections.pageId, pageId)).then((r) => r[0]);
  const order = (maxRow?.m ?? -1) + 1;
  await db.insert(pageSections).values({ id: uid(), pageId, type, order, isVisible: true, data: {} });
  await logAudit({ actorId: user.id, action: "section.add", entityType: "page_section", entityId: pageId, meta: { type } });
  revalidatePath(`/admin/pages/${pageId}`);
}

/** Parse the section edit form into a typed data object based on section type. */
function parseSectionData(type: SectionType, formData: FormData): Record<string, unknown> {
  const heading = str(formData.get("heading"));
  switch (type) {
    case "rich_text":
      return { heading, body: str(formData.get("body")) };
    case "cta":
      return { heading, body: str(formData.get("body")), label: str(formData.get("label")), href: str(formData.get("href")) };
    case "feature_grid":
    case "steps":
      return {
        heading,
        items: lines(formData.get("items")).map((l) => {
          const [t, ...rest] = l.split("|");
          return { title: (t ?? "").trim(), detail: rest.join("|").trim() };
        }),
      };
    case "faq":
      return {
        heading,
        items: lines(formData.get("items")).map((l) => {
          const [q, ...rest] = l.split("|");
          return { q: (q ?? "").trim(), a: rest.join("|").trim() };
        }),
      };
    case "stat_band":
      return {
        heading,
        items: lines(formData.get("items")).map((l) => {
          const [value, ...rest] = l.split("|");
          return { value: (value ?? "").trim(), label: rest.join("|").trim() };
        }),
      };
    case "media":
      return { url: str(formData.get("url")), alt: str(formData.get("alt")), caption: str(formData.get("caption")) };
    default:
      return { heading, body: str(formData.get("body")) };
  }
}

export async function updateSection(sectionId: string, pageId: string, formData: FormData): Promise<void> {
  const user = await requireApiUser();
  const section = await db.select().from(pageSections).where(eq(pageSections.id, sectionId)).then((r) => r[0]);
  if (!section) return;
  const data = parseSectionData(section.type, formData);
  const isVisible = formData.get("isVisible") === "on";
  await db.update(pageSections).set({ data, isVisible, updatedAt: new Date() }).where(eq(pageSections.id, sectionId));
  await logAudit({ actorId: user.id, action: "section.update", entityType: "page_section", entityId: sectionId });
  revalidatePath(`/admin/pages/${pageId}`);
}

export async function deleteSection(sectionId: string, pageId: string): Promise<void> {
  const user = await requireApiUser();
  await db.delete(pageSections).where(eq(pageSections.id, sectionId));
  await logAudit({ actorId: user.id, action: "section.delete", entityType: "page_section", entityId: sectionId });
  revalidatePath(`/admin/pages/${pageId}`);
}

/** Swap order with the adjacent section in the given direction. */
export async function moveSection(sectionId: string, pageId: string, dir: "up" | "down"): Promise<void> {
  await requireApiUser();
  const all = await db.select().from(pageSections).where(eq(pageSections.pageId, pageId)).orderBy(asc(pageSections.order));
  const idx = all.findIndex((s) => s.id === sectionId);
  if (idx === -1) return;
  const swapWith = dir === "up" ? idx - 1 : idx + 1;
  if (swapWith < 0 || swapWith >= all.length) return;
  const a = all[idx]!;
  const b = all[swapWith]!;
  await db.update(pageSections).set({ order: b.order }).where(eq(pageSections.id, a.id));
  await db.update(pageSections).set({ order: a.order }).where(eq(pageSections.id, b.id));
  revalidatePath(`/admin/pages/${pageId}`);
}
