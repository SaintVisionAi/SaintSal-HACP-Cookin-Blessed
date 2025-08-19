import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

type ValuationInput = {
  purchasePrice: number;
  rehabCost?: number;
  arv?: number;          // after repair value
  rent?: number;
  expenses?: number;
  rate?: number;         // interest rate (annual)
  termYears?: number;    // loan term
  ltv?: number;          // loan-to-value as 0-1
};

function quickFlipROI(i: ValuationInput) {
  const invested = (i.purchasePrice ?? 0) + (i.rehabCost ?? 0);
  const profit = (i.arv ?? 0) - invested;
  const roi = invested ? profit / invested : 0;
  return { invested, profit, roi };
}

function quickDSCR(i: ValuationInput) {
  const annualRent = (i.rent ?? 0) * 12;
  const annualExp = (i.expenses ?? 0) * 12;
  const noi = annualRent - annualExp;
  // Approx mortgage (interest-only rough cut if details missing)
  const loan = (i.ltv ?? 0.75) * (i.arv ?? i.purchasePrice ?? 0);
  const debtService = (i.rate ?? 0.08) * loan;
  const dscr = debtService ? noi / debtService : 0;
  return { noi, debtService, dscr };
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({})) as ValuationInput;
  const flip = quickFlipROI(body);
  const hold = quickDSCR(body);
  // TODO: replace with your finalized protocol logic
  return NextResponse.json({ ok: true, flip, hold, input: body });
}
