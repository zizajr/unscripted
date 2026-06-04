"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

// We'll show the top 4 services as large stacked Kota-style panels on the Home Page
const homeServices = [
  { 
    num: "01", 
    name: "Design", 
    desc: "From logos to billboard campaigns. Visual systems that tell your unique story.",
    tags: ["Visual Identity", "Print Media", "Billboards"] 
  },
  { 
    num: "02", 
    name: "Strategy", 
    desc: "Brand architecture aligned with market trends and consumer preferences.",
    tags: ["Market Alignment", "Consumer Preference", "Brand Architecture"] 
  },
  { 
    num: "03", 
    name: "Copywriting", 
    desc: "Words that breathe life into your brand. Authenticity and clarity in every line.",
    tags: ["Tone of Voice", "Authenticity", "Clarity"] 
  },
  { 
    num: "04", 
    name: "Multimedia", 
    desc: "End-to-end campaign services from conceptualization to execution and distribution.",
    tags: ["Photography", "Campaigns", "Social Media"] 
  },
];

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: EASE }}>
      {children}
    </motion.div>
  );
}

function ServicePanel({
  num,
  name,
  desc,
  tags,
  index,
}: {
  num: string;
  name: string;
  desc: string;
  tags: string[];
  index: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: EASE }}
      className="relative overflow-hidden group mb-6"
    >
      <div
        role="button"
        tabIndex={0}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        className="relative z-10 flex flex-col md:flex-row md:items-center justify-between p-8 md:p-16 rounded-xl transition-colors duration-500"
        style={{
          background: hovered ? "rgba(242,183,5,0.03)" : "rgba(255,255,255,0.02)",
          border: hovered ? "1px solid rgba(242,183,5,0.4)" : "1px solid rgba(255,255,255,0.05)",
        }}
      >
        {/* Background Reveal on Hover */}
        <div 
          className="absolute inset-0 z-0 opacity-0 transition-opacity duration-700 pointer-events-none"
          style={{ 
            opacity: hovered ? 0.05 : 0,
            backgroundImage: "repeating-linear-gradient(45deg, #F2B705 0, #F2B705 1px, transparent 1px, transparent 10px)" 
          }}
        />

        <div className="relative z-10 flex-1 md:pr-12">
          <div className="flex items-center gap-6 mb-6">
            <span style={{ fontFamily: "var(--font-bebas)" }} className="text-gold text-2xl tracking-widest">
              {num}
            </span>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 text-xs border border-cream/20 text-cream/60 rounded-full font-body uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <h3 style={{ fontFamily: "var(--font-display)" }} className="text-4xl md:text-5xl lg:text-6xl font-black text-cream leading-[1.1] mb-6 transition-colors duration-500 group-hover:text-gold">
            {name}
          </h3>
          
          <p className="text-cream/70 text-lg md:text-xl font-body max-w-2xl leading-relaxed">
            {desc}
          </p>
        </div>

        <div className="relative z-10 mt-8 md:mt-0 flex-shrink-0">
          <Link href="/services" className="btn-outline-cream rounded-full group-hover:border-gold group-hover:text-gold transition-colors duration-500">
            Learn More
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default function ServicesSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section ref={ref} id="services" className="bg-ink py-24 md:py-40" aria-labelledby="services-heading">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Overline & Heading */}
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ fontFamily: "var(--font-bebas)" }}
            className="text-cream/45 text-xs tracking-[0.35em] mb-6 uppercase"
          >
            WHAT WE DO
          </motion.p>

          <motion.h2
            id="services-heading"
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            style={{ fontFamily: "var(--font-display)" }}
            className="text-[clamp(40px,6vw,72px)] font-black text-cream leading-[1.05] tracking-tight mb-8"
          >
            Architects of strategy.<br />
            <em className="text-cream/50 font-light italic">Storytellers with purpose.</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-cream/65 max-w-2xl font-body leading-relaxed"
          >
            We are not just a marketing and communications agency. We are
            architects of comprehensive strategies, storytellers with a purpose,
            and innovators pushing the boundaries of creativity.
          </motion.p>
        </div>

        {/* Kota-Style Stacked Service Panels */}
        <div className="flex flex-col">
          {homeServices.map((s, i) => (
            <ServicePanel key={s.num} {...s} index={i} />
          ))}
        </div>

        {/* View All CTA */}
        <FadeUp delay={0.4}>
          <div className="mt-16 text-center md:text-left">
            <Link href="/services" className="btn-gold rounded-full">
              Explore All Services
            </Link>
          </div>
        </FadeUp>
        
      </div>
    </section>
  );
}
