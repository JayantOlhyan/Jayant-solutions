"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { useLenis } from "@/components/v2/motion/SmoothScroll";
import { CONTACT_INFO } from "./data";

/**
 * Homepage header + full-screen "Let's talk" overlay.
 * Any element with [data-open-contact] on the page opens the overlay.
 */
export default function StudioHeader() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  const { start, stop } = useLenis();

  const openOverlay = useCallback((trigger?: HTMLElement | null) => {
    returnFocus.current = trigger ?? (document.activeElement as HTMLElement | null);
    setOpen(true);
  }, []);
  const close = useCallback(() => setOpen(false), []);

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y < 120) setHidden(false);
        else if (Math.abs(y - lastY.current) > 8) setHidden(y > lastY.current);
        lastY.current = y;
        raf = 0;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Delegate: any [data-open-contact] opens the overlay
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const t = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-open-contact]");
      if (t) {
        e.preventDefault();
        openOverlay(t);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [openOverlay]);

  // Overlay: lock scroll, trap focus, Escape closes, restore focus
  useEffect(() => {
    if (!open) return;
    stop();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const dialog = dialogRef.current;
    const focusables = () =>
      Array.from(dialog?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])") ?? []);
    focusables()[0]?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") return close();
      if (e.key !== "Tab") return;
      const f = focusables();
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      start();
      returnFocus.current?.focus();
    };
  }, [open, close, start, stop]);

  return (
    <>
      <header
        className="studio-header fixed inset-x-0 top-0 z-50"
        data-hidden={hidden && !open ? "true" : "false"}
      >
        <div className="mx-auto grid h-[72px] max-w-[1360px] grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 md:px-10">
          <nav aria-label="Primary" className="hidden items-center gap-2 md:flex">
            <Link href="/services" className="pill">Services</Link>
            <Link href="/industries" className="pill">Industries</Link>
            <a href="#work" className="pill">Work</a>
            <Link href="/about" className="pill">About</Link>
          </nav>
          <Link
            href="/"
            aria-label="Jayant Systems — home"
            className="display col-start-1 justify-self-start whitespace-nowrap text-[19px] leading-none tracking-[-0.03em] text-[var(--flame-ink)] md:col-start-2 md:justify-self-center md:text-[26px]"
          >
            JAYANT SYSTEMS
          </Link>
          <div className="col-start-3 flex items-center justify-end gap-5">
            <span className="hidden text-right text-[13px] leading-tight text-[var(--muted)] lg:block">
              Mon – Sat
              <br />
              9:00 – 20:00 IST
            </span>
            <button type="button" onClick={(e) => openOverlay(e.currentTarget)} className="btn-ink !min-h-11 !text-[15px] !py-1 !pl-4 !pr-1" aria-haspopup="dialog">
              Let&apos;s talk
              <span className="dot !h-9 !w-9" aria-hidden="true"><ArrowUpRight className="size-4" /></span>
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-overlay-title"
          data-lenis-prevent
          className="fixed inset-0 z-[60] overflow-y-auto bg-[var(--ink)] text-[var(--paper)] [animation:overlay-in_.6s_cubic-bezier(.16,1,.3,1)]"
        >
          <style>{`@keyframes overlay-in{from{clip-path:inset(0 0 100% 0)}to{clip-path:inset(0 0 0 0)}}@media (prefers-reduced-motion: reduce){[role=dialog]{animation:none!important}}`}</style>
          <div className="mx-auto flex min-h-full max-w-[1360px] flex-col px-4 pb-10 md:px-10">
            <div className="flex h-[72px] items-center justify-between">
              <span className="display text-[22px] tracking-[-0.03em] text-[var(--flame)] md:text-[26px]">JAYANT SYSTEMS</span>
              <button type="button" onClick={close} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/25 px-4 text-[15px] hover:bg-white hover:text-[var(--ink)]">
                Close <X className="size-4" aria-hidden="true" />
              </button>
            </div>
            <nav aria-label="Site" className="flex flex-wrap gap-2 pt-4">
              {[
                ["Services", "/services"],
                ["Industries", "/industries"],
                ["Work", "/portfolio"],
                ["About", "/about"],
                ["Process", "/process"],
                ["Pricing", "/pricing"],
              ].map(([label, href]) => (
                <a key={href} href={href} onClick={close} className="inline-flex min-h-11 items-center rounded-full bg-white/10 px-4 text-[15px] hover:bg-[var(--flame)] hover:text-[var(--ink)]">
                  {label}
                </a>
              ))}
            </nav>
            <div className="grid flex-1 items-end gap-12 py-10 lg:grid-cols-12">
              <h2 id="contact-overlay-title" className="display uppercase lg:col-span-7" style={{ fontSize: "clamp(56px, 9vw, 150px)" }}>
                Got a<br />project<br /><span className="text-[var(--flame)]">in mind?</span>
              </h2>
              <div className="flex flex-col gap-8 lg:col-span-5">
                <p className="text-lg text-white/70">Or just say hello. We reply within one working day.</p>
                <div className="flex flex-col gap-3">
                  <a href={CONTACT_INFO.bookingPath} className="btn-ink !bg-[var(--paper)] !text-[var(--ink)] w-full justify-between">
                    Book a 15-min call
                    <span className="dot" aria-hidden="true"><ArrowUpRight className="size-5" /></span>
                  </a>
                  <a href={CONTACT_INFO.inquiryPath} className="inline-flex min-h-[52px] items-center justify-between rounded-full border border-white/25 px-6 text-[16px] font-medium hover:bg-white hover:text-[var(--ink)]">
                    Send a project brief <ArrowUpRight className="size-5" aria-hidden="true" />
                  </a>
                </div>
                <dl className="grid grid-cols-1 gap-5 border-t border-white/15 pt-6 sm:grid-cols-2">
                  <div>
                    <dt className="eyebrow text-white/50">Email</dt>
                    <dd className="mt-1"><a className="draw text-[17px]" href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a></dd>
                  </div>
                  <div>
                    <dt className="eyebrow text-white/50">WhatsApp</dt>
                    <dd className="mt-1"><a className="draw text-[17px]" href={CONTACT_INFO.whatsappUrl}>{CONTACT_INFO.whatsappNumber}</a></dd>
                  </div>
                  <div>
                    <dt className="eyebrow text-white/50">Hours</dt>
                    <dd className="mt-1 text-[17px]">{CONTACT_INFO.hours}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow text-white/50">Elsewhere</dt>
                    <dd className="mt-1 flex flex-wrap gap-x-4 text-[17px]">
                      {CONTACT_INFO.socials.slice(0, 3).map((s) => (
                        <a key={s.name} className="draw" href={s.href} target="_blank" rel="noopener noreferrer">{s.name}</a>
                      ))}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
