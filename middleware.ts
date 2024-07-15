import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const accessToken =
    request.cookies.get("access_token") || localStorage.getItem("access_token");

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
  ],
};
