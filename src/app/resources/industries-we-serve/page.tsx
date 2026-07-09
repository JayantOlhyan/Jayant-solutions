"use client";

import React from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { ArrowRight, Check, Heart, Shield, Laptop, MessageSquare, Handshake, Users, Globe, ExternalLink } from "lucide-react";

export default function IndustriesPage() {
  const industries = [
    {
      title: "Healthcare & Life Sciences",
      desc: "Digital solutions that improve patient care, streamline operations, and ensure compliance.",
      points: ["Telemedicine Platforms", "Health Records Management", "AI-Powered Diagnostics"],
      avatar: "🏥",
    },
    {
      title: "Education & E-Learning",
      desc: "Engaging platforms that empower institutions, educators, and learners in the digital age.",
      points: ["LMS & E-Learning Platforms", "Student Information Systems", "Virtual Classrooms"],
      avatar: "🎓",
    },
    {
      title: "Fintech & Banking",
      desc: "Secure, scalable, and compliant solutions for modern financial services and fintech innovators.",
      points: ["Digital Banking Platforms", "Payment Gateways", "Fraud Detection Systems"],
      avatar: "🏦",
    },
    {
      title: "E-commerce & Retail",
      desc: "High-performance solutions that enhance customer experience and boost sales.",
      points: ["E-commerce Platforms", "Inventory Management", "Customer Analytics"],
      avatar: "🛒",
    },
    {
      title: "Manufacturing",
      desc: "Smart solutions to optimize production, improve efficiency, and reduce downtime.",
      points: ["Process Automation", "ERP & Inventory Systems", "Predictive Maintenance"],
      avatar: "🏭",
    },
    {
      title: "Logistics & Supply Chain",
      desc: "Real-time visibility and intelligent systems to optimize logistics and delivery operations.",
      points: ["Fleet Management Systems", "Route Optimization", "Warehousing Solutions"],
      avatar: "🚛",
    },
    {
      title: "Real Estate",
      desc: "Digital platforms that simplify property management, listings, and customer interactions.",
      points: ["Property Listing Platforms", "CRM for Real Estate", "Virtual Tours & 3D Walkthroughs"],
      avatar: "🏢",
    },
    {
      title: "Startups & SMEs",
      desc: "Scalable and cost-effective solutions to help startups and SMEs grow faster.",
      points: ["MVP Development", "Product Engineering", "Growth & Automation"],
      avatar: "🚀",
    },
  ];

  const whyPartner = [
    { title: "Industry Expertise", desc: "Deep understanding of industry challenges and compliance requirements.", icon: <Handshake className="size-5 text-primary" /> },
    { title: "Tailored Solutions", desc: "Custom-built solutions designed to fit your business goals.", icon: <Laptop className="size-5 text-primary" /> },
    { title: "Measurable Impact", desc: "We focus on outcomes that drive growth and long-term value.", icon: <Globe className="size-5 text-primary" /> },
    { title: "End-to-End Support", desc: "From strategy and development to maintenance and scaling, we've got you covered.", icon: <Users className="size-5 text-primary" /> },
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
            <span className="text-text-base">Industries We Serve</span>
          </nav>

          {/* Hero */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <span className="font-mono text-[9px] uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 px-2.5 py-0.5 rounded-full mb-4">
                INDUSTRIES WE SERVE
              </span>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-base leading-[1.08] mb-6">
                Different Industries. <br />
                <span className="text-primary underline decoration-primary/40 decoration-4 underline-offset-8">
                  Smarter Solutions.
                </span>
              </h1>
              <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl mb-6">
                We partner with businesses across industries to build digital solutions that solve real challenges, drive growth, and create lasting impact.
              </p>
              
              <div className="flex flex-wrap gap-4 text-[10px] font-mono font-bold text-text-muted">
                <span className="flex items-center gap-1">🎯 Industry-Focused Solutions</span>
                <span className="flex items-center gap-1">🤝 Domain Expertise You Can Trust</span>
                <span className="flex items-center gap-1">📈 Impact That Drives Growth</span>
              </div>
            </div>

            {/* Right */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center p-8 select-none">
                <div className="w-full h-[85%] rounded-2xl bg-[#0B0F19] border-2 border-white/10 shadow-2xl p-6 flex flex-col justify-center text-left text-white/90">
                  <h4 className="font-serif text-lg font-bold mb-2">Every industry has unique challenges.</h4>
                  <h3 className="font-serif text-2xl font-black text-primary leading-tight mb-2">We build solutions that make a difference.</h3>
                  <p className="text-xs text-white/70">Let&apos;s build the right solution for your industry.</p>
                </div>
              </div>
            </div>

          </section>

          {/* Industries We Serve Grid */}
          <section className="py-8 relative border-t border-border-custom/30 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1 rounded-full mb-4 inline-block">
                INDUSTRIES
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base">
                Industries We Serve
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((ind, idx) => (
                <div
                  key={idx}
                  className="hog-card rounded-2xl p-6 bg-card-bg/60 backdrop-blur-sm border border-border-custom flex flex-col justify-between hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex flex-col gap-4 text-left">
                    <div className="size-11 rounded-full border border-border-custom bg-card-bg flex items-center justify-center text-xl shadow-sm shrink-0">
                      {ind.avatar}
                    </div>
                    <h3 className="font-serif text-sm md:text-base font-bold text-text-base leading-snug">
                      {ind.title}
                    </h3>
                    <p className="text-[10px] md:text-xs text-text-muted leading-relaxed">
                      {ind.desc}
                    </p>
                    
                    <ul className="space-y-2 mt-4">
                      {ind.points.map((pt, i) => (
                        <li key={i} className="flex items-center gap-2 text-[10px] font-mono text-text-muted">
                          <Check className="size-3 text-primary shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-primary hover:underline mt-6"
                  >
                    <span>View Solutions</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Why Partner With Us */}
          <section className="py-8 relative border-t border-border-custom/30 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1 rounded-full mb-4 inline-block">
                WHY CHOOSE US
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                Why Partner With Us?
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
              {whyPartner.map((item, idx) => (
                <div key={idx} className="hog-card rounded-2xl p-5 border border-border-custom bg-card-bg/40 flex flex-col gap-3 text-left">
                  <div className="size-9 rounded-full border border-border-custom bg-card-bg flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h5 className="font-serif text-xs md:text-sm font-bold text-text-base leading-snug">{item.title}</h5>
                  <p className="text-[10px] md:text-xs text-text-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0B0F19] p-8 md:p-12 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center text-left">
              
              {/* Left */}
              <div className="lg:col-span-7 flex flex-col items-start">
                <h3 className="font-serif text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  Ready to Build the Right Solution <br />
                  <span className="text-primary">for Your Industry?</span>
                </h3>
                <p className="text-xs md:text-sm text-white/70 mb-6 leading-relaxed max-w-lg">
                  Reach out to discuss your project requirements and select the best tools for your goals.
                </p>
              </div>

              {/* Right buttons */}
              <div className="lg:col-span-5 flex flex-col sm:flex-row items-center gap-4 w-full justify-end">
                <a
                  href="https://cal.com/jayant-web-and-ai-systems/strategy-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-hover px-6 py-2.5 text-xs font-mono font-bold text-white shadow-md transition-all duration-200"
                >
                  <span>Book a Free Consultation</span>
                  <ArrowRight className="size-3.5" />
                </a>
                <Link
                  href="/portfolio"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 hover:bg-white/5 px-6 py-2.5 text-xs font-mono font-bold text-white transition-all duration-200"
                >
                  <span>View Our Work</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>

            </div>
          </section>

        </main>
      </div>
    </PageTransition>
  );
}
