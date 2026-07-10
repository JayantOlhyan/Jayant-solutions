"use client";

import React, { useState } from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function DisclaimerPage() {
  const [activeSection, setActiveSection] = useState("1. General Information");

  const sections = [
    {
      id: "1. General Information",
      title: "1. General Information",
      content: (
        <>
          <p>All content on this website, including text, graphics, logos, images, and other material, is provided in good faith and for general information purposes only.</p>
        </>
      )
    },
    {
      id: "2. No Professional Advice",
      title: "2. No Professional Advice",
      content: (
        <>
          <p>The content on this website does not constitute professional, technical, legal, financial, or any other type of advice. You should not rely solely on the information provided here and should seek professional advice relevant to your specific situation.</p>
        </>
      )
    },
    {
      id: "3. Accuracy of Information",
      title: "3. Accuracy of Information",
      content: (
        <>
          <p>While we strive to keep the information on this website accurate and up-to-date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on the website for any purpose.</p>
        </>
      )
    },
    {
      id: "4. External Links",
      title: "4. External Links",
      content: (
        <>
          <p>Our website may contain links to external websites that are not provided or maintained by us. We do not endorse and are not responsible for the content, privacy policies, or practices of any third-party websites.</p>
        </>
      )
    },
    {
      id: "5. Service Availability",
      title: "5. Service Availability",
      content: (
        <>
          <p>We do our best to ensure uninterrupted access to our website and services; however, we do not guarantee that the website will be available at all times or free from errors, viruses, or other harmful components.</p>
        </>
      )
    },
    {
      id: "6. Limitation of Liability",
      title: "6. Limitation of Liability",
      content: (
        <>
          <p>To the fullest extent permitted by law, Jayant Web & AI Systems shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in connection with your use of our website or services.</p>
        </>
      )
    },
    {
      id: "7. Third-Party Services",
      title: "7. Third-Party Services",
      content: (
        <>
          <p>We may use third-party tools, platforms, or services to deliver our solutions. We are not responsible for any downtime, data loss, or issues caused by these third-party providers.</p>
        </>
      )
    },
    {
      id: "8. Changes to This Disclaimer",
      title: "8. Changes to This Disclaimer",
      content: (
        <>
          <p>We may update this Disclaimer from time to time without prior notice. Any changes will be posted on this page with the updated &quot;Last Updated&quot; date.</p>
        </>
      )
    },
    {
      id: "9. Contact Us",
      title: "9. Contact Us",
      content: (
        <>
          <p>If you have any questions about this Disclaimer, please contact us:</p>
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
            <span className="text-text-base">Disclaimer</span>
          </nav>

          {/* Hero */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-base leading-[1.08] mb-6">
                Disclaimer
              </h1>
              <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl mb-6">
                The information provided by Jayant Web & AI Systems on this website is for general informational purposes only. By using this website and our services, you acknowledge and agree to the terms of this disclaimer.
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
                    ⚖️
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-bold text-white leading-none">Disclaimer</span>
                    <span className="text-[9px] text-white/50 mt-1 uppercase tracking-widest leading-none">Legal disclaimer</span>
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

              {/* Questions card */}
              <div className="hog-card rounded-3xl p-6 bg-card-bg/60 border border-border-custom flex flex-col gap-3">
                <h4 className="font-serif text-xs font-bold text-text-base flex items-center gap-2">
                  <span>📢</span> Questions?
                </h4>
                <p className="text-[10px] text-text-muted leading-relaxed">
                  If you have any questions about this Disclaimer, please contact us.
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
