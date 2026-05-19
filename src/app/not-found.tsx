import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-ink grid-overlay flex items-center justify-center">
      <div className="text-center px-6">
        <p
          className="text-[8rem] font-bold text-white/5 leading-none mb-0 select-none"
          style={{ fontFamily: "var(--font-bebas)" }}
        >
          404
        </p>
        <SectionLabel>404</SectionLabel>
        <h1
          className="text-4xl md:text-5xl font-bold text-cream mb-6"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          This page went off-script.
        </h1>
        <p className="text-cream/50 text-base max-w-md mx-auto mb-10 leading-relaxed" style={{ fontFamily: "var(--font-space-grotesk)" }}>
          The page you're looking for isn't here. It may have moved, or it may never have existed. Either way, the rest of the site is right below.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/"
            className="px-7 py-4 bg-gold text-ink font-semibold text-sm hover:bg-gold/90 transition-colors"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Back to Home →
          </Link>
          <Link
            href="/shows"
            className="px-7 py-4 border border-white/15 text-cream/70 text-sm hover:border-white/30 hover:text-cream transition-all"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Go to Shows
          </Link>
        </div>
      </div>
    </section>
  );
}
