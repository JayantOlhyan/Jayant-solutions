"use client";

import React from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code, Layers, ShieldCheck, Heart, Clock, Compass, ClipboardList, Layout, CheckSquare, Rocket, MessageSquare, Lock, Globe, Search, Laptop, Monitor } from "lucide-react";

export default function WebsiteDevelopmentPage() {
  const serviceStats = [
    { label: "Modern & Responsive", icon: <Laptop className="size-4 text-primary" />, desc: "Perfect on every device" },
    { label: "SEO Optimized", icon: <Search className="size-4 text-primary" />, desc: "Built to rank higher" },
    { label: "Fast & Secure", icon: <Lock className="size-4 text-primary" />, desc: "Speed + Security first" },
    { label: "Scalable & Future-Ready", icon: <Layers className="size-4 text-primary" />, desc: "Built for your growth" },
  ];

  const offers = [
    {
      title: "Custom Website Design",
      description: "Unique, brand-focused designs that reflect your business identity and captivate your audience.",
      icon: <Layout className="size-6 text-primary" />,
    },
    {
      title: "Business Websites",
      description: "Professional websites for businesses to establish credibility and generate more leads.",
      icon: <Globe className="size-6 text-primary" />,
    },
    {
      title: "E-Commerce Development",
      description: "Secure, scalable, and feature-rich online stores that convert visitors into customers.",
      icon: <Search className="size-6 text-primary" />,
    },
    {
      title: "Landing Page Design",
      description: "High-converting landing pages designed to boost campaigns and maximize ROI.",
      icon: <Monitor className="size-6 text-primary" />,
    },
    {
      title: "CMS Development",
      description: "WordPress, Webflow, and custom CMS solutions that are easy to manage and update.",
      icon: <Code className="size-6 text-primary" />,
    },
    {
      title: "Website Redesign",
      description: "Modernize your existing website with a fresh design, better UX, and improved performance.",
      icon: <Layers className="size-6 text-primary" />,
    },
    {
      title: "SEO & Performance",
      description: "Build with clean code, on-page SEO, and speed optimization for better visibility and rankings.",
      icon: <Search className="size-6 text-primary" />,
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing updates, security checks, and technical support to keep your website running smoothly.",
      icon: <Clock className="size-6 text-primary" />,
    },
  ];

  const steps = [
    { id: "01", name: "Discover", desc: "We understand your business, goals, and requirements.", icon: <Compass className="size-5 text-primary" /> },
    { id: "02", name: "Plan", desc: "We create a strategy, sitemap, and wireframes to define the structure.", icon: <ClipboardList className="size-5 text-primary" /> },
    { id: "03", name: "Design", desc: "We craft stunning UI/UX designs that align with your brand.", icon: <Layout className="size-5 text-primary" /> },
    { id: "04", name: "Develop", desc: "We build fast, responsive, and secure websites using best practices.", icon: <Code className="size-5 text-primary" /> },
    { id: "05", name: "Test & Launch", desc: "We test thoroughly and launch your website without any hassle.", icon: <Rocket className="size-5 text-primary" /> },
  ];

  const whyChoose = [
    { title: "Experienced Team", desc: "Skilled developers and designers with years of experience.", icon: <UsersIcon className="size-5 text-primary" /> },
    { title: "Client-Focused", desc: "We listen, collaborate, and deliver solutions tailored to your goals.", icon: <Heart className="size-5 text-primary" /> },
    { title: "On-Time Delivery", desc: "We value your time and ensure timely delivery every time.", icon: <Clock className="size-5 text-primary" /> },
    { title: "Transparent Process", desc: "Clear communication and regular updates throughout the project.", icon: <MessageSquare className="size-5 text-primary" /> },
    { title: "Long-Term Support", desc: "We're here even after launch to support your growth.", icon: <Lock className="size-5 text-primary" /> },
  ];

  const industries = [
    { name: "Healthcare", icon: "❤️" },
    { name: "Education", icon: "🎓" },
    { name: "Finance", icon: "🏦" },
    { name: "Real Estate", icon: "🏢" },
    { name: "Retail", icon: "🛒" },
    { name: "Logistics", icon: "📦" },
    { name: "Hospitality", icon: "🏨" },
    { name: "Startups", icon: "⚡" },
  ];

  const recentProjects = [
    { id: "technova", title: "TechNova Solutions", tag: "Business Website", desc: "Modern business website displaying tech consultancy services.", icon: "💻" },
    { id: "urbannest", title: "UrbanNest Realty", tag: "Real Estate Website", desc: "Interactive property listing portal with advanced filters.", icon: "🏠" },
    { id: "fitfuel", title: "FitFuel Nutrition", tag: "E-Commerce", desc: "Fast online store with subscription model integrations.", icon: "🥤" },
    { id: "edusphere", title: "EduSphere Academy", tag: "Educational Website", desc: "Online learning platform landing page and course lists.", icon: "🎓" },
  ];

  return (
    <PageTransition>
      <div className="hog-grid min-h-screen pb-20 pt-10 text-left">
        <main className="max-w-none px-6 md:px-12 lg:px-16 flex flex-col gap-20 md:gap-28">
          
          {/* Breadcrumbs */}
          <nav className="text-xs font-mono text-text-muted flex items-center gap-2 pt-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>&gt;</span>
            <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
            <span>&gt;</span>
            <span className="text-text-base">Website Development</span>
          </nav>

          {/* Hero split */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="font-mono text-[9px] uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 px-2.5 py-0.5 rounded-full mb-4">
                WEBSITE DEVELOPMENT
              </span>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-base leading-[1.08] mb-6">
                Websites That Look Amazing. Perform{" "}
                <span className="text-primary underline decoration-primary/40 decoration-4 underline-offset-8">
                  Even Better.
                </span>
              </h1>
              <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl mb-8">
                We design and develop modern, responsive, and SEO-friendly websites that not only look great but also drive traffic, engage users, and grow your business.
              </p>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
                <a
                  href="https://cal.com/jayant-web-and-ai-systems/strategy-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-hover text-white px-7 py-3 text-xs font-mono font-bold transition-all shadow-md active:scale-[0.98]"
                >
                  <span>Book a Free Consultation</span>
                  <ArrowRight className="size-4" />
                </a>
                <Link
                  href="/portfolio"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-border-custom bg-white hover:bg-neutral-50 dark:bg-card-bg dark:hover:bg-neutral-900 px-7 py-3 text-xs font-mono font-bold text-text-base transition-all"
                >
                  <span>View Our Work</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>

              {/* Stats bullets */}
              <div className="grid grid-cols-2 gap-4 border-t border-border-custom/50 pt-6 w-full">
                {serviceStats.map((stat, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="size-6 rounded-full border border-border-custom bg-card-bg flex items-center justify-center shrink-0">
                      {stat.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono font-bold text-text-base leading-none">{stat.label}</span>
                      <span className="text-[9px] text-text-muted mt-0.5">{stat.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Right: Mockup image display */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center p-8 select-none">
                <div className="relative z-10 flex flex-col gap-4 items-center">
                  <div className="w-64 h-40 rounded-2xl bg-[#0B0F19] border-2 border-white/10 shadow-2xl flex items-center justify-center font-serif text-4xl">
                    💻
                  </div>
                  <div className="w-20 h-40 rounded-2xl bg-[#0B0F19] border-2 border-white/10 shadow-2xl flex items-center justify-center font-serif text-3xl absolute -bottom-6 -right-2">
                    📱
                  </div>
                </div>

                {/* Info tags */}
                <div className="absolute top-4 left-4 p-2 rounded-xl border border-border-custom bg-card-bg shadow-sm text-center">
                  <span className="text-[9px] font-serif font-bold text-text-base">Custom Design</span>
                </div>
                <div className="absolute bottom-4 left-4 p-2 rounded-xl border border-border-custom bg-card-bg shadow-sm text-center">
                  <span className="text-[9px] font-serif font-bold text-text-base">SEO Friendly</span>
                </div>
                <div className="absolute top-4 right-4 p-2 rounded-xl border border-border-custom bg-card-bg shadow-sm text-center">
                  <span className="text-[9px] font-serif font-bold text-text-base">Responsive Layouts</span>
                </div>
                <div className="absolute bottom-4 right-20 p-2 rounded-xl border border-border-custom bg-card-bg shadow-sm text-center">
                  <span className="text-[9px] font-serif font-bold text-text-base">High Performance</span>
                </div>
              </div>
            </div>

          </section>

          {/* What We Offer services grid */}
          <section className="py-8 relative border-t border-border-custom/30 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1 rounded-full mb-4 inline-block">
                WHAT WE OFFER
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                Our Website Development Services
              </h2>
              <p className="text-sm md:text-base text-text-muted mt-2">
                From concept to launch, we create websites that deliver exceptional user experience and measurable results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {offers.map((offer, idx) => (
                <div
                  key={idx}
                  className="hog-card rounded-2xl p-6 bg-card-bg/60 backdrop-blur-sm border border-border-custom flex flex-col justify-between hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex flex-col gap-4">
                    <div className="size-11 rounded-full border border-border-custom bg-card-bg flex items-center justify-center">
                      {offer.icon}
                    </div>
                    <h3 className="font-serif text-sm md:text-base font-bold text-text-base leading-snug">{offer.title}</h3>
                    <p className="text-[10px] md:text-xs text-text-muted leading-relaxed">{offer.description}</p>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-primary hover:underline mt-6"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Process Timeline horizontal */}
          <section className="py-8 relative border-t border-border-custom/30 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1 rounded-full mb-4 inline-block">
                OUR DEVELOPMENT PROCESS
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                A Clear Process. Powerful Results.
              </h2>
              <p className="text-sm md:text-base text-text-muted mt-2">
                We follow a proven process to deliver websites that are beautiful, functional, and future-ready.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
              {steps.map((step, idx) => (
                <div key={step.id} className="flex flex-col items-center text-center relative group">
                  <div className="relative z-10 size-14 rounded-full border border-border-custom bg-card-bg shadow-sm flex items-center justify-center mb-4 text-primary">
                    {step.icon}
                  </div>
                  
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-7 left-[calc(50%+28px)] right-[calc(-50%+28px)] h-[1px] border-t border-dashed border-border-custom/80 z-0 pointer-events-none" />
                  )}

                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-xs text-primary font-bold">{step.id}</span>
                    <h5 className="font-serif text-xs md:text-sm font-bold text-text-base leading-none mt-1">{step.name}</h5>
                    <p className="text-[10px] md:text-xs text-text-muted leading-tight mt-2 px-1">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-8 relative border-t border-border-custom/30 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1 rounded-full mb-4 inline-block">
                WHY CHOOSE JAYANT WEB & AI SYSTEMS
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                More Than Just a Website
              </h2>
              <p className="text-sm md:text-base text-text-muted mt-2">
                We combine creativity, technology, and strategy to build websites that bring real business value.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-6">
              {whyChoose.map((item, idx) => (
                <div key={idx} className="hog-card rounded-2xl p-5 border border-border-custom bg-card-bg/40 flex flex-col justify-between min-h-[120px]">
                  <div className="flex flex-col gap-3 text-left">
                    <div className="size-9 rounded-full border border-border-custom bg-card-bg flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h5 className="font-serif text-xs md:text-sm font-bold text-text-base leading-snug">{item.title}</h5>
                    <p className="text-[10px] md:text-xs text-text-muted leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Recent projects */}
          <section className="py-8 relative border-t border-border-custom/30 pt-16">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
              <div className="text-left">
                <span className="font-mono text-[10px] tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-2.5 py-0.5 rounded-full mb-2 inline-block">
                  OUR RECENT WEB PROJECTS
                </span>
                <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                  Websites That Drive Success
                </h2>
              </div>
              <Link href="/portfolio" className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-primary hover:underline">
                <span>View All Projects</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
              {recentProjects.map((p) => (
                <div key={p.id} className="hog-card rounded-3xl overflow-hidden border border-border-custom bg-card-bg/40 flex flex-col h-full group">
                  <div className="w-full aspect-[4/5] bg-gradient-to-br from-neutral-900 to-neutral-800 flex items-center justify-center p-6 relative">
                    <div className="w-24 h-48 rounded-2xl bg-[#0B0F19] border border-white/10 shadow-lg flex items-center justify-center font-serif text-3xl transition-transform group-hover:scale-105 duration-300">
                      {p.icon}
                    </div>
                  </div>
                  <div className="p-5 text-left flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] font-mono font-bold text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded mb-2 inline-block">
                        {p.tag}
                      </span>
                      <h4 className="font-serif text-sm md:text-base font-bold text-text-base leading-snug mb-1">{p.title}</h4>
                      <p className="text-[10px] md:text-xs text-text-muted leading-relaxed">{p.desc}</p>
                    </div>
                    <Link href="/portfolio" className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-primary hover:underline mt-4">
                      <span>View Case Study</span>
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Industries split */}
          <section className="py-8 relative border-t border-border-custom/30 pt-16">
            <div className="text-left mb-12">
              <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1 rounded-full mb-4 inline-block">
                INDUSTRIES WE SERVE
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                Solutions for Every Industry
              </h2>
              <p className="text-sm md:text-base text-text-muted mt-2">
                We build websites for businesses across industries with unique needs.
              </p>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-8 gap-4">
              {industries.map((ind) => (
                <div key={ind.name} className="hog-card rounded-2xl p-4 border border-border-custom bg-card-bg/40 text-center flex flex-col gap-2">
                  <span className="text-2xl leading-none">{ind.icon}</span>
                  <span className="font-serif text-xs font-bold text-text-base">{ind.name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0B0F19] px-8 py-16 md:py-20 text-center shadow-lg">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,138,0,0.04),transparent)] pointer-events-none" />
            
            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
                Ready to Build Your Dream Website?
              </h2>

              <p className="text-xs md:text-sm text-white/70 max-w-lg mb-8 leading-relaxed">
                Let&apos;s create a website that represents your brand and drives real results. Book a free consultation today!
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <a
                  href="https://cal.com/jayant-web-and-ai-systems/strategy-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-hover px-7 py-3 text-xs font-mono font-bold text-white shadow-md transition-all duration-200"
                >
                  Book a Free Consultation <ArrowRight className="size-3.5" />
                </a>
                
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 hover:bg-white/5 px-7 py-3 text-xs font-mono font-bold text-white transition-all duration-200"
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

// Simple users icon replacement
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
