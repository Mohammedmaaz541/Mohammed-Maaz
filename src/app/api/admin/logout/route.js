import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { revokeAdminSession } from '@/lib/auth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST() {
  const cookieStore = cookies();
  const token = cookieStore.get('portfolio_admin_session')?.value;

  await revokeAdminSession(token);

  const response = NextResponse.json({ success: true });

  response.cookies.set('portfolio_admin_session', '', {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    secure: false,
    maxAge: 0,
  });

  return response;
}
