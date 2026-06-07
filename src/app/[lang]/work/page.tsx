import type { Metadata } from "next";
import WorkClient from "./WorkClient";

export const metadata: Metadata = {
  title: "Our Work — Campaigns That Move Markets | Unscripted",
  description:
    "Explore Unscripted's portfolio of branding, strategy, and communications work across East Africa and beyond.",
  openGraph: {
    title: "Our Work — Campaigns That Move Markets | Unscripted",
    description:
      "Explore Unscripted's portfolio of branding, strategy, and communications work across East Africa and beyond.",
  },
};

import { notFound } from "next/navigation";

export default function WorkPage() {
  notFound();
}
