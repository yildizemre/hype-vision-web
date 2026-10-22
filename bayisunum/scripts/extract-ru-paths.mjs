import { trContent } from '../src/data/content/tr.ts';
import { writeFileSync } from 'node:fs';

const paths = [];

for (const [key, meta] of Object.entries(trContent.videoCategoryMeta)) {
  paths.push(`meta.${key}.label`, `meta.${key}.title`, `meta.${key}.description`);
}

for (const deck of trContent.decks) {
  paths.push(`deck.${deck.id}.title`, `deck.${deck.id}.subtitle`, `deck.${deck.id}.tag`);
  for (const slide of deck.slides) {
    paths.push(`deck.${deck.id}.slide${slide.index}.title`, `deck.${deck.id}.slide${slide.index}.subtitle`);
  }
}

for (const video of trContent.videoDemos) {
  paths.push(`${video.id}.title`, `${video.id}.subtitle`);
  for (const insight of video.insights) {
    paths.push(`${video.id}.${insight.id}.title`);
    insight.paragraphs.forEach((_, i) => paths.push(`${video.id}.${insight.id}.p${i}`));
  }
}

writeFileSync('scripts/ru-paths.json', JSON.stringify([...new Set(paths)], null, 2));
console.log('paths', new Set(paths).size);
