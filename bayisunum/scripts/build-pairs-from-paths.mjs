import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { trContent } from '../src/data/content/tr.ts';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const enSource = readFileSync(join(root, 'src/data/content/en.ts'), 'utf8');
const enMatch = enSource.match(/const overlay: ContentOverlay = ([\s\S]+);\n\nexport const enContent/);
const enOverlay = Function(`"use strict"; return (${enMatch[1]});`)();

const trEntries = JSON.parse(readFileSync(join(root, 'scripts/tr-path-content.json'), 'utf8'));
const { PATH_RU } = await import('./ru-path-translations-data.mjs');

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

const pairs = trEntries.map(({ path }) => {
  const en = enByPath.get(path);
  const ru = PATH_RU[path];
  if (!en || !ru) throw new Error(`Missing pair for ${path}`);
  return [en, ru];
});

writeFileSync(join(root, 'scripts/en-ru-pairs.json'), JSON.stringify(pairs));
console.log('pairs', pairs.length);
