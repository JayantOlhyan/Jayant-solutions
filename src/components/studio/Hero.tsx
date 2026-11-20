import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import LoopVideo from "./LoopVideo";
import { CONTACT_INFO } from "./data";

const lines = ["You run the business.", "We handle the digital."];

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative pt-10 md:pt-16">
      <div className="container-x">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="eyebrow fade-in text-[var(--muted)]" style={{ ["--i" as string]: 0 }}>
            Your all-in-one digital partner
          </p>
          <p className="eyebrow fade-in flex items-center gap-2 text-[var(--muted)]" style={{ ["--i" as string]: 1 }}>
            <span aria-hidden="true" className="inline-block size-2 rounded-full bg-[var(--flame)]" />
            Replies within one working day
          </p>
        </div>

        <h1 id="hero-title" className="display-soft mt-8" style={{ fontSize: "clamp(46px, 8.6vw, 148px)", lineHeight: 0.94, fontWeight: 700, letterSpacing: "-0.04em" }}>
          {lines.map((l, i) => (
            <span key={l} className="line-mask">
              <span style={{ ["--i" as string]: i }} className={i === 1 ? "text-[var(--flame-ink)]" : undefined}>{l}</span>
            </span>
          ))}
        </h1>

        <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-12 md:items-end">
          <p className="fade-in text-[19px] leading-[1.5] text-[var(--muted)] md:col-span-5 md:text-[21px]" style={{ ["--i" as string]: 2 }}>
            From websites and custom software to AI automation, design and digital growth — we bring everything
            your business needs digitally under one roof. Focus on what you do best. We&apos;ll take care of the
            technology behind it.
          </p>
          <div className="fade-in flex flex-wrap gap-3 md:col-span-6 md:col-start-7 md:justify-end" style={{ ["--i" as string]: 3 }}>
            <a href={CONTACT_INFO.bookingPath} className="btn-ink" data-magnetic>
              Let&apos;s build together
              <span className="dot" aria-hidden="true"><ArrowUpRight className="size-5" /></span>
            </a>
            <Link href="/services" className="btn-line">Explore our services</Link>
          </div>
        </div>
      </div>

      <div className="container-x mt-14 md:mt-20">
        <div className="fade-in relative overflow-hidden rounded-[24px] bg-[var(--ink)]" style={{ ["--i" as string]: 4 }} data-parallax-wrap>
          <LoopVideo
            name="hero"
            priority
            alt="Screen recordings of live products built by Jayant Systems: Teacher Sathi, Sentinel AI, the MSIT website and Healthkinator"
            className="block aspect-[4/5] w-full object-cover sm:aspect-[16/9]"
          />
          <a
            href="#work"
            aria-label="See the work"
            className="group absolute bottom-4 right-4 grid size-[108px] place-items-center rounded-full bg-[var(--flame)] text-[var(--ink)] md:bottom-8 md:right-8 md:size-[132px]"
          >
            <svg viewBox="0 0 100 100" className="spin absolute inset-0 size-full" aria-hidden="true">
              <defs>
                <path id="badge-circle" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
              </defs>
              <text fontSize="9.5" fontWeight="600" letterSpacing="2.2" fill="currentColor">
                <textPath href="#badge-circle">LIVE PRODUCTS • BUILT &amp; SHIPPED • </textPath>
              </text>
            </svg>
            <ArrowUpRight className="size-7 transition-transform duration-300 group-hover:rotate-45" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
