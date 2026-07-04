import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, ImageIcon } from 'lucide-react';
import type { Slide } from '../data/content';
import { slideImagePath } from '../lib/utils';

type SlideCanvasProps = {
  deckId: string;
  slide: Slide;
  deckTitle: string;
};

export default function SlideCanvas({ deckId, slide, deckTitle }: SlideCanvasProps) {
  const [imgOk, setImgOk] = useState(false);
  const [imgSrc, setImgSrc] = useState('');
  const [fullscreen, setFullscreen] = useState(false);

  useEffect(() => {
    const src = slideImagePath(deckId, slide.index);
    setImgSrc(src);
    setImgOk(false);
    const img = new Image();
    img.onload = () => setImgOk(true);
    img.onerror = () => setImgOk(false);
    img.src = src;
  }, [deckId, slide.index]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setFullscreen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const inner = (
    <div className="relative w-full h-full flex items-center justify-center bg-[#111] rounded-xl overflow-hidden border border-white/10">
      {imgOk ? (
        <img src={imgSrc} alt={`${deckTitle} — slayt ${slide.index}`} className="max-w-full max-h-full object-contain" />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#0c2a30] to-[#0a0a0a]">
          <div className="w-16 h-16 rounded-2xl bg-vision/10 border border-vision/25 flex items-center justify-center mb-5">
            <ImageIcon size={28} className="text-vision-light" />
          </div>
          <p className="text-xs font-semibold uppercase tracking-widest text-vision-light mb-2">Slayt {slide.index}</p>
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">{slide.title}</h3>
          {slide.subtitle ? <p className="text-sm text-gray-400 max-w-md">{slide.subtitle}</p> : null}
          <p className="mt-6 text-[11px] text-gray-500 max-w-sm leading-relaxed">
            PNG export: <code className="text-vision-light/80">public/slides/{deckId}/{String(slide.index).padStart(2, '0')}.png</code>
          </p>
        </div>
      )}
    </div>
  );

  if (fullscreen) {
    return (
      <div className="fixed inset-0 z-[100] bg-black flex flex-col">
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
          <p className="text-sm text-gray-400">
            {deckTitle} · Slayt {slide.index}
          </p>
          <button
            type="button"
            onClick={() => setFullscreen(false)}
            className="text-xs font-semibold text-vision-light px-3 py-1.5 rounded-lg border border-vision/30 hover:bg-vision/10"
          >
            Kapat (Esc)
          </button>
        </div>
        <div className="flex-1 p-4">{inner}</div>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-[16/10] max-h-[calc(100vh-12rem)]">
      {inner}
      <button
        type="button"
        onClick={() => setFullscreen(true)}
        className="absolute top-3 right-3 p-2 rounded-lg bg-black/50 border border-white/15 text-gray-300 hover:text-white hover:border-vision/40 transition-colors"
        aria-label="Tam ekran"
      >
        <Maximize2 size={16} />
      </button>
    </div>
  );
}

type SlideControlsProps = {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onGo: (index: number) => void;
};

export function SlideControls({ current, total, onPrev, onNext, onGo }: SlideControlsProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-vision/10">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onPrev}
          disabled={current <= 1}
          className="inline-flex items-center gap-1 px-4 py-2.5 rounded-lg text-sm font-medium border border-gray-200 text-gray-600 hover:border-vision/40 hover:text-vision-dark bg-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft size={18} />
          Önceki
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={current >= total}
          className="inline-flex items-center gap-1 px-4 py-2.5 rounded-lg text-sm font-semibold bg-vision text-white hover:bg-vision-dark disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          Sonraki
          <ChevronRight size={18} />
        </button>
      </div>

      <p className="text-sm text-gray-500 font-medium">
        <span className="text-vision-dark">{current}</span>
        <span className="text-gray-400"> / {total}</span>
      </p>

      <div className="flex gap-1.5 overflow-x-auto max-w-full sm:max-w-lg py-1 scrollbar-hide">
        {Array.from({ length: total }, (_, i) => i + 1).map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => onGo(n)}
            className={`w-8 h-8 rounded-lg text-xs font-semibold transition-colors shrink-0 ${
              n === current
                ? 'bg-vision text-white'
                : 'bg-white text-gray-500 hover:bg-vision-50 hover:text-vision-dark border border-gray-200'
            }`}
          >
            {n}
          </button>
        ))}
      </div>
    </div>
  );
}
