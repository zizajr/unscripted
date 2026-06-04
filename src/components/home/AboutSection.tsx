"use client";
import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const FADE_UP = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.1,
      ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
    },
  }),
};

export default function AboutSection() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="about"
      style={{ background: "#F8F5EE" }}
      aria-labelledby="about-heading"
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "clamp(80px, 10vw, 120px) clamp(24px, 6.25vw, 80px)",
        }}
      >
        {/* Overline */}
        <motion.p
          custom={0}
          variants={FADE_UP}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "12px",
            letterSpacing: "0.35em",
            color: "#F2B705",
            marginBottom: "32px",
          }}
        >
          WHO WE ARE
        </motion.p>

        {/* Pull quote */}
        <motion.blockquote
          id="about-heading"
          custom={1}
          variants={FADE_UP}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(36px, 4.5vw, 56px)",
            fontWeight: 900,
            fontStyle: "normal",
            color: "#0A0A0A",
            lineHeight: 1.1,
            maxWidth: 900,
            marginBottom: "64px",
          }}
        >
          &ldquo;Our secret sauce is the ability to seamlessly blend
          creativity with strategy.&rdquo;
        </motion.blockquote>

        {/* Gold rule */}
        <motion.div
          custom={2}
          variants={FADE_UP}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            height: "3px",
            background: "#F2B705",
            marginBottom: "56px",
            maxWidth: 80,
          }}
        />

        {/* Two-column body */}
        <motion.div
          custom={3}
          variants={FADE_UP}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16"
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "17px",
                color: "#3D3D3D",
                lineHeight: 1.75,
                marginBottom: "24px",
              }}
            >
              We are the dark horse of branding, marketing, and communications
              for established businesses, brands, and startups that believe in
              achieving the extraordinary.
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "17px",
                color: "#3D3D3D",
                lineHeight: 1.75,
              }}
            >
              Our work is centered on reimagining the epitome of our clients&apos;
              success across various industries. With creativity that defies
              reason, our diverse in-house talent ensures that all client needs
              are met — and a little more.
            </p>
          </div>
          <div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "17px",
                color: "#3D3D3D",
                lineHeight: 1.75,
                marginBottom: "24px",
              }}
            >
              In a world inundated with content, we help our clients cut through
              the noise with innovative campaigns that capture the essence of their
              brands and captivate targeted audiences.
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "17px",
                color: "#3D3D3D",
                lineHeight: 1.75,
              }}
            >
              Unscripted&apos;s seamless collaboration with clients makes us an
              extension of your team — ensuring you grow with guided strategy to
              achieve targeted results.
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          custom={4}
          variants={FADE_UP}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{ marginTop: "48px" }}
        >
          <Link
            href="/contact"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "16px",
              fontWeight: 600,
              color: "#0A0A0A",
              borderBottom: "2px solid #F2B705",
              paddingBottom: "2px",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              transition: "color 0.2s ease",
            }}
            className="hover:opacity-70"
          >
            Let us know what you&apos;re building →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
