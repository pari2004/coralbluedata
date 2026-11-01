# Architecture — Coral Blue Data

**Date:** 2026-10-29
**Status:** Living document. Updated as phases land.

This describes the technical architecture of the new bespoke Coral Blue Data website + CMS. It explains the stack, the data model, security, and the content-integrity rules that keep us from publishing unverified claims.

---

## 1. Decision summary

| Area | Choice | Rationale |
| --- | --- | --- |
| Framework | **Next.js (App Router) + React + TypeScript (strict)** | Server-rendered content-heavy pages, shared code for public site + `/admin`, one deployable app. |
| Styling | **Tailwind CSS v3.4** + a design-token layer | Config-based tokens suit a bespoke brand system; battle-tested and predictable. |
| ORM / DB | **Drizzle ORM** on **libSQL/SQLite** (dev) → **Postgres** (prod path) | Runs and tests locally with zero external services; schema ports to managed Postgres. See §6. |
| Auth | **Credential auth**: `bcryptjs` password hashing + `jose`-signed session cookies | Established hashing lib; httpOnly/SameSite/secure cookies; no public registration; no native-compile risk on Node 25. |
| Validation | **Zod** shared schemas | One schema validates form on client, API on server, and types the DB layer. |
| Icons | **lucide-react** | Consistent, tree-shakeable. |
| Animation | **GSAP + ScrollTrigger**, `prefers-reduced-motion` aware | Cinematic, controllable, cleanly disposable timelines. |
| 3D | **Three.js**, dynamically imported, one hero/coverage visual | Purposeful only; lazy-loaded with a static fallback. |
| Email | Pluggable transport (**nodemailer** SMTP), disabled unless configured | Never pretends to send; logs + stores even when email off. |
| Testing | **Vitest** (unit/integration) + **Playwright** (E2E, when env allows) | Covers validation, auth, CRUD, draft/publish, and real browser flows. |

Anything solving a problem a chosen library already solves is **not** added without justification (no duplicate form libs, no second animation lib, etc.).

---

## 2. Application structure

```
coralbluedata/                 (the Next.js app — created in-repo, does not touch WP)
  src/
    app/
      (site)/                  public website route group (server-rendered)
        page.tsx               home
        about/ solutions/ solutions/[slug]/ industries/ industries/[slug]/
        coverage/ data-quality/ privacy/ resources/ resources/[slug]/
        case-studies/ case-studies/[slug]/ contact/ request-a-quote/
        legal/[slug]/          privacy-policy, terms, cookie-policy
      admin/                   CMS (protected)
        login/ (dashboard)/ pages/ blog/ media/ leads/ settings/ ...
      api/                     route handlers (contact submit, admin mutations)
      sitemap.ts robots.ts
    components/
      ui/                      buttons, inputs, cards, dialog, etc. (accessible)
      site/                    nav, footer, section components
      admin/                   CMS shell, tables, editors
      motion/                  GSAP wrappers, reduced-motion hooks
    db/
      schema.ts                Drizzle schema (all tables)
      index.ts                 db client (libSQL / Postgres switch)
      seed.ts                  clearly-labelled dev seed content
      migrations/              generated SQL migrations
    lib/
      auth/                    session, password hashing, guards
      validation/              Zod schemas (shared)
      content/                 content-access layer (published-only for public)
      email/                   transport abstraction
      rate-limit.ts  audit.ts  ...
    styles/                    globals.css, tokens
  scripts/
    create-admin.ts            controlled first-admin setup (no default password)
  drizzle.config.ts  tailwind.config.ts  next.config.ts  vitest/playwright config
```

**Route groups** keep the public marketing layout and the admin app visually and structurally separate while sharing `db/`, `lib/`, and Zod schemas.

---

## 3. Content integrity rules (non-negotiable)

Derived directly from the brief and the audit (`PROJECT_AUDIT.md` §1.1):

1. **Nothing is published as a fact unless the business confirms it.** Stats, accuracy %, coverage counts, certifications (GDPR/CCPA/etc.), testimonials, partnerships, case studies, and contact details are all CMS fields with an **explicit `verified` flag** and start **unpublished**.
2. **Seed/dev content is labelled.** Every seeded row carries `isSeed = true` and placeholder copy reads as placeholder (e.g. "Add your verified figure in /admin"). Seed data is never shown as genuine company information and is trivially purgeable.
3. **Public queries return published content only.** The content-access layer (`lib/content`) filters `status = 'published'` and (where relevant) `verified = true`. Draft edits never affect the live site.
4. **Case studies / testimonials with no confirmed data** render an empty, "coming soon" CMS-driven state — never invented success stories.

---

## 4. Data model (overview)

Drizzle tables (see `src/db/schema.ts` for the source of truth):

- **admin_users** — id, email, name, passwordHash, role (`owner`/`editor`), timestamps, lastLogin.
- **sessions** — id, userId, expiresAt (server-side session records; cookie holds a signed reference).
- **pages** — id, slug, title, status(`draft`/`published`/`archived`), seo (title/description/ogImage), heroHeading, heroSubheading, ctaLabel/ctaHref, publishedAt, timestamps, isSeed.
- **page_sections** — id, pageId(fk), type (enum of block types), order, data (JSON block payload), isVisible. Ordered, reusable content blocks → structured editor, not raw HTML.
- **services** — id, slug, title, summary, hero, benefits(JSON), useCases(JSON), workflow(JSON), relatedServiceIds, seo, status, order, isSeed.
- **industries** — id, slug, title, summary, body, icon, seo, status, order, isSeed.
- **articles** — id, slug, title, summary, body(structured), featuredMediaId, authorId, publishedAt, status, seo, isSeed.
- **categories**, **tags**, **article_tags** (join) — taxonomy.
- **case_studies** — id, slug, title, client (nullable/placeholder), challenge, solution, outcomes(JSON, verified flag), status, isSeed.
- **testimonials** — id, author, role, company, quote, verified(bool), status, isSeed.
- **coverage_entries** — id, region, country, detail, verified(bool), status, order.
- **media** — id, filename, path/url, mime, size, width, height, alt, title, uploadedBy, createdAt.
- **nav_items** — id, menu(enum: header/footer-col), label, href, parentId, order, isVisible.
- **cta_blocks** — id, key, heading, body, label, href (reusable CTAs editable in CMS).
- **enquiries** — id, name, email, company, phone, industry, volume, message, source, status(`new`/`contacted`/`qualified`/`closed`), spamScore, ip, userAgent, createdAt.
- **enquiry_notes** — id, enquiryId(fk), authorId, body, createdAt (internal notes + status history).
- **site_settings** — single-row keyed settings: company name, logo/favicon mediaId, contact info, footer, social links, default SEO, default share image, theme, default CTAs.
- **audit_events** — id, actorId, action, entityType, entityId, meta(JSON), ip, createdAt (important admin actions logged).

All tables: integer/uuid PK, `createdAt`/`updatedAt`, FK constraints, indexes on slugs, status, and foreign keys. Draft/published is explicit everywhere public.

---

## 5. Security model

See the brief §9; implemented as:

- **Auth:** bcrypt-hashed passwords (cost ≥ 12). Sessions are server-side rows; the browser holds an httpOnly, `SameSite=Lax`, `Secure` (prod) cookie containing a `jose`-signed, expiring session id. Logout + expiry invalidate server-side.
- **Authorization:** every `/admin` route and every mutation API re-checks the session server-side (middleware + per-handler guard). Hiding UI is never the control. Public APIs can never read leads or unpublished content.
- **No public admin registration.** First admin is created by `scripts/create-admin.ts` (prompts/env, hashes, inserts). No default credentials are committed or auto-created.
- **CSRF:** mutations use same-origin checks + per-session token on state-changing forms; cookies are `SameSite=Lax`.
- **Rate limiting:** login and public forms are rate-limited (in-memory token bucket for dev; documented Redis/Upstash for prod).
- **Input validation:** shared Zod schemas on client + server; Drizzle parameterises all queries (no string SQL).
- **Uploads:** server validates MIME + extension + size; images only; stored outside the bundle; randomised stored names, sanitised display names.
- **Rich text:** rendered from structured blocks / sanitised; no `dangerouslySetInnerHTML` of untrusted input.
- **Headers:** CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy via `next.config` / middleware.
- **Audit log:** create/update/publish/delete and login events recorded.
- **Secrets:** DB URL, session secret, SMTP creds live only in env (`.env.local`, never committed). `.env.example` documents keys with no values.

---

## 6. Database: dev vs prod

Drizzle supports multiple dialects but schemas are dialect-specific, so we commit to **one SQL dialect family per environment** and keep the schema conservative (no exotic types):

- **Development / this environment / small prod:** libSQL (SQLite file at `./data/app.db`). The `@libsql/client` ships prebuilt binaries — no native compile, works on Node 25. Fast, zero-config, fully testable here.
- **Recommended production:** a managed **Postgres** (Neon/Supabase/RDS) *or* libSQL/Turso if the owner prefers a hosted SQLite. The schema uses portable column types; a `drizzle.config` dialect switch + regenerated migrations covers the move. `DEPLOYMENT.md` documents provisioning either way.

This is the reversible default from the audit: build and test now on SQLite; promote to Postgres when a DB is provisioned, without rewriting application code (all access goes through Drizzle + the `lib/content` layer).

---

## 7. Rendering & performance strategy

- Content pages are **Server Components**, data fetched server-side from the content layer; client JS reserved for genuinely interactive pieces (nav, forms, hero canvas, charts).
- Motion components are client islands, lazy where heavy (Three.js dynamic import, `ssr:false`, with a static fallback image/markup).
- Images use `next/image` with explicit dimensions to avoid CLS.
- Caching: static where possible, revalidate on publish.

---

## 8. What this architecture deliberately avoids

Per the design brief: no repetitive rounded-card grids as the only motif, no gratuitous glassmorphism, no random floating shapes, no meaningless animation, no second library duplicating an existing one, no raw-HTML CMS editing, no fabricated data, and no silent WordPress migration.
