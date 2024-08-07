import { ROUTES } from "@/app/routes";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { type NextRequest, NextResponse } from "next/server";

const PRIVATE = Object.values(ROUTES.PRIVATE).map((route) => route);
const PUBLIC = Object.values(ROUTES.PUBLIC).map((route) => route);

const AUTH = Object.values(ROUTES.AUTH).map((route) => route);

const checkIfPrivate = (pathname: string) => {
	for (const route of PRIVATE) {
		if (route.match(pathname)) {
			return true;
		}
	}
};

const checkIfPublic = (pathname: string) => {
	for (const route of PUBLIC) {
		if (route?.match(pathname)) {
			return true;
		}
	}
};

const checkIfAuth = (pathname: string) => {
	for (const route of AUTH) {
		if (route.match(pathname)) {
			return true;
		}
	}
};

export async function middleware(req: NextRequest) {
	const res = NextResponse.next();
	const pathname = req.nextUrl.pathname;

	if (checkIfPublic(pathname)) {
		return res;
	}

	// Create a Supabase client configured to use cookies
	const supabase = createMiddlewareClient({ req, res });
	// Refresh session if expired - required for Server Components
	const {
		data: { user },
	} = await supabase.auth.getUser();

	if (checkIfPrivate(pathname) && !user) {
		return Response.redirect(new URL(ROUTES.AUTH.LOGIN.path, req.url));
	}
	if (checkIfAuth(pathname) && user) {
		return Response.redirect(new URL(ROUTES.PRIVATE.DASHBOARD.path, req.url));
	}
	return res;
}

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
