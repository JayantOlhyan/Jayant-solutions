import { ArrowUpRight } from "lucide-react";
import { CONTACT_INFO } from "./data";

export default function ClosingCTA() {
  return (
    <section id="contact" aria-labelledby="cta-title" className="scroll-mt-24 px-2 pb-2 md:px-4 md:pb-4">
      <div className="relative overflow-hidden rounded-[28px] bg-[var(--flame)] px-4 py-24 text-center text-[var(--ink)] md:py-40">
        <p className="eyebrow">Let&apos;s build something together</p>
        <h2 id="cta-title" className="display-soft mx-auto mt-6 max-w-[18ch]" style={{ fontSize: "clamp(40px, 6.6vw, 112px)", lineHeight: 0.98, fontWeight: 700 }}>
          You don&apos;t need to figure out the technology.
        </h2>
        <p className="mx-auto mt-6 max-w-[52ch] text-[18px] leading-relaxed">
          That&apos;s what we&apos;re here for. Tell us what your business needs — we&apos;ll figure out the digital side.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <a href={CONTACT_INFO.bookingPath} className="btn-ink" data-magnetic>
            Let&apos;s talk. Let&apos;s build.
            <span className="dot !bg-[var(--paper)]" aria-hidden="true"><ArrowUpRight className="size-5" /></span>
          </a>
          <button type="button" data-open-contact className="btn-line">More ways to reach us</button>
        </div>
      </div>
    </section>
  );
}
