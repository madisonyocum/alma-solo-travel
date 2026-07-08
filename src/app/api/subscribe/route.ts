import { NextResponse } from "next/server";

// Mock newsletter / early-access subscription endpoint.
// No email is stored or sent until an email provider is configured.
export async function POST(request: Request) {
  try {
    const { email } = (await request.json()) as { email?: string };
    if (!email || !email.includes("@")) {
      return NextResponse.json({ ok: false }, { status: 422 });
    }
    console.info("[subscribe] received:", email);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
