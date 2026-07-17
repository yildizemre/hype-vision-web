import { trContent } from '../src/data/content/tr.ts';
import { writeFileSync } from 'node:fs';

const entries = [];

for (const [key, meta] of Object.entries(trContent.videoCategoryMeta)) {
  entries.push({ path: `meta.${key}.label`, text: meta.label });
  entries.push({ path: `meta.${key}.title`, text: meta.title });
  entries.push({ path: `meta.${key}.description`, text: meta.description });
}

for (const deck of trContent.decks) {
  entries.push({ path: `deck.${deck.id}.title`, text: deck.title });
  entries.push({ path: `deck.${deck.id}.subtitle`, text: deck.subtitle });
  entries.push({ path: `deck.${deck.id}.tag`, text: deck.tag });
  for (const slide of deck.slides) {
    entries.push({ path: `deck.${deck.id}.slide${slide.index}.title`, text: slide.title });
    entries.push({ path: `deck.${deck.id}.slide${slide.index}.subtitle`, text: slide.subtitle });
  }
}

for (const video of trContent.videoDemos) {
  entries.push({ path: `${video.id}.title`, text: video.title });
  entries.push({ path: `${video.id}.subtitle`, text: video.subtitle });
  for (const insight of video.insights) {
    entries.push({ path: `${video.id}.${insight.id}.title`, text: insight.title });
    insight.paragraphs.forEach((text, index) => {
      entries.push({ path: `${video.id}.${insight.id}.p${index}`, text });
    });
  }
}

writeFileSync('scripts/tr-path-content.json', JSON.stringify(entries, null, 2));
console.log('entries', entries.length);
