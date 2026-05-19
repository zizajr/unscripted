import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description: "Work with us. We're looking for guests, partners, brands, and projects worth making. We respond in 48 hours.",
};

export default function ContactPage() {
  return <ContactClient />;
}
