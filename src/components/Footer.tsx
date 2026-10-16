"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Phone, MapPin } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

export default function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith("/proposal/") || pathname?.startsWith("/admin/sales")) return null;

  const currentYear = new Date().getFullYear();

  const coreLinks = [
    { name: "Home", href: "/" },
    { name: "Selected Work", href: "/portfolio" },
    { name: "Capabilities & Services", href: "/services" },
    { name: "Engineering Approach", href: "/process" },
    { name: "Pricing & Engagement", href: "/pricing" },
    { name: "Client FAQs", href: "/faq" },
    { name: "Start a Conversation", href: "/contact" },
  ];

  const companyLinks = [
    { name: "About JAYANT SYSTEMS", href: "/about" },
    { name: "Founder Profile", href: "/company/founder" },
    { name: "Why JAYANT SYSTEMS", href: "/company/why-choose-us" },
    { name: "Collaborator Network", href: "/company/careers" },
    { name: "Technology Ecosystem", href: "/company/partners" },
    { name: "Verified Delivery Proof", href: "/company/testimonials" },
  ];

  const resourceLinks = [
    { name: "Engineering Blog", href: "/blog" },
    { name: "Case Studies Library", href: "/resources/case-studies" },
    { name: "Technologies We Use", href: "/resources/technologies-we-use" },
    { name: "Industries We Serve", href: "/resources/industries-we-serve" },
    { name: "Architecture Guides", href: "/resources/downloads" },
  ];

  const supportLinks = [
    { name: "Support Center", href: "/support" },
    { name: "Client Proposal Access", href: "/proposal" },
    { name: "Client Portal", href: "/support/client-portal" },
    { name: "Maintenance & Retainers", href: "/services" },
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
    <footer aria-label="Footer navigation" className="w-full border-t border-slate-800 bg-[#0A0F1D] text-slate-300 pt-16 md:pt-20 pb-12 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        
        {/* Main 4-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-slate-800/80">
          
          {/* Column 1: Brand & Direct Connect (Col span 4) */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            {/* Logo */}
            <Link href="/" className="mb-4 focus:outline-none">
              <BrandLogo
                theme="dark"
                variant="horizontal"
                subtitle="FOUNDER-LED TECHNOLOGY STUDIO"
              />
            </Link>

            {/* Positioning Statement */}
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5 max-w-sm">
              JAYANT SYSTEMS designs and builds high-performance websites, custom software products, and practical AI-powered workflows for real-world businesses.
            </p>

            {/* Availability Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold mb-6">
              <span className="size-2 rounded-full bg-emerald-500" />
              <span>Accepting new project inquiries</span>
            </div>

            {/* Direct Contact info */}
            <div className="space-y-2 text-xs font-mono text-slate-400 mb-6">
              <a href="mailto:jayantwebaisystems@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="size-3.5 text-blue-400" />
                <span>jayantwebaisystems@gmail.com</span>
              </a>
              <a href="tel:+919667344125" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="size-3.5 text-blue-400" />
                <span>+91 96673 44125</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="size-3.5 text-blue-400" />
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
                  className="px-2.5 py-1 rounded-lg border border-slate-800 bg-slate-900/80 text-[11px] font-mono font-medium text-slate-300 hover:text-white hover:border-blue-500/50 transition-colors"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Solutions & Core Services (Col span 3) */}
          <div className="lg:col-span-3 flex flex-col gap-6 text-left">
            <div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-blue-400 block mb-3">
                Core Navigation
              </span>
              <ul className="space-y-2 text-xs text-slate-400">
                {coreLinks.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="hover:text-white hover:underline transition-colors block py-0.5">
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
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-blue-400 block mb-3">
                Resources & Case Studies
              </span>
              <ul className="space-y-2 text-xs text-slate-400">
                {resourceLinks.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="hover:text-white hover:underline transition-colors block py-0.5">
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
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-blue-400 block mb-3">
                Studio & Trust
              </span>
              <ul className="space-y-2 text-xs text-slate-400">
                {companyLinks.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="hover:text-white hover:underline transition-colors block py-0.5">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-blue-400 block mb-3">
                Client Support
              </span>
              <ul className="space-y-2 text-xs text-slate-400">
                {supportLinks.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="hover:text-white hover:underline transition-colors block py-0.5">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Legal Links & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-2">
            {legalLinks.map((item) => (
              <Link key={item.name} href={item.href} className="hover:text-white transition-colors">
                {item.name}
              </Link>
            ))}
          </div>

          <div className="text-center sm:text-right shrink-0">
            <span>&copy; {currentYear} JAYANT SYSTEMS. All rights reserved.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
