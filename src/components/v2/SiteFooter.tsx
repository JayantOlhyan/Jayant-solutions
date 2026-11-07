"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Phone, MapPin, ArrowUpRight, Calendar } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { CONTACT_INFO } from "@/data/contact";

export function SiteFooter() {
  const pathname = usePathname();

  // Exclude /proposal, /proposal/* and /admin/* (including /admin/sales)
  if (
    pathname === "/proposal" ||
    pathname?.startsWith("/proposal/") ||
    pathname?.startsWith("/admin/sales") ||
    pathname?.startsWith("/admin/")
  ) {
    return null;
  }

  const isHomePage = pathname === "/";
  const currentYear = new Date().getFullYear();

  const primaryNav = [
    { name: "Work", href: isHomePage ? "#work" : "/#work" },
    { name: "Services", href: isHomePage ? "#services" : "/#services" },
    { name: "About", href: isHomePage ? "#about" : "/#about" },
    { name: "Contact", href: isHomePage ? "#contact" : "/#contact" },
    { name: "Book a call", href: CONTACT_INFO.bookingPath, highlight: true },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Refund & Cancellation", href: "/refund-policy" },
    { name: "Pricing Policy", href: "/pricing-policy" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Legal Disclaimer", href: "/disclaimer" },
  ];

  return (
    <footer
      aria-label="Site footer"
      className="w-full bg-[#0B0B0C] text-[#F4F3F0] pt-14 sm:pt-16 pb-12 border-t border-[#27272A]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col gap-10 sm:gap-12">
        {/* Main Header / Bio & Navigation Split */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10 pb-10 border-b border-[#27272A]">
          <div className="flex flex-col gap-4 max-w-lg">
            <Link
              href="/"
              aria-label="JAYANT SYSTEMS Home"
              className="focus-visible:outline-2 focus-visible:outline-[#E8590C] rounded-lg w-fit"
            >
              <BrandLogo theme="dark" variant="horizontal" showSubtitle={false} />
            </Link>
            <p className="text-sm sm:text-base text-[#6B6862] leading-relaxed">
              Founder-led software studio based in New Delhi. We design and engineer high-performance websites, custom web applications, and AI workflows with direct founder accountability and complete source-code ownership.
            </p>
          </div>

          {/* Focused Navigation & Quick Contact */}
          <div className="flex flex-col sm:flex-row gap-8 lg:gap-16">
            {/* Primary Navigation */}
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#6B6862] font-semibold">
                Navigation
              </span>
              <ul className="flex flex-col gap-2.5 text-sm">
                {primaryNav.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`inline-flex items-center gap-1.5 transition-colors focus-visible:outline-2 focus-visible:outline-[#E8590C] ${
                        item.highlight
                          ? "text-white font-medium hover:text-[#FF8A00]"
                          : "text-[#A1A1AA] hover:text-white"
                      }`}
                    >
                      {item.highlight && <Calendar className="size-3.5 text-[#FF8A00]" aria-hidden="true" />}
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Contact Channels */}
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#6B6862] font-semibold">
                Direct Contact
              </span>
              <div className="flex flex-col gap-2.5 text-xs sm:text-sm font-mono text-[#A1A1AA]">
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="inline-flex items-center gap-2 text-white hover:underline focus-visible:outline-2 focus-visible:outline-[#E8590C]"
                >
                  <Mail className="size-4 text-[#6B6862] shrink-0" aria-hidden="true" />
                  <span>{CONTACT_INFO.email}</span>
                </a>
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white hover:underline focus-visible:outline-2 focus-visible:outline-[#E8590C]"
                >
                  <Phone className="size-4 text-[#6B6862] shrink-0" aria-hidden="true" />
                  <span>WhatsApp: {CONTACT_INFO.whatsappNumber}</span>
                </a>
                <div className="inline-flex items-center gap-2 text-[#6B6862]">
                  <MapPin className="size-4 text-[#6B6862] shrink-0" aria-hidden="true" />
                  <span>{CONTACT_INFO.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social / Professional Profiles */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {CONTACT_INFO.socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#27272A] bg-[#18181B] text-xs font-mono text-[#F4F3F0] hover:text-white hover:border-[#6B6862] transition-colors focus-visible:outline-2 focus-visible:outline-[#E8590C]"
              >
                <span>{social.name}</span>
                <ArrowUpRight className="size-3 text-[#6B6862]" aria-hidden="true" />
              </a>
            ))}
          </div>

          <div className="text-xs font-mono text-[#6B6862]">
            Studio hours: {CONTACT_INFO.hours}
          </div>
        </div>

        {/* Bottom Legal Links & Copyright */}
        <div className="pt-6 border-t border-[#27272A] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs font-mono text-[#6B6862]">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {legalLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-[#E8590C]"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div>
            &copy; {currentYear} JAYANT SYSTEMS. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
