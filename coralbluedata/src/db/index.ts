/**
 * Database client. Uses Neon serverless Postgres over HTTP via Drizzle.
 * The HTTP driver is stateless and ideal for serverless/edge runtimes
 * (one fetch per query). All application data access goes through this
 * Drizzle instance.
 */
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { env } from "@/env";
import * as schema from "./schema";

const sql = neon(env.DATABASE_URL);

export const db = drizzle(sql, { schema });
export { schema };
export type DB = typeof db;
