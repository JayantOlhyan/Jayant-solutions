"use client";

import React from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { ArrowRight, HelpCircle, BookOpen, Download, Mail, Phone, Clock, MessageSquare, ShieldCheck, Heart, Laptop, Video } from "lucide-react";

export default function SupportPage() {
  const indicators = [
    { label: "Fast & Reliable Support", icon: <ShieldCheck className="size-4 text-primary" /> },
    { label: "Expert Assistance", icon: <Heart className="size-4 text-primary" /> },
    { label: "Quick Response Time", icon: <Clock className="size-4 text-primary" /> },
    { label: "Your Success is Our Priority", icon: <Laptop className="size-4 text-primary" /> },
  ];

  const channels = [
    {
      title: "Create a Ticket",
      desc: "Submit your issue or request support from our team.",
      cta: "Create Ticket",
      href: "/support/report-a-bug",
      icon: "🎫",
    },
    {
      title: "FAQ",
      desc: "Find answers to commonly asked questions.",
      cta: "View FAQs",
      href: "/faq",
      icon: "❓",
    },
    {
      title: "Knowledge Base",
      desc: "Browse our guides and documentation.",
      cta: "Browse Articles",
      href: "/blog",
      icon: "📖",
    },
    {
      title: "Downloads",
      desc: "Access useful resources, guides, and files.",
      cta: "View Downloads",
      href: "/resources/downloads",
      icon: "📥",
    },
  ];

  const footerLinks = [
    { label: "Community", desc: "Join our community & get help", icon: <UsersIcon className="size-5 text-primary" />, href: "/company/partners" },
    { label: "Live Chat", desc: "Chat with our team in real-time", icon: <MessageSquare className="size-5 text-primary" />, href: "https://wa.me/919667344125" },
    { label: "System Status", desc: "Check live status of our services", icon: <Laptop className="size-5 text-primary" />, href: "/support/service-status" },
    { label: "Video Tutorials", desc: "Watch step-by-step video guides", icon: <Video className="size-5 text-primary" />, href: "https://youtube.com" },
  ];

  return (
    <PageTransition>
      <div className="hog-grid min-h-screen pb-20 pt-10 text-left">
        <main className="max-w-none px-6 md:px-12 lg:px-16 flex flex-col gap-20 md:gap-28">
          
          {/* Breadcrumbs */}
          <nav className="text-xs font-mono text-text-muted flex items-center gap-2 pt-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>&gt;</span>
            <span className="text-text-muted">Support</span>
            <span>&gt;</span>
            <span className="text-text-base">Support</span>
          </nav>

          {/* Hero */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <span className="font-mono text-[9px] uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 px-2.5 py-0.5 rounded-full mb-4">
                SUPPORT
              </span>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-base leading-[1.08] mb-6">
                We&apos;re Here to <br />
                <span className="text-primary underline decoration-primary/40 decoration-4 underline-offset-8">
                  Help You
                </span>
              </h1>
              <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl mb-8">
                Our support team is ready to assist you. Get quick answers, resolve issues, and keep your business running smoothly.
              </p>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
                <Link
                  href="/support/report-a-bug"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-hover text-white px-7 py-3 text-xs font-mono font-bold transition-all shadow-md active:scale-[0.98]"
                >
                  <span>Create a Support Ticket</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>

              {/* Stats/Indicators */}
              <div className="grid grid-cols-2 gap-4 border-t border-border-custom/50 pt-6 w-full max-w-lg">
                {indicators.map((ind, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className="size-6 rounded-full border border-border-custom bg-card-bg flex items-center justify-center shrink-0">
                      {ind.icon}
                    </div>
                    <span className="text-[10px] font-mono font-bold text-text-base leading-none">{ind.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Graphic mockup */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center p-8 select-none">
                <div className="w-full h-[85%] rounded-2xl bg-[#0B0F19] border-2 border-white/10 shadow-2xl p-6 flex flex-col justify-center text-left text-white/90">
                  <h4 className="font-serif text-lg font-bold mb-2">Support That</h4>
                  <h3 className="font-serif text-2xl font-black text-primary leading-tight mb-2">Always Supports You.</h3>
                  <p className="text-xs text-white/70">From technical issues to general inquiries, we&apos;re just a message away.</p>
                </div>
              </div>
            </div>

          </section>

          {/* Split Options & Sidebar */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start py-8 border-t border-border-custom/20 pt-16">
            
            {/* Left 4 cards */}
            <div className="lg:col-span-8 flex flex-col gap-6 text-left w-full">
              <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-text-base mb-2">
                How Can We Help You?
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {channels.map((chan, idx) => (
                  <div
                    key={idx}
                    className="hog-card rounded-2xl p-6 border border-border-custom bg-card-bg/40 flex flex-col justify-between text-left min-h-[180px] group"
                  >
                    <div className="flex flex-col gap-4">
                      <div className="size-11 rounded-full border border-border-custom bg-card-bg flex items-center justify-center text-xl shadow-sm shrink-0">
                        {chan.icon}
                      </div>
                      <h4 className="font-serif text-sm md:text-base font-bold text-text-base leading-snug">{chan.title}</h4>
                      <p className="text-[10px] md:text-xs text-text-muted leading-relaxed">{chan.desc}</p>
                    </div>

                    <Link
                      href={chan.href}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-border-custom bg-white hover:bg-neutral-50 dark:bg-card-bg dark:hover:bg-neutral-900 px-5 py-2 text-xs font-mono font-bold text-text-base transition-colors self-start mt-6 group-hover:border-primary/50"
                    >
                      <span>{chan.cta}</span>
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Contact Sidebar */}
            <div className="lg:col-span-4 flex flex-col gap-6 text-left w-full">
              <div className="hog-card rounded-3xl p-6 md:p-8 bg-card-bg/60 border border-border-custom flex flex-col gap-6">
                <h3 className="font-serif text-lg font-bold text-text-base border-b border-border-custom pb-2">
                  Get in Touch
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="size-4 text-primary shrink-0 mt-0.5" />
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono font-bold text-text-base leading-none">Email Support</span>
                      <a href="mailto:jayantwebaisystems@gmail.com" className="text-[10px] text-text-muted mt-1 hover:underline">
                        jayantwebaisystems@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="size-4 text-primary shrink-0 mt-0.5" />
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono font-bold text-text-base leading-none">Call Us</span>
                      <a href="tel:+919667344125" className="text-[10px] text-text-muted mt-1 hover:underline">
                        +91 96673 44125
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="size-4 text-primary shrink-0 mt-0.5" />
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono font-bold text-text-base leading-none">Support Hours</span>
                      <span className="text-[10px] text-text-muted mt-1">
                        Mon - Sat: 10:00 AM - 7:00 PM (IST)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Average response time badge */}
                <div className="bg-primary/5 border border-primary/10 rounded-2xl p-4 mt-2">
                  <span className="text-[9px] font-mono text-primary font-bold uppercase tracking-wider block mb-1">Average Response Time</span>
                  <span className="font-serif text-sm font-bold text-text-base">Under 2 Hours</span>
                </div>
              </div>
            </div>

          </section>

          {/* More Ways to Get Help footer strip */}
          <section className="py-8 border-t border-border-custom/20 pt-16">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
              {footerLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="hog-card rounded-2xl p-5 border border-border-custom bg-card-bg/40 flex items-start gap-4 text-left group hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="size-9 rounded-xl border border-border-custom bg-card-bg flex items-center justify-center shrink-0">
                    {link.icon}
                  </div>
                  <div>
                    <h5 className="font-serif text-xs font-bold text-text-base leading-none mb-1 group-hover:text-primary transition-colors">{link.label}</h5>
                    <p className="text-[10px] text-text-muted mt-1 leading-tight">{link.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

        </main>
      </div>
    </PageTransition>
  );
}

function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
