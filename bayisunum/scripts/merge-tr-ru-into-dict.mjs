import { readFileSync, writeFileSync } from 'node:fs';

const trEntries = JSON.parse(readFileSync('scripts/tr-path-content.json', 'utf8'));
const enSource = readFileSync('src/data/content/en.ts', 'utf8');
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

const { TR_RU } = await import('./tr-ru-complete.mjs');
const { DICT: existing } = await import('./en-ru-dict-data.mjs');
const DICT = { ...existing };

for (const { path, text: trText } of trEntries) {
  const en = enByPath.get(path);
  const ru = TR_RU[trText];
  if (!ru) throw new Error(`Missing TR_RU for path ${path}`);
  DICT[en] = ru;
}

DICT['Summary Message for Customer'] = 'Итоговое сообщение для клиента';

const lines = ['export const DICT = {'];
for (const [key, value] of Object.entries(DICT)) {
  lines.push(`  ${JSON.stringify(key)}: ${JSON.stringify(value)},`);
}
lines.push('};');
writeFileSync('scripts/en-ru-dict-data.mjs', lines.join('\n'), 'utf8');
console.log('DICT entries', Object.keys(DICT).length);
