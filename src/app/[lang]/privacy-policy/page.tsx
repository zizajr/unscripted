import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Unscripted",
  description: "Privacy Policy for Unscripted Technologies Limited.",
};

export default function PrivacyPolicyPage() {
  return (
    <div style={{ background: "#0A0A0A", minHeight: "100vh", paddingTop: "160px", paddingBottom: "120px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 clamp(24px, 6.25vw, 80px)" }}>
        <p style={{ fontFamily: "var(--font-bebas)", fontSize: 12, letterSpacing: "0.35em", color: "#F2B705", marginBottom: 24 }}>
          LEGAL
        </p>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 900, color: "#F8F5EE", lineHeight: 1.1, marginBottom: 56 }}>
          Privacy Policy
        </h1>

        <div style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "rgba(248,245,238,0.7)", lineHeight: 1.8, display: "flex", flexDirection: "column", gap: 24 }}>
          <p>
            Unscripted Technologies Limited ("we," "us," or "our") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
          </p>
          
          <h2 style={{ fontFamily: "var(--font-body)", fontSize: 20, fontWeight: 600, color: "#F8F5EE", marginTop: 24 }}>1. The data we collect about you</h2>
          <p>
            Personal data, or personal information, means any information about an individual from which that person can be identified. It does not include data where the identity has been removed (anonymous data).
          </p>
          <p>
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
          </p>
          <ul style={{ listStyleType: "disc", paddingLeft: 24, display: "flex", flexDirection: "column", gap: 8 }}>
            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
            <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
            <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
          </ul>

          <h2 style={{ fontFamily: "var(--font-body)", fontSize: 20, fontWeight: 600, color: "#F8F5EE", marginTop: 24 }}>2. How we use your personal data</h2>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul style={{ listStyleType: "disc", paddingLeft: 24, display: "flex", flexDirection: "column", gap: 8 }}>
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal obligation.</li>
          </ul>

          <h2 style={{ fontFamily: "var(--font-body)", fontSize: 20, fontWeight: 600, color: "#F8F5EE", marginTop: 24 }}>3. Contact details</h2>
          <p>
            If you have any questions about this privacy policy or our privacy practices, please contact us at:
            <br /><br />
            <strong>Email address:</strong> <a href="mailto:defy@theunscripted.xyz" style={{ color: "#F2B705" }}>defy@theunscripted.xyz</a>
            <br />
            <strong>Location:</strong> Kigali, Rwanda
          </p>
        </div>
      </div>
    </div>
  );
}
