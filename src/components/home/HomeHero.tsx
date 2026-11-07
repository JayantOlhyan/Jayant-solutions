import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "./Container";
import { CONTACT_INFO } from "@/data/contact";

export default function HomeHero() {
  return (
    <section aria-labelledby="hero-title" className="pt-8 md:pt-16 pb-6 md:pb-10">
      <Container>
        {/* Availability Badge */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-1 text-xs font-mono text-neutral-700">
          <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Available for New Projects · Direct Founder Execution · New Delhi</span>
        </div>

        {/* Clear Headline: Factual services & customer statement */}
        <h1
          id="hero-title"
          className="max-w-[22ch] text-[34px] leading-[1.08] sm:text-[52px] lg:text-[68px] font-medium tracking-[-0.035em] text-neutral-950"
        >
          Websites, software, and practical AI systems for founders and growing businesses.
        </h1>

        {/* Short supporting copy: concise founder-led positioning */}
        <p className="mt-4 max-w-2xl text-[15px] sm:text-lg leading-[1.55] text-neutral-700">
          I&apos;m Jayant Olhyan. I scope, design, build, and deploy every project myself—so you always work directly with the engineer writing the code. Fixed milestone pricing, working progress previews, and complete source code ownership.
        </p>

        {/* Primary and secondary actions: immediately after copy, before the project preview */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link
            href={CONTACT_INFO.bookingPath}
            className="inline-flex min-h-12 items-center gap-2 rounded-full bg-neutral-950 px-6 text-[15px] font-medium text-white transition-colors hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
          >
            <span>Book a call</span>
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
          <Link
            href="#contact"
            className="inline-flex min-h-12 items-center rounded-full border border-neutral-300 px-6 text-[15px] font-medium text-neutral-950 transition-colors hover:border-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
          >
            Send an inquiry
          </Link>
          <Link
            href="#work"
            className="inline-flex min-h-12 items-center px-3 text-[15px] font-medium text-neutral-600 transition-colors hover:text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
          >
            See selected work ↓
          </Link>
        </div>
      </Container>

      {/* Featured work — real screenshot of a shipped product */}
      <div className="mt-10 md:mt-14 bg-[#E4EEE6]">
        <Container className="py-8 sm:py-12 lg:py-14">
          <div className="relative group block" aria-label="Teacher Sathi preview">
            <div className="overflow-hidden rounded-[10px] shadow-[0_30px_80px_-30px_rgba(16,40,24,0.45)] ring-1 ring-black/5 relative">
              <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[11px] font-mono font-medium text-neutral-900 shadow-sm backdrop-blur-sm">
                <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Live in Production</span>
              </div>
              <Image
                src="/projects/teachersathi.webp"
                alt="Teacher Sathi homepage — AI lesson plan generator for NCERT classes 6 to 10"
                width={1440}
                height={900}
                priority
                sizes="(min-width: 1280px) 1200px, 100vw"
                className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.01]"
              />
            </div>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-sm text-neutral-700">
            <p>
              <span className="font-medium text-neutral-950">Teacher Sathi</span> — proprietary EdTech platform for NCERT classes 6 to 10
            </p>
            <a
              href="https://teacher-sathi.online"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-neutral-950 underline underline-offset-4 hover:text-neutral-600 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
            >
              teacher-sathi.online <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
          </div>
        </Container>
      </div>
    </section>
  );
}
