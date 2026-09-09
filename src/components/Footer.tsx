"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Mail, Phone, MapPin, Sparkles } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith("/proposal/")) return null;

  const currentYear = new Date().getFullYear();

  const solutionsLinks = [
    { name: "Build an AI chatbot", href: "/promo/build-ai-chatbot" },
    { name: "Build your startup MVP", href: "/promo/build-startup-mvp" },
    { name: "Modern business website", href: "/promo/modern-business-website" },
    { name: "Business automation", href: "/promo/business-automation-solutions" },
    { name: "AI consulting", href: "/promo/ai-consulting" },
  ];

  const coreLinks = [
    { name: "Home", href: "/" },
    { name: "All Services", href: "/services" },
    { name: "Featured Work", href: "/portfolio" },
    { name: "Engineering Process", href: "/process" },
    { name: "Pricing Packages", href: "/pricing" },
    { name: "Client FAQs", href: "/faq" },
    { name: "Contact & Booking", href: "/contact" },
  ];

  const industryLinks = [
    { name: "AI for Healthcare", href: "/industries/ai-for-healthcare" },
    { name: "AI for Retail & E-commerce", href: "/industries/ai-for-retail" },
    { name: "AI for Education", href: "/industries/ai-for-education" },
  ];

  const techLinks = [
    { name: "Next.js Development", href: "/technologies/nextjs-development" },
    { name: "React Development", href: "/technologies/react-development" },
    { name: "FastAPI Development", href: "/technologies/fastapi-development" },
    { name: "Python Development", href: "/technologies/python-development" },
    { name: "Flutter Development", href: "/technologies/flutter-development" },
    { name: "OpenAI Integration", href: "/technologies/openai-integration" },
    { name: "Google Gemini AI", href: "/technologies/google-gemini-development" },
    { name: "LangChain Agents", href: "/technologies/langchain-development" },
    { name: "Supabase & Postgres", href: "/technologies/supabase-development" },
    { name: "PostgreSQL Engineering", href: "/technologies/postgresql-development" },
  ];

  const companyLinks = [
    { name: "About Me", href: "/about" },
    { name: "Founder Profile", href: "/company/founder" },
    { name: "Why Work With Me", href: "/company/why-choose-us" },
    { name: "Collaborator Careers", href: "/company/careers" },
    { name: "Technology Partners", href: "/company/partners" },
    { name: "Client Testimonials", href: "/company/testimonials" },
  ];

  const resourceLinks = [
    { name: "Engineering Blog", href: "/blog" },
    { name: "Case Studies Library", href: "/resources/case-studies" },
    { name: "Technologies We Use", href: "/resources/technologies-we-use" },
    { name: "Industries We Serve", href: "/resources/industries-we-serve" },
    { name: "Whitepapers & Downloads", href: "/resources/downloads" },
  ];

  const supportLinks = [
    { name: "Support Center", href: "/support" },
    { name: "Client Proposal Access", href: "/proposal" },
    { name: "Client Portal", href: "/support/client-portal" },
    { name: "Maintenance Plans", href: "/services/maintenance" },
    { name: "System Service Status", href: "/support/service-status" },
    { name: "Report an Issue", href: "/support/report-a-bug" },
  ];

  const socials = [
    { name: "GitHub", href: "https://github.com/JayantOlhyan" },
    { name: "LinkedIn", href: "https://linkedin.com/company/jayant-systems" },
    { name: "X (Twitter)", href: "https://x.com/JayantSystems" },
    { name: "Instagram", href: "https://www.instagram.com/jayantolhyan/" },
    { name: "YouTube", href: "https://www.youtube.com/@JayantWebAISystems" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Refund & Cancellation", href: "/refund-policy" },
    { name: "Pricing Policy", href: "/pricing-policy" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Disclaimer", href: "/disclaimer" },
  ];

  return (
    <footer aria-label="Footer navigation" className="w-full border-t border-border-custom bg-card-bg/60 backdrop-blur-md pt-16 md:pt-20 pb-12 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        
        {/* Main 4-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-border-custom/80">
          
          {/* Column 1: Brand & Direct Connect (Col span 4) */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group mb-4">
              <div className="size-10 rounded-xl bg-[#0B0F19] text-white border border-white/10 p-1 flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <rect x="10" y="10" width="180" height="180" rx="42" fill="none" stroke="currentColor" strokeWidth="16" />
                  <path d="M 100 50 L 132 50 L 132 115 C 132 135, 115 152, 95 152 C 78 152, 65 140, 65 125 L 89 125 C 89 130, 91 132, 95 132 C 99 132, 108 128, 108 115 L 108 72 L 100 72 Z" fill="currentColor" />
                  <path d="M 52 108 L 82 108 L 82 128 L 67 141 L 65 128 L 52 128 Z" fill="#FF8A00" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-base font-bold text-text-base tracking-tight leading-tight">
                  Jayant Web & AI Systems
                </span>
                <span className="font-mono text-[9px] tracking-widest uppercase text-text-muted">
                  SOLO ENGINEERING PRACTICE
                </span>
              </div>
            </Link>

            {/* Positioning Statement */}
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-5 max-w-sm">
              I build high-converting websites and AI automation systems that help Indian SMBs and startup founders generate leads and operate without complexity.
            </p>

            {/* Availability Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-semibold mb-6">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for new projects (2–4 wk delivery)</span>
            </div>

            {/* Direct Contact info */}
            <div className="space-y-2 text-xs font-mono text-text-muted mb-6">
              <a href="mailto:jayantwebaisystems@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="size-3.5 text-primary" />
                <span>jayantwebaisystems@gmail.com</span>
              </a>
              <a href="tel:+919667344125" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="size-3.5 text-primary" />
                <span>+91 96673 44125</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="size-3.5 text-primary" />
                <span>Dwarka, New Delhi &bull; Remote Globally</span>
              </div>
            </div>

            {/* Social Channels */}
            <div className="flex flex-wrap items-center gap-2">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-lg border border-border-custom bg-card-bg text-[11px] font-mono font-medium text-text-muted hover:text-primary hover:border-primary/40 transition-colors"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Solutions & Core Services (Col span 3) */}
          <div className="lg:col-span-3 flex flex-col gap-6 text-left">
            <div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-primary block mb-3">
                Solutions & Offers
              </span>
              <ul className="space-y-2 text-xs text-text-muted">
                {solutionsLinks.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="hover:text-text-base hover:underline transition-colors block py-0.5">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-primary block mb-3">
                Core Navigation
              </span>
              <ul className="space-y-2 text-xs text-text-muted">
                {coreLinks.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="hover:text-text-base hover:underline transition-colors block py-0.5">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-primary block mb-3">
                Target Industries
              </span>
              <ul className="space-y-2 text-xs text-text-muted">
                {industryLinks.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="hover:text-text-base hover:underline transition-colors block py-0.5">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Technologies & Engineering (Col span 3) */}
          <div className="lg:col-span-3 flex flex-col gap-6 text-left">
            <div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-primary block mb-3">
                Technology Stacks
              </span>
              <ul className="space-y-2 text-xs text-text-muted">
                {techLinks.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="hover:text-text-base hover:underline transition-colors block py-0.5">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-primary block mb-3">
                Resources & Case Studies
              </span>
              <ul className="space-y-2 text-xs text-text-muted">
                {resourceLinks.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="hover:text-text-base hover:underline transition-colors block py-0.5">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4: Company & Client Support (Col span 2) */}
          <div className="lg:col-span-2 flex flex-col gap-6 text-left">
            <div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-primary block mb-3">
                Company & Trust
              </span>
              <ul className="space-y-2 text-xs text-text-muted">
                {companyLinks.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="hover:text-text-base hover:underline transition-colors block py-0.5">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-primary block mb-3">
                Client Support
              </span>
              <ul className="space-y-2 text-xs text-text-muted">
                {supportLinks.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="hover:text-text-base hover:underline transition-colors block py-0.5">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Legal Links & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-text-muted">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-2">
            {legalLinks.map((item) => (
              <Link key={item.name} href={item.href} className="hover:text-primary transition-colors">
                {item.name}
              </Link>
            ))}
          </div>

          <div className="text-center sm:text-right shrink-0">
            <span>&copy; {currentYear} Jayant Web & AI Systems. All rights reserved.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
