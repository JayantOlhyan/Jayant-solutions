"use client";

import React from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export default function PythonDevelopmentPage() {
  const indicators = [
    { label: "Clean & Readable Code" },
    { label: "Scalable & Maintainable" },
    { label: "Rapid Development" },
    { label: "Open Source & Cost Effective" },
  ];

  const clientLogos = [
    "ARHAM ESTATE", "STACKCODE TRAINING", "Healthkinator", "FlowForge", "MONEY PULSE", "SMART SURVEILLANCE", "JanGanana DIGITAL"
  ];

  const whyChoose = [
    {
      title: "Easy & Readable",
      desc: "Simple syntax that improves productivity and reduces development time.",
      icon: "🚀"
    },
    {
      title: "Versatile",
      desc: "Perfect for web, AI/ML, data, automation, testing, and more.",
      icon: "🧩"
    },
    {
      title: "Scalable",
      desc: "Build applications that scale from MVPs to enterprise-grade systems.",
      icon: "⚙️"
    },
    {
      title: "Secure",
      desc: "Built-in security features and a strong ecosystem to build secure applications.",
      icon: "🛡️"
    },
    {
      title: "Huge Community",
      desc: "Big community support, rich libraries, and regular updates.",
      icon: "👥"
    },
    {
      title: "Cost Effective",
      desc: "Open source and cost-efficient development for startups and enterprises.",
      icon: "💰"
    }
  ];

  const services = [
    {
      title: "Web Application Development",
      desc: "Custom web apps using Django, Flask, FastAPI, and more.",
      icon: "🌐"
    },
    {
      title: "API Development & Integration",
      desc: "RESTful APIs, third-party integrations, and microservices.",
      icon: "🔌"
    },
    {
      title: "Data Engineering & Analytics",
      desc: "Data pipelines, ETL processes, and business intelligence solutions.",
      icon: "📊"
    },
    {
      title: "AI/ML Development",
      desc: "Machine learning models, NLP, computer vision, and AI-powered solutions.",
      icon: "🧠"
    },
    {
      title: "Automation & Scripting",
      desc: "Process automation, bots, and custom Python scripts.",
      icon: "⚙️"
    },
    {
      title: "Maintenance & Support",
      desc: "Ongoing support, optimizations, and performance tuning.",
      icon: "🛠️"
    }
  ];

  const techWeUse = [
    "Django", "FastAPI", "Flask", "Pandas", "NumPy", "TensorFlow", "PyTorch", "PostgreSQL", "MySQL", "AWS"
  ];

  const pillars = [
    "Expert Python Developers",
    "On-Time Delivery",
    "Scalable Architecture",
    "Clean & Maintainable Code",
    "Dedicated Support"
  ];

  return (
    <PageTransition>
      <div className="hog-grid min-h-screen pb-20 pt-10 text-left">
        <main className="max-w-none px-6 md:px-12 lg:px-16 flex flex-col gap-20 md:gap-28">
          
          {/* Breadcrumbs */}
          <nav className="text-xs font-mono text-text-muted flex items-center gap-2 pt-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>&gt;</span>
            <span className="text-text-muted">Technologies</span>
            <span>&gt;</span>
            <span className="text-text-base">Python Development</span>
          </nav>

          {/* Hero */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <span className="font-mono text-[9px] uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 px-2.5 py-0.5 rounded-full mb-4">
                PYTHON DEVELOPMENT
              </span>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-base leading-[1.08] mb-6">
                Python Development <br />
                <span className="text-primary underline decoration-primary/40 decoration-4 underline-offset-8">
                  Powerful Solutions. Built with Python.
                </span>
              </h1>
              <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl mb-8">
                We build fast, secure, and scalable applications using Python – a versatile language trusted by startups, enterprises, and innovators worldwide.
              </p>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
                <Link
                  href="/contact/book-a-consultation"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-hover text-white px-7 py-3 text-xs font-mono font-bold transition-all shadow-md active:scale-[0.98]"
                >
                  <span>Book a Consultation</span>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-border-custom/50 pt-6 w-full">
                {indicators.map((ind, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="size-4 text-primary shrink-0" />
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
                    <span>Web Development</span><span className="text-primary font-bold">Django / FastAPI</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span>Machine Learning & AI</span><span className="text-primary font-bold">TensorFlow / PyTorch</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span>Data Science & Analytics</span><span className="text-primary">Pandas / NumPy</span>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/5 p-3 rounded-xl flex justify-between items-center text-[10px] mt-4">
                  <div className="flex flex-col text-left">
                    <span className="text-white/40 uppercase tracking-widest font-mono">Performance Metrics</span>
                    <span className="font-bold font-serif text-white mt-1">Status: High Performance</span>
                  </div>
                  <span className="text-lg">🐍</span>
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

          {/* Why Choose Python */}
          <section className="py-8 border-t border-border-custom/25 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                Why Choose Python for Your Project?
              </h2>
              <p className="text-xs md:text-sm text-text-muted leading-relaxed mt-4">
                Python is a powerful, flexible, and developer-friendly language for modern applications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {whyChoose.map((item, idx) => (
                <div
                  key={idx}
                  className="hog-card rounded-2xl p-5 border border-border-custom bg-card-bg/40 flex flex-col gap-3 text-left"
                >
                  <div className="size-9 rounded-full border border-border-custom bg-card-bg flex items-center justify-center text-xl shadow-sm shrink-0">
                    {item.icon}
                  </div>
                  <h5 className="font-serif text-xs md:text-sm font-bold text-text-base leading-snug">{item.title}</h5>
                  <p className="text-[10px] md:text-xs text-text-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Services */}
          <section className="py-8 border-t border-border-custom/25 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                Our Python Development Services
              </h2>
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

          {/* Technologies We Use with Python */}
          <section className="py-8 border-t border-border-custom/25 pt-16 text-center">
            <h3 className="font-serif text-2xl font-bold text-text-base mb-8">Technologies We Use with Python</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {techWeUse.map((tech) => (
                <span
                  key={tech}
                  className="bg-card-bg border border-border-custom/50 px-4 py-2 rounded-xl text-xs font-mono text-text-base shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Bottom CTA Block */}
          <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0B0F19] p-8 md:p-12 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center text-left">
              
              {/* Left */}
              <div className="lg:col-span-7 flex flex-col items-start">
                <h3 className="font-serif text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  Let&apos;s Build Something <br />
                  <span className="text-primary">Amazing with Python</span>
                </h3>
                <p className="text-xs md:text-sm text-white/70 mb-6 leading-relaxed max-w-lg">
                  From idea to deployment, we build robust, scalable, and high-performance solutions that drive real results.
                </p>
                
                <div className="flex flex-wrap gap-4 text-white/80">
                  <Link
                    href="/contact/book-a-consultation"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-hover px-6 py-2.5 text-xs font-mono font-bold text-white shadow-md transition-all duration-200"
                  >
                    <span>Book a Free Consultation</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 hover:bg-white/5 px-6 py-2.5 text-xs font-mono font-bold text-white transition-all duration-200"
                  >
                    <span>View Our Work</span>
                  </Link>
                </div>
              </div>

              {/* Right list */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-white text-[10px] font-mono">
                {pillars.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <Check className="size-3.5 text-primary shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

            </div>
          </section>

        </main>
      </div>
    </PageTransition>
  );
}
