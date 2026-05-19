"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ThreeBarMark from "@/components/ThreeBarMark";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-ink grid-overlay flex items-center overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/3 w-[800px] h-[800px] rounded-full bg-violet/5 blur-[120px] pointer-events-none animate-[slowPan_20s_ease-in-out_infinite_alternate]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-gold/4 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* Three-bar staggered entrance */}
            <motion.div
              className="mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                style={{ transformOrigin: "bottom" }}
              >
                <ThreeBarMark size={48} />
              </motion.div>
            </motion.div>

            <motion.p
              className="font-accent text-xs tracking-[0.25em] text-gold mb-4"
              style={{ fontFamily: "var(--font-bebas)" }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              UNSCRIPTED PRODUCTIONS
            </motion.p>

            <motion.h1
              className="text-6xl md:text-7xl lg:text-8xl font-black text-cream leading-tight tracking-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              We Don't Script The World. We Film It.
            </motion.h1>

            <motion.p
              className="mt-6 text-lg md:text-xl text-cream/60 max-w-lg leading-relaxed"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Premium video and podcast production — from Africa to the Middle East and everywhere the real story is.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.5 }}
            >
              <Link
                href="/shows"
                className="px-7 py-4 bg-gold text-ink font-semibold text-sm hover:bg-gold/90 transition-colors duration-200"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                See Our Work →
              </Link>
              <Link
                href="/shows/main-street"
                className="px-7 py-4 border border-white/20 text-cream/80 text-sm hover:border-white/40 hover:text-cream transition-all duration-200"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Listen to MAIN STREET
              </Link>
            </motion.div>
          </div>

          {/* Right: decorative typographic element */}
          <motion.div
            className="hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="relative">
              <div
                className="text-[14rem] md:text-[18rem] font-black leading-none text-white/[0.02] select-none translate-y-8"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                MS
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <div className="w-px h-32 bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
                <ThreeBarMark size={32} />
                <div className="w-px h-32 bg-gradient-to-b from-gold/40 via-violet/40 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent animate-bounce" />
      </motion.div>
    </section>
  );
}
