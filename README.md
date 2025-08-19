# SaintSal™ Final Repo (Starter)

**Purpose:** one clean Next.js (App Router) repo with your core API routes, ready for **Vercel + GitHub**.
Builder.io stays optional for marketing pages. Replit not required.

## Quick Start

1) **Create repo** on GitHub (private).  
2) **Download** this starter and push:
   ```bash
   # unzip and init
   unzip saintsal-final-repo.zip -d .
   cd saintsal-final-repo
   git init
   git remote add origin <your-github-url>
   git add .
   git commit -m "chore: init SaintSal final repo"
   git push -u origin main
   ```

3) **Connect to Vercel** → import your GitHub repo → set **Environment Variables** from `.env.example`.  
4) **Install & run locally**:
   ```bash
   npm install
   npm run dev
   ```

5) **Verify health** at `/api/health`.

## What’s inside

- **Next.js 14** (App Router, TypeScript)
- **API routes** aligned with your stack:
  - `/api/hacp/trigger`
  - `/api/brain/ingest`
  - `/api/brain/query`
  - `/api/companion/escalate`
  - `/api/auth/plan-check`
  - `/api/onboarding/walkthrough`
  - `/api/dev/oversight`
  - `/api/institute/insight`
  - `/api/institute/report`
  - `/api/realestate/valuation`
  - `/api/github/file-edit` (Supersal™ GitHub editor)
  - `/api/stripe/webhook`
  - `/api/twilio/inbound`
  - `/api/ghl/webhook`
  - `/api/health`

- **`lib/env.ts`** with Zod-validated envs
- **Clients**: GitHub, OpenAI/Azure, Stripe, Supabase
- **`scripts/verify-env.mjs`** to preflight required keys

## Platform Choice

- **Code**: GitHub (source of truth)  
- **Hosting**: Vercel (zero-config Next.js)  
- **Content**: Builder.io (optional; marketing only)  
- **No Replit needed.**

## Webhooks to set

- **Stripe**: point to `POST https://<your-domain>/api/stripe/webhook`
- **Twilio SMS**: `POST .../api/twilio/inbound`
- **GoHighLevel**: `POST .../api/ghl/webhook`

## Env Preflight

```bash
npm run verify:env
```

This checks for the must-have keys in production.

## Fill in your business logic

Most routes are thin wrappers that call helpers in `lib/`. Plug in your existing logic where marked `// TODO`.
