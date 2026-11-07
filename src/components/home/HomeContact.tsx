import Link from "next/link";
import { Calendar, ArrowUpRight, MessageCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Container from "./Container";
import { CONTACT_INFO } from "@/data/contact";

const channels = [
  { label: "Direct Email", value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
  { label: "WhatsApp (Fastest)", value: CONTACT_INFO.whatsappNumber, href: CONTACT_INFO.whatsappUrl },
  { label: "Phone", value: CONTACT_INFO.phone, href: CONTACT_INFO.phoneTel },
];

const nextSteps = [
  "I review your brief, live URL, or the business problem you describe.",
  "We hold a focused technical discovery call to define scope.",
  "You receive a written scope, architecture plan, and fixed-milestone proposal.",
];

export default function HomeContact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-24 py-16 md:py-28 bg-neutral-50/50 border-t border-neutral-200">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12">
          {/* Left Column: Direct channels, calendar booking card & process */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-neutral-500 font-medium block mb-3">
                Start a Conversation
              </span>
              <h2 id="contact-title" className="text-[44px] md:text-[64px] font-medium leading-[1.02] tracking-[-0.04em] text-neutral-950">
                Let&apos;s talk.
              </h2>
              <p className="mt-4 max-w-md text-base md:text-lg leading-relaxed text-neutral-700">
                Tell me about your business and the problem you want solved. I review and reply personally within 12–24 business hours.
              </p>
            </div>

            {/* Direct Calendar Booking Card */}
            <div className="rounded-xl border border-neutral-900 bg-neutral-950 p-6 md:p-7 text-white flex flex-col gap-4 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 font-medium">
                  Direct Discovery
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                  <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live Scheduler
                </span>
              </div>
              <div>
                <h3 className="text-xl font-medium tracking-tight text-white">Book a strategy call</h3>
                <p className="mt-1 text-sm text-neutral-300 leading-relaxed">
                  Pick a convenient time slot directly on my calendar via Cal.com. 100% free, confidential, and zero obligation.
                </p>
              </div>
              <div className="flex flex-wrap gap-2.5 pt-2">
                <Link
                  href={CONTACT_INFO.bookingPath}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-5 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200"
                >
                  <Calendar className="size-4" aria-hidden="true" />
                  <span>Book a call</span>
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </Link>
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-neutral-700 px-5 text-sm font-medium text-white transition-colors hover:border-neutral-500"
                >
                  <MessageCircle className="size-4 text-emerald-400" aria-hidden="true" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Direct Channel Links */}
            <ul className="flex flex-col border-t border-neutral-200">
              {channels.map((c) => (
                <li key={c.label} className="border-b border-neutral-200">
                  <a
                    href={c.href}
                    className="flex min-h-14 flex-wrap items-center justify-between gap-x-6 gap-y-1 py-3.5 hover:text-neutral-500 transition-colors"
                  >
                    <span className="text-sm text-neutral-500">{c.label}</span>
                    <span className="text-[16px] font-medium font-mono">{c.value}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* What happens next */}
            <div className="rounded-lg border border-neutral-200 bg-white p-5">
              <h3 className="text-sm font-medium text-neutral-950">What happens next</h3>
              <ol className="mt-3 flex flex-col gap-2.5 text-[14px] leading-relaxed text-neutral-700">
                {nextSteps.map((s, i) => (
                  <li key={s} className="flex gap-3">
                    <span className="font-mono text-xs text-neutral-400 font-semibold">0{i + 1}</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
            </div>

            <p className="text-xs text-neutral-500 font-mono">
              {CONTACT_INFO.location} · {CONTACT_INFO.hours}
            </p>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-neutral-200 p-6 md:p-8 shadow-sm">
            <div className="mb-6">
              <h3 className="text-2xl font-medium tracking-tight text-neutral-950">Send a written project brief</h3>
              <p className="mt-1 text-sm text-neutral-600">
                Provide as much context as you have today. You will receive a written response and scoping recommendation.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
