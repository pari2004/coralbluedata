/**
 * Applies generated SQL migrations to the configured database.
 * Run via `pnpm db:migrate`. Forward-only; never drops/resets prod data.
 */
import { mkdirSync, existsSync } from "node:fs";
import { dirname } from "node:path";
import { migrate } from "drizzle-orm/libsql/migrator";
import { db } from "@/db";
import { env } from "@/env";

// Ensure the SQLite file's directory exists for local/file DBs.
if (env.DATABASE_URL.startsWith("file:")) {
  const path = env.DATABASE_URL.replace(/^file:/, "");
  const dir = dirname(path);
  if (dir && !existsSync(dir)) mkdirSync(dir, { recursive: true });
}

await migrate(db, { migrationsFolder: "./src/db/migrations" });
console.log("✅ Migrations applied.");
process.exit(0);
