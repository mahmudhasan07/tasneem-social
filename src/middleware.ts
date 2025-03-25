import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtDecode } from "jwt-decode";
export function middleware(request: NextRequest) {
  // const loginRoute = `${request.nextUrl.origin}/login`;
  const homeRoute = `${request.nextUrl.origin}/`;
  // const dashboardRoute = `${request.nextUrl.origin}/dashboard`;

  const token = request.cookies.get('accessToken')?.value;
  if (!token) {
    return NextResponse.redirect(new URL(homeRoute, request.url));
  }
  const userInfo = jwtDecode(token as string)
  console.log(userInfo);

  const currentPath = request.nextUrl.pathname;

  // Redirect based on role and route
  if ('role' in userInfo && userInfo?.role === 'ADMIN' && currentPath.startsWith('/services') ) {
    // Prevent ADMIN from accessing /services
    return NextResponse.redirect(new URL(homeRoute, request.url));
  } else if ('role' in userInfo && userInfo?.role === 'USER' && currentPath.startsWith('/dashboard')) {
    // Prevent USER from accessing /dashboard
    return NextResponse.redirect(new URL(homeRoute, request.url));
  }

  // Allow the request to proceed if the token exists
  return NextResponse.next();
}

export const config = {
  matcher: ['/services', '/dashboard'], // Apply middleware to the /services route
};
