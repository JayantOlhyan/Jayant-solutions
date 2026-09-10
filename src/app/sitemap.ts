import { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://jayant-systems.online";
  const lastModified = new Date();

  // 1. Core High-Priority Pages
  const corePages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/process`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // 2. Service Pages (13 individual service landing pages)
  const serviceRoutes = [
    "ai-chatbot-development",
    "ai-development",
    "api-development",
    "business-automation",
    "cloud-and-devops",
    "custom-software-development",
    "mobile-app-development",
    "mvp-development",
    "saas-development",
    "technology-consulting",
    "ui-ux-design",
    "website-development",
  ];

  const servicePages: MetadataRoute.Sitemap = serviceRoutes.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // 7. Dynamic Individual Blog Posts
  const posts = getBlogPosts();
  
  if (posts.length >= 3) {
    corePages.push({
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    });
  }

  const dynamicBlogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: post.frontmatter.canonical || `${baseUrl}/blog/${post.slug}`,
    lastModified: post.frontmatter.updatedAt ? new Date(post.frontmatter.updatedAt) : new Date(post.frontmatter.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // 8. Company Pages
  const companyRoutes = [
    "careers",
    "founder",
    "partners",
    "testimonials",
    "why-choose-us",
  ];

  const companyPages: MetadataRoute.Sitemap = companyRoutes.map((slug) => ({
    url: `${baseUrl}/company/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // 9. Resources Pages
  const resourceRoutes = [
    "case-studies",
    "downloads",
    "industries-we-serve",
    "technologies-we-use",
  ];

  const resourcePages: MetadataRoute.Sitemap = resourceRoutes.map((slug) => ({
    url: `${baseUrl}/resources/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // 10. Contact & Pricing Sub-Pages
  const subPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/contact/book-a-consultation`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact/request-a-quote`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/pricing/enterprise-plans`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/pricing/maintenance-plans`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // 11. Public Support Pages (excluding private /support/client-portal)
  const publicSupportPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/support`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/support/report-a-bug`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/support/service-status`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  // 12. Legal & Compliance Pages
  const legalRoutes = [
    "privacy",
    "terms",
    "refund-policy",
    "pricing-policy",
    "cookies",
    "disclaimer",
  ];

  const legalPages: MetadataRoute.Sitemap = legalRoutes.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified,
    changeFrequency: "yearly",
    priority: 0.3,
  }));

  return [
    ...corePages,
    ...servicePages,
    ...dynamicBlogPages,
    ...companyPages,
    ...resourcePages,
    ...subPages,
    ...publicSupportPages,
    ...legalPages,
  ];
}
