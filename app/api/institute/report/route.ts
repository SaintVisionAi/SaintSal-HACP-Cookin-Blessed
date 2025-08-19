import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  // TODO: generate/export PDF or email
  return NextResponse.json({ ok: true, report: { status: 'queued', input: body } });
}
