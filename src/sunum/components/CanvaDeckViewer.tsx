import { useCallback, useEffect, useState } from 'react';
import { ExternalLink, Maximize2, X } from 'lucide-react';
import { canvaEmbedSrc, canvaOpenUrl } from '../lib/canva';

type CanvaDeckViewerProps = {
  viewUrl: string;
  title: string;
};

export default function CanvaDeckViewer({ viewUrl, title }: CanvaDeckViewerProps) {
  const [fullscreen, setFullscreen] = useState(false);
  const embedSrc = canvaEmbedSrc(viewUrl);
  const openUrl = canvaOpenUrl(viewUrl);

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

  const frame = (
    <iframe
      title={title}
      src={embedSrc}
      className="absolute inset-0 h-full w-full border-0 bg-black"
      allowFullScreen
      allow="fullscreen"
      loading="lazy"
    />
  );

  if (fullscreen) {
    return (
      <div className="fixed inset-0 z-[200] flex flex-col bg-black">
        <div className="flex shrink-0 flex-wrap items-center justify-between gap-2 border-b border-white/10 bg-[#0a0a0a] px-3 sm:px-4 py-2.5 sm:py-3">
          <p className="text-xs sm:text-sm text-gray-400">Canva sunum · Tam ekran</p>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <a
              href={openUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-lg border border-white/15 px-2 sm:px-3 py-1.5 text-[10px] sm:text-xs font-semibold text-gray-300 hover:border-vision/40 hover:text-white"
            >
              <ExternalLink size={13} />
              <span className="hidden sm:inline">Canva&apos;da aç</span>
              <span className="sm:hidden">Aç</span>
            </a>
            <button
              type="button"
              onClick={exitFullscreen}
              className="rounded-lg border border-vision/30 px-3 py-1.5 text-xs font-semibold text-vision-light hover:bg-vision/10"
            >
              Kapat (Esc)
            </button>
          </div>
        </div>
        <div className="relative min-h-0 flex-1">{frame}</div>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      <div className="relative aspect-video w-full max-h-[min(56vw,calc(100vh-14rem))] sm:max-h-[calc(100vh-11rem)] overflow-hidden rounded-xl border border-vision/15 bg-black shadow-lg shadow-vision/10">
        {frame}
        <button
          type="button"
          onClick={() => setFullscreen(true)}
          className="absolute top-3 right-3 z-20 rounded-lg border border-white/20 bg-black/55 p-2 text-white transition-colors hover:border-vision/40 hover:bg-black/70"
          aria-label="Tam ekran"
        >
          <Maximize2 size={18} />
        </button>
      </div>
      <p className="mt-3 text-center text-[11px] text-gray-500">
        Slayt geçişi sunum içinden yapılır ·{' '}
        <a href={openUrl} target="_blank" rel="noopener noreferrer" className="text-vision-dark hover:underline">
          Canva&apos;da tam ekran sun
        </a>
      </p>
    </div>
  );
}
