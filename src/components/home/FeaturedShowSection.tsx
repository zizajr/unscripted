import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import ThreeBarMark from "@/components/ThreeBarMark";

export default function FeaturedShowSection() {
  return (
    <section className="py-32 bg-ink overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <SectionLabel>FLAGSHIP SHOW</SectionLabel>
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal delay={0.1}>
              <h2
                className="text-7xl md:text-8xl lg:text-9xl font-black text-cream leading-none tracking-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                MAIN STREET
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-gold text-lg font-semibold mt-4 mb-6" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                Tech & Business. Real Conversations. Unfiltered.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-cream/60 text-base leading-relaxed max-w-lg mb-8" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                Recorded on location across Africa and the Middle East. MAIN STREET is the podcast for people building the next chapter — founders, investors, operators, and the cities they're building in.
              </p>
            </Reveal>
            <Reveal delay={0.35}>
              <p
                className="text-xs text-cream/30 tracking-widest mb-8"
                style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.2em" }}
              >
                NOW IN PRODUCTION · KIGALI · DOHA · MORE CITIES COMING
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <Link
                href="/shows/main-street"
                className="inline-flex items-center gap-2 px-7 py-4 border border-gold text-gold text-sm font-semibold hover:bg-gold hover:text-ink transition-all duration-200"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Explore the Show →
              </Link>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="relative flex items-center justify-center min-h-[400px]">
              {/* City accent blobs */}
              <div className="absolute w-64 h-64 rounded-full bg-kigali/10 blur-3xl -top-10 -left-10" />
              <div className="absolute w-48 h-48 rounded-full bg-doha/10 blur-3xl -bottom-10 -right-10" />
              <div className="relative flex flex-col items-center gap-8">
                <ThreeBarMark size={60} />
                <div className="w-px h-24 bg-gradient-to-b from-gold/40 to-transparent" />
                <div className="flex gap-6">
                  <div className="text-center">
                    <span className="block text-xs tracking-widest mb-2" style={{ fontFamily: "var(--font-bebas)", color: "#FF6B35", letterSpacing: "0.2em" }}>KIGALI</span>
                    <div className="w-2 h-2 rounded-full bg-kigali mx-auto animate-pulse" />
                  </div>
                  <div className="w-px h-8 bg-white/10" />
                  <div className="text-center">
                    <span className="block text-xs tracking-widest mb-2" style={{ fontFamily: "var(--font-bebas)", color: "#00A896", letterSpacing: "0.2em" }}>DOHA</span>
                    <div className="w-2 h-2 rounded-full bg-doha mx-auto animate-pulse" style={{ animationDelay: "0.5s" }} />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
