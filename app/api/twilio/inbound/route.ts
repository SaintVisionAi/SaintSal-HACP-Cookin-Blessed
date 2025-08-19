import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  const form = await req.formData();
  const from = String(form.get('From') ?? '');
  const body = String(form.get('Body') ?? '');
  // TODO: route inbound SMS into your HACP/Companion flows
  return NextResponse.json({ ok: true, from, body });
}
