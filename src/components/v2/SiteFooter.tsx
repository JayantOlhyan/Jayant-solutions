"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { CONTACT_INFO } from "@/data/contact";
import FounderDoodleFooter from "./FounderDoodleFooter";

export type FooterLink = { name: string; href: string };

/*
 * Site footer — flame field, ink type (ink on flame = 6.3:1, DESIGN.md §4).
 * Bricolage for the closing line and wordmark, Geist for links, Geist Mono for labels.
 */
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

  // The Founder page gets the playful hand-drawn "doodle crew" footer; every other page keeps this one.
  if (pathname === "/company/founder") {
    return <FounderDoodleFooter services={services} industries={industries} />;
  }

  const isHomePage = pathname === "/";
  const currentYear = new Date().getFullYear();

  const company: FooterLink[] = [
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
  ];

  const groups = [
    { title: "Services", links: [{ name: "All services", href: "/services" }, ...services] },
    { title: "Industries", links: [{ name: "All industries", href: "/industries" }, ...industries] },
    { title: "Company", links: company },
  ];

  const legalLinks: FooterLink[] = [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
    { name: "Refunds & cancellation", href: "/refund-policy" },
    { name: "Pricing policy", href: "/pricing-policy" },
    { name: "Cookies", href: "/cookies" },
    { name: "Disclaimer", href: "/disclaimer" },
  ];

  const label = "font-mono text-[12px] font-medium uppercase tracking-[0.06em] text-[#161310]/80";
  const link =
    "draw text-[16px] font-medium leading-snug text-[#161310] transition-opacity hover:opacity-100";

  return (
    <footer aria-label="Site footer" className="relative isolate overflow-hidden bg-[#F37021] text-[#161310]">
      {/* Decorative loops, drawn in ink at low opacity */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <path
          d="M-80 210C120 40 330 60 360 210s-170 260-40 330 300-170 460-110 60 300 230 330 260-260 410-210 150 190 160 300"
          stroke="#161310"
          strokeOpacity=".07"
          strokeWidth="56"
          strokeLinecap="round"
        />
        <path
          d="M1520 80c-170 40-210 190-120 260s240-30 210 120-280 160-390 90-90-260-250-240-150 230-310 230"
          stroke="#F7F1EA"
          strokeOpacity=".16"
          strokeWidth="40"
          strokeLinecap="round"
        />
      </svg>

      {/* `studio` provides the shared button / link primitives; background stays flame */}
      <div className="studio !bg-transparent [&_:focus-visible]:!outline-[#161310]">
        <div className="container-x pt-20 md:pt-28">
          <div className="grid gap-14 lg:grid-cols-12">
            {/* Closing line + primary actions */}
            <div className="flex flex-col gap-8 lg:col-span-5">
              <p className={label}>Still scrolling?</p>
              <h2
                className="display-soft text-[#161310]"
                style={{ fontSize: "clamp(44px, 5.2vw, 80px)", lineHeight: 0.98, fontWeight: 700, letterSpacing: "-0.04em" }}
              >
                Seen enough.
                <br />
                Let&apos;s build yours.
              </h2>
              <div className="flex flex-wrap items-center gap-3">
                <Link href={CONTACT_INFO.bookingPath} className="btn-ink">
                  Book a 15-min call
                  <span className="dot !bg-[#F7F1EA]" aria-hidden="true">
                    <ArrowUpRight className="size-5" />
                  </span>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex min-h-[52px] items-center rounded-full border border-[#161310] px-6 font-medium transition-colors hover:bg-[#161310] hover:text-[#F7F1EA]"
                >
                  Send a brief
                </Link>
              </div>
              <dl className="grid gap-5">
                <div>
                  <dt className={label}>Email us</dt>
                  <dd className="mt-1.5">
                    <a href={`mailto:${CONTACT_INFO.email}`} className={`${link} break-all`}>
                      {CONTACT_INFO.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className={label}>WhatsApp</dt>
                  <dd className="mt-1.5">
                    <a href={CONTACT_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className={link}>
                      {CONTACT_INFO.whatsappNumber}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            {/* Link columns */}
            <nav aria-label="Footer" className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-4 lg:col-span-7">
              {groups.map((g) => (
                <div key={g.title} className={`flex flex-col gap-4 ${g.title === "Company" ? "col-span-2 sm:col-span-1" : ""}`}>
                  <p className={label}>{g.title}</p>
                  <ul className="flex flex-col gap-2.5">
                    {g.links.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} className={link}>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="flex flex-col gap-4">
                <p className={label}>Elsewhere</p>
                <ul className="flex flex-col gap-2.5">
                  {CONTACT_INFO.socials.map((s) => (
                    <li key={s.name}>
                      <a href={s.href} target="_blank" rel="noopener noreferrer" className={`${link} inline-flex items-center gap-1`}>
                        {s.name}
                        <ArrowUpRight className="size-3.5" aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>

          {/* Studio facts */}
          <div className="mt-20 grid gap-6 border-t border-[#161310]/20 pt-8 text-[15px] sm:grid-cols-3">
            <p>
              Founder-led studio.
              <br />
              Build · Automate · Create · Grow.
            </p>
            <p>
              {CONTACT_INFO.location.split(" · ")[0]},
              <br />
              {CONTACT_INFO.location.split(" · ")[1] ?? "India"}
            </p>
            <p className="sm:text-right">
              Mon – Sat
              <br />
              9:00 – 20:00 IST
            </p>
          </div>

          {/* Legal + copyright */}
          <div className="mt-8 flex flex-col gap-4 text-[13px] md:flex-row md:items-center md:justify-between">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="draw">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <p>&copy; {currentYear} Jayant Systems. All rights reserved.</p>
          </div>
        </div>

        {/* Edge-to-edge wordmark (decorative; the name is in the header and copyright) */}
        <div aria-hidden="true" className="overflow-hidden px-2 pt-10 md:px-4">
          <p
            data-wordmark
            className="display select-none whitespace-nowrap text-center uppercase leading-[.78] text-[#F7F1EA]"
            style={{ fontSize: "11.6vw", marginBottom: "-0.12em" }}
          >
            Jayant Systems
          </p>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
