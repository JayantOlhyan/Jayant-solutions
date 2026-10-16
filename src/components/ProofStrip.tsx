import React from "react";
import Link from "next/link";
import { ExternalLink, ArrowUpRight } from "lucide-react";

const VERIFIED_DELIVERABLES = [
  {
    index: "01",
    name: "Healthkinator",
    classification: "Deployed AI Application",
    domain: "Healthcare Triage",
    deliverable:
      "Bilingual LLM symptom analysis engine & structured triage interface",
    stack: "Next.js • FastAPI • Gemini API • PostgreSQL",
    liveUrl: "https://healthkinator-1.netlify.app",
    repoUrl: "https://github.com/JayantOlhyan/healthkinator-1-",
  },
  {
    index: "02",
    name: "Teacher Sathi",
    classification: "Client Engagement",
    domain: "Education Technology",
    deliverable:
      "Centralized educator workspace for lesson scheduling & classroom resources",
    stack: "Next.js • React • Node.js • PostgreSQL",
    caseStudyAnchor: "#work",
  },
  {
    index: "03",
    name: "MSIT Portal Enhancement",
    classification: "Academic Portal",
    domain: "Higher Education",
    deliverable:
      "Modernized student portal with department directories & feedback routing",
    stack: "React • Next.js • Tailwind CSS • Firebase",
    liveUrl: "https://msit-website.netlify.app",
  },
  {
    index: "04",
    name: "Sentinel AI",
    classification: "Hackathon Prototype",
    domain: "Cybersecurity & Fraud",
    deliverable:
      "Real-time URL, email, and SMS phishing detection with risk scoring",
    stack: "Next.js • FastAPI • Gemini API • PostgreSQL",
    liveUrl: "https://sentinel-ai-1.netlify.app",
  },
];

export default function ProofStrip() {
  return (
    <section
      aria-labelledby="proof-heading"
      className="w-full py-16 md:py-24 border-b border-border-custom"
    >
      <div className="rounded-2xl bg-[#0A0E17] border border-slate-800/90 p-6 sm:p-10 md:p-14 text-white text-left shadow-xl">
        {/* Top Editorial Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-10 border-b border-white/10">
          <div className="lg:col-span-7">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#FF8A00] font-semibold block mb-2.5">
              Proof Before Promises &bull; Live Index
            </span>
            <h2
              id="proof-heading"
              className="metalab-subheadline text-2xl sm:text-4xl font-extrabold text-white"
            >
              Inspectable builds, live deployments, and open repositories.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm text-slate-300 leading-relaxed">
              We do not publish fabricated metrics or unverifiable client claims. Every system below can be inspected directly via its live deployment, source repository, or architectural case study.
            </p>
          </div>
        </div>

        {/* Hairline Ledger Rows (Replaces Boxy 4-Column Cards) */}
        <div className="divide-y divide-white/10">
          {VERIFIED_DELIVERABLES.map((item) => (
            <div
              key={item.name}
              className="py-6 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-start lg:items-center group"
            >
              {/* Index + System Name (3 cols) */}
              <div className="lg:col-span-3 flex items-baseline gap-3">
                <span className="font-mono text-xs text-[#FF8A00] font-bold">
                  /{item.index}
                </span>
                <div>
                  <h3 className="font-display text-lg font-extrabold text-white group-hover:text-[#FF8A00] transition-colors">
                    {item.name}
                  </h3>
                  <span className="font-mono text-[11px] text-slate-400 block">
                    {item.classification} &middot; {item.domain}
                  </span>
                </div>
              </div>

              {/* Deliverable Description (4 cols) */}
              <div className="lg:col-span-4">
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.deliverable}
                </p>
              </div>

              {/* Technical Stack (3 cols) */}
              <div className="lg:col-span-3">
                <span className="font-mono text-[11px] text-slate-400 block">
                  {item.stack}
                </span>
              </div>

              {/* Direct Verification Links (2 cols) */}
              <div className="lg:col-span-2 flex items-center lg:justify-end gap-4">
                {item.liveUrl && (
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-[#FF8A00] hover:underline"
                  >
                    <span>Live</span>
                    <ExternalLink className="size-3" />
                  </a>
                )}
                {item.repoUrl && (
                  <a
                    href={item.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-xs text-slate-300 hover:text-white hover:underline"
                  >
                    <span>Code</span>
                    <ExternalLink className="size-3" />
                  </a>
                )}
                {item.caseStudyAnchor && (
                  <Link
                    href={item.caseStudyAnchor}
                    className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-[#FF8A00] hover:underline"
                  >
                    <span>Case Study</span>
                    <ArrowUpRight className="size-3.5" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
