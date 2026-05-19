import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MainStreetPage from "./MainStreetPage";

export const metadata: Metadata = {
  title: "MAIN STREET Podcast",
  description: "Tech & Business. Real Conversations. Unfiltered. Recorded on location in Kigali, Doha, and beyond.",
};

const shows: Record<string, { component: React.FC }> = {
  "main-street": { component: MainStreetPage },
};

export default function ShowDetailPage({ params }: { params: { slug: string } }) {
  const show = shows[params.slug];
  if (!show) notFound();
  const ShowComponent = show.component;
  return <ShowComponent />;
}

export function generateStaticParams() {
  return [{ slug: "main-street" }];
}
