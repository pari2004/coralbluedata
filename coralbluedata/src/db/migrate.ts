/**
 * Applies generated SQL migrations to the configured Neon database.
 * Run via `npm run db:migrate`. Forward-only; never drops/resets prod data.
 */
import { migrate } from "drizzle-orm/neon-http/migrator";
import { db } from "@/db";

await migrate(db, { migrationsFolder: "./src/db/migrations" });
console.log("✅ Migrations applied.");
process.exit(0);
