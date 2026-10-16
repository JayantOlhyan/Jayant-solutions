"use client";

import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProcessStage {
  number: string;
  title: string;
  description: string;
  clientExpectations: string[];
  artifactDelivered: string;
}

const PROCESS_STAGES: ProcessStage[] = [
  {
    number: "01",
    title: "Discover the problem",
    description:
      "Understand the business context, target users, operational bottlenecks, and technical constraints before proposing any architecture.",
    clientExpectations: [
      "Direct discovery session with the founder to audit current workflows or site gaps",
      "Clarification of target user actions, integrations, and technical constraints",
    ],
    artifactDelivered: "Requirements Summary & Fit Assessment",
  },
  {
    number: "02",
    title: "Define requirements and scope",
    description:
      "Specify exact deliverables, system boundaries, milestone priorities, and the proposed technical architecture in writing.",
    clientExpectations: [
      "Written specification detailing exact pages, database models, or automation flows",
      "Transparent milestone schedule and agreed pricing structure before coding begins",
    ],
    artifactDelivered: "Written Scope, Architecture Plan & Milestone Schedule",
  },
  {
    number: "03",
    title: "Design and build",
    description:
      "Engineer the agreed system with clean, maintainable code, structured interfaces, and regular milestone previews.",
    clientExpectations: [
      "Staging preview links to inspect real interfaces and workflows as they are built",
      "Direct communication via WhatsApp, Slack, or email without account-manager handoffs",
    ],
    artifactDelivered: "Staging Environment & Iterative Milestone Builds",
  },
  {
    number: "04",
    title: "Test and refine",
    description:
      "Validate functionality, usability, mobile responsiveness, security practices, and agreed requirements prior to launch.",
    clientExpectations: [
      "Cross-device responsiveness checks across desktop, tablet, and mobile viewports",
      "Form, API, database, and edge-case verification against the agreed project scope",
    ],
    artifactDelivered: "Verified Pre-Production Release & Walkthrough",
  },
  {
    number: "05",
    title: "Deploy and support",
    description:
      "Deploy the system to production infrastructure, transfer source code ownership, and provide the agreed post-launch support.",
    clientExpectations: [
      "Production deployment, custom domain DNS & SSL configuration, and source code transfer",
      "Agreed post-launch technical support and optional ongoing maintenance retainers",
    ],
    artifactDelivered: "Production Deployment, Documentation & Code Handover",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="py-16 md:py-24 border-b border-border-custom relative"
    >
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Sticky Process Introduction */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 flex flex-col items-start text-left">
            <span className="font-mono text-[11px] tracking-wider uppercase text-primary font-semibold block mb-2">
              Section 04 &bull; Engineering Approach
            </span>
            <h2
              id="process-heading"
              className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-text-base mb-4"
            >
              How JAYANT SYSTEMS Delivers
            </h2>
            <p className="text-sm sm:text-base text-text-muted leading-relaxed mb-6">
              Software projects fail when scope is vague and communication is filtered through layers of management. Our five-stage engineering approach keeps deliverables, trade-offs, and progress visible at every step.
            </p>

            <div className="p-4 rounded-xl bg-card-subtle border border-border-custom w-full mb-6">
              <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted font-bold block mb-1">
                Standard Engagement Structure
              </span>
              <p className="text-xs text-text-base leading-relaxed">
                Every project is governed by a written scope, milestone-linked payments, and full source-code ownership upon completion.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-primary hover:bg-primary-hover text-white px-5 py-2.5 text-xs font-display font-bold transition-colors shadow-2xs"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="size-3.5" />
              </Link>
              <Link
                href="/process"
                className="inline-flex items-center gap-1.5 rounded-lg border border-border-custom bg-card-bg hover:border-primary/40 px-4 py-2.5 text-xs font-mono font-semibold text-text-base transition-colors"
              >
                <span>Detailed methodology</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Progressive 5-Step Timeline */}
          <div className="lg:col-span-8 flex flex-col gap-5 relative">
            {PROCESS_STAGES.map((stage, idx) => (
              <motion.div
                key={stage.number}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="hog-card p-6 sm:p-7 bg-card-bg border border-border-custom text-left flex flex-col gap-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-border-custom">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-[#0A0F1D] text-white">
                      {stage.number}
                    </span>
                    <h3 className="font-display text-lg sm:text-xl font-extrabold text-text-base">
                      {stage.number} &mdash; {stage.title}
                    </h3>
                  </div>

                  <span className="font-mono text-[10px] text-primary bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded font-semibold self-start sm:self-auto">
                    Output: {stage.artifactDelivered}
                  </span>
                </div>

                <p className="text-sm text-text-base leading-relaxed">
                  {stage.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {stage.clientExpectations.map((exp) => (
                    <div
                      key={exp}
                      className="flex items-start gap-2 text-xs text-text-muted leading-relaxed bg-card-subtle/70 p-3 rounded-lg border border-border-custom/70"
                    >
                      <CheckCircle2 className="size-3.5 text-primary shrink-0 mt-0.5" />
                      <span>{exp}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
