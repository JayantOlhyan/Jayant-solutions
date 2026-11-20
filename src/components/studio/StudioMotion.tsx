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

    // 7. Journey (desktop): the flame line draws along the winding path; as it
    //    reaches each stop the icon opens between number and name and the
    //    caption pops in (technique after two26.studio's services path).
    mm.add("(prefers-reduced-motion: no-preference) and (min-width: 1024px)", () => {
      const cleanups: (() => void)[] = [];
      document.querySelectorAll<HTMLElement>("[data-journey]").forEach((sec) => {
        const path = sec.querySelector<SVGPathElement>("[data-journey-path]");
        const list = sec.querySelector<HTMLElement>("ol");
        const stops = Array.from(sec.querySelectorAll<HTMLElement>("[data-journey-stop]"));
        if (!path || !list) return;

        const len = path.getTotalLength();
        // Where along the line each stop sits (nearest sampled point).
        const N = 800;
        const samples = Array.from({ length: N + 1 }, (_, k) => path.getPointAtLength((len * k) / N));
        const at = stops.map((s) => {
          const x = Number(s.dataset.x), y = Number(s.dataset.y);
          let best = 0, bd = Infinity;
          samples.forEach((p, k) => {
            const d = (p.x - x) ** 2 + (p.y - y) ** 2;
            if (d < bd) { bd = d; best = k; }
          });
          return best / N;
        });

        // One master timeline, scrubbed with a soft 1.2s catch-up so the line
        // glides after the scroll instead of snapping to it. Every stop's
        // animation lives on the same timeline, so scrolling back reverses it.
        path.style.strokeDasharray = `${len}`;
        path.style.strokeDashoffset = `${len}`;
        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: { trigger: list, start: "top 74%", end: "bottom 70%", scrub: 1.5, invalidateOnRefresh: true },
        });
        tl.to(path, { strokeDashoffset: 0, duration: 1 }, 0);

        stops.forEach((s, i) => {
          const wrap = s.querySelector<HTMLElement>("[data-journey-icon]");
          const tile = wrap?.firstElementChild as HTMLElement | null;
          const pill = s.querySelector<HTMLElement>("[data-journey-pill]");
          const t = Math.max(0, at[i] - 0.035); // just before the line arrives

          if (wrap && tile) {
            const w = wrap.getBoundingClientRect().width || 60;
            // The icon opens a gap between number and name, then pops in.
            gsap.set(wrap, { width: 0 });
            gsap.set(tile, { scale: 0, opacity: 0 });
            tl.to(wrap, { width: w, duration: 0.09, ease: "power3.out" }, t);
            tl.to(tile, { scale: 1, opacity: 1, duration: 0.11, ease: "back.out(3)" }, t + 0.012);
          }
          if (pill) {
            // GSAP owns the tilt here (it replaces the CSS `rotate` fallback): 0° → ±4° with the pop.
            const tilt = pill.dataset.side === "right" ? -4 : 4;
            gsap.set(pill, { scale: 0, opacity: 0, rotation: 0, transformOrigin: pill.dataset.side === "right" ? "0% 0%" : "100% 0%" });
            tl.to(pill, { scale: 1, opacity: 1, rotation: tilt, duration: 0.12, ease: "back.out(2.6)" }, t + 0.03);
          }
        });

        cleanups.push(() => {
          tl.scrollTrigger?.kill();
          tl.kill();
          path.style.strokeDasharray = "";
          path.style.strokeDashoffset = "";
          stops.forEach((s) => {
            const wrap = s.querySelector<HTMLElement>("[data-journey-icon]");
            const els = [wrap, wrap?.firstElementChild, s.querySelector("[data-journey-pill]")].filter(Boolean) as HTMLElement[];
            gsap.set(els, { clearProps: "width,transform,opacity,scale,rotation" });
          });
        });
      });
      return () => cleanups.forEach((c) => c());
    });

    // 7b. Journey (mobile): a straight rail fills as you scroll; stops light in order.
    mm.add("(prefers-reduced-motion: no-preference) and (max-width: 1023px)", () => {
      const cleanups: (() => void)[] = [];
      document.querySelectorAll<HTMLElement>("[data-journey]").forEach((sec) => {
        const rail = sec.querySelector<HTMLElement>("[data-journey-rail]");
        const list = sec.querySelector<HTMLElement>("ol");
        const stops = Array.from(sec.querySelectorAll<HTMLElement>("[data-journey-stop]"));
        if (!rail || !list) return;
        const tween = gsap.fromTo(rail, { scaleY: 0 }, {
          scaleY: 1,
          ease: "none",
          scrollTrigger: { trigger: list, start: "top 70%", end: "bottom 70%", scrub: 0.6 },
        });
        const triggers = stops.map((s) => {
          s.dataset.lit = "false";
          return ScrollTrigger.create({
            trigger: s,
            start: "top 72%",
            onEnter: () => { s.dataset.lit = "true"; },
            onLeaveBack: () => { s.dataset.lit = "false"; },
          });
        });
        cleanups.push(() => {
          tween.scrollTrigger?.kill();
          tween.kill();
          triggers.forEach((t) => t.kill());
          gsap.set(rail, { clearProps: "transform" });
          stops.forEach((s) => delete s.dataset.lit);
        });
      });
      return () => cleanups.forEach((c) => c());
    });

    return () => mm.revert();
  });

  return null;
}
