import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { trContent } from '../src/data/content/tr.ts';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pathRu = JSON.parse(readFileSync(join(root, 'scripts/path-ru-final.json'), 'utf8'));

function ru(path, fallback) {
  return pathRu[path] ?? fallback;
}

function translateInsight(videoId, insight) {
  return {
    id: insight.id,
    title: ru(`${videoId}.${insight.id}.title`, insight.title),
    paragraphs: insight.paragraphs.map((_, index) =>
      ru(`${videoId}.${insight.id}.p${index}`, insight.paragraphs[index]),
    ),
  };
}

function translateVideo(video) {
  return {
    id: video.id,
    title: ru(`${video.id}.title`, video.title),
    subtitle: ru(`${video.id}.subtitle`, video.subtitle),
    insights: video.insights.map((insight) => translateInsight(video.id, insight)),
  };
}

const overlay = {
  videoCategoryMeta: {
    isg: {
      label: ru('meta.isg.label', 'ОТ'),
      title: ru('meta.isg.title', trContent.videoCategoryMeta.isg.title),
      description: ru('meta.isg.description', trContent.videoCategoryMeta.isg.description),
    },
    yangin: {
      label: ru('meta.yangin.label', 'ПОЖАР'),
      title: ru('meta.yangin.title', trContent.videoCategoryMeta.yangin.title),
      description: ru('meta.yangin.description', trContent.videoCategoryMeta.yangin.description),
    },
    verimlilik: {
      label: ru('meta.verimlilik.label', 'ЭФФЕКТИВНОСТЬ'),
      title: ru('meta.verimlilik.title', trContent.videoCategoryMeta.verimlilik.title),
      description: ru('meta.verimlilik.description', trContent.videoCategoryMeta.verimlilik.description),
    },
    custom: {
      label: ru('meta.custom.label', 'CUSTOM'),
      title: ru('meta.custom.title', trContent.videoCategoryMeta.custom.title),
      description: ru('meta.custom.description', trContent.videoCategoryMeta.custom.description),
    },
  },
  decks: trContent.decks.map((deck) => ({
    id: deck.id,
    title: ru(`deck.${deck.id}.title`, deck.title),
    subtitle: ru(`deck.${deck.id}.subtitle`, deck.subtitle),
    tag: deck.id === 'isg' ? 'ОТ' : ru(`deck.${deck.id}.tag`, deck.tag),
    slides:
      deck.id === 'isg'
        ? '__ISG_SLIDES__'
        : deck.slides.map((slide) => ({
            index: slide.index,
            title: ru(`deck.${deck.id}.slide${slide.index}.title`, slide.title),
            subtitle: ru(`deck.${deck.id}.slide${slide.index}.subtitle`, slide.subtitle),
          })),
  })),
  videoDemos: trContent.videoDemos.map(translateVideo),
};

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

let serialized = serializeValue(overlay, 1);
serialized = serialized.replace(
  "slides: '__ISG_SLIDES__'",
  "slides: Array.from({ length: 20 }, (_, i) => ({ index: i + 1, title: `Слайд ${i + 1}`, subtitle: 'Презентация решений ОТ' }))",
);

const fileSource = `import { buildContent } from './merge';
import type { ContentOverlay } from './merge';

const overlay: ContentOverlay = ${serialized};

export const ruContent = buildContent(overlay);
`;

writeFileSync(join(root, 'src/data/content/ru.ts'), fileSource, 'utf8');

const missing = Object.keys(pathRu).length;
console.log('Generated ru.ts with', overlay.videoDemos.length, 'video demos from', missing, 'path translations');
