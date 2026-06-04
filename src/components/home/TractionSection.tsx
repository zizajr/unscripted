"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const stats = [
  {
    value: "600k+",
    label: "TRANSACTIONS PROCESSED",
    desc: "Powering ticket transactions, wallet integrations, and digital platforms across East Africa.",
    accent: "#F2B705",
  },
  {
    value: "4",
    label: "FLAGSHIP CITY EDITIONS",
    desc: "Telling business and investment stories from Kigali, Doha, and Nairobi.",
    accent: "#8B2FC9",
  },
  {
    value: "2",
    label: "CONTINENTS ACTIVE",
    desc: "Bridging Gulf capital with African innovation at the intersection of emerging markets.",
    accent: "#F2B705",
  },
  {
    value: "1",
    label: "SINGULAR VISION",
    desc: "To craft experiences and build platforms that move markets and minds.",
    accent: "#8B2FC9",
  },
];

export default function TractionSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-60px" });

  return (
    <section
      ref={containerRef}
      style={{ background: "#0A0A0A", position: "relative", zIndex: 10 }}
      aria-labelledby="traction-heading"
      className="border-t border-white/5"
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "clamp(80px, 10vw, 120px) clamp(24px, 6.25vw, 80px)",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: "64px" }}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "12px",
              letterSpacing: "0.35em",
              color: "rgba(248, 245, 238, 0.45)",
              marginBottom: "20px",
            }}
          >
            OUR IMPACT
          </motion.p>
          <motion.h2
            id="traction-heading"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 4vw, 56px)",
              fontWeight: 900,
              color: "#F8F5EE",
              lineHeight: 1.1,
            }}
          >
            Real traction.<br />By the numbers.
          </motion.h2>
        </div>

        {/* Stats Grid using CSS grid gap for pixel-perfect 1px borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/10 border border-white/10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
              className="group relative p-8 md:p-10 bg-[#0A0A0A] overflow-hidden flex flex-col justify-between"
              style={{ minHeight: "280px" }}
              whileHover={{ backgroundColor: "rgba(248, 245, 238, 0.02)" }}
            >
              {/* Highlight bar on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] bg-transparent group-hover:bg-gold transition-colors duration-300"
                style={{ pointerEvents: "none" }}
              />

              <div>
                {/* Big Number */}
                <motion.div
                  className="text-6xl md:text-7xl font-black mb-4 tracking-tighter"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: stat.accent,
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {stat.value}
                </motion.div>

                {/* Stat Label */}
                <h3
                  className="text-xs font-bold tracking-widest mb-4"
                  style={{
                    fontFamily: "var(--font-bebas)",
                    color: "rgba(248, 245, 238, 0.8)",
                    letterSpacing: "0.15em",
                  }}
                >
                  {stat.label}
                </h3>
              </div>

              {/* Stat Description */}
              <p
                className="text-sm text-cream/50 group-hover:text-cream/80 transition-colors duration-300 leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
