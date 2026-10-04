import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { LANG_PREFIX, URL_LANG } from '../../i18n/routing';

/** Language root as served: "/", "/en/", "/ru/". */
const HOME_HREF = LANG_PREFIX[URL_LANG] ? `${LANG_PREFIX[URL_LANG]}/` : '/';

type Props = { children: ReactNode } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;

/**
 * Link to the current language's home page.
 * Under the /en and /ru router basename, <Link to="/"> renders href="/en" (no slash), which
 * Netlify 301s to "/en/". This renders the final URL directly and keeps client-side navigation.
 */
export default function HomeLink({ children, onClick, ...rest }: Props) {
  const navigate = useNavigate();
  const handle = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || rest.target) return;
    e.preventDefault();
    navigate('/');
  };
  return (
    <a href={HOME_HREF} {...rest} onClick={handle}>
      {children}
    </a>
  );
}
