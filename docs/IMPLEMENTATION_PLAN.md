# Implementation Plan — Coral Blue Data

**Date:** 2026-10-29
This plan maps the brief's 8 phases to concrete deliverables and tracks status. It is updated at each phase boundary with "files changed / what works / what remains / decisions needing approval".

Legend: ☐ not started · ◐ in progress · ☑ done

---

## Phase 1 — Audit & docs ☑
- ☑ `docs/PROJECT_AUDIT.md`, `ARCHITECTURE.md`, `IMPLEMENTATION_PLAN.md`, `DEPLOYMENT.md`
- Findings: greenfield workspace; WP on DreamHost is the live site; prototype has fabricated claims (dropped); no local Postgres.

## Phase 2 — Foundation ◐
- ☐ Scaffold Next.js (App Router) + TS strict + Tailwind v3
- ☐ Design tokens (colour, type scale, spacing), global styles, base UI components
- ☐ Drizzle schema (all tables in ARCHITECTURE §4) + initial migration (libSQL)
- ☐ DB client with dev/prod switch; `.env.example`
- ☐ Auth: password hashing, sessions, cookie, login/logout, route guard, middleware
- ☐ `scripts/create-admin.ts` (controlled first admin; no default password)
- ☐ Labelled dev seed (`isSeed = true`)

## Phase 3 — Nav, hero, first 3 sections ◐
- ☐ Premium header: mega-menu (desktop), mobile nav, scroll state, primary + secondary CTA
- ☐ Cinematic hero: oversized headline, original animated data-network (canvas), reduced-motion + mobile fallback
- ☐ Trust/value section (no fabricated logos/stats)
- ☐ Business-challenge section
- ☐ Solutions overview (interactive)
- ☐ Run `next dev`, verify render, refine visuals

## Phase 4 — Homepage + content pages ☐
- ☐ Remaining homepage sections (data workflow, coverage, industries, quality, delivery, case studies, privacy, insights, conversion, footer)
- ☐ Pages: About, Solutions (+ `/solutions/[slug]`), Industries (+ `[slug]`), Coverage, Data quality, Privacy, Resources (+ article `[slug]`), Case studies, Contact, Request a quote, Legal pages
- ☐ Reusable page/section templates, internal linking, clean URLs

## Phase 5 — /admin CMS ☐
- ☐ Login + protected shell (sidebar, nav, responsive)
- ☐ Dashboard with real DB counts (pages, drafts, articles, pending enquiries, recent changes/leads)
- ☐ Page editor (structured blocks, ordering, visibility, SEO, publish status, preview)
- ☐ Blog manager (CRUD, draft/publish, taxonomy, SEO, preview)
- ☐ Services / industries / case studies / testimonials / coverage / nav / CTA managers
- ☐ Media library (upload, validate, alt text, reuse, safe delete)
- ☐ Lead management (list, detail, search/filter, status, notes, export)
- ☐ Site settings
- ☐ Confirmations on destructive actions; unsaved-change guard; audit logging

## Phase 6 — Wire public → CMS ☐
- ☐ All public pages read published-only content via `lib/content`
- ☐ Draft/publish verified end-to-end; drafts never leak

## Phase 7 — Motion, a11y, SEO, perf, responsive ☐
- ☐ GSAP/ScrollTrigger reveals, hero choreography, hover/menu/CTA transitions, optional pin
- ☐ `prefers-reduced-motion`, no scroll-jack, no CLS, timeline cleanup, static fallbacks
- ☐ Three.js coverage globe (lazy, fallback)
- ☐ Semantic HTML, headings, focus states, labels, contrast, keyboard nav
- ☐ Metadata, canonical, OG, `sitemap.ts`, `robots.ts`, breadcrumbs, verified-only structured data
- ☐ Image sizing, font optimisation, reduced JS, error boundaries
- ☐ Responsive at desktop/laptop/tablet/mobile; no horizontal overflow

## Phase 8 — Test, build, deploy ☐
- ☐ Vitest: validation, auth, authz boundaries, CRUD, draft/publish, lead persistence
- ☐ Playwright (if env allows): nav, contact form, admin login/CRUD, unauthorized API
- ☐ `next build` (production), `tsc --noEmit`, lint — report actual results
- ☐ Finalize `DEPLOYMENT.md`, redirects, admin how-to guide
- ☐ Record completed features, test results, known limitations

---

## Decisions needing business confirmation (tracked)
1. Confirmed service list & which are live.
2. Any verified stats / certifications / testimonials / case studies / clients.
3. Real contact details, address, phone, social links.
4. Final hosting target (Hostinger VPS vs managed Node host) & DB (Postgres vs Turso).
5. Logo/brand assets (current is a placeholder "C" mark).
6. WP content export for migration + URL inventory for redirects.

Until each is confirmed, the corresponding content stays as labelled, unpublished placeholder.

---

## FINAL STATUS — 2026-10-29

All 8 phases implemented. The app lives in `coralbluedata/`.

### Phase status
- Phase 1 Audit & docs — ☑
- Phase 2 Foundation (Next.js, design system, Drizzle schema + migration, auth, create-admin, seed) — ☑
- Phase 3 Nav, hero, first sections — ☑
- Phase 4 Full homepage (14 sections) + all content pages + enquiry pipeline — ☑
- Phase 5 CMS (auth, dashboard, leads, 6 content types CRUD, media, settings, pages/blocks) — ☑
- Phase 6 Public pages read published-only via the content layer — ☑
- Phase 7 GSAP hero, Three.js globe, reveals, reduced-motion, sitemap/robots, JSON-LD, error boundary — ☑
- Phase 8 Tests + production build + deployment docs — ☑

### Verified results (actually executed)
- `tsc --noEmit` — **passes, no errors**.
- `next lint` — **"No ESLint warnings or errors"**.
- `next build` — **succeeds**, 40 static pages generated, ~50 routes, 103–139 kB first-load JS.
- `vitest run` — **17/17 passing** across 3 files (validation, unit, DB integration).
- DB pipeline — migration applied (20 tables), seed + create-admin run successfully.
- Runtime smoke tests (curl, dev + production `next start`):
  - All public pages return 200; unknown route returns 404.
  - Enquiry API persists to DB (verified row); invalid input → 422; honeypot handled.
  - `/admin` unauthenticated → 307 redirect to `/admin/login`; authenticated → 200 across all admin pages.
  - Draft content (seed testimonials/case studies/coverage) confirmed **not** publicly visible; published content visible.
  - `/sitemap.xml` and `/robots.txt` serve correctly; CSV lead export works for authed admins.

### NOT done in this environment (honest limitations)
- **No real browser / Lighthouse / visual inspection.** Verification was via HTTP status, HTML-content assertions, build, and automated tests — **not** a browser. Playwright E2E and Lighthouse are set up conceptually but browsers aren't installed here; run `npx playwright install` then add E2E specs, and run Lighthouse against a deployed URL. No performance/accessibility scores are claimed.
- **Edge middleware removed.** Next's edge-runtime middleware crashed with "self is not defined" on this Node 25 build, 500-ing all matched routes. Auth is fully enforced server-side instead (the `/admin` panel layout calls `requireUser()` which redirects; every admin API re-checks the session). Re-add defense-in-depth middleware once on a Node/Next combo where the edge runtime is stable, or as Node-runtime middleware.
- **Email notifications** are disabled until SMTP env vars are set. The app is honest about this: enquiries are always stored, and the API returns `emailSent:false` rather than pretending.
- **Database is SQLite/libSQL** locally. Production Postgres is a documented, code-compatible switch (ARCHITECTURE §6), not yet exercised.
- **`npm audit`** reports vulnerabilities in dev-only tooling (drizzle-kit/esbuild chain). `next` itself was upgraded to a patched 15.5.x. Review before production.
- **All business facts remain placeholder** pending owner confirmation (see decisions list above).

### First-run commands
```
cd coralbluedata
npm install
cp .env.example .env.local   # set SESSION_SECRET (see the file)
npm run db:migrate
npm run db:seed              # optional labelled starter content
ADMIN_EMAIL=you@co.com ADMIN_NAME="You" ADMIN_PASSWORD='…' npm run create-admin
npm run dev                  # http://localhost:3000  · CMS at /admin
```
Scripts: `npm run build|start|typecheck|lint|test|db:generate`.

