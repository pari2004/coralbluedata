import { describe, it, expect } from "vitest";
import { hashPassword, verifyPassword } from "@/lib/auth/password";
import { slugify, excerpt, cn } from "@/lib/utils";
import { rateLimit } from "@/lib/rate-limit";

describe("password hashing", () => {
  it("verifies a correct password and rejects a wrong one", async () => {
    const hash = await hashPassword("CorrectHorse123");
    expect(await verifyPassword("CorrectHorse123", hash)).toBe(true);
    expect(await verifyPassword("wrong", hash)).toBe(false);
  });
});

describe("utils", () => {
  it("slugify normalises text", () => {
    expect(slugify("Data Cleansing & Verification!")).toBe("data-cleansing-verification");
    expect(slugify("  Múltiple   Spaces  ")).toBe("m-ltiple-spaces");
  });
  it("excerpt truncates with an ellipsis", () => {
    expect(excerpt("a".repeat(200), 10)).toHaveLength(10);
    expect(excerpt("short", 100)).toBe("short");
  });
  it("cn joins truthy classes", () => {
    expect(cn("a", false, "b", null, ["c", "d"])).toBe("a b c d");
  });
});

describe("rate limiting", () => {
  it("blocks after the limit within the window", () => {
    const key = `test-${Math.floor(performance.now())}`;
    const limit = 3;
    for (let i = 0; i < limit; i++) expect(rateLimit(key, limit, 60_000).ok).toBe(true);
    expect(rateLimit(key, limit, 60_000).ok).toBe(false);
  });
});
