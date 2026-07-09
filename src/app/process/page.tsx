"use client";

import React from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Eye, ClipboardList, Code, CheckSquare, Rocket, HelpCircle, Compass, Layout, Users, Target, ShieldAlert, Award, ShieldCheck, Check } from "lucide-react";
import CallToAction from "@/components/CallToAction";

export default function ProcessPage() {
  const steps = [
    {
      id: "01",
      name: "Discovery",
      desc: "We understand your business, goals, challenges, and requirements in detail.",
      icon: <Compass className="size-5 text-primary" />,
    },
    {
      id: "02",
      name: "Planning",
      desc: "We create a strategic roadmap, timeline, and define the right approach.",
      icon: <ClipboardList className="size-5 text-primary" />,
    },
    {
      id: "03",
      name: "Design & Prototype",
      desc: "We design intuitive interfaces and prototypes to visualize the solution.",
      icon: <Layout className="size-5 text-primary" />,
    },
    {
      id: "04",
      name: "Development",
      desc: "We build scalable, secure, and high-performance solutions using best practices.",
      icon: <Code className="size-5 text-primary" />,
    },
    {
      id: "05",
      name: "Testing & QA",
      desc: "We thoroughly test for quality, performance, and security to ensure excellence.",
      icon: <CheckSquare className="size-5 text-primary" />,
    },
    {
      id: "06",
      name: "Deployment & Support",
      desc: "We deploy seamlessly and provide ongoing support to ensure long-term success.",
      icon: <Rocket className="size-5 text-primary" />,
    },
  ];

  const methodologyCheckmarks = [
    "Agile & Iterative Development",
    "Continuous Communication",
    "Rapid Adaptation",
    "Focus on Quality & Security",
    "Customer-Centric Approach",
  ];

  const valueProps = [
    { title: "Regular Updates", desc: "Stay informed with consistent progress updates." },
    { title: "Collaborative", desc: "Work closely with me throughout the project." },
    { title: "Clear Documentation", desc: "Well-documented processes and deliverables." },
    { title: "Measurable Results", desc: "Solutions designed to deliver real business outcomes." },
    { title: "Ongoing Support", desc: "I am with you even after deployment for continuous growth." },
  ];

  // Specific Process Schema nodes
  const schemaNodes = [
    { title: "Goal-Oriented", icon: <Target className="size-5 text-primary" />, x: -120, y: -90 },
    { title: "Collaborative", icon: <Users className="size-5 text-primary" />, x: 120, y: -90 },
    { title: "Transparent", icon: <Eye className="size-5 text-primary" />, x: -120, y: 90 },
    { title: "Results-Driven", icon: <Award className="size-5 text-primary" />, x: 120, y: 90 },
  ];

  return (
    <PageTransition>
      <div className="hog-grid min-h-screen pb-20 pt-10 text-left">
        <main className="max-w-none px-6 md:px-12 lg:px-16 flex flex-col gap-20 md:gap-28">
          
          {/* Process Hero split */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-8">
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1 rounded-full mb-4 inline-block">
                OUR PROCESS
              </span>
              <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-text-base leading-[1.08] mb-6">
                A Clear Process.{" "}
                <span className="text-primary block sm:inline">Predictable Results.</span>
              </h1>
              <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl mb-8">
                We follow a transparent, collaborative, and proven process to deliver high-quality digital solutions that drive real impact for your business.
              </p>

              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-hover text-white px-7 py-3 text-xs font-mono font-bold transition-all shadow-md"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/portfolio"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-border-custom bg-white hover:bg-neutral-50 dark:bg-card-bg dark:hover:bg-neutral-900 px-7 py-3 text-xs font-mono font-bold text-text-base transition-all"
                >
                  <span>View Our Work</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            {/* Right Process Schema */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center p-8 select-none">
                
                {/* SVG Connectors */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
                  <path d="M 200 200 L 100 110" stroke="var(--color-primary)" strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="4,4" />
                  <path d="M 200 200 L 300 110" stroke="var(--color-primary)" strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="4,4" />
                  <path d="M 200 200 L 100 290" stroke="var(--color-primary)" strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="4,4" />
                  <path d="M 200 200 L 300 290" stroke="var(--color-primary)" strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="4,4" />
                </svg>

                {/* Central Monogram Cube */}
                <div className="relative z-10 size-24 rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center shadow-lg">
                  <span className="font-sans text-xl font-black text-primary">J</span>
                </div>

                {/* Outer nodes */}
                {schemaNodes.map((node, i) => (
                  <div
                    key={i}
                    className="absolute z-20"
                    style={{ transform: `translate(${node.x}px, ${node.y}px)` }}
                  >
                    <div className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-white dark:bg-[#111827] border border-border-custom shadow-sm min-w-[110px] text-center">
                      <div className="size-9 rounded-full border border-border-custom bg-card-bg flex items-center justify-center">
                        {node.icon}
                      </div>
                      <span className="text-[10px] font-serif font-bold text-text-base">{node.title}</span>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </section>

          {/* From Idea to Impact */}
          <section className="py-8 relative">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1 rounded-full mb-4 inline-block">
                OUR 6-STEP PROCESS
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mb-4 mt-2">
                From Idea to Impact
              </h2>
              <p className="text-sm md:text-base text-text-muted">
                We turn your ideas into scalable digital solutions through a structured and efficient process.
              </p>
            </div>

            {/* Stepper horizontal line */}
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

          {/* Methodology Split Section */}
          <section className="py-8 relative border-t border-border-custom/50 pt-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Methodology */}
              <div className="lg:col-span-5 flex flex-col items-start text-left">
                <span className="font-mono text-[9px] uppercase tracking-wider text-primary border border-primary/20 bg-primary/10 px-2.5 py-0.5 rounded-full mb-3">
                  OUR METHODOLOGY
                </span>
                <h3 className="font-serif text-2xl md:text-4xl font-bold text-text-base mb-4 leading-tight">
                  Agile. Adaptable. <br className="hidden md:block" /> Always Ahead.
                </h3>
                <p className="text-xs md:text-sm text-text-muted leading-relaxed mb-6">
                  We follow agile methodologies and modern development practices to deliver solutions that are flexible, efficient, and future-ready.
                </p>

                <div className="space-y-3">
                  {methodologyCheckmarks.map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-xs text-text-muted">
                      <Check className="size-4 text-primary shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Cards */}
              <div className="lg:col-span-7 flex flex-col gap-4 w-full">
                <h4 className="font-serif text-base font-bold text-text-base text-center md:text-left mb-2">What You Get At Every Step</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {valueProps.map((prop) => (
                    <div key={prop.title} className="hog-card rounded-2xl p-5 border border-border-custom bg-card-bg/40 flex flex-col justify-between min-h-[110px]">
                      <h5 className="font-serif text-xs md:text-sm font-bold text-text-base mb-1">{prop.title}</h5>
                      <p className="text-[10px] md:text-xs text-text-muted leading-relaxed mt-2">{prop.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>

          {/* Bottom CTA */}
          <CallToAction />

        </main>
      </div>
    </PageTransition>
  );
}
