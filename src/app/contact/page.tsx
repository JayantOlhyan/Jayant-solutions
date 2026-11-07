"use client";

import React from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MapPin,
  Calendar,
  MessageCircle,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { CONTACT_INFO } from "@/data/contact";

export default function ContactPage() {
  const commitments = [
    {
      index: "01",
      label: "Direct Founder Review",
      desc: "Every inquiry is reviewed personally by Jayant Olhyan typically within 12–24 business hours.",
    },
    {
      index: "02",
      label: "Confidential & Secure",
      desc: "Your project brief, technical requirements, and business context remain strictly confidential.",
    },
    {
      index: "03",
      label: "Written Scope First",
      desc: "We provide a clear written scope, timeline, and milestone plan before you commit budget.",
    },
    {
      index: "04",
      label: "Remote & Global Delivery",
      desc: "Based in New Delhi, collaborating with businesses and founders across time zones.",
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pb-24 pt-8 text-left bg-white text-neutral-950">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col gap-14 md:gap-20">
          {/* Editorial Contact Hero */}
          <section className="pt-6 border-b border-neutral-200 pb-12 md:pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-8">
                <span className="font-mono text-xs uppercase tracking-wider text-neutral-500 font-medium block mb-3">
                  Start a Conversation
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-medium leading-[1.06] tracking-[-0.035em] text-neutral-950">
                  Tell us what you&apos;re building.
                </h1>
              </div>

              <div className="lg:col-span-4 flex flex-col items-start gap-5">
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                  Share your requirements, workflow bottleneck, or existing website URL. I review inquiries personally and typically reply within 12–24 business hours.
                </p>
                <Link
                  href={CONTACT_INFO.bookingPath}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white px-5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
                >
                  <Calendar className="size-4" aria-hidden="true" />
                  <span>Book a strategy call</span>
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </section>

          {/* Main Split: Real ContactForm Component + Direct Access Ledger */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 w-full">
              <ContactForm />
            </div>

            <div className="lg:col-span-5 flex flex-col gap-6 w-full">
              <div className="rounded-xl bg-neutral-950 border border-neutral-900 p-6 sm:p-8 text-white flex flex-col gap-6 shadow-sm">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 font-medium block mb-2">
                    Direct Channels
                  </span>
                  <h2 className="text-2xl font-medium tracking-tight text-white">
                    Reach Jayant Directly
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-300 mt-1.5 leading-relaxed">
                    No sales intermediaries or account relays. Reach out directly through whichever channel fits your workflow best.
                  </p>
                </div>

                <div className="divide-y divide-white/10 border-t border-b border-white/10 text-xs font-mono">
                  <div className="py-4 flex items-start gap-3.5">
                    <Mail className="size-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <span className="text-neutral-400 block mb-0.5">
                        Direct Email
                      </span>
                      <a
                        href={`mailto:${CONTACT_INFO.email}`}
                        className="text-sm text-white hover:text-neutral-300 transition-colors break-all"
                      >
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="py-4 flex items-start gap-3.5">
                    <MessageCircle className="size-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <span className="text-neutral-400 block mb-0.5">
                        WhatsApp Chat
                      </span>
                      <a
                        href={CONTACT_INFO.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white hover:text-neutral-300 transition-colors"
                      >
                        {CONTACT_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="py-4 flex items-start gap-3.5">
                    <MapPin className="size-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <span className="text-neutral-400 block mb-0.5">
                        Studio Base &amp; Hours
                      </span>
                      <span className="text-sm text-white block">
                        {CONTACT_INFO.location}
                      </span>
                      <span className="text-neutral-400 block mt-0.5">
                        {CONTACT_INFO.hours}
                      </span>
                    </div>
                  </div>

                  <div className="py-4 flex items-start gap-3.5">
                    <Calendar className="size-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <span className="text-neutral-400 block mb-0.5">
                        Discovery Call Scheduler
                      </span>
                      <Link
                        href={CONTACT_INFO.bookingPath}
                        className="inline-flex items-center gap-1.5 text-sm text-emerald-400 hover:underline mt-0.5"
                      >
                        <span>Book a call on Cal.com</span>
                        <ArrowRight className="size-3.5" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Social Profiles */}
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 block mb-3">
                    Verified Profiles
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {CONTACT_INFO.socials.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-full border border-white/15 bg-white/5 hover:border-white/40 text-xs font-mono text-neutral-200 hover:text-white transition-colors"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Bottom 4-Column Commitments */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-10 border-t border-neutral-200">
            {commitments.map((item) => (
              <div key={item.index} className="flex flex-col gap-1.5">
                <span className="font-mono text-xs font-semibold text-neutral-500">
                  /{item.index}
                </span>
                <h3 className="text-base font-medium text-neutral-950">
                  {item.label}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </section>
        </main>
      </div>
    </PageTransition>
  );
}
