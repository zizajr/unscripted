import { NextResponse } from "next/server";
import { headers } from "next/headers";
import nodemailer from "nodemailer";

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

    // Honeypot check for bots
    if (_honeypot) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // Validation
    if (!name || !email || !message || !budget) {
      return NextResponse.json({ error: "Missing required fields: Name, Email, Budget, and Message are compulsory." }, { status: 400 });
    }

    if (message.length < 20 || message.length > 2000) {
      return NextResponse.json({ error: "Message must be between 20 and 2000 characters." }, { status: 400 });
    }

    // Zoho SMTP Transporter setup
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true, // use SSL
      auth: {
        user: "defy@theunscripted.xyz",
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Check if SMTP password is set
    if (!process.env.SMTP_PASSWORD) {
      console.error("CRITICAL: SMTP_PASSWORD environment variable is missing.");
      return NextResponse.json({ error: "Server configuration error. Contact admin." }, { status: 500 });
    }

    // Construct the email body
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #eaeaea; border-radius: 8px;">
        <h2 style="color: #F2B705; margin-top: 0;">New Project Inquiry</h2>
        <p style="color: #666; font-size: 14px;">You have received a new message from the Unscripted website.</p>
        <hr style="border: none; border-top: 1px solid #eaeaea; margin: 20px 0;" />
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #f5f5f5; width: 120px;"><strong>Name:</strong></td>
            <td style="padding: 8px 0; border-bottom: 1px solid #f5f5f5;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #f5f5f5;"><strong>Email:</strong></td>
            <td style="padding: 8px 0; border-bottom: 1px solid #f5f5f5;"><a href="mailto:${email}" style="color: #8B2FC9;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #f5f5f5;"><strong>Company:</strong></td>
            <td style="padding: 8px 0; border-bottom: 1px solid #f5f5f5;">${company || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #f5f5f5;"><strong>Budget:</strong></td>
            <td style="padding: 8px 0; border-bottom: 1px solid #f5f5f5;"><span style="background: #F2B705; color: #0A0A0A; padding: 2px 8px; border-radius: 12px; font-weight: bold; font-size: 12px;">${budget}</span></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #f5f5f5;"><strong>Service:</strong></td>
            <td style="padding: 8px 0; border-bottom: 1px solid #f5f5f5;">${service || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #f5f5f5;"><strong>How Heard:</strong></td>
            <td style="padding: 8px 0; border-bottom: 1px solid #f5f5f5;">${howHeard || 'N/A'}</td>
          </tr>
        </table>
        
        <h3 style="margin-top: 24px; color: #333;">Message:</h3>
        <div style="background: #f9f9f9; padding: 16px; border-radius: 6px; color: #333; line-height: 1.6; white-space: pre-wrap;">
          ${message}
        </div>
      </div>
    `;

    // Send the email
    await transporter.sendMail({
      from: '"Unscripted Website" <defy@theunscripted.xyz>', // sender address (must be the authenticated zoho user)
      to: "defy@theunscripted.xyz", // list of receivers (sending to yourself)
      replyTo: email, // If you hit 'reply', it goes to the client
      subject: `New Lead: ${name} (${company || 'Individual'})`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nBudget: ${budget}\nService: ${service}\nMessage:\n${message}`,
      html: htmlBody,
    });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error: any) {
    console.error("Nodemailer SMTP Error:", error);
    return NextResponse.json(
      { error: "Failed to send email via SMTP. Please try again later." },
      { status: 500 }
    );
  }
}
