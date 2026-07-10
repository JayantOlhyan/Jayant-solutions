"use client";

import React, { useState } from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function RefundCancellationPolicyPage() {
  const [activeSection, setActiveSection] = useState("1. General Policy");

  const sections = [
    {
      id: "1. General Policy",
      title: "1. General Policy",
      content: (
        <>
          <p>We value your business and aim to deliver high-quality services. Our refund and cancellation terms are designed to be fair to both our clients and our team.</p>
        </>
      )
    },
    {
      id: "2. Cancellation by Client",
      title: "2. Cancellation by Client",
      content: (
        <>
          <p>You may cancel your project or service at any time by notifying us in writing. The effective date of cancellation will be the date we receive your written request.</p>
        </>
      )
    },
    {
      id: "3. Refund Eligibility",
      title: "3. Refund Eligibility",
      content: (
        <>
          <p>Refunds are applicable based on the stage of the project at the time of cancellation:</p>
          <ul className="list-disc pl-5 space-y-1.5 mt-2">
            <li><strong>100% refund</strong> if the project has not yet been started.</li>
            <li><strong>70% refund</strong> if the project is in the initial planning or requirement gathering stage.</li>
            <li><strong>50% refund</strong> if the project is in progress (design, development, or content creation).</li>
            <li><strong>No refund</strong> once the project is in the final stages or completed.</li>
          </ul>
        </>
      )
    },
    {
      id: "4. Non-Refundable Items",
      title: "4. Non-Refundable Items",
      content: (
        <>
          <p>The following are non-refundable:</p>
          <ul className="list-disc pl-5 space-y-1.5 mt-2">
            <li>Domain names, hosting, third-party licenses, or subscriptions purchased on your behalf.</li>
            <li>Any third-party service fees (e.g., APIs, payment gateway charges).</li>
            <li><strong>Partial work delivered</strong> including research, design, or development.</li>
          </ul>
        </>
      )
    },
    {
      id: "5. Refund Process",
      title: "5. Refund Process",
      content: (
        <>
          <p>Eligible refunds will be processed within 7–10 business days to the original payment method after deducting any applicable charges or expenses incurred.</p>
        </>
      )
    },
    {
      id: "6. Cancellation by Us",
      title: "6. Cancellation by Us",
      content: (
        <>
          <p>We reserve the right to cancel a project if there is a breach of terms, non-payment, or inappropriate behavior. In such cases, we will inform you in advance and provide a refund for any eligible amount.</p>
        </>
      )
    },
    {
      id: "7. Dispute Resolution",
      title: "7. Dispute Resolution",
      content: (
        <>
          <p>If you are not satisfied with our policy or have any dispute, please contact us first. We will work with you to resolve the issue amicably.</p>
        </>
      )
    },
    {
      id: "8. Changes to This Policy",
      title: "8. Changes to This Policy",
      content: (
        <>
          <p>We may update this Refund & Cancellation Policy from time to time. Any changes will be posted on this page with the updated &quot;Last Updated&quot; date.</p>
        </>
      )
    },
    {
      id: "9. Contact Us",
      title: "9. Contact Us",
      content: (
        <>
          <p>For any refund or cancellation requests, please contact us:</p>
          <div className="mt-3 flex flex-wrap gap-4 text-xs font-mono">
            <span>✉️ jayantwebaisystems@gmail.com</span>
            <span>📞 +91 96673 44125</span>
            <span>📍 New Delhi, India</span>
          </div>
        </>
      )
    }
  ];

  return (
    <PageTransition>
      <div className="hog-grid min-h-screen pb-20 pt-10 text-left">
        <main className="max-w-none px-6 md:px-12 lg:px-16 flex flex-col gap-20 md:gap-28">
          
          {/* Breadcrumbs */}
          <nav className="text-xs font-mono text-text-muted flex items-center gap-2 pt-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>&gt;</span>
            <span className="text-text-muted">Legal</span>
            <span>&gt;</span>
            <span className="text-text-base">Refund & Cancellation Policy</span>
          </nav>

          {/* Hero */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <span className="font-mono text-[9px] uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 px-2.5 py-0.5 rounded-full mb-4">
                GET IN TOUCH
              </span>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-base leading-[1.08] mb-6">
                Refund & <br /> Cancellation{" "}
                <span className="text-primary underline decoration-primary/40 decoration-4 underline-offset-8">
                  Policy
                </span>
              </h1>
              <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl mb-6">
                At Jayant Web & AI Systems, we are committed to transparency and customer satisfaction. Please read our Refund & Cancellation Policy carefully before purchasing our services.
              </p>
              
              <div className="flex flex-wrap gap-4 text-[10px] font-mono font-bold text-text-muted">
                <span className="flex items-center gap-1">📅 Last Updated: 12 May 2025</span>
                <span className="flex items-center gap-1">🗓️ Effective Date: 12 May 2025</span>
              </div>
            </div>

            {/* Right: Graphic mockup */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-[24px] overflow-hidden border border-border-custom bg-neutral-900 shadow-2xl p-6 flex justify-between items-center text-white">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-xl">
                    🪙
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-bold text-white leading-none">Refund Policy</span>
                    <span className="text-[9px] text-white/50 mt-1 uppercase tracking-widest leading-none">Refunds & cancellations</span>
                  </div>
                </div>
              </div>
            </div>

          </section>

          {/* Navigation & details */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start py-8 border-t border-border-custom/20 pt-16">
            
            {/* Left nav */}
            <div className="lg:col-span-4 flex flex-col gap-6 text-left w-full sticky top-28">
              <div className="hog-card rounded-3xl p-6 bg-card-bg/60 border border-border-custom flex flex-col gap-4">
                <h3 className="font-serif text-sm font-bold text-text-base border-b border-border-custom pb-2">On this Page</h3>
                <div className="flex flex-col gap-1.5">
                  {sections.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => {
                        setActiveSection(s.id);
                        document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className={`text-left text-[11px] font-mono font-bold px-3 py-2 rounded-xl transition-all ${
                        activeSection === s.id
                          ? "bg-primary/10 text-primary"
                          : "text-text-muted hover:text-text-base hover:bg-neutral-100 dark:hover:bg-neutral-900"
                      }`}
                    >
                      {s.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Need Help box */}
              <div className="hog-card rounded-3xl p-6 bg-card-bg/60 border border-border-custom flex flex-col gap-3">
                <h4 className="font-serif text-xs font-bold text-text-base flex items-center gap-2">
                  <span>🙋</span> Need Help?
                </h4>
                <p className="text-[10px] text-text-muted leading-relaxed">
                  If you have any questions regarding refunds or cancellations, our support team is here to help.
                </p>
                <Link
                  href="/contact"
                  className="w-full text-center border border-border-custom bg-white hover:bg-neutral-50 dark:bg-card-bg dark:hover:bg-neutral-900 py-2 text-[10px] font-mono font-bold rounded-lg block mt-2 text-text-base"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right details */}
            <div className="lg:col-span-8 flex flex-col gap-10 text-left w-full">
              {sections.map((s) => (
                <div
                  key={s.id}
                  id={s.id}
                  className="border-b border-border-custom/30 pb-8 scroll-mt-28"
                >
                  <h3 className="font-serif text-base md:text-lg font-bold text-text-base mb-4">{s.title}</h3>
                  <div className="text-xs md:text-sm text-text-muted leading-relaxed space-y-2">
                    {s.content}
                  </div>
                </div>
              ))}
            </div>

          </section>

        </main>
      </div>
    </PageTransition>
  );
}
