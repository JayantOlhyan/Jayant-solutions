import React from "react";
import Link from "next/link";
import { ExternalLink, ArrowUpRight, Terminal, Database, Cpu, ShieldCheck } from "lucide-react";

const VERIFIED_DELIVERABLES = [
  {
    name: "Healthkinator",
    classification: "Deployed AI Application",
    domain: "Healthcare Triage",
    deliverable: "Bilingual LLM symptom analysis engine & structured triage interface",
    stack: "Next.js • FastAPI • Gemini API • PostgreSQL",
    liveUrl: "https://healthkinator-1.netlify.app",
    repoUrl: "https://github.com/JayantOlhyan/healthkinator-1-",
  },
  {
    name: "Teacher Sathi",
    classification: "Client Engagement",
    domain: "Education Technology",
    deliverable: "Centralized educator workspace for lesson scheduling & classroom resources",
    stack: "Next.js • React • Node.js • PostgreSQL",
    caseStudyAnchor: "#work",
  },
  {
    name: "MSIT Portal Enhancement",
    classification: "Academic Portal",
    domain: "Higher Education",
    deliverable: "Modernized student portal with department directories & feedback routing",
    stack: "React • Next.js • Tailwind CSS • Firebase",
    liveUrl: "https://msit-website.netlify.app",
  },
  {
    name: "Sentinel AI",
    classification: "Hackathon Prototype",
    domain: "Cybersecurity & Fraud",
    deliverable: "Real-time URL, email, and SMS phishing detection with risk scoring",
    stack: "Next.js • FastAPI • Gemini API • PostgreSQL",
    liveUrl: "https://sentinel-ai-1.netlify.app",
  },
];

const TECHNICAL_CAPABILITIES = [
  {
    icon: <Terminal className="size-4 text-primary" />,
    label: "Frontend & Web Platforms",
    detail: "Next.js (App Router), React, TypeScript, Tailwind CSS — built for fast load times, accessibility, and SEO.",
  },
  {
    icon: <Cpu className="size-4 text-primary" />,
    label: "AI & Automation Pipelines",
    detail: "Python, FastAPI, OpenAI / Google Gemini / Claude APIs, RAG document workflows, and WhatsApp/CRM webhooks.",
  },
  {
    icon: <Database className="size-4 text-primary" />,
    label: "Data & Cloud Infrastructure",
    detail: "PostgreSQL, Supabase, Firebase, MongoDB, Docker, and automated CI/CD deployments on Vercel & cloud hosts.",
  },
  {
    icon: <ShieldCheck className="size-4 text-primary" />,
    label: "Engineering Accountability",
    detail: "Written project scopes, milestone-based reviews, documented repositories, and full source-code transfer.",
  },
];

export default function ProofStrip() {
  return (
    <section
      aria-labelledby="proof-heading"
      className="w-full py-12 md:py-16 border-b border-border-custom"
    >
      <div className="flex flex-col gap-10">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-wider text-primary font-semibold block mb-2">
              Proof Before Promises
            </span>
            <h2
              id="proof-heading"
              className="font-display text-2xl sm:text-3xl font-extrabold text-text-base tracking-tight"
            >
              Verified Deliverables &amp; Technical Capabilities
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-text-muted max-w-md leading-relaxed">
            Instead of unverifiable claims, inspect live deployments, repositories, and the exact technical stack used to deliver client and independent systems.
          </p>
        </div>

        {/* 4-Column Shipped Deliverables Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {VERIFIED_DELIVERABLES.map((item) => (
            <div
              key={item.name}
              className="hog-card p-5 flex flex-col justify-between text-left bg-card-bg"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-[10px] font-semibold px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                    {item.classification}
                  </span>
                  <span className="font-mono text-[10px] text-text-muted">
                    {item.domain}
                  </span>
                </div>

                <h3 className="font-display text-base font-bold text-text-base mb-1.5">
                  {item.name}
                </h3>

                <p className="text-xs text-text-muted leading-relaxed mb-4">
                  {item.deliverable}
                </p>
              </div>

              <div className="pt-3 border-t border-border-custom/80 flex flex-col gap-2.5">
                <span className="font-mono text-[10px] text-text-muted truncate">
                  {item.stack}
                </span>

                <div className="flex items-center gap-3">
                  {item.liveUrl && (
                    <a
                      href={item.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-[11px] font-semibold text-primary hover:underline"
                    >
                      <span>Live App</span>
                      <ExternalLink className="size-3" />
                    </a>
                  )}
                  {item.repoUrl && (
                    <a
                      href={item.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-[11px] font-semibold text-text-muted hover:text-text-base hover:underline"
                    >
                      <span>GitHub</span>
                      <ExternalLink className="size-3" />
                    </a>
                  )}
                  {item.caseStudyAnchor && (
                    <Link
                      href={item.caseStudyAnchor}
                      className="inline-flex items-center gap-1 font-mono text-[11px] font-semibold text-primary hover:underline"
                    >
                      <span>Inspect Case Study</span>
                      <ArrowUpRight className="size-3" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Core Engineering Capabilities Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          {TECHNICAL_CAPABILITIES.map((cap) => (
            <div
              key={cap.label}
              className="p-4 rounded-xl border border-border-custom/80 bg-card-subtle/60 flex flex-col gap-1.5 text-left"
            >
              <div className="flex items-center gap-2 font-display text-xs font-bold text-text-base">
                {cap.icon}
                <span>{cap.label}</span>
              </div>
              <p className="text-xs text-text-muted leading-relaxed">
                {cap.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
