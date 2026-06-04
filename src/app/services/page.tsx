import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services — Branding, Strategy & Communications | Unscripted",
  description:
    "Branding, design, strategy, PR, digital marketing, and media production for businesses across emerging markets.",
  openGraph: {
    title: "Services — Branding, Strategy & Communications | Unscripted",
    description:
      "Branding, design, strategy, PR, digital marketing, and media production for businesses across emerging markets.",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
