import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const consultantRoutes = ["/", "/business-owners", "/business-owners/:id"];

  const partnerRoutes = [
    "/",
    "/partners",
    "/partners/:id",
    "/consultants",
    "consultants/:id",
  ];

  const superAdminRoutes = [
    ...consultantRoutes,
    ...partnerRoutes,
    "/allUsers",
    "/experts",
  ];
  const accessToken = request.cookies.get("access_token");

  if (!accessToken) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/business-owners",
    "/consultants",
    "/business-owners/:id",
    "/consultants/:id",
    "/partners",
    "/partners/:id",
    "/experts",
  ],
};
