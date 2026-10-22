/** Google Drive paylaşım linkinden file ID çıkarır. */
export function driveFileIdFromUrl(url: string): string | null {
  const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  return match?.[1] ?? null;
}

export function driveEmbedUrl(fileId: string): string {
  return `https://drive.google.com/file/d/${fileId}/preview?embedded=true`;
}

export function driveOpenUrl(fileId: string): string {
  return `https://drive.google.com/file/d/${fileId}/view`;
}
