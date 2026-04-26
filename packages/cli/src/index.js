const fs = require('fs');
const path = require('path');

const dataPath = path.resolve(__dirname, '../../../data/repos.json');
const repos = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
const command = process.argv[2] || 'list';

function categories(entries) {
  return [...new Set(entries.flatMap((entry) => entry.categories))].sort();
}

function validate(entries) {
  const errors = [];
  const seen = new Set();
  for (const entry of entries) {
    if (!entry.slug) errors.push('Missing slug');
    if (!entry.name) errors.push(`Missing name for ${entry.slug || 'unknown'}`);
    if (!Array.isArray(entry.categories) || entry.categories.length === 0)
      errors.push(`Missing categories for ${entry.slug || 'unknown'}`);
    if (seen.has(entry.slug)) errors.push(`Duplicate slug: ${entry.slug}`);
    seen.add(entry.slug);
  }
  return errors;
}

if (command === 'list') {
  process.stdout.write(
    repos.map((repo, i) => `${i + 1}. ${repo.slug} [${repo.categories.join(', ')}]`).join('\n')
  );
  process.exit(0);
}

if (command === 'json') {
  process.stdout.write(
    JSON.stringify({ total: repos.length, categories: categories(repos), repos }, null, 2)
  );
  process.exit(0);
}

if (command === 'validate') {
  const errors = validate(repos);
  if (errors.length) {
    process.stderr.write(errors.join('\n'));
    process.exit(1);
  }
  process.stdout.write(
    `Validated ${repos.length} entries across ${categories(repos).length} categories.\n`
  );
  process.exit(0);
}

process.stderr.write(`Unknown command: ${command}\n`);
process.exit(1);
