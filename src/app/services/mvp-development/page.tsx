"use client";

import React from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { ArrowRight, Code, Layers, ShieldCheck, Heart, Clock, Compass, ClipboardList, Layout, CheckSquare, Rocket, MessageSquare, Lock, Settings, Cpu, FileCode } from "lucide-react";

export default function MVPDevelopmentPage() {
  const serviceStats = [
    { label: "Rapid Development", icon: <Rocket className="size-4 text-primary" />, desc: "Launch in weeks, not months" },
    { label: "Cost Effective", icon: <Layers className="size-4 text-primary" />, desc: "Save time, build only what matters" },
    { label: "Investor Ready", icon: <ShieldCheck className="size-4 text-primary" />, desc: "Impress investors with working MVP" },
    { label: "Market Validation", icon: <CheckSquare className="size-4 text-primary" />, desc: "Test, learn and iterate with real users" },
  ];

  const offers = [
    {
      title: "MVP Strategy & Consulting",
      description: "We help you validate your idea, analyze the market and create a winning MVP strategy.",
      icon: <Compass className="size-6 text-primary" />,
    },
    {
      title: "Product Roadmap",
      description: "We define the core features, user journey and roadmap to build an investor-ready MVP.",
      icon: <ClipboardList className="size-6 text-primary" />,
    },
    {
      title: "UI/UX Design",
      description: "We design intuitive and engaging UI/UX that ensures great user experience from day one.",
      icon: <Layout className="size-6 text-primary" />,
    },
    {
      title: "MVP Development",
      description: "We build fast, scalable and secure MVPs using modern technologies and best practices.",
      icon: <Code className="size-6 text-primary" />,
    },
    {
      title: "Landing Page & Branding",
      description: "High converting landing pages and branding to validate your idea and attract early users.",
      icon: <Layers className="size-6 text-primary" />,
    },
    {
      title: "API Development",
      description: "Robust and scalable APIs to power your MVP and support future growth.",
      icon: <FileCode className="size-6 text-primary" />,
    },
    {
      title: "Testing & Quality Assurance",
      description: "We ensure your MVP is bug-free, secure and ready for real world usage.",
      icon: <CheckSquare className="size-6 text-primary" />,
    },
    {
      title: "Deployment & Support",
      description: "We deploy your MVP to the cloud and provide ongoing support to help you iterate and grow.",
      icon: <Rocket className="size-6 text-primary" />,
    },
  ];

  const steps = [
    { id: "01", name: "Discover", desc: "We understand your idea, target users and business goals.", icon: <Compass className="size-5 text-primary" /> },
    { id: "02", name: "Define", desc: "We define core features, user flows and MVP roadmap.", icon: <ClipboardList className="size-5 text-primary" /> },
    { id: "03", name: "Design", desc: "We create UI/UX and interactive prototypes for validation.", icon: <Layout className="size-5 text-primary" /> },
    { id: "04", name: "Develop", desc: "We build your MVP with clean code and agile methodology.", icon: <Code className="size-5 text-primary" /> },
    { id: "05", name: "Launch & Validate", desc: "We deploy your MVP and help you validate with real users.", icon: <Rocket className="size-5 text-primary" /> },
  ];

  const whyChoose = [
    { title: "Speed to Market", desc: "Launch your MVP in weeks, not months.", icon: <Rocket className="size-5 text-primary" /> },
    { title: "Cost Efficient", desc: "Build only what matters and save costs.", icon: <Layers className="size-5 text-primary" /> },
    { title: "User Focused", desc: "Designed for real users and real problems.", icon: <Heart className="size-5 text-primary" /> },
    { title: "Investor Ready", desc: "Get investor confidence with a working MVP.", icon: <ShieldCheck className="size-5 text-primary" /> },
    { title: "Future Ready", desc: "Scalable architecture for future growth.", icon: <Settings className="size-5 text-primary" /> },
    { title: "End-to-End Support", desc: "We're with you at every step of your journey.", icon: <MessageSquare className="size-5 text-primary" /> },
  ];

  const techStack = [
    { name: "Next.js", logo: "⚛️" },
    { name: "React", logo: "⚛️" },
    { name: "Node.js", logo: "🟢" },
    { name: "TypeScript", logo: "📘" },
    { name: "MongoDB", logo: "🍃" },
    { name: "PostgreSQL", logo: "🐘" },
    { name: "Firebase", logo: "🔥" },
    { name: "AWS", logo: "☁️" },
    { name: "Docker", logo: "🐳" },
    { name: "Stripe", logo: "💳" },
  ];

  const recentProjects = [
    { id: "healthmate", title: "HealthMate", tag: "HealthTech", desc: "Telemedicine MVP with doctor consultation, appointments and reports.", icon: "🩺" },
    { id: "renthub", title: "RentHub", tag: "Real Estate", desc: "Property rental platform MVP with listings, chat and booking management.", icon: "🏠" },
    { id: "studyflow", title: "StudyFlow", tag: "EdTech", desc: "Online learning MVP with courses, video lessons and progress tracking.", icon: "🎓" },
    { id: "taskpilot", title: "TaskPilot", tag: "SaaS", desc: "Task management MVP for teams with real-time collaboration and analytics.", icon: "📊" },
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
            <span className="text-text-base">MVP Development</span>
          </nav>

          {/* Hero split */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="font-mono text-[9px] uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 px-2.5 py-0.5 rounded-full mb-4">
                MVP DEVELOPMENT
              </span>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-base leading-[1.08] mb-6">
                Validate Your Idea.{" "}
                <span className="text-primary underline decoration-primary/40 decoration-4 underline-offset-8">
                  Launch Faster. Build Smarter.
                </span>
              </h1>
              <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl mb-8">
                We help you launch a market-ready MVP quickly, validate your idea, attract early users and investors, and build the right product.
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
              <div className="grid grid-cols-2 gap-4 border-t border-border-custom/50 pt-6 w-full sm:grid-cols-4">
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

            {/* Right: MVP mockup dashboard */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center p-8 select-none">
                <div className="w-full h-[85%] rounded-2xl bg-[#0B0F19] border-2 border-white/10 shadow-2xl p-4 flex flex-col gap-4 text-left">
                  <div className="flex items-center justify-between border-b border-white/5 pb-2 text-[10px] text-white/40 font-mono">
                    <span>Hi, Jayant 👋</span>
                    <span className="text-white/30">Let&apos;s build something amazing today!</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-white">
                    <div className="p-3 bg-white/5 border border-white/5 rounded-xl flex flex-col gap-1">
                      <span className="text-[9px] text-white/40">Total Users</span>
                      <span className="text-sm font-bold">2,543</span>
                    </div>
                    <div className="p-3 bg-white/5 border border-white/5 rounded-xl flex flex-col gap-1">
                      <span className="text-[9px] text-white/40">Active Users</span>
                      <span className="text-sm font-bold">1,482</span>
                    </div>
                  </div>
                  <div className="flex-1 bg-white/5 border border-white/5 rounded-xl p-3 flex items-center justify-center font-mono text-[10px] text-white/30">
                    [ User Growth Chart ]
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
                Our MVP Development Services
              </h2>
              <p className="text-sm md:text-base text-text-muted mt-2">
                End-to-end MVP development to turn your idea into a validated product.
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
                OUR MVP DEVELOPMENT PROCESS
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                From Idea to Market in 5 Steps
              </h2>
              <p className="text-sm md:text-base text-text-muted mt-2">
                Our lean MVP process helps you launch quickly, validate faster and iterate smarter.
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
                WHY CHOOSE US
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                Build Less. Learn More. Grow Faster.
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

          {/* Technologies we use */}
          <section className="py-8 relative border-t border-border-custom/30 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1 rounded-full mb-4 inline-block">
                TECHNOLOGIES WE USE
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                Modern Tech for Powerful MVPs
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
                  RECENT MVP PROJECTS
                </span>
                <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                  Featured MVPs
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
                Ready to Launch Your MVP?
              </h2>

              <p className="text-xs md:text-sm text-white/70 max-w-lg mb-8 leading-relaxed">
                Let&apos;s turn your idea into a market-ready product and achieve product-market fit.
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
