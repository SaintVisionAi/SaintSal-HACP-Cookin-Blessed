import { env } from '@/lib/env';

type UpsertParams = {
  owner: string;
  repo: string;
  path: string;
  content: string;      // raw text
  message: string;
  branch?: string;
};

const GITHUB_API = 'https://api.github.com';

export async function upsertFile({ owner, repo, path, content, message, branch = 'main' }: UpsertParams) {
  if (!env.GITHUB_PAT) {
    throw new Error('GITHUB_PAT is not set');
  }

  const base64 = Buffer.from(content, 'utf8').toString('base64');

  // get current SHA if file exists
  let sha: string | undefined;
  const getRes = await fetch(`${GITHUB_API}/repos/${owner}/${repo}/contents/${encodeURIComponent(path)}?ref=${branch}`, {
    headers: { Authorization: `Bearer ${env.GITHUB_PAT}`, Accept: 'application/vnd.github+json' }
  });
  if (getRes.ok) {
    const data: any = await getRes.json();
    sha = data.sha;
  }

  const putRes = await fetch(`${GITHUB_API}/repos/${owner}/${repo}/contents/${encodeURIComponent(path)}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${env.GITHUB_PAT}`,
      Accept: 'application/vnd.github+json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message,
      content: base64,
      branch,
      sha
    })
  });

  if (!putRes.ok) {
    const err = await putRes.text();
    throw new Error(`GitHub upsert failed: ${putRes.status} ${err}`);
  }

  const json = await putRes.json();
  return json;
}
