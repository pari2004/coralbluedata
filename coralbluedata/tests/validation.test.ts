import { describe, it, expect } from "vitest";
import {
  enquirySchema,
  loginSchema,
  serviceSchema,
  createAdminSchema,
} from "@/lib/validation/schemas";

describe("enquirySchema", () => {
  it("accepts a valid enquiry", () => {
    const r = enquirySchema.safeParse({ name: "Jane Doe", email: "jane@acme.com", source: "contact" });
    expect(r.success).toBe(true);
  });

  it("rejects an invalid email", () => {
    const r = enquirySchema.safeParse({ name: "Jane", email: "not-an-email" });
    expect(r.success).toBe(false);
  });

  it("rejects a too-short name", () => {
    const r = enquirySchema.safeParse({ name: "J", email: "jane@acme.com" });
    expect(r.success).toBe(false);
  });

  it("defaults source to contact", () => {
    const r = enquirySchema.parse({ name: "Jane Doe", email: "jane@acme.com" });
    expect(r.source).toBe("contact");
  });
});

describe("loginSchema", () => {
  it("requires a password", () => {
    expect(loginSchema.safeParse({ email: "a@b.com", password: "" }).success).toBe(false);
  });
});

describe("createAdminSchema", () => {
  it("enforces the password policy", () => {
    expect(createAdminSchema.safeParse({ email: "a@b.com", name: "Admin", password: "short" }).success).toBe(false);
    expect(
      createAdminSchema.safeParse({ email: "a@b.com", name: "Admin", password: "LongEnough123" }).success,
    ).toBe(true);
  });
});

describe("serviceSchema", () => {
  it("rejects an invalid slug", () => {
    expect(serviceSchema.safeParse({ slug: "Bad Slug!", title: "X", status: "draft" }).success).toBe(false);
  });
  it("accepts a clean slug", () => {
    const r = serviceSchema.safeParse({ slug: "data-cleansing", title: "Data Cleansing", status: "published" });
    expect(r.success).toBe(true);
  });
});
