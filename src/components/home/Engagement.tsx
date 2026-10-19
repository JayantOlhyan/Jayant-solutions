import Link from "next/link";
import { Check } from "lucide-react";
import { packages, projectInclusions } from "@/data/content";
import Container from "./Container";

export default function Engagement() {
  return (
    <section id="pricing" aria-labelledby="pricing-title" className="scroll-mt-24 py-16 md:py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 id="pricing-title" className="text-[32px] md:text-[44px] font-medium leading-[1.08] tracking-[-0.03em] text-neutral-950">
            Pricing
          </h2>
          <p className="max-w-md text-[15px] leading-relaxed text-neutral-600">
            Starting prices. The final fixed price is in your written scope after a 15-minute call — no hourly billing.
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
                  {p.isPopular && <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium">Most chosen</span>}
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
              <p className={`mt-auto pt-5 border-t text-sm ${p.isPopular ? "border-white/15 text-neutral-300" : "border-neutral-200 text-neutral-500"}`}>
                Timeline: {p.timeline}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-10 grid gap-8 rounded-[10px] bg-neutral-50 p-7 md:grid-cols-12 md:p-10">
          <h3 className="md:col-span-4 text-xl font-medium tracking-[-0.015em] text-neutral-950">Included in every project</h3>
          <ul className="md:col-span-8 grid gap-x-8 gap-y-3 text-[15px] text-neutral-700 sm:grid-cols-2">
            {projectInclusions.map((item) => (
              <li key={item} className="flex gap-2.5">
                <Check className="mt-0.5 size-4 shrink-0 text-neutral-950" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-6 text-sm text-neutral-600">
          Need ongoing help after launch?{" "}
          <Link href="/pricing/maintenance-plans" className="font-medium text-neutral-950 underline underline-offset-4">
            See maintenance plans
          </Link>
          .
        </p>
      </Container>
    </section>
  );
}
