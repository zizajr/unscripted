import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";

export default function AboutThirtySection() {
  return (
    <section className="py-32 bg-ink border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <Reveal>
            <SectionLabel>WHO WE ARE</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-cream" style={{ fontFamily: "var(--font-playfair)" }}>
              Independent. Intentional. Unscripted.
            </h2>
          </Reveal>
        </div>
        <div className="space-y-6">
          <Reveal delay={0.1}>
            <p className="text-base text-cream/60 leading-relaxed" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              We started because the shows we wanted to watch didn't exist yet. No one was making premium, internationally distributed content about business and technology as it's actually happening across Africa and the Middle East.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-base text-cream/60 leading-relaxed" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              So we built the studio, hired the people, and started recording.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-base text-cream/60 leading-relaxed" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              We are not a marketing agency that does podcasts. We are a production house — and the difference shows in every episode we make.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm text-gold border border-gold/40 px-6 py-3 hover:bg-gold hover:text-ink transition-all duration-200"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Our Story →
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
