import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  // TODO: narrate UI walkthrough based on tier + Companion mode
  return NextResponse.json({ ok: true, steps: ['intro', 'set env', 'connect Stripe', 'done'], input: body });
}
