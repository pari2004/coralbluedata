import { defineConfig } from "drizzle-kit";

/**
 * drizzle-kit config for generating & inspecting migrations.
 * Dialect is SQLite/libSQL for now; switching to Postgres (ARCHITECTURE §6)
 * means changing `dialect` here and regenerating migrations.
 */
export default defineConfig({
  dialect: "sqlite",
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations",
  dbCredentials: {
    url: process.env.DATABASE_URL ?? "file:./data/app.db",
  },
  verbose: true,
  strict: true,
});
