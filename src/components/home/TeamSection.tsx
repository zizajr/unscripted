"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const team = [
  {
    initials: "GN",
    name: "Gavin Ngabonziza",
    title: "Business Development & Product Lead",
    bio: "8 years across finance, business, and product development. UIX Design, Product Design, and Project Management.",
    accent: "#F2B705",
    image: "/team-gavin.jpg",
  },
  {
    initials: "BA",
    name: "Bolton Abdulmalik",
    title: "Creative Director",
    bio: "A maestro orchestrating visual symphonies. Leads creative with an eye for detail and a passion for design.",
    accent: "#8B2FC9",
    image: "/team-malik.jpg",
  },
  /*
  {
    initials: "BB",
    name: "Bruce Bagarukayo",
    title: "Co-CTO",
    bio: "Backend engineer and technology leader. Author of the first MTN MoMo SDK for East Africa on PyPI.",
    accent: "#F2B705",
  },
  */
  {
    initials: "KE",
    name: "Kayondo Edward",
    title: "Co-CTO",
    bio: "Full-stack and mobile engineer. Former Tech Lead for a US Presidential campaign. Co-founder of JS Kampala.",
    accent: "#8B2FC9",
    image: "/team-edward.jpg",
  },
];

function TeamCard({
  initials,
  name,
  title,
  bio,
  accent,
  image,
  index,
  inView,
}: {
  initials: string;
  name: string;
  title: string;
  bio: string;
  accent: string;
  image?: string;
  index: number;
  inView: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        transition: "transform 400ms ease",
      }}
      whileHover={{ y: -4, transition: { duration: 0.4 } }}
    >
      {/* Photo / initials block */}
      <div
        style={{
          width: "100%",
          aspectRatio: "1 / 1",
          background: "#1C1C2E",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          borderTop: `3px solid ${accent}`,
        }}
      >
        {image ? (
          <Image
            src={image}
            alt={`Photo of ${name}`}
            fill
            className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
            sizes="(max-width: 640px) 100vw, 25vw"
          />
        ) : (
          <>
            {/* Subtle background pattern */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                background: `radial-gradient(ellipse at bottom right, ${accent}18 0%, transparent 70%)`,
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(40px, 6vw, 64px)",
                fontWeight: 900,
                color: accent,
                position: "relative",
                zIndex: 1,
                opacity: 0.7,
              }}
            >
              {initials}
            </span>
          </>
        )}
      </div>

      {/* Info */}
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "17px",
            fontWeight: 600,
            color: "#F8F5EE",
            lineHeight: 1.2,
          }}
        >
          {name}
        </p>
        <p
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "12px",
            letterSpacing: "0.2em",
            color: accent,
            lineHeight: 1,
          }}
        >
          {title}
        </p>
        <div
          style={{
            height: "1px",
            background: "rgba(242,183,5,0.15)",
            width: 32,
            margin: "4px 0",
          }}
        />
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "14px",
            color: "rgba(248,245,238,0.55)",
            lineHeight: 1.65,
          }}
        >
          {bio}
        </p>
      </div>
    </motion.article>
  );
}

export default function TeamSection() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="team"
      style={{ background: "#0A0A0A" }}
      aria-labelledby="team-heading"
    >
      {/* Grain overlay */}
      <div
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
            OUR TEAM
          </motion.p>

          {/* Headline */}
          <motion.h2
            id="team-heading"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 4vw, 56px)",
              fontWeight: 900,
              color: "#F8F5EE",
              lineHeight: 1.1,
              marginBottom: "24px",
            }}
          >
            The heartbeat<br />of our success.
          </motion.h2>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "18px",
              color: "rgba(248,245,238,0.60)",
              maxWidth: 640,
              lineHeight: 1.75,
              marginBottom: "64px",
            }}
          >
            Comprising seasoned professionals with diverse expertise across
            marketing, strategy, technology, production, and communications.
            Our collective experience is the backbone of our capabilities —
            underscored by creativity, strategy, technology know-how, and
            proven industry success.
          </motion.p>

          {/* 3-column grid to balance 3 members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <TeamCard key={member.name} {...member} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
