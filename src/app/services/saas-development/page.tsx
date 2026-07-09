"use client";

import React from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { ArrowRight, Code, Layers, ShieldCheck, Heart, Clock, Compass, ClipboardList, Layout, CheckSquare, Rocket, MessageSquare, Lock, Settings, CreditCard, Cpu, ShieldAlert } from "lucide-react";

export default function SaaSDevelopmentPage() {
  const serviceStats = [
    { label: "Scalable & Secure", icon: <Lock className="size-4 text-primary" />, desc: "Built to grow with you" },
    { label: "High Performance", icon: <Cpu className="size-4 text-primary" />, desc: "Lightning fast & reliable" },
    { label: "User-Centric Design", icon: <Layout className="size-4 text-primary" />, desc: "Engaging & intuitive" },
  ];

  const offers = [
    {
      title: "SaaS Consulting",
      description: "Validate your idea, define roadmap, and build a strong foundation for your SaaS product.",
      icon: <Compass className="size-6 text-primary" />,
    },
    {
      title: "SaaS Product Design",
      description: "Beautiful, intuitive, and conversion-focused UI/UX that your users will love.",
      icon: <Layout className="size-6 text-primary" />,
    },
    {
      title: "SaaS Development",
      description: "Scalable, secure, and high-performance SaaS applications built with modern tech.",
      icon: <Code className="size-6 text-primary" />,
    },
    {
      title: "Multi-Tenant Architecture",
      description: "Build flexible multi-tenant platforms with data isolation and role-based access.",
      icon: <Layers className="size-6 text-primary" />,
    },
    {
      title: "Subscription & Billing",
      description: "Integrate secure payment gateways, subscriptions, trials, and invoicing seamlessly.",
      icon: <CreditCard className="size-6 text-primary" />,
    },
    {
      title: "SaaS Migration",
      description: "Migrate your existing application to a modern SaaS architecture with zero data loss.",
      icon: <Rocket className="size-6 text-primary" />,
    },
    {
      title: "API & Integrations",
      description: "Connect third-party tools and APIs to supercharge your SaaS platform.",
      icon: <Cpu className="size-6 text-primary" />,
    },
    {
      title: "Maintenance & Scaling",
      description: "Ongoing support, optimization, and scaling to handle more users and data.",
      icon: <Settings className="size-6 text-primary" />,
    },
  ];

  const steps = [
    { id: "01", name: "Discover", desc: "We analyze your idea, market, and users to define success.", icon: <Compass className="size-5 text-primary" /> },
    { id: "02", name: "Plan", desc: "We create a product roadmap and technical architecture.", icon: <ClipboardList className="size-5 text-primary" /> },
    { id: "03", name: "Design", desc: "We design intuitive UI/UX for a seamless user experience.", icon: <Layout className="size-5 text-primary" /> },
    { id: "04", name: "Develop", desc: "We build your SaaS with clean code and modern technologies.", icon: <Code className="size-5 text-primary" /> },
    { id: "05", name: "Test", desc: "We test thoroughly for performance, security, and reliability.", icon: <CheckSquare className="size-5 text-primary" /> },
    { id: "06", name: "Launch & Scale", desc: "We deploy and help you scale with continuous improvements.", icon: <Rocket className="size-5 text-primary" /> },
  ];

  const whyChoose = [
    { title: "Scalable by Design", desc: "Built to scale from day one to millions of users.", icon: <Layers className="size-5 text-primary" /> },
    { title: "Secure & Compliant", desc: "Enterprise-grade security and compliance standards.", icon: <Lock className="size-5 text-primary" /> },
    { title: "Faster Time to Market", desc: "Agile development for quick launch and iteration.", icon: <Rocket className="size-5 text-primary" /> },
    { title: "Cost Effective", desc: "Optimize costs with efficient architecture and DevOps.", icon: <Settings className="size-5 text-primary" /> },
    { title: "Dedicated Support", desc: "We're with you at every step of your SaaS journey.", icon: <Heart className="size-5 text-primary" /> },
  ];

  const techStack = [
    { name: "Next.js", logo: "⚛️" },
    { name: "React", logo: "⚛️" },
    { name: "Node.js", logo: "🟢" },
    { name: "TypeScript", logo: "📘" },
    { name: "MongoDB", logo: "🍃" },
    { name: "PostgreSQL", logo: "🐘" },
    { name: "AWS", logo: "☁️" },
    { name: "Docker", logo: "🐳" },
    { name: "Stripe", logo: "💳" },
    { name: "Redis", logo: "🔴" },
  ];

  const recentProjects = [
    { id: "fintrack", title: "FinTrack", tag: "FinTech", desc: "A complete financial management SaaS platform for businesses.", icon: "📊" },
    { id: "teacherflow", title: "TeacherFlow", tag: "EdTech", desc: "Learning management SaaS platform for educators and students.", icon: "🎓" },
    { id: "healthily-pro", title: "Healthily Pro", tag: "HealthTech", desc: "Telemedicine SaaS platform with appointment and billing.", icon: "🩺" },
    { id: "shopease", title: "ShopEase", tag: "E-commerce", desc: "E-commerce SaaS platform with multi-store and analytics.", icon: "🛒" },
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
            <span className="text-text-base">SaaS Development</span>
          </nav>

          {/* Hero split */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="font-mono text-[9px] uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 px-2.5 py-0.5 rounded-full mb-4">
                SaaS DEVELOPMENT
              </span>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-base leading-[1.08] mb-6">
                Build Scalable SaaS Platforms That{" "}
                <span className="text-primary underline decoration-primary/40 decoration-4 underline-offset-8">
                  Drive Growth.
                </span>
              </h1>
              <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl mb-8">
                From idea to enterprise-grade SaaS platform, we build secure, scalable, and feature-rich solutions that users love and businesses rely on.
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
              <div className="grid grid-cols-2 gap-4 border-t border-border-custom/50 pt-6 w-full sm:grid-cols-3">
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

            {/* Right: SaaS dashboard mockup */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center p-8 select-none">
                <div className="w-full h-[85%] rounded-2xl bg-[#0B0F19] border-2 border-white/10 shadow-2xl p-4 flex flex-col gap-4 text-left">
                  <div className="flex items-center justify-between border-b border-white/5 pb-2 text-[10px] text-white/40 font-mono">
                    <span>Hello, Jayant 👋</span>
                    <span className="bg-primary/20 text-primary px-2 py-0.5 rounded text-[8px]">ACTIVE</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-white">
                    <div className="p-3 bg-white/5 border border-white/5 rounded-xl flex flex-col gap-1">
                      <span className="text-[9px] text-white/40">Total Revenue</span>
                      <span className="text-sm font-bold">$48,250</span>
                    </div>
                    <div className="p-3 bg-white/5 border border-white/5 rounded-xl flex flex-col gap-1">
                      <span className="text-[9px] text-white/40">Active Users</span>
                      <span className="text-sm font-bold">2,482</span>
                    </div>
                  </div>
                  <div className="flex-1 bg-white/5 border border-white/5 rounded-xl p-3 flex items-center justify-center font-mono text-[10px] text-white/30">
                    [ Revenue Chart Visualization ]
                  </div>
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
                Our SaaS Development Services
              </h2>
              <p className="text-sm md:text-base text-text-muted mt-2">
                We build robust, scalable, and secure SaaS platforms tailored to your business goals.
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
                OUR SaaS DEVELOPMENT PROCESS
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                From Idea to Scalable SaaS Platform
              </h2>
              <p className="text-sm md:text-base text-text-muted mt-2">
                A proven process to build SaaS products that are reliable, scalable, and loved by users.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
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
                WHY CHOOSE US
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                SaaS Solutions That Create Lasting Impact
              </h2>
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

          {/* Technologies we use */}
          <section className="py-8 relative border-t border-border-custom/30 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1 rounded-full mb-4 inline-block">
                TECHNOLOGIES WE USE
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                Modern Tech for Modern SaaS
              </h2>
            </div>

            <div className="grid grid-cols-4 sm:grid-cols-10 gap-4">
              {techStack.map((tech) => (
                <div key={tech.name} className="hog-card rounded-2xl p-4 border border-border-custom bg-card-bg/40 text-center flex flex-col gap-2 items-center justify-center">
                  <span className="text-2xl leading-none">{tech.logo}</span>
                  <span className="font-serif text-[10px] font-bold text-text-base leading-none">{tech.name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Recent projects */}
          <section className="py-8 relative border-t border-border-custom/30 pt-16">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
              <div className="text-left">
                <span className="font-mono text-[10px] tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-2.5 py-0.5 rounded-full mb-2 inline-block">
                  RECENT SaaS PROJECTS
                </span>
                <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                  Featured SaaS Platforms
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

          {/* Bottom CTA */}
          <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0B0F19] px-8 py-16 md:py-20 text-center shadow-lg">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,138,0,0.04),transparent)] pointer-events-none" />
            
            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
                Ready to Build Your SaaS Product?
              </h2>

              <p className="text-xs md:text-sm text-white/70 max-w-lg mb-8 leading-relaxed">
                Let&apos;s turn your idea into a scalable SaaS platform that users love and your business grows on.
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
