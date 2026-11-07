import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "./Container";

const serviceAnchors = [
  "Websites & web apps",
  "AI solutions",
  "Business automation",
  "Mobile apps",
  "Cloud & backend",
  "UI/UX design",
];

export default function HomeHero() {
  return (
    <section aria-labelledby="hero-title" className="pt-12 md:pt-20">
      <Container>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-1 text-xs font-mono text-neutral-700">
          <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Available for New Projects · Direct Founder Execution · New Delhi</span>
        </div>
        <h1
          id="hero-title"
          className="max-w-[18ch] text-[40px] leading-[1.04] sm:text-[56px] lg:text-[72px] font-medium tracking-[-0.035em] text-neutral-950"
        >
          Jayant Systems is a founder-led studio for websites, software and AI.
        </h1>
      </Container>

      {/* Featured work — real screenshot of a shipped product */}
      <div className="mt-12 md:mt-16 bg-[#E4EEE6]">
        <Container className="py-8 sm:py-12 lg:py-16">
          <div className="relative group block" aria-label="Teacher Sathi — see selected work">
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
              className="inline-flex items-center gap-1 font-medium text-neutral-950 underline underline-offset-4 hover:text-neutral-600 transition-colors"
            >
              teacher-sathi.online <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
          </div>
        </Container>
      </div>

      {/* Intro + services index */}
      <Container className="py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6 lg:col-span-5 flex flex-col gap-8">
            <p className="text-lg md:text-xl leading-[1.55] text-neutral-800">
              I&apos;m Jayant Olhyan. I scope, design, build and deploy every project myself, so you always talk to the
              person writing the code. Written scope, milestone payments, and full source-code ownership.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/contact/book-a-consultation"
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-neutral-950 px-6 text-[15px] font-medium text-white transition-colors hover:bg-neutral-800"
              >
                Book a 15-min call <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex min-h-12 items-center rounded-full border border-neutral-300 px-6 text-[15px] font-medium text-neutral-950 transition-colors hover:border-neutral-950"
              >
                Discuss project
              </Link>
              <Link
                href="#work"
                className="inline-flex min-h-12 items-center px-3 text-[15px] font-medium text-neutral-600 transition-colors hover:text-neutral-950"
              >
                See work ↓
              </Link>
            </div>
          </div>
          <nav aria-label="Services" className="md:col-span-5 md:col-start-8">
            <ul className="flex flex-col">
              {serviceAnchors.map((label) => (
                <li key={label} className="border-b border-neutral-200 first:border-t">
                  <Link
                    href="#services"
                    className="flex min-h-12 items-center justify-between py-3 text-[17px] font-medium text-neutral-950 transition-colors hover:text-neutral-500"
                  >
                    {label}
                    <ArrowUpRight className="size-4 text-neutral-400" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </section>
  );
}
