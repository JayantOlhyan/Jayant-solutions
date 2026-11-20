"use client";

import { useEffect, useRef } from "react";

const PHRASE = "BUILD • AUTOMATE • CREATE • GROW • ";

/*
 * The band is drawn far wider than the viewBox (x −1000…2440) and the SVG is
 * fitted by HEIGHT ("meet"), so it is never cropped top/bottom at any aspect
 * ratio. Wider screens simply reveal more of the band's tails; the arch stays centred.
 * (The old version used "slice" at a fixed height, which zoomed in and cut
 * off the top of the band on wide screens.)
 */
const BAND = "M-1000,236 C-300,160 220,64 720,64 C1220,64 1760,150 2440,224";
// Narrow centre window: every real screen is wider than 500:260, so the SVG always fits by
// height and the extra width shows more of the band (which extends to x −1000…2440).
const VIEWBOX = "470 0 500 260";

/**
 * Curved flame ribbon with an endless marquee on an SVG path.
 * Speed picks up with scroll velocity. Static for reduced-motion users.
 */
export default function Ribbon() {
  const tp = useRef<SVGTextPathElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = tp.current;
    const text = el?.parentElement as unknown as SVGTextContentElement | null;
    if (!el || !text) return;
    // Loop by exactly one phrase width (user units) so the wrap is seamless.
    let period = 0;
    try {
      period = text.getSubStringLength(0, PHRASE.length);
    } catch {
      period = 0;
    }
    if (!period) period = 1000;
    let offset = 0, raf = 0, lastY = window.scrollY, boost = 0, visible = true;
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
    io.observe(el.closest("svg")!);
    const tick = () => {
      const y = window.scrollY;
      boost = boost * 0.9 + Math.min(Math.abs(y - lastY), 80) * 0.02;
      lastY = y;
      if (visible) {
        offset -= 0.9 + boost * 0.9;
        if (offset <= -period) offset += period;
        el.setAttribute("startOffset", String(offset));
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); io.disconnect(); };
  }, []);

  return (
    <section aria-label="Build, automate, create, grow" className="relative -my-6 overflow-hidden py-10 md:py-16">
      <svg
        viewBox={VIEWBOX}
        className="block w-full"
        style={{ height: "clamp(132px, 16vw, 300px)" }}
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <defs>
          <path id="ribbon-path" d={BAND} />
        </defs>
        <path d={BAND} fill="none" stroke="#F37021" strokeWidth="96" strokeLinecap="butt" />
        <text fill="#161310" fontSize="52" fontWeight="800" style={{ fontFamily: "var(--font-bricolage)", letterSpacing: "-0.01em" }} dy="18">
          <textPath ref={tp} href="#ribbon-path" startOffset="0">{PHRASE.repeat(12)}</textPath>
        </text>
      </svg>
      <p className="sr-only">Websites, AI automation, web apps and WhatsApp bots, shipped in weeks.</p>
    </section>
  );
}
