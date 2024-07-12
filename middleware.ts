import { NextResponse } from "next/server";

export function middleware(request:any) {
  const user = "true";

  if (!user) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/" , '/business-owners','/consultants'],
};
