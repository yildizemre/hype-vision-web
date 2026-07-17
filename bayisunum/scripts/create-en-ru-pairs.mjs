import { readFileSync, writeFileSync } from 'node:fs';

const enStrings = JSON.parse(readFileSync('scripts/en-strings.json', 'utf8'));
const { DICT } = await import('./en-ru-dict-data.mjs');

const pairs = enStrings.map((en) => {
  const ru = DICT[en];
  if (!ru) throw new Error(`Missing RU for: ${en.slice(0, 80)}...`);
  return [en, ru];
});

writeFileSync('scripts/en-ru-pairs.json', JSON.stringify(pairs));
console.log('pairs', pairs.length);
