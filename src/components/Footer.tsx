"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Process", href: "/process" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" }
  ];

  const solutionsLinks = [
    { name: "Build an AI Chatbot", href: "/promo/build-ai-chatbot" },
    { name: "Build Your Startup MVP", href: "/promo/build-startup-mvp" },
    { name: "Modern Business Website", href: "/promo/modern-business-website" },
    { name: "Business Automation", href: "/promo/business-automation-solutions" },
    { name: "AI Consulting", href: "/promo/ai-consulting" },
  ];

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Founder", href: "/company/founder" },
    { name: "Careers", href: "/company/careers" },
    { name: "Partners", href: "/company/partners" },
    { name: "Testimonials", href: "/company/testimonials" }
  ];

  const industriesLinks = [
    { name: "AI for Healthcare", href: "/industries/ai-for-healthcare" },
    { name: "AI for Education", href: "/industries/ai-for-education" },
    { name: "AI for Startups", href: "/industries/ai-for-startups" },
    { name: "AI for Manufacturing", href: "/industries/ai-for-manufacturing" },
    { name: "AI for Retail", href: "/industries/ai-for-retail" },
    { name: "AI for Government", href: "/industries/ai-for-government" },
    { name: "AI for Agriculture", href: "/industries/ai-for-agriculture" },
    { name: "AI for Real Estate", href: "/industries/ai-for-real-estate" },
    { name: "AI for Finance", href: "/industries/ai-for-finance" }
  ];

  const technologiesLinks = [
    { name: "Next.js Development", href: "/technologies/nextjs-development" },
    { name: "React Development", href: "/technologies/react-development" },
    { name: "FastAPI Development", href: "/technologies/fastapi-development" },
    { name: "Python Development", href: "/technologies/python-development" },
    { name: "Flutter Development", href: "/technologies/flutter-development" },
    { name: "OpenAI Integration", href: "/technologies/openai-integration" },
    { name: "Google Gemini Development", href: "/technologies/google-gemini-development" },
    { name: "LangChain Development", href: "/technologies/langchain-development" },
    { name: "Supabase Development", href: "/technologies/supabase-development" },
    { name: "PostgreSQL Development", href: "/technologies/postgresql-development" }
  ];

  const resources = [
    { name: "Blog", href: "/blog" },
    { name: "Case Studies", href: "/resources/case-studies" },
    { name: "Technologies We Use", href: "/resources/technologies-we-use" },
    { name: "Industries We Serve", href: "/resources/industries-we-serve" },
    { name: "Downloads", href: "/resources/downloads" },
    { name: "FAQs", href: "/faq" }
  ];

  const supportLinks = [
    { name: "Support", href: "/support" },
    { name: "Report a Bug", href: "/support/report-a-bug" },
    { name: "Maintenance", href: "/services/maintenance" },
    { name: "Service Status", href: "/support/service-status" },
    { name: "Client Portal", href: "/support/client-portal" }
  ];

  const socials = [
    { name: "GitHub", href: "https://github.com/JayantOlhyan" },
    { name: "LinkedIn", href: "https://linkedin.com/company/jayant-systems" },
    { name: "Twitter / X", href: "https://x.com/JayantSystems" },
    { name: "Instagram", href: "https://www.instagram.com/jayantolhyan/" },
    { name: "YouTube", href: "https://www.youtube.com/@JayantWebAISystems" }
  ];

  return (
    <footer className="w-full border-t border-border-custom bg-card-bg/25 pt-16 pb-8 text-left">
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
            <span className="font-serif text-sm font-bold tracking-tight text-text-base">
              Jayant Web & AI Systems
            </span>
          </div>
          <p className="text-xs text-text-muted leading-relaxed">
            Building intelligent software, AI-powered solutions, and scalable digital products that help businesses innovate, automate, and grow.
          </p>
        </div>

        {/* Solutions */}
        <div className="flex flex-col gap-3 text-left">
          <span className="font-mono text-xs uppercase tracking-wider text-[#C25E00] dark:text-primary font-bold">Solutions</span>
          <ul className="text-xs text-text-muted">
            {solutionsLinks.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="inline-block py-2.5 w-full md:inline-block md:py-0.5 md:w-auto hover:text-text-base transition-colors">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3 text-left">
          <span className="font-mono text-xs uppercase tracking-wider text-[#C25E00] dark:text-primary font-bold">Quick Links</span>
          <ul className="text-xs text-text-muted">
            {quickLinks.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="inline-block py-2.5 w-full md:inline-block md:py-0.5 md:w-auto hover:text-text-base transition-colors">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-3 text-left">
          <span className="font-mono text-xs uppercase tracking-wider text-[#C25E00] dark:text-primary font-bold">Company</span>
          <ul className="text-xs text-text-muted">
            {companyLinks.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="inline-block py-2.5 w-full md:inline-block md:py-0.5 md:w-auto hover:text-text-base transition-colors">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Industries */}
        <div className="flex flex-col gap-3 text-left">
          <span className="font-mono text-xs uppercase tracking-wider text-[#C25E00] dark:text-primary font-bold">Industries</span>
          <ul className="text-xs text-text-muted">
            {industriesLinks.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="inline-block py-2.5 w-full md:inline-block md:py-0.5 md:w-auto hover:text-text-base transition-colors">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="flex flex-col gap-3 text-left">
          <span className="font-mono text-xs uppercase tracking-wider text-[#C25E00] dark:text-primary font-bold">Technologies</span>
          <ul className="text-xs text-text-muted">
            {technologiesLinks.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="inline-block py-2.5 w-full md:inline-block md:py-0.5 md:w-auto hover:text-text-base transition-colors">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div className="flex flex-col gap-3 text-left">
          <span className="font-mono text-xs uppercase tracking-wider text-[#C25E00] dark:text-primary font-bold">Resources</span>
          <ul className="text-xs text-text-muted">
            {resources.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="inline-block py-2.5 w-full md:inline-block md:py-0.5 md:w-auto hover:text-text-base transition-colors">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support Links */}
        <div className="flex flex-col gap-3 text-left">
          <span className="font-mono text-xs uppercase tracking-wider text-[#C25E00] dark:text-primary font-bold">Support</span>
          <ul className="text-xs text-text-muted">
            {supportLinks.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="inline-block py-2.5 w-full md:inline-block md:py-0.5 md:w-auto hover:text-text-base transition-colors">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Social Icons row */}
      <div className="max-w-none px-6 mb-8 border-y border-border-custom/20 py-4 flex items-center justify-between flex-wrap gap-4 text-left">
        <div className="flex flex-wrap gap-4 text-xs font-mono">
          {socials.map((item) => (
            <a
              key={item.name}
              href={item.href}
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
              Privacy Policy
            </Link>
            <span className="text-border-custom/50">•</span>
            <Link href="/terms" className="hover:text-primary hover:underline transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-border-custom/50">•</span>
            <Link href="/cookies" className="hover:text-primary hover:underline transition-colors">
              Cookie Policy
            </Link>
            <span className="text-border-custom/50">•</span>
            <Link href="/pricing-policy" className="hover:text-primary hover:underline transition-colors">
              Refund Policy
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
