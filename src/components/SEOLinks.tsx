"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Compass, ShieldCheck } from "lucide-react";

export default function SEOLinks() {
  const pathname = usePathname();
  if (pathname?.startsWith("/proposal/")) return null;

  return (
    <section aria-label="Services & Authority Directory" className="bg-card-bg/40 py-10 border-t border-border-custom/80 mt-auto text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
          <div>
            <h3 className="font-serif font-bold text-text-base mb-4 text-base md:text-lg flex items-center gap-2">
              <Compass className="size-4 text-primary" />
              Explore my services (Internal Links)
            </h3>
            <ul className="space-y-2.5 text-text-muted font-sans text-xs md:text-sm">
              <li>
                <Link href="/services/ai-development" className="hover:text-primary transition-colors flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-primary/60" />
                  Custom AI Development & Integration
                </Link>
              </li>
              <li>
                <Link href="/services/business-automation" className="hover:text-primary transition-colors flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-primary/60" />
                  Business Automation Solutions
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
                  Read my Latest AI Insights
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-bold text-text-base mb-4 text-base md:text-lg flex items-center gap-2">
              <ShieldCheck className="size-4 text-primary" />
              Authority Resources (Outbound Links)
            </h3>
            <ul className="space-y-2.5 text-text-muted font-sans text-xs md:text-sm">
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Artificial_intelligence"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors inline-flex items-center gap-1.5"
                >
                  <span className="size-1.5 rounded-full bg-primary/60" />
                  Learn about Artificial Intelligence (Wikipedia)
                  <ArrowUpRight className="size-3 text-text-muted" />
                </a>
              </li>
              <li>
                <a
                  href="https://nextjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors inline-flex items-center gap-1.5"
                >
                  <span className="size-1.5 rounded-full bg-primary/60" />
                  Powered by Next.js Framework
                  <ArrowUpRight className="size-3 text-text-muted" />
                </a>
              </li>
              <li>
                <a
                  href="https://react.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors inline-flex items-center gap-1.5"
                >
                  <span className="size-1.5 rounded-full bg-primary/60" />
                  Built with React
                  <ArrowUpRight className="size-3 text-text-muted" />
                </a>
              </li>
              <li>
                <a
                  href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors inline-flex items-center gap-1.5"
                >
                  <span className="size-1.5 rounded-full bg-primary/60" />
                  Google SEO Best Practices
                  <ArrowUpRight className="size-3 text-text-muted" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
