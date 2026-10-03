import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { LANG_PREFIX, URL_LANG } from '../../i18n/routing';

/**
 * İçerik verisi tam yol tutar ("/en/solutions/x", "/baret-tespit-sistemi").
 * Router basename dil önekini zaten eklediği için:
 *  - aynı dildeki yollar <Link> ile önek çıkarılarak,
 *  - başka dildeki yollar düz <a> ile (tam sayfa yükleme) açılır.
 */
export function routerPath(href: string): string | null {
  if (!href.startsWith('/') || href.startsWith('//')) return null;
  const prefix = LANG_PREFIX[URL_LANG];
  const isOther = (['en', 'ru'] as const).some((l) => l !== URL_LANG && (href === `/${l}` || href.startsWith(`/${l}/`)));
  if (isOther) return null;
  if (!prefix) return href;
  if (href === prefix || href === `${prefix}/`) return '/';
  return href.startsWith(`${prefix}/`) ? href.slice(prefix.length) : null;
}

type Props = { href: string; children: ReactNode } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;

export default function SmartLink({ href, children, ...rest }: Props) {
  const to = routerPath(href);
  if (to !== null) {
    return (
      <Link to={to} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
}
