const SESSION_KEY = 'bayisunum-session';

/** SHA-256 hash — kaynak kodda düz metin token yok. Değiştirmek için: VITE_AUTH_TOKEN_HASH */
const TOKEN_HASH =
  import.meta.env.VITE_AUTH_TOKEN_HASH ??
  'db200034870ef4127e1f1d56ddd76d28b4736f59b043deb82b434b10ec0d1721';

async function sha256(text: string): Promise<string> {
  const data = new TextEncoder().encode(text);
  const buf = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

export async function verifyLoginToken(token: string): Promise<boolean> {
  const hash = await sha256(token.trim());
  return hash === TOKEN_HASH;
}

export function isAuthenticated(): boolean {
  return sessionStorage.getItem(SESSION_KEY) === '1';
}

export function setAuthenticated(): void {
  sessionStorage.setItem(SESSION_KEY, '1');
}

export function clearAuth(): void {
  sessionStorage.removeItem(SESSION_KEY);
}
