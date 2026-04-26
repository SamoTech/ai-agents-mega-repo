# Contributing

Contributions are welcome! Here is how to add a new repo entry.

## Adding a repo

1. Edit `data/repos.json`
2. Add your entry following the schema:

```json
{
  "slug": "owner/repo",
  "name": "repo",
  "categories": ["coding-agent"],
  "summary": "One sentence description.",
  "source": "github",
  "stage": "seed"
}
```

3. Run `pnpm check:data` to validate
4. Commit and open a pull request

## Stages

| Stage | Meaning |
|-------|---------|
| `seed` | Added but not deeply verified |
| `curated` | Reviewed and tagged |
| `verified` | Benchmarked or evaluated |
