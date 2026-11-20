"use client";

import { useEffect, useRef } from "react";

const PHRASE = "BUILD • AUTOMATE • CREATE • GROW • ";

/**
 * Curved flame ribbon with an endless marquee on an SVG path.
 * Speed picks up with scroll velocity. Static for reduced-motion users.
 */
export default function Ribbon() {
  const tp = useRef<SVGTextPathElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = tp.current;
    if (!el) return;
    let offset = 0, raf = 0, lastY = window.scrollY, boost = 0, visible = true;
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
    io.observe(el.closest("svg")!);
    const tick = () => {
      const y = window.scrollY;
      boost = boost * 0.9 + Math.min(Math.abs(y - lastY), 80) * 0.02;
      lastY = y;
      if (visible) {
        offset -= 0.06 + boost * 0.06;
        if (offset <= -50) offset += 50; // text is duplicated, so -50% loops seamlessly
        el.setAttribute("startOffset", `${offset}%`);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); io.disconnect(); };
  }, []);

  return (
    <section aria-label="Build, automate, create, grow" className="relative -my-6 overflow-hidden py-10 md:py-16">
      <svg viewBox="0 0 1440 260" className="block h-[120px] w-[170%] -translate-x-[15%] md:h-[220px] md:w-[120%] md:-translate-x-[8%]" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <path id="ribbon-path" d="M-40,190 C360,40 760,40 1480,150" />
        </defs>
        <path d="M-40,190 C360,40 760,40 1480,150" fill="none" stroke="#F37021" strokeWidth="96" strokeLinecap="butt" />
        <text fill="#161310" fontSize="52" fontWeight="800" style={{ fontFamily: "var(--font-bricolage)", letterSpacing: "-0.01em" }} dy="18">
          <textPath ref={tp} href="#ribbon-path" startOffset="0%">{PHRASE.repeat(8)}</textPath>
        </text>
      </svg>
      <p className="sr-only">Websites, AI automation, web apps and WhatsApp bots, shipped in weeks.</p>
    </section>
  );
}
