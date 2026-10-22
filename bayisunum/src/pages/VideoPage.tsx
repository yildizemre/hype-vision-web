import { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Shell from '../components/Shell';
import VideoPlayer from '../components/VideoPlayer';
import { getContentBundle, getVideo, getVideoNeighbors } from '../data/content';

export default function VideoPage() {
  const { t, i18n } = useTranslation();
  const { videoId } = useParams<{ videoId: string }>();
  const video = videoId ? getVideo(videoId, i18n.language) : undefined;
  const [activeId, setActiveId] = useState<string | null>(video?.insights[0]?.id ?? null);

  const neighbors = videoId
    ? getVideoNeighbors(videoId, i18n.language)
    : { prev: undefined, next: undefined, index: -1, total: 0 };

  useEffect(() => {
    setActiveId(video?.insights[0]?.id ?? null);
  }, [videoId, video?.insights]);

  if (!video) return <Navigate to="/" replace />;

  const categoryMeta = getContentBundle(i18n.language).videoCategoryMeta[video.category];
  const active = video.insights.find((i) => i.id === activeId) ?? video.insights[0];

  const navBtnClass =
    'absolute top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/25 bg-black/60 text-white hover:bg-vision hover:border-vision/50 disabled:opacity-0 disabled:pointer-events-none transition-all shadow-lg backdrop-blur-sm';

  return (
    <Shell backTo="/" title={video.title} subtitle={video.subtitle}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8 lg:py-10">
        {neighbors.total > 1 ? (
          <div className="flex items-center justify-between gap-2 mb-4 sm:mb-5 text-xs sm:text-sm">
            {neighbors.prev ? (
              <Link
                to={`/video/${neighbors.prev.id}`}
                className="inline-flex items-center gap-1.5 min-w-0 max-w-[45%] text-gray-500 hover:text-vision-dark transition-colors"
              >
                <ChevronLeft size={16} className="shrink-0" />
                <span className="truncate font-medium">{neighbors.prev.title}</span>
              </Link>
            ) : (
              <span className="text-gray-300">—</span>
            )}
            <span className="shrink-0 text-[11px] sm:text-xs font-semibold text-vision-dark bg-vision-50 border border-vision/20 rounded-full px-2.5 py-1">
              {neighbors.index + 1} / {neighbors.total}
            </span>
            {neighbors.next ? (
              <Link
                to={`/video/${neighbors.next.id}`}
                className="inline-flex items-center gap-1.5 min-w-0 max-w-[45%] text-gray-500 hover:text-vision-dark transition-colors justify-end text-right"
              >
                <span className="truncate font-medium">{neighbors.next.title}</span>
                <ChevronRight size={16} className="shrink-0" />
              </Link>
            ) : (
              <span className="text-gray-300">—</span>
            )}
          </div>
        ) : null}

        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-5 sm:gap-6 lg:gap-8">
          <div className="lg:col-span-3 space-y-3 sm:space-y-4 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${categoryMeta.accent}`}
              >
                {categoryMeta.label}
              </span>
              <span className="text-[10px] text-gray-500">{t('video.fieldRecording')}</span>
            </div>

            <div className="relative">
              {neighbors.prev ? (
                <Link
                  to={`/video/${neighbors.prev.id}`}
                  className={`${navBtnClass} left-1 sm:left-2`}
                  title={t('video.prevTitle', { title: neighbors.prev.title })}
                  aria-label={t('video.prevDemo', { title: neighbors.prev.title })}
                >
                  <ChevronLeft size={22} />
                </Link>
              ) : null}

              <VideoPlayer
                title={video.title}
                driveFileId={video.driveFileId}
                driveFileIds={video.driveFileIds}
                driveUrl={video.driveUrl}
              />

              {neighbors.next ? (
                <Link
                  to={`/video/${neighbors.next.id}`}
                  className={`${navBtnClass} right-1 sm:right-2`}
                  title={t('video.nextTitle', { title: neighbors.next.title })}
                  aria-label={t('video.nextDemo', { title: neighbors.next.title })}
                >
                  <ChevronRight size={22} />
                </Link>
              ) : null}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-3 sm:space-y-4 min-w-0">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-vision-dark mb-2">{t('video.insights')}</p>
              <h2 className="text-base sm:text-lg font-semibold text-night leading-snug">{active.title}</h2>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide lg:hidden -mx-1 px-1">
              {video.insights.map((insight) => {
                const isActive = insight.id === active.id;
                return (
                  <button
                    key={insight.id}
                    type="button"
                    onClick={() => setActiveId(insight.id)}
                    className={`shrink-0 max-w-[85vw] text-left rounded-xl px-3 py-2.5 border text-xs font-semibold transition-all ${
                      isActive ? 'insight-active' : 'panel-card text-night hover:border-vision/30'
                    }`}
                  >
                    <span className="line-clamp-2">{insight.title}</span>
                  </button>
                );
              })}
            </div>

            <div className="panel-card rounded-2xl p-4 sm:p-6 min-h-0 lg:min-h-[200px]">
              <div className="space-y-3">
                {active.paragraphs.map((p, i) => (
                  <p key={i} className="text-sm text-gray-600 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>

            <div className="hidden lg:block space-y-2">
              {video.insights.map((insight) => {
                const isActive = insight.id === active.id;
                return (
                  <button
                    key={insight.id}
                    type="button"
                    onClick={() => setActiveId(insight.id)}
                    className={`w-full text-left rounded-xl p-4 border transition-all ${
                      isActive ? 'insight-active' : 'panel-card hover:border-vision/30 hover:shadow-sm'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <p className={`text-sm font-semibold leading-snug ${isActive ? 'text-vision-dark' : 'text-night'}`}>
                        {insight.title}
                      </p>
                      <ChevronRight
                        size={16}
                        className={`shrink-0 mt-0.5 transition-transform ${isActive ? 'text-vision translate-x-0.5' : 'text-gray-400'}`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Shell>
  );
}
