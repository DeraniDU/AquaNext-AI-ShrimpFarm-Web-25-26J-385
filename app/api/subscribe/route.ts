import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    { error: "Subscription endpoint is not configured on this deployment." },
    { status: 501 },
  );
}
