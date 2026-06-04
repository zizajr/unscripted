import type { Metadata } from "next";
import MainStreetClient from "./MainStreetClient";

export const metadata: Metadata = {
  title: "MAIN STREET — Stories Moving Markets | Unscripted",
  description:
    "Unscripted's flagship podcast — conversations at the intersection of business, capital, and emerging markets. Kigali, Doha, Nairobi, Lagos.",
  openGraph: {
    title: "MAIN STREET — Stories Moving Markets | Unscripted",
    description:
      "Conversations at the intersection of business, capital, and emerging markets.",
  },
};

export default function MainStreetPage() {
  return <MainStreetClient />;
}
