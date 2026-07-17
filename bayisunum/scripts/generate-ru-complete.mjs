import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { DICT as BASE_DICT } from './en-ru-dict-data.mjs';
import { SUPPLEMENT } from './en-ru-supplement-data.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const enSource = readFileSync(join(root, 'src/data/content/en.ts'), 'utf8');
const match = enSource.match(/const overlay: ContentOverlay = ([\s\S]+);\n\nexport const enContent/);
const overlay = Function(`"use strict"; return (${match[1]});`)();

const DICT = { ...BASE_DICT, ...SUPPLEMENT, 'Summary Message for Customer': 'Итоговое сообщение для клиента' };

function t(text) {
  if (text === 'Summary Message for Customer') return 'Итоговое сообщение для клиента';
  return DICT[text] ?? text;
}

function translateNode(node, key) {
  if (typeof node === 'string') {
    if (key === 'id') return node;
    return t(node);
  }
  if (Array.isArray(node)) return node.map((item) => translateNode(item));
  if (node && typeof node === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(node)) out[k] = translateNode(v, k);
    return out;
  }
  return node;
}

const ruOverlay = translateNode(overlay);
ruOverlay.videoCategoryMeta.isg.label = 'ОТ';
ruOverlay.decks.find((d) => d.id === 'isg').tag = 'ОТ';
ruOverlay.decks.find((d) => d.id === 'isg').title = 'Проверка ОТ';
ruOverlay.decks.find((d) => d.id === 'isg').slides = '__ISG__';

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
      .map(([k, val]) => `${padIn}${k}: ${serializeValue(val, indent + 1)}`)
      .join(',\n')}\n${pad}}`;
  }
  return String(value);
}

let serialized = serializeValue(ruOverlay, 1);
serialized = serialized.replace(
  "slides: '__ISG__'",
  "slides: Array.from({ length: 20 }, (_, i) => ({ index: i + 1, title: `Слайд ${i + 1}`, subtitle: 'Презентация решений ОТ' }))",
);

const fileSource = `import { buildContent } from './merge';
import type { ContentOverlay } from './merge';

const overlay: ContentOverlay = ${serialized};

export const ruContent = buildContent(overlay);
`;

writeFileSync(join(root, 'src/data/content/ru.ts'), fileSource, 'utf8');

const missing = [];
function walk(node, key) {
  if (typeof node === 'string' && key !== 'id' && !DICT[node] && /[A-Za-z]{4,}/.test(node) && node !== 'Summary Message for Customer') {
    missing.push(node);
  } else if (Array.isArray(node)) node.forEach((item) => walk(item));
  else if (node && typeof node === 'object') {
    for (const [k, v] of Object.entries(node)) walk(v, k);
  }
}
walk(overlay);
console.log('Generated ru.ts with', ruOverlay.videoDemos.length, 'video demos. Missing translations:', missing.length);
