"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, MessageSquare, Calendar, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { label: "Services", href: "/services" },
    { label: "Work", href: "/portfolio" },
    { label: "Process", href: "/process" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full border-b border-border-custom/10 bg-white/80 dark:bg-[#0B0F19]/80 backdrop-blur-[20px] ${
        scrolled ? "h-16 shadow-[0_1px_0_rgba(0,0,0,0.04)]" : "h-20"
      }`}
    >
      <div className="max-w-[1280px] mx-auto h-full px-6 md:px-10 flex items-center justify-between">
        {/* Brand Monogram & Logo Lockup */}
        <Link href="/" className="flex items-center gap-4 text-left group">
          <div className="size-[54px] shrink-0 font-sans text-xl font-bold flex items-center justify-center text-primary bg-white dark:bg-neutral-900 border border-border-custom rounded-xl transition-all duration-300 group-hover:scale-[1.02]">
            J
          </div>
          <div className="flex flex-col">
            <span className="font-sans text-lg font-bold tracking-tight text-text-base leading-none">
              Jayant Web & AI Systems
            </span>
            <span className="font-sans text-[11px] tracking-[0.08em] uppercase text-text-muted font-medium mt-1">
              AI & Software Development
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative text-[15px] font-sans font-medium transition-colors py-1 group ${
                  isActive ? "text-primary font-semibold" : "text-text-muted hover:text-text-base"
                }`}
              >
                <span>{item.label}</span>
                <span
                  className={`absolute bottom-0 left-0 w-full h-[1.5px] bg-primary transition-transform duration-200 ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA Segment with Animated Dropdown */}
        <div className="hidden md:flex items-center gap-4">
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="hog-btn px-5 py-2.5 text-xs rounded-xl flex items-center gap-1.5 cursor-pointer focus:outline-none"
            >
              <span>Book a Free Consultation</span>
              <ChevronDown className={`size-3.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute right-0 mt-2 w-56 rounded-xl bg-card-bg border border-border-custom shadow-[0_8px_30px_rgba(0,0,0,0.06)] py-2 z-50 origin-top-right"
                >
                  <a
                    href="https://cal.com/jayant-web-and-ai-systems/strategy-call"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-center gap-2.5 px-4 py-2 text-xs font-mono font-bold text-text-base hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
                  >
                    <Calendar className="size-4 text-primary" />
                    <span>Book a Strategy Call</span>
                  </a>
                  <a
                    href="https://wa.me/919667344125?text=Hi%20Jayant,%20I'm%20interested%20in%20discussing%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-center gap-2.5 px-4 py-2 text-xs font-mono font-bold text-text-base hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
                  >
                    <MessageSquare className="size-4 text-primary" />
                    <span>Chat on WhatsApp</span>
                  </a>
                  <a
                    href="mailto:jayantwebaisystems@gmail.com"
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-center gap-2.5 px-4 py-2 text-xs font-mono font-bold text-text-base hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
                  >
                    <Mail className="size-4 text-primary" />
                    <span>Send an Email</span>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-1.5 md:hidden text-text-base hover:opacity-85 focus:outline-none border border-border-custom rounded-xl bg-background-base"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="absolute top-16 left-4 right-4 rounded-2xl p-6 bg-card-bg shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-border-custom md:hidden flex flex-col gap-4 overflow-y-auto max-h-[calc(100vh-5rem)] animate-in fade-in slide-in-from-top-4 duration-200">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-sans font-bold px-2 py-2 transition-colors border-b border-border-custom/50 last:border-0 ${
                  isActive ? "text-primary" : "text-text-muted hover:text-text-base"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="border-t border-border-custom/50 pt-4 flex flex-col gap-3">
            <a
              href="https://wa.me/919667344125"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full text-center border border-border-custom py-2 text-xs font-mono font-bold rounded-xl bg-background-base text-text-base"
            >
              💬 Chat on WhatsApp
            </a>
            <a
              href="https://cal.com/jayant-web-and-ai-systems/strategy-call"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full text-center hog-btn py-2.5 text-xs rounded-xl"
            >
              📅 Book Free Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
