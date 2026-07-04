import { Navigate, useParams } from 'react-router-dom';
import Shell from '../components/Shell';
import CanvaDeckViewer from '../components/CanvaDeckViewer';
import { getDeck } from '../data/content';
import { SUNUM_HUB } from '../paths';

export default function DeckPage() {
  const { deckId } = useParams<{ deckId: string }>();
  const deck = deckId ? getDeck(deckId) : undefined;

  if (!deck) return <Navigate to={SUNUM_HUB} replace />;

  return (
    <Shell backTo={SUNUM_HUB} title={deck.title} subtitle={`${deck.tag} · ${deck.slideCount} slayt`}>
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8 lg:py-10">
        <div className="mb-3 sm:mb-4 flex flex-wrap items-center gap-2 sm:gap-3">
          <span className="text-[10px] font-bold uppercase tracking-wider text-vision-dark px-2.5 py-1 rounded-full bg-vision-50 border border-vision/20">
            {deck.tag}
          </span>
          <span className="text-[10px] text-gray-500">Canva sunum</span>
          {deck.sourceFile ? <span className="text-[10px] text-gray-400">Kaynak: {deck.sourceFile}</span> : null}
        </div>

        {deck.canvaUrl ? (
          <CanvaDeckViewer viewUrl={deck.canvaUrl} title={deck.title} />
        ) : (
          <p className="text-sm text-gray-500 text-center py-12">Sunum bağlantısı tanımlı değil.</p>
        )}
      </div>
    </Shell>
  );
}
