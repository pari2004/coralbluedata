import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { existsSync, rmSync } from "node:fs";

/**
 * Integration test against a throwaway SQLite DB. Verifies the content-layer
 * authorization boundary (public queries return published/verified only) and
 * that enquiries persist — the two correctness guarantees behind the brief's
 * "draft stays private" and "leads are stored" requirements.
 */
const TEST_DB = "./data/test-content.db";

// Must be set before importing any module that reads env at load time.
process.env.DATABASE_URL = `file:${TEST_DB}`;
process.env.DATABASE_DIALECT = "sqlite";
process.env.SESSION_SECRET = "test-secret-at-least-32-characters-long!!";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let db: any, schema: any, content: any;

const safeRm = (p: string) => {
  try {
    if (existsSync(p)) rmSync(p);
  } catch {
    /* file handle may still be open on Windows — ignore */
  }
};

beforeAll(async () => {
  safeRm(TEST_DB);
  const dbMod = await import("@/db");
  db = dbMod.db;
  schema = await import("@/db/schema");
  const { migrate } = await import("drizzle-orm/libsql/migrator");
  await migrate(db, { migrationsFolder: "./src/db/migrations" });
  content = await import("@/lib/content");

  const uid = () => crypto.randomUUID();
  await db.insert(schema.services).values({ id: uid(), slug: "pub-svc", title: "Published", status: "published", order: 0 });
  await db.insert(schema.services).values({ id: uid(), slug: "draft-svc", title: "Draft", status: "draft", order: 1 });
  await db.insert(schema.testimonials).values({ id: uid(), author: "Ok", quote: "Great", verified: true, status: "published", order: 0 });
  await db.insert(schema.testimonials).values({ id: uid(), author: "Unver", quote: "x", verified: false, status: "published", order: 1 });
  await db.insert(schema.testimonials).values({ id: uid(), author: "Draft", quote: "x", verified: true, status: "draft", order: 2 });
});

afterAll(() => {
  safeRm(TEST_DB);
});

describe("content-layer authorization boundary", () => {
  it("returns only published services to the public", async () => {
    const rows = await content.listPublishedServices();
    expect(rows.map((r: { slug: string }) => r.slug)).toEqual(["pub-svc"]);
  });

  it("does not return a draft service by slug", async () => {
    expect(await content.getPublishedService("draft-svc")).toBeFalsy();
    expect(await content.getPublishedService("pub-svc")).toBeTruthy();
  });

  it("returns only verified AND published testimonials", async () => {
    const rows = await content.listPublicTestimonials();
    expect(rows).toHaveLength(1);
    expect(rows[0].author).toBe("Ok");
  });
});

describe("enquiry persistence", () => {
  it("stores and reads back an enquiry", async () => {
    const id = crypto.randomUUID();
    await db.insert(schema.enquiries).values({ id, name: "Lead", email: "lead@x.com", source: "quote", status: "new" });
    const { eq } = await import("drizzle-orm");
    const row = await db.select().from(schema.enquiries).where(eq(schema.enquiries.id, id)).get();
    expect(row?.email).toBe("lead@x.com");
    expect(row?.status).toBe("new");
  });
});
