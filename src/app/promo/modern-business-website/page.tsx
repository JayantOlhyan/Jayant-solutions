"use client";

import React from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export default function PromoModernWebsitePage() {
  const indicators = [
    { label: "Modern & Scalable", icon: "🌐" },
    { label: "Performance Focused", icon: "⚡" },
    { label: "Secure by Design", icon: "🔒" },
  ];

  const clientLogos = [
    "StackCode TRAINING", "Healthkinator", "FlowForge", "MONEY PULSE", "SMART SURVEILLANCE", "JanGanana DIGITAL"
  ];

  const services = [
    {
      title: "Web Development",
      desc: "Fast, responsive and SEO-friendly websites that convert.",
      icon: "🌐"
    },
    {
      title: "Web Applications",
      desc: "Scalable web apps built with modern technologies.",
      icon: "💻"
    },
    {
      title: "Mobile Development",
      desc: "Cross-platform mobile apps for iOS & Android using Flutter.",
      icon: "📱"
    },
    {
      title: "AI & Automation",
      desc: "AI-powered solutions and workflow automation to save time & cost.",
      icon: "🧠"
    },
    {
      title: "Cloud & DevOps",
      desc: "Deploy, manage and scale your applications in the cloud.",
      icon: "☁️"
    },
    {
      title: "UI/UX Design",
      desc: "Beautiful, intuitive designs that enhance user experience.",
      icon: "🎨"
    }
  ];

  const stats = [
    { value: "150+", label: "Projects Completed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "5+", label: "Years of Experience" },
    { value: "24/7", label: "Support & Maintenance" }
  ];

  const recentWork = [
    { title: "Analytics Dashboard", type: "Web Application", image: "📊" },
    { title: "E-Commerce Platform", type: "Web Development", image: "🛒" },
    { title: "Health Tracking App", type: "Mobile Development", image: "📱" },
    { title: "AI Chatbot SaaS", type: "Web Development", image: "🤖" }
  ];

  return (
    <PageTransition>
      <div className="hog-grid min-h-screen pb-20 pt-10 text-left">
        <main className="max-w-none px-6 md:px-12 lg:px-16 flex flex-col gap-20 md:gap-28">
          
          {/* Breadcrumbs */}
          <nav className="text-xs font-mono text-text-muted flex items-center gap-2 pt-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>&gt;</span>
            <span className="text-text-muted">Solutions</span>
            <span>&gt;</span>
            <span className="text-text-base">Modern Business Website</span>
          </nav>

          {/* Hero */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <span className="font-mono text-[9px] uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 px-2.5 py-0.5 rounded-full mb-4">
                WE BUILD DIGITAL PRODUCTS
              </span>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-base leading-[1.08] mb-6">
                We Build Digital Products <br />
                <span className="text-primary underline decoration-primary/40 decoration-4 underline-offset-8">
                  That Drive Growth.
                </span>
              </h1>
              <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl mb-8">
                We help businesses and startups design, build and scale powerful websites, web apps and AI-driven solutions that deliver real results.
              </p>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
                <Link
                  href="/contact/book-a-consultation"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-hover text-white px-7 py-3 text-xs font-mono font-bold transition-all shadow-md active:scale-[0.98]"
                >
                  <span>Our Services</span>
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/portfolio"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-border-custom bg-white hover:bg-neutral-50 dark:bg-card-bg dark:hover:bg-neutral-900 px-7 py-3 text-xs font-mono font-bold text-text-base transition-colors"
                >
                  <span>View Our Work</span>
                </Link>
              </div>

              {/* Stats/Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-border-custom/50 pt-6 w-full">
                {indicators.map((ind, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <span className="text-lg leading-none shrink-0">{ind.icon}</span>
                    <span className="text-[10px] font-mono font-bold text-text-base leading-none">{ind.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Graphic mockup */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-[24px] overflow-hidden border border-border-custom bg-neutral-900 shadow-2xl p-6 flex flex-col justify-between text-white/95">
                <div className="flex flex-col gap-3 font-mono text-[9px] text-white/60">
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span>Website Design</span><span className="text-primary font-bold">Premium & Responsive</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span>Page Load Speed</span><span className="text-primary font-bold">↑ 98% Score</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span>Security</span><span className="text-primary">SSL & DDOS Protected</span>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/5 p-3 rounded-xl flex justify-between items-center text-[10px] mt-4">
                  <div className="flex flex-col text-left">
                    <span className="text-white/40 uppercase tracking-widest font-mono">Performance Metric</span>
                    <span className="font-bold font-serif text-white mt-1">Status: Operational & Live</span>
                  </div>
                  <span className="text-lg">💻</span>
                </div>
              </div>
            </div>

          </section>

          {/* Client Logos strip */}
          <section className="py-4 border-y border-border-custom/15 text-center">
            <span className="text-[9px] font-mono font-bold text-text-muted uppercase tracking-widest block mb-6">Trusted by Businesses & Startups</span>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
              {clientLogos.map((logo) => (
                <span key={logo} className="font-serif text-sm font-bold text-text-muted/60 hover:text-text-base transition-colors select-none">
                  {logo}
                </span>
              ))}
            </div>
          </section>

          {/* Our Services */}
          <section className="py-8 border-t border-border-custom/25 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                Our Services
              </h2>
              <p className="text-xs md:text-sm text-text-muted leading-relaxed mt-4">
                End-to-end digital solutions tailored to your business needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {services.map((svc, idx) => (
                <div
                  key={idx}
                  className="hog-card rounded-2xl p-5 border border-border-custom bg-card-bg/40 flex flex-col gap-3 text-left"
                >
                  <div className="size-9 rounded-full border border-border-custom bg-card-bg flex items-center justify-center text-xl shadow-sm shrink-0">
                    {svc.icon}
                  </div>
                  <h5 className="font-serif text-xs md:text-sm font-bold text-text-base leading-snug">{svc.title}</h5>
                  <p className="text-[10px] md:text-xs text-text-muted leading-relaxed">{svc.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* About Us section */}
          <section className="py-8 border-t border-border-custom/25 pt-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
              <div className="lg:col-span-6 flex flex-col items-start">
                <span className="font-mono text-[9px] uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 px-2.5 py-0.5 rounded-full mb-4">
                  ABOUT US
                </span>
                <h3 className="font-serif text-2xl md:text-4xl font-bold text-text-base mb-6 leading-tight">
                  We are passionate about building innovative solutions.
                </h3>
                <p className="text-xs md:text-sm text-text-muted mb-8 leading-relaxed max-w-lg">
                  At Jayant Web & AI Systems, we combine creativity, technology and strategy to build digital products that help businesses grow faster and achieve more.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-hover px-6 py-2.5 text-xs font-mono font-bold text-white shadow-md transition-all duration-200"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>

              <div className="lg:col-span-6 grid grid-cols-2 gap-4 text-left">
                {stats.map((item, idx) => (
                  <div key={idx} className="hog-card rounded-2xl p-5 border border-border-custom bg-card-bg/40 flex flex-col gap-1">
                    <span className="font-serif text-3xl font-bold text-primary">{item.value}</span>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Recent Work */}
          <section className="py-8 border-t border-border-custom/25 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                Our Recent Work
              </h2>
              <p className="text-xs md:text-sm text-text-muted leading-relaxed mt-4">
                A glimpse of the projects we&apos;re proud to have built.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recentWork.map((project, idx) => (
                <div
                  key={idx}
                  className="hog-card rounded-2xl p-5 border border-border-custom bg-card-bg/40 flex flex-col gap-3 text-left"
                >
                  <div className="aspect-[4/3] rounded-xl bg-[#0B0F19] border border-white/5 flex items-center justify-center text-4xl">
                    {project.image}
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[9px] font-mono text-primary font-bold uppercase tracking-wider">{project.type}</span>
                    <h5 className="font-serif text-xs md:text-sm font-bold text-text-base mt-1">{project.title}</h5>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom CTA Block */}
          <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0B0F19] p-8 md:p-12 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center text-left">
              
              {/* Left */}
              <div className="lg:col-span-8 flex flex-col items-start">
                <h3 className="font-serif text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  Let&apos;s build something amazing together.
                </h3>
                <p className="text-xs md:text-sm text-white/70 mb-6 leading-relaxed max-w-lg">
                  Have a project in mind? Let&apos;s discuss how we can help you turn your ideas into reality.
                </p>
                
                <div className="flex flex-wrap gap-4 text-white/80">
                  <Link
                    href="/contact/book-a-consultation"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-hover px-6 py-2.5 text-xs font-mono font-bold text-white shadow-md transition-all duration-200"
                  >
                    <span>Get a Free Quote</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                  <Link
                    href="/contact/book-a-consultation"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 hover:bg-white/5 px-6 py-2.5 text-xs font-mono font-bold text-white transition-all duration-200"
                  >
                    <span>Schedule a Call</span>
                  </Link>
                </div>
              </div>

              {/* Right list */}
              <div className="lg:col-span-4 flex flex-col gap-3 text-white text-[10px] font-mono">
                <div className="flex items-center gap-2.5">
                  <Check className="size-3.5 text-primary shrink-0" />
                  <span>Modern & Scalable Design</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="size-3.5 text-primary shrink-0" />
                  <span>Performance Focused Code</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="size-3.5 text-primary shrink-0" />
                  <span>Secure & Reliable Stack</span>
                </div>
              </div>

            </div>
          </section>

        </main>
      </div>
    </PageTransition>
  );
}
