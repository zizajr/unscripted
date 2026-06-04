"use client";
import { useRef, useState } from "react";
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

const services = [
  // Priority
  { num: "01", name: "Design", tags: ["Visual Identity", "Print", "Logos"], body: `In the realm of design, we go beyond aesthetics.\n\nOur team delves deep into the core of your brand, crafting visual identities that not only captivate but communicate your unique story.\n\nFrom logos, collateral, print media, and billboards to visual identity systems, we craft designs that not only captivate but also communicate your brand's unique story.` },
  { num: "02", name: "Copywriting", tags: ["Tone of Voice", "Narrative", "Clarity"], body: `We are maestros when it comes to words.\n\nOur copywriting services breathe life into your brand's story and ensure that your brand communicates with authenticity and clarity, leaving a lasting impression on your audience.` },
  { num: "03", name: "Strategy", tags: ["Architecture", "Trends", "Positioning"], body: `We are your brand strategy architects tasked with formulating comprehensive strategies that align with market trends and consumer preferences.\n\nWe understand that strategy in branding is the bedrock of a successful brand and our team ensures that every aspect of your brand reflects a cohesive and impactful narrative.\n\nBy aligning your brand with market trends, it resonates with the target audience and stands out from the competition.` },
  { num: "04", name: "Business Development", tags: ["Partnerships", "Growth", "Networking"], body: `Strategic partnerships and business growth go hand in hand.\n\nAt Unscripted, we spearhead your business development initiatives through existing relationships with various stakeholders and partners that propel your brand to new heights.\n\nOur team identifies opportunities, establishes connections, and formulates strategies that contribute to your brand's sustained success.` },
  { num: "05", name: "Publications", tags: ["Autobiographies", "Ghostwriting", "Magazines"], body: `Your story deserves to be told.\n\nOur publication services encompass autobiographies, ghostwriting, and magazine creation, ensuring your narrative reaches wider audiences through compelling and professionally crafted publications.\n\nWe collaborate with you to bring your narrative to life, ensuring that your story reaches wider audiences through all mediums.\n\nPublished titles available at amazon.com/dp/ccD9Kq4. Partner publications via bizmartholdings.com — including Trump Unyielding by Newton Isaac.` },
  { num: "06", name: "Reputation Management", tags: ["Crisis PR", "Biographies", "Integrity"], body: `In an era of constant scrutiny, our reputation management services safeguard your brand's integrity and identity.\n\nFrom crafting biographies to managing crisis communication, we navigate the intricate landscape of public perception with finesse to either improve or preserve your reputation.` },
  { num: "07", name: "Multimedia Management", tags: ["Photography", "VR", "Campaigns"], body: `At Unscripted, we understand that a captivating online presence is non-negotiable.\n\nOur production and digital services — including web design, photography, interactive VR, and social media management — are geared towards creating a seamless and engaging experience for your audience.` },
  { num: "08", name: "Web & App Design", tags: ["UI", "UX", "Responsive"], body: `Our web design services ensure your virtual storefront leaves a lasting impression.\n\nWe combine aesthetics with functionality, creating a visually stunning and user-friendly experience for a seamless online interaction for your clients.\n\nOur responsive designs and user-friendly websites not only showcase your brand but also engage and convert visitors.` },
  { num: "09", name: "Social Media", tags: ["Community", "Content", "Engagement"], body: `In the age of social connectivity, managing your online presence is paramount.\n\nUnscripted curates and manages social media content that aligns with your brand's voice. From content creation to community engagement, we ensure that your brand remains relevant and resonates with your audience.` },
  { num: "10", name: "Media Campaigns", tags: ["End-to-end", "Execution", "Distribution"], body: `Our end-to-end media campaign services ensure your message reaches the right audience through quality production and effective distribution.\n\nWe take a holistic approach, from conceptualization to execution, to maximize the impact of your campaigns.` },
  { num: "11", name: "UIX Design", tags: ["Usability", "Interfaces", "Experience"], body: `User experience is at the forefront of design.\n\nOur UI/UX design services enhance the usability and appeal of any digital interfaces, ensuring a seamless and enjoyable interaction for your audience.` },
  
  // Supporting
  { num: "12", name: "Branding & Identity", tags: ["Visuals", "Narrative", "Core"], body: `At Unscripted, we believe that branding is not just about visuals; it's about creating a compelling narrative that resonates with your audience.\n\nOur design services go beyond aesthetics, delving deep into the essence of your brand. Explore our diverse offerings tailored to elevate your brand's presence and impact.` },
  { num: "13", name: "Advertising", tags: ["Emotions", "Storytelling", "Experiences"], body: `Our advertising campaigns are more than promotions; they are experiences. We create engaging and thought-provoking narratives that resonate with your audience leaving a memorable and impactful impression.\n\nWe believe in the power of storytelling through visuals, words, and emotions, ensuring that your brand stands out in any crowded marketplace.` },
  { num: "14", name: "Marketing & Digital", tags: ["Data-driven", "Influencers", "Strategy"], body: `Navigating the dynamic landscape of marketing requires expertise and innovation.\n\nOur marketing services encompass a spectrum of strategies, from digital and influencer marketing to impactful product launches, ensuring your brand stands out in the crowded market.` },
  { num: "15", name: "Communications & PR", tags: ["Media", "Relations", "Embraced"], body: `Effective communication is the backbone of brand success.\n\nOur communications and public relations services offer a comprehensive suite, from reputation management to impactful publications, ensuring your brand's narrative is not just heard but embraced.` },
  { num: "16", name: "Product Launches", tags: ["Events", "Market", "Integration"], body: `First impressions matter and at Unscripted, we meticulously plan your product launch to captivate audiences, generate anticipation, and set the stage for unrivaled product success.\n\nFrom event coordination, market integration, and multimedia campaigns, we orchestrate a seamless experience that leaves a memorable impression.` },
  { num: "17", name: "CSR Implementation", tags: ["Sustainability", "Community", "Responsibility"], body: `Corporate Social Investment/Responsibility is not just a choice; it's a responsibility.\n\nWe guide and implement CSR initiatives that align with your brand values, demonstrating a commitment to societal well-being and responsible business practices. From community engagement to sustainability projects, we help your brand make a meaningful impact.` },
];

function ServicePanelLarge({ num, name, body, tags, index }: { num: string; name: string; body: string; tags: string[]; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: Math.min(index * 0.05, 0.3), ease: EASE }}
      className="relative overflow-hidden group mb-8 md:mb-12"
    >
      <div
        role="button"
        tabIndex={0}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        className="relative z-10 flex flex-col lg:flex-row justify-between p-8 md:p-16 rounded-2xl transition-all duration-700 ease-out"
        style={{
          background: hovered ? "rgba(242,183,5,0.04)" : "rgba(255,255,255,0.02)",
          border: hovered ? "1px solid rgba(242,183,5,0.3)" : "1px solid rgba(255,255,255,0.05)",
          transform: hovered ? "translateY(-4px)" : "translateY(0)",
          boxShadow: hovered ? "0 24px 48px -12px rgba(242,183,5,0.05)" : "none",
        }}
      >
        {/* Abstract Background pattern on hover */}
        <div 
          className="absolute top-0 right-0 w-full h-full z-0 opacity-0 transition-opacity duration-1000 pointer-events-none overflow-hidden rounded-2xl"
          style={{ opacity: hovered ? 0.3 : 0 }}
        >
          <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-gold/10 blur-[120px] mix-blend-screen transition-transform duration-1000" style={{ transform: hovered ? 'scale(1.2) translate(-50px, 50px)' : 'scale(1)' }} />
        </div>

        {/* Left Column: Number & Title */}
        <div className="relative z-10 lg:w-5/12 mb-10 lg:mb-0 lg:pr-16 flex flex-col">
          <div className="flex items-center gap-6 mb-8">
            <span style={{ fontFamily: "var(--font-bebas)" }} className="text-gold text-3xl md:text-5xl tracking-widest opacity-80">
              {num}
            </span>
          </div>
          
          <h2 style={{ fontFamily: "var(--font-display)" }} className="text-4xl md:text-5xl lg:text-6xl font-black text-cream leading-[1.1] transition-colors duration-500 group-hover:text-gold mb-6 mt-auto">
            {name}
          </h2>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag, i) => (
              <span key={i} className="px-4 py-1.5 text-xs border border-cream/20 text-cream/70 rounded-full font-body uppercase tracking-widest transition-colors duration-500 group-hover:border-gold/30 group-hover:text-gold/80">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="relative z-10 lg:w-7/12 flex flex-col justify-center">
          <div className="w-12 h-[2px] bg-gold/40 mb-8 transition-all duration-700 group-hover:w-full group-hover:bg-gold/60" />
          
          <div className="space-y-6">
            {body.split("\n\n").map((para, i) => (
              <p key={i} className="text-cream/70 text-lg md:text-xl font-body leading-relaxed transition-colors duration-500 group-hover:text-cream/90">
                {para}
              </p>
            ))}
          </div>
        </div>

      </div>
    </motion.article>
  );
}

export default function ServicesClient() {
  return (
    <div className="bg-ink min-h-screen">
      {/* ── HERO ── */}
      <section className="relative pt-[200px] pb-[100px] px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto" aria-labelledby="services-page-heading">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none opacity-5 mix-blend-overlay" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
          backgroundSize: "300px",
        }} />
        
        <div className="max-w-[1280px]">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            style={{ fontFamily: "var(--font-bebas)" }} className="text-xs tracking-[0.35em] text-cream/45 mb-8 uppercase">
            WHAT WE DO
          </motion.p>
          <motion.h1 id="services-page-heading"
            initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            style={{ fontFamily: "var(--font-display)" }} className="text-[clamp(48px,8vw,100px)] font-black text-cream leading-[1.0] tracking-tight mb-8">
            Architects of Strategy.<br />
            <em className="text-cream/40 font-light italic">Storytellers with Purpose.</em>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="font-body text-xl md:text-2xl text-cream/65 max-w-3xl leading-relaxed">
            At Unscripted, our suite of services is meticulously crafted to be the catalyst for the success of our clients. We are not just a marketing and communications agency — we are architects of comprehensive strategies, storytellers with a purpose, and innovators pushing the boundaries of creativity.
          </motion.p>
        </div>
      </section>

      {/* ── KOTA-STYLE SERVICE PANELS ── */}
      <section className="px-6 md:px-12 lg:px-20 pb-[160px] max-w-[1400px] mx-auto" aria-label="All services">
        <FadeUp>
          <div className="w-full h-px bg-gradient-to-r from-gold/50 via-gold/10 to-transparent mb-16 md:mb-24" />
        </FadeUp>

        <div className="flex flex-col">
          {services.map((s, i) => (
            <ServicePanelLarge key={s.num} {...s} index={i} />
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-slate py-32 px-6 md:px-12 lg:px-20 text-center border-t border-gold">
        <FadeUp>
          <p style={{ fontFamily: "var(--font-display)" }} className="text-[clamp(32px,5vw,64px)] font-black text-cream mb-12">
            Ready to get started?
          </p>
          <Link href="/contact" className="btn-gold rounded-full shadow-2xl shadow-gold/20">
            Start a Project →
          </Link>
        </FadeUp>
      </section>
    </div>
  );
}
