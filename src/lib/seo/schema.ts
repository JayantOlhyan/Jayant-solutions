/**
 * Reusable, type-safe Schema.org structured data generators
 * All properties are aligned strictly with schema.org specifications and Google Rich Results guidelines.
 */

export const BASE_URL = "https://jayant-systems.online";
export const LOGO_URL = `${BASE_URL}/icon-512.png`;

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface BlogPostingData {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category?: string;
}

export interface ServiceSchemaData {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
  startingPrice?: string;
}

export interface PricingPackageData {
  name: string;
  price: string;
  description?: string;
  desc?: string;
  period?: string;
}

/**
 * 3A.1 - Organization Schema
 * Represents Jayant Web & AI Systems entity, founder, and official contact/social properties.
 */
export function createOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    "name": "Jayant Web & AI Systems",
    "alternateName": "Jayant Systems",
    "url": BASE_URL,
    "logo": {
      "@type": "ImageObject",
      "url": LOGO_URL,
      "width": 512,
      "height": 512
    },
    "email": "jayantwebaisystems@gmail.com",
    "telephone": "+91-9667344125",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New Delhi",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9667344125",
      "email": "jayantwebaisystems@gmail.com",
      "contactType": "customer service",
      "availableLanguage": ["en", "hi"]
    },
    "founder": {
      "@type": "Person",
      "@id": `${BASE_URL}/#founder`,
      "name": "Jayant Olhyan",
      "url": `${BASE_URL}/about`,
      "jobTitle": "Founder & Lead Software Engineer"
    },
    "sameAs": [
      "https://github.com/JayantOlhyan",
      "https://linkedin.com/company/jayant-systems",
      "https://x.com/JayantSystems",
      "https://www.instagram.com/jayantolhyan/",
      "https://www.youtube.com/@JayantWebAISystems"
    ],
    "knowsAbout": [
      "Artificial Intelligence",
      "Custom Software Development",
      "Next.js",
      "React",
      "Python",
      "FastAPI",
      "Business Process Automation",
      "SaaS Architecture"
    ]
  };
}

/**
 * 3A.2 - WebSite Schema
 * Represents the primary web property. SearchAction is omitted as no global site-search endpoint exists.
 */
export function createWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    "name": "Jayant Web & AI Systems",
    "url": BASE_URL,
    "description": "Jayant Web & AI Systems builds custom AI agents, scalable web platforms, mobile apps, and business automation software for modern startups and enterprises.",
    "publisher": {
      "@id": `${BASE_URL}/#organization`
    },
    "inLanguage": "en-IN"
  };
}

/**
 * 3A.3 - BreadcrumbList Schema
 * Generates valid sequential ListItem elements for hierarchical navigation.
 */
export function createBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url.startsWith("http") ? item.url : `${BASE_URL}${item.url}`
    }))
  };
}

/**
 * 3A.5 - FAQPage Schema
 * Generates Question / Answer schema for FAQs with visible content parity.
 */
export function createFAQSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };
}

/**
 * 3A.4 - BlogPosting Schema
 * Generates structured metadata for individual engineering articles.
 */
export function createBlogPostingSchema(post: BlogPostingData) {
  const parsedDate = new Date(post.date);
  const isoDate = isNaN(parsedDate.getTime()) ? "2026-05-16" : parsedDate.toISOString().split("T")[0];

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${post.slug}`
    },
    "headline": post.title,
    "description": post.excerpt,
    "image": `${BASE_URL}/opengraph-image`,
    "datePublished": isoDate,
    "dateModified": isoDate,
    "author": {
      "@type": "Person",
      "name": post.author || "Jayant Olhyan",
      "url": `${BASE_URL}/about`
    },
    "publisher": {
      "@type": "Organization",
      "name": "Jayant Web & AI Systems",
      "url": BASE_URL,
      "logo": {
        "@type": "ImageObject",
        "url": LOGO_URL
      }
    },
    "articleSection": post.category || "Engineering",
    "url": `${BASE_URL}/blog/${post.slug}`
  };
}

/**
 * 3A.6 - Service Schema
 * Generates schema for specialized software and AI service landing pages.
 */
export function createServiceSchema(service: ServiceSchemaData) {
  const schema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "url": service.url.startsWith("http") ? service.url : `${BASE_URL}${service.url}`,
    "provider": {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      "name": "Jayant Web & AI Systems",
      "url": BASE_URL
    },
    "serviceType": service.serviceType || service.name,
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Global"
    }
  };

  if (service.startingPrice) {
    const numericPrice = service.startingPrice.replace(/[^0-9]/g, "");
    if (numericPrice) {
      schema.offers = {
        "@type": "Offer",
        "price": numericPrice,
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "url": service.url.startsWith("http") ? service.url : `${BASE_URL}${service.url}`
      };
    }
  }

  return schema;
}

/**
 * 3A.6 - Pricing Packages / Service Offer Catalog Schema
 * Represents publicly visible commercial tiers with exact INR amounts from content.ts.
 */
export function createPricingSchema(packages: PricingPackageData[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Software & AI Development Services",
    "description": "Transparent fixed-milestone pricing packages for custom business websites, workflow automations, and full-scale AI systems.",
    "url": `${BASE_URL}/pricing`,
    "provider": {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      "name": "Jayant Web & AI Systems",
      "url": BASE_URL
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Software Development Packages",
      "itemListElement": packages.map((pkg) => {
        const numericPrice = pkg.price.replace(/[^0-9]/g, "");
        return {
          "@type": "Offer",
          "name": pkg.name,
          "description": pkg.description || pkg.desc || "",
          "price": numericPrice || "0",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "url": `${BASE_URL}/pricing`
        };
      })
    }
  };
}
