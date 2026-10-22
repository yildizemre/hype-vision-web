import { useCallback, useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Shell from '../components/Shell';
import CanvaDeckViewer from '../components/CanvaDeckViewer';
import PptxDeckViewer from '../components/PptxDeckViewer';
import { SlideControls } from '../components/SlideCanvas';
import { getDeck } from '../data/content';

export default function DeckPage() {
  const { t, i18n } = useTranslation();
  const { deckId } = useParams<{ deckId: string }>();
  const deck = deckId ? getDeck(deckId, i18n.language) : undefined;
  const [index, setIndex] = useState(1);
  const [slideCount, setSlideCount] = useState(deck?.slideCount ?? 1);

  const go = useCallback(
    (n: number) => {
      setIndex(Math.min(Math.max(1, n), slideCount));
    },
    [slideCount]
  );

  useEffect(() => {
    setIndex(1);
    setSlideCount(deck?.slideCount ?? 1);
  }, [deckId, deck?.slideCount]);

  useEffect(() => {
    if (!deck) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        go(index + 1);
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        go(index - 1);
      }
      if (e.key === 'Home') go(1);
      if (e.key === 'End') go(slideCount);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [deck, index, go, slideCount]);

  if (!deck) return <Navigate to="/" replace />;

  return (
    <Shell
      backTo="/"
      title={deck.title}
      subtitle={`${deck.tag} · ${t('deck.slides', { count: slideCount })}`}
    >
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8 lg:py-10">
        <div className="mb-3 sm:mb-4 flex flex-wrap items-center gap-2 sm:gap-3">
          <span className="text-[10px] font-bold uppercase tracking-wider text-vision-dark px-2.5 py-1 rounded-full bg-vision-50 border border-vision/20">
            {deck.tag}
          </span>
          <span className="text-[10px] text-gray-500">
            {deck.canvaUrl ? t('deck.canvaPresentation') : t('deck.directPptx')}
          </span>
          {deck.sourceFile ? (
            <span className="text-[10px] text-gray-400">{t('deck.source', { file: deck.sourceFile })}</span>
          ) : null}
        </div>

        {deck.canvaUrl ? (
          <CanvaDeckViewer viewUrl={deck.canvaUrl} title={deck.title} />
        ) : deck.pptxUrl ? (
          <PptxDeckViewer pptxUrl={deck.pptxUrl} page={index} onSlideCount={setSlideCount} />
        ) : null}

        {!deck.canvaUrl ? (
          <>
            <SlideControls current={index} total={slideCount} onPrev={() => go(index - 1)} onNext={() => go(index + 1)} onGo={go} />
            <p className="mt-4 text-center text-[10px] text-gray-600">{t('deck.keyboardHints')}</p>
          </>
        ) : null}
      </div>
    </Shell>
  );
}
