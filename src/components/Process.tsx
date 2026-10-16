"use client";

import React from "react";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
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
      className="py-20 md:py-32 border-b border-border-custom relative"
    >
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Sticky Process Introduction */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col items-start text-left">
            <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-primary font-bold block mb-3">
              04 / Engineering Methodology
            </span>
            <h2
              id="process-heading"
              className="metalab-subheadline text-3xl sm:text-5xl font-extrabold text-text-base mb-6"
            >
              A transparent sequence from discovery to deployment.
            </h2>
            <p className="text-sm sm:text-base text-text-muted leading-relaxed mb-8">
              Software projects fail when scope is vague and communication is filtered through layers of management. Our five-stage engineering sequence keeps deliverables, trade-offs, and progress inspectable at every milestone.
            </p>

            <div className="border-t border-b border-border-custom py-5 w-full mb-8">
              <span className="font-mono text-[10px] uppercase tracking-widest text-primary font-bold block mb-1.5">
                Standard Engagement Guarantee
              </span>
              <p className="text-sm text-text-base leading-relaxed">
                Every project is governed by a written scope, milestone-linked payments, and 100% source-code ownership upon completion.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3.5">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary hover:bg-primary-hover text-white px-6 py-3 text-xs font-display font-bold transition-colors"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="size-3.5" />
              </Link>
              <Link
                href="/process"
                className="inline-flex items-center gap-1.5 rounded-full border border-border-custom hover:border-primary px-5 py-3 text-xs font-mono font-semibold text-text-base transition-colors"
              >
                <span>Full Process Breakdown</span>
                <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Hairline Numbered Editorial Ledger (No Boxy Cards) */}
          <div className="lg:col-span-7 divide-y divide-border-custom border-t border-b border-border-custom">
            {PROCESS_STAGES.map((stage, idx) => (
              <motion.div
                key={stage.number}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="py-8 sm:py-10 text-left flex flex-col gap-5"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-sm font-bold text-primary">
                      /{stage.number}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-extrabold text-text-base tracking-tight">
                      {stage.title}
                    </h3>
                  </div>

                  <span className="font-mono text-[11px] text-primary font-semibold">
                    Deliverable: {stage.artifactDelivered}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-text-muted leading-relaxed pl-0 sm:pl-9">
                  {stage.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-0 sm:pl-9 pt-1">
                  {stage.clientExpectations.map((exp) => (
                    <div
                      key={exp}
                      className="flex items-start gap-2.5 text-xs text-text-base leading-relaxed"
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
