import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const session = request.cookies.get('admin_session');

  const { pathname } = request.nextUrl;

  // Protect /admin routes (except /admin-login) and POST /api/jobs, /api/upload
  const isProtectedAdminRoute = pathname.startsWith('/admin') && pathname !== '/admin-login';
  const isProtectedApiRoute = (pathname.startsWith('/api/jobs') || pathname.startsWith('/api/upload')) && request.method === 'POST';

  if (isProtectedAdminRoute || isProtectedApiRoute) {
    if (!session || session.value !== 'authenticated_cgssb_admin') {
      if (isProtectedApiRoute) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      }
      return NextResponse.redirect(new URL('/admin-login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/api/jobs/:path*', '/api/upload/:path*'],
};
