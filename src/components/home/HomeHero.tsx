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
    <section aria-labelledby="hero-title" className="pt-14 md:pt-24">
      <Container>
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
          <Link href="#work" className="group block" aria-label="Teacher Sathi — see selected work">
            <div className="overflow-hidden rounded-[10px] shadow-[0_30px_80px_-30px_rgba(16,40,24,0.45)] ring-1 ring-black/5">
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
          </Link>
          <p className="mt-4 text-sm text-neutral-700">
            <span className="font-medium text-neutral-950">Teacher Sathi</span> — my own EdTech product, live at teacher-sathi.online
          </p>
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
            <div className="flex flex-wrap gap-3">
              <Link
                href="#contact"
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-neutral-950 px-6 text-[15px] font-medium text-white transition-colors hover:bg-neutral-800"
              >
                Book a 15-min call <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                href="#work"
                className="inline-flex min-h-12 items-center rounded-full border border-neutral-300 px-6 text-[15px] font-medium text-neutral-950 transition-colors hover:border-neutral-950"
              >
                See work
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
