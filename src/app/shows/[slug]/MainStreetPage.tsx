import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import ThreeBarMark from "@/components/ThreeBarMark";

const cityEditions = [
  {
    id: "kigali",
    label: "KIGALI, RWANDA",
    color: "#FF6B35",
    headline: "The city building East Africa's tech future.",
    desc: "Kigali Main Street covers the founders, investors, and policymakers shaping one of Africa's most ambitious economies. Every episode is recorded in the city — because you can't cover Kigali from somewhere else.",
  },
  {
    id: "doha",
    label: "DOHA, QATAR",
    color: "#00A896",
    headline: "Where Gulf capital meets global ambition.",
    desc: "Doha Main Street covers the investment strategies, technology bets, and business decisions being made at the intersection of the Gulf and the world. The conversations that don't make the press release.",
  },
];

const placeholderEpisodes = [
  { ep: "001", title: "[EPISODE TITLE]", guest: "[GUEST NAME]", guestTitle: "[TITLE]", company: "[COMPANY]", city: "Kigali", duration: "52 min", date: "[DATE]" },
  { ep: "002", title: "[EPISODE TITLE]", guest: "[GUEST NAME]", guestTitle: "[TITLE]", company: "[COMPANY]", city: "Doha",   duration: "48 min", date: "[DATE]" },
  { ep: "003", title: "[EPISODE TITLE]", guest: "[GUEST NAME]", guestTitle: "[TITLE]", company: "[COMPANY]", city: "Kigali", duration: "61 min", date: "[DATE]" },
];

const platforms = [
  { name: "Spotify",        href: "#" },
  { name: "Apple Podcasts", href: "#" },
  { name: "YouTube",        href: "#" },
  { name: "Amazon Music",   href: "#" },
  { name: "Pocket Casts",   href: "#" },
  { name: "mainstreet.fm",  href: "#" },
];

export default function MainStreetPage() {
  return (
    <>
      {/* Show Hero */}
      <section className="relative min-h-screen bg-ink grid-overlay flex items-end pb-24 pt-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-slate/40 to-ink pointer-events-none" />
        <div className="absolute top-1/3 -right-64 w-[600px] h-[600px] rounded-full bg-gold/3 blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="mb-8">
            <ThreeBarMark size={40} />
          </div>
          <span
            className="text-xs tracking-widest text-gold mb-4 block"
            style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.2em" }}
          >
            PODCAST · IN PRODUCTION
          </span>
          <h1
            className="text-7xl md:text-[10rem] lg:text-[14rem] font-black text-cream leading-none tracking-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            MAIN<br />STREET
          </h1>
          <p className="mt-8 text-xl text-gold font-semibold max-w-xl" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            Tech & Business. Real Conversations. Unfiltered.
          </p>
          <p className="mt-4 text-base text-cream/60 max-w-2xl leading-relaxed" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            MAIN STREET is a podcast about the people building the next chapter of business and technology — recorded on location in the cities where that work is actually happening. Not Wall Street. Not Silicon Valley. Main Street.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {["Listen on Spotify", "Apple Podcasts", "YouTube"].map((cta) => (
              <a
                key={cta}
                href="#listen"
                className="px-5 py-3 border border-white/15 text-cream/70 text-sm hover:border-gold hover:text-gold transition-all duration-200"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {cta}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* City Editions */}
      <section className="py-24 bg-slate" id="cities">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <SectionLabel>CITY EDITIONS</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-cream mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              One show. Many cities. Every story different.
            </h2>
            <p className="text-cream/50 max-w-xl mb-16 text-base" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              MAIN STREET isn't one podcast — it's a network of locally produced editions, each embedded in a different city. Same standard. Different skyline.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {cityEditions.map((city, i) => (
              <Reveal key={city.id} delay={i * 0.15}>
                <div className="border border-white/8 p-10 hover:border-white/20 transition-all duration-300 group">
                  <p
                    className="text-base font-bold mb-4 tracking-widest"
                    style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.15em", color: city.color }}
                  >
                    {city.label}
                  </p>
                  <h3 className="text-2xl font-bold text-cream mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                    {city.headline}
                  </h3>
                  <p className="text-cream/50 text-sm leading-relaxed" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                    {city.desc}
                  </p>
                </div>
              </Reveal>
            ))}
            {/* Upcoming */}
            <Reveal delay={0.3}>
              <div className="border border-dashed border-white/10 p-10 flex flex-col justify-between">
                <div>
                  <p className="text-xs tracking-widest text-cream/30 mb-4" style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.2em" }}>
                    MORE COMING
                  </p>
                  <h3 className="text-2xl font-bold text-cream/40 mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                    The next edition is in production.
                  </h3>
                  <p className="text-cream/30 text-sm leading-relaxed" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                    We embed before we record. The next city edition will be announced when we're ready to do it justice. Follow us to hear first.
                  </p>
                </div>
                <a href="#" className="mt-8 self-start text-sm border border-white/15 text-cream/40 px-4 py-2 hover:border-white/30 hover:text-cream transition-all" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  Follow for Updates →
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Episodes */}
      <section className="py-24 bg-ink" id="episodes">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <SectionLabel>LATEST EPISODES</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-cream mb-16" style={{ fontFamily: "var(--font-playfair)" }}>
              New conversations. Every edition.
            </h2>
          </Reveal>
          <div className="space-y-px">
            {placeholderEpisodes.map((ep, i) => {
              const cityColor = ep.city === "Kigali" ? "#FF6B35" : "#00A896";
              return (
                <Reveal key={ep.ep} delay={i * 0.06}>
                  <div className="group border-b border-white/5 py-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 hover:bg-slate/20 transition-colors duration-200 -mx-6 px-6">
                    <span className="font-accent text-3xl text-gold/40 w-20 flex-shrink-0" style={{ fontFamily: "var(--font-bebas)" }}>
                      EP {ep.ep}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-cream mb-1 group-hover:text-gold transition-colors" style={{ fontFamily: "var(--font-playfair)" }}>
                        {ep.title}
                      </h3>
                      <p className="text-cream/50 text-sm" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                        {ep.guest} · {ep.guestTitle} · {ep.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 flex-shrink-0">
                      <span className="px-3 py-1 text-xs font-bold" style={{ fontFamily: "var(--font-bebas)", color: cityColor, border: `1px solid ${cityColor}40`, letterSpacing: "0.1em" }}>
                        {ep.city}
                      </span>
                      <span className="text-cream/30 text-xs" style={{ fontFamily: "var(--font-space-grotesk)" }}>{ep.duration}</span>
                      <div className="flex gap-2">
                        {["Play", "Spotify", "Apple"].map((p) => (
                          <a key={p} href="#" className="text-xs text-cream/30 border border-white/10 px-3 py-1.5 hover:border-gold/40 hover:text-gold transition-all" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                            {p}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Where to Listen */}
      <section className="py-24 bg-slate" id="listen">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <SectionLabel>LISTEN EVERYWHERE</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-cream mb-12" style={{ fontFamily: "var(--font-playfair)" }}>
              Find MAIN STREET on your platform.
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {platforms.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.05}>
                <a
                  href={p.href}
                  className="flex items-center justify-center p-6 border border-white/8 text-center text-sm text-cream/60 hover:border-gold/40 hover:text-gold transition-all duration-200 h-20"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {p.name}
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="py-24 bg-ink" id="bts">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <SectionLabel>BEHIND THE MIC</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-cream mb-12" style={{ fontFamily: "var(--font-playfair)" }}>
              What it looks like when we show up.
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Kigali · Episode 001 · Pre-interview setup, Kigali studio",
              "Doha · Episode 002 · On-location interview, Doha",
              "Kigali · Episode 003 · Post-production session",
              "Doha · Episode 001 · Guest arrival, Doha studio",
              "Kigali · Episode 002 · Street-level b-roll",
              "Behind the scenes · Production team, field recording",
            ].map((cap, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="aspect-[4/3] bg-slate/40 border border-white/5 flex items-end p-4 group hover:border-white/15 transition-colors">
                  <p className="text-xs text-cream/30 group-hover:text-cream/50 transition-colors" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                    {cap}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold text-cream mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              Want to be on MAIN STREET?
            </h2>
            <p className="text-cream/50 mb-10 text-base max-w-md mx-auto leading-relaxed" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              We're always looking for the right guest — founders, investors, operators, and thinkers who have something real to say.
            </p>
            <Link
              href="/contact?type=guest"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-ink font-semibold hover:bg-gold/90 transition-colors duration-200 text-sm"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Submit a Guest Inquiry →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
