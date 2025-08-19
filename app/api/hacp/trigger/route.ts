import { NextResponse } from 'next/server';
import { detectTone } from '@/lib/hacp';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const text: string = body.text ?? '';
  const tone = detectTone(text);
  // TODO: add escalation + fallback based on tone
  return NextResponse.json({ tone });
}
