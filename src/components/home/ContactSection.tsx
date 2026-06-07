"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type FormState = "idle" | "sending" | "success" | "error";

const BUDGET_RANGES = [
  "< $1,500",
  "$1,500 - $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000+"
];

export default function ContactSection() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({ name: "", email: "", company: "", budget: "", message: "", _honeypot: "" });
  const [status, setStatus] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form), // includes _honeypot
      });
      if (res.status === 201 || res.ok) {
        setStatus("success");
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please email us directly at defy@theunscripted.xyz");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid rgba(248,245,238,0.2)",
    color: "#F8F5EE",
    fontFamily: "var(--font-body)",
    fontSize: "16px",
    padding: "14px 0",
    outline: "none",
    transition: "border-color 0.2s ease",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-bebas)",
    fontSize: "11px",
    letterSpacing: "0.3em",
    color: "rgba(248,245,238,0.4)",
    display: "block",
    marginBottom: "4px",
  };

  return (
    <section
      ref={ref}
      id="contact"
      style={{
        background: "#0A0A0A",
        borderTop: "3px solid #F2B705",
      }}
      aria-labelledby="contact-heading"
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "clamp(80px, 10vw, 120px) clamp(24px, 6.25vw, 80px)",
        }}
      >
        {/* Big CTA headline */}
        <motion.h2
          id="contact-heading"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(56px, 8vw, 120px)",
            fontWeight: 900,
            color: "#F8F5EE",
            lineHeight: 0.88,
            marginBottom: "40px",
          }}
        >
          Let&apos;s Build<br />
          <em style={{ fontStyle: "italic", color: "#F2B705" }}>Something.</em>
        </motion.h2>

        {/* Email */}
        <motion.a
          href="mailto:defy@theunscripted.xyz"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(20px, 3vw, 32px)",
            fontWeight: 700,
            color: "#F2B705",
            display: "inline-block",
            marginBottom: "64px",
            transition: "color 0.2s ease",
          }}
          className="hover:text-cream"
        >
          defy@theunscripted.xyz
        </motion.a>

        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          style={{ maxWidth: 640 }}
        >
          {status === "success" ? (
            <div style={{ paddingTop: "24px" }}>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(24px, 3vw, 36px)",
                  fontWeight: 700,
                  color: "#F2B705",
                  marginBottom: "12px",
                }}
              >
                Message received.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "17px",
                  color: "rgba(248,245,238,0.65)",
                }}
              >
                We&apos;ll be in touch soon.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              aria-label="Contact form"
            >
              {/* Honeypot — hidden from real users, bots fill it in */}
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
              <div
                className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8"
                style={{ marginBottom: "32px" }}
              >
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" style={labelStyle}>
                    NAME *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    aria-required="true"
                    value={form.name}
                    onChange={handleChange}
                    style={inputStyle}
                    placeholder="Your name"
                    className="focus:border-gold"
                    onFocus={(e) => (e.target.style.borderBottomColor = "#F2B705")}
                    onBlur={(e) => (e.target.style.borderBottomColor = "rgba(248,245,238,0.2)")}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" style={labelStyle}>
                    EMAIL *
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    aria-required="true"
                    value={form.email}
                    onChange={handleChange}
                    style={inputStyle}
                    placeholder="your@email.com"
                    onFocus={(e) => (e.target.style.borderBottomColor = "#F2B705")}
                    onBlur={(e) => (e.target.style.borderBottomColor = "rgba(248,245,238,0.2)")}
                  />
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="contact-company" style={labelStyle}>
                    COMPANY
                  </label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    style={inputStyle}
                    placeholder="Your company (optional)"
                    onFocus={(e) => (e.target.style.borderBottomColor = "#F2B705")}
                    onBlur={(e) => (e.target.style.borderBottomColor = "rgba(248,245,238,0.2)")}
                  />
                </div>

                {/* Budget */}
                <div>
                  <label htmlFor="contact-budget" style={labelStyle}>
                    BUDGET *
                  </label>
                  <select
                    id="contact-budget"
                    name="budget"
                    required
                    aria-required="true"
                    value={form.budget}
                    onChange={handleChange}
                    style={{ ...inputStyle, cursor: "pointer", appearance: "none", WebkitAppearance: "none", backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'8\' viewBox=\'0 0 12 8\'%3E%3Cpath d=\'M1 1l5 5 5-5\' stroke=\'%23F2B705\' stroke-width=\'1.5\' fill=\'none\'/%3E%3C/svg%3E")', backgroundRepeat: "no-repeat", backgroundPosition: "right 4px center", paddingRight: "24px" }}
                    onFocus={(e) => (e.target.style.borderBottomColor = "#F2B705")}
                    onBlur={(e) => (e.target.style.borderBottomColor = "rgba(248,245,238,0.2)")}
                  >
                    <option value="" disabled style={{ background: "#0A0A0A" }}>Select a budget range…</option>
                    {BUDGET_RANGES.map((b) => (
                      <option key={b} value={b} style={{ background: "#0A0A0A" }}>{b}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="sm:col-span-2">
                  <label htmlFor="contact-message" style={labelStyle}>
                    MESSAGE * (20 - 2,000 characters)
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    aria-required="true"
                    minLength={20}
                    maxLength={2000}
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    style={{ ...inputStyle, resize: "none", lineHeight: 1.7 }}
                    placeholder="Tell us about your project…"
                    onFocus={(e) => (e.target.style.borderBottomColor = "#F2B705")}
                    onBlur={(e) => (e.target.style.borderBottomColor = "rgba(248,245,238,0.2)")}
                  />
                </div>
              </div>

              {/* Error */}
              {status === "error" && (
                <p
                  role="alert"
                  aria-live="polite"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "14px",
                    color: "#F2B705",
                    marginBottom: "16px",
                  }}
                >
                  {errorMsg}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                style={{
                  background: status === "sending" ? "rgba(242,183,5,0.5)" : "#F2B705",
                  color: "#0A0A0A",
                  fontFamily: "var(--font-bebas)",
                  fontSize: "16px",
                  letterSpacing: "0.15em",
                  padding: "18px 48px",
                  border: "none",
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                  transition: "background 300ms ease, transform 200ms ease",
                }}
                className="hover:scale-[1.01]"
              >
                {status === "sending" ? "SENDING…" : "SEND MESSAGE →"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
