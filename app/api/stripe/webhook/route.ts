import { NextResponse } from 'next/server';
import { stripe } from '@/lib/clients/stripe';
import { env } from '@/lib/env';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  if (!stripe || !env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json({ error: 'Stripe not configured' }, { status: 500 });
  }

  const sig = req.headers.get('stripe-signature');
  const body = await req.text(); // raw body for Stripe verification

  try {
    const event = stripe.webhooks.constructEvent(body, sig as string, env.STRIPE_WEBHOOK_SECRET);
    // TODO: handle event types (checkout.session.completed, invoice.payment_succeeded, etc.)
    return NextResponse.json({ received: true, type: event.type });
  } catch (err: any) {
    return NextResponse.json({ error: `Webhook error: ${err.message}` }, { status: 400 });
  }
}
