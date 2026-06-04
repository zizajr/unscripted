"use client";
import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import ThreeBarMark from "./ThreeBarMark";

const navLinks = [
  { href: "/about",       label: "About" },
  { href: "/services",    label: "Services" },
  { href: "/work",        label: "Work" },
  { href: "/main-street", label: "MAIN STREET" },
];

const langOptions = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
  { code: "ar", label: "العربية" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("en");

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Skip to main content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-gold focus:text-ink focus:font-semibold focus:rounded"
      >
        Skip to main content
      </a>

      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b"
            : ""
        }`}
        style={{
          background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
          borderColor: scrolled ? "rgba(242,183,5,0.30)" : "transparent",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 clamp(24px, 6.25vw, 80px)",
          }}
          className="h-16 md:h-20 flex items-center justify-between gap-8"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0 group"
            aria-label="Unscripted — home"
          >
            <ThreeBarMark size={28} />
            <span
              className="text-cream tracking-[0.2em] text-lg leading-none"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              UNSCRIPTED
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Primary navigation"
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                  label === "MAIN STREET"
                    ? "text-gold hover:text-gold/80"
                    : pathname.startsWith(href)
                    ? "text-gold"
                    : "text-cream/70 hover:text-cream"
                }`}
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {label}
              </Link>
            ))}

            {/* Language switcher */}
            <div
              className="flex items-center gap-2 text-xs text-cream/40"
              style={{ fontFamily: "var(--font-accent)", letterSpacing: "0.1em" }}
              role="group"
              aria-label="Language switcher"
            >
              {langOptions.map(({ code, label }, i) => (
                <span key={code} className="flex items-center gap-2">
                  <button
                    onClick={() => setLang(code)}
                    className={`transition-colors duration-200 cursor-pointer ${
                      lang === code ? "text-gold" : "text-cream/40 hover:text-cream/70"
                    }`}
                    aria-label={`Switch to ${label}`}
                    aria-pressed={lang === code}
                  >
                    {label}
                  </button>
                  {i < langOptions.length - 1 && (
                    <span className="text-cream/20">·</span>
                  )}
                </span>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="btn-gold text-sm px-6 py-2.5 rounded-full"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Get in Touch
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 ml-auto"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span
              className={`block w-6 h-px bg-cream transition-all duration-300 ${
                open ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-cream transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-cream transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="fixed inset-0 z-40 flex flex-col"
            style={{ background: "#0A0A0A" }}
          >
            {/* Header row in overlay */}
            <div className="flex items-center justify-between px-6 h-16">
              <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
                <ThreeBarMark size={24} />
                <span
                  className="text-cream tracking-[0.2em] text-lg"
                  style={{ fontFamily: "var(--font-bebas)" }}
                >
                  UNSCRIPTED
                </span>
              </Link>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="p-2 text-cream/60 hover:text-cream transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Nav links */}
            <nav
              className="flex flex-col px-8 pt-12 gap-2 flex-1"
              aria-label="Mobile navigation"
            >
              {navLinks.map(({ href, label }, i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                >
                  <Link
                    href={href}
                    className={`block py-3 border-b border-white/5 transition-colors duration-200 ${
                      label === "MAIN STREET"
                        ? "text-gold"
                        : "text-cream hover:text-gold"
                    }`}
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(32px, 8vw, 48px)",
                      fontWeight: 700,
                      lineHeight: 1.1,
                    }}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom: lang switcher + CTA */}
            <div className="px-8 pb-12 flex flex-col gap-6">
              {/* Language switcher */}
              <div
                className="flex items-center gap-3 text-sm"
                style={{ fontFamily: "var(--font-accent)", letterSpacing: "0.15em" }}
              >
                {langOptions.map(({ code, label }, i) => (
                  <span key={code} className="flex items-center gap-3">
                    <button
                      onClick={() => setLang(code)}
                      className={`transition-colors duration-200 ${
                        lang === code ? "text-gold" : "text-cream/40 hover:text-cream/70"
                      }`}
                    >
                      {label}
                    </button>
                    {i < langOptions.length - 1 && (
                      <span className="text-cream/20">·</span>
                    )}
                  </span>
                ))}
              </div>

              <Link
                href="/contact"
                className="btn-gold text-center rounded-full text-base"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
