import { NextResponse } from "next/server";

// ---------------------------------------------------------------------------
// Mock enquiry endpoint.
//
// This validates that a payload arrived and returns success. It does NOT send
// a real email or write to a CRM. To make it live, wire up an email provider
// (e.g. Resend/Postmark) and/or a CRM here using the keys in .env.local.
// See README → "Integrations still required".
// ---------------------------------------------------------------------------

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const data = body as Record<string, unknown>;
  if (!data?.name || !data?.email) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields" },
      { status: 422 },
    );
  }

  // Simulate processing latency so the loading state is visible in dev.
  await new Promise((resolve) => setTimeout(resolve, 700));

  // In production: send notification email + persist to CRM here.
  console.info("[enquiry] received:", data.email);

  return NextResponse.json({ ok: true, message: "Enquiry received" });
}
