"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: EASE }}>
      {children}
    </motion.div>
  );
}

const projects = [
  {
    client: "TicketDaddy Inc.",
    type: "Brand & Digital",
    outcome: "Smart Tickets infrastructure — 600,000+ transactions across East Africa.",
    bg: "radial-gradient(circle at top right, #1a1a2e, #0A0A0A)",
  },
  {
    client: "HamzPay",
    type: "Brand & FinTech",
    outcome: "Mobile wallet identity and communications for Rwandan consumers.",
    bg: "radial-gradient(circle at bottom left, #0d1b2a, #0A0A0A)",
  },
  {
    client: "Nyaka Global",
    type: "Brand & Communications",
    outcome: "Global NGO identity and media strategy.",
    bg: "radial-gradient(circle at center, #0f3460, #0A0A0A)",
  },
  {
    client: "FX Pesa",
    type: "Design & Marketing",
    outcome: "Financial brand design for East Africa's trading audience.",
    bg: "radial-gradient(circle at top left, #1a2a0a, #0A0A0A)",
  },
  {
    client: "Honorary Consul of Namibia",
    type: "Communications & PR",
    outcome: "Diplomatic communications and event coordination.",
    bg: "radial-gradient(circle at bottom right, #2a150a, #0A0A0A)",
  },
];

function WorkCard({ client, type, outcome, bg, index }: {
  client: string; type: string; outcome: string; bg: string; index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, ease: EASE }}
      className="group relative overflow-hidden"
      style={{
        aspectRatio: index % 2 === 0 ? "4/5" : "16/9",
        marginTop: index % 2 !== 0 && index > 0 ? "10vw" : "0",
      }}
    >
      {/* Background visual */}
      <motion.div
        style={{ background: bg, y }}
        className="absolute inset-[-10%] z-0 scale-105 transition-transform duration-[1.5s] ease-out group-hover:scale-100"
      >
        <div aria-hidden="true" className="absolute inset-0 opacity-20" style={{
          backgroundImage: "repeating-linear-gradient(45deg, rgba(242,183,5,0.1) 0, rgba(242,183,5,0.1) 2px, transparent 2px, transparent 8px)"
        }} />
      </motion.div>

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent transition-opacity duration-700 group-hover:from-ink/95" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20 flex flex-col justify-end">
        <div className="overflow-hidden mb-4">
          <span className="block text-gold text-xs tracking-[0.2em] uppercase font-bebas transform translate-y-full opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
            {type}
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-cream font-display leading-[1.1] mb-6 transform transition-transform duration-700 ease-out group-hover:-translate-y-2">
          {client}
        </h2>
        <div className="h-px w-0 bg-gold/50 transition-all duration-700 ease-out group-hover:w-full mb-6" />
        <p className="text-cream/70 text-lg md:text-xl font-body max-w-xl opacity-0 transform translate-y-4 transition-all duration-500 delay-100 ease-out group-hover:opacity-100 group-hover:translate-y-0">
          {outcome}
        </p>
      </div>
    </motion.article>
  );
}

export default function WorkClient() {
  return (
    <div className="bg-ink min-h-screen">
      {/* ── HERO ── */}
      <section className="relative pt-[200px] pb-[100px] px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto" aria-labelledby="work-page-heading">
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: EASE }}
          className="text-gold text-xs tracking-[0.35em] font-bebas mb-8"
        >
          SELECT WORK
        </motion.p>
        <motion.h1
          id="work-page-heading"
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
          className="text-[clamp(48px,8vw,120px)] font-black text-cream font-display leading-[0.9] tracking-tight max-w-5xl"
        >
          Work that moves <br />
          <em className="text-cream/40 italic font-light">markets and minds.</em>
        </motion.h1>
      </section>

      {/* ── GRID ── */}
      <section className="px-6 md:px-12 lg:px-20 pb-[160px] max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
          {projects.map((p, i) => (
            <WorkCard key={p.client} {...p} index={i} />
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-slate py-32 px-6 md:px-12 lg:px-20 text-center border-t border-gold/20">
        <FadeUp>
          <p className="text-cream font-display text-[clamp(32px,5vw,72px)] font-black italic mb-12">
            Ready to challenge <br />
            <span className="text-gold">the expected?</span>
          </p>
          <Link href="/contact" className="inline-block bg-gold text-ink font-body font-semibold px-10 py-5 rounded-full hover:bg-cream transition-colors duration-300">
            Start a Conversation →
          </Link>
        </FadeUp>
      </section>
    </div>
  );
}
