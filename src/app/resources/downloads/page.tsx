"use client";

import React from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { ArrowRight, FileText, Download, Presentation, Check } from "lucide-react";

export default function DownloadsPage() {
  const highlights = [
    { label: "Company Overview", icon: "🏢" },
    { label: "Our Expertise", icon: "⚙️" },
    { label: "Key Achievements", icon: "🏆" },
  ];

  return (
    <PageTransition>
      <div className="hog-grid min-h-screen pb-20 pt-10 text-left">
        <main className="max-w-none px-6 md:px-12 lg:px-16 flex flex-col gap-20 md:gap-28">
          
          {/* Breadcrumbs */}
          <nav className="text-xs font-mono text-text-muted flex items-center gap-2 pt-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>&gt;</span>
            <span className="text-text-muted">Resources</span>
            <span>&gt;</span>
            <span className="text-text-base">Downloads</span>
          </nav>

          {/* Hero */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <span className="font-mono text-[9px] uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 px-2.5 py-0.5 rounded-full mb-4">
                DOWNLOADS
              </span>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-base leading-[1.08] mb-6">
                Discover More About <br />
                <span className="text-primary underline decoration-primary/40 decoration-4 underline-offset-8">
                  Jayant Web & AI Systems
                </span>
              </h1>
              <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl mb-8">
                Download our company profile to learn about our mission, values, services, expertise, and the impact we create for our clients.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-3 gap-6 border-t border-border-custom/50 pt-6 w-full max-w-lg">
                {highlights.map((h, i) => (
                  <div key={i} className="flex flex-col items-start gap-2">
                    <span className="text-2xl leading-none">{h.icon}</span>
                    <span className="text-[10px] font-mono font-bold text-text-base leading-tight">{h.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Open Booklet Mockup */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[440px] aspect-[4/3] rounded-[24px] overflow-hidden border border-border-custom bg-neutral-900 shadow-2xl p-6 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/45 to-transparent z-10" />
                <div className="relative z-20 text-center text-white flex flex-col items-center gap-2">
                  <span className="text-4xl">📖</span>
                  <h4 className="font-serif text-sm font-bold mt-2">Company Profile Presentation</h4>
                  <p className="text-[9px] font-mono text-white/50 uppercase tracking-widest">Interactive Corporate Deck</p>
                </div>
              </div>
            </div>

          </section>

                  {/* Company Profile PDF details row */}
          <section className="py-2">
            <div className="w-full rounded-3xl border border-border-custom bg-card-bg/60 p-6 md:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-md">
              <div className="flex items-start gap-4 flex-1">
                <div className="size-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                  <FileText className="size-8" />
                </div>
                <div className="flex flex-col text-left gap-1">
                  <h3 className="font-serif text-base font-bold text-text-base">Company Profile PDF</h3>
                  <p className="text-xs text-text-muted max-w-md leading-relaxed">
                    Get a comprehensive overview of who we are, what we do, and how we help businesses grow.
                  </p>
                </div>
              </div>

              {/* Stats column */}
              <div className="flex flex-wrap items-center gap-6 md:gap-10 border-t lg:border-t-0 lg:border-l border-border-custom/50 pt-4 lg:pt-0 lg:pl-10">
                <div className="flex items-center gap-2">
                  <span className="text-lg">📖</span>
                  <div className="flex flex-col text-left">
                    <span className="font-mono text-xs font-bold text-text-base">16+ Pages</span>
                    <span className="text-[9px] text-text-muted mt-0.5">Length</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-lg">🏢</span>
                  <div className="flex flex-col text-left">
                    <span className="font-mono text-xs font-bold text-text-base">Company</span>
                    <span className="text-[9px] text-text-muted mt-0.5">Overview</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-lg">⚙️</span>
                  <div className="flex flex-col text-left">
                    <span className="font-mono text-xs font-bold text-text-base">Services &</span>
                    <span className="text-[9px] text-text-muted mt-0.5">Solutions</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-lg">📊</span>
                  <div className="flex flex-col text-left">
                    <span className="font-mono text-xs font-bold text-text-base">Case Studies &</span>
                    <span className="text-[9px] text-text-muted mt-0.5">Success Stories</span>
                  </div>
                </div>
              </div>

              {/* Download Button */}
              <div className="flex flex-col items-center gap-2 shrink-0">
                <a
                  href="/jayant_systems_company_profile.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-hover text-white px-6 py-3.5 text-xs font-mono font-bold transition-all shadow-md w-full lg:w-auto"
                >
                  <Download className="size-4" />
                  <span>Download PDF</span>
                </a>
                <span className="text-[9px] font-mono text-text-muted">File size: 4.2 MB</span>
              </div>
            </div>
          </section>

          {/* Detailed Content Section (SEO Expansion) */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 py-4">
            <div className="flex flex-col gap-4 text-left">
              <h3 className="font-serif text-lg md:text-2xl font-bold text-text-base">Why Download Our Corporate Profile?</h3>
              <p className="text-xs md:text-sm text-text-muted leading-relaxed">
                Whether you are a startup founder looking for an agile development partner, or a seasoned corporate stakeholder evaluating AI integration capability, our corporate deck covers it all. It contains in-depth information about our technology selections, pricing models, and communication workflows.
              </p>
              <p className="text-xs md:text-sm text-text-muted leading-relaxed">
                We believe in extreme transparency. That is why our booklet walks you through exactly how we audit datasets, protect user privacy, and ensure high-throughput API scaling. We also outline our strict 30-day post-launch support guarantee so you know you are supported long after deployment.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 text-left border border-border-custom/50 rounded-3xl p-6 bg-card-bg/20">
              <h3 className="font-serif text-lg font-bold text-text-base">What is Included inside the Booklet:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-text-muted">
                <li className="flex items-start gap-2">
                  <Check className="size-4 text-primary shrink-0 mt-0.5" />
                  <span>Founder's engineering background and principles.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-4 text-primary shrink-0 mt-0.5" />
                  <span>Full services catalog (AI, Web, Custom Software).</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-4 text-primary shrink-0 mt-0.5" />
                  <span>Our detailed 6-step collaborative process.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-4 text-primary shrink-0 mt-0.5" />
                  <span>4 real-world case studies with impact metrics.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-4 text-primary shrink-0 mt-0.5" />
                  <span>Hosting, maintenance, and security architectures.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-4 text-primary shrink-0 mt-0.5" />
                  <span>How to book your discovery and roadmap session.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-4 text-primary shrink-0 mt-0.5" />
                  <span>E2E QA testing, deployment strategy, and Netlify hosting workflows.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Need a custom presentation? */}
          <section className="border border-border-custom bg-card-bg/40 rounded-3xl p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-left">
            <div className="flex items-start gap-4">
              <div className="size-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                <Presentation className="size-5" />
              </div>
              <div>
                <h4 className="font-serif text-sm md:text-base font-bold text-text-base mb-1">Need a custom presentation?</h4>
                <p className="text-[10px] md:text-xs text-text-muted">Get a tailored deck for your business or partnership needs.</p>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border-custom bg-white hover:bg-neutral-50 dark:bg-card-bg dark:hover:bg-neutral-900 text-xs font-mono font-bold text-text-base transition-colors shrink-0"
            >
              <span>Request a Custom Deck</span>
              <ArrowRight className="size-4" />
            </Link>
          </section>

        </main>
      </div>
    </PageTransition>
  );
}
