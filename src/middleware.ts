import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse, type NextRequest } from "next/server";

const PRIVATE_URLS = ["/dashboard"];
const AUTH_URLS = ["/auth/login", "/auth/sign-up"];

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const pathname = req.nextUrl.pathname;
  // Create a Supabase client configured to use cookies
  const supabase = createMiddlewareClient({ req, res });

  // Refresh session if expired - required for Server Components
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (PRIVATE_URLS.includes(pathname) && !user) {
    return Response.redirect(new URL("/auth/login", req.url));
  }
  if (AUTH_URLS.includes(pathname) && user) {
    return Response.redirect(new URL("/dashboard", req.url));
  }
  return res;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
