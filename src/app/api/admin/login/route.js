import { NextResponse } from 'next/server';
import { createAdminSession, verifyAdminCredentials } from '@/lib/auth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: 'Invalid request body.' },
      { status: 400 },
    );
  }

  const { username, password } = body;

  if (!username || !password) {
    return NextResponse.json(
      { error: 'Username and password are required.' },
      { status: 400 },
    );
  }

  try {
    const validCredentials = await verifyAdminCredentials(username, password);

    if (!validCredentials) {
      return NextResponse.json(
        { error: 'Invalid username or password.' },
        { status: 401 },
      );
    }

    const sessionToken = await createAdminSession();

    if (!sessionToken) {
      return NextResponse.json(
        { error: 'Failed to create admin session.' },
        { status: 500 },
      );
    }

    const response = NextResponse.json({ success: true });

    response.cookies.set('portfolio_admin_session', sessionToken, {
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
      secure: false,
      maxAge: 60 * 60 * 12,
    });

    return response;
  } catch (error) {
    console.error('Admin login failed:', error);

    return NextResponse.json(
      {
        error:
          'Failed to authenticate admin. Please verify the MongoDB connection and environment settings.',
      },
      { status: 500 },
    );
  }
}
