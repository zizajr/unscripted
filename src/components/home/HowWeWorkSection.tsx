"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const pillars = [
  {
    num: "01",
    title: "Collaborative Partnership",
    body: "We view our clients as partners in a shared journey. Your vision is not just understood — it's integrated into every aspect of our execution. Your success is our success.",
  },
  {
    num: "02",
    title: "The Art of Branding",
    body: "We create holistic brand experiences — integrating design, strategy, and storytelling to establish a distinctive brand identity that goes beyond visuals.",
  },
  {
    num: "03",
    title: "Innovation First",
    body: "We thrive on pushing boundaries and delivering solutions that exceed expectations. From avant-garde designs to guerrilla campaigns, innovation is in our DNA.",
  },
  {
    num: "04",
    title: "Digital Prowess",
    body: "From innovative digital strategies to immersive experiences, our digital expertise ensures your brand remains relevant and impactful at every touchpoint.",
  },
  {
    num: "05",
    title: "Strategic Communication",
    body: "Whether crafting compelling narratives or managing crisis communication, we ensure your message resonates with your brand voice and delivers the desired result.",
  },
  {
    num: "06",
    title: "First-Principles Strategy",
    body: "Every service we offer is built from first principles. Every client need is a priority — with dedicated resources ensuring every campaign, design, or narrative exceeds its goal.",
  },
];

function PillarCard({
  num,
  title,
  body,
  index,
  inView,
}: {
  num: string;
  title: string;
  body: string;
  index: number;
  inView: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className="group"
      style={{
        background: "#1C1C2E",
        borderTop: "3px solid #F2B705",
        padding: "36px 32px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        transition: "transform 400ms ease, box-shadow 400ms ease",
        cursor: "default",
      }}
      whileHover={{ y: -6, transition: { duration: 0.4 } }}
    >
      {/* Number */}
      <span
        style={{
          fontFamily: "var(--font-bebas)",
          fontSize: "40px",
          color: "#F2B705",
          lineHeight: 1,
        }}
      >
        {num}
      </span>

      {/* Title */}
      <h3
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "18px",
          fontWeight: 600,
          color: "#F8F5EE",
          lineHeight: 1.3,
        }}
      >
        {title}
      </h3>

      {/* Gold micro-rule */}
      <div style={{ height: "1px", background: "rgba(242,183,5,0.25)", width: 40 }} />

      {/* Body */}
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "15px",
          color: "rgba(248,245,238,0.65)",
          lineHeight: 1.7,
        }}
      >
        {body}
      </p>
    </motion.article>
  );
}

export default function HowWeWorkSection({ dict }: { dict?: any }) {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="how-we-work"
      style={{ background: "#0A0A0A" }}
      aria-labelledby="how-we-work-heading"
    >
      {/* Grain overlay */}
      <div
        className="relative"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
          backgroundSize: "300px",
        }}
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
            {dict?.overline || "HOW WE WORK"}
          </motion.p>

          {/* Section headline */}
          <motion.h2
            id="how-we-work-heading"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 4vw, 56px)",
              fontWeight: 900,
              color: "#F8F5EE",
              lineHeight: 1.1,
              marginBottom: "64px",
              maxWidth: 600,
            }}
          >
            {dict?.headline || "Six principles behind every engagement."}
          </motion.h2>

          {/* 3×2 grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
            style={{ background: "rgba(242,183,5,0.08)" }}
          >
            {(dict?.pillars || pillars).map((p: any, i: number) => (
              <PillarCard key={p.num} {...p} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
