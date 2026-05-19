import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import HeroSection from "@/components/home/HeroSection";
import PositioningSection from "@/components/home/PositioningSection";
import FeaturedShowSection from "@/components/home/FeaturedShowSection";
import ShowPortfolioSection from "@/components/home/ShowPortfolioSection";
import AboutThirtySection from "@/components/home/AboutThirtySection";
import PartnersStrip from "@/components/home/PartnersStrip";
import NewsletterSection from "@/components/home/NewsletterSection";

export const metadata: Metadata = {
  title: "Unscripted Productions",
  description: "Premium video and podcast production from Africa and the Middle East. We make shows that stop people mid-scroll.",
  openGraph: {
    title: "Unscripted Productions",
    description: "Premium video and podcast production from Africa and the Middle East. We make shows that stop people mid-scroll.",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PositioningSection />
      <FeaturedShowSection />
      <ShowPortfolioSection />
      <AboutThirtySection />
      <PartnersStrip />
      <NewsletterSection />
    </>
  );
}
