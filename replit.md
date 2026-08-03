# V. Ayora

Single-page portfolio, gallery, and print store for V. Ayora — visual artist and musician known for immersive installations at Coachella, Burning Man, and international art festivals.

## Run & Operate

- `pnpm --filter @workspace/v-ayora run dev` — run the frontend (port auto-assigned)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 8080)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React 18 + Vite, Tailwind CSS v4, Framer Motion, Wouter (routing)
- API: Express 5
- DB: PostgreSQL + Drizzle ORM (provisioned, schema empty — contact/newsletter tables pending)
- Fonts: Cormorant Garamond (serif headlines) + Space Grotesk (UI/nav) via Google Fonts
- API codegen: Orval (from OpenAPI spec)

## Where things live

- `artifacts/v-ayora/src/data/products.ts` — **single source of truth** for all artwork/print data (titles, series, technique, year, sizes, prices, availability). Edit this to add/change real artwork.
- `artifacts/v-ayora/src/components/` — one file per section: Navigation, HeroSection, GallerySection, StoreSection, MusicSection, BioSection, ContactSection
- `artifacts/v-ayora/public/images/` — all AI-generated artwork and photography images (13 total)
- `artifacts/v-ayora/src/index.css` — CSS variables: `--color-bg`, `--color-accent` (#b87333 bronze), `--color-bone`, `--font-serif`, `--font-sans`, `--spacing-section`
- `lib/api-spec/openapi.yaml` — API spec (currently only /healthz; add /contact and /newsletter endpoints here)
- `artifacts/api-server/src/routes/` — Express route handlers

## Product

7-section single-page scrolling site:
1. **Hero** — full viewport, parallax desert installation image, poetic serif italic headline
2. **Sala de Obra** — asymmetric museum-hang gallery grid, click-to-modal with ficha técnica + size/price + WhatsApp/email CTAs, filter by serie/formato/disponibilidad
3. **Sala de Prints** — store cards with dynamic size/price selector (A4/$1,200 · A3/$2,500 · A1/$5,500 MXN), WhatsApp purchase flow
4. **Sala de Música / Festivales** — Spotify embed, SoundCloud placeholder, festival hitos timeline (Burning Man, Coachella, Mutek, Sónar), festival photography
5. **Sobre V. Ayora** — curatorial bio, artist portrait, editorial layout
6. **Contacto / Newsletter** — email subscription, WhatsApp direct link, contact form (frontend-only pending backend)
7. **Footer** — wordmark, socials, copyright

## Architecture decisions

- All product/artwork data centralized in `products.ts` — designed for easy migration to a CMS or `products.json` in the future.
- Payment flow uses WhatsApp pre-filled message links — no payment gateway integrated yet. MercadoPago/Stripe is the planned next step.
- Contact form is frontend-only markup — POST /api/contact backend route is pending.
- Images live in `public/images/` (served at `/images/`) — AI-generated placeholders to be replaced with real artwork photos.
- Dark-mode-first design: the theme is permanent dark (`#0a0a0a` background), not a toggle. The CSS `--background` variable is set to near-black in `:root`.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- Image paths must use `/images/X.jpg` format (served from `public/images/`). Do NOT use `/attached_assets/...` paths — those are workspace-level paths not served by Vite.
- The `BASE_PATH` env var is injected by the artifact workflow. Never hardcode `/` — use `import.meta.env.BASE_URL` in app code.
- After any OpenAPI spec change, run codegen before touching frontend code.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
