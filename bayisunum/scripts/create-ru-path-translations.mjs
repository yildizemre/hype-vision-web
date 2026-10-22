import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildRuOverlay } from './ru-overlay-builder.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

function escapeString(value) {
  return value.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n');
}

function serializeValue(value, indent = 0) {
  const pad = '  '.repeat(indent);
  const padIn = '  '.repeat(indent + 1);
  if (typeof value === 'string') return `'${escapeString(value)}'`;
  if (Array.isArray(value)) {
    return `[\n${value.map((item) => `${padIn}${serializeValue(item, indent + 1)}`).join(',\n')}\n${pad}]`;
  }
  if (value && typeof value === 'object') {
    return `{\n${Object.entries(value)
      .map(([key, val]) => `${padIn}${key}: ${serializeValue(val, indent + 1)}`)
      .join(',\n')}\n${pad}}`;
  }
  return String(value);
}

const entries = JSON.parse(readFileSync(join(root, 'scripts/tr-path-content.json'), 'utf8'));
const enSource = readFileSync(join(root, 'src/data/content/en.ts'), 'utf8');
const enMatch = enSource.match(/const overlay: ContentOverlay = ([\s\S]+);\n\nexport const enContent/);
const enOverlay = Function(`"use strict"; return (${enMatch[1]});`)();

const enByPath = new Map();
for (const [key, meta] of Object.entries(enOverlay.videoCategoryMeta)) {
  enByPath.set(`meta.${key}.label`, meta.label);
  enByPath.set(`meta.${key}.title`, meta.title);
  enByPath.set(`meta.${key}.description`, meta.description);
}
for (const deck of enOverlay.decks) {
  enByPath.set(`deck.${deck.id}.title`, deck.title);
  enByPath.set(`deck.${deck.id}.subtitle`, deck.subtitle);
  enByPath.set(`deck.${deck.id}.tag`, deck.tag);
  for (const slide of deck.slides) {
    enByPath.set(`deck.${deck.id}.slide${slide.index}.title`, slide.title);
    enByPath.set(`deck.${deck.id}.slide${slide.index}.subtitle`, slide.subtitle);
  }
}
for (const video of enOverlay.videoDemos) {
  enByPath.set(`${video.id}.title`, video.title);
  enByPath.set(`${video.id}.subtitle`, video.subtitle);
  for (const insight of video.insights) {
    enByPath.set(`${video.id}.${insight.id}.title`, insight.title);
    insight.paragraphs.forEach((text, index) => {
      enByPath.set(`${video.id}.${insight.id}.p${index}`, text);
    });
  }
}

const enStrings = JSON.parse(readFileSync(join(root, 'scripts/en-strings.json'), 'utf8'));
const { TRANSLATIONS } = await import('./en-ru-dict.mjs');

const pathRu = {};
for (const entry of entries) {
  const en = enByPath.get(entry.path);
  if (!en) throw new Error(`Missing EN for path ${entry.path}`);
  pathRu[entry.path] = TRANSLATIONS[en] ?? en;
}

pathRu['meta.isg.label'] = 'ОТ';
pathRu['deck.isg.tag'] = 'ОТ';
pathRu['deck.isg.title'] = 'Проверка ОТ';

const lines = ['export const PATH_RU = {'];
for (const [path, value] of Object.entries(pathRu)) {
  lines.push(`  ${JSON.stringify(path)}: ${JSON.stringify(value)},`);
}
lines.push('};');
writeFileSync(join(root, 'scripts/ru-path-translations.mjs'), lines.join('\n'), 'utf8');
console.log('Wrote', Object.keys(pathRu).length, 'path translations');
