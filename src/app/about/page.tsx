import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Unscripted — Creativity That Defies Reason",
  description:
    "Meet the team behind Unscripted — a branding and communications agency for brands that believe in the extraordinary.",
  openGraph: {
    title: "About Unscripted — Creativity That Defies Reason",
    description:
      "Meet the team behind Unscripted — a branding and communications agency for brands that believe in the extraordinary.",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
