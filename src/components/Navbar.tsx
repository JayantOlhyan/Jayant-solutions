"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Work", href: "#work" },
    { label: "Packages", href: "#packages" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
    { label: "FAQ", href: "#faq" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-4">
      <nav
        className={`w-full rounded-full transition-all duration-300 glass-card px-4 py-2 md:px-6 flex items-center justify-between ${
          scrolled ? "shadow-lg shadow-black/5" : "shadow-sm"
        }`}
      >
        {/* Brand Logo Wordmark */}
        <a
          href="#"
          onClick={(e) => handleLinkClick(e, "#top")}
          className="font-serif text-lg md:text-xl font-bold tracking-tight text-text-base hover:opacity-85 transition-opacity"
        >
          Jayant&apos;s Studio
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className="text-sm font-medium text-text-muted hover:text-text-base transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "#contact")}
            className="inline-flex items-center justify-center rounded-full bg-primary hover:bg-primary-hover px-4 py-1.5 text-xs md:text-sm font-medium text-white shadow-sm active:scale-[0.98] transition-all duration-200"
          >
            Book Strategy Call
          </a>
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
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className="text-base font-medium text-text-muted hover:text-text-base px-2 py-1.5 transition-colors border-b border-border-custom last:border-0"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "#contact")}
            className="w-full text-center rounded-full bg-primary hover:bg-primary-hover py-2.5 text-sm font-medium text-white shadow-md active:scale-[0.98] transition-all duration-200 mt-2"
          >
            Book Strategy Call
          </a>
        </div>
      )}
    </header>
  );
}
