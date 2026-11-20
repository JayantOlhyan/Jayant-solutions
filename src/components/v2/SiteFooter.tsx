"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Phone, MapPin, ArrowUpRight, Calendar } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { CONTACT_INFO } from "@/data/contact";

export type FooterLink = { name: string; href: string };

export function SiteFooter({ services = [], industries = [] }: { services?: FooterLink[]; industries?: FooterLink[] }) {
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
    { name: "About", href: "/about" },
    { name: "Founder", href: "/company/founder" },
    { name: "Process", href: "/process" },
    { name: "Commitments", href: "/company/why-choose-us" },
    { name: "Work", href: isHomePage ? "#work" : "/portfolio" },
    { name: "Case studies", href: "/resources/case-studies" },
    { name: "Verified delivery", href: "/company/testimonials" },
    { name: "Tools & platforms", href: "/company/partners" },
    { name: "Insights", href: "/blog" },
    { name: "Pricing", href: "/pricing" },
    { name: "FAQ", href: "/faq" },
    { name: "Support", href: "/support" },
    { name: "Careers", href: "/company/careers" },
    { name: "Book a call", href: CONTACT_INFO.bookingPath, highlight: true },
  ];
  const linkGroups = [
    { title: "Services", links: [{ name: "All services", href: "/services" }, ...services] },
    { title: "Industries", links: [{ name: "All industries", href: "/industries" }, ...industries] },
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
        <div className="grid gap-10 pb-10 border-b border-[#27272A] lg:grid-cols-12">
          <div className="flex flex-col gap-4 max-w-lg lg:col-span-4">
            <Link
              href="/"
              aria-label="JAYANT SYSTEMS Home"
              className="focus-visible:outline-2 focus-visible:outline-[#E8590C] rounded-lg w-fit"
            >
              <BrandLogo theme="dark" variant="horizontal" showSubtitle={false} />
            </Link>
            <p className="text-lg sm:text-xl font-medium leading-snug text-white">
              You run the business.
              <br />
              <span className="text-[#F37021]">We handle the digital.</span>
            </p>
            <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
              Founder-led digital agency in New Delhi. Websites, software, AI, automation, design and growth — one partner for
              your entire digital ecosystem.
            </p>
            <p className="font-mono text-[11px] uppercase tracking-wider text-[#A1A1AA]">Build · Automate · Create · Grow</p>
          </div>

          {/* Focused Navigation & Quick Contact */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4 lg:col-span-8">
            {linkGroups.map((g) => (
              <div key={g.title} className="flex flex-col gap-3">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#A1A1AA] font-semibold">{g.title}</span>
                <ul className="flex flex-col gap-2.5 text-sm">
                  {g.links.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="text-[#A1A1AA] hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-[#E8590C]">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {/* Primary Navigation */}
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#A1A1AA] font-semibold">
                Company
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
            <div className="col-span-2 flex min-w-0 flex-col gap-3 sm:col-span-1">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#A1A1AA] font-semibold">
                Direct Contact
              </span>
              <div className="flex flex-col gap-2.5 text-xs sm:text-sm font-mono text-[#A1A1AA]">
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="inline-flex items-center gap-2 text-white hover:underline focus-visible:outline-2 focus-visible:outline-[#E8590C]"
                >
                  <Mail className="size-4 text-[#6B6862] shrink-0" aria-hidden="true" />
                  <span className="break-all">{CONTACT_INFO.email}</span>
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
