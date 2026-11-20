import { Plus } from "lucide-react";
import { faqs } from "@/data/framework";
import JsonLd from "@/components/seo/JsonLd";
import { createFAQSchema } from "@/lib/seo/schema";

export default function StudioFAQ() {
  const items = faqs.filter((f) => f.home);
  return (
    <section aria-labelledby="faq-title" className="py-24 md:py-36">
      <JsonLd schema={createFAQSchema(items)} />
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 id="faq-title" className="display-soft" style={{ fontSize: "clamp(40px, 5vw, 80px)", lineHeight: 1, fontWeight: 700 }}>
            Questions,<br /><span className="text-[var(--flame-ink)]">answered</span>
          </h2>
          <a href="/faq" className="draw mt-6 inline-block text-[16px] font-medium">All questions</a>
        </div>
        <div className="lg:col-span-8">
          {items.map((f) => (
            <details key={f.q} className="faq border-t border-[var(--hair)] last:border-b">
              <summary className="flex min-h-20 items-center justify-between gap-6 py-6">
                <span className="display-soft text-[22px] md:text-[28px]">{f.q}</span>
                <span className="faq-icon grid size-11 shrink-0 place-items-center rounded-full border border-[var(--ink)]" aria-hidden="true">
                  <Plus className="size-5" />
                </span>
              </summary>
              <p className="max-w-[62ch] pb-8 text-[17px] leading-relaxed text-[var(--muted)]">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
