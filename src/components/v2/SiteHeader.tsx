"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { Button } from "./Button";
import { useScrollDirection } from "./motion/useScrollDirection";
import { useLenis } from "./motion/SmoothScroll";
import { CONTACT_INFO } from "@/data/contact";

export function SiteHeader() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFocusInside, setIsFocusInside] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const toggleButtonRef = useRef<HTMLButtonElement | null>(null);
  const menuContainerRef = useRef<HTMLDivElement | null>(null);

  const { scrollDirection, scrollY } = useScrollDirection({ threshold: 12 });
  const { start: startLenis, stop: stopLenis } = useLenis();

  // Exclude /proposal, /proposal/* and /admin/* (including /admin/sales)
  const isExcluded =
    pathname === "/" || // homepage renders its own StudioHeader (src/components/studio)
    pathname === "/proposal" ||
    pathname?.startsWith("/proposal/") ||
    pathname?.startsWith("/admin/sales") ||
    pathname?.startsWith("/admin/");

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsMobileMenuOpen(false);
  }

  // Lock body scroll and stop Lenis when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      stopLenis();
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
        startLenis();
      };
    } else {
      startLenis();
    }
  }, [isMobileMenuOpen, startLenis, stopLenis]);

  // Handle window resize: close mobile menu if resized to desktop (>= 768px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  // Handle Escape key to close mobile menu and return focus to toggle
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        toggleButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  // Focus trap for mobile menu
  useEffect(() => {
    if (!isMobileMenuOpen || !menuContainerRef.current) return;

    const focusableElements = menuContainerRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // Focus the first focusable element inside the modal
    firstElement?.focus();

    const handleTabTrap = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    window.addEventListener("keydown", handleTabTrap);
    return () => window.removeEventListener("keydown", handleTabTrap);
  }, [isMobileMenuOpen]);

  // Track if focus is currently inside the header (so we don't hide while user is tabbing)
  const handleFocus = () => setIsFocusInside(true);
  const handleBlur = (e: React.FocusEvent) => {
    if (!headerRef.current?.contains(e.relatedTarget as Node)) {
      setIsFocusInside(false);
    }
  };

  if (isExcluded) return null;

  // Header hides on scroll down after 120px, reappears on scroll up;
  // never hides while the mobile menu is open or when focus is inside it.
  const shouldHide =
    scrollY > 120 &&
    scrollDirection === "down" &&
    !isMobileMenuOpen &&
    !isFocusInside;

  const isScrolled = scrollY > 20;
  const isHomePage = pathname === "/";

  const navLinks = [
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Work", href: isHomePage ? "#work" : "/portfolio" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        ref={headerRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
        aria-label="Site header"
        style={{
          transform: shouldHide ? "translateY(-100%)" : "translateY(0)",
        }}
        className={`studio fixed top-0 left-0 right-0 z-40 w-full h-[72px] transition-transform duration-250 ease-[cubic-bezier(0.2,0.7,0.2,1)] ${
          isScrolled
            ? "!bg-[#F7F1EA]/95 backdrop-blur-md border-b border-[#E2D7CA]"
            : "!bg-[#F7F1EA] border-b border-transparent"
        }`}
      >
        {/* Same grammar as the homepage StudioHeader: pills · wordmark · hours + CTA */}
        <div className="mx-auto grid h-full max-w-[1360px] grid-cols-[1fr_auto] md:grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 md:px-10">
          <nav aria-label="Primary navigation" className="hidden items-center gap-2 md:flex">
            {navLinks.slice(0, 4).map((item) => {
              const active = pathname === item.href || pathname?.startsWith(item.href + "/");
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`pill ${active ? "!bg-[#161310] !text-[#F7F1EA]" : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/"
            aria-label="JAYANT SYSTEMS Home"
            className="display justify-self-start whitespace-nowrap text-[19px] leading-none tracking-[-0.03em] text-[#B8430A] md:justify-self-center md:text-[26px]"
          >
            JAYANT SYSTEMS
          </Link>

          {/* Hours + primary CTA (desktop) */}
          <div className="hidden items-center justify-end gap-5 md:flex">
            <span className="hidden text-right text-[13px] leading-tight text-[#6B625A] lg:block">
              Mon – Sat
              <br />
              9:00 – 20:00 IST
            </span>
            <Link href="/contact" className="btn-ink !min-h-11 !text-[15px] !py-1 !pl-4 !pr-1">
              Let&apos;s talk
              <span className="dot !h-9 !w-9" aria-hidden="true">
                <ArrowUpRight className="size-4" />
              </span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button (44px target) */}
          <div className="flex md:hidden items-center justify-self-end">
            <button
              ref={toggleButtonRef}
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation-menu"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="inline-flex size-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-[#E2D7CA] bg-[#EFE5DA] text-[#161310] transition-colors hover:border-[#0B0B0C] focus-visible:outline-2 focus-visible:outline-[#E8590C] focus-visible:outline-offset-2 cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Overlay Menu */}
      {isMobileMenuOpen && (
        <div
          ref={menuContainerRef}
          id="mobile-navigation-menu"
          data-lenis-prevent
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="fixed inset-0 z-50 md:hidden bg-[#F7F1EA] flex flex-col justify-between p-6 sm:p-8 overflow-y-auto max-w-full overflow-x-hidden"
        >
          {/* Top Bar inside Overlay */}
          <div className="flex items-center justify-between gap-4 h-[56px] border-b border-[#E6E4E0] pb-4">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="focus-visible:outline-2 focus-visible:outline-[#E8590C] focus-visible:outline-offset-2 rounded-lg"
              aria-label="JAYANT SYSTEMS Home"
            >
              <BrandLogo theme="light" variant="horizontal" showSubtitle={false} />
            </Link>
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                toggleButtonRef.current?.focus();
              }}
              aria-label="Close navigation menu"
              className="inline-flex size-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-[#E6E4E0] text-[#0B0B0C] transition-colors hover:border-[#0B0B0C] focus-visible:outline-2 focus-visible:outline-[#E8590C] focus-visible:outline-offset-2 cursor-pointer"
            >
              <X className="size-5" />
            </button>
          </div>

          {/* Large Display-Size Navigation Links */}
          <nav aria-label="Mobile navigation links" className="flex flex-col gap-2 my-auto py-8">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="min-h-[44px] flex items-center py-2 font-display text-4xl sm:text-5xl font-bold tracking-[-0.03em] text-[#161310] hover:text-[#B8430A] transition-colors focus-visible:outline-2 focus-visible:outline-[#E8590C] focus-visible:outline-offset-2"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Bottom Action Block */}
          <div className="pt-6 border-t border-[#E6E4E0] flex flex-col gap-3">
            <Button
              variant="primary"
              size="lg"
              href={CONTACT_INFO.bookingPath}
              arrow
              className="w-full justify-between"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book a call
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href="/contact"
              className="w-full justify-between"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Send an inquiry
            </Button>
            <div className="flex flex-wrap items-center justify-between text-xs font-mono text-[#6B6862] pt-2">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:underline focus-visible:outline-2 focus-visible:outline-[#E8590C]"
              >
                {CONTACT_INFO.email}
              </a>
              <span>{CONTACT_INFO.phone}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SiteHeader;
