"use client";

import React from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { ArrowRight, Code, Layers, ShieldCheck, Heart, Clock, Compass, ClipboardList, Layout, CheckSquare, Rocket, MessageSquare, Lock, Settings, Cpu, Search, HelpCircle, ShieldAlert } from "lucide-react";

export default function TechnologyConsultingPage() {
  const serviceStats = [
    { label: "Strategic Guidance", icon: <Compass className="size-4 text-primary" />, desc: "Make the right tech moves" },
    { label: "Business Focused", icon: <Layers className="size-4 text-primary" />, desc: "Align tech with business goals" },
    { label: "Risk Mitigation", icon: <Lock className="size-4 text-primary" />, desc: "Reduce technical & business risks" },
    { label: "Future Ready", icon: <Rocket className="size-4 text-primary" />, desc: "Build for scalable growth" },
  ];

  const offers = [
    {
      title: "Technology Strategy",
      description: "We define the right technology strategy aligned with your business objectives.",
      icon: <Compass className="size-6 text-primary" />,
    },
    {
      title: "Solution Architecture",
      description: "We design scalable, secure, and cost-efficient architectures for future growth.",
      icon: <Layout className="size-6 text-primary" />,
    },
    {
      title: "Cloud Consulting",
      description: "Migrate, modernize, and optimize your cloud infrastructure for better agility and performance.",
      icon: <Layers className="size-6 text-primary" />,
    },
    {
      title: "Security Consulting",
      description: "Strengthen your systems with industry best practices and robust security frameworks.",
      icon: <Lock className="size-6 text-primary" />,
    },
    {
      title: "Digital Transformation",
      description: "We help modernize processes, adopt new technologies, and drive business transformation.",
      icon: <Rocket className="size-6 text-primary" />,
    },
    {
      title: "Technology Assessment",
      description: "Evaluate your current stack, identify gaps, and uncover opportunities for improvement.",
      icon: <Search className="size-6 text-primary" />,
    },
    {
      title: "Cost Optimization",
      description: "Reduce costs and increase ROI with smart infrastructure and technology decisions.",
      icon: <Settings className="size-6 text-primary" />,
    },
    {
      title: "Vendor & Tech Selection",
      description: "We help you choose the right technologies and vendors that fit your unique needs.",
      icon: <HelpCircle className="size-6 text-primary" />,
    },
  ];

  const steps = [
    { id: "01", name: "Discover", desc: "We understand your business, challenges, and goals.", icon: <Compass className="size-5 text-primary" /> },
    { id: "02", name: "Assess", desc: "We evaluate your current tech stack, processes, and infrastructure.", icon: <ClipboardList className="size-5 text-primary" /> },
    { id: "03", name: "Recommend", desc: "We create a tailored strategy and solution roadmap.", icon: <Layout className="size-5 text-primary" /> },
    { id: "04", name: "Plan", desc: "We define the execution plan, resources, and success metrics.", icon: <Code className="size-5 text-primary" /> },
    { id: "05", name: "Implement", desc: "We support execution and ensure smooth technology adoption.", icon: <Rocket className="size-5 text-primary" /> },
    { id: "06", name: "Optimize", desc: "We continuously optimize for better performance and growth.", icon: <Settings className="size-5 text-primary" /> },
  ];

  const whyChoose = [
    { title: "Business First Approach", desc: "We focus on outcomes that matter.", icon: <Layers className="size-5 text-primary" /> },
    { title: "Deep Technical Expertise", desc: "Years of experience across modern technologies.", icon: <Cpu className="size-5 text-primary" /> },
    { title: "Actionable Insights", desc: "Clear recommendations you can implement.", icon: <Search className="size-5 text-primary" /> },
    { title: "Future Ready Solutions", desc: "Build a strong foundation for tomorrow.", icon: <Rocket className="size-5 text-primary" /> },
    { title: "Ongoing Partnership", desc: "We're with you at every step of your journey.", icon: <Heart className="size-5 text-primary" /> },
  ];

  const techStack = [
    { name: "AWS", logo: "☁️" },
    { name: "Microsoft Azure", logo: "☁️" },
    { name: "Google Cloud", logo: "☁️" },
    { name: "Terraform", logo: "📜" },
    { name: "Kubernetes", logo: "☸️" },
    { name: "Docker", logo: "🐳" },
    { name: "Node.js", logo: "🟢" },
    { name: "React", logo: "⚛️" },
    { name: "MongoDB", logo: "🍃" },
  ];

  const recentProjects = [
    { id: "fintech-modernization", title: "FinTech Platform Modernization", tag: "FinTech", desc: "Tech strategy and architecture redesign for a FinTech platform with focus on scalability and performance.", icon: "💳" },
    { id: "cloud-migration", title: "E-commerce Cloud Migration", tag: "Cloud Migration", desc: "Migrated legacy infrastructure to AWS, improving reliability and reducing costs.", icon: "🛒" },
    { id: "saas-scalability", title: "SaaS Product Scalability", tag: "SaaS", desc: "Architecture consulting for scaling a SaaS product to 100K+ active users.", icon: "📊" },
    { id: "security-review", title: "Security & Compliance Review", tag: "Security", desc: "Security assessment and roadmap to achieve enterprise-grade compliance.", icon: "🩺" },
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
            <span className="text-text-base">Technology Consulting</span>
          </nav>

          {/* Hero split */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="font-mono text-[9px] uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 px-2.5 py-0.5 rounded-full mb-4">
                TECHNOLOGY CONSULTING
              </span>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-base leading-[1.08] mb-6">
                Smart Technology Decisions.{" "}
                <span className="text-primary underline decoration-primary/40 decoration-4 underline-offset-8">
                  Stronger Business Outcomes.
                </span>
              </h1>
              <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl mb-8">
                We help businesses leverage the right technologies, architect scalable solutions, and build a roadmap for long-term success.
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

            {/* Right: Consulting diagram */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center p-8 select-none">
                <div className="w-full h-[85%] rounded-2xl bg-[#0B0F19] border-2 border-white/10 shadow-2xl p-6 flex flex-col gap-4 text-left">
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest border-b border-white/5 pb-2">Technology Assessment</span>
                  <div className="flex items-center justify-between text-white">
                    <span className="text-xs font-bold font-mono">Overall Score</span>
                    <span className="text-primary font-serif font-black text-xl">85%</span>
                  </div>
                  <div className="flex-1 bg-white/5 border border-white/5 rounded-xl p-3 flex flex-col justify-center gap-1.5 text-white/60 text-[10px] font-mono">
                    <div className="flex justify-between"><span>Architecture</span><span>90%</span></div>
                    <div className="flex justify-between"><span>Scalability</span><span>80%</span></div>
                    <div className="flex justify-between"><span>Security</span><span>85%</span></div>
                    <div className="flex justify-between"><span>Performance</span><span>82%</span></div>
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
                Our Technology Consulting Services
              </h2>
              <p className="text-sm md:text-base text-text-muted mt-2">
                Expert guidance, practical solutions, and measurable impact.
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
                OUR CONSULTING PROCESS
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                A Clear Process for Smarter Decisions
              </h2>
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
                Consulting That Drives Real Business Impact
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

          {/* Technologies we work with */}
          <section className="py-8 relative border-t border-border-custom/30 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1 rounded-full mb-4 inline-block">
                TECHNOLOGIES WE WORK WITH
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                Expertise Across Modern Stacks
              </h2>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-9 gap-4">
              {techStack.map((tech) => (
                <div key={tech.name} className="hog-card rounded-2xl p-4 border border-border-custom bg-card-bg/40 text-center flex flex-col gap-2 items-center justify-center">
                  <span className="text-2xl leading-none">{tech.logo}</span>
                  <span className="font-serif text-[10px] font-bold text-text-base leading-none">{tech.name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Recent consulting engagements */}
          <section className="py-8 relative border-t border-border-custom/30 pt-16">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
              <div className="text-left">
                <span className="font-mono text-[10px] tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-2.5 py-0.5 rounded-full mb-2 inline-block">
                  RECENT CONSULTING ENGAGEMENTS
                </span>
                <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                  Featured Case Studies
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
                Let&apos;s Build the Right Technology Future.
              </h2>

              <p className="text-xs md:text-sm text-white/70 max-w-lg mb-8 leading-relaxed">
                Get expert guidance and a clear roadmap to accelerate your business growth. Book a free consultation today!
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
