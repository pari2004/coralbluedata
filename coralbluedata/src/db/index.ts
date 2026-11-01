/**
 * Database client. Uses libSQL (SQLite) per docs/ARCHITECTURE.md §6.
 * All application data access goes through this Drizzle instance so a future
 * move to Postgres only touches this file + drizzle.config, not business code.
 */
import { mkdirSync, existsSync } from "node:fs";
import { dirname } from "node:path";
import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import { env } from "@/env";
import * as schema from "./schema";

// For local file-backed databases, make sure the parent directory exists
// before libSQL tries to open the file (SQLITE_CANTOPEN otherwise).
if (env.DATABASE_URL.startsWith("file:")) {
  const filePath = env.DATABASE_URL.replace(/^file:/, "");
  const dir = dirname(filePath);
  if (dir && dir !== "." && !existsSync(dir)) mkdirSync(dir, { recursive: true });
}

const client = createClient({
  url: env.DATABASE_URL,
  authToken: env.DATABASE_AUTH_TOKEN,
});

export const db = drizzle(client, { schema });
export { schema };
export type DB = typeof db;
