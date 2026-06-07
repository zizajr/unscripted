"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const TICKER_ITEMS = [
  "BRANDING", "STRATEGY", "COMMUNICATIONS", "MEDIA PRODUCTION",
  "DIGITAL MARKETING", "PUBLIC RELATIONS", "BUSINESS DEVELOPMENT",
  "EAST AFRICA", "MIDDLE EAST", "GLOBAL",
];

export default function CredentialsTicker({ dict }: { dict?: string[] }) {
  const tickerItems = dict || TICKER_ITEMS;
  const items = [...tickerItems, ...tickerItems];
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-6 border-y"
      style={{
        background: "#0A0A0A",
        borderColor: "rgba(242,183,5,0.12)",
      }}
      aria-label="Credentials"
    >
      {/* Fade edges */}
      <div
        className="absolute inset-y-0 left-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #0A0A0A, transparent)" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-y-0 right-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #0A0A0A, transparent)" }}
        aria-hidden="true"
      />

      <motion.div
        className="flex gap-0 whitespace-nowrap"
        animate={inView ? { x: ["0%", "-50%"] } : {}}
        transition={{
          x: {
            duration: 32,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          },
        }}
        aria-hidden="true"
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-6 px-8"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "13px",
              letterSpacing: "0.3em",
              color: "rgba(61,61,61,1.0)",
              userSelect: "none",
            }}
          >
            {item}
            <span style={{ color: "rgba(242,183,5,0.3)", fontSize: "8px" }}>◆</span>
          </span>
        ))}
      </motion.div>

      {/* Accessible list for screen readers */}
      <ul className="sr-only">
        {tickerItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
