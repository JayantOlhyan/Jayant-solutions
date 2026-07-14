"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumbs() {
  const pathname = usePathname();

  // Don't show breadcrumbs on home page
  if (pathname === "/") return null;

  const paths = pathname.split("/").filter((path) => path);

  const generateSchema = (items: { name: string; url: string }[]) => {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": "https://jayant-solution.netlify.app" + item.url
      }))
    };
  };

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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateSchema(breadcrumbItems)) }}
      />
      <nav aria-label="Breadcrumb" className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-4">
        <ol className="flex items-center space-x-2 text-xs md:text-sm text-text-muted">
          <li>
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
