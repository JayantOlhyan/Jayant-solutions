"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { createBreadcrumbSchema } from "@/lib/seo/schema";

const pagesWithInPageBreadcrumbs = new Set([
  "/blog", "/blog/ai-insights", "/blog/artificial-intelligence", "/blog/automation",
  "/blog/case-studies", "/blog/cloud", "/blog/company-updates", "/blog/software-development",
  "/blog/startup-guides", "/blog/ui-ux", "/blog/web-development",
  "/company/careers", "/company/founder", "/company/partners", "/company/testimonials", "/company/why-choose-us",
  "/contact", "/contact/book-a-consultation", "/contact/request-a-quote",
  "/cookies", "/disclaimer", "/faq",
  "/pricing", "/pricing-policy", "/pricing/enterprise-plans", "/pricing/maintenance-plans",
  "/privacy",
  "/resources/case-studies", "/resources/downloads", "/resources/industries-we-serve", "/resources/technologies-we-use",
  "/services/ai-chatbot-development", "/services/ai-development", "/services/api-development",
  "/services/business-automation", "/services/cloud-and-devops", "/services/custom-software-development",
  "/services/mobile-app-development", "/services/mvp-development",
  "/services/saas-development", "/services/technology-consulting", "/services/ui-ux-design",
  "/services/website-development",
  "/support", "/support/report-a-bug", "/support/service-status",
  "/terms"
]);

export default function Breadcrumbs() {
  const pathname = usePathname();

  // Don't show breadcrumbs on home page or proposal pages
  if (pathname === "/" || pathname?.startsWith("/proposal/")) return null;

  const paths = pathname.split("/").filter((path) => path);

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    ...paths.map((path, index) => {
      const url = "/" + paths.slice(0, index + 1).join("/");
      const name = path
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      return { name, url };
    })
  ];

  // If page already renders its own specialized breadcrumb navigation, only output the SEO JSON-LD schema
  if (pagesWithInPageBreadcrumbs.has(pathname)) {
    return <JsonLd schema={createBreadcrumbSchema(breadcrumbItems)} />;
  }

  return (
    <>
      <JsonLd schema={createBreadcrumbSchema(breadcrumbItems)} />
      <nav aria-label="Breadcrumb" className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 pt-4 overflow-hidden">
        <ol className="flex items-center space-x-2 text-xs md:text-sm text-text-muted overflow-x-auto whitespace-nowrap py-1 scrollbar-none">
          <li className="shrink-0">
            <Link href="/" className="hover:text-primary transition-colors flex items-center">
              <Home className="size-3.5 mr-1" />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          {paths.map((path, index) => {
            const isLast = index === paths.length - 1;
            const url = "/" + paths.slice(0, index + 1).join("/");
            const label = path
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ");

            return (
              <li key={url} className="flex items-center">
                <ChevronRight className="size-3.5 mx-1 opacity-50" />
                {isLast ? (
                  <span className="font-semibold text-text-base line-clamp-1">{label}</span>
                ) : (
                  <Link href={url} className="hover:text-primary transition-colors line-clamp-1">
                    {label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
