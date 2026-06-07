import { NextResponse } from "next/server";
import { headers } from "next/headers";

// ─── Simple in-memory rate limiter ───────────────────────────────────────────
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT_MAX) return true;
  entry.count++;
  return false;
}

export async function POST(request: Request) {
  try {
    const headersList = await headers();
    const ip = headersList.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json({ error: "Too many requests. Please wait." }, { status: 429 });
    }

    const body = await request.json();
    const { name, email, company, message, service, howHeard, budget, _honeypot } = body;

    if (_honeypot) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    if (!name || !email || !message || !budget) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (message.length < 20 || message.length > 2000) {
      return NextResponse.json({ error: "Message must be between 20 and 2000 characters." }, { status: 400 });
    }

    // Send to FormSubmit
    const formSubmitRes = await fetch("https://formsubmit.co/ajax/defy@theunscripted.xyz", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        Name: name,
        Email: email,
        Company: company || "N/A",
        Service: service || "N/A",
        Budget: budget,
        "How Heard": howHeard || "N/A",
        Message: message,
      }),
    });

    if (!formSubmitRes.ok) {
      throw new Error(`FormSubmit error: ${formSubmitRes.status}`);
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Something went wrong on our end. Please email us directly." },
      { status: 500 }
    );
  }
}
