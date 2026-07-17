/** Vite public klasöründeki statik dosyalar — HashRouter ile uyumlu mutlak yol */
export function publicAsset(path: string): string {
  const base = import.meta.env.BASE_URL;
  const normalized = path.replace(/^\//, '');
  return `${base}${normalized}`;
}

export const LOGO_FOOTER = publicAsset('hypefoooterlogo.png');
export const LOGO_HEADER = publicAsset('hypevisionlogo.png');
