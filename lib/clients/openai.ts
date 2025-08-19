import OpenAI from 'openai';
import { env } from '@/lib/env';

export function getOpenAI() {
  // Prefer Azure if fully configured
  if (env.AZURE_OPENAI_API_KEY && env.AZURE_OPENAI_ENDPOINT && env.AZURE_OPENAI_DEPLOYMENT) {
    return new OpenAI({
      apiKey: env.AZURE_OPENAI_API_KEY,
      baseURL: `${env.AZURE_OPENAI_ENDPOINT}/openai`,
      defaultHeaders: { 'api-key': env.AZURE_OPENAI_API_KEY },
      defaultQuery: { 'api-version': '2024-02-15-preview' }
    });
  }

  if (env.OPENAI_API_KEY) {
    return new OpenAI({ apiKey: env.OPENAI_API_KEY });
  }

  throw new Error('No OpenAI provider configured');
}
