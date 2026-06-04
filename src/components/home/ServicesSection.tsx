"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";

const services = [
  {
    num: "01",
    name: "Branding & Identity",
    desc: "Visual identity systems, logos, collateral — narratives that resonate.",
  },
  {
    num: "02",
    name: "Strategy",
    desc: "Brand architecture aligned with market trends and consumer preferences.",
  },
  {
    num: "03",
    name: "Communications & PR",
    desc: "Reputation management, media relations, crisis communication, publications.",
  },
  {
    num: "04",
    name: "Marketing & Digital",
    desc: "Data-driven strategies amplifying your brand across online platforms.",
  },
  {
    num: "05",
    name: "Design",
    desc: "From logos to billboard campaigns. Visual systems that tell your unique story.",
  },
  {
    num: "06",
    name: "Media Production",
    desc: "Videography, photography, social media management, campaign production.",
  },
  {
    num: "07",
    name: "Advertising",
    desc: "Campaigns that are experiences — storytelling through visuals, words, and emotion.",
  },
  {
    num: "08",
    name: "Business Development",
    desc: "Strategic partnerships through established stakeholder relationships.",
  },
  {
    num: "09",
    name: "Product Launches",
    desc: "Meticulously planned launches — event coordination, market integration, multimedia.",
  },
  {
    num: "10",
    name: "Web & App Design",
    desc: "Responsive digital experiences that engage and convert.",
  },
  {
    num: "11",
    name: "Copywriting",
    desc: "Words that breathe life into your brand. Authenticity and clarity in every line.",
  },
  {
    num: "12",
    name: "CSR Implementation",
    desc: "Meaningful CSR initiatives aligned with your brand values.",
  },
];

function ServiceRow({
  num,
  name,
  desc,
  index,
  inView,
}: {
  num: string;
  name: string;
  desc: string;
  index: number;
  inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.05,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      <div
        role="article"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        tabIndex={0}
        style={{
          borderBottom: "1px solid rgba(242,183,5,0.2)",
          padding: "24px 0",
          display: "flex",
          alignItems: "center",
          gap: "24px",
          cursor: "default",
          transition: "padding 300ms ease",
          paddingLeft: hovered ? "12px" : "0px",
        }}
      >
        {/* Number */}
        <span
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "15px",
            color: "#F2B705",
            letterSpacing: "0.1em",
            minWidth: "36px",
            opacity: hovered ? 1 : 0.5,
            transition: "opacity 300ms ease",
          }}
        >
          {num}
        </span>

        {/* Name */}
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(22px, 3vw, 36px)",
            fontWeight: 700,
            color: hovered ? "#F2B705" : "#F8F5EE",
            lineHeight: 1.1,
            flex: 1,
            transition: "color 300ms ease",
          }}
        >
          {name}
        </span>

        {/* Descriptor — reveals on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.25 }}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                color: "rgba(248,245,238,0.55)",
                maxWidth: 300,
                textAlign: "right",
                lineHeight: 1.5,
              }}
              className="hidden md:block"
            >
              {desc}
            </motion.span>
          )}
        </AnimatePresence>

        {/* Arrow */}
        <span
          style={{
            color: hovered ? "#F2B705" : "rgba(248,245,238,0.2)",
            fontSize: "20px",
            transition: "color 300ms ease, transform 300ms ease",
            transform: hovered ? "translateX(4px)" : "translateX(0)",
          }}
        >
          →
        </span>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="services"
      style={{ background: "#0A0A0A" }}
      aria-labelledby="services-heading"
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
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "12px",
            letterSpacing: "0.35em",
            color: "rgba(248,245,238,0.45)",
            marginBottom: "24px",
          }}
        >
          WHAT WE DO
        </motion.p>

        {/* Section headline */}
        <motion.h2
          id="services-heading"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(40px, 5vw, 64px)",
            fontWeight: 900,
            color: "#F8F5EE",
            lineHeight: 1.05,
            marginBottom: "24px",
          }}
        >
          Architects of strategy.<br />
          <em style={{ fontStyle: "italic" }}>Storytellers with purpose.</em>
        </motion.h2>

        {/* Intro body */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "18px",
            color: "rgba(248,245,238,0.65)",
            maxWidth: 640,
            lineHeight: 1.7,
            marginBottom: "64px",
          }}
        >
          We are not just a marketing and communications agency. We are
          architects of comprehensive strategies, storytellers with a purpose,
          and innovators pushing the boundaries of creativity. Explore our
          diverse offerings crafted to propel you toward new heights.
        </motion.p>

        {/* Gold top rule */}
        <div style={{ height: "3px", background: "#F2B705", marginBottom: "0" }} />

        {/* Service rows */}
        <div role="list">
          {services.map((s, i) => (
            <ServiceRow key={s.num} {...s} index={i} inView={inView} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{ marginTop: "48px" }}
        >
          <Link
            href="/services"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "16px",
              fontWeight: 600,
              color: "#F2B705",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              transition: "opacity 0.2s ease",
            }}
            className="hover:opacity-70"
          >
            Explore All Services →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
