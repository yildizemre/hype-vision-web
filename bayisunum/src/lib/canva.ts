/** Canva edit/view URL → embed iframe src */
export function canvaEmbedSrc(url: string): string {
  const parsed = new URL(url);
  parsed.pathname = parsed.pathname.replace(/\/edit\/?$/, '/view');
  if (!parsed.pathname.endsWith('/view')) {
    parsed.pathname = parsed.pathname.replace(/\/?$/, '/view');
  }
  parsed.searchParams.set('embed', '');
  return parsed.toString();
}

/** canva.link kısa linkinden design view URL üretilemez; content.ts'te tam URL saklanır. */
export function canvaOpenUrl(url: string): string {
  return url.replace(/\/edit\/?(\?|$)/, '/view$1');
}
