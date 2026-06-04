import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Unscripted — Start a Project",
  description:
    "Ready to defy reason? Get in touch with the Unscripted team. hello@theunscripted.xyz",
  openGraph: {
    title: "Contact Unscripted — Start a Project",
    description: "Ready to defy reason? Get in touch with the Unscripted team.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
