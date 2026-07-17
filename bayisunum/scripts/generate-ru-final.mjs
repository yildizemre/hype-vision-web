import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const enSource = readFileSync(join(root, 'src/data/content/en.ts'), 'utf8');
const match = enSource.match(/const overlay: ContentOverlay = ([\s\S]+);\n\nexport const enContent/);
const enOverlay = Function(`"use strict"; return (${match[1]});`)();

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

const ruOverlay = {
  videoCategoryMeta: {
    isg: {
      label: 'ОТ',
      title: 'Демонстрации охраны труда',
      description:
        'Соответствие СИЗ, нарушения опасных зон и цифровой архив доказательств — реальные полевые записи и технические выводы.',
    },
    yangin: {
      label: 'ПОЖАР',
      title: 'Раннее обнаружение пожара и управление ЧС',
      description:
        'Обнаружение пламени 10×10 пикселей, интеграция с пожарной панелью, многоканальные оповещения и маршрутизация пожарной службы — раньше классических датчиков.',
    },
    verimlilik: {
      label: 'ЭФФЕКТИВНОСТЬ',
      title: 'Демонстрации производства и операций',
      description:
        'OEE, простои линии, время цикла, учёт персонала и продукции — полевые доказательства с измеримыми метриками эффективности.',
    },
    custom: {
      label: 'CUSTOM',
      title: 'Демонстрации индивидуальных проектов',
      description:
        'Пилотные внедрения под клиента, сценарии интеграции и отраслевые решения компьютерного зрения.',
    },
  },
  decks: [
    {
      id: 'mes',
      title: 'Решение MES',
      subtitle: 'Исполнение производства, OEE, эффективность линии и операционная прозрачность',
      tag: 'MES',
      slides: [
        { index: 1, title: 'Введение', subtitle: 'Платформа Hype Vision MES' },
        { index: 2, title: 'Проблема', subtitle: 'Ручной учёт и задержка данных' },
        { index: 3, title: 'Архитектура решения', subtitle: 'Edge + существующие камеры' },
        { index: 4, title: 'Модули', subtitle: 'OEE, простой, качество, тревога' },
        { index: 5, title: 'Живая панель', subtitle: 'KPI по сменам' },
        { index: 6, title: 'Интеграция', subtitle: 'ERP / MES API' },
        { index: 7, title: 'Пилотный процесс', subtitle: 'Обследование → внедрение → отчёт' },
        { index: 8, title: 'Заключение', subtitle: 'Измеримый прирост эффективности' },
      ],
    },
    {
      id: 'isg',
      title: 'Проверка ОТ',
      subtitle: 'СИЗ, опасные зоны, пожар и цифровой архив доказательств',
      tag: 'ОТ',
      slides: '__ISG_SLIDES__',
    },
  ],
  videoDemos: enOverlay.videoDemos.map((video) => {
    const ruVideo = RU_VIDEOS[video.id];
    if (!ruVideo) throw new Error(`Missing RU translation for ${video.id}`);
    return {
      id: video.id,
      title: ruVideo.title,
      subtitle: ruVideo.subtitle,
      insights: video.insights.map((insight) => {
        const ruInsight = ruVideo.insights[insight.id];
        if (!ruInsight) throw new Error(`Missing RU insight ${video.id}/${insight.id}`);
        return { id: insight.id, title: ruInsight.title, paragraphs: ruInsight.paragraphs };
      }),
    };
  }),
};

let serialized = serializeValue(ruOverlay, 1);
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
console.log('Generated ru.ts with', ruOverlay.videoDemos.length, 'video demos');
