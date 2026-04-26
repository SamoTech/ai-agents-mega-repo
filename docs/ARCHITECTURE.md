# Architecture

## Layers

| Layer | Package | Role |
|-------|---------|------|
| Data | `data/repos.json` | Source of truth for all repo entries |
| Types | `packages/types` | Shared TypeScript interfaces |
| Logic | `packages/core` | Load, filter, validate, and export helpers |
| CLI | `packages/cli` | Terminal commands: list, json, validate |
| UI | `apps/web` | Next.js catalog web app |
| Docs | `apps/docs` | Documentation placeholder |

## Design Intent

Start small with a curated JSON dataset and expand toward ingestion, enrichment, evaluation, and visualization.

## Adding a Package

1. Create `packages/your-package/src/index.ts`
2. Add `package.json` with `"name": "@repo/your-package"`
3. Export from `src/index.ts`
4. Import in other packages with `@repo/your-package`
