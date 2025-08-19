import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  NEXT_PUBLIC_SITE_URL: z.string().optional(),

  OPENAI_API_KEY: z.string().optional(),

  AZURE_OPENAI_API_KEY: z.string().optional(),
  AZURE_OPENAI_ENDPOINT: z.string().optional(),
  AZURE_OPENAI_DEPLOYMENT: z.string().optional(),

  STRIPE_SECRET_KEY: z.string().optional(),
  STRIPE_WEBHOOK_SECRET: z.string().optional(),

  SUPABASE_URL: z.string().optional(),
  SUPABASE_SERVICE_ROLE_KEY: z.string().optional(),

  GITHUB_PAT: z.string().optional(),

  BUILDER_PUBLIC_KEY: z.string().optional(),
  GHL_API_KEY: z.string().optional(),

  TWILIO_ACCOUNT_SID: z.string().optional(),
  TWILIO_AUTH_TOKEN: z.string().optional(),

  UPSTASH_VECTOR_REST_URL: z.string().optional(),
  UPSTASH_VECTOR_REST_TOKEN: z.string().optional(),
  UPSTASH_VECTOR_REST_READONLY_TOKEN: z.string().optional(),

  ASSEMBLYAI_API_KEY: z.string().optional(),
  DEEPL_API_KEY: z.string().optional(),
  NOTION_TOKEN: z.string().optional(),
});

export const env = envSchema.parse({
  NODE_ENV: process.env.NODE_ENV,
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,

  OPENAI_API_KEY: process.env.OPENAI_API_KEY,

  AZURE_OPENAI_API_KEY: process.env.AZURE_OPENAI_API_KEY,
  AZURE_OPENAI_ENDPOINT: process.env.AZURE_OPENAI_ENDPOINT,
  AZURE_OPENAI_DEPLOYMENT: process.env.AZURE_OPENAI_DEPLOYMENT,

  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
  STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,

  SUPABASE_URL: process.env.SUPABASE_URL,
  SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,

  GITHUB_PAT: process.env.GITHUB_PAT,

  BUILDER_PUBLIC_KEY: process.env.BUILDER_PUBLIC_KEY,
  GHL_API_KEY: process.env.GHL_API_KEY,

  TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN,

  UPSTASH_VECTOR_REST_URL: process.env.UPSTASH_VECTOR_REST_URL,
  UPSTASH_VECTOR_REST_TOKEN: process.env.UPSTASH_VECTOR_REST_TOKEN,
  UPSTASH_VECTOR_REST_READONLY_TOKEN: process.env.UPSTASH_VECTOR_REST_READONLY_TOKEN,

  ASSEMBLYAI_API_KEY: process.env.ASSEMBLYAI_API_KEY,
  DEEPL_API_KEY: process.env.DEEPL_API_KEY,
  NOTION_TOKEN: process.env.NOTION_TOKEN,
});
