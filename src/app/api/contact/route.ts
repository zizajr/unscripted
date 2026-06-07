import { NextResponse } from "next/server";
import { headers } from "next/headers";

// ─── Simple in-memory rate limiter ───────────────────────────────────────────
// Allows max 3 submissions per IP per 10 minutes.
// This resets whenever the serverless function cold-starts, which is fine for
// our purpose — it stops burst spam without blocking legitimate users.
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX      = 3;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes

function isRateLimited(ip: string): boolean {
  const now   = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) return true;

  entry.count++;
  return false;
}

// ─────────────────────────────────────────────────────────────────────────────

export async function POST(request: Request) {
  try {
    // ── Rate limit check ──────────────────────────────────────────────────────
    const headersList = await headers();
    const ip =
      headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      headersList.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      console.warn(`Rate limit exceeded for IP: ${ip}`);
      return NextResponse.json(
        { error: "Too many requests. Please wait a few minutes before trying again." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, company, message, service, howHeard, _honeypot } = body;

    // ── Honeypot check ────────────────────────────────────────────────────────
    // Bots fill every visible field including hidden ones.
    // Real users never see or touch _honeypot, so it stays blank.
    if (_honeypot) {
      console.warn(`Honeypot triggered — bot submission blocked (IP: ${ip})`);
      // Return 200 so bots think they succeeded (don't alert them to the trap)
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // ── Field validation ──────────────────────────────────────────────────────
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields (name, email, message)" },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Basic length guards to stop oversized payloads
    if (message.length > 5000 || name.length > 200 || email.length > 200) {
      return NextResponse.json(
        { error: "One or more fields exceed the maximum allowed length." },
        { status: 400 }
      );
    }

    console.log("----------------------------------------");
    console.log("UNSCRIPTED WEBSITE — CONTACT SUBMISSION:");
    console.log("Name:      ", name);
    console.log("Email:     ", email);
    console.log("Company:   ", company || "N/A");
    console.log("Service:   ", service || "N/A");
    console.log("How Heard: ", howHeard || "N/A");
    console.log("Message:   ", message.slice(0, 200), message.length > 200 ? "…" : "");
    console.log("----------------------------------------");

    // ── Email dispatch ────────────────────────────────────────────────────────
    // Destination: withunscripted@gmail.com (until custom domain mail is live)
    const apiKey           = process.env.RESEND_API_KEY;
    const notificationEmail =
      process.env.CONTACT_NOTIFICATION_EMAIL || "withunscripted@gmail.com";

    if (apiKey) {
      // Option 1: Resend (when key is configured in Vercel env vars)
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Unscripted Website <website@theunscripted.xyz>",
          to:   notificationEmail,
          reply_to: email,
          subject: `New Inquiry — ${name}${company ? ` (${company})` : ""}`,
          html: buildEmailHtml({ name, email, company, service, howHeard, message }),
        }),
      });

      if (!res.ok) throw new Error("Resend API failed");
      console.log("Dispatched via Resend.");
    } else {
      // Option 2: FormSubmit zero-config relay (no key needed)
      const res = await fetch(
        `https://formsubmit.co/ajax/${notificationEmail}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            Name:        name,
            Email:       email,
            Company:     company     || "N/A",
            Service:     service     || "N/A",
            "How Heard": howHeard    || "N/A",
            Message:     message,
            _subject:    `New Inquiry — ${name}${company ? ` (${company})` : ""} | Unscripted`,
            _replyto:    email,
            // Disable FormSubmit's own captcha page — we handle spam ourselves
            _captcha:    "false",
          }),
        }
      );

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        console.error("FormSubmit error:", err);
        throw new Error("FormSubmit relay failed");
      }
      console.log(`Dispatched via FormSubmit → ${notificationEmail}`);
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error: unknown) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Something went wrong on our end. Please try again or email us directly." },
      { status: 500 }
    );
  }
}

// ─── Email HTML template ──────────────────────────────────────────────────────
function buildEmailHtml({
  name, email, company, service, howHeard, message,
}: {
  name: string; email: string; company?: string;
  service?: string; howHeard?: string; message: string;
}) {
  const row = (label: string, value: string) =>
    value && value !== "N/A"
      ? `<tr>
           <td style="padding:10px 0;border-bottom:1px solid rgba(10,10,10,0.08);font-weight:600;width:140px;color:#3D3D3D;">${label}</td>
           <td style="padding:10px 0;border-bottom:1px solid rgba(10,10,10,0.08);color:#0A0A0A;">${value}</td>
         </tr>`
      : "";

  return `
    <div style="font-family:sans-serif;line-height:1.6;color:#0A0A0A;max-width:600px;margin:0 auto;border:1px solid rgba(242,183,5,0.25);border-radius:8px;overflow:hidden;">
      <div style="background:#0A0A0A;padding:24px;text-align:center;border-bottom:3px solid #F2B705;">
        <p style="color:#F2B705;margin:0;font-size:11px;letter-spacing:0.3em;">UNSCRIPTED</p>
        <h2 style="color:#F8F5EE;margin:8px 0 0;font-size:18px;letter-spacing:0.05em;">New Project Inquiry</h2>
      </div>
      <div style="padding:32px 24px;background:#F8F5EE;">
        <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
          ${row("Name",       name)}
          ${row("Email",      `<a href="mailto:${email}" style="color:#8B2FC9;">${email}</a>`)}
          ${row("Company",    company  || "")}
          ${row("Service",    service  || "")}
          ${row("How Heard",  howHeard || "")}
        </table>
        <div style="background:#fff;padding:20px;border-left:4px solid #F2B705;border-radius:4px;">
          <p style="margin:0 0 10px;font-size:11px;letter-spacing:0.15em;color:rgba(10,10,10,0.45);text-transform:uppercase;">Message</p>
          <p style="margin:0;white-space:pre-wrap;font-size:15px;">${message}</p>
        </div>
        <p style="margin:24px 0 0;font-size:13px;color:rgba(10,10,10,0.45);">
          Reply directly to this email to respond to ${name}.
        </p>
      </div>
      <div style="background:#0A0A0A;padding:14px;text-align:center;font-size:11px;color:rgba(248,245,238,0.35);">
        Sent automatically from theunscripted.xyz
      </div>
    </div>
  `;
}
