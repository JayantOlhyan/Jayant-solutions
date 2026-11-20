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
 * Represents JAYANT SYSTEMS entity, founder, and official contact/social properties.
 */
export function createOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    // Organization + ProfessionalService (a LocalBusiness subtype) so local and AI
    // search get hours, area and service region (checklist 3A / 7B).
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${BASE_URL}/#organization`,
    "name": "JAYANT SYSTEMS",
    "alternateName": "Jayant Systems",
    "description":
      "Founder-led digital studio in Dwarka, New Delhi building websites, custom software, AI automation, design and growth for businesses in India and worldwide.",
    "url": BASE_URL,
    "image": `${BASE_URL}/opengraph-image`,
    "logo": {
      "@type": "ImageObject",
      "url": LOGO_URL,
      "width": 512,
      "height": 512
    },
    "email": "jayantwebaisystems@gmail.com",
    "telephone": "+91-9667344125",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dwarka, New Delhi",
      "addressRegion": "Delhi",
      "addressCountry": "IN"
    },
    // Dwarka, New Delhi (area centre — the studio works remotely; no walk-in office)
    "geo": { "@type": "GeoCoordinates", "latitude": 28.5921, "longitude": 77.046 },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "20:00"
      }
    ],
    "areaServed": [
      { "@type": "City", "name": "New Delhi" },
      { "@type": "AdministrativeArea", "name": "Delhi NCR" },
      { "@type": "Country", "name": "India" },
      "Worldwide (remote)"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9667344125",
      "email": "jayantwebaisystems@gmail.com",
      "contactType": "customer service",
      "availableLanguage": ["en", "hi"]
    },
    "founder": {
      "@type": "Person",
      "@id": `${BASE_URL}/company/founder#person`,
      "name": "Jayant Olhyan",
      "url": `${BASE_URL}/company/founder`,
      "jobTitle": "Founder & Lead Software Engineer",
      "sameAs": [
        "https://github.com/JayantOlhyan",
        "https://www.linkedin.com/in/jayant-olhyan/"
      ]
    },
    "sameAs": [
      "https://github.com/JayantOlhyan",
      "https://linkedin.com/company/jayant-systems",
      "https://x.com/JayantSystems",
      "https://www.instagram.com/jayantolhyan/",
      "https://www.youtube.com/@JayantWebAISystems"
    ],
    "slogan": "You run the business. We handle the digital.",
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
    "name": "JAYANT SYSTEMS",
    "url": BASE_URL,
    "description": "You run the business. We handle the digital. Jayant Systems builds websites, custom software, AI automations, brands and digital content — one digital partner for your business.",
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
      "name": "JAYANT SYSTEMS",
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
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "url": service.url.startsWith("http") ? service.url : `${BASE_URL}${service.url}`,
    "provider": {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      "name": "JAYANT SYSTEMS",
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
      "name": "JAYANT SYSTEMS",
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

/**
 * ProfilePage Schema for the Founder
 */
export function createProfilePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "@id": `${BASE_URL}/company/founder#person`,
      "name": "Jayant Olhyan",
      "url": `${BASE_URL}/company/founder`,
      "mainEntityOfPage": `${BASE_URL}/company/founder`,
      "jobTitle": "Founder & Lead Software Engineer",
      "image": `${BASE_URL}/images/jayant-olhyan.jpg`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "New Delhi",
        "addressCountry": "IN"
      },
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "Maharaja Surajmal Institute of Technology"
      },
      "worksFor": {
        "@id": `${BASE_URL}/#organization`
      },
      "sameAs": [
        "https://github.com/JayantOlhyan",
        "https://www.linkedin.com/in/jayant-olhyan/"
      ]
    }
  };
}
