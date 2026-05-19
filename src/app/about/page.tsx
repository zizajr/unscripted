import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import ThreeBarMark from "@/components/ThreeBarMark";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "We built the studio because the show we wanted to watch didn't exist. The story of Unscripted Productions.",
};

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

const capabilities = [
  "Audio Production", "Video Production", "Post-Production & Editing",
  "Distribution Strategy", "Brand Integration", "Podcast Consulting",
  "Episodic Scripted Series", "Documentary Development",
];

const placeholderTeam = [
  { name: "[FULL NAME]", role: "[ROLE TITLE]", bio: "[1-sentence bio]", city: "[City]" },
  { name: "[FULL NAME]", role: "[ROLE TITLE]", bio: "[1-sentence bio]", city: "[City]" },
  { name: "[FULL NAME]", role: "[ROLE TITLE]", bio: "[1-sentence bio]", city: "[City]" },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative min-h-[50vh] bg-ink flex items-end pb-24 pt-40 grid-overlay overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/80 to-ink pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <SectionLabel>OUR STORY</SectionLabel>
          <h1
            className="text-5xl md:text-7xl font-black text-cream leading-tight max-w-3xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Built from a gap in the conversation.
          </h1>
          <p className="mt-6 text-lg text-cream/60 max-w-xl leading-relaxed" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            We looked for a show that covered business and technology the way we experienced it. We couldn't find one. So we made it.
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-24 bg-ink">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel>HOW WE STARTED</SectionLabel>
              <Reveal>
                <h2 className="text-4xl md:text-5xl font-bold text-cream mb-10" style={{ fontFamily: "var(--font-playfair)" }}>
                  The show that didn't exist yet.
                </h2>
              </Reveal>
            </div>
            <div className="space-y-6 text-cream/70 text-base leading-relaxed" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              <Reveal delay={0.1}>
                <p>Business journalism has always had a geography problem. The stories coming out of New York and San Francisco are told at length, in detail, with resources behind them. The stories coming out of Kigali, Doha, Lagos, and Amman — the cities where some of the most consequential business decisions of the next decade are being made — are treated as footnotes, if they are told at all.</p>
              </Reveal>
              <Reveal delay={0.2}>
                <p>We decided to fix that. Unscripted Productions was founded to make content that treats these cities, their founders, and their industries with the same seriousness that traditional media reserves for a handful of zip codes. Not "emerging market" content. Just — content. About business. About technology. About the people changing both.</p>
              </Reveal>
              <Reveal delay={0.3}>
                <p>The name says everything. We don't give guests a script. We don't soften the questions. We don't ask for approval before we publish. The best conversations happen when neither person knows exactly where it's going — and that's the show we've set out to make.</p>
              </Reveal>
              <Reveal delay={0.4}>
                <p>We are based across Africa and the Middle East. Our productions go everywhere. Our standards don't travel down.</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-slate">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <SectionLabel>OUR MISSION</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-cream mb-6 max-w-2xl" style={{ fontFamily: "var(--font-playfair)" }}>
              To document the world that's already being built.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-base text-cream/60 max-w-2xl leading-relaxed" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              Every city we record in is mid-sentence. There are deals being closed, companies being launched, technologies being deployed — and almost none of it is being captured with the quality it deserves. That's the work. We show up, we record it properly, and we put it where people can find it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Principles */}
      <section className="py-24 bg-ink">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <SectionLabel>HOW WE WORK</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-cream mb-16" style={{ fontFamily: "var(--font-playfair)" }}>
              Four principles. No exceptions.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
            {principles.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.1}>
                <div className="bg-ink p-10 group hover:bg-slate/40 transition-colors duration-300">
                  <p className="text-gold font-accent text-2xl mb-3" style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.05em" }}>
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-sm font-semibold tracking-widest text-cream mb-3" style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.15em" }}>
                    {p.name}
                  </h3>
                  <p className="text-cream/60 text-sm leading-relaxed" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What "Unscripted" means */}
      <section className="py-24 bg-slate">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="flex gap-4 mb-8">
                <ThreeBarMark size={48} />
              </div>
              <SectionLabel>THE NAME</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-bold text-cream" style={{ fontFamily: "var(--font-playfair)" }}>
                It's not a style choice. It's a philosophy.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-base text-cream/60 leading-relaxed" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                "Unscripted" is not a reference to casual production or low preparation. We prepare obsessively. We research every guest, every city, every industry angle before we walk into the room. But the conversation itself — the actual recorded exchange — is never scripted. No pre-approved questions. No cut list. No PR handler in the room. What you hear is what happened. That's the whole premise.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-ink">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <SectionLabel>THE TEAM</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-cream mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              The people behind the mic.
            </h2>
            <p className="text-base text-cream/50 mb-16 max-w-xl" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              We are producers, journalists, sound engineers, and strategists. We work across [FILL IN: cities].
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {placeholderTeam.map((member, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="border border-white/8 p-8 hover:border-gold/30 transition-colors duration-300">
                  <div className="w-16 h-16 bg-slate rounded-sm mb-6 flex items-center justify-center text-cream/20 text-xs" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                    PHOTO
                  </div>
                  <h3 className="text-lg font-bold text-cream mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{member.name}</h3>
                  <p className="text-gold text-sm font-semibold tracking-wide mb-3" style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.1em" }}>{member.role}</p>
                  <p className="text-cream/50 text-sm leading-relaxed mb-3" style={{ fontFamily: "var(--font-space-grotesk)" }}>{member.bio}</p>
                  <span className="text-xs text-cream/30 border border-white/10 px-2 py-1" style={{ fontFamily: "var(--font-space-grotesk)" }}>{member.city}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-slate">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <SectionLabel>WHAT WE CAN DO</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-cream mb-12" style={{ fontFamily: "var(--font-playfair)" }}>
              Full-service production, end to end.
            </h2>
          </Reveal>
          <div className="flex flex-wrap gap-3">
            {capabilities.map((cap, i) => (
              <Reveal key={cap} delay={i * 0.05}>
                <span
                  className="px-4 py-2 border border-white/10 text-cream/70 text-sm hover:border-gold/40 hover:text-cream transition-all duration-200"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {cap}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-ink border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold text-cream mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              Have a story worth telling?
            </h2>
            <p className="text-cream/50 mb-10 text-lg" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              We're always looking for the next conversation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-ink font-semibold hover:bg-gold/90 transition-colors duration-200 text-sm"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Work With Us →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
