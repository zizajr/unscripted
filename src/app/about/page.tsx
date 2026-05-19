import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About",
  description: "We built the studio because the show we wanted to watch didn't exist. The story of Unscripted Productions.",
};

export default function AboutPage() {
  return <AboutClient />;
}
