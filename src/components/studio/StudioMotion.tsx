"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { useLenis } from "@/components/v2/motion/SmoothScroll";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

/**
 * All scroll-driven motion for the homepage, attached by data-attributes so the
 * markup stays server-rendered and fully readable without JS.
 * Everything here is skipped for prefers-reduced-motion users.
 */
export default function StudioMotion() {
  const { lenis } = useLenis();

  // Keep ScrollTrigger in sync with Lenis smooth scrolling
  useEffect(() => {
    if (!lenis) return;
    const update = () => ScrollTrigger.update();
    lenis.on("scroll", update);
    return () => lenis.off("scroll", update);
  }, [lenis]);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // 1. Scroll-read statement: a flame "reading wave" moves through the letters.
      //    Unread = ember, the front of the wave = flame, read = ink (with a warm
      //    brown fade between flame and ink).
      document.querySelectorAll<HTMLElement>("[data-scrub]").forEach((el) => {
        const split = SplitText.create(el, { type: "words,chars" });
        const chars = split.chars as HTMLElement[];
        const n = chars.length;
        const EMBER = [244, 180, 143], FLAME = [243, 112, 33], INK = [22, 19, 16];
        const RISE = 4; // chars to go ember → flame
        const FADE = 22; // chars to go flame → ink
        const mix = (a: number[], b: number[], t: number) =>
          `rgb(${a.map((v, k) => Math.round(v + (b[k] - v) * t)).join(",")})`;
        const last: string[] = new Array(n).fill("");
        const paint = (progress: number) => {
          const front = progress * (n + RISE + FADE);
          for (let i = 0; i < n; i++) {
            const d = front - i; // how far the wave has passed this char
            const c =
              d <= 0 ? mix(EMBER, EMBER, 0)
              : d < RISE ? mix(EMBER, FLAME, d / RISE)
              : d < RISE + FADE ? mix(FLAME, INK, (d - RISE) / FADE)
              : mix(INK, INK, 0);
            if (c !== last[i]) {
              chars[i].style.color = c;
              last[i] = c;
            }
          }
        };
        paint(0);
        ScrollTrigger.create({
          trigger: el,
          start: "top 78%",
          end: "bottom 42%",
          scrub: true,
          onUpdate: (self) => paint(self.progress),
          onRefresh: (self) => paint(self.progress),
        });
      });

      // 2. Stickers drop onto the statement with a bounce
      document.querySelectorAll<HTMLElement>("[data-stickers]").forEach((wrap) => {
        const stickers = wrap.querySelectorAll<HTMLElement>("[data-sticker]");
        if (!stickers.length) return;
        gsap.from(stickers, {
          y: -140,
          scale: 0.5,
          opacity: 0,
          rotation: "+=24",
          duration: 1.1,
          ease: "elastic.out(1, 0.55)",
          stagger: 0.18,
          scrollTrigger: { trigger: wrap, start: "top 55%", once: true },
        });
      });

      // 3. Blocks rise in as they enter
      ScrollTrigger.batch("[data-rise]", {
        start: "top 88%",
        once: true,
        onEnter: (els) =>
          gsap.from(els, { y: 70, opacity: 0, duration: 1.1, ease: "expo.out", stagger: 0.12, overwrite: true }),
      });

      // 4. Hero video: gentle parallax + scale as it leaves
      document.querySelectorAll<HTMLElement>("[data-parallax-wrap]").forEach((wrap) => {
        const media = wrap.querySelector("video, img");
        if (!media) return;
        gsap.fromTo(
          media,
          { scale: 1.12, yPercent: -4 },
          { scale: 1, yPercent: 4, ease: "none", scrollTrigger: { trigger: wrap, start: "top bottom", end: "bottom top", scrub: true } }
        );
      });

      // 5. Giant wordmark: letters rise from the baseline
      document.querySelectorAll<HTMLElement>("[data-wordmark]").forEach((el) => {
        const split = SplitText.create(el, { type: "chars", mask: "chars" });
        gsap.from(split.chars, {
          yPercent: 100,
          ease: "expo.out",
          duration: 1.2,
          stagger: 0.035,
          scrollTrigger: { trigger: el, start: "top 92%", once: true },
        });
      });

      // 6. Magnetic primary buttons (fine pointers only)
      if (window.matchMedia("(pointer: fine)").matches) {
        document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((btn) => {
          const xTo = gsap.quickTo(btn, "x", { duration: 0.5, ease: "power3.out" });
          const yTo = gsap.quickTo(btn, "y", { duration: 0.5, ease: "power3.out" });
          const move = (e: PointerEvent) => {
            const r = btn.getBoundingClientRect();
            xTo((e.clientX - (r.left + r.width / 2)) * 0.25);
            yTo((e.clientY - (r.top + r.height / 2)) * 0.35);
          };
          const leave = () => { xTo(0); yTo(0); };
          btn.addEventListener("pointermove", move);
          btn.addEventListener("pointerleave", leave);
        });
      }

      // Re-measure trigger positions whenever the page height changes
      // (fonts swapping in, posters loading, accordions opening).
      let t = 0;
      const ro = new ResizeObserver(() => {
        window.clearTimeout(t);
        t = window.setTimeout(() => ScrollTrigger.refresh(), 150);
      });
      ro.observe(document.body);
      document.fonts?.ready.then(() => ScrollTrigger.refresh());
      return () => { ro.disconnect(); window.clearTimeout(t); };
    });

    return () => mm.revert();
  });

  return null;
}
