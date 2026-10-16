import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MessageSquare,
  FileCheck2,
  Cpu,
  ShieldCheck,
  Scale,
  ArrowUpRight,
  GraduationCap,
  Code2,
} from "lucide-react";

const WORKING_PRINCIPLES = [
  {
    icon: <MessageSquare className="size-4 text-primary" />,
    title: "Founder-led communication",
    description:
      "You speak directly with the engineer planning and building your system—no account managers, sales relays, or diluted technical context.",
  },
  {
    icon: <FileCheck2 className="size-4 text-primary" />,
    title: "Clear requirements and deliverables",
    description:
      "Every engagement begins with a written specification defining exact deliverables, milestone checkpoints, and agreed responsibilities.",
  },
  {
    icon: <Cpu className="size-4 text-primary" />,
    title: "Thoughtful technical choices",
    description:
      "We choose proven technologies (Next.js, TypeScript, Python FastAPI, PostgreSQL) based on maintainability and operational fit—not hype.",
  },
  {
    icon: <ShieldCheck className="size-4 text-primary" />,
    title: "Quality assurance",
    description:
      "Interfaces, forms, API endpoints, and mobile viewports are tested against agreed acceptance criteria prior to production deployment.",
  },
  {
    icon: <Scale className="size-4 text-primary" />,
    title: "Honest discussions about trade-offs",
    description:
      "We openly discuss technical limitations, third-party API costs, timeline realities, and architectural trade-offs before you commit budget.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-16 md:py-24 border-b border-border-custom relative"
    >
      <div className="w-full flex flex-col gap-16 md:gap-20">
        {/* Part 1: Why JAYANT SYSTEMS — Verifiable Working Principles */}
        <div>
          <div className="max-w-2xl text-left mb-10">
            <span className="font-mono text-[11px] tracking-wider uppercase text-primary font-semibold block mb-2">
              Section 05 &bull; Working Principles
            </span>
            <h2
              id="about-heading"
              className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-text-base mb-3"
            >
              Why JAYANT SYSTEMS
            </h2>
            <p className="text-sm sm:text-base text-text-muted leading-relaxed">
              Technology built with clarity, purpose, and accountability. Instead of unverifiable superlatives, our studio operates on six engineering commitments that reduce project risk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {WORKING_PRINCIPLES.map((principle) => (
              <div
                key={principle.title}
                className="hog-card p-6 bg-card-bg border border-border-custom text-left flex flex-col gap-3"
              >
                <div className="size-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  {principle.icon}
                </div>
                <h3 className="font-display text-base sm:text-lg font-bold text-text-base leading-snug">
                  {principle.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-text-muted leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}

            {/* 6th Principle: Maintainable Implementations & Full Code Ownership */}
            <div className="hog-card p-6 bg-[#0A0F1D] text-white border border-slate-800 text-left flex flex-col justify-between gap-4">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-blue-400 font-semibold block mb-2">
                  Code Ownership &amp; Handover
                </span>
                <h3 className="font-display text-base sm:text-lg font-bold text-white leading-snug mb-2">
                  Maintainable implementations
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed">
                  Upon project completion and final milestone settlement, clean, documented source code, repositories, and deployment configurations are transferred directly to your organization.
                </p>
              </div>
              <Link
                href="/company/why-choose-us"
                className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-blue-400 hover:text-blue-300 underline underline-offset-4"
              >
                <span>Read full working standards</span>
                <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Part 2: Founder Introduction — Accountable & Transparent */}
        <div className="hog-card p-6 sm:p-8 md:p-10 bg-card-bg border border-border-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Founder Portrait Column */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
              <div className="relative w-full max-w-[300px] aspect-[4/5] rounded-xl overflow-hidden border border-border-custom bg-[#0A0F1D] shadow-md">
                <Image
                  src="/jayant.webp"
                  alt="Jayant Olhyan — Founder and Lead Engineer at JAYANT SYSTEMS"
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0A0F1D] via-[#0A0F1D]/80 to-transparent p-4 text-left">
                  <span className="font-display text-base font-extrabold text-white block">
                    Jayant Olhyan
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-blue-400">
                    Founder &amp; Lead Systems Engineer
                  </span>
                </div>
              </div>
            </div>

            {/* Founder Narrative & Credentials Column */}
            <div className="lg:col-span-8 flex flex-col items-start text-left gap-5">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-primary font-semibold block mb-1.5">
                  Section 06 &bull; Founder-Led Accountability
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-text-base tracking-tight">
                  Planned, Engineered, and Delivered Directly by Jayant Olhyan
                </h3>
              </div>

              <div className="space-y-3.5 text-sm sm:text-[15px] text-text-muted leading-relaxed">
                <p className="text-text-base font-medium">
                  JAYANT SYSTEMS is a founder-led technology studio based in New Delhi. When you engage us, your project is not handed off to anonymous junior contractors or filtered through layers of account management.
                </p>
                <p>
                  I personally lead system discovery, technical architecture, frontend and backend implementation, and deployment. Whether we are building a high-converting business website, a custom operational portal, or an AI workflow integration, my focus is on writing clean, maintainable software that solves your actual operational problem.
                </p>
                <p>
                  For specialized or larger-scope engagements, I collaborate with vetted domain specialists across design and infrastructure while remaining your single, accountable point of technical contact from day one through launch.
                </p>
              </div>

              {/* Verifiable Background & Links */}
              <div className="w-full pt-4 border-t border-border-custom grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-2.5">
                  <GraduationCap className="size-4 text-primary shrink-0 mt-0.5" />
                  <div className="text-xs text-text-muted leading-relaxed">
                    <strong className="text-text-base block font-display">
                      Academic &amp; Technical Foundation
                    </strong>
                    B.Tech in Computer Science (MSIT, New Delhi) &amp; Online BSc (Hons) in Data Science and AI (IIT Guwahati).
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Code2 className="size-4 text-primary shrink-0 mt-0.5" />
                  <div className="text-xs text-text-muted leading-relaxed">
                    <strong className="text-text-base block font-display">
                      Hands-On Engineering Track
                    </strong>
                    Former Lead at MSIT Web Development Society; 30+ national hackathon selections &amp; shipped full-stack systems.
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-1">
                <Link
                  href="/company/founder"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-border-custom bg-card-subtle hover:border-primary/40 text-xs font-mono font-semibold text-text-base transition-colors"
                >
                  <span>Full Founder Profile</span>
                  <ArrowUpRight className="size-3.5" />
                </Link>
                <a
                  href="https://github.com/JayantOlhyan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-text-muted hover:text-primary transition-colors"
                >
                  <span>GitHub (@JayantOlhyan)</span>
                  <ArrowUpRight className="size-3.5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/jayant-olhyan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-text-muted hover:text-primary transition-colors"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
