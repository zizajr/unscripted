import Link from "next/link";
import ThreeBarMark from "./ThreeBarMark";

const productions = [
  { href: "/shows",       label: "Shows" },
  { href: "/shows/main-street", label: "MAIN STREET" },
  { href: "#",            label: "In Development" },
];
const company = [
  { href: "/about",   label: "About" },
  { href: "/work",    label: "Work With Us" },
  { href: "/contact", label: "Contact" },
];
const listen = [
  { href: "https://open.spotify.com", label: "Spotify", external: true },
  { href: "https://podcasts.apple.com", label: "Apple Podcasts", external: true },
  { href: "https://youtube.com", label: "YouTube", external: true },
];
const follow = [
  { href: "https://instagram.com/unscripted.fm", label: "Instagram", external: true },
  { href: "https://linkedin.com",                label: "LinkedIn",  external: true },
  { href: "https://twitter.com",                 label: "X/Twitter", external: true },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/8 bg-ink">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <ThreeBarMark size={20} />
              <span
                className="font-accent text-lg tracking-widest text-cream"
                style={{ fontFamily: "var(--font-bebas)" }}
              >
                UNSCRIPTED
              </span>
            </div>
            <p className="text-sm text-cream/50 leading-relaxed max-w-xs" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              Making shows that matter, from cities that are writing the future.
            </p>
            <a
              href="mailto:hello@unscripted.fm"
              className="text-sm text-gold hover:text-gold/80 transition-colors"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              hello@unscripted.fm
            </a>
          </div>

          {/* Nav columns */}
          <FooterCol title="PRODUCTIONS" links={productions} />
          <FooterCol title="COMPANY"     links={company} />
          <FooterCol title="LISTEN"      links={listen} />
          <FooterCol title="FOLLOW"      links={follow} />
        </div>

        {/* Bottom row */}
        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-cream/30" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            © {year} Unscripted Productions. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-cream/30" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            <span>Podcast. Documentary. Branded Content.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { href: string; label: string; external?: boolean }[] }) {
  return (
    <div className="flex flex-col gap-3">
      <p
        className="text-xs font-medium tracking-widest text-cream/40 uppercase"
        style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.15em" }}
      >
        {title}
      </p>
      {links.map(({ href, label, external }) => (
        <Link
          key={label}
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="text-sm text-cream/60 hover:text-cream transition-colors"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          {label}
        </Link>
      ))}
    </div>
  );
}
