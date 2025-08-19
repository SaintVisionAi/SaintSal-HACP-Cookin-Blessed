import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/clients/supabase';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  if (!supabaseAdmin) {
    return NextResponse.json({ error: 'Supabase not configured' }, { status: 500 });
  }
  const body = await req.json().catch(() => ({}));
  // TODO: store vectors/metadata in your index pipeline
  return NextResponse.json({ ok: true, received: body });
}
