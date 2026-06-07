import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message, service, howHeard } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields (name, email, message)" },
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
    console.log("Message:   ", message);
    console.log("----------------------------------------");

    const apiKey = process.env.RESEND_API_KEY;
    const notificationEmail = process.env.CONTACT_NOTIFICATION_EMAIL || "hello@theunscripted.xyz";

    if (apiKey) {
      // Direct REST fetch to Resend API (zero dependencies)
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Unscripted Website <website@theunscripted.xyz>",
          to: notificationEmail,
          subject: `New Contact Request from ${name}`,
          html: `
            <div style="font-family: sans-serif; line-height: 1.6; color: #1a1a2e; max-width: 600px; margin: 0 auto; border: 1px solid rgba(242,183,5,0.2); border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
              <div style="background-color: #0A0A0A; padding: 24px; text-align: center; border-bottom: 3px solid #F2B705;">
                <h1 style="color: #F8F5EE; margin: 0; font-size: 24px; letter-spacing: 0.1em;">UNSCRIPTED</h1>
                <p style="color: #F2B705; margin: 4px 0 0 0; font-size: 12px; letter-spacing: 0.2em;">NEW PROJECT INQUIRY</p>
              </div>
              <div style="padding: 32px 24px; background-color: #F8F5EE;">
                <p style="font-size: 16px; margin: 0 0 20px 0;">You have received a new message from the contact form on <strong>theunscripted.xyz</strong>.</p>
                
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid rgba(10,10,10,0.08); font-weight: bold; width: 140px;">Name:</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid rgba(10,10,10,0.08);">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid rgba(10,10,10,0.08); font-weight: bold;">Email:</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid rgba(10,10,10,0.08);"><a href="mailto:${email}" style="color: #8B2FC9; text-decoration: none;">${email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid rgba(10,10,10,0.08); font-weight: bold;">Company:</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid rgba(10,10,10,0.08);">${company || "N/A"}</td>
                  </tr>
                  ${service ? `
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid rgba(10,10,10,0.08); font-weight: bold;">Service Interest:</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid rgba(10,10,10,0.08);">${service}</td>
                  </tr>` : ""}
                  ${howHeard ? `
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid rgba(10,10,10,0.08); font-weight: bold;">How Heard:</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid rgba(10,10,10,0.08);">${howHeard}</td>
                  </tr>` : ""}
                </table>
                
                <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #F2B705; border-radius: 4px; box-shadow: inset 0 2px 4px rgba(0,0,0,0.02);">
                  <p style="margin: 0 0 10px 0; font-weight: bold; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: rgba(10,10,10,0.45);">Message Content:</p>
                  <p style="margin: 0; white-space: pre-wrap; font-size: 15px;">${message}</p>
                </div>
              </div>
              <div style="background-color: #0A0A0A; padding: 16px; text-align: center; font-size: 12px; color: rgba(248,245,238,0.4);">
                Sent automatically by the Unscripted website platform.
              </div>
            </div>
          `,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        console.error("Resend endpoint returned error:", errorData);
        throw new Error("Failed to send email via Resend Service");
      }

      console.log("Contact form email notification successfully dispatched via Resend to:", notificationEmail);
    } else {
      console.warn("RESEND_API_KEY is not defined in environment variables. Email dispatch was skipped.");
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error: any) {
    console.error("Error handling contact API:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
