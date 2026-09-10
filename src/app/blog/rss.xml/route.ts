import { getBlogPosts } from "@/lib/blog";

export async function GET() {
  const posts = getBlogPosts();
  const baseUrl = "https://jayant-systems.online";

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>Jayant Web & AI Systems Blog</title>
        <link>${baseUrl}/blog</link>
        <description>Technical deep dives, systems architecture, and engineering philosophy.</description>
        <language>en</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        ${posts
          .map((post) => `
            <item>
              <title>${post.frontmatter.title}</title>
              <link>${post.frontmatter.canonical || `${baseUrl}/blog/${post.slug}`}</link>
              <pubDate>${new Date(post.frontmatter.publishedAt).toUTCString()}</pubDate>
              <description>${post.frontmatter.description}</description>
              <guid>${post.frontmatter.canonical || `${baseUrl}/blog/${post.slug}`}</guid>
            </item>
          `)
          .join("")}
    </channel>
  </rss>`;

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
