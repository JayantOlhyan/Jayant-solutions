"use client";

import React from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { ArrowRight, Brain, Code, Layers, ShieldCheck, Heart, Clock, Compass, ClipboardList, Layout, CheckSquare, Rocket, MessageSquare, Lock, Settings, Search, MessageCircle } from "lucide-react";

export default function AIChatbotDevelopmentPage() {
  const serviceStats = [
    { label: "AI-Powered", icon: <Brain className="size-4 text-primary" />, desc: "Conversational intelligence" },
    { label: "24/7 Automated", icon: <Clock className="size-4 text-primary" />, desc: "Round-the-clock support" },
    { label: "Customer Satisfaction", icon: <Heart className="size-4 text-primary" />, desc: "Higher engagement & happiness" },
    { label: "Reduce Costs", icon: <Layers className="size-4 text-primary" />, desc: "Increase operational efficiency" },
  ];

  const offers = [
    {
      title: "Custom AI Chatbots",
      description: "Tailored AI chatbots designed for your business goals and customer needs.",
      icon: <MessageSquare className="size-6 text-primary" />,
    },
    {
      title: "LLM-Powered Solutions",
      description: "We use advanced LLMs like GPT-4, Claude, Llama & more to build smart conversations.",
      icon: <Brain className="size-6 text-primary" />,
    },
    {
      title: "Multi-Platform Integration",
      description: "Integrate chatbots across websites, apps, social media and messaging platforms.",
      icon: <Layers className="size-6 text-primary" />,
    },
    {
      title: "Knowledge Base Integration",
      description: "Connect your documents, FAQs and databases to deliver accurate and relevant answers.",
      icon: <Search className="size-6 text-primary" />,
    },
    {
      title: "Conversational AI & NLP",
      description: "Natural Language Processing to understand intent, context and user behavior.",
      icon: <Code className="size-6 text-primary" />,
    },
    {
      title: "Workflow Automation",
      description: "Automate tasks, capture leads, book appointments and trigger business workflows.",
      icon: <Settings className="size-6 text-primary" />,
    },
    {
      title: "Security & Compliance",
      description: "Enterprise-grade security with data privacy, role-based access and compliance standards.",
      icon: <Lock className="size-6 text-primary" />,
    },
    {
      title: "Ongoing Support & Training",
      description: "We provide ongoing maintenance, performance tuning and training for your team.",
      icon: <Rocket className="size-6 text-primary" />,
    },
  ];

  const steps = [
    { id: "01", name: "Discover", desc: "We understand your business, goals, users and data sources.", icon: <Compass className="size-5 text-primary" /> },
    { id: "02", name: "Design", desc: "We design conversation flows and user experience.", icon: <ClipboardList className="size-5 text-primary" /> },
    { id: "03", name: "Develop", desc: "We build and train the chatbot using advanced AI technologies.", icon: <Code className="size-5 text-primary" /> },
    { id: "04", name: "Integrate", desc: "We integrate the bot with your platforms and tools.", icon: <Layers className="size-5 text-primary" /> },
    { id: "05", name: "Test", desc: "We test for accuracy, performance and edge cases.", icon: <CheckSquare className="size-5 text-primary" /> },
    { id: "06", name: "Deploy & Optimize", desc: "We deploy, monitor and continuously optimize for better results.", icon: <Rocket className="size-5 text-primary" /> },
  ];

  const whyChoose = [
    { title: "Human-like Conversations", desc: "Advanced NLP designed to sound natural and helpful.", icon: <MessageSquare className="size-5 text-primary" /> },
    { title: "Trained on Your Data", desc: "The chatbot learns directly from your docs & guides.", icon: <Search className="size-5 text-primary" /> },
    { title: "Reduce Response Time", desc: "Instantly answer customer inquiries 24/7.", icon: <Clock className="size-5 text-primary" /> },
    { title: "Increase Leads", desc: "Automate lead capture and sales qualifications.", icon: <Settings className="size-5 text-primary" /> },
    { title: "Scalable & Future-Ready", desc: "Scales seamlessly as your business grows.", icon: <Layers className="size-5 text-primary" /> },
    { title: "Analytics & Insights", desc: "Detailed logs and data tracking to optimize performance.", icon: <Brain className="size-5 text-primary" /> },
  ];

  const industries = [
    { name: "E-commerce", icon: "🛒" },
    { name: "Healthcare", icon: "❤️" },
    { name: "Education", icon: "🎓" },
    { name: "Real Estate", icon: "🏢" },
    { name: "Finance", icon: "🏦" },
    { name: "SaaS", icon: "💻" },
    { name: "Travel & Hospitality", icon: "🏨" },
    { name: "Logistics", icon: "📦" },
    { name: "Retail", icon: "🛍️" },
    { name: "Startups", icon: "⚡" },
  ];

  const recentProjects = [
    { id: "shopease-ai", title: "ShopEase AI Assistant", tag: "E-commerce", desc: "AI chatbot for product search, order tracking and customer support.", icon: "🛍️" },
    { id: "medicare-bot", title: "MediCare Chatbot", tag: "Healthcare", desc: "Patient support chatbot for appointment booking and FAQs.", icon: "🩺" },
    { id: "urbannest-assistant", title: "UrbanNest Assistant", tag: "Real Estate", desc: "AI assistant for property recommendations and lead qualification.", icon: "🏠" },
    { id: "taskflow-bot", title: "TaskFlow Bot", tag: "SaaS", desc: "AI chatbot for onboarding, documentation and user support.", icon: "🤖" },
  ];

  const schemaNodes = [
    { title: "Website", icon: <Layout className="size-4 text-primary" />, x: -140, y: -90 },
    { title: "Slack", icon: <MessageSquare className="size-4 text-primary" />, x: 140, y: -90 },
    { title: "WhatsApp", icon: <MessageCircle className="size-4 text-primary" />, x: -140, y: 0 },
    { title: "Telegram", icon: <MessageCircle className="size-4 text-primary" />, x: 140, y: 0 },
    { title: "Messenger", icon: <MessageCircle className="size-4 text-primary" />, x: -140, y: 90 },
    { title: "CRM", icon: <Layers className="size-4 text-primary" />, x: 140, y: 90 },
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
            <span className="text-text-base">AI Chatbot Development</span>
          </nav>

          {/* Hero split */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="font-mono text-[9px] uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 px-2.5 py-0.5 rounded-full mb-4">
                AI CHATBOT DEVELOPMENT
              </span>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-base leading-[1.08] mb-6">
                Intelligent Conversations.{" "}
                <span className="text-primary underline decoration-primary/40 decoration-4 underline-offset-8">
                  Smarter Businesses.
                </span>
              </h1>
              <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl mb-8">
                We build AI-powered chatbots that understand, engage, and deliver real value 24/7.
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

            {/* Right: Chat bot interface */}
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
                  <span className="font-mono text-sm text-primary font-bold">🤖</span>
                  <span className="text-[10px] font-mono text-white mt-1 uppercase tracking-widest leading-none">Chatbot</span>
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
                AI Chatbot Development Services
              </h2>
              <p className="text-sm md:text-base text-text-muted mt-2">
                Custom AI chatbots built to engage users, automate conversations, and grow your business.
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
                A Smart Process for Smarter Conversations
              </h2>
              <p className="text-sm md:text-base text-text-muted mt-2">
                From strategy to deployment, we follow a proven process to build chatbots that deliver measurable results.
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
                Chatbots That Deliver Real Business Impact
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

          {/* Industries served */}
          <section className="py-8 relative border-t border-border-custom/30 pt-16">
            <div className="text-left mb-12">
              <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1 rounded-full mb-4 inline-block">
                INDUSTRIES WE SERVE
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                Conversational Solutions for Every Industry
              </h2>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-10 gap-4">
              {industries.map((ind) => (
                <div key={ind.name} className="hog-card rounded-2xl p-4 border border-border-custom bg-card-bg/40 text-center flex flex-col gap-2 justify-center items-center">
                  <span className="text-2xl leading-none">{ind.icon}</span>
                  <span className="font-serif text-[10px] font-bold text-text-base leading-none">{ind.name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Recent projects */}
          <section className="py-8 relative border-t border-border-custom/30 pt-16">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
              <div className="text-left">
                <span className="font-mono text-[10px] tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-2.5 py-0.5 rounded-full mb-2 inline-block">
                  RECENT CHATBOT PROJECTS
                </span>
                <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                  Featured AI Conversations
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
                Ready to Build a Smarter AI Chatbot?
              </h2>

              <p className="text-xs md:text-sm text-white/70 max-w-lg mb-8 leading-relaxed">
                Let&apos;s create intelligent conversations that delight your users and drive real results for your business.
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
