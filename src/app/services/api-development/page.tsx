"use client";

import React from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { ArrowRight, Code, Layers, ShieldCheck, Heart, Clock, Compass, ClipboardList, Layout, CheckSquare, Rocket, MessageSquare, Lock, Settings, Cpu, FileCode } from "lucide-react";

export default function APIDevelopmentPage() {
  const serviceStats = [
    { label: "Secure & Reliable", icon: <Lock className="size-4 text-primary" />, desc: "Enterprise-grade security" },
    { label: "Scalable Architecture", icon: <Layers className="size-4 text-primary" />, desc: "Built for performance" },
    { label: "Seamless Integrations", icon: <Cpu className="size-4 text-primary" />, desc: "Connect any system" },
    { label: "Faster Time-to-Market", icon: <Rocket className="size-4 text-primary" />, desc: "Agile & efficient delivery" },
  ];

  const offers = [
    {
      title: "Custom API Development",
      description: "We design and build secure, scalable, and well-documented APIs tailored to your business requirements.",
      icon: <Code className="size-6 text-primary" />,
    },
    {
      title: "Third-Party API Integration",
      description: "Integrate with any third-party service or platform to extend functionality and automate operations.",
      icon: <Cpu className="size-6 text-primary" />,
    },
    {
      title: "RESTful API Development",
      description: "Build fast, lightweight, and RESTful APIs following best practices and industry standards.",
      icon: <FileCode className="size-6 text-primary" />,
    },
    {
      title: "GraphQL API Development",
      description: "Flexible, efficient, and powerful APIs with GraphQL for optimized performance and developer experience.",
      icon: <Layers className="size-6 text-primary" />,
    },
    {
      title: "API Security & Authentication",
      description: "OAuth, API keys, JWT, and role-based access control to protect your APIs and data.",
      icon: <Lock className="size-6 text-primary" />,
    },
    {
      title: "API Documentation",
      description: "Clear, interactive, and developer-friendly documentation using Swagger / OpenAPI.",
      icon: <Layout className="size-6 text-primary" />,
    },
    {
      title: "API Testing & Monitoring",
      description: "Thorough testing, monitoring, and analytics to ensure uptime, reliability, and performance.",
      icon: <CheckSquare className="size-6 text-primary" />,
    },
    {
      title: "Legacy System Integration",
      description: "Connect and modernize legacy systems with modern APIs and seamless data flow.",
      icon: <Rocket className="size-6 text-primary" />,
    },
  ];

  const steps = [
    { id: "01", name: "Discover", desc: "We understand your business, systems, and integration goals.", icon: <Compass className="size-5 text-primary" /> },
    { id: "02", name: "Design", desc: "We design API architecture, endpoints, data flow, and security model.", icon: <ClipboardList className="size-5 text-primary" /> },
    { id: "03", name: "Develop", desc: "We build, integrate, and develop APIs following best practices.", icon: <Code className="size-5 text-primary" /> },
    { id: "04", name: "Test", desc: "We test for functionality, security, performance, and reliability.", icon: <CheckSquare className="size-5 text-primary" /> },
    { id: "05", name: "Deploy", desc: "We deploy the APIs to production with proper monitoring.", icon: <Rocket className="size-5 text-primary" /> },
    { id: "06", name: "Support", desc: "We provide ongoing support, updates, and performance tuning.", icon: <MessageSquare className="size-5 text-primary" /> },
  ];

  const whyChoose = [
    { title: "Experienced Team", desc: "Skilled API engineers with years of experience.", icon: <UsersIcon className="size-5 text-primary" /> },
    { title: "Secure by Design", desc: "Security best practices built into every API.", icon: <Lock className="size-5 text-primary" /> },
    { title: "Scalable Solutions", desc: "APIs built to scale with your business.", icon: <Layers className="size-5 text-primary" /> },
    { title: "Faster Integration", desc: "Quick and seamless third-party integrations.", icon: <Rocket className="size-5 text-primary" /> },
    { title: "Reliable Support", desc: "Ongoing support and maintenance you can trust.", icon: <Heart className="size-5 text-primary" /> },
    { title: "Developer Friendly", desc: "Clean, well-documented, and easy to implement.", icon: <Code className="size-5 text-primary" /> },
  ];

  const techStack = [
    { name: "AWS", logo: "☁️" },
    { name: "Google Cloud", logo: "☁️" },
    { name: "Microsoft Azure", logo: "☁️" },
    { name: "Stripe", logo: "💳" },
    { name: "Salesforce", logo: "👥" },
    { name: "HubSpot", logo: "📊" },
    { name: "Twilio", logo: "💬" },
    { name: "PayPal", logo: "💵" },
  ];

  const recentProjects = [
    { id: "payment-gateway", title: "Payment Gateway Integration", tag: "FinTech", desc: "Integrated multiple payment gateways for a FinTech platform with secure APIs and real-time webhooks.", icon: "💳" },
    { id: "ehr-system", title: "EHR System Integration", tag: "Healthcare", desc: "Integrated third-party EHR APIs to sync patient data, appointments, and billing information.", icon: "🩺" },
    { id: "marketplace-api", title: "Marketplace API Suite", tag: "E-commerce", desc: "Developed a complete API suite for a marketplace platform to manage products, orders & users.", icon: "🛒" },
    { id: "crm-email", title: "CRM & Email Automation", tag: "SaaS", desc: "Connected CRM, email, and marketing tools through APIs to automate workflows and lead management.", icon: "📊" },
  ];

  const schemaNodes = [
    { title: "Stripe", icon: <Layers className="size-4 text-primary" />, x: -140, y: -90 },
    { title: "HubSpot", icon: <Layers className="size-4 text-primary" />, x: 140, y: -90 },
    { title: "Salesforce", icon: <Layers className="size-4 text-primary" />, x: -140, y: 0 },
    { title: "AWS", icon: <Layers className="size-4 text-primary" />, x: 140, y: 0 },
    { title: "PayPal", icon: <Layers className="size-4 text-primary" />, x: -140, y: 90 },
    { title: "Google Sheets", icon: <Layers className="size-4 text-primary" />, x: 140, y: 90 },
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
            <span className="text-text-base">API Development & Integration</span>
          </nav>

          {/* Hero split */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="font-mono text-[9px] uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 px-2.5 py-0.5 rounded-full mb-4">
                API DEVELOPMENT & INTEGRATION
              </span>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-base leading-[1.08] mb-6">
                Power Your Apps with Seamless{" "}
                <span className="text-primary underline decoration-primary/40 decoration-4 underline-offset-8">
                  APIs & Integrations.
                </span>
              </h1>
              <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl mb-8">
                We build, connect, and integrate powerful APIs that unlock new capabilities, automate workflows, and drive digital transformation.
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

            {/* Right: API schema */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center p-8 select-none">
                
                {/* SVG Connectors */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
                  <path d="M 200 200 L 100 110" stroke="var(--color-primary)" strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="4,4" />
                  <path d="M 200 200 L 300 110" stroke="var(--color-primary)" strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="4,4" />
                  <path d="M 200 200 L 100 200" stroke="var(--color-primary)" strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="4,4" />
                  <path d="M 200 200 L 300 200" stroke="var(--color-primary)" strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="4,4" />
                  <path d="M 200 200 L 100 290" stroke="var(--color-primary)" strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="4,4" />
                  <path d="M 200 200 L 300 290" stroke="var(--color-primary)" strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="4,4" />
                </svg>

                {/* Central server model */}
                <div className="relative z-10 size-24 rounded-2xl bg-neutral-900 border border-white/10 flex flex-col items-center justify-center shadow-lg text-center p-2">
                  <span className="font-mono text-sm text-primary font-bold">&lt;/&gt;</span>
                  <span className="text-[10px] font-mono text-white mt-1 uppercase tracking-widest leading-none">API</span>
                </div>

                {/* Outer nodes */}
                {schemaNodes.map((node, i) => (
                  <div
                    key={i}
                    className="absolute z-20"
                    style={{ transform: `translate(${node.x}px, ${node.y}px)` }}
                  >
                    <div className="flex items-center gap-2 p-2 rounded-xl bg-white dark:bg-[#111827] border border-border-custom shadow-sm min-w-[90px] text-center justify-center">
                      <span className="text-[9px] font-serif font-bold text-text-base leading-none">{node.title}</span>
                    </div>
                  </div>
                ))}

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
                Our API Development & Integration Services
              </h2>
              <p className="text-sm md:text-base text-text-muted mt-2">
                End-to-end API solutions that connect, extend, and empower your business systems.
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
                A Proven Process. Reliable Results.
              </h2>
              <p className="text-sm md:text-base text-text-muted mt-2">
                We follow a structured approach to deliver secure, scalable, and high-performance API solutions.
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
                APIs That Connect. Integrations That Create Value.
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-6 gap-6">
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

          {/* Technologies we integrate with */}
          <section className="py-8 relative border-t border-border-custom/30 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1 rounded-full mb-4 inline-block">
                TECHNOLOGIES & INTEGRATIONS
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                Connect With The Tools You Already Use
              </h2>
            </div>

            <div className="grid grid-cols-4 sm:grid-cols-8 gap-4">
              {techStack.map((tech) => (
                <div key={tech.name} className="hog-card rounded-2xl p-4 border border-border-custom bg-card-bg/40 text-center flex flex-col gap-2 items-center justify-center">
                  <span className="text-2xl leading-none">{tech.logo}</span>
                  <span className="font-serif text-xs font-bold text-text-base leading-none">{tech.name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Recent projects */}
          <section className="py-8 relative border-t border-border-custom/30 pt-16">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
              <div className="text-left">
                <span className="font-mono text-[10px] tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-2.5 py-0.5 rounded-full mb-2 inline-block">
                  RECENT API PROJECTS
                </span>
                <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                  Featured Integrations
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
                Ready to Build Powerful APIs and Seamless Integrations?
              </h2>

              <p className="text-xs md:text-sm text-white/70 max-w-lg mb-8 leading-relaxed">
                Let&apos;s connect your systems, automate your workflows, and scale your business.
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
