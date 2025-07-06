import {NextRequest, NextResponse} from "next/server";

export default async function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname;

    if (path.startsWith('/agents') || path.startsWith('/profile')) {
        const sessionToken = req.cookies.get("__Secure-better-auth.session_token") ?? req.cookies.get("better-auth.session_token");

        if (!sessionToken) {
            return NextResponse.redirect(new URL('/login', req.nextUrl));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|.*\\.png$).*)'
    ],
}