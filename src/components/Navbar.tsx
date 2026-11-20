"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BrandLogo from "@/components/BrandLogo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-spy for homepage sections
  useEffect(() => {
    if (pathname !== "/") return;

    const sectionIds = ["work", "services", "pricing", "process", "about", "faq", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  if (pathname?.startsWith("/proposal/") || pathname?.startsWith("/admin/sales")) {
    return null;
  }

  const navItems = [
    {
      label: "Work",
      href: pathname === "/" ? "#work" : "/portfolio",
      sectionId: "work",
      matchPath: "/portfolio",
    },
    {
      label: "Services",
      href: pathname === "/" ? "#services" : "/services",
      sectionId: "services",
      matchPath: "/services",
    },
    {
      label: "Pricing",
      href: pathname === "/" ? "#pricing" : "/pricing",
      sectionId: "pricing",
      matchPath: "/pricing",
    },
    {
      label: "Process",
      href: pathname === "/" ? "#process" : "/process",
      sectionId: "process",
      matchPath: "/process",
    },
    {
      label: "About",
      href: pathname === "/" ? "#about" : "/about",
      sectionId: "about",
      matchPath: "/about",
    },
    {
      label: "Contact",
      href: pathname === "/" ? "#contact" : "/contact",
      sectionId: "contact",
      matchPath: "/contact",
    },
  ];

  const primaryCtaHref = pathname === "/" ? "#contact" : "/contact";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full bg-white/90 backdrop-blur-md transition-[border-color] duration-300 border-b ${
        scrolled ? "border-neutral-200" : "border-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-10 py-3"
      >
        <div className="flex items-center justify-between gap-4">
          {/* Wordmark & Original Monogram */}
          <Link href="/" className="text-left focus:outline-none">
            <BrandLogo theme="light" variant="horizontal" showSubtitle={false} />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-1.5">
            {navItems.map((item) => {
              const isActive =
                pathname === "/"
                  ? activeSection === item.sectionId
                  : pathname?.startsWith(item.matchPath);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-3.5 py-2 text-[15px] font-medium transition-colors ${
                    isActive ? "text-neutral-950" : "text-neutral-500 hover:text-neutral-950"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Primary CTA & Studio Status */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href={primaryCtaHref}
              className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white px-5 text-sm font-medium transition-colors"
            >
              <span>Book a call</span>
              <ArrowUpRight className="size-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex size-11 items-center justify-center md:hidden text-neutral-950 rounded-full border border-neutral-200 bg-white"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-3 pt-3 border-t border-neutral-200 md:hidden flex flex-col gap-1 overflow-hidden pb-2"
            >
              {navItems.map((item) => {
                const isActive =
                  pathname === "/"
                    ? activeSection === item.sectionId
                    : pathname?.startsWith(item.matchPath);
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex min-h-11 items-center px-1 text-base font-medium transition-colors ${
                      isActive ? "text-neutral-950" : "text-neutral-600 hover:text-neutral-950"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="pt-2.5 mt-1.5 border-t border-neutral-200 flex flex-col gap-2">
                <Link
                  href={primaryCtaHref}
                  onClick={() => setIsOpen(false)}
                  className="w-full inline-flex min-h-12 items-center justify-center gap-1.5 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white text-sm font-medium transition-colors"
                >
                  <span>Book a 15-min call</span>
                  <ArrowUpRight className="size-3.5" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
