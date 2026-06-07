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

export default function AboutSection({ dict }: { dict?: any }) {
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
          {dict?.overline || "WHO WE ARE"}
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
          {dict?.quote || "“Our secret sauce is the ability to seamlessly blend creativity with strategy.”"}
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

        {/* Two-column layout with values grid */}
        <motion.div
          custom={3}
          variants={FADE_UP}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20"
        >
          {/* Left Column: Big Editorial Statement */}
          <div className="lg:col-span-5">
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(24px, 2.5vw, 32px)",
                fontWeight: 700,
                color: "#0A0A0A",
                lineHeight: 1.3,
              }}
            >
              {dict?.body || "We are the digital agency built for brands that believe in achieving the extraordinary."}
            </p>
          </div>

          {/* Right Column: Values Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {(dict?.values || [
              {
                num: "01",
                title: "Uncompromising Creativity",
                desc: "We push boundaries with bold, editorial design and narratives that demand attention.",
              },
              {
                num: "02",
                title: "Guided Strategy",
                desc: "Every campaign and design system is anchored in rigorous market insight to drive business results.",
              },
              {
                num: "03",
                title: "Cutting the Noise",
                desc: "We craft targeted experiences that isolate your message from the background static.",
              },
              {
                num: "04",
                title: "Seamless Integration",
                desc: "Operating as an extension of your business to execute with speed and cohesion.",
              },
            ]).map((item: any) => (
              <div key={item.title} className="flex flex-col gap-3">
                <span
                  style={{
                    fontFamily: "var(--font-accent)",
                    fontSize: "14px",
                    letterSpacing: "0.15em",
                    color: "#F2B705",
                  }}
                >
                  {item.num} /
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#0A0A0A",
                    lineHeight: 1.2,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "15px",
                    color: "#3D3D3D",
                    lineHeight: 1.6,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
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
            {dict?.cta || "Let us know what you're building →"}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
