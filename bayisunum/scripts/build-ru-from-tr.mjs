import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { trContent } from '../src/data/content/tr.ts';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

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

const enSource = readFileSync(join(root, 'src/data/content/en.ts'), 'utf8');
const enMatch = enSource.match(/const overlay: ContentOverlay = ([\s\S]+);\n\nexport const enContent/);
const enOverlay = Function(`"use strict"; return (${enMatch[1]});`)();

const mapPath = join(__dirname, 'ru-translations-map.json');
let pairs = [];
if (readFileSync(mapPath, { encoding: 'utf8', flag: 'r' }).length) {
  pairs = JSON.parse(readFileSync(mapPath, 'utf8'));
}
const translations = new Map(pairs);

function t(text) {
  if (text === 'Müşteriye Özet Mesaj') return 'Итоговое сообщение для клиента';
  if (text === 'Summary Message for Customer') return 'Итоговое сообщение для клиента';
  return translations.get(text) ?? text;
}

function translateInsight(insight) {
  return {
    id: insight.id,
    title: t(insight.title),
    paragraphs: insight.paragraphs.map((p) => t(p)),
  };
}

function translateVideo(video) {
  const enVideo = enOverlay.videoDemos.find((v) => v.id === video.id);
  return {
    id: video.id,
    title: t(enVideo?.title ?? video.title),
    subtitle: t(enVideo?.subtitle ?? video.subtitle),
    insights: video.insights.map(translateInsight),
  };
}

const overlay = {
  videoCategoryMeta: {
    isg: {
      label: 'ОТ',
      title: t('Occupational health and safety demos'),
      description: t(
        'PPE compliance, restricted zone violations, and digital evidence archive — real field recordings and technical insights.',
      ),
    },
    yangin: {
      label: 'ПОЖАР',
      title: t('Early fire detection and disaster management'),
      description: t(
        '10×10 pixel flame detection, fire panel integration, multi-channel alarms, and fire department routing — before classic sensors.',
      ),
    },
    verimlilik: {
      label: 'ЭФФЕКТИВНОСТЬ',
      title: t('Production and operations demos'),
      description: t(
        'OEE, line downtime, cycle time, personnel and product tracking — field proof with measurable efficiency metrics.',
      ),
    },
    custom: {
      label: 'CUSTOM',
      title: t('Custom project demos'),
      description: t(
        'Customer-specific pilot deployments, integration scenarios, and industry-tailored computer vision solutions.',
      ),
    },
  },
  decks: [
    {
      id: 'mes',
      title: t('MES Solution'),
      subtitle: t('Production execution, OEE, line efficiency, and operational visibility'),
      tag: 'MES',
      slides: enOverlay.decks[0].slides.map((slide) => ({
        index: slide.index,
        title: t(slide.title),
        subtitle: t(slide.subtitle),
      })),
    },
    {
      id: 'isg',
      title: 'Проверка ОТ',
      subtitle: t('PPE, restricted zones, fire, and digital evidence archive'),
      tag: 'ОТ',
      slides: '__ISG_SLIDES__',
    },
  ],
  videoDemos: trContent.videoDemos.map(translateVideo),
};

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
console.log('Generated ru.ts with', overlay.videoDemos.length, 'video demos');

const missing = [];
function walkEn(node, key) {
  if (typeof node === 'string' && key !== 'id' && !translations.has(node) && /[A-Za-z]{4,}/.test(node)) {
    missing.push(node);
  } else if (Array.isArray(node)) node.forEach((item) => walkEn(item));
  else if (node && typeof node === 'object') {
    for (const [k, v] of Object.entries(node)) walkEn(v, k);
  }
}
walkEn(enOverlay);
console.log('Untranslated strings:', missing.length);
