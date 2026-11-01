# Coral Blue Data — Website + CMS

A bespoke Next.js (App Router) B2B data-intelligence website with a custom CMS at `/admin`.
Built with TypeScript (strict), Tailwind CSS, Drizzle ORM (libSQL/SQLite → Postgres-ready),
GSAP + Three.js for motion, and server-side credential auth.

Full project documentation lives in **`../docs/`**:
`PROJECT_AUDIT.md`, `ARCHITECTURE.md`, `IMPLEMENTATION_PLAN.md` (+ final status & limitations),
`DEPLOYMENT.md`, and this app's **`docs/ADMIN_GUIDE.md`** (non-technical how-to).

## Quick start

```bash
npm install
cp .env.example .env.local        # then set SESSION_SECRET (command is in the file)
npm run db:migrate                # create tables (SQLite at ./data/app.db)
npm run db:seed                   # optional: labelled starter content
ADMIN_EMAIL=you@co.com ADMIN_NAME="You" ADMIN_PASSWORD='YourStrongPass123' npm run create-admin
npm run dev                       # http://localhost:3000 · CMS at /admin
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server |
| `npm run build` / `start` | Production build / serve |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | ESLint |
| `npm run test` | Vitest suite |
| `npm run db:generate` | Generate a migration from the Drizzle schema |
| `npm run db:migrate` | Apply migrations |
| `npm run db:seed` | Seed labelled dev content (`isSeed=true`) |
| `npm run create-admin` | Create/reset the first admin (no default password) |

## Content integrity

Public pages render **published** content only; testimonials, case studies and coverage must also be
**verified** before they can be published. No fabricated stats, clients, certifications, or contact
details are shipped — placeholders are clearly labelled and editable in `/admin`.

## Project layout

See `../docs/ARCHITECTURE.md` §2. Key dirs: `src/app/(site)` (public), `src/app/admin` (CMS),
`src/db` (schema/migrations/seed), `src/lib` (auth, validation, content access, email, media).
