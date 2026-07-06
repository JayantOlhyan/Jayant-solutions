"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/pricing" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Process", href: "/process" },
    { label: "About", href: "/about" },
  ];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-4">
      <nav
        className={`w-full rounded-full transition-all duration-300 glass-card px-4 py-2.5 md:px-6 flex items-center justify-between ${
          scrolled ? "shadow-lg shadow-black/5" : "shadow-sm"
        }`}
      >
        {/* Brand Logo Wordmark */}
        <Link
          href="/"
          className="font-serif text-lg md:text-xl font-bold tracking-tight text-text-base hover:opacity-85 transition-opacity"
        >
          Jayant&apos;s Studio
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive ? "text-primary" : "text-text-muted hover:text-text-base"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-primary hover:bg-primary-hover px-4 py-1.5 text-xs md:text-sm font-medium text-white shadow-sm active:scale-[0.98] transition-all duration-200"
          >
            Book Strategy Call
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-1 md:hidden text-text-base hover:opacity-85 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Mobile Drawer (Glassmorphic Slide-Down) */}
      {isOpen && (
        <div className="absolute top-16 left-4 right-4 rounded-3xl p-6 glass-card shadow-xl md:hidden border border-border-custom flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-base font-medium px-2 py-1.5 transition-colors border-b border-border-custom last:border-0 ${
                  isActive ? "text-primary font-semibold" : "text-text-muted hover:text-text-base"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="w-full text-center rounded-full bg-primary hover:bg-primary-hover py-2.5 text-sm font-medium text-white shadow-md active:scale-[0.98] transition-all duration-200 mt-2"
          >
            Book Strategy Call
          </Link>
        </div>
      )}
    </header>
  );
}
