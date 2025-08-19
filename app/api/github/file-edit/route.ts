import { NextResponse } from 'next/server';
import { upsertFile } from '@/lib/clients/github';

export const runtime = 'nodejs';

export async function PATCH(req: Request) {
  const body = await req.json().catch(() => ({}));
  const { owner, repo, path, content, message, branch } = body ?? {};
  if (!owner || !repo || !path || !content || !message) {
    return NextResponse.json({ error: 'Missing required fields: owner, repo, path, content, message' }, { status: 400 });
  }
  try {
    const res = await upsertFile({ owner, repo, path, content, message, branch });
    return NextResponse.json({ ok: true, content: res?.content, commit: res?.commit });
  } catch (e: any) {
    return NextResponse.json({ error: e.message ?? 'GitHub update failed' }, { status: 500 });
  }
}
