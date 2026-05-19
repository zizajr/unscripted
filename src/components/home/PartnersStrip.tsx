import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";

const platforms = ["Spotify", "Apple Podcasts", "YouTube", "Amazon Music", "Pocket Casts", "iHeartRadio"];

export default function PartnersStrip() {
  return (
    <section className="py-24 bg-slate border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
        <Reveal>
          <SectionLabel>HEARD ON</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            {platforms.map((p, i) => (
              <span
                key={p}
                className="px-6 py-3 border border-white/8 text-cream/30 text-sm hover:border-white/20 hover:text-cream/50 transition-all duration-200 cursor-default"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {p}
              </span>
            ))}
          </div>
          <p className="mt-6 text-xs text-cream/25" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            MAIN STREET is distributed on all major podcast platforms and streaming services.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
