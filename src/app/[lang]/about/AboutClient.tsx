"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const team = [
  {
    initials: "GN",
    name: "Gavin Ngabonziza",
    title: "Business Development & Product Lead",
    accent: "#F2B705",
    image: "/team-gavin.jpg",
    bio: `Gavin Ngabonziza is the Business Development and Product lead at Unscripted. With 8 years of experience across finance, business, and product development, Gavin possesses a diverse skill set that encompasses Business Development, UIX Design, Product Design, and Project Management.\n\nHis experience includes serving as Business Development Manager at Zelomove Technologies Ltd, UIX Designer at TicketDaddy Inc., Business Development Executive at Hamz Ltd, and Honorary Consul of Namibia in Uganda. Notably, Gavin served as Legal and Development assistant to the Honorary Consul of Namibia in Uganda — Ambassador Patrick Bitature — for 5 years.`,
  },
  {
    initials: "BA",
    name: "Bolton Abdulmalik",
    title: "Creative Director",
    accent: "#8B2FC9",
    image: "/team-malik.jpg",
    bio: `A maestro orchestrating visual symphonies, Bolton Abdulmalik is the Creative Director at Unscripted. As the creative force behind the agency's visual identity, Bolton combines an eye for detail with a passion for design.\n\nNotable clients: FX Pesa, Nyaka Global, TicketDaddy.`,
  },
  {
    initials: "BB",
    name: "Bruce Bagarukayo",
    title: "Co-CTO",
    accent: "#F2B705",
    bio: `Bruce Bagarukayo is a backend engineer and technology leader with a rare combination of financial technology depth and open-source platform contribution in East Africa.\n\nHe authored and published the first Python SDK for the MTN Mobile Money API on PyPI — making it the first publicly available open-source MTN MoMo integration library for East African developers. He served as CTO at Hamz Ltd (leading the build of HamzPay mobile wallet) and CTO at TicketDaddy Inc (designing the Smart Tickets platform — 600,000+ ticket transactions). He also led the Zelomove production database schemas, MTN MoMo integration, and full DevOps pipeline.`,
  },
  {
    initials: "KE",
    name: "Kayondo Edward",
    title: "Co-CTO",
    accent: "#8B2FC9",
    image: "/team-edward.jpg",
    bio: `Edward Kayondo is a full-stack and mobile engineer who began his technology career as a self-taught developer in high school, building a functional social media platform.\n\nHe served as Tech Lead for the US Presidential campaign of Gabriel Coenho, co-founded JS Kampala (a JavaScript developer community in Kampala, Uganda), served as Software Lead at Andela, and built the HamzPay iOS application. He served as Co-CTO at TicketDaddy alongside Bruce Bagarukayo, and leads all frontend and mobile engineering at Zelomove Technologies Ltd.`,
  },
];

export default function AboutClient() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{ background: "#0A0A0A", paddingTop: 160 }}
        aria-labelledby="about-hero-heading"
      >
        {/* Grain */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
            backgroundSize: "300px",
          }}
        />
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(24px,6.25vw,80px) clamp(80px,10vw,120px)" }}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ fontFamily: "var(--font-bebas)", fontSize: 12, letterSpacing: "0.35em", color: "#F2B705", marginBottom: 32 }}
          >
            WHO WE ARE
          </motion.p>

          <motion.blockquote
            id="about-hero-heading"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px,4.5vw,64px)",
              fontWeight: 900,
              color: "#F8F5EE",
              lineHeight: 1.1,
              maxWidth: 960,
              marginBottom: 48,
            }}
          >
            &ldquo;We don&apos;t just provide services. We craft narratives,
            design experiences, and forge brand-changing connections.&rdquo;
          </motion.blockquote>

          {/* Gold rule */}
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ height: 3, background: "#F2B705", maxWidth: 80, marginBottom: 0 }}
          />
        </div>
      </section>

      {/* ── GUIDING PRINCIPLES — Cream ── */}
      <section style={{ background: "#F8F5EE" }} aria-labelledby="principles-heading">
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "clamp(80px,10vw,120px) clamp(24px,6.25vw,80px)" }}>
          <FadeUp>
            <p style={{ fontFamily: "var(--font-bebas)", fontSize: 12, letterSpacing: "0.35em", color: "#F2B705", marginBottom: 24 }}>
              HOW WE OPERATE
            </p>
            <h2 id="principles-heading" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px,4vw,52px)", fontWeight: 900, color: "#0A0A0A", lineHeight: 1.1, marginBottom: 56 }}>
              Principles we live by.
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FadeUp delay={0.1}>
              <h3 style={{ fontFamily: "var(--font-body)", fontSize: 20, fontWeight: 600, color: "#0A0A0A", marginBottom: 16 }}>
                Collaborative Approach
              </h3>
              <div style={{ height: 3, background: "#F2B705", width: 40, marginBottom: 20 }} />
              <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "#3D3D3D", lineHeight: 1.75 }}>
                At Unscripted, collaboration is ingrained in our culture. Our team operates as a cohesive unit — pooling diverse talents to deliver comprehensive solutions. This extends to every client partnership: your input is essential to every project&apos;s success.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <h3 style={{ fontFamily: "var(--font-body)", fontSize: 20, fontWeight: 600, color: "#0A0A0A", marginBottom: 16 }}>
                Commitment to Excellence
              </h3>
              <div style={{ height: 3, background: "#F2B705", width: 40, marginBottom: 20 }} />
              <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "#3D3D3D", lineHeight: 1.75 }}>
                Excellence is not just a goal — it&apos;s our standard. From the first client interaction to final delivery, we uphold the highest standards of quality, creativity, and professionalism.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── TEAM — Ink ── */}
      <section style={{ background: "#0A0A0A" }} aria-labelledby="team-page-heading">
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "clamp(80px,10vw,120px) clamp(24px,6.25vw,80px)" }}>
          <FadeUp>
            <p style={{ fontFamily: "var(--font-bebas)", fontSize: 12, letterSpacing: "0.35em", color: "rgba(248,245,238,0.45)", marginBottom: 24 }}>
              OUR TEAM
            </p>
            <h2 id="team-page-heading" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px,4vw,56px)", fontWeight: 900, color: "#F8F5EE", lineHeight: 1.1, marginBottom: 64 }}>
              The heartbeat<br />of our success.
            </h2>
          </FadeUp>

          <div className="flex flex-col gap-24 md:gap-32">
            {team.map((member, i) => {
              const isEven = i % 2 === 0;
              const numStr = String(i + 1).padStart(2, "0") + "/";
              const textColor = member.accent === "#F2B705" ? "#0A0A0A" : "#F8F5EE";
              return (
                <FadeUp key={member.name} delay={i * 0.1}>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center border-b border-white/5 pb-20 last:border-b-0 last:pb-0">
                    {/* Text Column */}
                    <div className={`col-span-1 lg:col-span-7 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                      {/* Large Number */}
                      <div
                        className="text-6xl md:text-8xl font-black mb-6 tracking-tighter"
                        style={{
                          fontFamily: "var(--font-bebas)",
                          color: "rgba(248, 245, 238, 0.08)",
                          lineHeight: 1,
                        }}
                      >
                        {numStr}
                      </div>

                      {/* Name Header Block */}
                      <div className="inline-block px-6 py-3 mb-6" style={{ backgroundColor: member.accent }}>
                        <h3
                          className="text-2xl md:text-3xl font-black tracking-tight"
                          style={{
                            fontFamily: "var(--font-body)",
                            color: textColor,
                            margin: 0,
                          }}
                        >
                          {member.name}
                        </h3>
                      </div>

                      {/* Title */}
                      <h4
                        className="text-sm font-bold tracking-widest uppercase mb-6"
                        style={{
                          fontFamily: "var(--font-bebas)",
                          color: member.accent,
                          letterSpacing: "0.2em",
                        }}
                      >
                        {member.title}
                      </h4>

                      {/* Bio */}
                      <div className="space-y-4">
                        {member.bio.split("\n\n").map((para, j) => (
                          <p
                            key={j}
                            className="text-base leading-relaxed text-cream/70"
                            style={{ fontFamily: "var(--font-body)" }}
                          >
                            {para}
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* Image Column */}
                    <div className={`col-span-1 lg:col-span-5 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                      <div
                        className="w-full relative overflow-hidden group border border-white/5"
                        style={{
                          aspectRatio: "3/4",
                          background: "#1C1C2E",
                          borderTop: `4px solid ${member.accent}`,
                        }}
                      >
                        {member.image ? (
                          <Image
                            src={member.image}
                            alt={`Photo of ${member.name}`}
                            fill
                            className="object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                            sizes="(max-width: 1024px) 100vw, 40vw"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div
                              className="absolute inset-0 opacity-20"
                              style={{
                                background: `radial-gradient(circle at center, ${member.accent} 0%, transparent 70%)`,
                              }}
                            />
                            <span
                              className="font-bold tracking-tighter"
                              style={{
                                fontFamily: "var(--font-bebas)",
                                fontSize: "clamp(80px, 12vw, 160px)",
                                color: member.accent,
                                opacity: 0.25,
                              }}
                            >
                              {member.initials}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SPLIT CTA ── */}
      <section style={{ background: "#0A0A0A", borderTop: "1px solid rgba(248,245,238,0.1)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "100px clamp(24px, 6.25vw, 80px)" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: 12,
                  letterSpacing: "0.35em",
                  color: "#F2B705",
                  marginBottom: 16,
                }}
              >
                HAVE A PROJECT?
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(44px, 5vw, 68px)",
                  fontWeight: 900,
                  color: "#F8F5EE",
                  lineHeight: 1.1,
                  marginBottom: 24,
                }}
              >
                Let&apos;s build something<br />exceptional together.
              </h2>
              <a
                href="mailto:hello@theunscripted.xyz"
                className="text-lg md:text-xl font-medium text-cream/60 hover:text-gold transition-colors duration-200"
                style={{ fontFamily: "var(--font-body)" }}
              >
                hello@theunscripted.xyz
              </a>
            </div>

            {/* Right Column */}
            <div className="flex lg:justify-end">
              <Link
                href="/contact"
                className="group relative overflow-hidden flex items-center justify-between p-8 md:p-12 w-full lg:max-w-md border border-white/10 hover:border-gold/30 bg-white/2 hover:bg-gold/5 transition-all duration-300"
              >
                <div className="z-10">
                  <span
                    className="block text-xs font-bold tracking-widest text-cream/40 group-hover:text-gold/80 transition-colors uppercase mb-2"
                    style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.15em" }}
                  >
                    Start a Project
                  </span>
                  <span
                    className="block text-xl md:text-2xl font-bold text-cream"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Get in touch with us
                  </span>
                </div>
                <div
                  className="w-12 h-12 rounded-full border border-white/20 group-hover:border-gold group-hover:bg-gold flex items-center justify-center text-cream group-hover:text-ink transition-all duration-300"
                  aria-hidden="true"
                >
                  <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
