import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://jayant-systems.online";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/", "/proposal/*/agreement", "/proposal/*/commercials"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
