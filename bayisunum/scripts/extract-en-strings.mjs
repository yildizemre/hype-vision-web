import { readFileSync, writeFileSync } from 'node:fs';

const source = readFileSync('src/data/content/en.ts', 'utf8');
const match = source.match(/const overlay: ContentOverlay = ([\s\S]+);\n\nexport const enContent/);
const overlay = Function(`"use strict"; return (${match[1]});`)();
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

walk(overlay);
writeFileSync('scripts/en-strings.json', JSON.stringify([...strings].sort(), null, 2));
console.log('strings', strings.size);
