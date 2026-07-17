import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { TR_RU } from './tr-ru-russian.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const trEntries = JSON.parse(readFileSync(join(root, 'scripts/tr-path-content.json'), 'utf8'));

const pathRu = {};
const missing = [];
for (const { path, text } of trEntries) {
  const ru = TR_RU[text];
  if (!ru) {
    missing.push(text);
    pathRu[path] = text;
  } else {
    pathRu[path] = ru;
  }
}

writeFileSync(join(root, 'scripts/path-ru-final.json'), JSON.stringify(pathRu, null, 2), 'utf8');
console.log('path-ru-final.json entries:', Object.keys(pathRu).length, 'missing TR_RU:', missing.length);
if (missing.length) console.log(missing.slice(0, 5));
