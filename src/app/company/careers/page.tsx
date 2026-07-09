"use client";

import React from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { ArrowRight, Briefcase, Heart, BookOpen, Clock, Users, Gift, Lock } from "lucide-react";

export default function CareersPage() {
  const stats = [
    { number: "30+", label: "Team Members" },
    { number: "25+", label: "Projects Delivered" },
    { number: "5+", label: "Countries Reached" },
    { number: "100%", label: "Growth Mindset" },
  ];

  const benefits = [
    { title: "Meaningful Work", desc: "Work on real projects that solve problems and create measurable impact.", icon: <Briefcase className="size-5 text-primary" /> },
    { title: "Growth & Learning", desc: "Continuous learning, mentorship, and career development opportunities.", icon: <BookOpen className="size-5 text-primary" /> },
    { title: "Innovation First", desc: "We embrace new technologies and encourage creative problem solving.", icon: <Gift className="size-5 text-primary" /> },
    { title: "Flexible & Friendly", desc: "Flexible work environment with a healthy work-life balance.", icon: <Clock className="size-5 text-primary" /> },
    { title: "People & Culture", desc: "A supportive, inclusive, and collaborative team culture.", icon: <Users className="size-5 text-primary" /> },
  ];

  const positions = [
    { title: "Full Stack Developer", type: "Full-time • Remote / Hybrid", tags: ["React", "Node.js", "MongoDB", "TypeScript"] },
    { title: "AI/ML Engineer", type: "Full-time • Remote / Hybrid", tags: ["Python", "TensorFlow", "PyTorch", "LLM"] },
    { title: "UI/UX Designer", type: "Full-time • Remote / Hybrid", tags: ["Figma", "UI Design", "Prototyping", "User Research"] },
    { title: "DevOps Engineer", type: "Full-time • Remote / Hybrid", tags: ["AWS", "Docker", "CI/CD", "Kubernetes"] },
    { title: "Business Development Executive", type: "Full-time • On-site / Hybrid", tags: ["Sales", "Communication", "Relationship Building"] },
  ];

  const perks = [
    { title: "Competitive Salary", desc: "We offer industry-competitive compensation and performance-based rewards.", icon: <Briefcase className="size-4 text-primary" /> },
    { title: "Health & Wellness", desc: "Comprehensive health insurance and wellness programs for you and your family.", icon: <Heart className="size-4 text-primary" /> },
    { title: "Learning Budget", desc: "Annual budget for courses, certifications, books, and conferences.", icon: <BookOpen className="size-4 text-primary" /> },
    { title: "Flexible Working", desc: "Work remotely or from our office with flexible hours.", icon: <Clock className="size-4 text-primary" /> },
    { title: "Paid Time Off", desc: "Generous leave policy to help you relax, recharge, and come back stronger.", icon: <Gift className="size-4 text-primary" /> },
    { title: "Team Events", desc: "Regular team outings, celebrations, and fun activities.", icon: <Users className="size-4 text-primary" /> },
  ];

  return (
    <PageTransition>
      <div className="hog-grid min-h-screen pb-20 pt-10 text-left">
        <main className="max-w-none px-6 md:px-12 lg:px-16 flex flex-col gap-20 md:gap-28">
          
          {/* Breadcrumbs */}
          <nav className="text-xs font-mono text-text-muted flex items-center gap-2 pt-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>&gt;</span>
            <span className="text-text-muted">Company</span>
            <span>&gt;</span>
            <span className="text-text-base">Careers</span>
          </nav>

          {/* Hero split */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="font-mono text-[9px] uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 px-2.5 py-0.5 rounded-full mb-4">
                CAREERS
              </span>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-base leading-[1.08] mb-6">
                Build the Future.{" "}
                <span className="text-primary underline decoration-primary/40 decoration-4 underline-offset-8">
                  Together.
                </span>
              </h1>
              <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl mb-8">
                At Jayant Web & AI Systems, we&apos;re more than just a team – we&apos;re builders, thinkers, and problem solvers. Join us in creating intelligent digital solutions that make a real impact.
              </p>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
                <a
                  href="#open-positions"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-hover text-white px-7 py-3 text-xs font-mono font-bold transition-all shadow-md"
                >
                  <span>View Open Positions</span>
                  <ArrowRight className="size-4" />
                </a>
                <Link
                  href="/about"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-border-custom bg-white hover:bg-neutral-50 dark:bg-card-bg dark:hover:bg-neutral-900 px-7 py-3 text-xs font-mono font-bold text-text-base transition-all"
                >
                  <span>Life at JWAI</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>

              {/* Stats bullets */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-border-custom/50 pt-6 w-full">
                {stats.map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-2xl font-serif font-black text-primary leading-none mb-1">{stat.number}</span>
                    <span className="text-[10px] font-mono font-bold text-text-muted uppercase tracking-wider">{stat.label}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Right: Office picture mockup */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-[32px] overflow-hidden border border-border-custom bg-neutral-900 shadow-2xl flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent z-10" />
                <div className="absolute bottom-6 left-6 right-6 z-20 bg-white dark:bg-[#111827] text-text-base p-4 border border-border-custom shadow-2xl rounded-2xl flex gap-3 items-start max-w-xs">
                  <div className="size-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 font-serif text-sm">
                    🚀
                  </div>
                  <div>
                    <h5 className="text-xs font-serif font-bold">Your ideas. Our platform. Real impact.</h5>
                    <p className="text-[10px] text-text-muted mt-0.5">Let&apos;s build something amazing together.</p>
                  </div>
                </div>
              </div>
            </div>

          </section>

          {/* Why You'll Love Working With Us */}
          <section className="py-8 relative border-t border-border-custom/30 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1 rounded-full mb-4 inline-block">
                WHY WORK WITH US
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                Why You&apos;ll Love Working With Us
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="hog-card rounded-2xl p-5 border border-border-custom bg-card-bg/40 flex flex-col justify-between min-h-[120px]">
                  <div className="flex flex-col gap-3 text-left">
                    <div className="size-9 rounded-full border border-border-custom bg-card-bg flex items-center justify-center">
                      {benefit.icon}
                    </div>
                    <h5 className="font-serif text-xs md:text-sm font-bold text-text-base leading-snug">{benefit.title}</h5>
                    <p className="text-[10px] md:text-xs text-text-muted leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Open Positions & Perks split grid */}
          <section id="open-positions" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start py-8 border-t border-border-custom/30 pt-16">
            
            {/* Left: Open Positions */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left w-full">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-primary border border-primary/20 bg-primary/10 px-2.5 py-0.5 rounded-full mb-3 inline-block">
                  OPEN POSITIONS
                </span>
                <h3 className="font-serif text-2xl md:text-4xl font-bold text-text-base leading-tight">
                  Join the Team
                </h3>
              </div>

              <div className="space-y-4">
                {positions.map((pos, idx) => (
                  <div
                    key={idx}
                    className="hog-card rounded-2xl p-5 border border-border-custom bg-card-bg/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="flex flex-col items-start gap-1">
                      <h4 className="font-serif text-sm md:text-base font-bold text-text-base leading-none">{pos.title}</h4>
                      <span className="text-[10px] font-mono text-text-muted">{pos.type}</span>
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {pos.tags.map((tag) => (
                          <span key={tag} className="text-[9px] font-mono text-text-base bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-primary hover:bg-primary-hover text-white px-5 py-2 text-xs font-mono font-bold transition-all shadow-sm self-start sm:self-center"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Benefits & Perks */}
            <div className="lg:col-span-5 flex flex-col gap-6 text-left w-full">
              <div className="hog-card rounded-3xl p-6 md:p-8 bg-card-bg/60 border border-border-custom">
                <h3 className="font-serif text-xl font-bold text-text-base border-b border-border-custom pb-3 mb-6">
                  Benefits & Perks
                </h3>

                <div className="space-y-6">
                  {perks.map((perk, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="size-9 rounded-xl border border-border-custom bg-card-bg flex items-center justify-center text-primary shrink-0">
                        {perk.icon}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-serif text-xs font-bold text-text-base leading-none mb-1">{perk.title}</span>
                        <p className="text-[10px] text-text-muted leading-relaxed">{perk.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </section>

          {/* Bottom CTA */}
          <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0B0F19] px-8 py-16 md:py-20 text-center shadow-lg">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,138,0,0.04),transparent)] pointer-events-none" />
            
            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
                Don&apos;t See the Right Role?
              </h2>
              <p className="text-xs md:text-sm text-white/70 max-w-lg mb-8 leading-relaxed">
                We&apos;re always looking for passionate and talented people. Send us your resume and tell us how you can help!
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white hover:bg-neutral-50 px-7 py-3 text-xs font-mono font-bold text-neutral-900 shadow-md transition-all duration-200"
              >
                Send Your Resume <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </section>

        </main>
      </div>
    </PageTransition>
  );
}
