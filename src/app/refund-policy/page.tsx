import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldAlert, ArrowLeft, CheckCircle2, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy | Jayant Web & AI Systems",
  description: "Official cancellation, refund terms, and milestone payment policies for Jayant Web & AI Systems digital growth and software engineering engagements.",
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-[#080C16] text-[#FAF7EE] font-sans selection:bg-[#C5A880]/20 selection:text-[#C5A880]">
      {/* Hero Header */}
      <div className="border-b border-[#1E2638] bg-[#0D1322]/80 backdrop-blur-md pt-28 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#A0A8B8] hover:text-[#C5A880] transition-colors mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Home
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#C5A880]/10 border border-[#C5A880]/30 flex items-center justify-center text-[#C5A880]">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#C5A880] font-semibold">
              Merchant Compliance & Consumer Protection
            </span>
          </div>
          <h1 className="font-serif text-3xl md:text-5xl font-normal text-[#FAF7EE] mb-4">
            Cancellation & Refund Policy
          </h1>
          <p className="text-sm text-[#A0A8B8] font-light max-w-2xl">
            Effective Date: January 1, 2026 &bull; Last Updated: August 2026. This policy governs commercial engagements, milestones, and payment handling for Jayant Web & AI Systems.
          </p>
        </div>
      </div>

      {/* Main Legal Content */}
      <main className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-[#FAF7EE] font-medium">
            1. Nature of Professional Services
          </h2>
          <p className="text-sm text-[#B0B8C8] leading-relaxed font-light">
            Jayant Web & AI Systems operates as a specialized digital systems, software development, and growth architecture consulting practice. Our commercial programs (including <strong>Foundation</strong>, <strong>Growth</strong>, and <strong>Scale</strong> packages) involve reserved senior technical capacity, customized engineering, proprietary content creation, and dedicated infrastructure deployment.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-[#FAF7EE] font-medium">
            2. Initial Strategy Phase & Cancellation Window
          </h2>
          <div className="bg-[#0D1322] border border-[#1E2638] rounded-xl p-6 space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
              <div>
                <strong className="text-sm text-[#FAF7EE] block">Prior to Kickoff Call Execution:</strong>
                <p className="text-xs text-[#A0A8B8] mt-1 leading-relaxed">
                  If a client requests cancellation after invoice payment but prior to the execution of the official Strategy Kickoff Session, a full 100% refund of the paid invoice amount will be issued without penalty.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-3 border-t border-[#1E2638]">
              <CheckCircle2 className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
              <div>
                <strong className="text-sm text-[#FAF7EE] block">Within First 14 Days Post-Kickoff:</strong>
                <p className="text-xs text-[#A0A8B8] mt-1 leading-relaxed">
                  If within the first 14 calendar days following the kickoff session, the engagement cannot proceed due to mutual misalignment, a pro-rated refund will be granted minus an administrative and discovery onboarding fee (not exceeding 20% of the initial invoice).
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-[#FAF7EE] font-medium">
            3. Milestone Delivery & Non-Refundable Scope
          </h2>
          <p className="text-sm text-[#B0B8C8] leading-relaxed font-light">
            Once custom software source code, cloud infrastructure, AI models, or approved campaign assets have been delivered, configured, or handed over to the client, the corresponding milestone fees are deemed earned and non-refundable.
          </p>
          <ul className="list-disc list-inside text-sm text-[#B0B8C8] space-y-2 pl-2 font-light">
            <li>Completed and approved technical discovery deliverables.</li>
            <li>Deployed cloud hosting, API integrations, and database schemas.</li>
            <li>Custom video production, published content, and verified outreach sequences.</li>
            <li>Third-party subscription fees incurred on the client&apos;s behalf (e.g. specialized domain purchases or external API credits).</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-[#FAF7EE] font-medium">
            4. Refund Processing & Timelines
          </h2>
          <p className="text-sm text-[#B0B8C8] leading-relaxed font-light">
            Approved refunds are initiated immediately through our payment gateway (Razorpay) and processed back to the original method of payment (UPI, Credit/Debit Card, Net Banking):
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 bg-[#0D1322] border border-[#1E2638] rounded-xl">
              <span className="font-mono text-xs text-[#C5A880] block mb-1">Method: UPI</span>
              <strong className="text-sm text-[#FAF7EE] block">24–48 Hours</strong>
              <span className="text-xs text-[#7A8499]">Credited directly to linked VPA</span>
            </div>
            <div className="p-4 bg-[#0D1322] border border-[#1E2638] rounded-xl">
              <span className="font-mono text-xs text-[#C5A880] block mb-1">Method: Cards / NetBanking</span>
              <strong className="text-sm text-[#FAF7EE] block">5–7 Business Days</strong>
              <span className="text-xs text-[#7A8499]">Standard bank settlement cycle</span>
            </div>
            <div className="p-4 bg-[#0D1322] border border-[#1E2638] rounded-xl">
              <span className="font-mono text-xs text-[#C5A880] block mb-1">Method: International</span>
              <strong className="text-sm text-[#FAF7EE] block">7–10 Business Days</strong>
              <span className="text-xs text-[#7A8499]">Subject to foreign exchange clearing</span>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-[#FAF7EE] font-medium">
            5. How to Request a Cancellation or Refund
          </h2>
          <p className="text-sm text-[#B0B8C8] leading-relaxed font-light">
            To initiate a formal cancellation or refund request, please notify us in writing via email with your Invoice Number, Proposal Link, and reason for cancellation:
          </p>
          <div className="p-6 bg-[#0D1322] border border-[#1E2638] rounded-xl space-y-2 text-xs font-mono">
            <p className="text-[#FAF7EE]">
              <strong className="text-[#C5A880]">Designated Support Email:</strong> hello@jayantolhyan.in
            </p>
            <p className="text-[#FAF7EE]">
              <strong className="text-[#C5A880]">Merchant Legal Name:</strong> Jayant Web & AI Systems
            </p>
            <p className="text-[#FAF7EE]">
              <strong className="text-[#C5A880]">Registered Office:</strong> New Delhi, India
            </p>
            <p className="text-[#A0A8B8] pt-2 font-sans">
              Requests are acknowledged within 24 hours on standard business days (Monday – Friday, 10:00 AM – 6:00 PM IST).
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
