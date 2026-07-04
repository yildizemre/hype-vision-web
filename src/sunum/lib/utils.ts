export function slideImagePath(deckId: string, index: number): string {
  return `./slides/${deckId}/${String(index).padStart(2, '0')}.png`;
}
