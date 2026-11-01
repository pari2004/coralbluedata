# Deployment & Operations — Coral Blue Data

**Date:** 2026-10-29
**Status:** Living document.

> ⚠️ **The live WordPress site on DreamHost must stay running and untouched** until the new app is built, tested, and the owner explicitly authorises a cutover. **No DNS change, no hosting cancellation, no content deletion without written approval.**

---

## 1. What the new app needs to run

The new site is a **Next.js (Node) application** — it is **not** a static site and **not** a WordPress theme. It requires:

| Requirement | Detail |
| --- | --- |
| Node runtime | Node 20+ (built/tested on 25). A persistent process (`next start`) or a Node-serverless platform. |
| Database | SQLite/libSQL file (simplest) **or** managed Postgres. See §3. |
| Media storage | Persistent disk **or** object storage (S3/R2). Shared ephemeral FS is not acceptable for uploads. See §4. |
| Env vars | See §5. |
| SMTP (optional) | For enquiry notifications; app works without it (stores leads regardless). |

### ⚠️ Hostinger suitability

- **Hostinger shared / Web hosting plans run PHP + MySQL only** and cannot host a persistent Node server. The current WordPress site *would* migrate there fine (that is what `migration_plan.md` covers), but **the new Next.js app cannot run on a shared plan.**
- To host the new app on Hostinger you need a **Hostinger VPS** (full Node control) — confirm the plan includes Node 20+, enough RAM (≥1–2 GB), and a database (install Postgres on the VPS, or use managed/Turso).
- Alternatives that fit a Node app with less ops overhead: **Vercel** (native Next.js, serverless — then use managed Postgres/Turso + object storage, since serverless FS is ephemeral), Railway, Render, Fly.io, or a generic VPS (DigitalOcean/Hetzner).

**Recommendation:** Vercel (or a Node VPS) for the app + Neon/Supabase Postgres (or Turso libSQL) + Cloudflare R2/S3 for media. Decision pending owner confirmation (`IMPLEMENTATION_PLAN.md` decision #4).

---

## 2. Local development

```bash
cd coralbluedata
pnpm install
cp .env.example .env.local      # fill values
pnpm db:generate                # generate migration SQL from schema
pnpm db:migrate                 # apply migrations to the local SQLite file
pnpm db:seed                    # labelled dev seed content (isSeed=true)
pnpm create-admin               # create the first admin (prompts; no default pw)
pnpm dev                        # http://localhost:3000  (admin at /admin)
```

Production build check: `pnpm build && pnpm start`.

---

## 3. Database hosting

- **Local / simple prod:** libSQL file (`DATABASE_URL=file:./data/app.db`). Back up by copying the file (see §7).
- **Managed Postgres (recommended for scale):** provision Neon/Supabase/RDS, set `DATABASE_URL` + `DATABASE_DIALECT=postgres`, switch `drizzle.config` dialect, regenerate & apply migrations. Application code is unchanged (Drizzle abstracts it).
- **Turso (hosted libSQL):** keep the SQLite dialect; set `DATABASE_URL`/`DATABASE_AUTH_TOKEN` to the Turso endpoint.

**Never** drop or reset a production database to ease development. Migrations are reviewed SQL under `src/db/migrations/`.

---

## 4. Media storage

Uploads must persist across deploys/restarts:

- **VPS:** a persistent directory (e.g. `/var/coralblue/media`) mounted and backed up; `MEDIA_DRIVER=disk`, `MEDIA_DIR=...`.
- **Serverless (Vercel/etc.):** object storage is required (local FS is ephemeral). `MEDIA_DRIVER=s3` with S3/R2 credentials.

Server validates type/size before storing (images only, size cap). Stored filenames are randomised; display names sanitised.

---

## 5. Environment variables (`.env.example`)

```
# Core
NODE_ENV=production
APP_URL=https://www.coralbluedata.com

# Database
DATABASE_URL=file:./data/app.db        # or postgres://...  or libsql://...
DATABASE_DIALECT=sqlite                 # sqlite | postgres
DATABASE_AUTH_TOKEN=                     # Turso only

# Auth / sessions  (generate a long random value; never commit real values)
SESSION_SECRET=
SESSION_TTL_HOURS=12

# Email (optional; if unset, notifications are skipped and logged — never faked)
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
MAIL_FROM="Coral Blue Data <no-reply@coralbluedata.com>"
MAIL_TO=                                # where enquiry notifications go

# Media
MEDIA_DRIVER=disk                        # disk | s3
MEDIA_DIR=./data/media
S3_ENDPOINT=  S3_BUCKET=  S3_REGION=  S3_ACCESS_KEY_ID=  S3_SECRET_ACCESS_KEY=

# Rate limiting (prod) — optional Upstash/Redis; in-memory fallback for dev
RATE_LIMIT_REDIS_URL=

# Analytics (only when authorised)
ANALYTICS_ID=
```

Secrets live only in the host's env / secret manager. `.env*` is git-ignored; `.env.example` holds keys with empty values.

---

## 6. Deploy & rollback (outline — finalised in Phase 8)

1. Build: `pnpm build`. Fail the deploy if build/type-check/tests fail.
2. Run migrations against the target DB (`pnpm db:migrate`) — reviewed, forward-only.
3. Start/replace the app process (platform-specific).
4. Smoke test: homepage, a service page, `/admin/login`, contact submit → lead appears.
5. **Rollback:** redeploy the previous build artifact; migrations are additive — keep a DB backup from step before. Keep WP/DreamHost live as the ultimate fallback during transition.

---

## 7. Backups & recovery

- **SQLite:** scheduled copy of the DB file + media dir to off-box storage.
- **Postgres:** managed provider automated backups + periodic `pg_dump`.
- **Media:** object-storage versioning or rsync snapshots.
- Test restores periodically.

---

## 8. DNS, SSL, email, domain

- **No DNS change without owner approval.** When authorised: lower TTL first, point A/CNAME (or nameservers) at the new host, issue SSL (Let's Encrypt / platform-managed), verify HTTPS with no mixed content.
- Email deliverability: configure SPF/DKIM/DMARC for the sending domain if SMTP is used.

---

## 9. Content migration & redirects (from WordPress)

- Owner exports WP content (WXR/XML or DB) + supplies the live URL inventory.
- Re-enter / import content via the CMS; map old URLs → new URLs.
- Add 301 redirects (in `next.config` or the platform) to preserve SEO. Documented as a redirect table once the URL inventory is available.

---

## 10. Staging vs production

- Run a staging instance (separate DB + env) for owner review before any cutover.
- Promote to production only after sign-off; WP stays live until then.
