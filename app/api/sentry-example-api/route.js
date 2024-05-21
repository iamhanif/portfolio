import { NextResponse } from "next/server";

// An example API route
export function GET() {
  return NextResponse.json({ data: "API Route Response" });
}
