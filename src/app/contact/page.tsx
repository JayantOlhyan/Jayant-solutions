"use client";

import React from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Calendar, MessageCircle } from "lucide-react";
import ContactForm from "@/components/ContactFormWithPreset";
import { CONTACT_INFO } from "@/data/contact";

// Contact — v2 studio direction (DESIGN.md): paper / ink / flame, Bricolage display.
export default function ContactPage() {
  const commitments = [
    {
      index: "01",
      label: "Direct founder review",
      desc: "Every inquiry is reviewed personally by Jayant Olhyan, typically within 12–24 business hours.",
    },
    {
      index: "02",
      label: "Confidential & secure",
      desc: "Your project brief, technical requirements and business context stay strictly confidential.",
    },
    {
      index: "03",
      label: "Written scope first",
      desc: "You get a clear written scope, timeline and milestone plan before you commit budget.",
    },
    {
      index: "04",
      label: "Remote & global delivery",
      desc: "Based in New Delhi, working with businesses and founders across time zones.",
    },
  ];

  const channels = [
    {
      icon: Mail,
      label: "Email",
      value: CONTACT_INFO.email,
      href: `mailto:${CONTACT_INFO.email}`,
      external: false,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: CONTACT_INFO.phone,
      href: CONTACT_INFO.whatsappUrl,
      external: true,
    },
    {
      icon: Calendar,
      label: "15-min discovery call",
      value: "Pick a slot on Cal.com",
      href: CONTACT_INFO.bookingPath,
      external: false,
    },
  ];

  return (
    <PageTransition>
      <div className="studio min-h-screen pb-24 md:pb-32">
        {/* Hero */}
        <header className="container-x relative pb-14 pt-8 md:pb-20 md:pt-14">
          <p className="eyebrow flex items-center gap-2 text-[var(--muted)]">
            <span className="size-2 rounded-full bg-[var(--flame)]" aria-hidden="true" />
            Start a conversation · Replies within one working day
          </p>

          <div className="relative mt-6">
            <h1
              className="display-soft max-w-[14ch] text-[var(--ink)]"
              style={{ fontSize: "clamp(48px, 8.4vw, 132px)", lineHeight: 0.94, fontWeight: 700, letterSpacing: "-0.045em" }}
            >
              <span className="block">Tell us what</span>
              <span className="block text-[var(--flame-ink)]">you&apos;re building.</span>
            </h1>

            {/* Sticker chips — the same promises listed below, as a visual cue */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden lg:block">
              <span className="sticker absolute right-[18%] top-[6%] inline-flex -rotate-6">Founder replies</span>
              <span className="sticker absolute right-[4%] top-[38%] inline-flex rotate-[5deg]">Scope before spend</span>
              <span className="sticker absolute bottom-[4%] right-[24%] inline-flex -rotate-3 !bg-[var(--ink)] !text-[var(--paper)]">
                No sales relay
              </span>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-6 md:mt-14 md:flex-row md:items-end md:justify-between">
            <p className="max-w-[46ch] text-[17px] leading-[1.6] text-[var(--muted)] md:text-[19px]">
              Share your requirements, the workflow that slows you down, or your current website. You&apos;ll hear back from the
              founder, not a sales team.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href={CONTACT_INFO.bookingPath} className="btn-ink">
                Book a 15-min call
                <span className="dot" aria-hidden="true">
                  <ArrowUpRight className="size-5" />
                </span>
              </Link>
              <a href={CONTACT_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-line">
                WhatsApp us
              </a>
            </div>
          </div>
        </header>

        {/* Form + direct channels */}
        <section className="container-x grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
          <div id="brief" className="w-full scroll-mt-28 lg:col-span-7">
            <ContactForm />
          </div>

          <aside className="flex w-full flex-col gap-6 lg:sticky lg:top-24 lg:col-span-5">
            <div className="flex flex-col gap-8 rounded-[24px] bg-[var(--ink)] p-7 text-[var(--paper)] sm:p-9">
              <div>
                <p className="eyebrow text-white/60">Direct channels</p>
                <h2
                  className="display-soft mt-3 text-[var(--paper)]"
                  style={{ fontSize: "clamp(30px, 3.2vw, 44px)", lineHeight: 1.02, fontWeight: 700 }}
                >
                  Reach Jayant <span className="text-[var(--flame)]">directly.</span>
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-white/70">
                  No intermediaries or account managers. Use whichever channel suits you.
                </p>
              </div>

              <ul className="flex flex-col border-t border-white/15">
                {channels.map(({ icon: Icon, label, value, href, external }) => (
                  <li key={label} className="border-b border-white/15">
                    <a
                      href={href}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="group flex items-center gap-4 py-4"
                    >
                      <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white/10 text-[var(--flame)] transition-colors group-hover:bg-[var(--flame)] group-hover:text-[var(--ink)]">
                        <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="eyebrow block text-white/55">{label}</span>
                        <span className="mt-0.5 block break-all text-[16px] font-medium">{value}</span>
                      </span>
                      <ArrowUpRight
                        className="size-5 shrink-0 text-white/50 transition-transform duration-300 group-hover:rotate-45 group-hover:text-[var(--flame)]"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>

              <div className="flex items-start gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white/10 text-[var(--flame)]">
                  <MapPin className="size-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <div>
                  <p className="eyebrow text-white/55">Studio base & hours</p>
                  <p className="mt-0.5 text-[16px] font-medium">{CONTACT_INFO.location}</p>
                  <p className="text-[14px] text-white/60">{CONTACT_INFO.hours}</p>
                </div>
              </div>

              <div>
                <p className="eyebrow mb-3 text-white/55">Verified profiles</p>
                <div className="flex flex-wrap gap-2">
                  {CONTACT_INFO.socials.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-10 items-center gap-1 rounded-full bg-white/10 px-4 text-[14px] font-medium transition-colors hover:bg-[var(--flame)] hover:text-[var(--ink)]"
                    >
                      {item.name}
                      <ArrowUpRight className="size-3.5" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </section>

        {/* What happens next */}
        <section className="container-x mt-20 md:mt-28">
          <div className="mb-10 flex flex-col gap-3 md:mb-14">
            <p className="eyebrow text-[var(--muted)]">What you can count on</p>
            <h2
              className="display-soft max-w-[18ch]"
              style={{ fontSize: "clamp(30px, 4vw, 56px)", lineHeight: 1.04, fontWeight: 700 }}
            >
              Four promises, <span className="text-[var(--flame-ink)]">before any invoice.</span>
            </h2>
          </div>
          <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {commitments.map((item) => (
              <li
                key={item.index}
                className="group flex flex-col gap-3 rounded-[24px] border border-[var(--hair)] bg-[var(--sand)] p-6 transition-colors duration-300 hover:bg-[var(--flame)] md:p-7"
              >
                <span
                  className="display text-[var(--flame-ink)] transition-colors group-hover:text-[var(--ink)]"
                  style={{ fontSize: "56px" }}
                  aria-hidden="true"
                >
                  {item.index}
                </span>
                <h3 className="mt-4 text-[20px] font-semibold text-[var(--ink)]">{item.label}</h3>
                <p className="text-[15px] leading-relaxed text-[var(--muted)] transition-colors group-hover:text-[var(--ink)]">
                  {item.desc}
                </p>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </PageTransition>
  );
}
