"use client";

import React from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { ArrowRight, Compass, ClipboardList, Layout, Code, CheckSquare, Rocket, Heart, Settings, Lock, MessageSquare, ShieldCheck, Target } from "lucide-react";

export default function WhyChooseUsPage() {
  const reasons = [
    { title: "Business-First Approach", desc: "We understand your business goals first and then craft solutions that deliver real value.", icon: <Target className="size-5 text-primary" /> },
    { title: "Modern & Scalable Solutions", desc: "We use the latest technologies and best practices to build secure, scalable, and future-ready products.", icon: <LayersIcon className="size-5 text-primary" /> },
    { title: "Innovation at Core", desc: "From AI to automation, we bring innovation to solve complex problems in simple ways.", icon: <Compass className="size-5 text-primary" /> },
    { title: "Experienced & Passionate Team", desc: "A team of skilled developers, designers, and problem solvers dedicated to your success.", icon: <UsersIcon className="size-5 text-primary" /> },
    { title: "Quality & Reliability", desc: "We follow a rigorous quality process to ensure reliable, bug-free, and secure solutions.", icon: <ShieldCheck className="size-5 text-primary" /> },
    { title: "On-Time Delivery", desc: "We respect your time and always strive to deliver projects on time without compromising quality.", icon: <ClockIcon className="size-5 text-primary" /> },
    { title: "Transparent Communication", desc: "Clear, consistent, and proactive communication at every stage of the project.", icon: <MessageSquare className="size-5 text-primary" /> },
    { title: "Long-Term Partnership", desc: "We build long-term relationships and grow together with your business.", icon: <Heart className="size-5 text-primary" /> },
  ];

  const stats = [
    { number: "4.9/5", label: "Average Rating" },
    { number: "50+", label: "Client Reviews" },
    { number: "100+", label: "Projects Delivered" },
    { number: "35+", label: "Happy Clients" },
    { number: "10+", label: "Industries Served" },
  ];

  const approach = [
    { id: "1", name: "Understand", desc: "We deeply understand your goals, challenges, and audience.", icon: <SearchIcon className="size-5 text-primary" /> },
    { id: "2", name: "Plan", desc: "We create a clear strategy and roadmap tailored to your needs.", icon: <ClipboardList className="size-5 text-primary" /> },
    { id: "3", name: "Design & Build", desc: "We design and build with precision, following best practices.", icon: <Code className="size-5 text-primary" /> },
    { id: "4", name: "Test & Optimize", desc: "We test thoroughly and optimize for performance, security, and scalability.", icon: <CheckSquare className="size-5 text-primary" /> },
    { id: "5", name: "Deploy", desc: "We deploy seamlessly and ensure a smooth launch.", icon: <Rocket className="size-5 text-primary" /> },
    { id: "6", name: "Support & Grow", desc: "We provide continuous support and help your business grow.", icon: <Heart className="size-5 text-primary" /> },
  ];

  return (
    <PageTransition>
      <div className="hog-grid min-h-screen pb-20 pt-10 text-left">
        <main className="max-w-none px-6 md:px-12 lg:px-16 flex flex-col gap-20 md:gap-28">
          
          {/* Breadcrumbs */}
          <nav className="text-xs font-mono text-text-muted flex items-center gap-2 pt-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>&gt;</span>
            <span className="text-text-base">Why Choose Us</span>
          </nav>

          {/* Hero split */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="font-mono text-[9px] uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 px-2.5 py-0.5 rounded-full mb-4">
                WHY CHOOSE US
              </span>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-base leading-[1.08] mb-6">
                Built on Trust.{" "}
                <span className="text-primary underline decoration-primary/40 decoration-4 underline-offset-8">
                  Driven
                </span>{" "}
                by Impact.
              </h1>
              <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl mb-8">
                We go beyond delivering solutions—we build long-term partnerships. Here&apos;s why businesses choose Jayant Web & AI Systems.
              </p>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-hover text-white px-7 py-3 text-xs font-mono font-bold transition-all shadow-md active:scale-[0.98]"
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

            {/* Right: Picture/Illustration mockup */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-[32px] overflow-hidden border border-border-custom bg-neutral-900 shadow-2xl flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent z-10" />
                <div className="absolute bottom-6 left-6 right-6 z-20 bg-white dark:bg-[#111827] text-text-base p-4 border border-border-custom shadow-2xl rounded-2xl flex gap-3 items-start max-w-xs">
                  <div className="size-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 font-serif text-sm">
                    “
                  </div>
                  <div>
                    <h5 className="text-xs font-serif font-bold">Our mission is simple: deliver smart, scalable, and impactful digital solutions that help businesses grow.</h5>
                    <p className="text-[10px] text-text-muted mt-2 font-mono">Founder & CEO</p>
                  </div>
                </div>
              </div>
            </div>

          </section>

          {/* Why Businesses Choose Us */}
          <section className="py-8 relative border-t border-border-custom/30 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                Why Businesses Choose Us
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
              {reasons.map((item, idx) => (
                <div key={idx} className="hog-card rounded-2xl p-5 border border-border-custom bg-card-bg/40 flex flex-col gap-3 text-left">
                  <div className="size-9 rounded-full border border-border-custom bg-card-bg flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h5 className="font-serif text-xs md:text-sm font-bold text-text-base leading-snug">{item.title}</h5>
                  <p className="text-[10px] md:text-xs text-text-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Stats Bar */}
          <section className="grid grid-cols-2 md:grid-cols-5 gap-6 py-8 border-t border-b border-border-custom/20">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <span className="text-3xl md:text-4xl font-serif font-black text-primary mb-1">{stat.number}</span>
                <span className="text-[10px] font-mono font-bold text-text-muted uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </section>

          {/* Our Approach */}
          <section className="py-8 relative border-t border-border-custom/30 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1 rounded-full mb-4 inline-block">
                OUR APPROACH
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                Our Approach – Your Success
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
              {approach.map((step, idx) => (
                <div key={step.id} className="flex flex-col items-center text-center relative group">
                  <div className="relative z-10 size-14 rounded-full border border-border-custom bg-card-bg shadow-sm flex items-center justify-center mb-4 text-primary">
                    {step.icon}
                  </div>
                  
                  {idx < approach.length - 1 && (
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

          {/* Bottom CTA */}
          <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0B0F19] p-8 md:p-12 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center text-left">
              
              {/* Left */}
              <div className="lg:col-span-7 flex flex-col items-start">
                <h3 className="font-serif text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  Your Vision. Our Expertise. <br />
                  <span className="text-primary">A Perfect Combination.</span>
                </h3>
                <p className="text-xs md:text-sm text-white/70 mb-6 leading-relaxed max-w-lg">
                  We don&apos;t just build software. We build trust, long-term relationships, and solutions that create real impact.
                </p>
              </div>

              {/* Right buttons */}
              <div className="lg:col-span-5 flex flex-col sm:flex-row items-center gap-4 w-full justify-end">
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
                  <span>Let&apos;s Discuss Your Project</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>

            </div>
          </section>

        </main>
      </div>
    </PageTransition>
  );
}

// Simple icons replacement helpers
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

function LayersIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}
