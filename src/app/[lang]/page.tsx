import type { Metadata } from "next";
import HeroSection      from "@/components/home/HeroSection";
import CredentialsTicker from "@/components/home/CredentialsTicker";
import AboutSection     from "@/components/home/AboutSection";
import HowWeWorkSection from "@/components/home/HowWeWorkSection";
import ServicesSection  from "@/components/home/ServicesSection";
import MainStreetSection from "@/components/home/MainStreetSection";
import WorkSection      from "@/components/home/WorkSection";
import TeamSection      from "@/components/home/TeamSection";
import ContactSection   from "@/components/home/ContactSection";

export const metadata: Metadata = {
  title: "Unscripted — We Defy Reason. Branding & Communications Agency",
  description:
    "Africa's dark horse branding, marketing, and communications agency. We craft narratives, design experiences, and forge brand-changing connections.",
  openGraph: {
    title: "Unscripted — We Defy Reason. Branding & Communications Agency",
    description:
      "Africa's dark horse branding, marketing, and communications agency. We craft narratives, design experiences, and forge brand-changing connections.",
  },
};

import { getDictionary } from "@/i18n/getDictionary";

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "fr" | "ar");

  return (
    <>
      <HeroSection dict={dict.home} lang={lang} />
      <CredentialsTicker />
      <AboutSection />
      <HowWeWorkSection />
      <ServicesSection />
      <MainStreetSection />
      <WorkSection />
      <TeamSection />
      <ContactSection />
    </>
  );
}
