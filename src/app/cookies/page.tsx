"use client";

import React, { useState } from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CookiePolicyPage() {
  const [activeSection, setActiveSection] = useState("1. What Are Cookies?");

  const sections = [
    {
      id: "1. What Are Cookies?",
      title: "1. What Are Cookies?",
      content: (
        <>
          <p>Cookies are small text files stored on your device when you visit a website. They help the website remember your actions and preferences (such as login, language, and other display settings) over a period of time.</p>
        </>
      )
    },
    {
      id: "2. How We Use Cookies",
      title: "2. How We Use Cookies",
      content: (
        <>
          <p>We use cookies to make our website work properly, enhance your browsing experience, analyze site traffic, and personalize content. Cookies also help us understand how visitors use our website so we can improve our services.</p>
        </>
      )
    },
    {
      id: "3. Types of Cookies We Use",
      title: "3. Types of Cookies We Use",
      content: (
        <>
          <p>We use the following types of cookies on our website:</p>
          <ul className="list-disc pl-5 space-y-1.5 mt-2">
            <li><strong>Essential Cookies:</strong> Necessary for the website to function properly.</li>
            <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website.</li>
            <li><strong>Functionality Cookies:</strong> Remember your preferences and provide enhanced features.</li>
            <li><strong>Targeting/Advertising Cookies:</strong> Used to deliver relevant ads and measure campaign effectiveness.</li>
          </ul>
        </>
      )
    },
    {
      id: "4. Managing Your Preferences",
      title: "4. Managing Your Preferences",
      content: (
        <>
          <p>You can choose to accept or reject cookies. You can update your cookie preferences at any time by clicking the &quot;Cookie Settings&quot; button on our website. You can also set your browser to refuse cookies or alert you when cookies are being sent.</p>
        </>
      )
    },
    {
      id: "5. Third-Party Cookies",
      title: "5. Third-Party Cookies",
      content: (
        <>
          <p>Some cookies are placed by third-party services that appear on our pages, such as Google Analytics, YouTube, and social media platforms. These third parties may collect information about your online activities over time and across different websites.</p>
        </>
      )
    },
    {
      id: "6. Changes to This Policy",
      title: "6. Changes to This Policy",
      content: (
        <>
          <p>We may update this Cookie Policy from time to time to reflect changes in technology, law, or our data practices. Any updates will be posted on this page with the updated &quot;Last Updated&quot; date.</p>
        </>
      )
    },
    {
      id: "7. Contact Us",
      title: "7. Contact Us",
      content: (
        <>
          <p>If you have any questions about our use of cookies, please contact us:</p>
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
            <span className="text-text-base">Cookie Policy</span>
          </nav>

          {/* Hero */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-base leading-[1.08] mb-6">
                Cookie Policy
              </h1>
              <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl mb-6">
                This Cookie Policy explains how Jayant Web & AI Systems uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
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
                    🍪
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-bold text-white leading-none">Cookies</span>
                    <span className="text-[9px] text-white/50 mt-1 uppercase tracking-widest leading-none">Preferences & tracking</span>
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

              {/* Your Choice Matters card */}
              <div className="hog-card rounded-3xl p-6 bg-card-bg/60 border border-border-custom flex flex-col gap-3">
                <h4 className="font-serif text-xs font-bold text-text-base flex items-center gap-2">
                  <span>🛡️</span> Your Choice Matters
                </h4>
                <p className="text-[10px] text-text-muted leading-relaxed">
                  You can control and manage cookies at any time. Your preferences help us improve your experience while respecting your privacy.
                </p>
                <button
                  onClick={() => alert("Cookie settings panel is a placeholder.")}
                  className="w-full text-center border border-border-custom bg-white hover:bg-neutral-50 dark:bg-card-bg dark:hover:bg-neutral-900 py-2 text-[10px] font-mono font-bold rounded-lg block mt-2 text-text-base"
                >
                  Manage Preferences
                </button>
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
