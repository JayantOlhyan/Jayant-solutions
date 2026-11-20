import { MetadataRoute } from "next";

const AI_CRAWLERS = [
  "GPTBot", // OpenAI training
  "OAI-SearchBot", // ChatGPT search
  "ChatGPT-User", // ChatGPT browsing on a user's request
  "ClaudeBot", // Anthropic
  "Claude-SearchBot",
  "Claude-User",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended", // Gemini / AI Overviews grounding
  "Applebot-Extended", // Apple Intelligence
  "Bingbot", // feeds Copilot
  "CCBot", // Common Crawl, used by many LLMs
];

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://jayant-systems.online";

  const privateDisallowPaths = [
    "/admin/",
    "/api/",
    "/proposal/",
    "/support/client-portal/",
  ];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: privateDisallowPaths,
      },
      // AI crawlers: explicitly allowed (deliberate decision — we want to be cited in
      // ChatGPT, Claude, Perplexity, Gemini, Apple Intelligence and Copilot answers).
      // Private areas stay disallowed for every bot.
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/", disallow: privateDisallowPaths })),
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
