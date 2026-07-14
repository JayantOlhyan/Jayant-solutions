import React from "react";
import Link from "next/link";

export default function SEOLinks() {
  return (
    <section className="bg-bg-base py-12 border-t border-border-custom mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
          <div>
            <h3 className="font-serif font-bold text-text-base mb-4 text-lg">Explore Our Services (Internal Links)</h3>
            <ul className="space-y-2 text-text-muted">
              <li>
                <Link href="/services/ai-development" className="hover:text-primary transition-colors">
                  Custom AI Development & Integration
                </Link>
              </li>
              <li>
                <Link href="/services/business-automation" className="hover:text-primary transition-colors">
                  Business Automation Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/website-development" className="hover:text-primary transition-colors">
                  Modern Website Development
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">
                  Read our Latest AI Insights
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif font-bold text-text-base mb-4 text-lg">Authority Resources (Outbound Links)</h3>
            <ul className="space-y-2 text-text-muted">
              <li>
                <a href="https://en.wikipedia.org/wiki/Artificial_intelligence" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Learn about Artificial Intelligence (Wikipedia)
                </a>
              </li>
              <li>
                <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Powered by Next.js Framework
                </a>
              </li>
              <li>
                <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Built with React
                </a>
              </li>
              <li>
                <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Google SEO Best Practices
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
