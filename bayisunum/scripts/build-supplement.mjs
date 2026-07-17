import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { trContent } from '../src/data/content/tr.ts';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const missing = JSON.parse(readFileSync(join(root, 'scripts/missing-ru-keys.json'), 'utf8'));

function escapeString(value) {
  return value.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n');
}

function walkTr(node, key, path, map) {
  if (typeof node === 'string') {
    if (key !== 'id' && key !== 'accent') map.set(path.join('.'), node);
    return;
  }
  if (Array.isArray(node)) {
    node.forEach((item, i) => walkTr(item, String(i), [...path, String(i)], map));
    return;
  }
  if (node && typeof node === 'object') {
    for (const [k, v] of Object.entries(node)) walkTr(v, k, [...path, k], map);
  }
}

const trByPath = new Map();
walkTr(trContent, 'root', [], trByPath);

// Build EN path map from en.ts
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

const trEntries = JSON.parse(readFileSync(join(root, 'scripts/tr-path-content.json'), 'utf8'));
const enToTr = new Map();
for (const { path, text } of trEntries) {
  const en = enByPath.get(path);
  if (en) enToTr.set(en, text);
}

// Load Russian translations keyed by Turkish from path-ru if exists
let pathRu = {};
try {
  pathRu = JSON.parse(readFileSync(join(root, 'scripts/path-ru-final.json'), 'utf8'));
} catch {
  /* empty */
}

const supplement = {};
for (const en of missing) {
  const tr = enToTr.get(en);
  let ru = null;
  if (tr) {
    for (const { path, text } of trEntries) {
      if (text === tr && pathRu[path]) {
        ru = pathRu[path];
        break;
      }
    }
  }
  supplement[en] = ru ?? en;
}

const lines = ['export const SUPPLEMENT = {'];
for (const [key, value] of Object.entries(supplement)) {
  lines.push(`  '${escapeString(key)}': '${escapeString(value)}',`);
}
lines.push('};');
writeFileSync(join(root, 'scripts/en-ru-supplement-data.mjs'), lines.join('\n'), 'utf8');

const untranslated = Object.values(supplement).filter((v, i) => v === Object.keys(supplement)[i]).length;
console.log('Wrote supplement with', Object.keys(supplement).length, 'entries, still English:', Object.entries(supplement).filter(([k,v])=>k===v).length);
