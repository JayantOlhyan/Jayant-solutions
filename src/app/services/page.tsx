"use client";

import React from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Code, Globe, Smartphone, Zap, Cloud, Palette, Link2, Check, Lock, LineChart, MessageSquare, Layers, Rocket, Compass } from "lucide-react";
import Process from "@/components/Process";
import NetworkDiagram from "@/components/NetworkDiagram";

export default function ServicesPage() {
  const serviceStats = [
    { label: "AI-Powered Solutions", icon: <Brain className="size-4 text-primary" /> },
    { label: "Scalable & Secure", icon: <Lock className="size-4 text-primary" /> },
    { label: "Results-Driven", icon: <LineChart className="size-4 text-primary" /> },
    { label: "Reliable Support", icon: <MessageSquare className="size-4 text-primary" /> },
  ];

  const fullServices = [
    {
      title: "AI Development",
      description: "Custom AI solutions, LLM integrations, agentic workflows, and intelligent automations that drive real business value.",
      icon: <Brain className="size-6 text-primary" />,
      href: "/services/ai-development",
    },
    {
      title: "Custom Software Development",
      description: "Scalable, secure, and high-performance software tailored to your unique business requirements.",
      icon: <Code className="size-6 text-primary" />,
      href: "/services/custom-software-development",
    },
    {
      title: "Website Development",
      description: "Modern, responsive, and SEO-friendly websites that convert visitors into customers and strengthen your brand.",
      icon: <Globe className="size-6 text-primary" />,
      href: "/services/website-development",
    },
    {
      title: "Mobile App Development",
      description: "Cross-platform mobile apps for iOS and Android that deliver seamless and engaging user experiences.",
      icon: <Smartphone className="size-6 text-primary" />,
      href: "/services/mobile-app-development",
    },
    {
      title: "Business Automation",
      description: "Automate workflows, integrate tools, and eliminate repetitive tasks to save time and increase productivity.",
      icon: <Zap className="size-6 text-primary" />,
      href: "/services/business-automation",
    },
    {
      title: "Cloud & DevOps",
      description: "Cloud infrastructure, CI/CD pipelines, monitoring, and scalable deployments done right.",
      icon: <Cloud className="size-6 text-primary" />,
      href: "/services/cloud-and-devops",
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, intuitive, and user-centered designs that create meaningful experiences and drive engagement.",
      icon: <Palette className="size-6 text-primary" />,
      href: "/services/ui-ux-design",
    },
    {
      title: "API Development & Integration",
      description: "Robust APIs and third-party integrations that connect your systems and unlock new possibilities.",
      icon: <Link2 className="size-6 text-primary" />,
      href: "/services/api-development",
    },
    {
      title: "AI Chatbot Development",
      description: "Intelligent customer service agents and sales qualification bots running 24/7 on Web, WhatsApp, and Slack.",
      icon: <MessageSquare className="size-6 text-primary" />,
      href: "/services/ai-chatbot-development",
    },
    {
      title: "SaaS Development",
      description: "End-to-end multi-tenant subscription software engineering with Stripe billing and database partitioning.",
      icon: <Layers className="size-6 text-primary" />,
      href: "/services/saas-development",
    },
    {
      title: "MVP Development",
      description: "Rapid visual and functional prototyping to validate business models and attract initial investors.",
      icon: <Rocket className="size-6 text-primary" />,
      href: "/services/mvp-development",
    },
    {
      title: "Technology Consulting",
      description: "Technical assessments, software architecture blueprints, cost audits, and roadmap planning consultations.",
      icon: <Compass className="size-6 text-primary" />,
      href: "/services/technology-consulting",
    },
  ];

  return (
    <PageTransition>
      <div className="hog-grid min-h-screen pb-20 pt-10 text-left">
        <main className="max-w-none px-6 md:px-12 lg:px-16 flex flex-col gap-20 md:gap-28">
          
          {/* Services Hero split */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-8">
            
            {/* Left Column: Copy */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1 rounded-full mb-4 inline-block">
                OUR SERVICES
              </span>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-base leading-[1.08] mb-6">
                Powerful Digital Solutions Built to{" "}
                <span className="text-primary underline decoration-primary/40 decoration-4 underline-offset-8">
                  Scale Your Business
                </span>
              </h1>
              <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl mb-8">
                I combine innovation, technology, and strategy to deliver custom solutions that help startups, businesses, and enterprises automate, grow, and lead in the digital era.
              </p>

              {/* CTAs */}
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
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-border-custom bg-white hover:bg-neutral-50 dark:bg-card-bg dark:hover:bg-neutral-900 px-7 py-3 text-xs font-mono font-bold text-text-base transition-all"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>

              {/* Mini Stats strip */}
              <div className="flex flex-wrap gap-4 md:gap-6 border-t border-border-custom/50 pt-6 w-full">
                {serviceStats.map((stat, i) => (
                  <div key={i} className="flex items-center gap-2">
                    {stat.icon}
                    <span className="text-[10px] md:text-xs font-mono font-bold text-text-base">{stat.label}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Column: Isometric Schematic */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <NetworkDiagram />
            </div>

          </section>

          {/* Full Services Grid */}
          <section className="py-8 relative">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1 rounded-full mb-4 inline-block">
                SERVICES
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mb-4 mt-2">
                Scope & Services
              </h2>
              <p className="text-sm md:text-base text-text-muted">
                High-performance AI automations, custom software systems, and bespoke web platforms built for business outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {fullServices.map((service, idx) => (
                <div
                  key={idx}
                  className="hog-card rounded-2xl p-6 bg-card-bg/60 backdrop-blur-sm flex flex-col justify-between border border-border-custom hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex flex-col gap-4">
                    <div className="size-11 rounded-full border border-border-custom bg-card-bg flex items-center justify-center shadow-sm">
                      {service.icon}
                    </div>
                    <h3 className="font-serif text-sm md:text-base font-bold text-text-base leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-[10px] md:text-xs text-text-muted leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-primary hover:underline mt-6"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border-custom bg-white hover:bg-neutral-50 dark:bg-card-bg dark:hover:bg-neutral-900 text-xs font-mono font-bold text-text-base transition-colors"
              >
                <span>Explore All Services</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </section>

          {/* Stepper Process horizontal */}
          <Process />

          {/* Quick Response bottom CTA layout */}
          <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0B0F19] p-8 md:p-12 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: CTA */}
              <div className="lg:col-span-6 flex flex-col items-start text-left">
                <span className="font-mono text-[9px] uppercase tracking-wider text-primary border border-primary/20 bg-primary/10 px-2 py-0.5 rounded-full mb-3">
                  LET&apos;S WORK TOGETHER
                </span>
                <h3 className="font-serif text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  Ready to Build Something Amazing Together?
                </h3>
                <p className="text-xs md:text-sm text-white/70 mb-6 leading-relaxed">
                  Tell me about your project and let&apos;s turn your ideas into powerful digital solutions.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
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
                    href="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 hover:bg-white/5 px-6 py-2.5 text-xs font-mono font-bold text-white transition-all duration-200"
                  >
                    <span>Contact Us</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Key Promises */}
              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                  <Check className="size-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-serif text-xs font-bold text-white">Quick Response</h5>
                    <p className="text-[10px] text-white/60 mt-0.5">I respond within 24 hours to all inquiries.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                  <Check className="size-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-serif text-xs font-bold text-white">Tailored Solutions</h5>
                    <p className="text-[10px] text-white/60 mt-0.5">Every solution is customized for your business.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                  <Check className="size-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-serif text-xs font-bold text-white">On-Time Delivery</h5>
                    <p className="text-[10px] text-white/60 mt-0.5">I value time and deliver projects on schedule.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                  <Check className="size-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-serif text-xs font-bold text-white">Long-Term Partnership</h5>
                    <p className="text-[10px] text-white/60 mt-0.5">I grow with you and support your journey.</p>
                  </div>
                </div>
              </div>

            </div>
          </section>

        </main>
      </div>
    </PageTransition>
  );
}
