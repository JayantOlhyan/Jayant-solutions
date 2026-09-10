"use client";

import React from "react";
import JsonLd from "@/components/seo/JsonLd";
import { createProfilePageSchema } from "@/lib/seo/schema";

import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, Target, Award, Users, RefreshCw, GraduationCap, Code2 } from "lucide-react";

export default function FounderPage() {
  const stats = [
    { number: "25+", label: "Completed Projects" },
    { number: "Direct", label: "Developer Access" },
    { number: "30+", label: "Hackathons & Tracks" },
    { number: "10+", label: "Specialized Domains" },
    { number: "Full", label: "Source Code Ownership" },
    { number: "Fixed", label: "Transparent Milestones" },
  ];

  const values = [
    { title: "Purpose First", desc: "I build solutions with a purpose — to solve real problems and create meaningful impact.", icon: <Target className="size-5 text-primary" /> },
    { title: "Excellence In Code", desc: "Clean code, scalable architecture, and performance are non-negotiable.", icon: <Award className="size-5 text-primary" /> },
    { title: "Client Success", desc: "Your success is my success. I work as a partner, not just a service provider.", icon: <Users className="size-5 text-primary" /> },
    { title: "Always Evolving", desc: "I constantly learn, explore, and adopt new technologies to stay ahead.", icon: <RefreshCw className="size-5 text-primary" /> },
  ];

  const milestones = [
    { year: "2020", title: "Started my development journey & built my first full-stack project." },
    { year: "2021", title: "Worked with startups and delivered multiple web solutions." },
    { year: "2022", title: "Deepened my expertise in AI/ML and automation technologies." },
    { year: "2023", title: "Founded Jayant Web & AI Systems to help businesses scale." },
    { year: "2024", title: "Expanded global reach and delivered 30+ successful projects." },
  ];

  return (
    
    <>
      <JsonLd schema={createProfilePageSchema()} />
      <PageTransition>
      <div className="hog-grid min-h-screen pb-20 pt-10 text-left">
        <main className="max-w-none px-6 md:px-12 lg:px-16 flex flex-col gap-16 md:gap-24">
          
          {/* Breadcrumbs */}
          <nav className="text-xs font-mono text-text-muted flex items-center gap-2 pt-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>&gt;</span>
            <span className="text-text-muted">Company</span>
            <span>&gt;</span>
            <span className="text-text-base font-semibold">Founder</span>
          </nav>

          {/* Hero split */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="font-mono text-[9px] uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 px-2.5 py-0.5 rounded-full mb-4">
                FOUNDER
              </span>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-base leading-[1.08] mb-6">
                Vision. Code.{" "}
                <span className="text-primary underline decoration-primary/40 decoration-4 underline-offset-8">
                  Impact.
                </span>
              </h1>
              <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl mb-8">
                I&apos;m Jayant Olhyan, the founder of Jayant Web & AI Systems. I believe technology should solve real problems, create meaningful experiences, and empower businesses to grow beyond limits.
              </p>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-8">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-hover text-white px-7 py-3 text-xs font-mono font-bold transition-all shadow-md active:scale-[0.98]"
                >
                  <span>Let&apos;s Connect</span>
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/portfolio"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-border-custom bg-card-bg hover:border-primary/40 px-7 py-3 text-xs font-mono font-bold text-text-base transition-all"
                >
                  <span>View My Work</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 text-text-muted">
                <a href="https://www.linkedin.com/in/jayant-olhyan/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Jayant's LinkedIn Profile">
                  <svg className="size-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="https://github.com/JayantOlhyan" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Jayant's GitHub Profile">
                  <svg className="size-5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                
              </div>

            </div>

            {/* Right: Portrait Image */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-[32px] overflow-hidden border border-border-custom bg-neutral-900 shadow-2xl group">
                <Image
                  src="/jayant.webp"
                  alt="Jayant Olhyan - Founder and Lead Developer at Jayant Web & AI Systems"
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  priority
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                <div className="z-20 text-center text-white p-6 absolute bottom-0 w-full">
                  <h3 className="font-serif text-2xl font-bold">Jayant Olhyan</h3>
                  <p className="text-xs text-primary font-mono uppercase tracking-widest mt-1">Founder & CEO</p>
                </div>
              </div>
            </div>

          </section>

          {/* Stats Grid */}
          <section className="grid grid-cols-2 md:grid-cols-6 gap-6 py-8 border-t border-b border-border-custom/20">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <span className="text-3xl md:text-4xl font-serif font-black text-primary mb-1">{stat.number}</span>
                <span className="text-[10px] font-mono font-bold text-text-muted uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </section>

          {/* Biography */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start py-8">
            <div className="lg:col-span-5 text-left">
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mb-4">
                My Story
              </h2>
              <div className="h-1 w-20 bg-primary rounded" />
            </div>

            <div className="lg:col-span-7 flex flex-col gap-6 text-sm text-text-muted leading-relaxed">
              <p>
                I am Jayant Olhyan, a software engineer and the founder of Jayant Web & AI Systems. I am based out of New Delhi / Dwarka, and my work focuses on bridging the gap between complex architectural challenges and tangible business value. My journey into technology was driven by an early fascination with how systems are built from the ground up, which eventually led me to specialize in full-stack web development, system architecture, and artificial intelligence integration. Over the years, I have grown from building isolated hobby scripts to designing robust, highly available cloud-native systems that serve real users on a daily basis.
              </p>
              <p>
                My formal engineering foundation was laid at Maharaja Surajmal Institute of Technology (MSIT), Janakpuri, New Delhi. During my time there, I immersed myself in the technical community, eventually taking on a leadership role within the MSIT Web Development Society. Leading the society wasn't just about writing code; it involved mentoring peers, architecting collaborative platforms, and organizing hands-on workshops that taught students how to deploy modern web applications from scratch. We focused heavily on transitioning from theoretical computer science into applied engineering, running sessions on version control, state management, and CI/CD pipelines. This experience taught me the critical importance of clear technical communication, developer ergonomics, and rigorous architectural planning before writing the first line of code.
              </p>
              <p>
                To deepen my understanding of machine learning and large-scale data systems, I pursued the IIT Guwahati — Online BSc (Hons) in Data Science and Artificial Intelligence. This rigorous academic program equipped me with the mathematical intuition—spanning linear algebra, probability, and optimization—and programmatic skills required to build predictive models, design robust data pipelines, and deploy AI services into production environments. Balancing this intensive coursework with practical software development allowed me to immediately apply academic concepts to real-world engineering problems, turning abstract algorithms into deployed inference endpoints that solve actual business challenges.
              </p>
              <p>
                I have architected and developed a diverse portfolio of named projects that solve specific industry problems. For instance, I built <strong>TeacherSathi</strong>, an educational platform designed to streamline classroom management, assignment tracking, and content delivery for educators. The core of this platform was built using React and Next.js for a highly interactive, SEO-optimized, and accessible frontend, backed by a resilient backend architecture capable of handling concurrent classroom data streams reliably. 
              </p>
              <p>
                I also engineered <strong>KhelClan</strong>, a dedicated platform tailored for the gaming and esports community, where real-time state management, WebSocket integrations, and low-latency data fetching were absolute critical constraints. For the healthcare sector, I developed <strong>Healthkinator</strong>, an application that demanded strict attention to data structuring, schema validation, and secure API design to ensure patient privacy. Working with such sensitive domains reinforced my commitment to writing defensively secure, highly maintainable code.
              </p>
              <p>
                My work extends deeply into artificial intelligence. I developed <strong>TruthLens AI</strong>, a sophisticated analytical tool aimed at analyzing and verifying complex information patterns. This project heavily utilized Python and FastAPI to expose machine learning inference endpoints efficiently, handling high-throughput text processing without bottlenecks. Similarly, I built <strong>FarmIQ</strong>, an agricultural technology solution that processes complex environmental and crop datasets to provide actionable insights. Building these distributed systems required seamlessly bridging Python-based analytical microservices with modern TypeScript frontends.
              </p>
              <p>
                My actual production stack is built around technologies that prioritize developer velocity, type safety, and runtime performance. On the frontend, I rely on Next.js, React, and TypeScript to create declarative, scalable user interfaces that degrade gracefully. For backend infrastructure, I utilize Python and FastAPI for compute-heavy or AI-driven microservices, while leveraging Node.js ecosystems for rapid, I/O-heavy real-time capabilities. I primarily use MongoDB for flexible, document-based data storage, alongside PostgreSQL when strict relational integrity and complex transactional queries are paramount.
              </p>
              <p>
                Beyond my individual project work, I strongly believe in the value of open-source contributions and continuous community engagement. Being part of the wider tech ecosystem in New Delhi has exposed me to a diverse array of engineering methodologies, which I continually synthesize and integrate into my own practices.
              </p>
              <p>
                At Jayant Web & AI Systems, I apply this accumulated experience to every client project. I do not just write code; I architect systems that are designed to scale smoothly, perform reliably under heavy load, and adapt swiftly to evolving business requirements. Whether I am deploying a monolithic application for an agile early-stage startup or orchestrating a complex, distributed AI service for a growing enterprise, my goal remains constant: delivering uncompromising engineering excellence that drives measurable business growth.
              </p>

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border-custom bg-white hover:bg-neutral-50 dark:bg-card-bg dark:hover:bg-neutral-900 text-xs font-mono font-bold text-text-base transition-colors self-start mt-4"
              >
                <span>Download My Resume</span>
                <ArrowRight className="size-4" />
              </a>
            </div>
          </section>

          {/* What Drives Me */}
          <section className="py-8 relative border-t border-border-custom/30 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1 rounded-full mb-4 inline-block">
                WHAT DRIVES ME
              </span>

              {/* My Development Principles */}
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mb-4">
                My Development Principles
              </h2>
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
            
          </section>

          {/* Milestones timeline */}
          <section className="py-8 relative border-t border-border-custom/30 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1 rounded-full mb-4 inline-block">
                MILESTONES & ACHIEVEMENTS
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                my journey So Far
              </h2>
            </div>

            <div className="max-w-3xl mx-auto flex flex-col gap-6 relative before:absolute before:inset-y-0 before:left-4 before:w-[1px] before:bg-border-custom/60 text-left">
              {milestones.map((m, i) => (
                <div key={i} className="flex gap-6 relative items-start group pl-10">
                  <div className="absolute left-[11px] top-1.5 size-2.5 rounded-full bg-primary border-4 border-white dark:border-[#0f172a] group-hover:scale-125 transition-transform" />
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                    <span className="font-mono text-sm font-bold text-primary shrink-0">{m.year}</span>
                    <p className="text-xs md:text-sm text-text-muted">{m.title}</p>
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
                Let&apos;s Build Something Amazing Together!
              </h2>
              <p className="text-xs md:text-sm text-white/70 max-w-lg mb-8 leading-relaxed">
                Have an idea or a project in mind? Let&apos;s turn it into a successful digital product.
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
                  Email Me <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </section>

        </main>
      </div>
    </PageTransition>
    </>
  );
}
