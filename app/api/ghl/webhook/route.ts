import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  // TODO: handle GHL events (contacts, opportunities, etc.)
  return NextResponse.json({ ok: true, received: body });
}
