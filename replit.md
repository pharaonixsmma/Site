# PHARAONIX Studio

Premium 3D interactive website for PHARAONIX — a digital marketing agency serving Indian businesses.

## Run & Operate

- `pnpm --filter @workspace/studio run dev` — run the 3D studio website (main artifact)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 8080, proxied at `/api`)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- Apps run via Replit workflows, not root-level `pnpm dev` — use `WorkflowsRestart` or the preview pane.

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, React Three Fiber, GSAP, Framer Motion, Tailwind CSS v4
- API: Express 5 (health check only so far; no DB-backed routes yet)
- Fonts: Cormorant Garamond (serif), Space Grotesk (sans), Space Mono (mono)
- Color palette: `#0B0B0B` bg, `#D4AF37` gold primary, white

## Where things live

- `artifacts/studio/` — main 3D website artifact (previewPath `/`)
- `artifacts/studio/src/components/sections/` — page sections (Hero, Work, Portfolio, About, Process, Contact)
- `artifacts/studio/src/components/3d/` — Three.js scene and particle field
- `artifacts/studio/src/components/ui/ServicePreview.tsx` — animated service card mockups
- `artifacts/studio/src/components/ui/ProjectPreview.tsx` — portfolio project mockups
- `artifacts/api-server/` — Express API server (previewPath `/api`)
- `attached_assets/` — image assets referenced via the `@assets` Vite alias (lives outside the artifact root)
- `lib/db/` — Drizzle/Postgres scaffold, not yet wired to any schema or route

## Architecture decisions

- Contract-first API with OpenAPI spec + Orval codegen for hooks and Zod schemas
- All section animations use GSAP ScrollTrigger; entrance animations use Framer Motion
- Service/portfolio cards use pure CSS/SVG/DOM mockups (no images) for live previews
- LoaderOverlay removed — hero entrance animations fire directly at page load
- `artifacts/studio/vite.config.ts` sets `server.fs.strict: false` because `attached_assets/` lives outside the artifact root

## Product

Awwwards-level 3D interactive marketing website for PHARAONIX digital agency. Features a React Three Fiber hero scene, animated service card previews, portfolio showcases, a 5-step process section, and a contact/consultation form.

## User preferences

- Gold (#D4AF37) on black (#090909 / #0B0B0B) luxury aesthetic throughout
- No spinning, bouncing, or flashy effects — smooth 60fps, minimal, cinematic
- Space Mono for labels/mono text, Cormorant Garamond for display headings

## Gotchas

- Do NOT run `pnpm dev` at workspace root; use `WorkflowsRestart` to start individual artifacts
- The Three.js hero scene needs a WebGL context — some headless/sandboxed screenshot tools without GPU access will show a WebGL error overlay that does not occur in a real browser

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
