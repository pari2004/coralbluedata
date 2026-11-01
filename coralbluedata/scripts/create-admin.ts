/**
 * Controlled first-admin setup. No default credentials are ever committed or
 * auto-created (brief §9). Supply details via env OR interactive prompt:
 *
 *   ADMIN_EMAIL=you@co.com ADMIN_NAME="You" ADMIN_PASSWORD='…' pnpm create-admin
 *   # or just: pnpm create-admin   (prompts interactively)
 *
 * Passwords must meet the policy in createAdminSchema. Existing emails are
 * updated (password reset) rather than duplicated.
 */
import { existsSync } from "node:fs";
import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";

// Load local env BEFORE importing anything that reads process.env at module load.
if (existsSync(".env.local")) process.loadEnvFile(".env.local");

const { db } = await import("@/db");
const { adminUsers } = await import("@/db/schema");
const { hashPassword } = await import("@/lib/auth/password");
const { createAdminSchema } = await import("@/lib/validation/schemas");
const { eq } = await import("drizzle-orm");

async function ask(question: string, hidden = false): Promise<string> {
  const rl = createInterface({ input: stdin, output: stdout, terminal: true });
  if (hidden) {
    // Best-effort masking: suppress echo while typing the password.
    const anyOut = stdout as unknown as { write: (s: string) => void };
    const onData = () => anyOut.write("[2K[200D" + question);
    stdin.on("data", onData);
    const answer = await rl.question(question);
    stdin.off("data", onData);
    rl.close();
    stdout.write("\n");
    return answer;
  }
  const answer = await rl.question(question);
  rl.close();
  return answer;
}

const email = process.env.ADMIN_EMAIL ?? (await ask("Admin email: "));
const name = process.env.ADMIN_NAME ?? (await ask("Admin name: "));
const password = process.env.ADMIN_PASSWORD ?? (await ask("Admin password (min 12, mixed case + number): ", true));

const parsed = createAdminSchema.safeParse({ email, name, password, role: "owner" });
if (!parsed.success) {
  console.error("❌ Invalid admin details:");
  for (const [field, errs] of Object.entries(parsed.error.flatten().fieldErrors)) {
    console.error(`   - ${field}: ${(errs as string[]).join(", ")}`);
  }
  process.exit(1);
}

const passwordHash = await hashPassword(parsed.data.password);
const existing = await db.select().from(adminUsers).where(eq(adminUsers.email, parsed.data.email)).get();

if (existing) {
  await db
    .update(adminUsers)
    .set({ name: parsed.data.name, passwordHash, role: "owner", updatedAt: new Date() })
    .where(eq(adminUsers.id, existing.id));
  console.log(`✅ Updated existing admin: ${parsed.data.email}`);
} else {
  await db.insert(adminUsers).values({
    id: crypto.randomUUID(),
    email: parsed.data.email,
    name: parsed.data.name,
    passwordHash,
    role: "owner",
  });
  console.log(`✅ Created admin: ${parsed.data.email}`);
}

process.exit(0);
