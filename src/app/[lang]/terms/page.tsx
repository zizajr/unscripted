import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Unscripted",
  description: "Terms of Use for Unscripted Technologies Limited.",
};

export default function TermsPage() {
  return (
    <div style={{ background: "#0A0A0A", minHeight: "100vh", paddingTop: "160px", paddingBottom: "120px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 clamp(24px, 6.25vw, 80px)" }}>
        <p style={{ fontFamily: "var(--font-bebas)", fontSize: 12, letterSpacing: "0.35em", color: "#F2B705", marginBottom: 24 }}>
          LEGAL
        </p>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 900, color: "#F8F5EE", lineHeight: 1.1, marginBottom: 56 }}>
          Terms of Use
        </h1>

        <div style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "rgba(248,245,238,0.7)", lineHeight: 1.8, display: "flex", flexDirection: "column", gap: 24 }}>
          <p>
            Welcome to Unscripted. By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.
          </p>
          
          <h2 style={{ fontFamily: "var(--font-body)", fontSize: 20, fontWeight: 600, color: "#F8F5EE", marginTop: 24 }}>1. Intellectual Property Rights</h2>
          <p>
            The Site and its original content, features, and functionality are owned by Unscripted Technologies Limited and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </p>

          <h2 style={{ fontFamily: "var(--font-body)", fontSize: 20, fontWeight: 600, color: "#F8F5EE", marginTop: 24 }}>2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on Unscripted's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul style={{ listStyleType: "disc", paddingLeft: 24, display: "flex", flexDirection: "column", gap: 8 }}>
            <li>modify or copy the materials;</li>
            <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
            <li>attempt to decompile or reverse engineer any software contained on Unscripted's website;</li>
            <li>remove any copyright or other proprietary notations from the materials; or</li>
            <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
          </ul>

          <h2 style={{ fontFamily: "var(--font-body)", fontSize: 20, fontWeight: 600, color: "#F8F5EE", marginTop: 24 }}>3. Disclaimer</h2>
          <p>
            The materials on Unscripted's website are provided on an 'as is' basis. Unscripted makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>

          <h2 style={{ fontFamily: "var(--font-body)", fontSize: 20, fontWeight: 600, color: "#F8F5EE", marginTop: 24 }}>4. Limitations</h2>
          <p>
            In no event shall Unscripted or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Unscripted's website, even if Unscripted or a Unscripted authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>
        </div>
      </div>
    </div>
  );
}
