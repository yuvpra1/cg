export const runtime = 'edge';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    // Use environment variables or fallback hardcoded for local dev
    // In Cloudflare, set ADMIN_USERNAME and ADMIN_PASSWORD in variables
    const validUsername = process.env.ADMIN_USERNAME || 'cgssbypr';
    const validPassword = process.env.ADMIN_PASSWORD || '@2BmL9*7';

    if (username === validUsername && password === validPassword) {
      const response = NextResponse.json({ success: true });
      
      // Set secure HttpOnly cookie
      response.cookies.set({
        name: 'admin_session',
        value: 'authenticated_cgssb_admin',
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/',
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });

      return response;
    }

    return NextResponse.json({ success: false, error: 'Invalid username or password' }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}
