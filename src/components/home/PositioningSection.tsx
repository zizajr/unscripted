import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";

const props = [
  { num: "01", label: "PRODUCTION",  desc: "Full-service audio and video. From first concept call to final file delivery." },
  { num: "02", label: "DISTRIBUTION", desc: "Your show on Spotify, Apple Podcasts, YouTube, and the platforms your audience actually uses." },
  { num: "03", label: "STRATEGY",    desc: "We don't just record. We help you figure out what to say, how to say it, and who needs to hear it." },
];

export default function PositioningSection() {
  return (
    <section className="py-32 bg-slate">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <Reveal>
            <SectionLabel>WHAT WE DO</SectionLabel>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
              We make shows that stop people mid-scroll.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-base text-cream/60 leading-relaxed mt-4 lg:mt-12" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              Unscripted is an independent production house. We build podcasts, documentary series, and branded content for people who need to be heard. Not heard of — heard.
            </p>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
          {props.map((p, i) => (
            <Reveal key={p.num} delay={i * 0.1}>
              <div className="bg-slate p-10 hover:bg-ink/40 transition-colors duration-300 group">
                <p className="font-accent text-5xl text-gold/20 mb-4 group-hover:text-gold/40 transition-colors" style={{ fontFamily: "var(--font-bebas)" }}>
                  {p.num}
                </p>
                <h3 className="text-sm font-bold tracking-widest text-cream mb-3" style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.15em" }}>
                  {p.label}
                </h3>
                <p className="text-cream/50 text-sm leading-relaxed" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  {p.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
