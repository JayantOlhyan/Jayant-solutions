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
      // 1. Scroll-scrubbed statement: words go ember → ink as you read
      document.querySelectorAll<HTMLElement>("[data-scrub]").forEach((el) => {
        const split = SplitText.create(el, { type: "words" });
        gsap.fromTo(
          split.words,
          { color: "#F4B48F" },
          {
            color: "#161310",
            stagger: 0.1,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 45%", scrub: true },
          }
        );
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
