"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Keyboard } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard shortcut listeners (PostHog Style UX)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      
      const key = e.key.toLowerCase();
      if (key === "h") router.push("/");
      if (key === "s") router.push("/services");
      if (key === "p") router.push("/pricing");
      if (key === "o") router.push("/portfolio");
      if (key === "r") router.push("/process");
      if (key === "a") router.push("/about");
      if (key === "c") router.push("/contact");
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router]);

  const navItems = [
    { label: "Home", href: "/", key: "H" },
    { label: "Services", href: "/services", key: "S" },
    { label: "Pricing", href: "/pricing", key: "P" },
    { label: "Portfolio", href: "/portfolio", key: "O" },
    { label: "Process", href: "/process", key: "R" },
    { label: "About", href: "/about", key: "A" },
  ];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-4">
      <nav
        className={`w-full rounded-2xl transition-all duration-300 px-5 py-3 flex items-center justify-between border-2 border-border-custom bg-card-bg ${
          scrolled ? "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]" : "shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"
        }`}
      >
        {/* Logo Wordmark */}
        <Link
          href="/"
          className="font-mono text-base md:text-lg font-bold tracking-tight text-text-base hover:opacity-85 transition-opacity flex items-center gap-1.5"
        >
          <span>🦔</span>
          <span>Jayant&apos;s Studio</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`text-xs font-mono font-bold transition-colors flex items-center gap-1.5 ${
                  isActive ? "text-primary" : "text-text-muted hover:text-text-base"
                }`}
              >
                <span>{item.label}</span>
                <kbd className="opacity-40 group-hover:opacity-100 text-[9px] px-1 py-0.5">{item.key}</kbd>
              </Link>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <kbd className="text-[10px] flex items-center gap-1 opacity-70">
            <Keyboard className="size-3" /> Shortcuts Active
          </kbd>
          <Link
            href="/contact"
            className="hog-btn px-4 py-1.5 text-xs rounded-lg active:translate-y-0.5 transition-all"
          >
            Book Strategy Call <span className="ml-1 text-[9px] bg-black/10 px-1 py-0.5 rounded">C</span>
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-1 md:hidden text-text-base hover:opacity-85 focus:outline-none border-2 border-border-custom rounded-lg bg-background-base"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="absolute top-18 left-4 right-4 rounded-2xl p-6 bg-card-bg shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] border-2 border-border-custom md:hidden flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-mono font-bold px-2 py-1.5 transition-colors border-b border-border-custom last:border-0 flex justify-between items-center ${
                  isActive ? "text-primary" : "text-text-muted hover:text-text-base"
                }`}
              >
                <span>{item.label}</span>
                <kbd>{item.key}</kbd>
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="w-full text-center hog-btn py-2.5 text-sm rounded-xl"
          >
            Book Strategy Call (C)
          </Link>
        </div>
      )}
    </header>
  );
}
