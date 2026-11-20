"use client";

import React, { useEffect, useState } from "react";
import DoodleCrewFooter, { type CrewMember, type FooterColumn } from "@/components/ui/doodle-crew-footer";
import { CONTACT_INFO } from "@/data/contact";

import type { FooterLink } from "./SiteFooter";

/*
 * Founder page footer — the hand-drawn "doodle crew" footer (src/components/ui/doodle-crew-footer)
 * dressed in the studio palette: flame field, ink type (6.3:1, DESIGN.md §4), the
 * JAYANT wordmark stamped in Bricolage, real links and contact routes only.
 */

// The crew lives on the letters J-A-Y-A-N-T (indexes 0–5). Lines are playful but make no new claims.
const CREW: CrewMember[] = [
  { kind: "yeti", letter: 0, seat: "front", offset: -1.15, name: "Bruno", says: "Heavy lifting? That's our job." },
  { kind: "bird", letter: 1, seat: "top", offset: 0.02, name: "Pip", says: "Tweet us. Or WhatsApp. Either works." },
  { kind: "kid", letter: 3, seat: "top", offset: -0.05, name: "Juno", says: "Founder-led. A real human replies." },
  { kind: "ghost", letter: 4, seat: "behind", offset: 0, name: "Boo", says: "Boo! …we reply within one working day." },
  { kind: "cat", letter: 5, seat: "front", offset: 0.48, flip: true, name: "Patch", says: "Nice cursor. Book a call?" },
];

const PALETTE = {
  background: "#F37021", // flame
  ink: "#161310", // ink
  accent: "#F7F1EA", // paper: link squiggles, solid-button lip, bird's crest
  soft: "color-mix(in oklab, #161310 86%, #F37021)", // secondary text, ≥5:1 on flame
};

/** The J monogram from BrandLogo, drawn in ink for the round badge. */
const Monogram = (
  <svg viewBox="0 0 200 200" width="26" height="26" aria-hidden="true">
    <path
      d="M 100 50 L 132 50 L 132 115 C 132 135, 115 152, 95 152 C 78 152, 65 140, 65 125 L 89 125 C 89 130, 91 132, 95 132 C 99 132, 108 128, 108 115 L 108 72 L 100 72 Z"
      fill="#161310"
    />
    <path d="M 52 108 L 82 108 L 82 128 L 67 141 L 65 128 L 52 128 Z" fill="#F7F1EA" />
  </svg>
);

const FALLBACK_DISPLAY = '"Bricolage Grotesque", "Arial Black", ui-sans-serif, system-ui, sans-serif';

export function FounderDoodleFooter({ services = [], industries = [] }: { services?: FooterLink[]; industries?: FooterLink[] }) {
  // The wordmark is measured on a canvas, which can't resolve CSS variables, so read
  // next/font's real family list for Bricolage once it is available.
  const [display, setDisplay] = useState(FALLBACK_DISPLAY);
  useEffect(() => {
    const family = getComputedStyle(document.documentElement).getPropertyValue("--font-bricolage").trim();
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time read of a DOM value unavailable during SSR
    if (family && !family.includes("var(")) setDisplay(family);
  }, []);

  const toLinks = (items: FooterLink[]) => items.map((i) => ({ label: i.name, href: i.href }));

  const columns: FooterColumn[] = [
    { title: "Services", links: [{ label: "All services", href: "/services" }, ...toLinks(services)] },
    { title: "Industries", links: [{ label: "All industries", href: "/industries" }, ...toLinks(industries)] },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Founder", href: "/company/founder" },
        { label: "Process", href: "/process" },
        { label: "Commitments", href: "/company/why-choose-us" },
        { label: "Work", href: "/portfolio" },
        { label: "Case studies", href: "/resources/case-studies" },
        { label: "Verified delivery", href: "/company/testimonials" },
        { label: "Tools & platforms", href: "/company/partners" },
        { label: "Insights", href: "/blog" },
        { label: "Pricing", href: "/pricing" },
        { label: "FAQ", href: "/faq" },
        { label: "Support", href: "/support" },
        { label: "Careers", href: "/company/careers" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "Book a call", href: CONTACT_INFO.bookingPath },
        { label: "Send a brief", href: "/contact" },
        { label: "Email us", href: `mailto:${CONTACT_INFO.email}` },
        { label: "WhatsApp", href: CONTACT_INFO.whatsappUrl },
        { label: CONTACT_INFO.whatsappNumber, href: CONTACT_INFO.phoneTel },
      ],
    },
  ];

  return (
    <DoodleCrewFooter
      wordmark="JAYANT"
      brand="Jayant Systems"
      logo={Monogram}
      blurb="Founder-led digital studio in New Delhi. Websites, software, AI, automation, design and growth — one partner for your entire digital ecosystem."
      tagline="You run the business. We handle the digital."
      columns={columns}
      actions={[
        { label: "Send a brief", href: "/contact", icon: "plane", variant: "outline" },
        { label: "Book a 15-min call", href: CONTACT_INFO.bookingPath, icon: "bolt", variant: "solid" },
      ]}
      copyright={`© ${new Date().getFullYear()} Jayant Systems · Dwarka, New Delhi · Remote worldwide`}
      legal={[
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
        { label: "Refunds", href: "/refund-policy" },
        { label: "Pricing policy", href: "/pricing-policy" },
        { label: "Cookies", href: "/cookies" },
        { label: "Disclaimer", href: "/disclaimer" },
      ]}
      socials={CONTACT_INFO.socials.map((s) => ({ label: s.name, href: s.href }))}
      crew={CREW}
      doodles={["star", "bolt", "sparkle", "plane", "spiral", "star", "bolt", "sparkle"]}
      doodleCount={10}
      palette={PALETTE}
      fontFamily={display}
      serifFamily="var(--font-geist), ui-sans-serif, system-ui, sans-serif"
      tracking={-0.03}
      height="100svh"
      collapsible
    />
  );
}

export default FounderDoodleFooter;
