import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://unscripted.fm";
  return [
    { url: base,                          lastModified: new Date(), changeFrequency: "weekly",  priority: 1 },
    { url: `${base}/shows`,              lastModified: new Date(), changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/shows/main-street`,  lastModified: new Date(), changeFrequency: "daily",   priority: 0.9 },
    { url: `${base}/about`,              lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/work`,               lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`,            lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  ];
}
