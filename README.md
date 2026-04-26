# AI Agents Mega Repo

![CI](https://github.com/SamoTech/ai-agents-mega-repo/actions/workflows/ci.yml/badge.svg)

A curated mega monorepo for discovering, cataloging, and extending AI agent and chat projects found on GitHub.

## Seed Inspiration

This starter is modeled around four repo directions surfaced from GitHub search:

| Repo | Category |
|------|----------|
| [cheatcode-ai/cheatcode](https://github.com/cheatcode-ai/cheatcode) | Coding agent, chat interface |
| [bcurts/agentchattr](https://github.com/bcurts/agentchattr) | Local chat, multi-agent |
| [langchain-ai/agent-chat-ui](https://github.com/langchain-ai/agent-chat-ui) | Chat UI, LangGraph, frontend |
| [microsoft/ai-cheatcode](https://github.com/microsoft/ai-cheatcode) | Reference, learning |

## Goals

- Maintain a structured catalog of AI agent repositories
- Provide a reusable core library for loading and filtering entries
- Offer a CLI for listing, validating, and exporting data
- Ship a Next.js web app for browsing the catalog
- Make CI validation easy from day one

## Structure

```
ai-agents-mega-repo/
├── apps/
│   ├── web/              # Next.js catalog app
│   └── docs/             # Documentation site placeholder
├── packages/
│   ├── core/             # Shared data access and helpers
│   ├── types/            # Shared TypeScript types
│   └── cli/              # CLI tooling (list, validate, json)
├── data/
│   └── repos.json        # Curated repository registry
├── docs/
│   ├── ARCHITECTURE.md
│   └── ROADMAP.md
└── .github/
    └── workflows/
        └── ci.yml
```

## Quick Start

```bash
# Install dependencies
pnpm install

# Validate the seed data
pnpm check:data

# Start the web catalog
pnpm dev

# List all repos via CLI
pnpm cli:list

# Export full JSON
pnpm cli:json
```

## Adding New Repos

Edit `data/repos.json` and add an entry:

```json
{
  "slug": "owner/repo-name",
  "name": "repo-name",
  "categories": ["coding-agent", "local-chat"],
  "summary": "Short description of what this repo does.",
  "source": "github",
  "stage": "seed"
}
```

Run `pnpm check:data` to validate before pushing.

## Available Categories

- `coding-agent` — AI agents that write or fix code
- `chat-interface` — interactive chat-based workflows
- `local-chat` — self-hosted or local-first chat systems
- `multi-agent` — multi-agent orchestration frameworks
- `chat-ui` — frontend components for agent UIs
- `frontend` — Next.js / React based web apps
- `langgraph` — LangGraph-powered agents
- `reference` — learning resources and pattern libraries
- `learning` — tutorials, examples, demos

## Roadmap

See [docs/ROADMAP.md](./docs/ROADMAP.md) for planned phases.

## Contributing

1. Fork the repo
2. Add or update entries in `data/repos.json`
3. Run `pnpm check:data`
4. Open a pull request

## License

MIT
