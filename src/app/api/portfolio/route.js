import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { requireAdminSession } from '@/lib/auth';
import { getPortfolioContent, savePortfolioContent, resetPortfolioContent } from '@/lib/portfolio-store';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  const portfolio = await getPortfolioContent();
  return NextResponse.json(portfolio);
}

export async function POST(request) {
  const cookieStore = cookies();
  const token = cookieStore.get('portfolio_admin_session')?.value;

  if (!(await requireAdminSession(token))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  await savePortfolioContent(body);

  return NextResponse.json({ success: true });
}

export async function DELETE() {
  const cookieStore = cookies();
  const token = cookieStore.get('portfolio_admin_session')?.value;

  if (!(await requireAdminSession(token))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const portfolio = await resetPortfolioContent();

  return NextResponse.json({ success: true, portfolio });
}
