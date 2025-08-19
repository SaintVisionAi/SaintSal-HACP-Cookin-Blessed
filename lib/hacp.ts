// Human-AI Covenant Protocol (HACP) placeholder.
// Wire in your real logic here.

export type Tone = 'calm' | 'frustrated' | 'urgent';

export function detectTone(input: string): Tone {
  const s = input.toLowerCase();
  if (s.includes('now') || s.includes('asap')) return 'urgent';
  if (s.includes('mad') || s.includes('angry') || s.includes('upset')) return 'frustrated';
  return 'calm';
}
