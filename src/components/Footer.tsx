import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "AI Solutions Development", href: "/services" },
    { name: "Custom Web Development", href: "/services" },
    { name: "Business Automation", href: "/services" },
    { name: "Mobile App Development", href: "/services" },
    { name: "Cloud & Backend Engineering", href: "/services" },
    { name: "UI/UX & Product Design", href: "/services" }
  ];

  const navigation = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Process", href: "/process" },
    { name: "Contact", href: "/contact" }
  ];

  const resources = [
    { name: "Cal.com Strategy Booking", href: "https://cal.com/jayant-web-and-ai-systems/strategy-call" },
    { name: "WhatsApp Support", href: "https://wa.me/9667344125" },
    { name: "Email Inquiries", href: "mailto:jayantwebaisystems@gmail.com" }
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
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        {/* Navigation */}
        <div className="flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-wider text-primary font-bold">Navigation</span>
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

        {/* Services */}
        <div className="flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-wider text-primary font-bold">Services</span>
          <ul className="space-y-1.5 text-xs text-text-muted">
            {services.map((item) => (
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
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-text-base transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-wider text-primary font-bold">Social Links</span>
          <ul className="space-y-1.5 text-xs text-text-muted">
            {socials.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-text-base transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Brand, Copyright and Legal Compliance */}
      <div className="max-w-5xl mx-auto px-6 border-t border-border-custom/30 pt-8 flex flex-col gap-6">
        {/* Brand Lockup */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
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
          <span className="text-[11px] font-mono text-text-muted">
            © {currentYear} Jayant Olhyan. All system protocols active.
          </span>
        </div>

        {/* Legal Links bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border-custom/10 pt-4 text-center">
          <div className="flex flex-wrap items-center justify-center gap-4 text-[10px] text-text-muted font-mono">
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
              Pricing Policy
            </Link>
          </div>
          <span className="text-[10px] font-mono text-text-muted">
            Systems engineered in Dwarka, New Delhi.
          </span>
        </div>
      </div>
    </footer>
  );
}
