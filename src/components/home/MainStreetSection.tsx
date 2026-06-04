"use client";
import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import ThreeBarMark from "@/components/ThreeBarMark";

const cities = ["KIGALI", "DOHA", "NAIROBI", "LAGOS"];

export default function MainStreetSection() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="main-street"
      style={{ background: "#1C1C2E" }}
      aria-labelledby="main-street-heading"
    >
      {/* Grain */}
      <div
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
          backgroundSize: "300px",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "clamp(80px, 10vw, 120px) clamp(24px, 6.25vw, 80px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {/* Overline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "12px",
              letterSpacing: "0.35em",
              color: "rgba(248,245,238,0.45)",
              marginBottom: "40px",
            }}
          >
            THE FLAGSHIP SHOW
          </motion.p>

          {/* MAIN STREET Logo — with Violet glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            style={{ position: "relative", marginBottom: "40px" }}
          >
            {/* Violet glow */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: "-60px",
                background: "radial-gradient(ellipse, rgba(139,47,201,0.25) 0%, transparent 70%)",
                filter: "blur(40px)",
                pointerEvents: "none",
                zIndex: 0,
              }}
            />
            {/* Logo mark */}
            <div
              style={{
                position: "relative",
                zIndex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <ThreeBarMark size={56} />
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-bebas)",
                    fontSize: "clamp(32px, 5vw, 52px)",
                    letterSpacing: "0.25em",
                    color: "#F8F5EE",
                    lineHeight: 1,
                  }}
                >
                  MAIN STREET
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-accent)",
                    fontSize: "11px",
                    letterSpacing: "0.3em",
                    color: "rgba(248,245,238,0.4)",
                    marginTop: "6px",
                  }}
                >
                  BY UNSCRIPTED
                </p>
              </div>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h2
            id="main-street-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(28px, 3.5vw, 40px)",
              fontWeight: 700,
              color: "#F2B705",
              marginBottom: "24px",
            }}
          >
            Stories Moving Markets.
          </motion.h2>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "17px",
              color: "rgba(248,245,238,0.65)",
              maxWidth: 560,
              lineHeight: 1.75,
              marginBottom: "40px",
            }}
          >
            MAIN STREET is Unscripted&apos;s flagship podcast — conversations at
            the intersection of business, capital, and emerging markets. We go
            where the story is: Kigali, Doha, Nairobi, Lagos.
          </motion.p>

          {/* City edition tags */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              justifyContent: "center",
              marginBottom: "48px",
            }}
          >
            {cities.map((city) => (
              <span
                key={city}
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "13px",
                  letterSpacing: "0.3em",
                  color: "#F8F5EE",
                  border: "1px solid rgba(248,245,238,0.25)",
                  padding: "8px 20px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span style={{ color: "#F2B705", fontSize: "8px" }}>●</span>
                {city}
              </span>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <Link
              href="/main-street"
              className="btn-gold rounded-full"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Listen Now →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
