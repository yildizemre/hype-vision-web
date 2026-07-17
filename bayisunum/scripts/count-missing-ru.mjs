import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { DICT } from './en-ru-dict-data.mjs';
import { SUPPLEMENT } from './en-ru-supplement-data.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const enSource = readFileSync(join(root, 'src/data/content/en.ts'), 'utf8');
const match = enSource.match(/const overlay: ContentOverlay = ([\s\S]+);\n\nexport const enContent/);
const overlay = Function(`"use strict"; return (${match[1]});`)();

const all = { ...DICT, ...SUPPLEMENT, 'Summary Message for Customer': 'Итоговое сообщение для клиента' };
const strings = [];
function walk(n, k) {
  if (typeof n === 'string' && k !== 'id') strings.push(n);
  else if (Array.isArray(n)) n.forEach((i) => walk(i));
  else if (n && typeof n === 'object') Object.entries(n).forEach(([k, v]) => walk(v, k));
}
walk(overlay);

const missing = [...new Set(strings.filter((s) => !all[s] || all[s] === s))];
console.log('Total strings:', strings.length);
console.log('Still untranslated:', missing.length);
writeFileSync(join(dirname(fileURLToPath(import.meta.url)), 'still-missing-ru.json'), JSON.stringify(missing, null, 2));
