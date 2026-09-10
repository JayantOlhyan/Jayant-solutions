"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass } from "lucide-react";

export default function SEOLinks() {
  const pathname = usePathname();
  if (pathname?.startsWith("/proposal/")) return null;

  return (
    <section aria-label="Related Services" className="bg-card-bg/40 py-10 border-t border-border-custom/80 mt-auto text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-8 text-sm">
          <div>
            <h3 className="font-serif font-bold text-text-base mb-4 text-base md:text-lg flex items-center gap-2">
              <Compass className="size-4 text-primary" />
              Related Services
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-text-muted font-sans text-xs md:text-sm">
              <li>
                <Link href="/services/ai-development" className="hover:text-primary transition-colors flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-primary/60" />
                  Custom AI Development
                </Link>
              </li>
              <li>
                <Link href="/services/business-automation" className="hover:text-primary transition-colors flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-primary/60" />
                  Business Automation
                </Link>
              </li>
              <li>
                <Link href="/services/website-development" className="hover:text-primary transition-colors flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-primary/60" />
                  Modern Website Development
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-primary/60" />
                  Engineering Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
