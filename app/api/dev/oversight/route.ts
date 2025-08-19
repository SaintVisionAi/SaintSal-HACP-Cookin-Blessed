import { NextResponse } from 'next/server';
import { analyzeImpact } from '@/lib/oversight';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const summary = typeof body.summary === 'string' ? body.summary : '';
  const analysis = analyzeImpact(summary);
  // TODO: sync to logging, learning, agent registry
  return NextResponse.json({ analysis });
}
