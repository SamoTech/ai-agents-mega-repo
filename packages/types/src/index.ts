export type RepoEntry = {
  slug: string;
  name: string;
  categories: string[];
  summary: string;
  source: 'github';
  stage: 'seed' | 'curated' | 'verified';
};

export type RepoStats = {
  total: number;
  categoryCount: number;
};
