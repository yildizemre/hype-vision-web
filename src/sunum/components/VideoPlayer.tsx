import { useMemo, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { driveEmbedUrl, driveFileIdFromUrl, driveOpenUrl } from '../lib/drive';

type VideoPlayerProps = {
  title: string;
  driveFileId?: string;
  driveFileIds?: string[];
  driveUrl?: string;
};

function resolveAllFileIds(driveFileId?: string, driveFileIds?: string[], driveUrl?: string): string[] {
  if (driveFileIds?.length) return driveFileIds;
  if (driveFileId) return [driveFileId];
  if (driveUrl) {
    const id = driveFileIdFromUrl(driveUrl);
    return id ? [id] : [];
  }
  return [];
}

export default function VideoPlayer({ title, driveFileId, driveFileIds, driveUrl }: VideoPlayerProps) {
  const ids = useMemo(
    () => resolveAllFileIds(driveFileId, driveFileIds, driveUrl),
    [driveFileId, driveFileIds, driveUrl]
  );
  const [activeIdx, setActiveIdx] = useState(0);
  const fileId = ids[activeIdx] ?? ids[0];
  const openUrl = fileId ? driveOpenUrl(fileId) : null;

  return (
    <div className="space-y-2">
      {ids.length > 1 ? (
        <div className="flex flex-wrap gap-2">
          {ids.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveIdx(i)}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold border transition-colors ${
                i === activeIdx
                  ? 'bg-vision text-white border-vision'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-vision/35'
              }`}
            >
              Kamera {i + 1}
            </button>
          ))}
        </div>
      ) : null}

      <div className="relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden border border-vision/15 bg-night shadow-lg shadow-vision/10 max-h-[min(56vw,calc(100vh-16rem))] sm:max-h-none">
        {fileId ? (
          <iframe
            key={fileId}
            src={driveEmbedUrl(fileId)}
            title={`${title} — kamera ${activeIdx + 1}`}
            className="absolute inset-0 h-full w-full"
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
            <p className="text-sm text-gray-400">Video linki tanımlı değil</p>
          </div>
        )}

        {openUrl ? (
          <a
            href={openUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 right-3 z-10 inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-black/55 px-2.5 py-1.5 text-[11px] font-semibold text-white hover:border-vision/40 hover:bg-black/70 transition-colors"
          >
            <ExternalLink size={13} />
            Drive&apos;da aç
          </a>
        ) : null}
      </div>
    </div>
  );
}
