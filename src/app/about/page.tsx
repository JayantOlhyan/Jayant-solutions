"use client";

import React from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Code, Target, Shield, Heart, Lightbulb, Users, CheckCircle, Zap } from "lucide-react";
import CallToAction from "@/components/CallToAction";
import Image from "next/image";

export default function AboutPage() {
  const stats = [
    { number: "50+", label: "Projects Delivered", desc: "Successful solutions across industries" },
    { number: "100%", label: "Client Satisfaction", desc: "We prioritize quality and relationships" },
    { number: "5+", label: "Years Of Experience", desc: "Building innovative digital products" },
    { number: "10+", label: "Industries Served", desc: "Healthcare, Education, NGO, SaaS & more" },
  ];

  const coreAdvantages = [
    {
      title: "AI-First Approach",
      description: "I build intelligent solutions using the latest generative AI and LLM technologies.",
      icon: <Brain className="size-6 text-primary" />,
    },
    {
      title: "Custom Solutions",
      description: "Every product is tailored precisely to your unique business operational workflows.",
      icon: <Code className="size-6 text-primary" />,
    },
    {
      title: "Agile & Fast",
      description: "I follow agile methodologies to deliver work faster, allowing rapid adaptation.",
      icon: <Zap className="size-6 text-primary" />,
    },
    {
      title: "Secure & Scalable",
      description: "Security, robust performance, and scalable infrastructure are built in from day one.",
      icon: <Shield className="size-6 text-primary" />,
    },
    {
      title: "Dedicated Support",
      description: "I partner with you at every step — from initial discovery call to post-launch maintenance.",
      icon: <Heart className="size-6 text-primary" />,
    },
  ];

  const journeyYears = [
    {
      year: "2021",
      title: "The Beginning",
      desc: "Started as a solo developer passionate about coding and automation problems.",
    },
    {
      year: "2022",
      title: "First Clients",
      desc: "Partnered with local businesses and delivered our first custom CRM systems.",
    },
    {
      year: "2023",
      title: "Expansion",
      desc: "Expanded my services and capabilities to meet growing business demands.",
    },
    {
      year: "2024",
      title: "Innovation Focus",
      desc: "Focused on AI chatbots, WhatsApp integrations, and cloud analytics platforms.",
    },
    {
      year: "2025 & Beyond",
      title: "Building the Future",
      desc: "Continuing my mission to build intelligent technology that drives real impact.",
    },
  ];

  return (
    <PageTransition>
      <div className="hog-grid min-h-screen pb-20 pt-10 text-left">
        <main className="max-w-none px-6 md:px-12 lg:px-16 flex flex-col gap-20 md:gap-28">
          
          {/* About Hero & Desk Layout */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-8">
            {/* Left Column: Hero Text */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1 rounded-full mb-4 inline-block">
                ABOUT US
              </span>
              <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-text-base leading-[1.08] mb-6">
                Building Technology That Drives Real{" "}
                <span className="text-primary underline decoration-primary/40 decoration-4 underline-offset-8">
                  Impact
                </span>
              </h1>
              <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl mb-8">
                At Jayant Web & AI Systems, I help startups, businesses, and enterprises transform ideas into powerful digital products. From concept to code, I build solutions that are intelligent, scalable, and future-ready.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-neutral-900 text-white hover:bg-neutral-800 px-7 py-3 text-xs font-mono font-bold transition-all"
                >
                  <span>Let&apos;s Build Together</span>
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/process"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-border-custom bg-white hover:bg-neutral-50 dark:bg-card-bg dark:hover:bg-neutral-900 px-7 py-3 text-xs font-mono font-bold text-text-base transition-all"
                >
                  <span>Our Process</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Desk image overlay quote */}
            <div className="lg:col-span-6 relative flex justify-center items-center">
              <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden border border-border-custom relative shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                  alt="Jayant Web & AI Systems collaborative digital workspace - Team designing software"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  className="object-cover brightness-[0.85] dark:brightness-[0.7]"
                />
                
                {/* Overlapping Quote container */}
                <div className="absolute bottom-6 left-6 right-6 md:right-auto md:max-w-md rounded-2xl bg-primary text-white p-5 shadow-2xl">
                  <div className="flex flex-col gap-2">
                    <span className="text-3xl font-black leading-none text-white/50">&ldquo;</span>
                    <p className="text-xs md:text-sm font-serif font-bold leading-relaxed -mt-2">
                      We don&apos;t just build software, we craft digital experiences that create long-term value.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Counter Section */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="hog-card rounded-2xl p-6 flex flex-col justify-between border border-border-custom bg-card-bg/50">
                <span className="text-3xl md:text-4xl font-serif font-black text-primary mb-2">
                  {stat.number}
                </span>
                <div>
                  <h3 className="font-serif text-sm font-bold text-text-base mb-1">{stat.label}</h3>
                  <p className="text-[11px] md:text-xs text-text-muted">{stat.desc}</p>
                </div>
              </div>
            ))}
          </section>

          {/* Our Story ("How It All Started") */}
          <section className="py-8 relative">
            <div className="text-left mb-12">
              <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1 rounded-full mb-4 inline-block">
                OUR STORY
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                How It All Started
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Founder Copy */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <p className="text-xs md:text-sm text-text-muted leading-relaxed">
                  Jayant Web & AI Systems was founded with a simple mission — to help businesses leverage modern technology to solve real-world problems.
                </p>
                <p className="text-xs md:text-sm text-text-muted leading-relaxed">
                  What started as a passion for coding and automation has grown into a full-service digital solutions practice trusted by startups, non-profits, and professionals.
                </p>
                <div className="border-l-4 border-primary pl-4 py-2 mt-4">
                  <p className="text-xs md:text-sm font-serif font-bold italic text-text-base">
                    &ldquo;My goal is to empower businesses with technology that is not only smart but also meaningful.&rdquo;
                  </p>
                  <span className="text-[10px] text-text-muted font-mono uppercase font-semibold mt-2 block">
                    — Jayant Olhyan, Founder
                  </span>
                </div>
              </div>

              {/* Center Column: Portrait */}
              <div className="lg:col-span-3 flex justify-center">
                <div className="w-full max-w-[280px] aspect-[3/4] rounded-3xl overflow-hidden border-2 border-border-custom shadow-lg relative bg-neutral-900">
                  <Image
                    src="/jayant.webp"
                    alt="Jayant Olhyan - Founder and Lead Developer at Jayant Web & AI Systems"
                    fill
                    sizes="(max-width: 768px) 100vw, 280px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right Column: Mission/Vision/Values */}
              <div className="lg:col-span-4 flex flex-col gap-6">
                {/* How I Work */}
                <div className="border border-border-custom/80 rounded-2xl p-5 bg-card-bg/40">
                  <h3 className="font-serif text-sm font-bold text-text-base mb-1.5 flex items-center gap-2">
                    <Target className="size-4 text-primary" /> How I Work
                  </h3>
                  <ul className="list-disc list-inside text-[11px] md:text-xs text-text-muted leading-relaxed">
                    <li>Discovery & Requirements Gathering</li>
                    <li>Planning & Architecture</li>
                    <li>Design & Prototyping</li>
                    <li>Development & Iterative Delivery</li>
                    <li>Testing & Quality Assurance</li>
                    <li>Deployment & Release</li>
                    <li>Ongoing Support & Maintenance</li>
                  </ul>
                </div>

                {/* What You Can Expect */}
                <div className="border border-border-custom/80 rounded-2xl p-5 bg-card-bg/40">
                  <h3 className="font-serif text-sm font-bold text-text-base mb-1.5 flex items-center gap-2">
                    <Lightbulb className="size-4 text-primary" /> What You Can Expect
                  </h3>
                  <ul className="list-disc list-inside text-[11px] md:text-xs text-text-muted leading-relaxed">
                    <li>Direct collaboration with the founder</li>
                    <li>Clear, transparent communication throughout</li>
                    <li>Regular progress updates and demos</li>
                    <li>Clean, maintainable code with documentation</li>
                    <li>Practical AI solutions that add real value</li>
                    <li>Comprehensive handover and knowledge transfer</li>
                  </ul>
                </div>

                {/* My Development Principles */}
                <div className="border border-border-custom/80 rounded-2xl p-5 bg-card-bg/40">
                  <h3 className="font-serif text-sm font-bold text-text-base mb-1.5 flex items-center gap-2">
                    <Users className="size-4 text-primary" /> My Development Principles
                  </h3>
                  <ul className="list-disc list-inside text-[11px] md:text-xs text-text-muted leading-relaxed">
                    <li>Performance‑first engineering</li>
                    <li>Accessibility & responsive design</li>
                    <li>Scalable, modular architecture</li>
                    <li>Security‑conscious implementation</li>
                    <li>Thoughtful user experience</li>
                    <li>Maintainable, well‑documented codebases</li>
                    <li>Modern frameworks & tooling</li>
                  </ul>
                </div>
              </div>

            </div>
          </section>

          {/* Why Choose Us ("What Sets Us Apart") */}
          <section className="py-8 relative">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1 rounded-full mb-4 inline-block">
                WHY CHOOSE US
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                What Sets Us Apart
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {coreAdvantages.map((adv, idx) => (
                <div
                  key={idx}
                  className="hog-card rounded-2xl p-5 bg-card-bg/50 border border-border-custom flex flex-col justify-between"
                >
                  <div className="flex flex-col gap-4">
                    <div className="size-11 rounded-full border border-border-custom bg-card-bg flex items-center justify-center shadow-sm">
                      {adv.icon}
                    </div>
                    <h3 className="font-serif text-xs md:text-sm font-bold text-text-base leading-snug">
                      {adv.title}
                    </h3>
                    <p className="text-[10px] md:text-xs text-text-muted leading-relaxed">
                      {adv.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Our Journey Timeline */}
          <section className="py-8 relative">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1 rounded-full mb-4 inline-block">
                OUR JOURNEY
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                From Beginning to Now
              </h2>
            </div>

            {/* Horizontal Timeline flow */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
              {journeyYears.map((item, index) => (
                <div key={item.year} className="flex flex-col items-start relative group pl-4 border-l-2 border-primary/20 md:border-l-0 md:pl-0">
                  
                  {/* Timeline circle node */}
                  <div className="absolute -left-[23px] md:-left-0 top-0.5 md:relative md:mb-4 z-10 size-4 rounded-full border border-primary bg-primary flex items-center justify-center" />

                  {/* Horizontal line connector (for desktop screens) */}
                  {index < journeyYears.length - 1 && (
                    <div className="hidden md:block absolute top-[7px] left-4 right-0 h-[1.5px] bg-primary/20 z-0" />
                  )}

                  <div className="flex flex-col gap-1 mt-1 md:mt-0">
                    <span className="font-mono text-sm font-bold text-primary">{item.year}</span>
                    <span className="font-serif text-xs md:text-sm font-bold text-text-base leading-none mt-1">
                      {item.title}
                    </span>
                    <span className="text-[10px] md:text-xs text-text-muted leading-tight mt-1.5">
                      {item.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Ready to Build CTA */}
          <CallToAction />

        </main>
      </div>
    </PageTransition>
  );
}
