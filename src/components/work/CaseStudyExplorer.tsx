"use client";

import { useId, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import { ArrowUpRight, Monitor, Smartphone } from "lucide-react";
import type { CaseStudy } from "@/data/content";

type Step = { key: string; label: string; title: string; body: string };

/** Problem → build → result, as a keyboard-friendly tab stepper. */
function StoryStepper({ steps }: { steps: Step[] }) {
  const [i, setI] = useState(0);
  const base = useId();
  const onKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const n = (i + (e.key === "ArrowRight" ? 1 : steps.length - 1)) % steps.length;
    setI(n);
    document.getElementById(`${base}-tab-${n}`)?.focus();
  };
  return (
    <div>
      <div role="tablist" aria-label="Project story" className="grid grid-cols-3 gap-2">
        {steps.map((s, n) => (
          <button
            key={s.key}
            id={`${base}-tab-${n}`}
            role="tab"
            aria-selected={i === n}
            aria-controls={`${base}-panel`}
            tabIndex={i === n ? 0 : -1}
            onClick={() => setI(n)}
            onKeyDown={onKey}
            className={`group flex min-h-[64px] flex-col items-start justify-between rounded-[16px] border p-3 text-left transition-colors md:p-4 ${
              i === n ? "border-[var(--ink)] bg-[var(--ink)] text-[var(--paper)]" : "border-[var(--hair)] hover:border-[var(--ink)]"
            }`}
          >
            <span className={`eyebrow ${i === n ? "text-white/60" : "text-[var(--muted)]"}`}>0{n + 1}</span>
            <span className="text-[16px] font-medium md:text-[18px]">{s.label}</span>
          </button>
        ))}
      </div>
      <div
        id={`${base}-panel`}
        role="tabpanel"
        aria-labelledby={`${base}-tab-${i}`}
        className="mt-4 rounded-[20px] bg-[var(--paper)] p-6 md:p-8"
      >
        <p className="eyebrow text-[var(--muted)]">{steps[i].title}</p>
        <p key={steps[i].key} className="cs-fade mt-3 text-[19px] leading-[1.55] md:text-[22px]">
          {steps[i].body}
        </p>
        <div className="mt-6 h-1 overflow-hidden rounded-full bg-[var(--hair)]" aria-hidden="true">
          <div className="h-full bg-[var(--flame)] transition-[width] duration-500" style={{ width: `${((i + 1) / steps.length) * 100}%` }} />
        </div>
      </div>
    </div>
  );
}

/** Before / after switch: same slot, two states of the client's day. */
function BeforeAfter({ before, after }: { before: string; after: string }) {
  const [on, setOn] = useState(false);
  return (
    <div className="rounded-[24px] bg-[var(--paper)] p-6 md:p-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="eyebrow text-[var(--muted)]">{on ? "After launch" : "Before"}</p>
        <button
          type="button"
          role="switch"
          aria-checked={on}
          onClick={() => setOn((v) => !v)}
          className="inline-flex min-h-11 items-center gap-3 rounded-full border border-[var(--ink)] px-2 py-1 pr-4 text-[15px] font-medium"
        >
          <span className={`relative h-7 w-12 rounded-full transition-colors ${on ? "bg-[var(--flame)]" : "bg-[var(--hair)]"}`} aria-hidden="true">
            <span className={`absolute top-1 size-5 rounded-full bg-[var(--ink)] transition-[left] duration-300 ${on ? "left-6" : "left-1"}`} />
          </span>
          Show {on ? "before" : "after"}
        </button>
      </div>
      <p key={String(on)} className="cs-fade display-soft mt-6 max-w-[34ch]" style={{ fontSize: "clamp(24px, 3vw, 40px)", lineHeight: 1.12, fontWeight: 600 }}>
        {on ? after : before}
      </p>
    </div>
  );
}

/** Desktop / mobile view of the real site. Most client sites forbid being framed, so we show
 *  real captures and hand off to the live site in a new tab. */
function LivePreview({ url, name, image, mobileImage }: { url: string; name: string; image: string; mobileImage?: string }) {
  const [mobile, setMobile] = useState(false);
  const host = url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  const isMobile = mobile && !!mobileImage;
  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        {mobileImage ? (
          <div className="inline-flex rounded-full border border-[var(--hair)] p-1" role="group" aria-label="Preview size">
            {[
              { m: false, label: "Desktop", Icon: Monitor },
              { m: true, label: "Mobile", Icon: Smartphone },
            ].map(({ m, label, Icon }) => (
              <button
                key={label}
                type="button"
                aria-pressed={mobile === m}
                onClick={() => setMobile(m)}
                className={`inline-flex min-h-10 items-center gap-2 rounded-full px-4 text-[14px] font-medium transition-colors ${
                  mobile === m ? "bg-[var(--ink)] text-[var(--paper)]" : ""
                }`}
              >
                <Icon className="size-4" aria-hidden="true" />
                {label}
              </button>
            ))}
          </div>
        ) : (
          <span />
        )}
        <a href={url} target="_blank" rel="noopener noreferrer" className="btn-ink">
          Try the live site
          <span className="dot !bg-[#F7F1EA]" aria-hidden="true">
            <ArrowUpRight className="size-5" />
          </span>
        </a>
      </div>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${name} live in a new tab`}
        className={`group mx-auto block overflow-hidden border border-[var(--hair)] bg-white shadow-[0_40px_80px_-40px_rgba(22,19,16,.45)] transition-[max-width,border-radius] duration-500 ${
          isMobile ? "max-w-[340px] rounded-[40px] border-[10px] border-[var(--ink)]" : "max-w-full rounded-[18px]"
        }`}
      >
        {!isMobile && (
          <div className="flex items-center gap-2 border-b border-[var(--hair)] bg-[var(--sand)] px-4 py-2.5">
            <span className="size-2.5 rounded-full bg-[#E5534B]" aria-hidden="true" />
            <span className="size-2.5 rounded-full bg-[#F2B544]" aria-hidden="true" />
            <span className="size-2.5 rounded-full bg-[#4CB963]" aria-hidden="true" />
            <span className="ml-3 truncate rounded-full bg-[var(--paper)] px-3 py-1 font-mono text-[12px] text-[var(--muted)]">{host}</span>
          </div>
        )}
        <div key={String(isMobile)} className={`cs-fade relative ${isMobile ? "aspect-[390/664]" : "aspect-[16/10]"}`}>
          <Image
            src={isMobile ? mobileImage! : image}
            alt={`${name} on ${isMobile ? "a phone" : "desktop"}`}
            fill
            sizes={isMobile ? "340px" : "(min-width: 1024px) 1100px, 100vw"}
            className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
          />
        </div>
      </a>
    </div>
  );
}

/** Feature list where each item can be "checked off" — a quick scan of what shipped. */
function FeatureBoard({ features, tech }: { features: string[]; tech: string[] }) {
  const [open, setOpen] = useState<string | null>(features[0] ?? null);
  return (
    <div className="grid gap-8 md:grid-cols-12">
      <ul className="flex flex-col gap-2 md:col-span-7">
        {features.map((f, n) => (
          <li key={f}>
            <button
              type="button"
              aria-pressed={open === f}
              onClick={() => setOpen(f)}
              onMouseEnter={() => setOpen(f)}
              className={`flex w-full min-h-14 items-center gap-4 rounded-[14px] border px-4 text-left text-[17px] font-medium transition-colors ${
                open === f ? "border-[var(--flame)] bg-[var(--paper)]" : "border-[var(--hair)]"
              }`}
            >
              <span className="eyebrow w-6 text-[var(--muted)]">{String(n + 1).padStart(2, "0")}</span>
              {f}
            </button>
          </li>
        ))}
      </ul>
      <div className="md:col-span-5">
        <p className="eyebrow text-[var(--muted)]">Built with</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {tech.map((t) => (
            <li key={t} className="rounded-full border border-[var(--ink)] px-4 py-2 text-[15px] font-medium">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function CaseStudyExplorer({ study, name, mobileImage }: { study: CaseStudy; name: string; mobileImage?: string }) {
  const steps: Step[] = [
    { key: "problem", label: "Problem", title: "What wasn't working", body: study.problem },
    { key: "build", label: "Build", title: "What we built", body: study.solution },
    { key: "result", label: "Result", title: "Where it stands", body: study.result },
  ];
  return (
    <>
      <section className="bg-[var(--sand)] py-16 md:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow text-[var(--muted)]">The story</p>
            <h2 className="display-soft mt-3" style={{ fontSize: "clamp(30px, 4vw, 52px)", lineHeight: 1.04, fontWeight: 700 }}>
              Problem, build, result.
            </h2>
            <p className="mt-4 text-[17px] leading-[1.6] text-[var(--muted)]">Click through the three steps, or use the arrow keys.</p>
          </div>
          <div className="lg:col-span-7">
            <StoryStepper steps={steps} />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-x">
          <p className="eyebrow text-[var(--muted)]">Before and after</p>
          <h2 className="display-soft mb-8 mt-3" style={{ fontSize: "clamp(30px, 4vw, 52px)", lineHeight: 1.04, fontWeight: 700 }}>
            Flip the switch.
          </h2>
          <BeforeAfter before={study.beforeState} after={study.afterState} />
        </div>
      </section>

      {study.liveWebsite && (
        <section className="bg-[var(--sand)] py-16 md:py-24">
          <div className="container-x">
            <p className="eyebrow text-[var(--muted)]">Live product</p>
            <h2 className="display-soft mb-8 mt-3" style={{ fontSize: "clamp(30px, 4vw, 52px)", lineHeight: 1.04, fontWeight: 700 }}>
              See it on any screen.
            </h2>
            <LivePreview url={study.liveWebsite} name={name} image={study.image} mobileImage={mobileImage} />
          </div>
        </section>
      )}

      <section className="py-16 md:py-24">
        <div className="container-x">
          <p className="eyebrow text-[var(--muted)]">What shipped</p>
          <h2 className="display-soft mb-8 mt-3" style={{ fontSize: "clamp(30px, 4vw, 52px)", lineHeight: 1.04, fontWeight: 700 }}>
            Features and stack.
          </h2>
          <FeatureBoard features={study.features ?? []} tech={study.tech} />
        </div>
      </section>
    </>
  );
}
