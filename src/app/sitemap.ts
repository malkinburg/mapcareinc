import type { MetadataRoute } from "next";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mapcare.ca";

  const staticPages = [
    "",
    "/about",
    "/services",
    "/careers",
    "/contact",
    "/privacy-policy",
    "/accessibility",
  ];

  const servicePages = services.map((s) => `/services/${s.slug}`);

  return [...staticPages, ...servicePages].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/services" ? 0.9 : 0.7,
  }));
}
