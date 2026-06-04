"use client";
import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const work = [
  {
    client: "TicketDaddy Inc.",
    type: "Brand & Digital",
    outcome: "Smart Tickets infrastructure — 600,000+ transactions across East Africa.",
    color: "#1a1a2e",
  },
  {
    client: "HamzPay / Hamz Ltd",
    type: "Brand & FinTech",
    outcome: "Mobile wallet identity and communications for Rwandan consumers.",
    color: "#16213e",
  },
  {
    client: "Nyaka Global",
    type: "Brand & Communications",
    outcome: "Global NGO identity and media strategy.",
    color: "#0f3460",
  },
  {
    client: "FX Pesa",
    type: "Design & Marketing",
    outcome: "Financial brand design for East Africa's trading audience.",
    color: "#1a2a1a",
  },
  {
    client: "Honorary Consul of Namibia in Uganda",
    type: "Communications & PR",
    outcome: "Diplomatic communications and event coordination.",
    color: "#2a1a1a",
  },
];

function WorkCard({
  client,
  type,
  outcome,
  color,
  index,
  inView,
}: {
  client: string;
  type: string;
  outcome: string;
  color: string;
  index: number;
  inView: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.12,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className="group relative overflow-hidden"
      style={{
        background: color,
        aspectRatio: index === 0 ? "16/9" : "4/3",
        cursor: "pointer",
        transition: "transform 400ms ease, box-shadow 400ms ease",
      }}
      whileHover={{ y: -6, transition: { duration: 0.4 } }}
    >
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.3) 50%, transparent 100%)",
          zIndex: 1,
        }}
        aria-hidden="true"
      />

      {/* Placeholder visual pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            rgba(242,183,5,0.03) 0,
            rgba(242,183,5,0.03) 1px,
            transparent 0,
            transparent 50%
          )`,
          backgroundSize: "20px 20px",
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div
        className="absolute bottom-0 left-0 right-0 p-6"
        style={{ zIndex: 2 }}
      >
        {/* Type tag */}
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "11px",
            fontWeight: 500,
            color: "#F8F5EE",
            background: "#8B2FC9",
            padding: "4px 10px",
            letterSpacing: "0.05em",
            display: "inline-block",
            marginBottom: "10px",
          }}
        >
          {type}
        </span>

        {/* Client name */}
        <p
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(18px, 2.5vw, 24px)",
            letterSpacing: "0.1em",
            color: "#F8F5EE",
            lineHeight: 1.1,
            marginBottom: "8px",
          }}
        >
          {client}
        </p>

        {/* Outcome */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "13px",
            color: "rgba(248,245,238,0.60)",
            lineHeight: 1.5,
          }}
        >
          {outcome}
        </p>
      </div>
    </motion.article>
  );
}

export default function WorkSection() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="work"
      style={{ background: "#F8F5EE" }}
      aria-labelledby="work-heading"
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
              color: "#F2B705",
              marginBottom: "20px",
            }}
          >
            OUR WORK
          </motion.p>

          <motion.h2
            id="work-heading"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 4vw, 56px)",
              fontWeight: 900,
              color: "#0A0A0A",
              lineHeight: 1.1,
            }}
          >
            Work that moves<br />markets and minds.
          </motion.h2>
        </div>

        {/* 2-col staggered grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          style={{ marginBottom: "48px" }}
        >
          {/* First card spans 2 cols on md */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <WorkCard {...work[0]} index={0} inView={inView} />
          </motion.div>

          {/* Remaining 4 in 2-col grid */}
          {work.slice(1).map((item, i) => (
            <WorkCard key={item.client} {...item} index={i + 1} inView={inView} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{ textAlign: "center" }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "17px",
              color: "#3D3D3D",
              marginBottom: "16px",
            }}
          >
            Interested in working with us?
          </p>
          <Link href="/contact" className="btn-gold rounded-full">
            Start a Project →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
