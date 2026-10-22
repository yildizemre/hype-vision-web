import { trContent } from '../src/data/content/tr.ts';
import { PATH_RU } from './ru-path-translations.mjs';

function t(path, fallback) {
  if (PATH_RU[path]) return PATH_RU[path];
  throw new Error(`Missing translation: ${path}`);
}

function translateInsight(videoId, insight) {
  return {
    id: insight.id,
    title: t(`${videoId}.${insight.id}.title`, insight.title),
    paragraphs: insight.paragraphs.map((_, index) =>
      t(`${videoId}.${insight.id}.p${index}`, insight.paragraphs[index]),
    ),
  };
}

function translateVideo(video) {
  return {
    id: video.id,
    title: t(`${video.id}.title`, video.title),
    subtitle: t(`${video.id}.subtitle`, video.subtitle),
    insights: video.insights.map((insight) => translateInsight(video.id, insight)),
  };
}

export function buildRuOverlay() {
  return {
    videoCategoryMeta: {
      isg: {
        label: 'ОТ',
        title: t('meta.isg.title'),
        description: t('meta.isg.description'),
      },
      yangin: {
        label: 'ПОЖАР',
        title: t('meta.yangin.title'),
        description: t('meta.yangin.description'),
      },
      verimlilik: {
        label: 'ЭФФЕКТИВНОСТЬ',
        title: t('meta.verimlilik.title'),
        description: t('meta.verimlilik.description'),
      },
      custom: {
        label: 'CUSTOM',
        title: t('meta.custom.title'),
        description: t('meta.custom.description'),
      },
    },
    decks: [
      {
        id: 'mes',
        title: t('deck.mes.title'),
        subtitle: t('deck.mes.subtitle'),
        tag: 'MES',
        slides: trContent.decks[0].slides.map((slide) => ({
          index: slide.index,
          title: t(`deck.mes.slide${slide.index}.title`),
          subtitle: t(`deck.mes.slide${slide.index}.subtitle`),
        })),
      },
      {
        id: 'isg',
        title: t('deck.isg.title'),
        subtitle: t('deck.isg.subtitle'),
        tag: 'ОТ',
        slides: '__ISG_SLIDES__',
      },
    ],
    videoDemos: trContent.videoDemos.map(translateVideo),
  };
}
