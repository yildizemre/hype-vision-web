import type { ContentBundle, Deck, Insight, Slide, VideoCategory, VideoCategoryMeta, VideoDemo } from './types';
import { trContent } from './tr';

export type DeckOverlay = {
  id: string;
  title?: string;
  subtitle?: string;
  tag?: string;
  slides?: Slide[];
};

export type VideoOverlay = {
  id: string;
  title?: string;
  subtitle?: string;
  insights?: Insight[];
};

export type ContentOverlay = {
  videoCategoryMeta?: Partial<Record<VideoCategory, Partial<VideoCategoryMeta>>>;
  decks?: DeckOverlay[];
  videoDemos?: VideoOverlay[];
};

function mergeSlides(base: Slide[], overlay?: Slide[]): Slide[] {
  if (!overlay?.length) return base;
  return base.map((slide) => {
    const match = overlay.find((s) => s.index === slide.index);
    return match ? { ...slide, ...match } : slide;
  });
}

function mergeInsights(base: Insight[], overlay?: Insight[]): Insight[] {
  if (!overlay?.length) return base;
  return base.map((insight) => {
    const match = overlay.find((i) => i.id === insight.id);
    return match ? { ...insight, ...match } : insight;
  });
}

function mergeDecks(base: Deck[], overlay?: DeckOverlay[]): Deck[] {
  if (!overlay?.length) return base;
  return base.map((deck) => {
    const match = overlay.find((d) => d.id === deck.id);
    if (!match) return deck;
    return {
      ...deck,
      ...match,
      slides: mergeSlides(deck.slides, match.slides),
    };
  });
}

function mergeVideos(base: VideoDemo[], overlay?: VideoOverlay[]): VideoDemo[] {
  if (!overlay?.length) return base;
  return base.map((video) => {
    const match = overlay.find((v) => v.id === video.id);
    if (!match) return video;
    return {
      ...video,
      ...match,
      insights: mergeInsights(video.insights, match.insights),
    };
  });
}

function mergeCategoryMeta(
  base: Record<VideoCategory, VideoCategoryMeta>,
  overlay?: Partial<Record<VideoCategory, Partial<VideoCategoryMeta>>>
): Record<VideoCategory, VideoCategoryMeta> {
  if (!overlay) return base;
  const result = { ...base };
  for (const key of Object.keys(overlay) as VideoCategory[]) {
    result[key] = { ...base[key], ...overlay[key] };
  }
  return result;
}

export function applyContentOverlay(base: ContentBundle, overlay: ContentOverlay): ContentBundle {
  return {
    videoCategoryMeta: mergeCategoryMeta(base.videoCategoryMeta, overlay.videoCategoryMeta),
    decks: mergeDecks(base.decks, overlay.decks),
    videoDemos: mergeVideos(base.videoDemos, overlay.videoDemos),
  };
}

export function buildContent(overlay: ContentOverlay): ContentBundle {
  return applyContentOverlay(trContent, overlay);
}
