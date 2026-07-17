import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const ruPath = join(root, 'src/data/content/ru.ts');

let source = readFileSync(ruPath, 'utf8');
source = source.replace('export const enContent = buildContent(overlay);', 'export const ruContent = buildContent(overlay);');

const pairs = JSON.parse(readFileSync(join(root, 'scripts/ru-translations-map.json'), 'utf8'));
const sorted = [...pairs].sort((a, b) => b[0].length - a[0].length);

for (const [en, ru] of sorted) {
  source = source.split(en).join(ru);
}

writeFileSync(ruPath, source, 'utf8');
console.log('Applied', pairs.length, 'translations');
