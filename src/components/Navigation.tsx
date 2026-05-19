"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import ThreeBarMark from "./ThreeBarMark";

const navLinks = [
  { href: "/shows",   label: "Shows" },
  { href: "/work",    label: "Work" },
  { href: "/about",   label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const pathname  = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-ink/95 backdrop-blur-md border-b border-white/5" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Unscripted home">
            <ThreeBarMark size={24} />
            <span
              className="font-accent text-xl tracking-widest text-cream"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              UNSCRIPTED
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                  pathname.startsWith(href) ? "text-gold" : "text-cream/70 hover:text-cream"
                }`}
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 px-5 py-2 border border-gold text-gold text-sm font-semibold rounded-sm hover:bg-gold hover:text-ink transition-all duration-200"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Work With Us
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span className={`block w-6 h-px bg-cream transition-all duration-300 ${open ? "rotate-45 translate-y-2.5" : ""}`} />
            <span className={`block w-6 h-px bg-cream transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px bg-cream transition-all duration-300 ${open ? "-rotate-45 -translate-y-2.5" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-ink/98 flex flex-col pt-24 px-8 gap-6"
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="font-display text-3xl font-bold text-cream hover:text-gold transition-colors"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-4 self-start px-6 py-3 border border-gold text-gold font-semibold hover:bg-gold hover:text-ink transition-all duration-200"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Work With Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
