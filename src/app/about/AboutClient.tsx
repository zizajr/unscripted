"use client";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import ThreeBarMark from "@/components/ThreeBarMark";
import Link from "next/link";

const principles = [
  {
    name: "PRIMARY SOURCES ONLY",
    desc: "We don't cover the story about the story. We talk to the person who was in the room.",
  },
  {
    name: "NO SCRIPTS, NO SOFTBALLS",
    desc: "Every guest knows we're going to ask the real question. That's why they agree to come on.",
  },
  {
    name: "CITY-FIRST, GLOBALLY DISTRIBUTED",
    desc: "We don't parachute in. We embed in the cities we cover and let the story come from the ground up.",
  },
  {
    name: "PRODUCTION QUALITY IS AN ARGUMENT",
    desc: "A show that sounds great says: this story deserves to be heard. We make that argument with every episode.",
  },
];

const placeholderTeam = [
  { name: "[FULL NAME]", role: "[ROLE TITLE]", bio: "[1-sentence bio]", city: "[City]" },
  { name: "[FULL NAME]", role: "[ROLE TITLE]", bio: "[1-sentence bio]", city: "[City]" },
  { name: "[FULL NAME]", role: "[ROLE TITLE]", bio: "[1-sentence bio]", city: "[City]" },
];

export default function AboutClient() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative min-h-[60vh] bg-ink flex items-end pb-24 pt-40 grid-overlay overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/80 to-ink pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <SectionLabel>ABOUT US</SectionLabel>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-cream leading-tight max-w-3xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Built from a gap in the conversation.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-cream/60 max-w-2xl leading-relaxed"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            We looked for a show that covered business and technology the way we experienced it. We couldn't find one. So we built the studio, hired the people, and started recording.
          </motion.p>
        </div>
      </section>

      {/* Narrative Section 1: How We Started */}
      <section className="section-padding bg-ink">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            <div className="lg:col-span-5">
              <SectionLabel>THE ORIGIN</SectionLabel>
              <Reveal>
                <h2 className="text-4xl md:text-5xl font-bold text-cream mb-8" style={{ fontFamily: "var(--font-playfair)" }}>
                  The show that didn't exist yet.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7 space-y-6 text-cream/70 text-lg leading-relaxed" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              <Reveal delay={0.1}>
                <p>Business journalism has always had a geography problem. The stories coming out of New York and San Francisco are told at length, in detail, with resources behind them. The stories coming out of Kigali, Doha, Lagos, and Dubai — the cities where some of the most consequential business decisions are being made — are treated as footnotes.</p>
              </Reveal>
              <Reveal delay={0.2}>
                <p>Unscripted Productions was founded to treat these cities with the same seriousness that traditional media reserves for a handful of western zip codes. Not "emerging market" content. Just content. About the people changing the world from the ground up.</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section 2: Philosophy */}
      <section className="section-padding bg-slate border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            <div className="lg:col-span-5 lg:order-2">
              <SectionLabel>OUR PHILOSOPHY</SectionLabel>
              <Reveal>
                <h2 className="text-4xl md:text-5xl font-bold text-cream mb-8" style={{ fontFamily: "var(--font-playfair)" }}>
                  No pre-approved questions. No scripts.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7 lg:order-1 space-y-6 text-cream/70 text-lg leading-relaxed" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              <Reveal delay={0.1}>
                <p>The name says everything. We don't give guests a script. The best conversations happen when neither person knows exactly where it's going. We prepare obsessively — researching every angle and every deal — but the actual exchange is always real.</p>
              </Reveal>
              <Reveal delay={0.2}>
                <p>No PR handlers. No softball questions. Just the kind of conversation you'd have if the cameras weren't there. That's why leaders agree to talk to us.</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Grid */}
      <section className="section-padding bg-ink">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <SectionLabel>HOW WE WORK</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-cream mb-16" style={{ fontFamily: "var(--font-playfair)" }}>
              Four principles. No exceptions.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
            {principles.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.1}>
                <div className="bg-ink p-12 group hover:bg-slate/40 transition-colors duration-300 h-full">
                  <p className="text-gold font-accent text-3xl mb-4" style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.05em" }}>
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-lg font-semibold tracking-widest text-cream mb-4" style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.15em" }}>
                    {p.name}
                  </h3>
                  <p className="text-cream/50 text-base leading-relaxed" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-slate">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <Reveal>
              <SectionLabel>THE TEAM</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-bold text-cream" style={{ fontFamily: "var(--font-playfair)" }}>
                The producers behind the mic.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-cream/50 max-w-sm" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                Based across Africa and the Middle East. Headquartered in Dubai and Kigali.
              </p>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {placeholderTeam.map((member, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="group">
                  <div className="aspect-[4/5] bg-ink/50 border border-white/5 mb-6 relative overflow-hidden flex items-center justify-center text-cream/10 text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-bebas)" }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-50" />
                    [HEADSHOT]
                  </div>
                  <h3 className="text-xl font-bold text-cream mb-1" style={{ fontFamily: "var(--font-playfair)" }}>Name Placeholder</h3>
                  <p className="text-gold text-sm font-semibold tracking-wider mb-2" style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.1em" }}>Executive Producer</p>
                  <p className="text-cream/40 text-sm leading-relaxed" style={{ fontFamily: "var(--font-space-grotesk)" }}>Bringing a decade of narrative journalism to Unscripted.</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-ink border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <Reveal>
            <div className="flex justify-center mb-8">
              <ThreeBarMark size={48} />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-cream mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
              Have a story worth telling?
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 bg-gold text-ink font-bold hover:bg-gold/90 transition-all duration-200 text-sm tracking-wide"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Get in touch →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
