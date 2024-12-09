import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  // Skip middleware for cron and test endpoints
  if (
    req.nextUrl.pathname.startsWith('/api/cron') ||
    req.nextUrl.pathname.startsWith('/api/test-alerts')
  ) {
    return NextResponse.next();
  }

  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })
  await supabase.auth.getSession()
  return res
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - /api/cron (cron endpoints)
     * - /api/test-alerts (test endpoints)
     */
    '/((?!_next/static|_next/image|favicon.ico|api/cron|api/test-alerts).*)',
  ],
} 