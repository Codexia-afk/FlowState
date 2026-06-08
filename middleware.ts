import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
  // Apply to all routes under /dashboard
  const pathname = request.nextUrl.pathname;
  if (!pathname.startsWith('/dashboard')) return NextResponse.next();

  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
  if (!token) {
    // Not authenticated – redirect to login
    const loginUrl = new URL('/auth/login', request.url);
    loginUrl.searchParams.set('callbackUrl', request.url);
    return NextResponse.redirect(loginUrl);
  }

  // Example role check – admins can access admin‑only sub‑paths
  if (pathname.startsWith('/dashboard/admin')) {
    if ((token as any).role !== 'admin') {
      return new NextResponse('Forbidden: Admins only', { status: 403 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
