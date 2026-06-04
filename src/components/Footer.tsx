import Link from "next/link";
import ThreeBarMark from "./ThreeBarMark";

const navLinks = [
  { href: "/about",    label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work",     label: "Work" },
  { href: "/main-street", label: "MAIN STREET" },
  { href: "/contact",  label: "Contact" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms",          label: "Terms of Use" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{ background: "#0A0A0A", borderTop: "1px solid #3D3D3D" }}
      role="contentinfo"
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "48px clamp(24px, 6.25vw, 80px) 32px",
        }}
      >
        {/* Main row */}
        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          style={{ marginBottom: "40px" }}
        >
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0"
            aria-label="Unscripted — home"
          >
            <ThreeBarMark size={24} />
            <span
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "16px",
                letterSpacing: "0.2em",
                color: "#F8F5EE",
              }}
            >
              UNSCRIPTED
            </span>
          </Link>

          {/* Nav links */}
          <nav
            className="flex flex-wrap gap-6"
            aria-label="Footer navigation"
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  color: "rgba(248,245,238,0.5)",
                  transition: "color 0.2s ease",
                }}
                className="hover:text-cream"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Email */}
          <a
            href="mailto:hello@theunscripted.xyz"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              fontWeight: 600,
              color: "#F2B705",
              transition: "color 0.2s ease",
            }}
            className="hover:text-cream shrink-0"
          >
            hello@theunscripted.xyz
          </a>
        </div>

        {/* Divider */}
        <div
          style={{ height: "1px", background: "#3D3D3D", marginBottom: "24px" }}
          aria-hidden="true"
        />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "12px",
              color: "rgba(248,245,238,0.3)",
            }}
          >
            © {year} Unscripted Technologies Limited. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            {legalLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "12px",
                  color: "rgba(248,245,238,0.3)",
                  transition: "color 0.2s ease",
                }}
                className="hover:text-cream/60"
              >
                {label}
              </Link>
            ))}

            {/* Language switcher */}
            <span
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "11px",
                letterSpacing: "0.15em",
                color: "rgba(248,245,238,0.2)",
              }}
            >
              EN · FR · العربية
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
