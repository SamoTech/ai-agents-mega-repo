import repos from '../../../data/repos.json';
import type { RepoEntry, RepoStats } from '../../types/src';

export function getRepos(): RepoEntry[] {
  return repos as RepoEntry[];
}

export function getCategories(entries: RepoEntry[] = getRepos()): string[] {
  return [...new Set(entries.flatMap((entry) => entry.categories))].sort();
}

export function getStats(entries: RepoEntry[] = getRepos()): RepoStats {
  return {
    total: entries.length,
    categoryCount: getCategories(entries).length
  };
}

export function filterByCategory(category: string, entries: RepoEntry[] = getRepos()): RepoEntry[] {
  return entries.filter((entry) => entry.categories.includes(category));
}

export function validateEntries(entries: RepoEntry[] = getRepos()): string[] {
  const errors: string[] = [];
  const seen = new Set<string>();
  for (const entry of entries) {
    if (!entry.slug) errors.push('Missing slug');
    if (!entry.name) errors.push(`Missing name for ${entry.slug || 'unknown'}`);
    if (!Array.isArray(entry.categories) || entry.categories.length === 0) {
      errors.push(`Missing categories for ${entry.slug || 'unknown'}`);
    }
    if (seen.has(entry.slug)) errors.push(`Duplicate slug: ${entry.slug}`);
    seen.add(entry.slug);
  }
  return errors;
}
