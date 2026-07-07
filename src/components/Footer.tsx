import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const trustBadges = [
    "✅ AI-First Development",
    "🔒 Secure by Design",
    "⚡ Fast Delivery",
    "📱 Mobile Responsive",
    "☁️ Cloud Ready",
    "🚀 Startup Friendly",
    "🌍 Remote Worldwide",
    "💬 Free Consultation"
  ];

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Pricing", href: "/pricing" },
    { name: "Process", href: "/process" },
    { name: "Contact", href: "/contact" }
  ];

  const solutions = [
    { name: "AI Solutions", href: "/blog/ai-solutions" },
    { name: "Custom Software", href: "/blog/custom-software" },
    { name: "Web Development", href: "/blog/web-development" },
    { name: "Mobile Apps", href: "/blog/mobile-apps" },
    { name: "Business Automation", href: "/blog/business-automation" },
    { name: "Cloud Solutions", href: "/blog/cloud-solutions" }
  ];

  const resources = [
    { name: "Case Studies", href: "/portfolio" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "FAQs", href: "/#faq" },
    { name: "Pricing Guide", href: "/pricing" },
    { name: "Project Process", href: "/process" },
    { name: "Support Desk", href: "/support" }
  ];

  const socials = [
    { name: "GitHub", href: "https://github.com/JayantOlhyan" },
    { name: "LinkedIn", href: "https://linkedin.com/company/jayant-systems" },
    { name: "Twitter / X", href: "https://x.com/JayantSystems" },
    { name: "Instagram", href: "https://www.instagram.com/jayantolhyan/" },
    { name: "YouTube", href: "https://www.youtube.com/@JayantWebAISystems" }
  ];

  return (
    <footer className="w-full border-t border-border-custom bg-card-bg/25 pt-16 pb-8">
      {/* Top Footer Grid */}
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-6 gap-8 mb-12">
        {/* Brand Column */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="size-6 text-text-base">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <rect x="10" y="10" width="180" height="180" rx="42" fill="none" stroke="currentColor" strokeWidth="16" />
                <path d="M 100 50 L 132 50 L 132 115 C 132 135, 115 152, 95 152 C 78 152, 65 140, 65 125 L 89 125 C 89 130, 91 132, 95 132 C 99 132, 108 128, 108 115 L 108 72 L 100 72 Z" fill="currentColor" />
                <path d="M 52 108 L 82 108 L 82 128 L 67 141 L 65 128 L 52 128 Z" fill="#FF8A00" />
              </svg>
            </div>
            <span className="font-mono text-sm font-bold tracking-tight text-text-base">
              Jayant Web & AI Systems
            </span>
          </div>
          <p className="text-xs text-text-muted leading-relaxed">
            Building intelligent software, AI-powered solutions, and scalable digital products that help businesses innovate, automate, and grow.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-wider text-primary font-bold">Company</span>
          <ul className="space-y-1.5 text-xs text-text-muted">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="hover:text-text-base transition-colors">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Solutions */}
        <div className="flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-wider text-primary font-bold">Solutions</span>
          <ul className="space-y-1.5 text-xs text-text-muted">
            {solutions.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="hover:text-text-base transition-colors">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div className="flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-wider text-primary font-bold">Resources</span>
          <ul className="space-y-1.5 text-xs text-text-muted">
            {resources.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="hover:text-text-base transition-colors">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact/CTA */}
        <div className="flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-wider text-primary font-bold">Contact</span>
          <div className="space-y-3 text-xs">
            <a href="mailto:jayantwebaisystems@gmail.com" className="text-text-muted hover:text-text-base block truncate transition-colors">
              jayantwebaisystems@gmail.com
            </a>
            <div className="bg-primary/5 border border-primary/10 rounded-2xl p-3">
              <p className="font-semibold text-text-base mb-1">Let's Build Together</p>
              <p className="text-[10px] text-text-muted mb-2 leading-relaxed">
                Schedule a consultation to discuss your project requirements.
              </p>
              <a
                href="https://cal.com/jayant-web-and-ai-systems/strategy-call"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-1.5 text-[10px] font-mono font-bold bg-primary hover:bg-primary-hover text-white rounded-lg block transition-colors shadow-sm"
              >
                Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Social Icons row */}
      <div className="max-w-5xl mx-auto px-6 mb-8 border-y border-border-custom/20 py-4 flex items-center justify-between flex-wrap gap-4">
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
      </div>

      {/* Trust Badges */}
      <div className="max-w-5xl mx-auto px-6 mb-8">
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          {trustBadges.map((badge) => (
            <span
              key={badge}
              className="text-[9px] font-mono text-text-muted bg-neutral-100 dark:bg-neutral-900 border border-border-custom/25 px-2 py-0.5 rounded-full"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Copyright and Legal bar */}
      <div className="max-w-5xl mx-auto px-6 border-t border-border-custom/30 pt-8 flex flex-col gap-6">
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
            <span className="text-border-custom/50">•</span>
            <Link href="/accessibility" className="hover:text-primary hover:underline transition-colors">
              Accessibility
            </Link>
            <span className="text-border-custom/50">•</span>
            <Link href="/security" className="hover:text-primary hover:underline transition-colors">
              Security Policy
            </Link>
            <span className="text-border-custom/50">•</span>
            <Link href="/ai-policy" className="hover:text-primary hover:underline transition-colors">
              AI Usage Policy
            </Link>
          </div>
          <span className="text-[10px] font-mono text-text-muted shrink-0">
            Built with ❤️ in India. Dwarka, New Delhi.
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-border-custom/10 pt-4">
          <span className="text-[10px] font-mono text-text-muted">
            © 2026 Jayant Web & AI Systems. All Rights Reserved.
          </span>
          <span className="text-[9px] font-mono text-text-muted italic">
            Designed and Developed with Next.js, React, TypeScript, and AI.
          </span>
        </div>
      </div>
    </footer>
  );
}
