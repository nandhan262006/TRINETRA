import type { MetadataRoute } from "next";
import { PHOTOS } from "../components/photos";
import { POSTS } from "../components/posts";
import { SITE_URL } from "../components/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/portfolio", "/contact", "/journal"];
  const entries: MetadataRoute.Sitemap = pages.map((p) => ({
    url: `${SITE_URL}${p}`,
    lastModified: "2026-10-07",
    changeFrequency: p === "" ? "weekly" : "monthly",
    priority: p === "" ? 1 : 0.8,
    ...(p === "/portfolio"
      ? {
          images: PHOTOS.map((ph) => `${SITE_URL}${ph.src}`),
        }
      : {}),
  }));
  for (const post of POSTS) {
    entries.push({
      url: `${SITE_URL}/journal/${post.slug}`,
      lastModified: "2026-10-07",
      changeFrequency: "yearly",
      priority: 0.6,
      images: [post.cover],
    });
  }
  return entries;
}
