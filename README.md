# Product Portfolio — Shopify PM & Developer

A Next.js personal product portfolio powered by **Sanity CMS**. The public site is read-only; content is managed separately (not embedded in the UI).

## Architecture

```
┌─────────────────────┐         ┌──────────────────────┐
│  Sanity Studio        │  write  │  Sanity Content API    │
│  (backend / admin)    │ ──────► │  (cloud dataset)       │
│  npm run cms          │         └──────────┬───────────┘
│  or sanity.io/manage  │                    │ read
└─────────────────────┘                    ▼
                                 ┌──────────────────────┐
                                 │  Next.js site        │
                                 │  localhost:3000      │
                                 │  (no CMS in UI)      │
                                 └──────────────────────┘
```

## Quick start (public site)

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Manage content (backend only)

Your portfolio site does **not** include a `/studio` route. Edit content using one of these:

### Option A — Local admin (recommended for dev)

1. Set `.env.local` (copy from `.env.local.example`) with your Sanity **Project ID**
2. Run the standalone studio:

```bash
npm run cms
```

Opens at [http://localhost:3333](http://localhost:3333) (Sanity default port).

3. In [sanity.io/manage](https://www.sanity.io/manage) → **API → CORS**, add:
   - `http://localhost:3333` (local studio)
   - `http://localhost:3000` (optional, for live preview later)

### Option B — Hosted admin (production)

Deploy a private studio URL (not on your portfolio domain):

```bash
npm run cms:deploy
```

You get a URL like `https://your-project.sanity.studio` — bookmark it for editing.

### Option C — sanity.io/manage

Create/edit datasets and API keys at [sanity.io/manage](https://www.sanity.io/manage). For day-to-day content editing, use Option A or B.

## Connect the site to your dataset

1. Create a project at [sanity.io/manage](https://www.sanity.io/manage)
2. Add to `.env.local` (both blocks — studio needs `SANITY_STUDIO_*`):

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_real_project_id
NEXT_PUBLIC_SANITY_DATASET=production

SANITY_STUDIO_PROJECT_ID=your_real_project_id
SANITY_STUDIO_DATASET=production
```

3. Restart `npm run dev` — the site fetches from Sanity instead of sample data
4. Create **Product**, **Case Study**, and **PRD** documents in the studio (`npm run cms`)
5. Mark products as **Featured** to show on the homepage

## Content types

| Type | Purpose |
|------|---------|
| **Product** | Full product page: thinking, roadmap, competitive analysis, article link |
| **Case Study** | Problem / solution / impact + metrics |
| **PRD** | Summary + full body, linked to a product |

Studio config: `sanity.config.ts` (root). Schemas: `sanity/schemas/`. Sample fallback: `src/data/sample-data.ts`.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Public Next.js site (port 3000) |
| `npm run build` | Production build |
| `npm run cms` | Standalone Sanity Studio (port 3333) — **content admin** |
| `npm run cms:deploy` | Deploy hosted studio to `*.sanity.studio` |

## Deploy

- **Site (Vercel, etc.)**: deploy the Next.js app only; set `NEXT_PUBLIC_SANITY_*` env vars. No studio on this domain.
- **CMS**: use `npm run cms:deploy` or run `npm run cms` locally when editing.

## Customize

- **About / Contact**: `src/app/about/page.tsx`, `src/app/contact/page.tsx`
