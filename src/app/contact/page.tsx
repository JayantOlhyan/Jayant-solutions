"use client";

import React from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  const socials = [
    { name: "GitHub", href: "https://github.com/JayantOlhyan" },
    { name: "LinkedIn", href: "https://linkedin.com/company/jayant-systems" },
    { name: "X / Twitter", href: "https://x.com/JayantSystems" },
    { name: "Instagram", href: "https://www.instagram.com/jayantolhyan/" },
    { name: "YouTube", href: "https://www.youtube.com/@JayantWebAISystems" },
  ];

  const commitments = [
    {
      index: "01",
      label: "Direct Founder Review",
      desc: "Every inquiry is reviewed personally by Jayant Olhyan within 12–24 business hours.",
    },
    {
      index: "02",
      label: "Confidential & Secure",
      desc: "Your project brief, architecture requirements, and business context remain strictly confidential.",
    },
    {
      index: "03",
      label: "Written Scope First",
      desc: "We provide a clear written scope, timeline, and milestone plan before you commit budget.",
    },
    {
      index: "04",
      label: "Remote & Global Delivery",
      desc: "Based in New Delhi, collaborating with businesses and founders across time zones.",
    },
  ];

  return (
    <PageTransition>
      <div className="hog-grid min-h-screen pb-24 pt-10 text-left">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col gap-16 md:gap-24">
          {/* Editorial Contact Hero */}
          <section className="pt-8 border-b border-border-custom pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-8">
                <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-primary font-bold block mb-4">
                  JAYANT SYSTEMS &bull; START A CONVERSATION
                </span>
                <h1 className="metalab-headline text-4xl sm:text-6xl lg:text-[68px] font-extrabold text-text-base">
                  Tell us what you&apos;re{" "}
                  <span className="text-primary">building.</span>
                </h1>
              </div>

              <div className="lg:col-span-4 flex flex-col items-start gap-6">
                <p className="text-sm sm:text-base text-text-muted leading-relaxed">
                  Share your project requirements, workflow bottleneck, or existing website URL. We will review your context and outline the appropriate next step together.
                </p>
                <Link
                  href="/contact/book-a-consultation"
                  className="inline-flex items-center gap-2 rounded-full bg-primary hover:bg-primary-hover text-white px-6 py-3 text-xs font-display font-bold transition-all"
                >
                  <Calendar className="size-3.5" />
                  <span>Or Book a 15-Min Discovery Call</span>
                  <ArrowUpRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </section>

          {/* Main Split: Real ContactForm Component + Dark Direct Access Ledger */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 w-full">
              <ContactForm />
            </div>

            <div className="lg:col-span-5 flex flex-col gap-6 w-full">
              <div className="rounded-2xl bg-[#0A0E17] border border-slate-800 p-8 sm:p-10 text-white flex flex-col gap-8">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#FF8A00] font-bold block mb-2">
                    Direct Channels
                  </span>
                  <h2 className="font-display text-2xl font-extrabold text-white">
                    Reach Jayant Directly
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">
                    No sales intermediaries or account relays. Reach out through whichever channel fits your workflow best.
                  </p>
                </div>

                <div className="divide-y divide-white/10 border-t border-b border-white/10 text-xs font-mono">
                  <div className="py-4 flex items-start gap-3.5">
                    <Mail className="size-4 text-[#FF8A00] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-400 block mb-0.5">
                        Direct Email
                      </span>
                      <a
                        href="mailto:jayantwebaisystems@gmail.com"
                        className="text-sm text-white hover:text-[#FF8A00] transition-colors break-all"
                      >
                        jayantwebaisystems@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="py-4 flex items-start gap-3.5">
                    <MessageCircle className="size-4 text-[#FF8A00] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-400 block mb-0.5">
                        WhatsApp &amp; Phone
                      </span>
                      <a
                        href="https://wa.me/919667344125?text=Hi%20Jayant,%20I%20would%20like%20to%20discuss%20a%20project"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white hover:text-[#FF8A00] transition-colors"
                      >
                        +91 96673 44125
                      </a>
                    </div>
                  </div>

                  <div className="py-4 flex items-start gap-3.5">
                    <MapPin className="size-4 text-[#FF8A00] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-400 block mb-0.5">
                        Studio Base &amp; Hours
                      </span>
                      <span className="text-sm text-white block">
                        Dwarka, New Delhi, India &bull; Remote Globally
                      </span>
                      <span className="text-slate-400 block mt-0.5">
                        Mon – Sat: 9:00 AM – 8:00 PM (IST)
                      </span>
                    </div>
                  </div>

                  <div className="py-4 flex items-start gap-3.5">
                    <Calendar className="size-4 text-[#FF8A00] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-400 block mb-0.5">
                        Discovery Call Scheduler
                      </span>
                      <Link
                        href="/contact/book-a-consultation"
                        className="inline-flex items-center gap-1.5 text-sm text-[#FF8A00] hover:underline mt-0.5"
                      >
                        <span>Schedule via Cal.com</span>
                        <ArrowRight className="size-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Social Channels */}
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 block mb-3">
                    Verified Profiles
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {socials.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-full border border-white/15 bg-white/5 hover:border-[#FF8A00] text-xs font-mono text-slate-200 hover:text-white transition-colors"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Bottom 4-Column Hairline Commitments */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-10 border-t border-border-custom">
            {commitments.map((item) => (
              <div key={item.index} className="flex flex-col gap-1.5">
                <span className="font-mono text-xs font-bold text-primary">
                  /{item.index}
                </span>
                <h3 className="font-display text-base font-extrabold text-text-base">
                  {item.label}
                </h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </section>
        </main>
      </div>
    </PageTransition>
  );
}
