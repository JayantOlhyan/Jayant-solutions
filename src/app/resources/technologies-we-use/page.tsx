"use client";

import React from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { ArrowRight, Check, Code, Server, Smartphone, Database, Brain, Cloud, Settings, Palette } from "lucide-react";

export default function TechnologiesPage() {
  const stack = [
    {
      title: "Frontend Development",
      desc: "Building responsive, interactive and high-performance user interfaces.",
      icon: <Code className="size-6 text-primary" />,
      logos: ["React", "Next.js", "TypeScript", "Tailwind"],
    },
    {
      title: "Backend Development",
      desc: "Robust, secure, and scalable server-side applications and APIs.",
      icon: <Server className="size-6 text-primary" />,
      logos: ["Node.js", "Python", "FastAPI", "Django"],
    },
    {
      title: "Mobile App Development",
      desc: "Cross-platform and native mobile apps for iOS and Android.",
      icon: <Smartphone className="size-6 text-primary" />,
      logos: ["Flutter", "React Native", "Kotlin", "Swift"],
    },
    {
      title: "Database & Storage",
      desc: "Reliable, efficient, and scalable data storage solutions.",
      icon: <Database className="size-6 text-primary" />,
      logos: ["PostgreSQL", "MongoDB", "MySQL", "Firebase"],
    },
    {
      title: "AI / ML & Data",
      desc: "Intelligent solutions powered by AI, ML models and data-driven insights.",
      icon: <Brain className="size-6 text-primary" />,
      logos: ["Python", "TensorFlow", "PyTorch", "OpenAI"],
    },
    {
      title: "Cloud & DevOps",
      desc: "Secure cloud infrastructure and DevOps for faster deployment and scaling.",
      icon: <Cloud className="size-6 text-primary" />,
      logos: ["AWS", "Google Cloud", "Docker", "Kubernetes"],
    },
    {
      title: "Tools & Frameworks",
      desc: "Modern frameworks and tools to accelerate development and deliver quality.",
      icon: <Settings className="size-6 text-primary" />,
      logos: ["Git", "GitHub", "VS Code", "Postman"],
    },
    {
      title: "Design & UI/UX",
      desc: "User-centric designs that combine creativity with seamless experience.",
      icon: <Palette className="size-6 text-primary" />,
      logos: ["Figma", "Adobe XD", "Photoshop", "Illustrator"],
    },
  ];

  const reasons = [
    "Industry proven and production ready",
    "High performance, security & reliability",
    "Scalable to grow with your business",
    "Regularly updated and future focused",
    "Strong community and long-term support",
  ];

  const steps = [
    { id: "Understand", desc: "We understand your goals, challenges, and technical requirements." },
    { id: "Select", desc: "We choose the right technologies that fit your product and vision." },
    { id: "Build", desc: "We build secure, scalable, and high-quality solutions using best practices." },
    { id: "Deliver & Evolve", desc: "We deploy, optimize, and continuously improve for long-term success." },
  ];

  return (
    <PageTransition>
      <div className="hog-grid min-h-screen pb-20 pt-10 text-left">
        <main className="max-w-none px-6 md:px-12 lg:px-16 flex flex-col gap-20 md:gap-28">
          
          {/* Breadcrumbs */}
          <nav className="text-xs font-mono text-text-muted flex items-center gap-2 pt-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>&gt;</span>
            <span className="text-text-muted">Resources</span>
            <span>&gt;</span>
            <span className="text-text-base">Technologies We Use</span>
          </nav>

          {/* Hero */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <span className="font-mono text-[9px] uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 px-2.5 py-0.5 rounded-full mb-4">
                TECHNOLOGIES WE USE
              </span>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-base leading-[1.08] mb-6">
                Modern Technologies. <br />
                <span className="text-primary underline decoration-primary/40 decoration-4 underline-offset-8">
                  Powerful Solutions.
                </span>
              </h1>
              <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl mb-6">
                We leverage the latest and most reliable technologies to build secure, scalable, and future-ready digital products that drive real business impact.
              </p>
              
              <div className="flex flex-wrap gap-4 text-[10px] font-mono font-bold text-text-muted">
                <span className="flex items-center gap-1">🛡️ Scalable & Future-Ready</span>
                <span className="flex items-center gap-1">🛠️ Best-in-Class Tools</span>
                <span className="flex items-center gap-1">⚡ Performance Focused</span>
              </div>
            </div>

            {/* Right */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center p-8 select-none">
                <div className="w-full h-[85%] rounded-2xl bg-[#0B0F19] border-2 border-white/10 shadow-2xl p-6 flex flex-col justify-center text-left text-white/90">
                  <h4 className="font-serif text-lg font-bold mb-2">The right technology makes</h4>
                  <h3 className="font-serif text-2xl font-black text-primary leading-tight mb-2">all the difference.</h3>
                  <p className="text-xs text-white/70">Let&apos;s build something amazing together.</p>
                </div>
              </div>
            </div>

          </section>

          {/* Technology Stack Grid */}
          <section className="py-8 relative border-t border-border-custom/30 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base">
                Our Technology Stack
              </h2>
              <p className="text-sm md:text-base text-text-muted mt-2">
                A modern, robust, and proven stack for building exceptional digital experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stack.map((item, idx) => (
                <div
                  key={idx}
                  className="hog-card rounded-2xl p-6 bg-card-bg/60 backdrop-blur-sm border border-border-custom flex flex-col justify-between hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex flex-col gap-4 text-left">
                    <div className="size-11 rounded-full border border-border-custom bg-card-bg flex items-center justify-center shadow-sm">
                      {item.icon}
                    </div>
                    <h3 className="font-serif text-sm md:text-base font-bold text-text-base leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[10px] md:text-xs text-text-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  
                  {/* Logos tag list */}
                  <div className="flex flex-wrap gap-1.5 mt-6 border-t border-border-custom/30 pt-4">
                    {item.logos.map((logo) => (
                      <span key={logo} className="text-[9px] font-mono text-text-base bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded">
                        {logo}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Why These Technologies & Our Approach split grid */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start py-8 border-t border-border-custom/30 pt-16">
            
            {/* Left: Why These Technologies */}
            <div className="lg:col-span-5 flex flex-col gap-6 text-left w-full">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-primary border border-primary/20 bg-primary/10 px-2.5 py-0.5 rounded-full mb-3 inline-block">
                  WHY THESE TECHNOLOGIES
                </span>
                <h3 className="font-serif text-2xl md:text-4xl font-bold text-text-base leading-tight">
                  Why These Technologies?
                </h3>
              </div>

              <div className="space-y-3.5">
                {reasons.map((r, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-text-muted">
                    <Check className="size-4 text-primary shrink-0" />
                    <span>{r}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Our Technology Approach */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left w-full">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-primary border border-primary/20 bg-primary/10 px-2.5 py-0.5 rounded-full mb-3 inline-block">
                  OUR APPROACH
                </span>
                <h3 className="font-serif text-2xl md:text-4xl font-bold text-text-base leading-tight">
                  Our Technology Approach
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-6 relative">
                {steps.map((step, idx) => (
                  <div key={idx} className="flex gap-3 text-left">
                    <div className="size-8 rounded-full border border-border-custom bg-card-bg flex items-center justify-center text-primary shrink-0 font-mono text-xs font-bold">
                      {idx + 1}
                    </div>
                    <div>
                      <h5 className="font-serif text-xs font-bold text-text-base leading-none mb-1">{step.id}</h5>
                      <p className="text-[10px] text-text-muted leading-tight mt-1.5">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </section>

          {/* Bottom CTA */}
          <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0B0F19] p-8 md:p-12 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center text-left">
              
              {/* Left */}
              <div className="lg:col-span-7 flex flex-col items-start">
                <h3 className="font-serif text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  Let&apos;s Choose the Right Tech Stack <br />
                  <span className="text-primary">for Your Product.</span>
                </h3>
                <p className="text-xs md:text-sm text-white/70 mb-6 leading-relaxed max-w-lg">
                  Reach out to discuss your project requirements and select the best tools for your goals.
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
                  href="/portfolio"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 hover:bg-white/5 px-6 py-2.5 text-xs font-mono font-bold text-white transition-all duration-200"
                >
                  <span>View Our Work</span>
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
