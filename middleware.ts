import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const consultantRoutes = [
    "/",
    "/business-owners",
    "/business-owners/:id",
    "/partners",
    "/partners/:id",
    "/chats",
  ];
  const partnerRoutes = [
    "/",
    "/consultants",
    "/consultants/:id",
    "/business-owners",
    "/business-owners/:id",
    "/chats",
  ];
  const superAdminRoutes = [
    ...consultantRoutes,
    ...partnerRoutes,
    "/allUsers",
    "/experts",
  ];

  const accessToken = request.cookies.get("access_token")?.value;
  const userRole = request.cookies.get("user_role")?.value;

  if (!accessToken) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  if (userRole) {
    const pathname = request.nextUrl.pathname;

    const isRouteAllowed = (routes: string[]) =>
      routes.some((route) =>
        new RegExp(
          `^${route.replace(/:\w+/, "[^/]+").replace(/\[\w+\]/, "[^/]+")}$`
        ).test(pathname)
      );

    if (userRole === "consultant" && !isRouteAllowed(consultantRoutes)) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    if (userRole === "partner" && !isRouteAllowed(partnerRoutes)) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    if (userRole === "super_admin" && !isRouteAllowed(superAdminRoutes)) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/business-owners",
    "/consultants",
    "/business-owners/:path*",
    "/consultants/:path*",
    "/partners",
    "/partners/:path*",
    "/experts",
    "/experts/:path*",
    "/allUsers/:path*",
    "/allUsers",
    "/chats",
    "/chats/:path*",
  ],

};

