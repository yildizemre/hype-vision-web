import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import type { SupportedLanguage } from '../../i18n';
import { trContent } from './tr';
import { enContent } from './en';
import { ruContent } from './ru';
import type { ContentBundle, Deck, VideoCategory, VideoDemo } from './types';

export type { Slide, Deck, Insight, VideoCategory, VideoDemo, VideoCategoryMeta, ContentBundle } from './types';

export const videoCategoryOrder: VideoCategory[] = ['isg', 'yangin', 'verimlilik', 'custom'];

const bundles: Record<SupportedLanguage, ContentBundle> = {
  tr: trContent,
  en: enContent,
  ru: ruContent,
};

function resolveLanguage(lang: string): SupportedLanguage {
  if (lang === 'en' || lang === 'ru') return lang;
  return 'tr';
}

export function getContentBundle(lang: string): ContentBundle {
  return bundles[resolveLanguage(lang)];
}

export function useContent(): ContentBundle {
  const { i18n } = useTranslation();
  return useMemo(() => getContentBundle(i18n.language), [i18n.language]);
}

export function getDeck(id: string, lang: string): Deck | undefined {
  return getContentBundle(lang).decks.find((d) => d.id === id);
}

export function getVideo(id: string, lang: string): VideoDemo | undefined {
  return getContentBundle(lang).videoDemos.find((v) => v.id === id);
}

export function getVideosByCategory(category: VideoCategory, lang: string): VideoDemo[] {
  return getContentBundle(lang).videoDemos.filter((v) => v.category === category);
}

export function getVideoNeighbors(videoId: string, lang: string) {
  const video = getVideo(videoId, lang);
  if (!video) return { prev: undefined, next: undefined, index: -1, total: 0 };
  const list = getVideosByCategory(video.category, lang);
  const index = list.findIndex((v) => v.id === videoId);
  return {
    prev: index > 0 ? list[index - 1] : undefined,
    next: index >= 0 && index < list.length - 1 ? list[index + 1] : undefined,
    index,
    total: list.length,
  };
}
