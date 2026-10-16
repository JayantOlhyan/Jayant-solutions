"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Phone, MapPin, ArrowUpRight, ArrowRight } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

export default function Footer() {
  const pathname = usePathname();
  const [istTime, setIstTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const timeStr = now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        });
        setIstTime(timeStr);
      } catch {
        setIstTime("IST");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000 * 30);
    return () => clearInterval(interval);
  }, []);

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
    <footer aria-label="Footer navigation" className="w-full border-t border-slate-800 bg-[#0A0E17] text-slate-300 pt-16 md:pt-24 pb-12 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        
        {/* Metalab-Inspired Oversized Conversational Invitation Stage */}
        <div className="pb-16 md:pb-24 border-b border-slate-800/90">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#FF8A00] font-semibold">
                  / Next Step &bull; JAYANT SYSTEMS
                </span>
                <span className="text-slate-700">&mdash;</span>
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-emerald-400">
                  <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  DEL {istTime ? `${istTime} IST` : "09:00 - 20:00 IST"} &bull; Available for Scoping
                </span>
              </div>
              <h2 className="font-display metalab-headline text-4xl sm:text-6xl lg:text-[76px] font-extrabold text-white leading-[0.96]">
                Let&apos;s build something <span className="text-[#FF8A00]">worth talking about.</span>
              </h2>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5 lg:items-end justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary hover:bg-primary-hover text-white px-7 py-4 text-sm font-display font-bold transition-all duration-200 shadow-sm w-full sm:w-auto"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="size-4" />
              </Link>
              <a
                href="mailto:jayantwebaisystems@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/90 hover:bg-slate-800 text-slate-200 px-6 py-3.5 text-xs font-mono font-semibold transition-colors w-full sm:w-auto"
              >
                <Mail className="size-3.5 text-[#FF8A00]" />
                <span>jayantwebaisystems@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main 4-Column Editorial Grid with Hairline Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 py-14 border-b border-slate-800/80">
          
          {/* Column 1: Brand & Direct Connect (Col span 4) */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <Link href="/" className="mb-4 focus:outline-none">
              <BrandLogo
                theme="dark"
                variant="horizontal"
                subtitle="FOUNDER-LED TECHNOLOGY STUDIO"
              />
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 max-w-sm">
              JAYANT SYSTEMS designs and builds websites, custom web applications, and practical AI-powered systems with strict engineering accountability and complete source-code ownership.
            </p>

            {/* Direct Contact info */}
            <div className="space-y-2 text-xs font-mono text-slate-400 mb-6">
              <a href="mailto:jayantwebaisystems@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="size-3.5 text-[#FF8A00]" />
                <span>jayantwebaisystems@gmail.com</span>
              </a>
              <a href="tel:+919667344125" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="size-3.5 text-[#FF8A00]" />
                <span>+91 96673 44125</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="size-3.5 text-[#FF8A00]" />
                <span>Dwarka, New Delhi &bull; Working Remotely Worldwide</span>
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
                  className="px-3 py-1 rounded-full border border-slate-800 bg-slate-900/80 text-[11px] font-mono font-medium text-slate-300 hover:text-white hover:border-[#FF8A00]/50 transition-colors inline-flex items-center gap-1 group"
                >
                  <span>{social.name}</span>
                  <ArrowUpRight className="size-3 text-slate-500 group-hover:text-[#FF8A00]" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Core Navigation (Col span 3) */}
          <div className="lg:col-span-3 flex flex-col gap-6 text-left">
            <div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#FF8A00] block mb-4">
                / Navigation
              </span>
              <ul className="space-y-2.5 text-xs text-slate-400">
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

          {/* Column 3: Resources & Case Studies (Col span 3) */}
          <div className="lg:col-span-3 flex flex-col gap-6 text-left">
            <div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#FF8A00] block mb-4">
                / Work &amp; Resources
              </span>
              <ul className="space-y-2.5 text-xs text-slate-400">
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

          {/* Column 4: Studio & Client Support (Col span 2) */}
          <div className="lg:col-span-2 flex flex-col gap-6 text-left">
            <div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#FF8A00] block mb-4">
                / Studio &amp; Trust
              </span>
              <ul className="space-y-2.5 text-xs text-slate-400">
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
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#FF8A00] block mb-4">
                / Client Support
              </span>
              <ul className="space-y-2.5 text-xs text-slate-400">
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
