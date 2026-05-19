"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";

const filters = ["All", "Podcast", "Video", "Documentary", "Branded", "In Development"];

const shows = [
  {
    slug: "main-street",
    name: "MAIN STREET",
    tagline: "Tech & Business. Real Conversations. Unfiltered.",
    type: "Podcast",
    status: "In Production",
    episodes: "Multiple · Kigali · Doha",
    platforms: ["Spotify", "Apple", "YouTube"],
    featured: true,
    desc: "The podcast about business and technology across Africa and the Middle East. Recorded on location. City editions include Kigali and Doha, with more coming.",
  },
];

export default function ShowsPageClient() {
  const [active, setActive] = useState("All");
  const filtered = shows.filter((s) => active === "All" || s.type === active || (active === "In Development" && s.status === "In Development"));

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] bg-ink grid-overlay flex items-end pb-24 pt-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-ink/50 to-ink pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <SectionLabel>PRODUCTIONS</SectionLabel>
          <h1 className="text-5xl md:text-7xl font-black text-cream leading-tight max-w-3xl" style={{ fontFamily: "var(--font-playfair)" }}>
            Every show we make is a bet on a story worth telling.
          </h1>
          <p className="mt-6 text-lg text-cream/60 max-w-xl" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            Podcasts. Video series. Documentary. If it earns a listener's hour, it earns a place here.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-30 bg-ink/95 backdrop-blur-md border-b border-white/5 py-2">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex flex-wrap gap-3 overflow-x-auto no-scrollbar">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`flex-shrink-0 px-4 py-1.5 text-xs font-semibold border transition-all duration-200 ${
                active === f
                  ? "border-gold bg-gold text-ink"
                  : "border-white/15 text-cream/50 hover:border-white/30 hover:text-cream"
              }`}
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Shows Grid */}
      <section className="py-24 bg-ink">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          {/* Featured Show */}
          {filtered.filter((s) => s.featured).map((show) => (
            <Reveal key={show.slug}>
              <div className="mb-16 border border-gold/20 bg-slate/30 p-10 lg:p-16 grid grid-cols-1 lg:grid-cols-5 gap-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 px-4 py-2 bg-gold text-ink text-xs font-bold tracking-widest" style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.15em" }}>
                  FLAGSHIP SHOW
                </div>
                <div className="lg:col-span-3 flex flex-col gap-6">
                  <div>
                    <span className="font-accent text-xs tracking-widest text-gold" style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.2em" }}>
                      {show.type} · {show.status}
                    </span>
                    <h2 className="text-5xl md:text-7xl font-black text-cream mt-2" style={{ fontFamily: "var(--font-playfair)" }}>
                      {show.name}
                    </h2>
                  </div>
                  <p className="text-cream/70 text-base leading-relaxed max-w-lg" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                    {show.desc}
                  </p>
                  <p className="text-cream/40 text-xs tracking-widest" style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.2em" }}>
                    PODCAST · IN PRODUCTION · MULTIPLE CITIES
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={`/shows/${show.slug}`}
                      className="px-6 py-3 bg-gold text-ink font-semibold text-sm hover:bg-gold/90 transition-colors"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      Explore Show →
                    </Link>
                    {show.platforms.map((p) => (
                      <span key={p} className="px-4 py-3 border border-white/10 text-cream/50 text-xs hover:border-white/30 hover:text-cream transition-colors cursor-pointer" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-2 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl font-black text-white/5 leading-none" style={{ fontFamily: "var(--font-playfair)" }}>
                      {show.name}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}

          {/* Empty state if no other shows */}
          <Reveal delay={0.2}>
            <div className="border border-dashed border-white/10 p-16 text-center">
              <h3 className="text-2xl font-bold text-cream/30 mb-4" style={{ fontFamily: "var(--font-playfair)" }}>More in production.</h3>
              <p className="text-cream/20 text-sm" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                We don't announce until we're ready. More shows are in development — when they're ready for the world, they'll be here.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
