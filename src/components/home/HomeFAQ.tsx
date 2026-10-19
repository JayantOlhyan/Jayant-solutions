import Link from "next/link";
import { Plus } from "lucide-react";
import { faqItems } from "@/data/content";
import Container from "./Container";

export default function HomeFAQ() {
  const top = faqItems.slice(0, 6);
  return (
    <section id="faq" aria-labelledby="faq-title" className="scroll-mt-24 bg-neutral-50 py-16 md:py-24">
      <Container>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 id="faq-title" className="text-[32px] md:text-[44px] font-medium leading-[1.08] tracking-[-0.03em] text-neutral-950">
              Questions
            </h2>
            <Link href="/faq" className="mt-4 inline-flex min-h-11 items-center text-[15px] font-medium text-neutral-950 underline underline-offset-4">
              All {faqItems.length} answers
            </Link>
          </div>
          <div className="md:col-span-8">
            {top.map((f) => (
              <details key={f.question} className="group border-b border-neutral-300 first:border-t">
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
                  <span className="text-lg font-medium tracking-[-0.01em] text-neutral-950">{f.question}</span>
                  <Plus className="size-5 shrink-0 text-neutral-500 transition-transform duration-200 group-open:rotate-45" aria-hidden="true" />
                </summary>
                <p className="max-w-[65ch] pb-6 text-[15px] leading-relaxed text-neutral-700">{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
