import { useCallback, useEffect, useLayoutEffect, useRef, useState, type RefObject } from 'react';
import { useTranslation } from 'react-i18next';
import { Loader2, AlertCircle, FileWarning, Maximize2, X } from 'lucide-react';
import { SlideView, useFonts, usePresentation } from '@pagus-kit/react';

type PptxDeckViewerProps = {
  pptxUrl: string;
  page: number;
  onSlideCount: (count: number) => void;
};

function useFitScale(
  containerRef: RefObject<HTMLDivElement | null>,
  slideW: number,
  slideH: number,
  enabled: boolean,
  resetKey: unknown
) {
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el || !slideW || !slideH || !enabled) return;

    const update = () => {
      const cw = el.clientWidth;
      const ch = el.clientHeight;
      if (cw < 4 || ch < 4) return;
      const fit = Math.min(cw / slideW, ch / slideH);
      setScale(Math.max(0.1, Math.min(fit, 5)));
    };

    update();
    const raf = requestAnimationFrame(() => {
      update();
      requestAnimationFrame(update);
    });

    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener('resize', update);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener('resize', update);
    };
  }, [containerRef, slideW, slideH, enabled, resetKey]);

  return scale;
}

export default function PptxDeckViewer({ pptxUrl, page, onSlideCount }: PptxDeckViewerProps) {
  const { t } = useTranslation();
  const [buffer, setBuffer] = useState<ArrayBuffer | null>(null);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [fullscreen, setFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { status, presentation, error: parseError } = usePresentation(buffer);
  const { status: fontStatus, fontSubstitutes } = useFonts(presentation?.fonts);

  const slideSize = presentation?.slideSize ?? { width: 1280, height: 720 };
  const scale = useFitScale(containerRef, slideSize.width, slideSize.height, !!presentation, fullscreen);

  const slide = presentation?.slides[page - 1];
  const renderLoading = fetchLoading || status === 'loading' || (presentation && fontStatus === 'loading');
  const renderError = fetchError || (status === 'error' ? parseError?.message : null);

  useEffect(() => {
    let cancelled = false;
    setFetchLoading(true);
    setFetchError(null);
    setBuffer(null);

    fetch(pptxUrl)
      .then((res) => {
        if (!res.ok) throw new Error(t('pptxDeck.fileNotFoundStatus', { status: res.status }));
        return res.arrayBuffer();
      })
      .then((data) => {
        if (!cancelled) {
          setBuffer(data);
          setFetchLoading(false);
        }
      })
      .catch((err: Error) => {
        if (!cancelled) {
          setFetchError(err.message || t('pptxDeck.loadFailed'));
          setFetchLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [pptxUrl, t]);

  useEffect(() => {
    if (presentation?.slides.length) {
      onSlideCount(presentation.slides.length);
    }
  }, [presentation, onSlideCount]);

  const exitFullscreen = useCallback(() => setFullscreen(false), []);

  useEffect(() => {
    if (!fullscreen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') exitFullscreen();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [fullscreen, exitFullscreen]);

  if (fetchError && !buffer) {
    return (
      <div className="aspect-video max-h-[calc(100vh-12rem)] rounded-xl border border-amber-400/20 bg-amber-400/5 flex flex-col items-center justify-center gap-3 p-8 text-center">
        <FileWarning size={32} className="text-amber-400" />
        <p className="text-sm font-semibold text-white">{t('pptxDeck.fileNotFound')}</p>
        <p className="text-xs text-gray-400 max-w-md">
          <code className="text-vision-light/80">{pptxUrl}</code>
        </p>
      </div>
    );
  }

  const aspectRatio = `${slideSize.width} / ${slideSize.height}`;

  return (
    <div className={fullscreen ? 'fixed inset-0 z-[200] bg-black flex flex-col' : 'relative w-full'}>
      {fullscreen ? (
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#0a0a0a] shrink-0">
          <p className="text-sm text-gray-400">
            {t('pptxDeck.fullscreen')} · {t('slideCanvas.slide', { n: page })}
            {presentation ? ` / ${presentation.slides.length}` : ''}
          </p>
          <button
            type="button"
            onClick={exitFullscreen}
            className="text-xs font-semibold text-vision-light px-3 py-1.5 rounded-lg border border-vision/30 hover:bg-vision/10"
          >
            {t('pptxDeck.close')}
          </button>
        </div>
      ) : null}

      <div
        ref={containerRef}
        className={
          fullscreen
            ? 'flex-1 min-h-0 relative bg-black overflow-hidden'
            : 'pptx-stage relative w-full max-h-[calc(100vh-11rem)] rounded-xl overflow-hidden border border-vision/15 bg-white shadow-lg shadow-vision/10'
        }
        style={fullscreen ? undefined : { aspectRatio }}
      >
        <button
          type="button"
          onClick={() => (fullscreen ? exitFullscreen() : setFullscreen(true))}
          className="absolute top-3 right-3 z-20 p-2 rounded-lg bg-black/55 border border-white/20 text-white hover:bg-black/70 hover:border-vision/40 transition-colors"
          aria-label={fullscreen ? t('pptxDeck.exitFullscreen') : t('pptxDeck.fullscreen')}
        >
          {fullscreen ? <X size={18} /> : <Maximize2 size={18} />}
        </button>

        {renderLoading ? (
          <div className="flex flex-col items-center justify-center gap-3">
            <Loader2 size={28} className="text-vision animate-spin" />
            <p className="text-sm text-gray-500">{t('pptxDeck.loading')}</p>
          </div>
        ) : null}

        {!renderLoading && slide ? (
          <div
            className="absolute left-1/2 top-1/2 overflow-hidden"
            style={{
              width: slideSize.width * scale,
              height: slideSize.height * scale,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div
              style={{
                width: slideSize.width,
                height: slideSize.height,
                transform: `scale(${scale})`,
                transformOrigin: 'top left',
              }}
            >
              <SlideView slide={slide} slideSize={slideSize} scale={1} fontSubstitutes={fontSubstitutes} />
            </div>
          </div>
        ) : null}

        {!renderLoading && !slide && presentation ? (
          <p className="text-sm text-gray-500">{t('pptxDeck.slideNotFound')}</p>
        ) : null}
      </div>

      {!fullscreen && renderError ? (
        <p className="mt-3 flex items-start gap-2 text-xs text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-3 py-2">
          <AlertCircle size={14} className="shrink-0 mt-0.5" />
          {renderError}
        </p>
      ) : null}
    </div>
  );
}
