"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";

const inquiryTypes = [
  { id: "guest",        label: "GUEST INQUIRY",          helper: "You'd like to be interviewed on MAIN STREET or another Unscripted production." },
  { id: "brand",        label: "BRAND PARTNERSHIP",       helper: "You represent a brand looking to sponsor, co-produce, or integrate with one of our shows." },
  { id: "production",   label: "PODCAST PRODUCTION",      helper: "You need a production partner to build, launch, or improve a podcast." },
  { id: "distribution", label: "DISTRIBUTION & STRATEGY", helper: "You have an existing show and need help growing and distributing it." },
  { id: "press",        label: "PRESS & MEDIA",           helper: "Editorial, press, or speaking engagement enquiries." },
  { id: "general",      label: "GENERAL",                 helper: "Everything else. We still read it." },
];

const socials = [
  { platform: "Instagram", handle: "@unscripted.fm",        desc: "Behind-the-scenes, episode clips, and updates.",      href: "https://instagram.com/unscripted.fm" },
  { platform: "LinkedIn",  handle: "Unscripted Productions", desc: "Industry commentary and show announcements.",          href: "https://linkedin.com" },
  { platform: "X/Twitter", handle: "@unscripted",            desc: "The short version of the long conversation.",          href: "https://twitter.com" },
];

export default function ContactClient() {
  const [selected, setSelected] = useState("");
  const [sent, setSent]         = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[45vh] bg-ink grid-overlay flex items-end pb-24 pt-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-ink/50 to-ink pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <SectionLabel>WORK WITH US</SectionLabel>
          <h1 className="text-5xl md:text-7xl font-black text-cream leading-tight max-w-3xl" style={{ fontFamily: "var(--font-playfair)" }}>
            Have a story worth telling? Let's make it.
          </h1>
          <p className="mt-6 text-lg text-cream/60 max-w-xl leading-relaxed" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            Whether you're a potential guest, a brand partner, a broadcaster, or something else entirely — the right place to start is here.
          </p>
        </div>
      </section>

      {/* Inquiry Types + Form */}
      <section className="py-24 bg-ink">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <Reveal>
              <p className="text-base text-cream/60 mb-10 leading-relaxed" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                Tell us what kind of conversation you're looking to start. We route every inquiry to the right person and respond within 48 hours.
              </p>
            </Reveal>
            <div className="space-y-2">
              {inquiryTypes.map((type, i) => (
                <Reveal key={type.id} delay={i * 0.05}>
                  <button
                    type="button"
                    onClick={() => setSelected(type.id)}
                    className={`w-full text-left p-5 border transition-all duration-200 ${
                      selected === type.id ? "border-gold bg-gold/5" : "border-white/8 text-cream/50 hover:border-white/20 hover:text-cream"
                    }`}
                  >
                    <span className="block text-sm font-bold tracking-widest mb-1" style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.12em", color: selected === type.id ? "#F2B705" : undefined }}>
                      {type.label}
                    </span>
                    <span className="text-xs text-cream/40" style={{ fontFamily: "var(--font-space-grotesk)" }}>{type.helper}</span>
                  </button>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <Reveal delay={0.1}>
              <AnimatePresence mode="wait">
                {!sent ? (
                  <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-xs text-cream/40 mb-2 tracking-widest" style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.15em" }}>Your name</label>
                      <input type="text" required placeholder="Full name" className="w-full bg-slate/30 border border-white/10 text-cream px-4 py-3 text-sm focus:border-gold focus:outline-none transition-colors placeholder-cream/20" style={{ fontFamily: "var(--font-space-grotesk)" }} />
                    </div>
                    <div>
                      <label className="block text-xs text-cream/40 mb-2 tracking-widest" style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.15em" }}>Email address</label>
                      <input type="email" required placeholder="you@company.com" className="w-full bg-slate/30 border border-white/10 text-cream px-4 py-3 text-sm focus:border-gold focus:outline-none transition-colors placeholder-cream/20" style={{ fontFamily: "var(--font-space-grotesk)" }} />
                    </div>
                    <div>
                      <label className="block text-xs text-cream/40 mb-2 tracking-widest" style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.15em" }}>What can we help with?</label>
                      <select className="w-full bg-slate/30 border border-white/10 text-cream px-4 py-3 text-sm focus:border-gold focus:outline-none transition-colors appearance-none" style={{ fontFamily: "var(--font-space-grotesk)" }} value={selected} onChange={(e) => setSelected(e.target.value)}>
                        <option value="" disabled>Select inquiry type</option>
                        {inquiryTypes.map((t) => <option key={t.id} value={t.id}>{t.label}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-cream/40 mb-2 tracking-widest" style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.15em" }}>Tell us about your project or enquiry</label>
                      <textarea rows={5} placeholder="The more context you give us, the more useful our reply." className="w-full bg-slate/30 border border-white/10 text-cream px-4 py-3 text-sm focus:border-gold focus:outline-none transition-colors placeholder-cream/20 resize-none" style={{ fontFamily: "var(--font-space-grotesk)" }} />
                    </div>
                    <button type="submit" className="w-full py-4 bg-gold text-ink font-semibold text-sm hover:bg-gold/90 transition-colors duration-200" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                      Send Message
                    </button>
                    <p className="text-xs text-cream/30 text-center" style={{ fontFamily: "var(--font-space-grotesk)" }}>We respond within 48 hours. Every message is read by a real person.</p>
                  </motion.form>
                ) : (
                  <motion.div key="confirmation" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="border border-gold/30 bg-gold/5 p-12 text-center">
                    <div className="text-4xl mb-4">✓</div>
                    <h3 className="text-2xl font-bold text-cream mb-3" style={{ fontFamily: "var(--font-playfair)" }}>Sent.</h3>
                    <p className="text-cream/60 text-sm" style={{ fontFamily: "var(--font-space-grotesk)" }}>We'll be in touch within 48 hours.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Response + Location */}
      <section className="py-24 bg-slate">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-16">
          <Reveal>
            <h2 className="text-3xl font-bold text-cream mb-4" style={{ fontFamily: "var(--font-playfair)" }}>We respond within 48 hours.</h2>
            <p className="text-cream/50 text-base leading-relaxed" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              Every message is read by a real person. If your enquiry is time-sensitive, say so in your message and we'll prioritise it.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionLabel>WHERE WE WORK</SectionLabel>
            <h3 className="text-2xl font-bold text-cream mb-4" style={{ fontFamily: "var(--font-playfair)" }}>Based across two continents. Producing everywhere.</h3>
            <p className="text-cream/50 text-sm mb-4" style={{ fontFamily: "var(--font-space-grotesk)" }}>Africa · Middle East · [FILL IN specific cities]</p>
            <p className="text-cream/40 text-sm leading-relaxed" style={{ fontFamily: "var(--font-space-grotesk)" }}>We produce on location. If your city is on our list, we may already be there.</p>
          </Reveal>
        </div>
      </section>

      {/* Social */}
      <section className="py-24 bg-ink border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <SectionLabel>FOLLOW THE WORK</SectionLabel>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {socials.map((s, i) => (
                <Reveal key={s.platform} delay={i * 0.1}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="border border-white/8 p-8 hover:border-gold/30 transition-all duration-300 group block">
                    <p className="font-accent text-sm tracking-widest text-gold mb-2" style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.15em" }}>{s.platform}</p>
                    <p className="text-cream text-base font-semibold mb-3" style={{ fontFamily: "var(--font-space-grotesk)" }}>{s.handle}</p>
                    <p className="text-cream/40 text-sm leading-relaxed" style={{ fontFamily: "var(--font-space-grotesk)" }}>{s.desc}</p>
                  </a>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
