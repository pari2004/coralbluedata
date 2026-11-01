# Project Audit — Coral Blue Data

**Date:** 2026-10-29
**Auditor:** Principal engineer / architect (automated agent)
**Working directory:** `D:\coralblue`

This document separates **verified findings** (things I directly observed in the workspace or toolchain) from **assumptions** (things inferred and not yet confirmed by the business). Nothing here invents company facts.

---

## 1. Verified findings — workspace contents

The workspace is **effectively greenfield**. It contains only:

| Path | What it is | Verified detail |
| --- | --- | --- |
| `migration_plan.md` | A WordPress DreamHost → Hostinger migration checklist | References WordPress, MySQL/phpMyAdmin, `wp-config.php`, Let's Encrypt, nameservers. Confirms the **current production site is WordPress**. |
| `prototype/index.html` | A single static HTML mockup | Uses the **Tailwind CDN** (`cdn.tailwindcss.com`), Google Fonts (Inter + Montserrat). A 1-page marketing mockup: nav, hero, stats bar, 3 solution cards, global-coverage block, quote form, footer. |
| `prototype/styles.css` | Intended stylesheet | **Empty file** (0 bytes of content). |

**There is no application.** No `package.json`, no framework, no routes, no database config, no migrations, no authentication, no tests, no lint/type config, no `.env`, no `.git`.

### 1.1 The prototype contains fabricated marketing claims

The static mockup hardcodes figures and claims that are **not verified business facts** and must **not** be published as real:

- "120M+ B2B Records", "95% Accuracy Rate", "200+ Countries Covered", "15K+ Tech Installs"
- "Compliant with GDPR, CCPA, and regional privacy laws"
- "Human-verified records", "Real-time updates"
- Contact details: `info@coralbluedata.com`, `+1 (555) CORAL-BLUE`, `123 Data Drive, Suite 100, Austin, TX 78701` (placeholder/fake)

**Decision:** The prototype is treated as a *visual/colour-direction reference only*. Its colour palette (navy/coral/electric-blue) and font pairing are reused. **All statistics, compliance claims, testimonials, and contact details are dropped** and replaced with clearly-marked, CMS-editable placeholder content until the business supplies verified information. See `ARCHITECTURE.md` §"Content integrity".

### 1.2 Toolchain (verified by running the tools)

| Tool | Version present |
| --- | --- |
| Node.js | v25.1.0 |
| npm | 11.6.2 |
| pnpm | 11.9.0 |
| git | 2.51.2 (windows) |
| PostgreSQL client (`psql`) | **Not installed** |

Platform: Windows 11, PowerShell primary shell (Bash also available).

---

## 2. Current production website (context, not inspected backend)

- **Verified from `migration_plan.md`:** production is WordPress on DreamHost (MySQL database, standard WP file layout).
- **Public site:** https://www.coralbluedata.com/ — publicly reachable (not re-fetched in this audit pass; the public HTML does **not** reveal the WP admin/backend, plugins, or database, per the brief's warning).
- **Not verified / unknown:** installed plugins, theme, custom snippets, existing content inventory, existing URL structure, existing SEO metadata, email/DNS records, real traffic and ranking URLs. These require owner access to the WP admin and hosting panel.

**We do not have access to the WordPress backend, database, or admin.** Any content migration must be done with exported data the owner provides, or by the owner via the hosting panel.

---

## 3. Assumptions (to be confirmed by the business)

These are working assumptions, each with a **reversible default** so work can proceed safely:

1. **A brand-new bespoke Next.js application is wanted**, replacing WordPress *eventually* — not an in-place WP theme. *Default: build the new app in this repo; keep WP live and untouched until the owner authorises a switch.*
2. **No verified metrics/claims are available yet.** *Default: ship placeholder, clearly-labelled, CMS-editable content; publish nothing as fact.*
3. **Production hosting is undecided** between keeping DreamHost (WP) and moving to Hostinger. *Default: target a Node-capable host (Hostinger VPS, or a managed Node platform) for the new app; document the constraint — see `DEPLOYMENT.md`.*
4. **No Postgres is provisioned yet** and none exists locally. *Default: develop on libSQL/SQLite (file DB, zero external services, runs & tests immediately); schema authored to port to a managed Postgres for production.*
5. **The business owner is non-technical** and must manage all ordinary content via `/admin`. *Default: structured block-based CMS, no raw HTML/code editing required.*
6. **A single/few trusted admin users.** *Default: credential auth, no public self-registration; first admin created via a controlled CLI setup script + env, never a committed default password.*

---

## 4. Risks & constraints

| Risk | Impact | Mitigation |
| --- | --- | --- |
| Hostinger **shared** hosting runs PHP/MySQL, not a persistent Node server | New app cannot deploy to a shared plan | Document VPS/Node-host requirement in `DEPLOYMENT.md`; do not assume static WP-style deploy |
| No access to WP DB / content | Cannot auto-migrate existing pages | Owner-supplied export or manual re-entry via CMS; preserve URLs via redirects doc |
| Fabricated claims in prototype | Legal/trust risk if published | Dropped; replaced with editable placeholders (§1.1) |
| No local Postgres | Can't test against prod engine locally | libSQL dev default; CI/prod uses Postgres; keep SQL portable |
| DNS / live site | Business disruption if changed prematurely | **No DNS or hosting changes** without explicit owner approval |

---

## 5. What proceeds now (safe to implement)

- New Next.js + TypeScript app scaffolded in-repo (does not touch WP).
- Bespoke design system derived from (not copying) the references.
- Database schema + migrations on libSQL (portable to Postgres).
- Secure admin auth foundation.
- Public site + CMS, built in phases (see `IMPLEMENTATION_PLAN.md`).

Nothing in this plan alters the live WordPress site, DNS, or DreamHost hosting.
