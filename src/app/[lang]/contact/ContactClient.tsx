"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;
type FormState = "idle" | "sending" | "success" | "error";

const SERVICES = [
  "Branding & Identity", "Design", "Copywriting", "Strategy",
  "Business Development", "Publications", "Reputation Management",
  "Production & Multimedia", "Web & App Design", "Social Media Management",
  "Media Campaign Production", "UIX Design", "Advertising",
  "Marketing & Digital", "Communications & PR", "Product Launches",
  "CSR Implementation", "Other",
];

const HOW_HEARD = [
  "Referral", "Google Search", "Social Media", "LinkedIn",
  "Industry Event", "Press / Media", "Other",
];

const BUDGET_RANGES = [
  "< $1,500",
  "$1,500 - $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000+"
];

const labelStyle: React.CSSProperties = {
  fontFamily: "var(--font-bebas)",
  fontSize: "11px",
  letterSpacing: "0.3em",
  color: "rgba(248,245,238,0.4)",
  display: "block",
  marginBottom: "6px",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "transparent",
  border: "none",
  borderBottom: "1px solid rgba(248,245,238,0.18)",
  color: "#F8F5EE",
  fontFamily: "var(--font-body)",
  fontSize: "16px",
  padding: "14px 0",
  outline: "none",
  transition: "border-color 0.2s ease",
};

const selectStyle: React.CSSProperties = {
  ...inputStyle,
  cursor: "pointer",
  appearance: "none",
  WebkitAppearance: "none",
  backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23F2B705' stroke-width='1.5' fill='none'/%3E%3C/svg%3E\")",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 4px center",
  paddingRight: "24px",
};

function focusBorder(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
  e.target.style.borderBottomColor = "#F2B705";
}
function blurBorder(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
  e.target.style.borderBottomColor = "rgba(248,245,238,0.18)";
}

export default function ContactClient() {
  const [form, setForm] = useState({
    name: "", email: "", company: "",
    service: "", budget: "", howHeard: "", message: "", _honeypot: "",
  });
  const [status, setStatus] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      
      const data = await res.json().catch(() => null);
      
      if (res.status === 201 || res.ok) {
        setStatus("success");
      } else {
        throw new Error(data?.error || "Submission failed");
      }
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong. Please email us directly at defy@theunscripted.xyz");
    }
  };

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background: "#0A0A0A", borderTop: "3px solid #F2B705" }}
        aria-labelledby="contact-page-heading">
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "clamp(120px,14vw,180px) clamp(24px,6.25vw,80px) clamp(80px,10vw,120px)" }}>

          {/* Big headline */}
          <motion.h1 id="contact-page-heading"
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(56px,9vw,120px)", fontWeight: 900, color: "#F8F5EE", lineHeight: 0.88, marginBottom: 40 }}>
            Let&apos;s Build<br />
            <em style={{ fontStyle: "italic", color: "#F2B705" }}>Something.</em>
          </motion.h1>

          {/* Email */}
          <motion.a href="mailto:defy@theunscripted.xyz"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
            style={{ fontFamily: "var(--font-body)", fontSize: "clamp(18px,2.5vw,28px)", fontWeight: 700, color: "#F2B705", display: "inline-block", marginBottom: 72, transition: "color 0.2s ease" }}
            className="hover:text-cream">
            defy@theunscripted.xyz
          </motion.a>

          {/* Location + Form grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Location info */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2, ease: EASE }}>
              <p style={{ fontFamily: "var(--font-bebas)", fontSize: 12, letterSpacing: "0.35em", color: "rgba(248,245,238,0.4)", marginBottom: 20 }}>
                HEADQUARTERS
              </p>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(22px,3vw,32px)", fontWeight: 700, color: "#F8F5EE", lineHeight: 1.2, marginBottom: 12 }}>
                Kigali, Rwanda
              </p>
              <div style={{ height: 3, background: "#F2B705", width: 40, marginBottom: 20 }} />
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "rgba(248,245,238,0.55)", lineHeight: 1.75, marginBottom: 32 }}>
                East Africa&apos;s fastest-growing hub for business and technology.
                We work with clients across Africa, the Middle East, and globally.
              </p>

              {/* Regions served */}
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {["East Africa", "Middle East", "Global"].map(region => (
                  <div key={region} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ width: 6, height: 6, background: "#F2B705", borderRadius: "50%", flexShrink: 0 }} />
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "rgba(248,245,238,0.60)" }}>
                      {region}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3, ease: EASE }}>
              {status === "success" ? (
                <div style={{ paddingTop: 24 }}>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px,3vw,36px)", fontWeight: 700, color: "#F2B705", marginBottom: 12 }}>
                    Message received.
                  </p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "rgba(248,245,238,0.65)" }}>
                    We&apos;ll be in touch soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                  {/* Honeypot — invisible to humans, bots fill it */}
                  <input
                    type="text"
                    name="_honeypot"
                    value={form._honeypot}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    style={{ opacity: 0, position: "absolute", pointerEvents: "none", height: 0, width: 0 }}
                  />
                  <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>

                    {/* Name */}
                    <div>
                      <label htmlFor="cp-name" style={labelStyle}>NAME *</label>
                      <input id="cp-name" name="name" type="text" required aria-required="true"
                        value={form.name} onChange={handleChange} style={inputStyle}
                        placeholder="Your name" onFocus={focusBorder} onBlur={blurBorder} />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="cp-email" style={labelStyle}>EMAIL *</label>
                      <input id="cp-email" name="email" type="email" required aria-required="true"
                        value={form.email} onChange={handleChange} style={inputStyle}
                        placeholder="your@email.com" onFocus={focusBorder} onBlur={blurBorder} />
                    </div>

                    {/* Company */}
                    <div>
                      <label htmlFor="cp-company" style={labelStyle}>COMPANY</label>
                      <input id="cp-company" name="company" type="text"
                        value={form.company} onChange={handleChange} style={inputStyle}
                        placeholder="Your company (optional)" onFocus={focusBorder} onBlur={blurBorder} />
                    </div>

                    {/* Service interested in */}
                    <div>
                      <label htmlFor="cp-service" style={labelStyle}>SERVICE INTERESTED IN</label>
                      <select id="cp-service" name="service" value={form.service} onChange={handleChange}
                        style={{ ...selectStyle, color: form.service ? "#F8F5EE" : "rgba(248,245,238,0.3)" }}
                        onFocus={focusBorder} onBlur={blurBorder}>
                        <option value="" disabled style={{ background: "#0A0A0A" }}>Select a service…</option>
                        {SERVICES.map(s => (
                          <option key={s} value={s} style={{ background: "#0A0A0A" }}>{s}</option>
                        ))}
                      </select>
                    </div>

                    {/* Budget */}
                    <div>
                      <label htmlFor="cp-budget" style={labelStyle}>BUDGET *</label>
                      <select id="cp-budget" name="budget" value={form.budget} onChange={handleChange} required aria-required="true"
                        style={{ ...selectStyle, color: form.budget ? "#F8F5EE" : "rgba(248,245,238,0.3)" }}
                        onFocus={focusBorder} onBlur={blurBorder}>
                        <option value="" disabled style={{ background: "#0A0A0A" }}>Select a budget range…</option>
                        {BUDGET_RANGES.map(b => (
                          <option key={b} value={b} style={{ background: "#0A0A0A" }}>{b}</option>
                        ))}
                      </select>
                    </div>

                    {/* How did you hear */}
                    <div>
                      <label htmlFor="cp-heard" style={labelStyle}>HOW DID YOU HEAR ABOUT US?</label>
                      <select id="cp-heard" name="howHeard" value={form.howHeard} onChange={handleChange}
                        style={{ ...selectStyle, color: form.howHeard ? "#F8F5EE" : "rgba(248,245,238,0.3)" }}
                        onFocus={focusBorder} onBlur={blurBorder}>
                        <option value="" style={{ background: "#0A0A0A" }}>Select an option… (optional)</option>
                        {HOW_HEARD.map(s => (
                          <option key={s} value={s} style={{ background: "#0A0A0A" }}>{s}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="cp-message" style={labelStyle}>MESSAGE * (20 - 2,000 characters)</label>
                      <textarea id="cp-message" name="message" required aria-required="true" rows={5} minLength={20} maxLength={2000}
                        value={form.message} onChange={handleChange}
                        style={{ ...inputStyle, resize: "none", lineHeight: 1.7 }}
                        placeholder="Tell us about your project…"
                        onFocus={focusBorder} onBlur={blurBorder} />
                    </div>

                    {/* Error */}
                    {status === "error" && (
                      <p role="alert" aria-live="polite"
                        style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#F2B705" }}>
                        {errorMsg}
                      </p>
                    )}

                    {/* Submit */}
                    <button type="submit" disabled={status === "sending"}
                      style={{
                        background: status === "sending" ? "rgba(242,183,5,0.5)" : "#F2B705",
                        color: "#0A0A0A",
                        fontFamily: "var(--font-bebas)",
                        fontSize: 16,
                        letterSpacing: "0.15em",
                        padding: "18px 48px",
                        border: "none",
                        cursor: status === "sending" ? "not-allowed" : "pointer",
                        transition: "background 300ms ease",
                        alignSelf: "flex-start",
                      }}>
                      {status === "sending" ? "SENDING…" : "SEND MESSAGE →"}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
