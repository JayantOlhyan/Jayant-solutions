"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { Label } from "./Pill";

export function SiteFooter() {
  const pathname = usePathname();

  // Same proposal/admin exclusion as Navbar & old Footer
  if (
    pathname === "/proposal" ||
    pathname?.startsWith("/proposal/") ||
    pathname?.startsWith("/admin/sales") ||
    pathname?.startsWith("/admin/")
  ) {
    return null;
  }

  const currentYear = new Date().getFullYear();

  const workLinks = [
    { name: "Selected Work", href: "/portfolio" },
    { name: "Engineering Approach", href: "/process" },
    { name: "Client FAQs", href: "/faq" },
  ];

  const serviceLinks = [
    { name: "Services Overview", href: "/services" },
    { name: "AI Chatbot Development", href: "/services/ai-chatbot-development" },
    { name: "Custom AI Systems & Agents", href: "/services/ai-development" },
    { name: "API & Backend Engineering", href: "/services/api-development" },
    { name: "Business Process Automation", href: "/services/business-automation" },
    { name: "Cloud Architecture & DevOps", href: "/services/cloud-and-devops" },
    { name: "Custom Software Development", href: "/services/custom-software-development" },
    { name: "Mobile Application Development", href: "/services/mobile-app-development" },
    { name: "Rapid MVP Engineering", href: "/services/mvp-development" },
    { name: "SaaS Platform Engineering", href: "/services/saas-development" },
    { name: "Strategic Technology Consulting", href: "/services/technology-consulting" },
    { name: "Product & Design Systems", href: "/services/ui-ux-design" },
    { name: "High-Performance Web Development", href: "/services/website-development" },
  ];

  const pricingLinks = [
    { name: "Pricing & Models", href: "/pricing" },
    { name: "Enterprise Plans", href: "/pricing/enterprise-plans" },
    { name: "Maintenance & Retainers", href: "/pricing/maintenance-plans" },
  ];

  const companyLinks = [
    { name: "About JAYANT SYSTEMS", href: "/about" },
    { name: "Founder Profile", href: "/company/founder" },
    { name: "Why JAYANT SYSTEMS", href: "/company/why-choose-us" },
    { name: "Client Proof & Records", href: "/company/testimonials" },
    { name: "Engineering Network", href: "/company/careers" },
    { name: "Technology Partners", href: "/company/partners" },
  ];

  const resourceLinks = [
    { name: "Production Case Studies", href: "/resources/case-studies" },
    { name: "Architecture Guides", href: "/resources/downloads" },
    { name: "Industries We Serve", href: "/resources/industries-we-serve" },
    { name: "Technology Stack", href: "/resources/technologies-we-use" },
  ];

  const supportLinks = [
    { name: "Support Center", href: "/support" },
    { name: "Client Portal", href: "/support/client-portal" },
    { name: "Report an Issue", href: "/support/report-a-bug" },
    { name: "System Status", href: "/support/service-status" },
  ];

  const journalLinks = [
    { name: "Engineering Blog", href: "/blog" },
    { name: "Latest Publication", href: "/blog/proper-length-post" },
  ];

  const contactLinks = [
    { name: "Start a Conversation", href: "/contact" },
    { name: "Book Discovery Call", href: "/contact/book-a-consultation" },
    { name: "Request a Quote", href: "/contact/request-a-quote" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Refund & Cancellation", href: "/refund-policy" },
    { name: "Pricing Policy", href: "/pricing-policy" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Legal Disclaimer", href: "/disclaimer" },
  ];

  const socials = [
    { name: "GitHub", href: "https://github.com/JayantOlhyan" },
    { name: "LinkedIn", href: "https://linkedin.com/company/jayant-systems" },
    { name: "X (Twitter)", href: "https://x.com/JayantSystems" },
    { name: "Instagram", href: "https://www.instagram.com/jayantolhyan/" },
    { name: "YouTube", href: "https://www.youtube.com/@JayantWebAISystems" },
  ];

  return (
    <footer
      aria-label="Site footer"
      className="w-full bg-[#0B0B0C] text-[#F4F3F0] pt-16 sm:pt-20 lg:pt-24 pb-12 border-t border-[#27272A]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col gap-12 sm:gap-16">
        
        {/* Top Contact Block */}
        <div className="pb-12 border-b border-[#27272A] flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="flex flex-col gap-4 max-w-xl">
            <Link href="/" aria-label="JAYANT SYSTEMS Home" className="focus-visible:outline-2 focus-visible:outline-[#E8590C] rounded-lg w-fit">
              <BrandLogo theme="dark" variant="horizontal" showSubtitle={false} />
            </Link>
            <p className="text-sm sm:text-base text-[#6B6862] leading-relaxed">
              JAYANT SYSTEMS designs and builds high-performance websites, custom web applications, and AI automation workflows with strict engineering accountability and complete source-code ownership.
            </p>
          </div>

          {/* Contact Details (Email, WhatsApp, Location) - No orange */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 text-xs sm:text-sm font-mono text-[#F4F3F0]">
            <a
              href="mailto:jayantwebaisystems@gmail.com"
              className="inline-flex items-center gap-2 hover:underline text-[#F4F3F0] focus-visible:outline-2 focus-visible:outline-[#E8590C]"
            >
              <Mail className="size-4 text-[#6B6862] shrink-0" />
              <span>jayantwebaisystems@gmail.com</span>
            </a>
            <a
              href="https://wa.me/919667344125"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:underline text-[#F4F3F0] focus-visible:outline-2 focus-visible:outline-[#E8590C]"
            >
              <Phone className="size-4 text-[#6B6862] shrink-0" />
              <span>WhatsApp +91 96673 44125</span>
            </a>
            <div className="inline-flex items-center gap-2 text-[#6B6862]">
              <MapPin className="size-4 text-[#6B6862] shrink-0" />
              <span>Dwarka, New Delhi &bull; working worldwide</span>
            </div>
          </div>
        </div>

        {/* Public Routes Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 sm:gap-10 text-xs">
          
          {/* Column 1: Services (12) */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-2 flex flex-col gap-3">
            <Label className="text-[#6B6862] text-[11px] font-semibold">Services</Label>
            <ul className="flex flex-col gap-2 text-[#6B6862]">
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors duration-200 block py-0.5 focus-visible:outline-2 focus-visible:outline-[#E8590C]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Work & Pricing */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <Label className="text-[#6B6862] text-[11px] font-semibold">Work</Label>
              <ul className="flex flex-col gap-2 text-[#6B6862]">
                {workLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors duration-200 block py-0.5 focus-visible:outline-2 focus-visible:outline-[#E8590C]"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <Label className="text-[#6B6862] text-[11px] font-semibold">Pricing</Label>
              <ul className="flex flex-col gap-2 text-[#6B6862]">
                {pricingLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors duration-200 block py-0.5 focus-visible:outline-2 focus-visible:outline-[#E8590C]"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Company */}
          <div className="flex flex-col gap-3">
            <Label className="text-[#6B6862] text-[11px] font-semibold">Company</Label>
            <ul className="flex flex-col gap-2 text-[#6B6862]">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors duration-200 block py-0.5 focus-visible:outline-2 focus-visible:outline-[#E8590C]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources & Support */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <Label className="text-[#6B6862] text-[11px] font-semibold">Resources</Label>
              <ul className="flex flex-col gap-2 text-[#6B6862]">
                {resourceLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors duration-200 block py-0.5 focus-visible:outline-2 focus-visible:outline-[#E8590C]"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <Label className="text-[#6B6862] text-[11px] font-semibold">Support</Label>
              <ul className="flex flex-col gap-2 text-[#6B6862]">
                {supportLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors duration-200 block py-0.5 focus-visible:outline-2 focus-visible:outline-[#E8590C]"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 5: Journal & Contact */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <Label className="text-[#6B6862] text-[11px] font-semibold">Journal</Label>
              <ul className="flex flex-col gap-2 text-[#6B6862]">
                {journalLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors duration-200 block py-0.5 focus-visible:outline-2 focus-visible:outline-[#E8590C]"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <Label className="text-[#6B6862] text-[11px] font-semibold">Contact</Label>
              <ul className="flex flex-col gap-2 text-[#6B6862]">
                {contactLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors duration-200 block py-0.5 focus-visible:outline-2 focus-visible:outline-[#E8590C]"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Social Channels */}
        <div className="pt-6 border-t border-[#27272A] flex flex-wrap items-center gap-2">
          {socials.map((social) => (
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
