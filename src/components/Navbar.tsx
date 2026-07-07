"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, MessageSquare, Calendar, Mail } from "lucide-react";

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

  // Close dropdown on click outside
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full border-b border-border-custom bg-card-bg ${
        scrolled
          ? "h-16 backdrop-blur-md shadow-sm"
          : "h-[72px]"
      }`}
    >
      <div className="max-w-5xl mx-auto h-full px-6 flex items-center justify-between">
        {/* B2B Text Logo */}
        <Link href="/" className="flex flex-col text-left group">
          <span className="font-mono text-base font-bold tracking-tight text-text-base leading-tight">
            Jayant
          </span>
          <span className="font-sans text-[10px] tracking-wider uppercase text-text-muted font-medium transition-colors group-hover:text-primary">
            Web & AI Systems
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative text-sm font-sans font-medium transition-colors py-1 group ${
                  isActive ? "text-primary" : "text-text-muted hover:text-text-base"
                }`}
              >
                <span>{item.label}</span>
                {/* Clean Underline Animation */}
                <span
                  className={`absolute bottom-0 left-0 w-full h-[1.5px] bg-primary transition-transform duration-200 ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA Segment with Dropdown Options */}
        <div className="hidden md:flex items-center gap-5">
          {/* WhatsApp Direct Link */}
          <a
            href="https://wa.me/919810XXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono font-bold text-text-muted hover:text-text-base flex items-center gap-1.5 transition-colors"
          >
            <span>💬</span> WhatsApp
          </a>

          {/* Smarter primary CTA button with dropdown options */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="hog-btn px-4 py-2 text-xs rounded-xl flex items-center gap-1.5 transition-all cursor-pointer focus:outline-none"
            >
              <span>Free Consultation</span>
              <ChevronDown className={`size-3 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 rounded-xl bg-card-bg border-2 border-border-custom shadow-[4px_4px_0px_0px_rgba(28,28,31,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <Link
                  href="/contact"
                  onClick={() => setDropdownOpen(false)}
                  className="flex items-center gap-2 px-4 py-2 text-xs font-mono font-bold text-text-base hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
                >
                  <Calendar className="size-3.5 text-primary" />
                  <span>Book a Strategy Call</span>
                </Link>
                <a
                  href="https://wa.me/919810XXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setDropdownOpen(false)}
                  className="flex items-center gap-2 px-4 py-2 text-xs font-mono font-bold text-text-base hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
                >
                  <MessageSquare className="size-3.5 text-primary" />
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  href="mailto:contact@jayantolhyan.in"
                  onClick={() => setDropdownOpen(false)}
                  className="flex items-center gap-2 px-4 py-2 text-xs font-mono font-bold text-text-base hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
                >
                  <Mail className="size-3.5 text-primary" />
                  <span>Send an Email</span>
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-1.5 md:hidden text-text-base hover:opacity-85 focus:outline-none border-2 border-border-custom rounded-xl bg-background-base"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile Full-width Drawer */}
      {isOpen && (
        <div className="absolute top-16 left-4 right-4 rounded-2xl p-6 bg-card-bg shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] border-2 border-border-custom md:hidden flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-sans font-bold px-2 py-2 transition-colors border-b border-border-custom last:border-0 ${
                  isActive ? "text-primary" : "text-text-muted hover:text-text-base"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="border-t border-border-custom pt-4 flex flex-col gap-3">
            <a
              href="https://wa.me/919810XXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full text-center border-2 border-border-custom py-2 text-xs font-mono font-bold rounded-xl bg-background-base text-text-base"
            >
              💬 Chat on WhatsApp
            </a>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center hog-btn py-2.5 text-xs rounded-xl"
            >
              📅 Book Strategy Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
