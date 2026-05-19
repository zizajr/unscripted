import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";

export default function ShowPortfolioSection() {
  return (
    <section className="py-32 bg-slate">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Reveal>
            <SectionLabel>ALL PRODUCTIONS</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-cream" style={{ fontFamily: "var(--font-playfair)" }}>
              Every show we make has something to say.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-cream/50 text-base mt-4 lg:mt-12 leading-relaxed" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              Podcasts. Documentary series. Branded content. If it's worth making, we know how to make it.
            </p>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* MAIN STREET card */}
          <Reveal delay={0.1}>
            <Link href="/shows/main-street" className="group border border-white/8 hover:border-gold/30 transition-all duration-300 block p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-gold via-violet to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex items-center justify-between mb-6">
                <span className="font-accent text-xs text-gold tracking-widest" style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.2em" }}>PODCAST</span>
                <span className="flex items-center gap-1.5 text-xs text-cream/30" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                  In Production
                </span>
              </div>
              <h3 className="text-2xl font-bold text-cream mb-2 group-hover:text-gold transition-colors" style={{ fontFamily: "var(--font-playfair)" }}>
                MAIN STREET
              </h3>
              <p className="text-cream/50 text-sm mb-6 leading-relaxed" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                Tech & Business. Real Conversations. Unfiltered.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Spotify", "Apple", "YouTube"].map((p) => (
                  <span key={p} className="text-xs border border-white/10 text-cream/30 px-2 py-1" style={{ fontFamily: "var(--font-space-grotesk)" }}>{p}</span>
                ))}
              </div>
              <div className="mt-6 text-xs text-cream/30 group-hover:text-gold transition-colors flex items-center gap-1" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                Explore Show →
              </div>
            </Link>
          </Reveal>
          {/* Placeholder */}
          <Reveal delay={0.2}>
            <div className="border border-dashed border-white/8 p-8 flex flex-col items-center justify-center text-center min-h-[250px]">
              <p className="text-cream/20 text-sm leading-relaxed" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                More in production. We don't announce until we're ready.
              </p>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.3}>
          <div className="mt-12 text-center">
            <Link
              href="/shows"
              className="inline-flex items-center gap-2 text-sm text-cream/50 border border-white/10 px-6 py-3 hover:border-white/30 hover:text-cream transition-all duration-200"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              All Productions →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
