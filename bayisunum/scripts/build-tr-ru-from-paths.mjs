import { readFileSync, writeFileSync } from 'node:fs';

// Build TR_RU keyed by Turkish text from path-aligned Russian translations
const trEntries = JSON.parse(readFileSync('scripts/tr-path-content.json', 'utf8'));
const { PATH_RU } = await import('./ru-path-translations-data.mjs');

const TR_RU = {};
for (const { path, text } of trEntries) {
  TR_RU[text] = PATH_RU[path];
}

const lines = ['export const TR_RU = {'];
for (const [key, value] of Object.entries(TR_RU)) {
  lines.push(`  ${JSON.stringify(key)}: ${JSON.stringify(value)},`);
}
lines.push('};');
writeFileSync('scripts/tr-ru-complete.mjs', lines.join('\n'), 'utf8');
console.log('TR_RU entries', Object.keys(TR_RU).length);
