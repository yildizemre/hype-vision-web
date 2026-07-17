import { readFileSync, writeFileSync } from 'node:fs';
import { trContent } from '../src/data/content/tr.ts';

const enSource = readFileSync('src/data/content/en.ts', 'utf8');
const enMatch = enSource.match(/const overlay: ContentOverlay = ([\s\S]+);\n\nexport const enContent/);
const enOverlay = Function(`"use strict"; return (${enMatch[1]});`)();

const trEntries = JSON.parse(readFileSync('scripts/tr-path-content.json', 'utf8'));
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

const { DICT } = await import('./en-ru-dict-data.mjs');
const PATH_RU = {};

for (const { path } of trEntries) {
  const en = enByPath.get(path);
  if (!en) throw new Error(`Missing EN for ${path}`);
  PATH_RU[path] = DICT[en] ?? en;
}

PATH_RU['meta.isg.label'] = 'ОТ';
PATH_RU['deck.isg.tag'] = 'ОТ';
PATH_RU['deck.isg.title'] = 'Проверка ОТ';

const lines = ['export const PATH_RU = {'];
for (const [path, value] of Object.entries(PATH_RU)) {
  lines.push(`  ${JSON.stringify(path)}: ${JSON.stringify(value)},`);
}
lines.push('};');
writeFileSync('scripts/ru-path-translations-data.mjs', lines.join('\n'), 'utf8');

const missing = Object.entries(PATH_RU).filter(([, v]) => v === enByPath.get(
  Object.keys(PATH_RU).find((p) => PATH_RU[p] === v) ?? '',
));
console.log('PATH_RU entries', Object.keys(PATH_RU).length);
console.log(
  'Missing DICT entries',
  trEntries.filter(({ path }) => {
    const en = enByPath.get(path);
    return !DICT[en];
  }).length,
);
