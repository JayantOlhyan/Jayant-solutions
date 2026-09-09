"use client";

import React, { useState } from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { ArrowRight, Star, Quote } from "lucide-react";

export default function TestimonialsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const stats = [
    { number: "4.9/5", label: "Average Rating" },
    { number: "50+", label: "Client Reviews" },
    { number: "35+", label: "Happy Clients" },
    { number: "100+", label: "Projects Delivered" },
    { number: "10+", label: "Industries Served" },
  ];

  const filterTabs = [
    "All",
    "Web Development",
    "AI & ML",
    "Mobile Apps",
    "SaaS Platforms",
    "Automation",
  ];

  const reviews = [
    {
      company: "FinTrack",
      text: "Jayant Web & AI Systems delivered an exceptional SaaS platform that transformed our business. Their expertise and communication were excellent throughout the entire process.",
      author: "Arjun Mehta",
      role: "CEO, FinTrack",
      rating: 5,
      category: "SaaS Platforms",
      avatar: "👨‍💼",
    },
    {
      company: "MediCare+",
      text: "Professional, reliable, and highly skilled. They built our telemedicine platform with great attention to detail and delivered on time.",
      author: "Neha Sharma",
      role: "Founder, MediCare+",
      rating: 5,
      category: "Mobile Apps",
      avatar: "👩‍⚕️",
    },
    {
      company: "RentHub",
      text: "From design to deployment, everything was seamless. The platform works flawlessly and our users love it!",
      author: "Rohan Verma",
      role: "CTO, RentHub",
      rating: 5,
      category: "Web Development",
      avatar: "👨‍💻",
    },
    {
      company: "StudyFlow",
      text: "Their AI-powered learning platform has helped us scale our education services to thousands of students.",
      author: "Pooja Iyer",
      role: "Product Head, StudyFlow",
      rating: 5,
      category: "AI & ML",
      avatar: "👩‍💼",
    },
    {
      company: "ShopEase",
      text: "A great team that understands business needs and delivers scalable solutions. Highly recommended!",
      author: "Kunal Bansal",
      role: "Co-founder, ShopEase",
      rating: 5,
      category: "Automation",
      avatar: "👨‍💼",
    },
    {
      company: "ShipSync",
      text: "They built our logistics management system with real-time tracking and advanced analytics. Excellent work!",
      author: "Vikram Singh",
      role: "Operations Manager, ShipSync",
      rating: 5,
      category: "Automation",
      avatar: "👨‍✈️",
    },
  ];

  const filteredReviews = activeFilter === "All" 
    ? reviews 
    : reviews.filter(r => r.category === activeFilter);

  return (
    <PageTransition>
      <div className="hog-grid min-h-screen pb-20 pt-8 text-left">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col gap-16 md:gap-24">
          
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumbs" className="text-xs font-mono text-text-muted flex items-center gap-2 pt-6">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>&gt;</span>
            <span className="text-text-muted">Company</span>
            <span>&gt;</span>
            <span className="text-text-base font-semibold">Testimonials</span>
          </nav>

          {/* Hero split */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="font-mono text-[9px] uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 px-2.5 py-0.5 rounded-full mb-4">
                TESTIMONIALS
              </span>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-base leading-[1.08] mb-6">
                Client Trust.{" "}
                <span className="text-primary underline decoration-primary/40 decoration-4 underline-offset-8">
                  Proven
                </span>{" "}
                Results.
              </h1>
              <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl mb-8">
                Don&apos;t just take our word for it. Here&apos;s what founders, leaders, and teams have to say about working with Jayant Web & AI Systems.
              </p>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-hover text-white px-7 py-3 text-xs font-mono font-bold transition-all shadow-md active:scale-[0.98]"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/portfolio"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-border-custom bg-card-bg hover:border-primary/40 px-7 py-3 text-xs font-mono font-bold text-text-base transition-all"
                >
                  <span>View All Case Studies</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>

            </div>

            {/* Right: Testimonial Highlight Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-[32px] overflow-hidden border border-border-custom bg-neutral-900 shadow-2xl p-6 flex flex-col justify-end text-white">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent z-10" />
                <div className="absolute top-6 left-6 text-primary z-20">
                  <Quote className="size-8" />
                </div>
                <div className="relative z-20 flex flex-col gap-2">
                  <p className="font-serif text-sm italic text-white/90 leading-relaxed mb-4">
                    The team at Jayant Web & AI Systems transformed our idea into a powerful digital product. Their technical expertise, communication, and dedication are outstanding.
                  </p>
                  <h4 className="font-serif text-sm font-bold leading-none mb-1">Arjun Mehta</h4>
                  <span className="text-[10px] font-mono text-white/60">CEO, FinTrack</span>
                </div>
              </div>
            </div>

          </section>

          {/* Stats Bar */}
          <section className="grid grid-cols-2 md:grid-cols-5 gap-6 py-8 border-t border-b border-border-custom/40">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <span className="text-3xl md:text-4xl font-serif font-black text-primary mb-1">{stat.number}</span>
                <span className="text-[10px] font-mono font-bold text-text-muted uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </section>

          {/* Reviews Grid & Filter */}
          <section className="py-4 relative">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1 rounded-full mb-4 inline-block">
                REVIEWS
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                What my clients Say
              </h2>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-10">
              {filterTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all border ${
                    activeFilter === tab
                      ? "bg-primary border-primary text-white shadow-sm"
                      : "bg-card-bg/70 border-border-custom text-text-muted hover:border-primary/40 hover:text-text-base"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredReviews.map((r, idx) => (
                <div key={idx} className="glass-card rounded-2xl p-6 border border-border-custom bg-card-bg/60 flex flex-col justify-between text-left gap-6 hover:border-primary/40 transition-all shadow-sm">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        {[...Array(r.rating)].map((_, i) => (
                          <Star key={i} className="size-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <span className="text-[9px] font-mono font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">
                        {r.category}
                      </span>
                    </div>
                    <h4 className="font-serif text-sm font-bold text-text-base">{r.company}</h4>
                    <p className="text-xs text-text-muted leading-relaxed italic">&ldquo;{r.text}&rdquo;</p>
                  </div>

                  <div className="flex items-center gap-3 border-t border-border-custom/50 pt-4">
                    <div className="size-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-sm shrink-0">
                      {r.avatar}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-serif text-xs font-bold text-text-base leading-none mb-1">{r.author}</span>
                      <span className="text-[10px] font-mono text-text-muted">{r.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Clutch Outbound Link Restored */}
            <div className="flex justify-center mt-12">
              <a
                href="https://clutch.co"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border-custom bg-card-bg hover:border-primary/40 text-xs font-mono font-bold text-text-base transition-all shadow-sm"
              >
                <span>View More Reviews on Clutch</span>
                <ArrowRight className="size-4" />
              </a>
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0B0F19] px-8 py-14 md:py-18 text-center shadow-lg">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,138,0,0.06),transparent)] pointer-events-none" />
            
            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
                Ready to start your project?
              </h2>
              <p className="text-xs md:text-sm text-white/70 max-w-lg mb-8 leading-relaxed">
                Let&apos;s build something amazing together and create impact for your business.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <a
                  href="https://cal.com/jayant-web-and-ai-systems/strategy-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-hover px-7 py-3.5 text-xs font-mono font-bold text-white shadow-md transition-all duration-200"
                >
                  Book a Free Consultation <ArrowRight className="size-3.5" />
                </a>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 hover:bg-white/5 px-7 py-3.5 text-xs font-mono font-bold text-white transition-all duration-200"
                >
                  Discuss Your Project <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </section>

        </main>
      </div>
    </PageTransition>
  );
}
