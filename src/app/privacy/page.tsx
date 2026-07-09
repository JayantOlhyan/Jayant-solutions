"use client";

import React, { useState } from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { ArrowRight, Shield, Lock, Eye, Check, Mail } from "lucide-react";

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState("1. Information We Collect");

  const sections = [
    {
      id: "1. Information We Collect",
      title: "1. Information We Collect",
      content: (
        <>
          <p>We collect information that you provide directly to us, such as your name, email address, phone number, company name, and project details when you contact us, request a quote, or use our services.</p>
          <p className="mt-2">We may also collect automatically certain information about your device and usage, such as IP address, browser type, pages visited, and browsing behavior.</p>
        </>
      )
    },
    {
      id: "2. How We Use Your Information",
      title: "2. How We Use Your Information",
      content: (
        <>
          <p>We use the information we collect to provide, maintain, and improve our services, communicate with you, process your requests, send you updates, and ensure better user experience.</p>
        </>
      )
    },
    {
      id: "3. How We Share Your Information",
      title: "3. How We Share Your Information",
      content: (
        <>
          <p>We do not sell or rent your personal information. We may share your information with trusted service providers who assist us in operating our website and delivering services, under strict confidentiality agreements or as required by law.</p>
        </>
      )
    },
    {
      id: "4. Cookies & Tracking Technologies",
      title: "4. Cookies & Tracking Technologies",
      content: (
        <>
          <p>We use cookies and similar technologies to enhance your experience, analyze website traffic, and understand user behavior. You can manage your cookie preferences through your browser settings.</p>
        </>
      )
    },
    {
      id: "5. Data Security",
      title: "5. Data Security",
      content: (
        <>
          <p>We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.</p>
        </>
      )
    },
    {
      id: "6. Your Rights & Choices",
      title: "6. Your Rights & Choices",
      content: (
        <>
          <p>You have the right to access, update, or delete your personal information. You can also opt out of marketing communications at any time by contacting us.</p>
        </>
      )
    },
    {
      id: "7. Third-Party Links",
      title: "7. Third-Party Links",
      content: (
        <>
          <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites.</p>
        </>
      )
    },
    {
      id: "8. Children's Privacy",
      title: "8. Children's Privacy",
      content: (
        <>
          <p>Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children.</p>
        </>
      )
    },
    {
      id: "9. Changes to This Policy",
      title: "9. Changes to This Policy",
      content: (
        <>
          <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated &quot;Last Updated&quot; date.</p>
        </>
      )
    },
    {
      id: "10. Contact Us",
      title: "10. Contact Us",
      content: (
        <>
          <p>If you have any questions or concerns about this Privacy Policy, please contact us:</p>
          <div className="mt-3 flex flex-wrap gap-4 text-xs font-mono">
            <span>✉️ hello@jayantwebai.com</span>
            <span>📞 +91 98765 43210</span>
            <span>📍 New Delhi, India</span>
          </div>
        </>
      )
    }
  ];

  return (
    <PageTransition>
      <div className="hog-grid min-h-screen pb-20 pt-10 text-left">
        <main className="max-w-none px-6 md:px-12 lg:px-16 flex flex-col gap-20 md:gap-28">
          
          {/* Breadcrumbs */}
          <nav className="text-xs font-mono text-text-muted flex items-center gap-2 pt-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>&gt;</span>
            <span className="text-text-muted">Legal</span>
            <span>&gt;</span>
            <span className="text-text-base">Privacy Policy</span>
          </nav>

          {/* Hero */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-base leading-[1.08] mb-6">
                Privacy Policy
              </h1>
              <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl mb-6">
                At Jayant Web & AI Systems, we value your trust and are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              
              <div className="flex flex-wrap gap-4 text-[10px] font-mono font-bold text-text-muted">
                <span className="flex items-center gap-1">📅 Last Updated: 12 May 2025</span>
                <span className="flex items-center gap-1">🗓️ Effective Date: 12 May 2025</span>
              </div>
            </div>

            {/* Right: Graphic mockup */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-[24px] overflow-hidden border border-border-custom bg-neutral-900 shadow-2xl p-6 flex justify-between items-center text-white">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-xl">
                    🛡️
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-bold text-white leading-none">Privacy Shield</span>
                    <span className="text-[9px] text-white/50 mt-1 uppercase tracking-widest leading-none">Your data is secure</span>
                  </div>
                </div>
              </div>
            </div>

          </section>

          {/* Policy navigation & text split */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start py-8 border-t border-border-custom/20 pt-16">
            
            {/* Left sidebar nav */}
            <div className="lg:col-span-4 flex flex-col gap-6 text-left w-full sticky top-28">
              <div className="hog-card rounded-3xl p-6 bg-card-bg/60 border border-border-custom flex flex-col gap-4">
                <h3 className="font-serif text-sm font-bold text-text-base border-b border-border-custom pb-2">On this Page</h3>
                <div className="flex flex-col gap-1.5">
                  {sections.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => {
                        setActiveSection(s.id);
                        document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className={`text-left text-[11px] font-mono font-bold px-3 py-2 rounded-xl transition-all ${
                        activeSection === s.id
                          ? "bg-primary/10 text-primary"
                          : "text-text-muted hover:text-text-base hover:bg-neutral-100 dark:hover:bg-neutral-900"
                      }`}
                    >
                      {s.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Questions/Need Help box */}
              <div className="hog-card rounded-3xl p-6 bg-card-bg/60 border border-border-custom flex flex-col gap-3">
                <h4 className="font-serif text-xs font-bold text-text-base flex items-center gap-2">
                  <span>❓</span> Questions?
                </h4>
                <p className="text-[10px] text-text-muted leading-relaxed">
                  If you have any questions about this Privacy Policy, feel free to contact us.
                </p>
                <Link
                  href="/contact"
                  className="w-full text-center border border-border-custom bg-white hover:bg-neutral-50 dark:bg-card-bg dark:hover:bg-neutral-900 py-2 text-[10px] font-mono font-bold rounded-lg block mt-2 text-text-base"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right text details */}
            <div className="lg:col-span-8 flex flex-col gap-10 text-left w-full">
              {sections.map((s) => (
                <div
                  key={s.id}
                  id={s.id}
                  className="border-b border-border-custom/30 pb-8 scroll-mt-28"
                >
                  <h3 className="font-serif text-base md:text-lg font-bold text-text-base mb-4">{s.title}</h3>
                  <div className="text-xs md:text-sm text-text-muted leading-relaxed space-y-2">
                    {s.content}
                  </div>
                </div>
              ))}
            </div>

          </section>

        </main>
      </div>
    </PageTransition>
  );
}
