"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith("/proposal/")) return null;

  const currentYear = new Date().getFullYear();

    const sections = [
    {
      title: "Solutions",
      links: [
        { name: "Build an AI chatbot", href: "/promo/build-ai-chatbot" },
        { name: "Build your startup MVP", href: "/promo/build-startup-mvp" },
        { name: "Modern business website", href: "/promo/modern-business-website" },
        { name: "Business automation", href: "/promo/business-automation-solutions" },
        { name: "AI consulting", href: "/promo/ai-consulting" },
      ]
    },
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Process", href: "/process" },
        { name: "Pricing", href: "/pricing" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About me", href: "/about" },
        { name: "Founder", href: "/company/founder" },
        { name: "Careers", href: "/company/careers" },
        { name: "Partners", href: "/company/partners" },
        { name: "Testimonials", href: "/company/testimonials" }
      ]
    },
    {
      title: "Industries",
      links: [
        { name: "AI for healthcare", href: "/industries/ai-for-healthcare" },
        { name: "AI for retail & e-commerce", href: "/industries/ai-for-retail" },
        { name: "AI for education", href: "/industries/ai-for-education" }
      ]
    },
    {
      title: "Technologies",
      links: [
        { name: "Next.js development", href: "/technologies/nextjs-development" },
        { name: "React development", href: "/technologies/react-development" },
        { name: "FastAPI development", href: "/technologies/fastapi-development" },
        { name: "Python development", href: "/technologies/python-development" },
        { name: "Flutter development", href: "/technologies/flutter-development" },
        { name: "OpenAI integration", href: "/technologies/openai-integration" },
        { name: "Google Gemini development", href: "/technologies/google-gemini-development" },
        { name: "LangChain development", href: "/technologies/langchain-development" },
        { name: "Supabase development", href: "/technologies/supabase-development" },
        { name: "PostgreSQL development", href: "/technologies/postgresql-development" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "Case studies", href: "/resources/case-studies" },
        { name: "Technologies we use", href: "/resources/technologies-we-use" },
        { name: "Industries we serve", href: "/resources/industries-we-serve" },
        { name: "Downloads", href: "/resources/downloads" },
        { name: "FAQs", href: "/faq" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Support", href: "/support" },
        { name: "Report a bug", href: "/support/report-a-bug" },
        { name: "Maintenance", href: "/services/maintenance" },
        { name: "Service status", href: "/support/service-status" },
        { name: "Client portal", href: "/support/client-portal" },
        { name: "Client proposals", href: "/proposal" }
      ]
    }
  ];

  const socials = [
    { name: "GitHub", href: "https://github.com/JayantOlhyan" },
    { name: "LinkedIn", href: "https://linkedin.com/company/jayant-systems" },
    { name: "Twitter / X", href: "https://x.com/JayantSystems" },
    { name: "Instagram", href: "https://www.instagram.com/jayantolhyan/" },
    { name: "YouTube", href: "https://www.youtube.com/@JayantWebAISystems" }
  ];

  return (
    <footer aria-label="Footer navigation" className="w-full border-t border-border-custom bg-white dark:bg-card-bg/25 pt-16 pb-8 text-left">
      {/* Top Footer Grid */}
      <div className="max-w-none px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-10 gap-8 mb-12">
        {/* Brand Column */}
        <div className="col-span-2 flex flex-col gap-4 text-left">
          <div className="flex items-center gap-2">
            <div className="size-6 text-text-base shrink-0">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <rect x="10" y="10" width="180" height="180" rx="42" fill="none" stroke="currentColor" strokeWidth="16" />
                <path d="M 100 50 L 132 50 L 132 115 C 132 135, 115 152, 95 152 C 78 152, 65 140, 65 125 L 89 125 C 89 130, 91 132, 95 132 C 99 132, 108 128, 108 115 L 108 72 L 100 72 Z" fill="currentColor" />
                <path d="M 52 108 L 82 108 L 82 128 L 67 141 L 65 128 L 52 128 Z" fill="#FF8A00" />
              </svg>
            </div>
            <span className="font-sans text-sm font-bold tracking-tight text-text-base">
              Jayant Web & AI Systems
            </span>
          </div>
          <p className="text-xs text-text-muted leading-relaxed">
            Building intelligent software, AI-powered solutions, and scalable digital products that help businesses innovate, automate, and grow.
          </p>
        </div>

                {/* Dynamic Sections */}
        {sections.map((section) => (
          <div key={section.title} className="flex flex-col gap-3 text-left">
            <span className="font-mono text-xs uppercase tracking-wider text-[#C25E00] dark:text-primary font-bold">
              {section.title}
            </span>
            <ul className="text-xs text-text-muted">
              {section.links.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="flex items-center min-h-[48px] w-full md:inline-block md:min-h-0 md:py-0.5 md:w-auto hover:text-text-base transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Social Icons row */}
      <div className="max-w-none px-6 mb-8 border-y border-border-custom/20 py-4 flex items-center justify-between flex-wrap gap-4 text-left">
        <div className="flex flex-wrap gap-4 text-xs font-mono">
          {socials.map((item) => (
            <a
              key={item.name}
              href={item.href}
              aria-label={item.name}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="text-xs font-mono text-text-muted flex flex-wrap gap-4">
          <a href="tel:+919667344125" className="hover:text-primary transition-colors">📞 +91 96673 44125</a>
          <a href="mailto:jayantwebaisystems@gmail.com" className="hover:text-primary transition-colors">✉️ jayantwebaisystems@gmail.com</a>
          <span>📍 New Delhi, India</span>
        </div>
      </div>

      {/* Copyright and Legal bar */}
      <div className="max-w-none px-6 border-t border-border-custom/30 pt-8 flex flex-col gap-6 text-left">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[10px] text-text-muted font-mono">
            <Link href="/privacy" className="hover:text-primary hover:underline transition-colors">
              Privacy policy
            </Link>
            <span className="text-border-custom/50">•</span>
            <Link href="/terms" className="hover:text-primary hover:underline transition-colors">
              Terms & conditions
            </Link>
            <span className="text-border-custom/50">•</span>
            <Link href="/cookies" className="hover:text-primary hover:underline transition-colors">
              Cookie policy
            </Link>
            <span className="text-border-custom/50">•</span>
            <Link href="/pricing-policy" className="hover:text-primary hover:underline transition-colors">
              Refund policy
            </Link>
            <span className="text-border-custom/50">•</span>
            <Link href="/disclaimer" className="hover:text-primary hover:underline transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-border-custom/10 pt-4">
          <span className="text-[10px] font-mono text-text-muted">
            © {currentYear} Jayant Web & AI Systems. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
