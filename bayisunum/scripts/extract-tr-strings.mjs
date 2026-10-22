import { readFileSync, writeFileSync } from 'node:fs';
import { trContent } from '../src/data/content/tr.ts';

const strings = new Set();

function walk(value, key) {
  if (typeof value === 'string') {
    if (key !== 'id') strings.add(value);
    return;
  }
  if (Array.isArray(value)) value.forEach((item) => walk(item));
  else if (value && typeof value === 'object') {
    for (const [k, v] of Object.entries(value)) walk(v, k);
  }
}

walk(trContent);
writeFileSync('scripts/tr-strings.json', JSON.stringify([...strings].sort(), null, 2));
console.log('tr strings', strings.size);
