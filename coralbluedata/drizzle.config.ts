import { defineConfig } from "drizzle-kit";

/**
 * drizzle-kit config for generating & inspecting migrations.
 * Dialect: PostgreSQL (Neon).
 */
export default defineConfig({
  dialect: "postgresql",
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations",
  dbCredentials: {
    url: process.env.DATABASE_URL ?? "",
  },
  verbose: true,
  strict: true,
});
