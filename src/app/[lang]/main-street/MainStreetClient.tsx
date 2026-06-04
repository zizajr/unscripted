"use client";
import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import ThreeBarMark from "@/components/ThreeBarMark";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

function FadeUp({ children, delay = 0, center = false }: { children: React.ReactNode; delay?: number; center?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: EASE }}
      style={center ? { textAlign: "center" } : {}}>
      {children}
    </motion.div>
  );
}

const cities = [
  { name: "KIGALI", desc: "Rwanda — the Silicon Valley of Africa." },
  { name: "DOHA", desc: "Qatar — capital at the crossroads of East and West." },
  { name: "NAIROBI", desc: "Kenya — the innovation hub of East Africa." },
  { name: "LAGOS", desc: "Nigeria — the commercial heartbeat of the continent." },
];

export default function MainStreetClient() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: "#1C1C2E" }} aria-labelledby="ms-heading">
        {/* Grain */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
          backgroundSize: "300px",
        }} />

        {/* Violet glow */}
        <div aria-hidden="true" style={{
          position: "absolute", top: "30%", left: "50%", transform: "translateX(-50%)",
          width: 700, height: 700,
          background: "radial-gradient(ellipse, rgba(139,47,201,0.25) 0%, transparent 70%)",
          filter: "blur(80px)", pointerEvents: "none",
        }} />

        <div className="relative z-10 flex flex-col items-center text-center"
          style={{ maxWidth: 800, padding: "160px clamp(24px,6.25vw,80px) 100px" }}>

          {/* Overline */}
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            style={{ fontFamily: "var(--font-bebas)", fontSize: 12, letterSpacing: "0.35em", color: "rgba(248,245,238,0.45)", marginBottom: 40 }}>
            THE FLAGSHIP SHOW
          </motion.p>

          {/* Logo */}
          <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
            style={{ position: "relative", marginBottom: 40 }}>
            <ThreeBarMark size={72} />
            <p style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(36px,7vw,72px)", letterSpacing: "0.2em", color: "#F8F5EE", lineHeight: 1, marginTop: 16 }}>
              MAIN STREET
            </p>
            <p style={{ fontFamily: "var(--font-bebas)", fontSize: 12, letterSpacing: "0.35em", color: "rgba(248,245,238,0.4)", marginTop: 8 }}>
              BY UNSCRIPTED
            </p>
          </motion.div>

          {/* Headline */}
          <motion.h1 id="ms-heading"
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
            style={{ fontFamily: "var(--font-body)", fontSize: "clamp(28px,4vw,48px)", fontWeight: 700, color: "#F2B705", marginBottom: 24 }}>
            Stories Moving Markets.
          </motion.h1>

          {/* Body */}
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }}
            style={{ fontFamily: "var(--font-body)", fontSize: "clamp(16px,1.5vw,18px)", color: "rgba(248,245,238,0.65)", lineHeight: 1.75, maxWidth: 560, marginBottom: 40 }}>
            MAIN STREET is Unscripted&apos;s flagship podcast — conversations at the intersection
            of business, capital, and emerging markets. We go where the story is:
            Kigali, Doha, Nairobi, Lagos.
          </motion.p>

          {/* City tags */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45 }}
            style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginBottom: 48 }}>
            {cities.map(c => (
              <span key={c.name} style={{
                fontFamily: "var(--font-bebas)", fontSize: 13, letterSpacing: "0.3em", color: "#F8F5EE",
                border: "1px solid rgba(248,245,238,0.2)", padding: "8px 20px",
                display: "inline-flex", alignItems: "center", gap: 8,
              }}>
                <span style={{ color: "#F2B705", fontSize: 8 }}>●</span>{c.name}
              </span>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.55 }}>
            <span className="btn-gold cursor-default" style={{ borderRadius: 100, display: "inline-block" }}>
              Coming Soon on Apple Podcasts
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section style={{ background: "#0A0A0A" }} aria-labelledby="ms-mission-heading">
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "clamp(80px,10vw,120px) clamp(24px,6.25vw,80px)" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <p style={{ fontFamily: "var(--font-bebas)", fontSize: 12, letterSpacing: "0.35em", color: "rgba(248,245,238,0.45)", marginBottom: 24 }}>
                THE MISSION
              </p>
              <h2 id="ms-mission-heading" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px,4vw,52px)", fontWeight: 900, color: "#F8F5EE", lineHeight: 1.1, marginBottom: 32 }}>
                Where business meets<br /><em style={{ fontStyle: "italic", color: "#F2B705" }}>the real story.</em>
              </h2>
              <div style={{ height: 3, background: "#F2B705", width: 40, marginBottom: 32 }} />
              <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "rgba(248,245,238,0.65)", lineHeight: 1.75, marginBottom: 16 }}>
                MAIN STREET exists to amplify the voices shaping the economic future of emerging markets.
                From founders and investors to policy-makers and creatives — we tell the stories that move capital and culture.
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "rgba(248,245,238,0.65)", lineHeight: 1.75 }}>
                We produce in-depth conversations that cut through the noise, delivered from the cities
                writing tomorrow&apos;s headlines today.
              </p>
            </FadeUp>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { num: "4", label: "City Editions" },
                { num: "2", label: "Continents" },
                { num: "∞", label: "Stories to Tell" },
                { num: "1", label: "Vision" },
              ].map((stat, i) => (
                <FadeUp key={stat.label} delay={i * 0.1}>
                  <div style={{ background: "#1C1C2E", borderTop: "3px solid #F2B705", padding: 28 }}>
                    <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px,5vw,64px)", fontWeight: 900, color: "#F2B705", lineHeight: 1 }}>
                      {stat.num}
                    </p>
                    <p style={{ fontFamily: "var(--font-bebas)", fontSize: 13, letterSpacing: "0.2em", color: "rgba(248,245,238,0.50)", marginTop: 8 }}>
                      {stat.label}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CITY EDITIONS ── */}
      <section style={{ background: "#F8F5EE" }} aria-labelledby="ms-cities-heading">
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "clamp(80px,10vw,120px) clamp(24px,6.25vw,80px)" }}>
          <FadeUp>
            <p style={{ fontFamily: "var(--font-bebas)", fontSize: 12, letterSpacing: "0.35em", color: "#F2B705", marginBottom: 24 }}>
              CITY EDITIONS
            </p>
            <h2 id="ms-cities-heading" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px,4vw,52px)", fontWeight: 900, color: "#0A0A0A", lineHeight: 1.1, marginBottom: 56 }}>
              We go where<br />the story is.
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cities.map((city, i) => (
              <FadeUp key={city.name} delay={i * 0.1}>
                <div style={{ borderTop: "3px solid #0A0A0A", paddingTop: 24 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                    <span style={{ color: "#F2B705", fontSize: 8 }}>●</span>
                    <span style={{ fontFamily: "var(--font-bebas)", fontSize: 20, letterSpacing: "0.2em", color: "#0A0A0A" }}>
                      {city.name}
                    </span>
                  </div>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#3D3D3D", lineHeight: 1.65 }}>
                    {city.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── LISTEN CTA ── */}
      <section style={{ background: "#1C1C2E", borderTop: "3px solid #F2B705" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px clamp(24px,6.25vw,80px)", textAlign: "center" }}>
          <FadeUp center>
            <p style={{ fontFamily: "var(--font-bebas)", fontSize: 12, letterSpacing: "0.35em", color: "rgba(248,245,238,0.4)", marginBottom: 24 }}>
              NOW STREAMING
            </p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px,4vw,56px)", fontWeight: 900, color: "#F8F5EE", lineHeight: 1.1, marginBottom: 40 }}>
              Tune in. The conversation<br /><em style={{ color: "#F2B705", fontStyle: "italic" }}>starts now.</em>
            </h2>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <span className="btn-gold cursor-default" style={{ borderRadius: 100, display: "inline-block" }}>
                Coming Soon on Apple Podcasts
              </span>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
