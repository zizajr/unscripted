"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/Reveal";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sent" | "duplicate">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sent");
  }

  return (
    <section className="py-24 bg-ink border-t border-white/5">
      <div className="max-w-xl mx-auto px-6 text-center">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-cream mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
            New episodes. First.
          </h2>
          <p className="text-cream/50 text-base mb-8" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            Subscribe and get MAIN STREET episodes, production updates, and Unscripted news straight to your inbox. No noise.
          </p>
          <AnimatePresence mode="wait">
            {status === "idle" ? (
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="flex gap-0"
              >
                <input
                  type="email"
                  required
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-slate border border-white/10 border-r-0 text-cream px-4 py-3 text-sm placeholder-cream/20 focus:outline-none focus:border-gold transition-colors"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                />
                <button
                  type="submit"
                  className="bg-gold text-ink font-semibold text-sm px-6 py-3 hover:bg-gold/90 transition-colors flex-shrink-0"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  Subscribe
                </button>
              </motion.form>
            ) : (
              <motion.p
                key="confirmation"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-gold font-semibold text-base border border-gold/30 py-4 px-8"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                You're in. New episodes and updates — nothing else.
              </motion.p>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
