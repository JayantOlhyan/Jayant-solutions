import Link from "next/link";
import { Check, ArrowUpRight } from "lucide-react";
import { packages } from "@/data/content";
import Container from "./Container";
import { CONTACT_INFO } from "@/data/contact";

const standardInclusions = [
  "Milestone-based payment schedules",
  "100% source code ownership transferred on final payment",
  "Private staging preview links for milestone reviews",
  "Architecture and deployment setup documentation",
  "30 days post-launch technical bug fixes and support",
  "Automated backups (for database-backed projects)",
  "Direct communication updates via Slack or WhatsApp",
];

export default function Engagement() {
  return (
    <section id="pricing" aria-labelledby="pricing-title" className="scroll-mt-24 py-16 md:py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-neutral-500 font-medium block mb-2">
              Engagement Models
            </span>
            <h2 id="pricing-title" className="text-[32px] md:text-[44px] font-medium leading-[1.08] tracking-[-0.03em] text-neutral-950">
              Pricing
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-neutral-600">
            Starting packages. Final fixed pricing and deliverables are agreed upon in your written scope proposal after discovery—never surprise hourly billing.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {packages.map((p) => (
            <li
              key={p.name}
              className={`flex flex-col gap-6 rounded-[10px] border p-7 md:p-8 ${
                p.isPopular ? "border-neutral-950 bg-neutral-950 text-white" : "border-neutral-200 bg-white text-neutral-950"
              }`}
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-medium">{p.name}</h3>
                  {p.isPopular && (
                    <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium tracking-wide">
                      End-to-End Build
                    </span>
                  )}
                </div>
                <p className={`text-sm ${p.isPopular ? "text-neutral-300" : "text-neutral-500"}`}>{p.idealFor}</p>
              </div>
              <p className="text-[36px] font-medium tracking-[-0.03em]">
                <span className={`mr-1.5 text-base font-normal ${p.isPopular ? "text-neutral-300" : "text-neutral-500"}`}>From</span>
                {p.price}
              </p>
              <ul className="flex flex-col gap-2.5 text-[15px]">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2.5">
                    <Check className={`mt-0.5 size-4 shrink-0 ${p.isPopular ? "text-neutral-300" : "text-neutral-500"}`} aria-hidden="true" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className={`mt-auto pt-5 border-t flex flex-col gap-3.5 ${p.isPopular ? "border-white/15" : "border-neutral-200"}`}>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className={p.isPopular ? "text-neutral-400" : "text-neutral-500"}>Typical Timeline</span>
                  <span className={p.isPopular ? "text-white font-medium" : "text-neutral-950 font-medium"}>{p.timeline}</span>
                </div>
                <Link
                  href={CONTACT_INFO.bookingPath}
                  className={`inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full text-[14px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${
                    p.isPopular
                      ? "bg-white text-neutral-950 hover:bg-neutral-100 focus-visible:outline-white"
                      : "bg-neutral-950 text-white hover:bg-neutral-800 focus-visible:outline-neutral-950"
                  }`}
                >
                  <span>Book a call</span>
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10 grid gap-8 rounded-[10px] bg-neutral-50 p-7 md:grid-cols-12 md:p-10">
          <h3 className="md:col-span-4 text-xl font-medium tracking-[-0.015em] text-neutral-950">Included in every project</h3>
          <ul className="md:col-span-8 grid gap-x-8 gap-y-3 text-[15px] text-neutral-700 sm:grid-cols-2">
            {standardInclusions.map((item) => (
              <li key={item} className="flex gap-2.5">
                <Check className="mt-0.5 size-4 shrink-0 text-neutral-950" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-6 text-sm text-neutral-600">
          Need ongoing updates after launch?{" "}
          <Link href="/pricing/maintenance-plans" className="font-medium text-neutral-950 underline underline-offset-4 hover:text-neutral-600">
            See maintenance plans
          </Link>
          .
        </p>
      </Container>
    </section>
  );
}
