"use client";
import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: EASE }}>
      {children}
    </motion.div>
  );
}

// ★ = asterisked / priority services — full expanded copy
const services = [
  // ── ★ Priority ──
  {
    num: "01", name: "Design",
    body: `In the realm of design, we go beyond aesthetics.\n\nOur team delves deep into the core of your brand, crafting visual identities that not only captivate but communicate your unique story.\n\nFrom logos, collateral, print media, and billboards to visual identity systems, we craft designs that not only captivate but also communicate your brand's unique story.`,
  },
  {
    num: "02", name: "Copywriting",
    body: `We are maestros when it comes to words.\n\nOur copywriting services breathe life into your brand's story and ensure that your brand communicates with authenticity and clarity, leaving a lasting impression on your audience.`,
  },
  {
    num: "03", name: "Strategy",
    body: `We are your brand strategy architects tasked with formulating comprehensive strategies that align with market trends and consumer preferences.\n\nWe understand that strategy in branding is the bedrock of a successful brand and our team ensures that every aspect of your brand reflects a cohesive and impactful narrative.\n\nBy aligning your brand with market trends, it resonates with the target audience and stands out from the competition.`,
  },
  {
    num: "04", name: "Business Development",
    body: `Strategic partnerships and business growth go hand in hand.\n\nAt Unscripted, we spearhead your business development initiatives through existing relationships with various stakeholders and partners that propel your brand to new heights.\n\nOur team identifies opportunities, establishes connections, and formulates strategies that contribute to your brand's sustained success.`,
  },
  {
    num: "05", name: "Publications",
    body: `Your story deserves to be told.\n\nOur publication services encompass autobiographies, ghostwriting, and magazine creation, ensuring your narrative reaches wider audiences through compelling and professionally crafted publications.\n\nWe collaborate with you to bring your narrative to life, ensuring that your story reaches wider audiences through all mediums.\n\nPublished titles available at amazon.com/dp/ccD9Kq4. Partner publications via bizmartholdings.com — including Trump Unyielding by Newton Isaac.`,
  },
  {
    num: "06", name: "Reputation Management",
    body: `In an era of constant scrutiny, our reputation management services safeguard your brand's integrity and identity.\n\nFrom crafting biographies to managing crisis communication, we navigate the intricate landscape of public perception with finesse to either improve or preserve your reputation.`,
  },
  {
    num: "07", name: "Production & Multimedia Management",
    body: `At Unscripted, we understand that a captivating online presence is non-negotiable.\n\nOur production and digital services — including web design, photography, interactive VR, and social media management — are geared towards creating a seamless and engaging experience for your audience.`,
  },
  {
    num: "08", name: "Web & App Design",
    body: `Our web design services ensure your virtual storefront leaves a lasting impression.\n\nWe combine aesthetics with functionality, creating a visually stunning and user-friendly experience for a seamless online interaction for your clients.\n\nOur responsive designs and user-friendly websites not only showcase your brand but also engage and convert visitors.`,
  },
  {
    num: "09", name: "Social Media Management",
    body: `In the age of social connectivity, managing your online presence is paramount.\n\nUnscripted curates and manages social media content that aligns with your brand's voice. From content creation to community engagement, we ensure that your brand remains relevant and resonates with your audience.`,
  },
  {
    num: "10", name: "Media Campaign Production & Distribution",
    body: `Our end-to-end media campaign services ensure your message reaches the right audience through quality production and effective distribution.\n\nWe take a holistic approach, from conceptualization to execution, to maximize the impact of your campaigns.`,
  },
  {
    num: "11", name: "UIX Design",
    body: `User experience is at the forefront of design.\n\nOur UI/UX design services enhance the usability and appeal of any digital interfaces, ensuring a seamless and enjoyable interaction for your audience.`,
  },
  // ── Supporting ──
  {
    num: "12", name: "Branding & Identity",
    body: `At Unscripted, we believe that branding is not just about visuals; it's about creating a compelling narrative that resonates with your audience.\n\nOur design services go beyond aesthetics, delving deep into the essence of your brand. Explore our diverse offerings tailored to elevate your brand's presence and impact.`,
  },
  {
    num: "13", name: "Advertising",
    body: `Our advertising campaigns are more than promotions; they are experiences. We create engaging and thought-provoking narratives that resonate with your audience leaving a memorable and impactful impression.\n\nWe believe in the power of storytelling through visuals, words, and emotions, ensuring that your brand stands out in any crowded marketplace.`,
  },
  {
    num: "14", name: "Marketing & Digital",
    body: `Navigating the dynamic landscape of marketing requires expertise and innovation.\n\nOur marketing services encompass a spectrum of strategies, from digital and influencer marketing to impactful product launches, ensuring your brand stands out in the crowded market.`,
  },
  {
    num: "15", name: "Communications & PR",
    body: `Effective communication is the backbone of brand success.\n\nOur communications and public relations services offer a comprehensive suite, from reputation management to impactful publications, ensuring your brand's narrative is not just heard but embraced.`,
  },
  {
    num: "16", name: "Product Launches",
    body: `First impressions matter and at Unscripted, we meticulously plan your product launch to captivate audiences, generate anticipation, and set the stage for unrivaled product success.\n\nFrom event coordination, market integration, and multimedia campaigns, we orchestrate a seamless experience that leaves a memorable impression.`,
  },
  {
    num: "17", name: "CSR Implementation",
    body: `Corporate Social Investment/Responsibility is not just a choice; it's a responsibility.\n\nWe guide and implement CSR initiatives that align with your brand values, demonstrating a commitment to societal well-being and responsible business practices. From community engagement to sustainability projects, we help your brand make a meaningful impact.`,
  },
];

function ServiceBlock({ num, name, body, index }: { num: string; name: string; body: string; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: Math.min(index * 0.05, 0.4), ease: EASE }}
      style={{
        borderBottom: "1px solid rgba(242,183,5,0.15)",
        paddingBottom: 56,
        marginBottom: 56,
        display: "grid",
        gridTemplateColumns: "clamp(60px,8vw,120px) 1fr",
        gap: "clamp(24px,4vw,64px)",
        alignItems: "start",
      }}
    >
      {/* Number */}
      <div>
        <span style={{
          fontFamily: "var(--font-bebas)",
          fontSize: "clamp(40px,5vw,64px)",
          color: "#F2B705",
          lineHeight: 1,
          opacity: index < 11 ? 1 : 0.5,
        }}>
          {num}
        </span>
      </div>

      {/* Content */}
      <div>
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(24px,3vw,40px)",
          fontWeight: 700,
          color: "#F8F5EE",
          lineHeight: 1.15,
          marginBottom: 24,
        }}>
          {name}
        </h2>
        {/* 3px gold micro-rule */}
        <div style={{ height: 3, background: "#F2B705", width: 40, marginBottom: 24 }} />
        {body.split("\n\n").map((para, i) => (
          <p key={i} style={{
            fontFamily: "var(--font-body)",
            fontSize: 16,
            color: "rgba(248,245,238,0.65)",
            lineHeight: 1.8,
            marginBottom: 16,
          }}>
            {para}
          </p>
        ))}
      </div>
    </motion.article>
  );
}

export default function ServicesClient() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background: "#0A0A0A", paddingTop: 160 }} aria-labelledby="services-page-heading">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
          backgroundSize: "300px",
        }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(24px,6.25vw,80px) clamp(80px,10vw,120px)" }}>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            style={{ fontFamily: "var(--font-bebas)", fontSize: 12, letterSpacing: "0.35em", color: "rgba(248,245,238,0.45)", marginBottom: 24 }}>
            WHAT WE DO
          </motion.p>
          <motion.h1 id="services-page-heading"
            initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px,6vw,80px)", fontWeight: 900, color: "#F8F5EE", lineHeight: 1.0, marginBottom: 32 }}>
            Architects of Strategy.<br />
            <em style={{ fontStyle: "italic" }}>Storytellers with Purpose.</em>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            style={{ fontFamily: "var(--font-body)", fontSize: "clamp(16px,1.5vw,20px)", color: "rgba(248,245,238,0.65)", maxWidth: 640, lineHeight: 1.7 }}>
            At Unscripted, our suite of services is meticulously crafted to be the catalyst for the success of our clients. We are not just a marketing and communications agency — we are architects of comprehensive strategies, storytellers with a purpose, and innovators pushing the boundaries of creativity.
          </motion.p>
        </div>
      </section>

      {/* ── SERVICE BLOCKS ── */}
      <section style={{ background: "#0A0A0A" }} aria-label="All services">
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "clamp(64px,8vw,100px) clamp(24px,6.25vw,80px)" }}>
          {/* Divider before list */}
          <FadeUp>
            <div style={{ height: 3, background: "#F2B705", marginBottom: 64 }} />
          </FadeUp>

          {services.map((s, i) => (
            <ServiceBlock key={s.num} {...s} index={i} />
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "#1C1C2E", borderTop: "3px solid #F2B705" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px clamp(24px,6.25vw,80px)", textAlign: "center" }}>
          <FadeUp>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px,4vw,52px)", fontWeight: 900, fontStyle: "italic", color: "#F8F5EE", marginBottom: 32 }}>
              Ready to get started?
            </p>
            <Link href="/contact" className="btn-gold" style={{ borderRadius: 100 }}>
              Start a Project →
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
