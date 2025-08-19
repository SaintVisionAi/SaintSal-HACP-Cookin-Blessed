import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  // TODO: detect plan/tier, log webhook, return upsell suggestions
  return NextResponse.json({ plan: 'PRO', body });
}
