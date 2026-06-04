"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: EASE }}>
      {children}
    </motion.div>
  );
}

type Category = "All" | "Branding" | "Strategy" | "Digital" | "PR" | "Production";
const CATEGORIES: Category[] = ["All", "Branding", "Strategy", "Digital", "PR", "Production"];

const projects = [
  {
    client: "TicketDaddy Inc.",
    type: "Brand & Digital",
    category: "Branding" as Category,
    outcome: "Smart Tickets infrastructure — 600,000+ transactions across East Africa.",
    color: "#0d1b2a",
  },
  {
    client: "HamzPay / Hamz Ltd",
    type: "Brand & FinTech",
    category: "Branding" as Category,
    outcome: "Mobile wallet identity and communications for Rwandan consumers.",
    color: "#1a1a2e",
  },
  {
    client: "Nyaka Global",
    type: "Brand & Communications",
    category: "PR" as Category,
    outcome: "Global NGO identity and media strategy.",
    color: "#0f3460",
  },
  {
    client: "FX Pesa",
    type: "Design & Marketing",
    category: "Digital" as Category,
    outcome: "Financial brand design for East Africa's trading audience.",
    color: "#1a2a0a",
  },
  {
    client: "Honorary Consul of Namibia in Uganda",
    type: "Communications & PR",
    category: "PR" as Category,
    outcome: "Diplomatic communications and event coordination.",
    color: "#2a150a",
  },
];

function WorkCard({ client, type, outcome, color, index, inView }: {
  client: string; type: string; outcome: string; color: string; index: number; inView: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: Math.min(index * 0.12, 0.6), ease: EASE }}
      exit={{ opacity: 0, scale: 0.98 }}
      layout
      style={{
        background: color,
        aspectRatio: "4/3",
        position: "relative",
        overflow: "hidden",
      }}
      whileHover={{ y: -6, transition: { duration: 0.4 } }}
    >
      {/* Pattern */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0,
        backgroundImage: "repeating-linear-gradient(45deg, rgba(242,183,5,0.03) 0, rgba(242,183,5,0.03) 1px, transparent 0, transparent 50%)",
        backgroundSize: "20px 20px",
      }} />
      {/* Gradient overlay */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.3) 50%, transparent 100%)",
      }} />
      {/* Content */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: 24, zIndex: 2 }}>
        <span style={{
          fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 500,
          color: "#F8F5EE", background: "#8B2FC9", padding: "4px 10px",
          letterSpacing: "0.05em", display: "inline-block", marginBottom: 10,
        }}>
          {type}
        </span>
        <p style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(16px,2.5vw,22px)", letterSpacing: "0.1em", color: "#F8F5EE", lineHeight: 1.1, marginBottom: 8 }}>
          {client}
        </p>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(248,245,238,0.60)", lineHeight: 1.5 }}>
          {outcome}
        </p>
      </div>
    </motion.article>
  );
}

export default function WorkClient() {
  const gridRef = useRef<HTMLDivElement>(null);
  const inView = useInView(gridRef, { once: true, margin: "-80px" });
  const [active, setActive] = useState<Category>("All");

  const filtered = active === "All" ? projects : projects.filter(p => p.category === active);

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background: "#0A0A0A", paddingTop: 160 }} aria-labelledby="work-page-heading">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
          backgroundSize: "300px",
        }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(24px,6.25vw,80px) clamp(80px,10vw,120px)" }}>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            style={{ fontFamily: "var(--font-bebas)", fontSize: 12, letterSpacing: "0.35em", color: "rgba(248,245,238,0.45)", marginBottom: 24 }}>
            OUR WORK
          </motion.p>
          <motion.h1 id="work-page-heading"
            initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px,6vw,80px)", fontWeight: 900, color: "#F8F5EE", lineHeight: 1.0 }}>
            Work that moves<br />
            <em style={{ fontStyle: "italic" }}>markets and minds.</em>
          </motion.h1>
        </div>
      </section>

      {/* ── FILTER + GRID ── */}
      <section style={{ background: "#F8F5EE" }} aria-label="Portfolio grid">
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "clamp(64px,8vw,100px) clamp(24px,6.25vw,80px)" }}>
          {/* Filter tabs */}
          <FadeUp>
            <div role="group" aria-label="Filter by category"
              style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 56 }}>
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  aria-pressed={active === cat}
                  style={{
                    fontFamily: "var(--font-bebas)",
                    fontSize: 13,
                    letterSpacing: "0.2em",
                    padding: "8px 20px",
                    background: active === cat ? "#0A0A0A" : "transparent",
                    color: active === cat ? "#F2B705" : "#3D3D3D",
                    border: active === cat ? "2px solid #0A0A0A" : "2px solid rgba(61,61,61,0.3)",
                    cursor: "pointer",
                    transition: "all 250ms ease",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeUp>

          {/* Grid */}
          <div ref={gridRef}>
            <AnimatePresence mode="popLayout">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filtered.map((p, i) => (
                  <WorkCard key={p.client} {...p} index={i} inView={inView} />
                ))}
              </div>
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "80px 0" }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "#3D3D3D" }}>
                More work in this category coming soon.
              </p>
            </div>
          )}

          {/* CTA */}
          <FadeUp>
            <div style={{ textAlign: "center", marginTop: 72 }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "#3D3D3D", marginBottom: 20 }}>
                Interested in working with us?
              </p>
              <Link href="/contact" className="btn-gold" style={{ borderRadius: 100 }}>
                Start a Project →
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
