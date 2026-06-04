"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { teamMembers } from "@/data/team";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number, className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} className={className} initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay, ease: EASE }}>
      {children}
    </motion.div>
  );
}

// ── Collins-Style Team Grid Item ──
function TeamMemberCard({ member, index }: { member: any; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px" });
  
  // Mapping the IDs to the uploaded photos from earlier
  const photoMap: Record<string, string> = {
    "gavin-ngabonziza": "/team-gavin.jpg",
    "edward-t-yeboah": "/team-edward.jpg",
    "bolton-abdulmalik": "/team-malik.jpg"
  };
  
  const photoUrl = photoMap[member.id] || null;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: EASE }}
      className="group relative aspect-[3/4] overflow-hidden bg-ink border-r border-b border-cream/10 flex items-center justify-center cursor-pointer"
    >
      {photoUrl ? (
        <>
          <Image
            src={photoUrl}
            alt={member.name}
            fill
            className="object-cover object-center grayscale opacity-80 transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
          />
          {/* Collins-style brutalist hover overlay */}
          <div className="absolute inset-0 bg-ink/80 flex flex-col justify-end p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 mix-blend-multiply" />
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 opacity-0 translate-y-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 z-10 pointer-events-none">
            <h3 style={{ fontFamily: "var(--font-display)" }} className="text-3xl md:text-5xl font-black text-cream leading-none tracking-tight mb-2">
              {member.name.split(" ")[0]}<br/>{member.name.split(" ").slice(1).join(" ")}
            </h3>
            <p className="text-gold font-body text-sm md:text-base font-semibold uppercase tracking-widest">
              {member.title}
            </p>
          </div>
        </>
      ) : (
        // Fallback for members without photos
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate/50 transition-colors duration-500 group-hover:bg-gold">
          <span style={{ fontFamily: "var(--font-bebas)" }} className="text-[120px] text-cream/20 group-hover:text-ink/10 transition-colors duration-500">
            {member.initials}
          </span>
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 z-10 text-center md:text-left">
            <h3 style={{ fontFamily: "var(--font-display)" }} className="text-3xl md:text-5xl font-black text-cream group-hover:text-ink leading-none tracking-tight mb-2 transition-colors duration-500">
              {member.name.split(" ")[0]}<br className="hidden md:block"/> {member.name.split(" ").slice(1).join(" ")}
            </h3>
            <p className="text-gold group-hover:text-ink/70 font-body text-sm md:text-base font-semibold uppercase tracking-widest transition-colors duration-500">
              {member.title}
            </p>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default function AboutClient() {
  return (
    <div className="bg-ink min-h-screen">
      {/* ── HERO ── */}
      <section className="relative pt-[200px] pb-[100px] px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto">
        <div className="max-w-[1280px]">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            style={{ fontFamily: "var(--font-bebas)" }} className="text-xs tracking-[0.35em] text-cream/45 mb-8 uppercase">
            WHO WE ARE
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            style={{ fontFamily: "var(--font-display)" }} className="text-[clamp(48px,8vw,120px)] font-black text-cream leading-[0.95] tracking-tight mb-8">
            The script <br className="hidden md:block" />
            <em className="text-cream/40 font-light italic">ends here.</em>
          </motion.h1>
        </div>
      </section>

      {/* ── MANIFESTO ── */}
      <section className="px-6 md:px-12 lg:px-20 pb-[160px] max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32">
        <div className="lg:w-1/3">
          <FadeUp>
            <div className="w-16 h-1 bg-gold mb-8" />
            <p style={{ fontFamily: "var(--font-bebas)" }} className="text-2xl text-gold tracking-widest uppercase">Our Core Belief</p>
          </FadeUp>
        </div>
        <div className="lg:w-2/3 space-y-12">
          <FadeUp delay={0.1}>
            <h2 style={{ fontFamily: "var(--font-display)" }} className="text-[clamp(32px,4vw,64px)] font-black text-cream leading-[1.1]">
              Unscripted exists to challenge the status quo and create brand narratives that captivate, resonate, and endure.
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-xl md:text-2xl font-body text-cream/70 leading-relaxed max-w-3xl">
              We started with a vision: to defy reason. Founded on the belief that traditional marketing paradigms needed a fresh, innovative approach, our journey began with a passion for helping businesses not just succeed, but truly stand out. Over the years, we have grown into a dynamic team of creative minds dedicated to redefining the way brands communicate.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── THE TEAM (Collins Style) ── */}
      <section className="border-t border-cream/10">
        <div className="px-6 md:px-12 lg:px-20 py-24 md:py-32 max-w-[1600px] mx-auto">
          <FadeUp>
            <h2 style={{ fontFamily: "var(--font-display)" }} className="text-[clamp(40px,6vw,80px)] font-black text-cream leading-none tracking-tight mb-16">
              The People.
            </h2>
          </FadeUp>
        </div>

        {/* 
          Collins uses a strict edge-to-edge grid. 
          We'll use a CSS Grid that fills the screen width with no gaps. 
        */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-t border-cream/10">
          {teamMembers.map((member, i) => (
            <TeamMemberCard key={member.id} member={member} index={i} />
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-slate py-32 px-6 md:px-12 lg:px-20 text-center border-t border-gold">
        <FadeUp>
          <p style={{ fontFamily: "var(--font-display)" }} className="text-[clamp(32px,5vw,64px)] font-black text-cream mb-12">
            Ready to challenge the expected?
          </p>
          <Link href="/contact" className="btn-gold rounded-full shadow-2xl shadow-gold/20">
            Start a Conversation →
          </Link>
        </FadeUp>
      </section>
    </div>
  );
}
