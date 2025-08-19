import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  // TODO: query vector index + compose answer
  return NextResponse.json({ ok: true, query: body });
}
