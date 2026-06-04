import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://theunscripted.xyz";
  const locales = ["en", "fr", "ar"];
  const routes = ["", "/about", "/services", "/work", "/main-street", "/contact", "/privacy-policy", "/terms"];

  const sitemap: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    routes.forEach((route) => {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: route === "" ? 1 : 0.8,
      });
    });
  });

  return sitemap;
}
