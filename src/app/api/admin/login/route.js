import { NextResponse } from 'next/server';
import { createAdminSession, verifyAdminCredentials } from '@/lib/auth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request) {
  const { username, password } = await request.json();

  if (!username || !password) {
    return NextResponse.json(
      { error: 'Username and password are required.' },
      { status: 400 },
    );
  }

  const validCredentials = await verifyAdminCredentials(username, password);

  if (!validCredentials) {
    return NextResponse.json(
      { error: 'Invalid username or password.' },
      { status: 401 },
    );
  }

  const sessionToken = await createAdminSession();
  const response = NextResponse.json({ success: true });

  response.cookies.set('portfolio_admin_session', sessionToken, {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    secure: false,
    maxAge: 60 * 60 * 12,
  });

  return response;
}
