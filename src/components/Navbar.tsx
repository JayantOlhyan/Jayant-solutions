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

    const sectionIds = ["work", "services", "process", "about", "faq", "contact"];
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
    <header className="fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-6 py-3 transition-all duration-300 pointer-events-none">
      <nav
        aria-label="Main navigation"
        className={`max-w-7xl mx-auto pointer-events-auto bg-[#0A0F1D]/95 backdrop-blur-md border border-slate-800/90 rounded-xl transition-all duration-300 ${
          scrolled
            ? "py-2.5 px-4 sm:px-6 shadow-[0_12px_32px_rgba(2,6,23,0.45)]"
            : "py-3 px-5 sm:px-7 shadow-[0_4px_20px_rgba(2,6,23,0.25)]"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          {/* Wordmark & Technical Monogram */}
          <Link href="/" className="text-left focus:outline-none">
            <BrandLogo theme="dark" variant="horizontal" />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive =
                pathname === "/"
                  ? activeSection === item.sectionId
                  : pathname?.startsWith(item.matchPath);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-3.5 py-2 rounded-lg text-[13px] font-medium transition-colors ${
                    isActive
                      ? "text-white bg-slate-800/90"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Primary CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href={primaryCtaHref}
              className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-primary hover:bg-primary-hover text-white px-4 py-2 text-xs font-display font-bold tracking-tight transition-all duration-200 shadow-sm hover:shadow"
            >
              <span>Discuss Your Project</span>
              <ArrowUpRight className="size-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 md:hidden text-slate-200 hover:text-white focus:outline-none border border-slate-800 rounded-lg bg-slate-900/90"
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
              className="mt-3 pt-3 border-t border-slate-800 md:hidden flex flex-col gap-1 overflow-hidden"
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
                    className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "text-white bg-slate-800"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="pt-2 mt-1 border-t border-slate-800/80 flex flex-col gap-2">
                <Link
                  href={primaryCtaHref}
                  onClick={() => setIsOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-1.5 rounded-lg bg-primary hover:bg-primary-hover text-white py-2.5 text-xs font-display font-bold transition-colors"
                >
                  <span>Discuss Your Project</span>
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
