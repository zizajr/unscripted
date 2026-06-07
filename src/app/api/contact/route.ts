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
      // 1. Resend API flow
      console.log("Attempting dispatch via Resend API...");
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
            <div style="font-family: sans-serif; line-height: 1.6; color: #1a1a2e; max-width: 600px; margin: 0 auto; border: 1px solid rgba(242,183,5,0.2); border-radius: 8px; overflow: hidden;">
              <div style="background-color: #0A0A0A; padding: 20px; text-align: center; border-bottom: 3px solid #F2B705;">
                <h1 style="color: #F8F5EE; margin: 0; font-size: 20px; letter-spacing: 0.1em;">UNSCRIPTED</h1>
              </div>
              <div style="padding: 24px; background-color: #F8F5EE;">
                <h3>New Project Inquiry</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Company:</strong> ${company || "N/A"}</p>
                ${service ? `<p><strong>Service:</strong> ${service}</p>` : ""}
                ${howHeard ? `<p><strong>How Heard:</strong> ${howHeard}</p>` : ""}
                <hr style="border: 0; border-top: 1px solid rgba(10,10,10,0.1); margin: 20px 0;" />
                <p><strong>Message:</strong></p>
                <p style="white-space: pre-wrap;">${message}</p>
              </div>
            </div>
          `,
        }),
      });

      if (!res.ok) {
        throw new Error("Resend API failed");
      }
      console.log("Dispatched via Resend API.");
    } else {
      // 2. Zero-config Fallback: FormSubmit API flow
      console.log(`RESEND_API_KEY is not defined. Falling back to FormSubmit relay for: ${notificationEmail}...`);
      
      const res = await fetch(`https://formsubmit.co/ajax/${notificationEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          Name: name,
          Email: email,
          Company: company || "N/A",
          Service: service || "N/A",
          "How Heard": howHeard || "N/A",
          Message: message,
          _subject: `New Contact Request from ${name} (via website)`
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        console.error("FormSubmit endpoint returned error:", errorData);
        throw new Error("Failed to relay form via FormSubmit");
      }

      console.log("Dispatched via FormSubmit relay.");
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
