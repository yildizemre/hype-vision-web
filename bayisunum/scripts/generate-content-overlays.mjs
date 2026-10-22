import { writeFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
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

function extractOverlay(bundle) {
  const videoCategoryMeta = {};
  for (const [key, meta] of Object.entries(bundle.videoCategoryMeta)) {
    videoCategoryMeta[key] = {
      label: meta.label,
      title: meta.title,
      description: meta.description,
    };
  }

  const decks = bundle.decks.map((deck) => {
    const overlay = {
      id: deck.id,
      title: deck.title,
      subtitle: deck.subtitle,
      tag: deck.tag,
    };

    if (deck.id === 'isg') {
      overlay.slides = '__ISG_SLIDES__';
    } else {
      overlay.slides = deck.slides;
    }

    return overlay;
  });

  const videoDemos = bundle.videoDemos.map((video) => ({
    id: video.id,
    title: video.title,
    subtitle: video.subtitle,
    insights: video.insights,
  }));

  return { videoCategoryMeta, decks, videoDemos };
}

function writeOverlayFile(filename, exportName, overlay, isgSlideSubtitle) {
  let serialized = serializeValue(overlay, 1);
  serialized = serialized.replace(
    "slides: '__ISG_SLIDES__'",
    `slides: Array.from({ length: 20 }, (_, i) => ({ index: i + 1, title: \`Slide \${i + 1}\`, subtitle: '${escapeString(isgSlideSubtitle)}' }))`,
  );

  const source = `import { buildContent } from './merge';
import type { ContentOverlay } from './merge';

const overlay: ContentOverlay = ${serialized};

export const ${exportName} = buildContent(overlay);
`;

  writeFileSync(join(contentDir, filename), source, 'utf8');
}

const enModule = await import(pathToFileURL(join(contentDir, 'en.ts')).href);
const enOverlay = extractOverlay(enModule.enContent);
writeOverlayFile('en.ts', 'enContent', enOverlay, 'OHS solution presentation');

console.log(`Generated en.ts with ${enOverlay.videoDemos.length} video demos`);
