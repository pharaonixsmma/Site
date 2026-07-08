# PHARAONIX Studio

Premium 3D interactive website for PHARAONIX — a digital marketing agency serving Indian businesses.

## Run & Operate

- `pnpm --filter @workspace/studio run dev` — run the 3D studio website (main artifact)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## GitHub

- Remote: `https://github.com/pharaonixsmma/Site.git`
- Branch: `main`
- To push updates: ensure `GITHUB_TOKEN` secret is set, then the `github` remote in `.git/config` uses it for auth

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, React Three Fiber, GSAP, Framer Motion, Tailwind CSS
- API: Express 5
- Fonts: Cormorant Garamond (serif), Space Grotesk (sans), Space Mono (mono)
- Color palette: `#0B0B0B` bg, `#D4AF37` gold primary, white

## Where things live

- `artifacts/studio/` — main 3D website artifact
- `artifacts/studio/src/components/sections/` — all page sections (Hero, Work, Portfolio, About, Process, Contact)
- `artifacts/studio/src/components/3d/` — Three.js scene and particle field
- `artifacts/studio/src/components/ui/ServicePreview.tsx` — animated service card mockups
- `artifacts/studio/src/components/ui/ProjectPreview.tsx` — portfolio project mockups
- `artifacts/api-server/` — Express API server

## Architecture decisions

- Contract-first API with OpenAPI spec + Orval codegen for hooks and Zod schemas
- All section animations use GSAP ScrollTrigger; entrance animations use Framer Motion
- Service/portfolio cards use pure CSS/SVG/DOM mockups (no images) for live previews
- LoaderOverlay removed — hero entrance animations fire directly at page load

## Product

Awwwards-level 3D interactive marketing website for PHARAONIX digital agency. Features a React Three Fiber hero scene, animated service card previews, portfolio showcases, 5-step process section, and a contact/consultation form.

## User preferences

- Gold (#D4AF37) on black (#090909 / #0B0B0B) luxury aesthetic throughout
- No spinning, bouncing, or flashy effects — smooth 60fps, minimal, cinematic
- Space Mono for labels/mono text, Cormorant Garamond for display headings

## Gotchas

- `git remote add` is sandboxed in the Replit main agent — the GitHub remote was added by writing directly to `.git/config` via Python
- GITHUB_TOKEN PAT is embedded in the `.git/config` remote URL — rotate it at github.com/settings/tokens after use
- Do NOT run `pnpm dev` at workspace root; use `restart_workflow` to start individual artifacts

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
