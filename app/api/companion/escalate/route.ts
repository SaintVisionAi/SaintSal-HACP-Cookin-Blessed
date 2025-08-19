import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  // TODO: route to GPT-4o/Claude based on frustration score or PRO flag
  return NextResponse.json({ escalated: true, meta: body });
}
