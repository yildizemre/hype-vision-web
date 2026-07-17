import { writeFileSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const contentDir = join(__dirname, '../src/data/content');

function escapeString(value) {
  return value
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\n/g, '\\n');
}

function serializeValue(value, indent = 0) {
  const pad = '  '.repeat(indent);
  const padIn = '  '.repeat(indent + 1);

  if (typeof value === 'string') {
    return `'${escapeString(value)}'`;
  }

  if (Array.isArray(value)) {
    if (value.length === 0) return '[]';
    return `[\n${value.map((item) => `${padIn}${serializeValue(item, indent + 1)}`).join(',\n')}\n${pad}]`;
  }

  if (value && typeof value === 'object') {
    const entries = Object.entries(value);
    if (entries.length === 0) return '{}';
    return `{\n${entries
      .map(([key, val]) => `${padIn}${key}: ${serializeValue(val, indent + 1)}`)
      .join(',\n')}\n${pad}}`;
  }

  return String(value);
}

function translateString(text) {
  if (text === 'Summary Message for Customer') {
    return 'Итоговое сообщение для клиента';
  }
  return translations.get(text) ?? text;
}

function translateOverlay(node, key) {
  if (typeof node === 'string') {
    if (key === 'id') return node;
    return translateString(node);
  }
  if (Array.isArray(node)) {
    return node.map((item) => translateOverlay(item));
  }
  if (node && typeof node === 'object') {
    const result = {};
    for (const [entryKey, value] of Object.entries(node)) {
      result[entryKey] = translateOverlay(value, entryKey);
    }
    return result;
  }
  return node;
}

function extractOverlayFromEnSource(source) {
  const match = source.match(/const overlay: ContentOverlay = ([\s\S]+);\n\nexport const enContent/);
  if (!match) throw new Error('Could not parse en.ts overlay');
  return Function(`"use strict"; return (${match[1]});`)();
}

function writeOverlayFile(filename, exportName, overlay, isgSlideSubtitle) {
  let serialized = serializeValue(overlay, 1);
  serialized = serialized.replace(
    "slides: '__ISG_SLIDES__'",
    `slides: Array.from({ length: 20 }, (_, i) => ({ index: i + 1, title: \`Слайд \${i + 1}\`, subtitle: '${escapeString(isgSlideSubtitle)}' }))`,
  );

  const fileSource = `import { buildContent } from './merge';
import type { ContentOverlay } from './merge';

const overlay: ContentOverlay = ${serialized};

export const ${exportName} = buildContent(overlay);
`;

  writeFileSync(join(contentDir, filename), fileSource, 'utf8');
}

const translationsPath = join(__dirname, 'ru-translations.json');
const translations = new Map(Object.entries(JSON.parse(readFileSync(translationsPath, 'utf8'))));

const enSource = readFileSync(join(contentDir, 'en.ts'), 'utf8');
const enOverlay = extractOverlayFromEnSource(enSource);

const ruOverlay = translateOverlay(enOverlay, undefined);
ruOverlay.videoCategoryMeta.isg.label = 'ОТ';
ruOverlay.videoCategoryMeta.isg.title = 'Демонстрации охраны труда';
ruOverlay.decks.find((d) => d.id === 'isg').tag = 'ОТ';
ruOverlay.decks.find((d) => d.id === 'isg').title = 'Проверка ОТ';

writeOverlayFile('ru.ts', 'ruContent', ruOverlay, 'Презентация решений ОТ');

console.log(`Generated ru.ts with ${ruOverlay.videoDemos.length} video demos`);
