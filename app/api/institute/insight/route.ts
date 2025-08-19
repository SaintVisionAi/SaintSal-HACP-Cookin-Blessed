import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  // TODO: generate insight cards
  return NextResponse.json({ ok: true, insight: { title: 'Placeholder', details: body } });
}
