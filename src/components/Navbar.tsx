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
  const [companyOpen, setCompanyOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [technologiesOpen, setTechnologiesOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileTechnologiesOpen, setMobileTechnologiesOpen] = useState(false);
  
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const companyRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);
  const technologiesRef = useRef<HTMLDivElement>(null);

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
      if (companyRef.current && !companyRef.current.contains(event.target as Node)) {
        setCompanyOpen(false);
      }
      if (resourcesRef.current && !resourcesRef.current.contains(event.target as Node)) {
        setResourcesOpen(false);
      }
      if (industriesRef.current && !industriesRef.current.contains(event.target as Node)) {
        setIndustriesOpen(false);
      }
      if (technologiesRef.current && !technologiesRef.current.contains(event.target as Node)) {
        setTechnologiesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const companySubLinks = [
    { label: "Founder", href: "/company/founder" },
    { label: "Careers", href: "/company/careers" },
    { label: "Partners", href: "/company/partners" },
    { label: "Testimonials", href: "/company/testimonials" },
    { label: "Why Choose Us", href: "/company/why-choose-us" },
  ];

  const resourcesSubLinks = [
    { label: "Blog", href: "/blog" },
    { label: "Case Studies", href: "/resources/case-studies" },
    { label: "Technologies We Use", href: "/resources/technologies-we-use" },
    { label: "Industries We Serve", href: "/resources/industries-we-serve" },
    { label: "Downloads", href: "/resources/downloads" },
  ];

  const industriesSubLinks = [
    { label: "AI for Healthcare", href: "/industries/ai-for-healthcare" },
    { label: "AI for Education", href: "/industries/ai-for-education" },
    { label: "AI for Startups", href: "/industries/ai-for-startups" },
    { label: "AI for Manufacturing", href: "/industries/ai-for-manufacturing" },
    { label: "AI for Retail", href: "/industries/ai-for-retail" },
    { label: "AI for Government", href: "/industries/ai-for-government" },
    { label: "AI for Agriculture", href: "/industries/ai-for-agriculture" },
    { label: "AI for Real Estate", href: "/industries/ai-for-real-estate" },
    { label: "AI for Finance", href: "/industries/ai-for-finance" },
  ];

  const technologiesSubLinks = [
    { label: "Next.js Development", href: "/technologies/nextjs-development" },
    { label: "React Development", href: "/technologies/react-development" },
    { label: "FastAPI Development", href: "/technologies/fastapi-development" },
    { label: "Python Development", href: "/technologies/python-development" },
    { label: "Flutter Development", href: "/technologies/flutter-development" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-6 md:px-8 py-4 transition-all duration-300">
      <div 
        className={`w-full bg-[#111827] border border-white/10 rounded-2xl md:rounded-[20px] shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-all duration-300 ${
          scrolled ? "py-2.5 px-5 md:px-6" : "py-3.5 px-6 md:px-8"
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Brand Monogram & Logo Lockup */}
          <Link href="/" className="flex items-center gap-3.5 text-left group">
            <div className="size-11 shrink-0 font-sans text-lg font-bold flex items-center justify-center text-primary bg-[#0B0F19] border border-white/10 rounded-xl transition-all duration-300 group-hover:scale-[1.02]">
              J
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-sm md:text-base font-bold tracking-tight text-white leading-none">
                Jayant Web & AI Systems
              </span>
              <span className="font-sans text-[9px] tracking-[0.08em] uppercase text-white/50 font-medium mt-1">
                AI & Software Development
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-7">
            <Link
              href="/services"
              className={`relative text-[14px] font-sans font-medium transition-colors py-1 group ${
                pathname.startsWith("/services") ? "text-primary font-semibold" : "text-white/70 hover:text-white"
              }`}
            >
              <span>Services</span>
            </Link>

            {/* Industries Dropdown Trigger */}
            <div className="relative" ref={industriesRef}>
              <button
                onClick={() => {
                  setIndustriesOpen(!industriesOpen);
                  setCompanyOpen(false);
                  setResourcesOpen(false);
                  setTechnologiesOpen(false);
                }}
                className={`flex items-center gap-1.5 text-[14px] font-sans font-medium transition-colors py-1 focus:outline-none cursor-pointer ${
                  pathname.startsWith("/industries") ? "text-primary font-semibold" : "text-white/70 hover:text-white"
                }`}
              >
                <span>Industries</span>
                <ChevronDown className="size-3" />
              </button>

              <AnimatePresence>
                {industriesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute left-0 mt-2 w-48 rounded-xl bg-[#111827] border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5)] py-2 z-50 origin-top-left"
                  >
                    {industriesSubLinks.map((subLink) => (
                      <Link
                        key={subLink.label}
                        href={subLink.href}
                        onClick={() => setIndustriesOpen(false)}
                        className="block px-4 py-2 text-xs font-mono font-bold text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        {subLink.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Technologies Dropdown Trigger */}
            <div className="relative" ref={technologiesRef}>
              <button
                onClick={() => {
                  setTechnologiesOpen(!technologiesOpen);
                  setCompanyOpen(false);
                  setResourcesOpen(false);
                  setIndustriesOpen(false);
                }}
                className={`flex items-center gap-1.5 text-[14px] font-sans font-medium transition-colors py-1 focus:outline-none cursor-pointer ${
                  pathname.startsWith("/technologies") ? "text-primary font-semibold" : "text-white/70 hover:text-white"
                }`}
              >
                <span>Technologies</span>
                <ChevronDown className="size-3" />
              </button>

              <AnimatePresence>
                {technologiesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute left-0 mt-2 w-48 rounded-xl bg-[#111827] border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5)] py-2 z-50 origin-top-left"
                  >
                    {technologiesSubLinks.map((subLink) => (
                      <Link
                        key={subLink.label}
                        href={subLink.href}
                        onClick={() => setTechnologiesOpen(false)}
                        className="block px-4 py-2 text-xs font-mono font-bold text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        {subLink.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/portfolio"
              className={`relative text-[14px] font-sans font-medium transition-colors py-1 group ${
                pathname === "/portfolio" ? "text-primary font-semibold" : "text-white/70 hover:text-white"
              }`}
            >
              <span>Work</span>
            </Link>
            <Link
              href="/process"
              className={`relative text-[14px] font-sans font-medium transition-colors py-1 group ${
                pathname === "/process" ? "text-primary font-semibold" : "text-white/70 hover:text-white"
              }`}
            >
              <span>Process</span>
            </Link>

            {/* Company Dropdown Trigger */}
            <div className="relative" ref={companyRef}>
              <button
                onClick={() => {
                  setCompanyOpen(!companyOpen);
                  setResourcesOpen(false);
                  setIndustriesOpen(false);
                  setTechnologiesOpen(false);
                }}
                className={`flex items-center gap-1.5 text-[14px] font-sans font-medium transition-colors py-1 focus:outline-none cursor-pointer ${
                  pathname.startsWith("/company") ? "text-primary font-semibold" : "text-white/70 hover:text-white"
                }`}
              >
                <span>Company</span>
                <ChevronDown className="size-3" />
              </button>

              <AnimatePresence>
                {companyOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute left-0 mt-2 w-48 rounded-xl bg-[#111827] border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5)] py-2 z-50 origin-top-left"
                  >
                    {companySubLinks.map((subLink) => (
                      <Link
                        key={subLink.label}
                        href={subLink.href}
                        onClick={() => setCompanyOpen(false)}
                        className="block px-4 py-2 text-xs font-mono font-bold text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        {subLink.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Resources Dropdown Trigger */}
            <div className="relative" ref={resourcesRef}>
              <button
                onClick={() => {
                  setResourcesOpen(!resourcesOpen);
                  setCompanyOpen(false);
                  setIndustriesOpen(false);
                  setTechnologiesOpen(false);
                }}
                className={`flex items-center gap-1.5 text-[14px] font-sans font-medium transition-colors py-1 focus:outline-none cursor-pointer ${
                  pathname.startsWith("/resources") || pathname === "/blog" ? "text-primary font-semibold" : "text-white/70 hover:text-white"
                }`}
              >
                <span>Resources</span>
                <ChevronDown className="size-3" />
              </button>

              <AnimatePresence>
                {resourcesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute left-0 mt-2 w-52 rounded-xl bg-[#111827] border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5)] py-2 z-50 origin-top-left"
                  >
                    {resourcesSubLinks.map((subLink) => (
                      <Link
                        key={subLink.label}
                        href={subLink.href}
                        onClick={() => setResourcesOpen(false)}
                        className="block px-4 py-2 text-xs font-mono font-bold text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        {subLink.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/pricing"
              className={`relative text-[14px] font-sans font-medium transition-colors py-1 group ${
                pathname.startsWith("/pricing") ? "text-primary font-semibold" : "text-white/70 hover:text-white"
              }`}
            >
              <span>Pricing</span>
            </Link>
            <Link
              href="/contact"
              className={`relative text-[14px] font-sans font-medium transition-colors py-1 group ${
                pathname === "/contact" ? "text-primary font-semibold" : "text-white/70 hover:text-white"
              }`}
            >
              <span>Contact</span>
            </Link>
          </div>

          {/* Desktop CTA Segment with Animated Dropdown */}
          <div className="hidden md:flex items-center gap-4">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-primary hover:bg-primary-hover text-white px-5 py-2.5 text-xs font-semibold transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98] cursor-pointer focus:outline-none"
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
                    className="absolute right-0 mt-2 w-56 rounded-xl bg-[#111827] border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5)] py-2 z-50 origin-top-right"
                  >
                    <Link
                      href="/contact/book-a-consultation"
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2 text-xs font-mono font-bold text-white hover:bg-white/5 transition-colors"
                    >
                      <Calendar className="size-4 text-primary" />
                      <span>Book a Strategy Call</span>
                    </Link>
                    <a
                      href="https://wa.me/919667344125?text=Hi%20Jayant,%20I'm%20interested%20in%20discussing%20a%20project."
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2 text-xs font-mono font-bold text-white hover:bg-white/5 transition-colors"
                    >
                      <MessageSquare className="size-4 text-primary" />
                      <span>Chat on WhatsApp</span>
                    </a>
                    <a
                      href="mailto:jayantwebaisystems@gmail.com"
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2 text-xs font-mono font-bold text-white hover:bg-white/5 transition-colors"
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
            className="p-1.5 md:hidden text-white hover:opacity-85 focus:outline-none border border-white/10 rounded-xl bg-[#0B0F19]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-4 pt-4 border-t border-white/10 md:hidden flex flex-col gap-4 overflow-y-auto max-h-[calc(100vh-8rem)]"
            >
              <Link
                href="/services"
                onClick={() => setIsOpen(false)}
                className={`text-sm font-sans font-bold px-2 py-2 border-b border-white/5 transition-colors ${
                  pathname.startsWith("/services") ? "text-primary" : "text-white/70 hover:text-white"
                }`}
              >
                Services
              </Link>

              {/* Mobile Industries Dropdown */}
              <div className="flex flex-col border-b border-white/5">
                <button
                  onClick={() => {
                    setMobileIndustriesOpen(!mobileIndustriesOpen);
                    setMobileCompanyOpen(false);
                    setMobileResourcesOpen(false);
                    setMobileTechnologiesOpen(false);
                  }}
                  className="flex items-center justify-between text-sm font-sans font-bold px-2 py-2 text-white/70 hover:text-white focus:outline-none w-full"
                >
                  <span>Industries</span>
                  <ChevronDown className={`size-3.5 transition-transform ${mobileIndustriesOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileIndustriesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 flex flex-col gap-2 py-1 bg-white/5 rounded-lg mb-2"
                    >
                      {industriesSubLinks.map((subLink) => (
                        <Link
                          key={subLink.label}
                          href={subLink.href}
                          onClick={() => {
                            setIsOpen(false);
                            setMobileIndustriesOpen(false);
                          }}
                          className="block py-1.5 text-xs font-mono font-bold text-white/70 hover:text-white"
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Technologies Dropdown */}
              <div className="flex flex-col border-b border-white/5">
                <button
                  onClick={() => {
                    setMobileTechnologiesOpen(!mobileTechnologiesOpen);
                    setMobileCompanyOpen(false);
                    setMobileResourcesOpen(false);
                    setMobileIndustriesOpen(false);
                  }}
                  className="flex items-center justify-between text-sm font-sans font-bold px-2 py-2 text-white/70 hover:text-white focus:outline-none w-full"
                >
                  <span>Technologies</span>
                  <ChevronDown className={`size-3.5 transition-transform ${mobileTechnologiesOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileTechnologiesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 flex flex-col gap-2 py-1 bg-white/5 rounded-lg mb-2"
                    >
                      {technologiesSubLinks.map((subLink) => (
                        <Link
                          key={subLink.label}
                          href={subLink.href}
                          onClick={() => {
                            setIsOpen(false);
                            setMobileTechnologiesOpen(false);
                          }}
                          className="block py-1.5 text-xs font-mono font-bold text-white/70 hover:text-white"
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/portfolio"
                onClick={() => setIsOpen(false)}
                className={`text-sm font-sans font-bold px-2 py-2 border-b border-white/5 transition-colors ${
                  pathname === "/portfolio" ? "text-primary" : "text-white/70 hover:text-white"
                }`}
              >
                Work
              </Link>
              <Link
                href="/process"
                onClick={() => setIsOpen(false)}
                className={`text-sm font-sans font-bold px-2 py-2 border-b border-white/5 transition-colors ${
                  pathname === "/process" ? "text-primary" : "text-white/70 hover:text-white"
                }`}
              >
                Process
              </Link>

              {/* Mobile Company Dropdown */}
              <div className="flex flex-col border-b border-white/5">
                <button
                  onClick={() => {
                    setMobileCompanyOpen(!mobileCompanyOpen);
                    setMobileResourcesOpen(false);
                    setMobileIndustriesOpen(false);
                    setMobileTechnologiesOpen(false);
                  }}
                  className="flex items-center justify-between text-sm font-sans font-bold px-2 py-2 text-white/70 hover:text-white focus:outline-none w-full"
                >
                  <span>Company</span>
                  <ChevronDown className={`size-3.5 transition-transform ${mobileCompanyOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileCompanyOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 flex flex-col gap-2 py-1 bg-white/5 rounded-lg mb-2"
                    >
                      {companySubLinks.map((subLink) => (
                        <Link
                          key={subLink.label}
                          href={subLink.href}
                          onClick={() => {
                            setIsOpen(false);
                            setMobileCompanyOpen(false);
                          }}
                          className="block py-1.5 text-xs font-mono font-bold text-white/70 hover:text-white"
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Resources Dropdown */}
              <div className="flex flex-col border-b border-white/5">
                <button
                  onClick={() => {
                    setMobileResourcesOpen(!mobileResourcesOpen);
                    setMobileCompanyOpen(false);
                    setMobileIndustriesOpen(false);
                    setMobileTechnologiesOpen(false);
                  }}
                  className="flex items-center justify-between text-sm font-sans font-bold px-2 py-2 text-white/70 hover:text-white focus:outline-none w-full"
                >
                  <span>Resources</span>
                  <ChevronDown className={`size-3.5 transition-transform ${mobileResourcesOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileResourcesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 flex flex-col gap-2 py-1 bg-white/5 rounded-lg mb-2"
                    >
                      {resourcesSubLinks.map((subLink) => (
                        <Link
                          key={subLink.label}
                          href={subLink.href}
                          onClick={() => {
                            setIsOpen(false);
                            setMobileResourcesOpen(false);
                          }}
                          className="block py-1.5 text-xs font-mono font-bold text-white/70 hover:text-white"
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/pricing"
                onClick={() => setIsOpen(false)}
                className={`text-sm font-sans font-bold px-2 py-2 border-b border-white/5 transition-colors ${
                  pathname.startsWith("/pricing") ? "text-primary" : "text-white/70 hover:text-white"
                }`}
              >
                Pricing
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className={`text-sm font-sans font-bold px-2 py-2 transition-colors ${
                  pathname === "/contact" ? "text-primary" : "text-white/70 hover:text-white"
                }`}
              >
                Contact
              </Link>
              
              <div className="pt-2 flex flex-col gap-3">
                <a
                  href="https://wa.me/919667344125"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center border border-white/10 py-2 text-xs font-mono font-bold rounded-xl bg-[#0B0F19] text-white"
                >
                  💬 Chat on WhatsApp
                </a>
                <Link
                  href="/contact/book-a-consultation"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center inline-flex items-center justify-center gap-1.5 rounded-xl bg-primary hover:bg-primary-hover text-white py-2.5 text-xs font-semibold transition-all duration-200"
                >
                  📅 Book Free Consultation
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
