# Roadmap

## Phase 1 — Foundation (current)
- [x] Curated seed registry (`data/repos.json`)
- [x] Shared TypeScript types (`packages/types`)
- [x] Core helpers: load, filter, validate (`packages/core`)
- [x] CLI: list, json, validate (`packages/cli`)
- [x] Next.js web catalog scaffold (`apps/web`)
- [x] GitHub Actions CI (`ci.yml`)

## Phase 2 — Enrichment
- [ ] Zod schema for `RepoEntry`
- [ ] GitHub API enrichment (stars, forks, last commit)
- [ ] Star history snapshots
- [ ] Search and tag filters in the web app
- [ ] Markdown report generation from CLI

## Phase 3 — Evaluation
- [ ] Benchmark metadata for agent runtimes
- [ ] Task packs for coding agent evaluation
- [ ] Evaluation dashboard
- [ ] Automated sync workflows via GitHub Actions
- [ ] Import pipelines from curated public lists
