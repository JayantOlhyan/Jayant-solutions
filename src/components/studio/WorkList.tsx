"use client";

import { useEffect, useRef, useState } from "react";
import { useMedia } from "./useMedia";
import { ArrowUpRight } from "lucide-react";
import LoopVideo from "./LoopVideo";
import { work, projectCount } from "./data";

/**
 * Selected work as a big typographic list. On desktop a looping product preview
 * follows the cursor; on touch screens each row shows its preview inline.
 */
export default function WorkList() {
  const [active, setActive] = useState<number | null>(null);
  const [shown, setShown] = useState(0); // last hovered row, so the preview doesn't blank while fading out
  const fine = useMedia("(hover: hover) and (pointer: fine)");
  const cursor = useRef<HTMLDivElement | null>(null);
  const pos = useRef({ x: 0, y: 0, tx: 0, ty: 0 });

  useEffect(() => {
    if (!fine) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    const onMove = (e: PointerEvent) => { pos.current.tx = e.clientX; pos.current.ty = e.clientY; };
    const loop = () => {
      const p = pos.current;
      const k = reduce ? 1 : 0.14;
      p.x += (p.tx - p.x) * k; p.y += (p.ty - p.y) * k;
      if (cursor.current) cursor.current.style.transform = `translate3d(${p.x - 170}px, ${p.y - 170}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => { window.removeEventListener("pointermove", onMove); cancelAnimationFrame(raf); };
  }, [fine]);

  return (
    <section id="work" aria-labelledby="work-title" className="scroll-mt-24 py-24 md:py-36">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 id="work-title" className="display-soft" style={{ fontSize: "clamp(42px, 6.4vw, 104px)", lineHeight: 0.98, fontWeight: 700 }}>
            Work that&apos;s<br /><span className="text-[var(--flame-ink)]">live</span>
          </h2>
          <p className="max-w-sm text-[16px] leading-relaxed text-[var(--muted)]">
            Every project is labelled for what it is and links to the live product. Click through — they all work.
          </p>
        </div>

        <ul className="work-list mt-14 border-t border-[var(--hair)]" onMouseLeave={() => setActive(null)}>
          {work.map((w, i) => (
            <li key={w.id} className="border-b border-[var(--hair)]">
              <a
                href={w.href}
                className="work-row grid grid-cols-[auto_1fr_auto] items-center gap-x-4 gap-y-3 py-6 md:grid-cols-[64px_1.3fr_1fr_auto] md:gap-x-8 md:py-9"
                onMouseEnter={() => { setActive(i); setShown(i); }}
                onFocus={() => { setActive(i); setShown(i); }}
                onBlur={() => setActive(null)}
              >
                <span className="eyebrow text-[var(--muted)]">{String(i + 1).padStart(2, "0")}</span>
                <span className="display text-[34px] uppercase md:text-[64px]">{w.name}</span>
                <span className="col-span-3 col-start-1 row-start-2 text-[15px] leading-snug text-[var(--muted)] md:col-span-1 md:col-start-3 md:row-start-1">
                  <span className="block font-medium text-[var(--ink)]">{w.kind}</span>
                  {w.line}
                </span>
                <span className="work-arrow col-start-3 row-start-1 grid size-12 place-items-center rounded-full border border-[var(--ink)] md:col-start-4" aria-hidden="true">
                  <ArrowUpRight className="size-5" />
                </span>
                {/* Inline preview for touch screens. Hidden by CSS (not JS) on hover devices so
                    server and client render the same layout and nothing jumps after hydration. */}
                <span className="work-inline col-span-3 row-start-3 block overflow-hidden rounded-[16px]">
                  <LoopVideo name={w.media} alt={`${w.name} — live product`} className="block aspect-square w-full object-cover" />
                </span>
                <span className="sr-only">(read the case study)</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center">
          <a href="/portfolio" className="btn-line">All {projectCount} live projects</a>
        </div>
      </div>

      {fine && (
        <div
          ref={cursor}
          aria-hidden="true"
          className="pointer-events-none fixed left-0 top-0 z-40 size-[340px] overflow-hidden rounded-[22px] shadow-[0_40px_80px_-30px_rgba(22,19,16,.55)] transition-[opacity,scale] duration-300"
          style={{ opacity: active === null ? 0 : 1, scale: active === null ? "0.6" : "1" }}
        >
          <LoopVideo key={work[shown].id} name={work[shown].media} playing={active !== null} alt="" className="block size-full object-cover" />
        </div>
      )}
    </section>
  );
}
