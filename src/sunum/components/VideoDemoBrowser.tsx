import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  ExternalLink,
  Flame,
  FolderOpen,
  PlayCircle,
  Search,
  Shield,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import {
  videoCategoryMeta,
  videoCategoryOrder,
  videoDemos,
  type VideoCategory,
} from '../data/content';
import { getHubBrowserState, saveHubBrowserState } from '../lib/hubBrowserState';
import { sunumVideo } from '../paths';

const DRIVE_FOLDER_URL =
  'https://drive.google.com/drive/folders/1_oqN4DEssD5G6dfne-sfDGDKPXhBljnk';

const categoryIcons: Record<VideoCategory, typeof Shield> = {
  isg: Shield,
  yangin: Flame,
  verimlilik: TrendingUp,
  custom: Sparkles,
};

function normalize(s: string) {
  return s.toLocaleLowerCase('tr-TR');
}

function readInitialState() {
  const saved = getHubBrowserState();
  return {
    category: saved?.category ?? ('isg' as VideoCategory),
    query: saved?.query ?? '',
  };
}

export default function VideoDemoBrowser() {
  const initial = useMemo(() => readInitialState(), []);
  const [category, setCategory] = useState<VideoCategory>(initial.category);
  const [query, setQuery] = useState(initial.query);

  const counts = useMemo(() => {
    const map = {} as Record<VideoCategory, number>;
    for (const c of videoCategoryOrder) {
      map[c] = videoDemos.filter((v) => v.category === c).length;
    }
    return map;
  }, []);

  const filtered = useMemo(() => {
    const q = normalize(query.trim());
    let list = videoDemos.filter((v) => v.category === category);
    if (q) {
      list = list.filter(
        (v) => normalize(v.title).includes(q) || normalize(v.subtitle).includes(q)
      );
    }
    return list;
  }, [category, query]);

  const meta = videoCategoryMeta[category];
  const Icon = categoryIcons[category];

  useEffect(() => {
    saveHubBrowserState({ category, query });
  }, [category, query]);

  const pickCategory = (c: VideoCategory) => {
    setCategory(c);
  };

  const persistBeforeNavigate = () => {
    saveHubBrowserState({ category, query });
  };

  return (
    <div className="space-y-5">
      <a
        href={DRIVE_FOLDER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-start gap-3 rounded-xl border border-vision/25 bg-white px-4 py-3 sm:py-3.5 hover:border-vision/45 hover:shadow-sm transition-all group"
      >
        <div className="w-9 h-9 rounded-lg bg-vision-50 border border-vision/20 flex items-center justify-center shrink-0 group-hover:bg-vision/10 transition-colors">
          <FolderOpen size={18} className="text-vision-dark" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-night flex items-center gap-1.5 flex-wrap">
            Daha fazla video için Google Drive klasörüne gidebilirsiniz
            <ExternalLink size={14} className="text-vision shrink-0" />
          </p>
          <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
            Ek saha kayıtları ve ham videolar bu paylaşılan klasörde.
          </p>
        </div>
      </a>

      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
        <div className="flex items-start gap-3 min-w-0">
          <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${meta.accent}`}>
            <Icon size={20} />
          </div>
          <div className="min-w-0">
            <h3 className="text-lg font-semibold text-night">{meta.title}</h3>
            <p className="text-sm text-gray-600 mt-1 leading-relaxed">{meta.description}</p>
          </div>
        </div>

        <div className="relative w-full lg:max-w-xs shrink-0">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Demo ara…"
            className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-vision focus:ring-2 focus:ring-vision/15 bg-white"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {videoCategoryOrder.map((c) => {
          const m = videoCategoryMeta[c];
          const active = c === category;
          return (
            <button
              key={c}
              type="button"
              onClick={() => pickCategory(c)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold border transition-all ${
                active
                  ? 'bg-vision text-white border-vision shadow-sm shadow-vision/25'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-vision/35 hover:text-vision-dark'
              }`}
            >
              {m.label}
              <span
                className={`rounded-full px-1.5 py-0.5 text-[10px] ${
                  active ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
                }`}
              >
                {counts[c]}
              </span>
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-vision/20 bg-white/60 px-6 py-12 text-center">
          <PlayCircle size={28} className="mx-auto text-gray-300 mb-3" />
          <p className="text-sm font-medium text-gray-500">
            {query ? 'Aramanızla eşleşen demo yok' : 'Bu kategoriye saha demosu eklenecek'}
          </p>
        </div>
      ) : (
        <>
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
            {filtered.map((video) => (
              <Link
                key={video.id}
                to={sunumVideo(video.id)}
                onClick={persistBeforeNavigate}
                className="group panel-card rounded-xl p-4 sm:p-5 flex flex-col h-full hover:border-vision/35 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-vision-50 border border-vision/20 flex items-center justify-center shrink-0 group-hover:bg-vision/10 transition-colors">
                    <PlayCircle size={18} className="text-vision-dark" />
                  </div>
                  <span className="text-[10px] font-medium text-gray-500 bg-gray-50 border border-gray-100 rounded-full px-2 py-0.5 shrink-0">
                    {video.insights.length} çıkarım
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-night leading-snug mb-1.5 group-hover:text-vision-dark transition-colors line-clamp-2">
                  {video.title}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 flex-1">{video.subtitle}</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-vision-dark mt-3 group-hover:gap-1.5 transition-all">
                  Ürün videosunu görüntüle
                  <ChevronRight size={14} />
                </span>
              </Link>
            ))}
          </div>

          <p className="text-[11px] text-gray-400 text-center pt-2">{filtered.length} video</p>
        </>
      )}
    </div>
  );
}
