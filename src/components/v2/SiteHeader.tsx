"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
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
    { label: "Work", href: isHomePage ? "#work" : "/#work" },
    { label: "Services", href: isHomePage ? "#services" : "/#services" },
    { label: "About", href: isHomePage ? "#about" : "/#about" },
    { label: "Contact", href: isHomePage ? "#contact" : "/#contact" },
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
        className={`fixed top-0 left-0 right-0 z-40 w-full h-[72px] transition-transform duration-250 ease-[cubic-bezier(0.2,0.7,0.2,1)] ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-[#E6E4E0]"
            : "bg-white border-b border-transparent"
        }`}
      >
        <div className="max-w-[1280px] h-full mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center shrink-0 focus-visible:outline-2 focus-visible:outline-[#E8590C] focus-visible:outline-offset-2 rounded-lg"
            aria-label="JAYANT SYSTEMS Home"
          >
            <BrandLogo theme="light" variant="horizontal" showSubtitle={false} />
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-1 lg:gap-2 flex-wrap"
          >
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-3.5 py-2 text-sm font-medium text-[#6B6862] hover:text-[#0B0B0C] transition-colors duration-200 rounded-full focus-visible:outline-2 focus-visible:outline-[#E8590C] focus-visible:outline-offset-2"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Primary CTA (Desktop) */}
          <div className="hidden md:flex items-center shrink-0">
            <Button variant="primary" size="md" href={CONTACT_INFO.bookingPath} arrow>
              Book a call
            </Button>
          </div>

          {/* Mobile Menu Toggle Button (44px target) */}
          <div className="flex md:hidden items-center">
            <button
              ref={toggleButtonRef}
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation-menu"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="inline-flex size-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-[#E6E4E0] bg-white text-[#0B0B0C] transition-colors hover:border-[#0B0B0C] focus-visible:outline-2 focus-visible:outline-[#E8590C] focus-visible:outline-offset-2 cursor-pointer"
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
          className="fixed inset-0 z-50 md:hidden bg-white flex flex-col justify-between p-6 sm:p-8 overflow-y-auto max-w-full overflow-x-hidden"
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
                className="min-h-[44px] flex items-center py-2 font-display text-3xl sm:text-4xl font-medium tracking-tight text-[#0B0B0C] hover:text-[#6B6862] transition-colors focus-visible:outline-2 focus-visible:outline-[#E8590C] focus-visible:outline-offset-2"
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
              href={isHomePage ? "#contact" : "/#contact"}
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
