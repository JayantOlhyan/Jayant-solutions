"use client";

import React from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Smartphone, Tablet, Layers, ShieldCheck, Heart, Clock, Award, Compass, ClipboardList, Layout, Code, CheckSquare, Rocket, MessageSquare, Shield, Users, Lock, Send, Eye } from "lucide-react";

export default function MobileAppDevelopmentPage() {
  const serviceStats = [
    { label: "User-Centric Design", icon: <Layout className="size-4 text-primary" />, desc: "Intuitive & engaging apps" },
    { label: "High Performance", icon: <ZapIcon className="size-4 text-primary" />, desc: "Fast, scalable & reliable" },
    { label: "Secure & Compliant", icon: <Lock className="size-4 text-primary" />, desc: "Data protection guaranteed" },
    { label: "End-to-End Support", icon: <MessageSquare className="size-4 text-primary" />, desc: "From ideation to growth" },
  ];

  const offers = [
    {
      title: "iOS App Development",
      description: "Native iOS apps built with Swift to deliver smooth performance and exceptional user experience.",
      icon: <Smartphone className="size-6 text-primary" />,
    },
    {
      title: "Android App Development",
      description: "High-quality Android apps built with Kotlin for a wide range of devices.",
      icon: <Tablet className="size-6 text-primary" />,
    },
    {
      title: "Cross-Platform Apps",
      description: "Build once, run everywhere with React Native & Flutter for faster time-to-market.",
      icon: <Layers className="size-6 text-primary" />,
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, intuitive & user-centric designs that create delightful mobile experiences.",
      icon: <Layout className="size-6 text-primary" />,
    },
    {
      title: "Backend & API Integration",
      description: "Robust backend systems and seamless API integrations to power your mobile app.",
      icon: <Code className="size-6 text-primary" />,
    },
    {
      title: "QA & Testing",
      description: "Comprehensive testing for performance, security, and compatibility.",
      icon: <CheckSquare className="size-6 text-primary" />,
    },
    {
      title: "App Maintenance",
      description: "Ongoing support, bug fixes, updates, and performance optimization.",
      icon: <Clock className="size-6 text-primary" />,
    },
    {
      title: "App Deployment",
      description: "We handle app store submission and ensure a smooth launch experience.",
      icon: <Rocket className="size-6 text-primary" />,
    },
  ];

  const steps = [
    { id: "01", name: "Discover", desc: "We understand your business, users, and goals.", icon: <Compass className="size-5 text-primary" /> },
    { id: "02", name: "Plan", desc: "We define features, tech stack & project roadmap.", icon: <ClipboardList className="size-5 text-primary" /> },
    { id: "03", name: "Design", desc: "We create stunning UI/UX designs and prototypes.", icon: <Layout className="size-5 text-primary" /> },
    { id: "04", name: "Develop", desc: "We build high-quality, scalable & secure mobile apps.", icon: <Code className="size-5 text-primary" /> },
    { id: "05", name: "Test", desc: "We test rigorously for performance, security & compatibility.", icon: <CheckSquare className="size-5 text-primary" /> },
    { id: "06", name: "Launch & Support", desc: "We launch your app and provide ongoing support.", icon: <Rocket className="size-5 text-primary" /> },
  ];

  const industries = [
    { name: "Healthcare", icon: "❤️" },
    { name: "Education", icon: "🎓" },
    { name: "Finance", icon: "🏦" },
    { name: "Retail", icon: "🛒" },
    { name: "Logistics", icon: "📦" },
    { name: "Real Estate", icon: "🏢" },
    { name: "On-Demand", icon: "⚡" },
  ];

  const whyChoose = [
    { title: "Experienced Team", desc: "Skilled developers & designers with proven expertise.", icon: <Users className="size-5 text-primary" /> },
    { title: "Scalable Solutions", desc: "Apps built to scale with your business.", icon: <Layers className="size-5 text-primary" /> },
    { title: "Transparent Communication", desc: "Clear updates & collaboration at every step.", icon: <MessageSquare className="size-5 text-primary" /> },
    { title: "On-Time Delivery", desc: "We value your time and deliver on schedule.", icon: <Clock className="size-5 text-primary" /> },
    { title: "Long-Term Support", desc: "We're with you beyond launch for continuous growth.", icon: <Heart className="size-5 text-primary" /> },
  ];

  const recentProjects = [
    { id: "healthmate", title: "HealthMate", tag: "Healthcare", desc: "Telemedicine app connecting patients with doctors seamlessly.", phoneImg: "🩺" },
    { id: "shopease", title: "ShopEase", tag: "Retail", desc: "E-commerce app with smart recommendations and secure payments.", phoneImg: "🛍️" },
    { id: "fintrack", title: "FinTrack", tag: "Finance", desc: "Personal finance tracker for budgeting, expenses & analytics.", phoneImg: "📊" },
    { id: "quickserve", title: "QuickServe", tag: "On-Demand", desc: "On-demand service app for bookings, live tracking & payments.", phoneImg: "🚗" },
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
            <span className="text-text-base">Mobile App Development</span>
          </nav>

          {/* Hero split */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="font-mono text-[9px] uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 px-2.5 py-0.5 rounded-full mb-4">
                MOBILE APP DEVELOPMENT
              </span>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-base leading-[1.08] mb-6">
                Mobile Apps That Engage Users &{" "}
                <span className="text-primary underline decoration-primary/40 decoration-4 underline-offset-8">
                  Grow Your Business
                </span>
              </h1>
              <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl mb-8">
                I build high-performance, secure, and user-friendly mobile apps for iOS and Android that deliver exceptional experiences and measurable results.
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

            {/* Right: Phone mockup schematic */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center p-8 select-none">
                
                {/* Central mock phones */}
                <div className="relative z-10 flex gap-4 rotate-[15deg]">
                  <div className="w-28 h-56 rounded-3xl bg-[#0B0F19] border-2 border-white/10 shadow-2xl flex flex-col items-center justify-center font-serif text-3xl">
                    📱
                  </div>
                  <div className="w-28 h-56 rounded-3xl bg-[#0B0F19] border-2 border-white/10 shadow-2xl flex flex-col items-center justify-center font-serif text-3xl -translate-y-4">
                    📊
                  </div>
                </div>

                {/* Nodes */}
                <div className="absolute top-4 left-4 p-2.5 rounded-xl border border-border-custom bg-card-bg shadow-sm text-center min-w-[90px]">
                  <span className="text-[10px] font-serif font-bold text-text-base">iOS Dev</span>
                </div>
                <div className="absolute bottom-4 left-4 p-2.5 rounded-xl border border-border-custom bg-card-bg shadow-sm text-center min-w-[90px]">
                  <span className="text-[10px] font-serif font-bold text-text-base">Android Dev</span>
                </div>
                <div className="absolute top-4 right-4 p-2.5 rounded-xl border border-border-custom bg-card-bg shadow-sm text-center min-w-[90px]">
                  <span className="text-[10px] font-serif font-bold text-text-base">Cross-Platform</span>
                </div>
                <div className="absolute bottom-4 right-4 p-2.5 rounded-xl border border-border-custom bg-card-bg shadow-sm text-center min-w-[90px]">
                  <span className="text-[10px] font-serif font-bold text-text-base">Launch & Scale</span>
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
                Custom Mobile App Development Services
              </h2>
              <p className="text-sm md:text-base text-text-muted mt-2">
                We create powerful mobile apps tailored to your business goals and your users&apos; needs.
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
                From Idea to Successful App
              </h2>
              <p className="text-sm md:text-base text-text-muted mt-2">
                A streamlined process that ensures quality, clarity, and on-time delivery.
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

          {/* Industries split */}
          <section className="py-8 relative border-t border-border-custom/30 pt-16">
            <div className="text-left mb-12">
              <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1 rounded-full mb-4 inline-block">
                INDUSTRIES WE SERVE
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                Mobile Solutions for Every Industry
              </h2>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-7 gap-4">
              {industries.map((ind) => (
                <div key={ind.name} className="hog-card rounded-2xl p-4 border border-border-custom bg-card-bg/40 text-center flex flex-col gap-2">
                  <span className="text-2xl leading-none">{ind.icon}</span>
                  <span className="font-serif text-xs font-bold text-text-base">{ind.name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-8 relative border-t border-border-custom/30 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1 rounded-full mb-4 inline-block">
                WHY CHOOSE JAYANT WEB & AI SYSTEMS!
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                Your Vision. Our Mobile Expertise.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-6">
              {whyChoose.map((item, idx) => (
                <div key={idx} className="hog-card rounded-2xl p-5 border border-border-custom bg-card-bg/40 flex flex-col justify-between min-h-[120px]">
                  <div className="flex flex-col gap-3">
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

          {/* Recent mobile projects */}
          <section className="py-8 relative border-t border-border-custom/30 pt-16">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
              <div className="text-left">
                <span className="font-mono text-[10px] tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-2.5 py-0.5 rounded-full mb-2 inline-block">
                  OUR RECENT MOBILE APP PROJECTS
                </span>
                <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                  Featured Mobile Successes
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
                      {p.phoneImg}
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
                Ready to Build Your Next Mobile App?
              </h2>

              <p className="text-xs md:text-sm text-white/70 max-w-lg mb-8 leading-relaxed">
                Let&apos;s turn your idea into a powerful mobile solution that drives growth and success.
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

// Simple placeholder ZapIcon inside file
function ZapIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
