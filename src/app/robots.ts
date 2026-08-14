import { MetadataRoute } from "next";

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
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: privateDisallowPaths,
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
        disallow: privateDisallowPaths,
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: privateDisallowPaths,
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
        disallow: privateDisallowPaths,
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
