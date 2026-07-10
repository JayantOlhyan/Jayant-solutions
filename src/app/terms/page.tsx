"use client";

import React, { useState } from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState("1. Acceptance of Terms");

  const sections = [
    {
      id: "1. Acceptance of Terms",
      title: "1. Acceptance of Terms",
      content: (
        <>
          <p>By accessing or using our website or services, you agree to comply with and be bound by these Terms & Conditions and our Privacy Policy. If you do not agree with any part of these terms, you may not access or use our services.</p>
        </>
      )
    },
    {
      id: "2. Our Services",
      title: "2. Our Services",
      content: (
        <>
          <p>Jayant Web & AI Systems provides software development, web development, AI solutions, consulting, and related services as described on our website. We reserve the right to modify, suspend, or discontinue any service at any time without prior notice.</p>
        </>
      )
    },
    {
      id: "3. User Responsibilities",
      title: "3. User Responsibilities",
      content: (
        <>
          <p>You agree to use our services only for lawful purposes. You must not misuse our website or services or attempt to gain unauthorized access to any systems, data, or networks connected to our services.</p>
        </>
      )
    },
    {
      id: "4. Intellectual Property",
      title: "4. Intellectual Property",
      content: (
        <>
          <p>All content, designs, logos, code, and materials on this website are the property of Jayant Web & AI Systems and are protected by intellectual property laws. You may not copy, reproduce, or distribute any content without our written permission.</p>
        </>
      )
    },
    {
      id: "5. Payments & Refunds",
      title: "5. Payments & Refunds",
      content: (
        <>
          <p>Payment terms are as agreed in your proposal or contract. All payments are non-refundable unless otherwise stated in writing. We reserve the right to refuse service if payment is delayed or not received.</p>
        </>
      )
    },
    {
      id: "6. Confidentiality",
      title: "6. Confidentiality",
      content: (
        <>
          <p>We value your trust. Any confidential information shared with us will be used solely for the purpose of providing our services and will not be disclosed to third parties without consent, except as required by law.</p>
        </>
      )
    },
    {
      id: "7. Limitation of Liability",
      title: "7. Limitation of Liability",
      content: (
        <>
          <p>We shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of our services. Our total liability shall not exceed the amount paid by you for the services in the past 3 months.</p>
        </>
      )
    },
    {
      id: "8. Indemnification",
      title: "8. Indemnification",
      content: (
        <>
          <p>You agree to indemnify and hold Jayant Web & AI Systems harmless from any claims, losses, liabilities, damages, and expenses arising from your use of our services or violation of these terms.</p>
        </>
      )
    },
    {
      id: "9. Termination",
      title: "9. Termination",
      content: (
        <>
          <p>We may terminate or suspend your access to our services at any time without notice if we believe you have violated these Terms & Conditions or used our services unlawfully.</p>
        </>
      )
    },
    {
      id: "10. Governing Law",
      title: "10. Governing Law",
      content: (
        <>
          <p>These Terms & Conditions shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in New Delhi, India.</p>
        </>
      )
    },
    {
      id: "11. Changes to Terms",
      title: "11. Changes to Terms",
      content: (
        <>
          <p>We may update these Terms & Conditions from time to time. Any changes will be posted on this page with the updated &quot;Last Updated&quot; date. Your continued use of our services constitutes acceptance of the revised terms.</p>
        </>
      )
    },
    {
      id: "12. Contact Us",
      title: "12. Contact Us",
      content: (
        <>
          <p>If you have any questions about these Terms & Conditions, please contact us:</p>
          <div className="mt-3 flex flex-wrap gap-4 text-xs font-mono">
            <span>✉️ jayantwebaisystems@gmail.com</span>
            <span>📞 +91 96673 44125</span>
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
            <span className="text-text-base">Terms & Conditions</span>
          </nav>

          {/* Hero */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-base leading-[1.08] mb-6">
                Terms & Conditions
              </h1>
              <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl mb-6">
                Welcome to Jayant Web & AI Systems. These Terms & Conditions govern your use of our website and services. By accessing or using our services, you agree to be bound by these terms.
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
                    📄
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-bold text-white leading-none">Terms</span>
                    <span className="text-[9px] text-white/50 mt-1 uppercase tracking-widest leading-none">Rules & regulations</span>
                  </div>
                </div>
              </div>
            </div>

          </section>

          {/* Navigation & details */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start py-8 border-t border-border-custom/20 pt-16">
            
            {/* Left nav */}
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
                  If you have any questions about these Terms & Conditions, please contact us.
                </p>
                <Link
                  href="/contact"
                  className="w-full text-center border border-border-custom bg-white hover:bg-neutral-50 dark:bg-card-bg dark:hover:bg-neutral-900 py-2 text-[10px] font-mono font-bold rounded-lg block mt-2 text-text-base"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right details */}
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
