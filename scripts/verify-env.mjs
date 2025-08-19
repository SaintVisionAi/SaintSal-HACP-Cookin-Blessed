import process from 'node:process';

const required = [
  'NEXT_PUBLIC_SITE_URL',
  // One of the two OpenAI providers should be present
  // We only warn if both are missing.
  // 'OPENAI_API_KEY' or 'AZURE_OPENAI_*'
  'STRIPE_SECRET_KEY',
  'STRIPE_WEBHOOK_SECRET',
  'SUPABASE_URL',
  'SUPABASE_SERVICE_ROLE_KEY',
  'GITHUB_PAT'
];

let missing = [];

for (const key of required) {
  if (!process.env[key]) missing.push(key);
}

const hasOpenAI = !!process.env.OPENAI_API_KEY;
const hasAzure = !!process.env.AZURE_OPENAI_API_KEY && !!process.env.AZURE_OPENAI_ENDPOINT && !!process.env.AZURE_OPENAI_DEPLOYMENT;

if (!hasOpenAI && !hasAzure) {
  missing.push('OPENAI_API_KEY (or) AZURE_OPENAI_API_KEY + AZURE_OPENAI_ENDPOINT + AZURE_OPENAI_DEPLOYMENT');
}

if (missing.length) {
  console.error('❌ Missing env vars:\n' + missing.map(k => `- ${k}`).join('\n'));
  process.exit(1);
} else {
  console.log('✅ Env looks good for production.');
}
