import { readFileSync, writeFileSync } from 'node:fs';

const enStrings = JSON.parse(readFileSync('scripts/en-strings.json', 'utf8'));
const { DICT } = await import('./en-ru-dict-data.mjs');
const missing = enStrings.filter((s) => !DICT[s]);
writeFileSync('scripts/missing-en-strings.json', JSON.stringify(missing, null, 2));
console.log('missing', missing.length);
