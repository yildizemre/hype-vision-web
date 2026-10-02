import { Fragment, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Lightbulb } from 'lucide-react';
import type { GuideBlock } from '../data/guides';

/** [metin](/yol) ve **kalın** biçimlerini React düğümlerine çevirir */
export function renderInline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1]) {
      const href = m[2];
      out.push(
        href.startsWith('/') ? (
          <Link key={k++} to={href} className="text-vision-dark font-medium underline decoration-vision/40 underline-offset-2 hover:decoration-vision">
            {m[1]}
          </Link>
        ) : (
          <a key={k++} href={href} rel="noopener" className="text-vision-dark underline">
            {m[1]}
          </a>
        ),
      );
    } else {
      out.push(
        <strong key={k++} className="font-semibold text-[#0A0A0A]">
          {m[3]}
        </strong>,
      );
    }
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

const pCls = 'text-[15px] sm:text-base text-gray-700 leading-relaxed';

export default function GuideBody({ blocks, ctaDefault }: { blocks: GuideBlock[]; ctaDefault: string }) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.type) {
          case 'p':
            return <p key={i} className={pCls}>{renderInline(b.text)}</p>;
          case 'h2':
            return (
              <h2 key={i} id={b.id} className="scroll-mt-24 text-xl sm:text-2xl font-semibold text-[#0A0A0A] pt-4">
                {b.text}
              </h2>
            );
          case 'h3':
            return <h3 key={i} className="text-lg font-semibold text-[#0A0A0A] pt-1">{b.text}</h3>;
          case 'ul':
          case 'ol': {
            const Tag = b.type;
            return (
              <Tag key={i} className={`${b.type === 'ol' ? 'list-decimal' : 'list-disc'} pl-6 space-y-2 marker:text-vision`}>
                {b.items.map((it, j) => (
                  <li key={j} className={pCls}>{renderInline(it)}</li>
                ))}
              </Tag>
            );
          }
          case 'table':
            return (
              <div key={i} className="overflow-x-auto -mx-1">
                <table className="w-full text-sm border-collapse min-w-[480px]">
                  <thead>
                    <tr>
                      {b.head.map((h, j) => (
                        <th key={j} className="text-left font-semibold text-[#0A0A0A] bg-vision-50 border border-vision/15 px-3 py-2">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((row, r) => (
                      <tr key={r}>
                        {row.map((c, j) => (
                          <td key={j} className="text-gray-700 border border-gray-200 px-3 py-2 align-top">
                            {renderInline(c)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case 'note':
            return (
              <div key={i} className="flex gap-3 rounded-xl border border-vision/20 bg-vision-50 p-4">
                <Lightbulb size={18} className="text-vision-dark shrink-0 mt-0.5" aria-hidden />
                <p className="text-sm text-gray-700 leading-relaxed">{renderInline(b.text)}</p>
              </div>
            );
          case 'cta':
            return (
              <div key={i} className="rounded-2xl bg-[#0c2a30] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
                <p className="text-white text-base font-medium leading-relaxed">{b.text ?? ctaDefault}</p>
                <Link
                  to="/iletisim"
                  data-track="contact_cta"
                  data-track-location="guide"
                  className="inline-flex items-center justify-center gap-2 shrink-0 text-sm font-semibold text-white px-6 py-3 rounded-lg bg-vision hover:bg-vision-dark transition-colors"
                >
                  Keşif görüşmesi planla <ArrowRight size={16} />
                </Link>
              </div>
            );
          default:
            return <Fragment key={i} />;
        }
      })}
    </>
  );
}
