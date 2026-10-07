import type { MetadataRoute } from "next";
import { SITE_URL } from "../components/site";

// Open to every major AI crawler (GEO): GPTBot, ClaudeBot, PerplexityBot,
// Google-Extended, CCBot — plus classic search bots.
const AI_BOTS = [
  "GPTBot",
  "ChatGPT-User",
  "Google-Extended",
  "ClaudeBot",
  "anthropic-ai",
  "PerplexityBot",
  "Amazonbot",
  "Applebot-Extended",
  "Bytespider",
  "CCBot",
  "FacebookBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...AI_BOTS.map((ua) => ({ userAgent: ua, allow: "/" })),
      { userAgent: "*", allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
