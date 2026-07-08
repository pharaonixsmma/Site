---
name: Vercel import may already be pnpm_workspace-shaped
description: Some "imported from Vercel" repls are Replit-originated apps that were pushed to GitHub/Vercel and re-imported, not raw Next.js exports.
---

Before assuming a Vercel/v0 import needs Next.js→Vite conversion, inspect `.migration-backup/` structure first. If it already contains `artifacts/<slug>/` with a Vite `index.html` + `src/App.tsx` (no `app/` or `pages/` router, no `next` dependency), the app was likely originally built on Replit, then pushed to Vercel, then re-imported — it's already Vite+React shaped.

**Why:** Treating it as a fresh Next.js port wastes effort inventing a router/build conversion that isn't needed, and risks losing the original artifact/service structure (artifact.toml, workflow wiring) that was already correct.

**How to apply:** Diff `.migration-backup/artifacts/*` and `.migration-backup/lib/*` against the fresh scaffold's `artifacts/*` and `lib/*` first. If they're structurally identical (same package names, same file layout), the task reduces to: create the matching artifact via `createArtifact`, copy over the missing artifact's source/public/config, merge any extra dependencies, and copy any assets referenced via aliases (e.g. `@assets`) that live outside the artifact root (`attached_assets/`). Also strip stray `.replit-artifact/` dirs from `.migration-backup/*` — the artifact scanner will otherwise register them as duplicate live artifacts.
