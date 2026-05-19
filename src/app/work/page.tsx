import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Work",
  description: "Podcast production, video series, brand storytelling, and distribution strategy — from Africa to the Middle East and beyond.",
};

const services = [
  {
    name: "PODCAST PRODUCTION",
    tagline: "From concept to published, on every platform.",
    desc: "We handle the full production lifecycle: concept development, guest booking, pre-production research, recording (remote or on-location), editing, sound design, show notes, and distribution. You focus on the conversation. We handle everything else.",
    cta: "Discuss a Podcast",
    type: "podcast",
  },
  {
    name: "VIDEO & DOCUMENTARY",
    tagline: "Long-form video built for real audiences.",
    desc: "Documentary series, episodic video content, and branded long-form — produced at a standard that holds up against anything on the platforms. Shot on location, edited in-house, distributed globally.",
    cta: "Discuss a Video Series",
    type: "video",
  },
  {
    name: "BRAND STORYTELLING",
    tagline: "Your brand has a story. We help you tell it.",
    desc: "Branded podcasts, documentary series for corporations and institutions, sponsored content integrations. We work with brands that have something genuine to say and need a production partner serious enough to say it properly.",
    cta: "Discuss Brand Content",
    type: "brand",
  },
  {
    name: "DISTRIBUTION & STRATEGY",
    tagline: "The right show on the right platform for the right audience.",
    desc: "We don't just make the show — we help you figure out where it lives, how it grows, and how it earns. Platform strategy, audience development, advertising integration, and analytics reporting.",
    cta: "Discuss Strategy",
    type: "strategy",
  },
];

const projects = [
  {
    name: "MAIN STREET",
    year: "2024",
    type: "Podcast",
    desc: "Tech & Business. Real Conversations. Unfiltered. Recorded on location in Kigali and Doha.",
    status: "In Production",
  },
];

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] bg-ink grid-overlay flex items-end pb-24 pt-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-ink/50 to-ink pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <SectionLabel>WHAT WE BUILD</SectionLabel>
          <h1 className="text-5xl md:text-7xl font-black text-cream leading-tight max-w-3xl" style={{ fontFamily: "var(--font-playfair)" }}>
            Shows, series, and stories — done properly.
          </h1>
          <p className="mt-6 text-lg text-cream/60 max-w-lg" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            Four service areas. One standard across all of them.
          </p>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 bg-ink">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-px">
          {services.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.1}>
              <div className="group grid grid-cols-1 lg:grid-cols-3 gap-8 border-b border-white/8 py-16 hover:bg-slate/20 transition-colors duration-300 px-0 lg:px-8 -mx-0 lg:-mx-8">
                <div>
                  <p className="font-accent text-2xl text-gold mb-2" style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.08em" }}>
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="font-accent text-2xl text-cream tracking-widest mb-2" style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.12em" }}>
                    {s.name}
                  </h2>
                  <p className="text-gold/80 text-sm" style={{ fontFamily: "var(--font-space-grotesk)" }}>{s.tagline}</p>
                </div>
                <div className="lg:col-span-2 flex flex-col justify-between gap-8">
                  <p className="text-cream/60 text-base leading-relaxed" style={{ fontFamily: "var(--font-space-grotesk)" }}>{s.desc}</p>
                  <Link
                    href="/contact"
                    className="self-start text-sm font-semibold text-cream/60 border border-white/15 px-5 py-2.5 hover:border-gold hover:text-gold transition-all duration-200"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {s.cta} →
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Selected Work */}
      <section className="py-24 bg-slate">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <SectionLabel>SELECTED WORK</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-cream mb-16" style={{ fontFamily: "var(--font-playfair)" }}>
              Productions we're proud of.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.1}>
                <div className="border border-white/8 p-8 hover:border-gold/30 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-accent text-xs tracking-widest text-gold" style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.15em" }}>{p.type}</span>
                    <span className="text-xs text-cream/30" style={{ fontFamily: "var(--font-space-grotesk)" }}>{p.year}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-cream mb-2" style={{ fontFamily: "var(--font-playfair)" }}>{p.name}</h3>
                  <p className="text-cream/50 text-sm leading-relaxed mb-6" style={{ fontFamily: "var(--font-space-grotesk)" }}>{p.desc}</p>
                  <span className="inline-flex items-center gap-2 text-xs text-cream/40" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                    {p.status}
                  </span>
                </div>
              </Reveal>
            ))}
            {/* Placeholder */}
            <Reveal delay={0.1}>
              <div className="border border-dashed border-white/10 p-8 flex flex-col items-center justify-center text-center min-h-[200px]">
                <p className="text-cream/20 text-sm" style={{ fontFamily: "var(--font-space-grotesk)" }}>More in production. We don't announce until we're ready.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-ink border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold text-cream mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              Ready to start something?
            </h2>
            <p className="text-cream/50 mb-10 text-lg max-w-md mx-auto" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              Tell us about your project. We'll tell you if we're the right fit.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-ink font-semibold hover:bg-gold/90 transition-colors duration-200 text-sm"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Start a Conversation →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
