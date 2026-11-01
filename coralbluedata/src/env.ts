/**
 * Centralised, validated environment access. Import `env` anywhere server-side.
 * Never import this into a client component — it would leak secrets.
 */
import { z } from "zod";

const schema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  APP_URL: z.string().url().default("http://localhost:3000"),

  DATABASE_URL: z.string().min(1, "DATABASE_URL is required (Neon Postgres connection string)"),
  DATABASE_DIALECT: z.enum(["sqlite", "postgres"]).default("postgres"),
  DATABASE_AUTH_TOKEN: z.string().optional(),

  SESSION_SECRET: z
    .string()
    .min(32, "SESSION_SECRET must be at least 32 characters")
    // A dev-only fallback so the app runs out of the box locally. Production
    // MUST set a real secret; see the guard below.
    .default("dev-only-insecure-secret-change-me-32chars!!"),
  SESSION_TTL_HOURS: z.coerce.number().int().positive().default(12),

  SMTP_HOST: z.string().optional(),
  SMTP_PORT: z.coerce.number().optional(),
  SMTP_USER: z.string().optional(),
  SMTP_PASS: z.string().optional(),
  MAIL_FROM: z.string().optional(),
  MAIL_TO: z.string().optional(),

  MEDIA_DRIVER: z.enum(["disk", "s3"]).default("disk"),
  MEDIA_DIR: z.string().default("./data/media"),
});

const parsed = schema.safeParse(process.env);

if (!parsed.success) {
  console.error("❌ Invalid environment variables:", parsed.error.flatten().fieldErrors);
  throw new Error("Invalid environment configuration");
}

export const env = parsed.data;

// Fail fast in production if the insecure dev secret was left in place.
if (env.NODE_ENV === "production" && env.SESSION_SECRET.startsWith("dev-only-")) {
  throw new Error("SESSION_SECRET must be set to a secure value in production.");
}

export const emailConfigured = Boolean(
  env.SMTP_HOST && env.SMTP_PORT && env.SMTP_USER && env.SMTP_PASS && env.MAIL_TO,
);
