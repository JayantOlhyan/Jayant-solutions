"use client";

import React, { useState } from "react";
import { caseStudies } from "../data/content";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Cpu, GraduationCap, Eye, FileText } from "lucide-react";

export default function CaseStudies() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const activeStudy = caseStudies.find((s) => s.id === selectedId);

  // Filter down target client case studies
  const otherStudies = caseStudies.slice(3);

  return (
    <section id="work" className="py-20 md:py-28 relative">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1 rounded-full mb-4 inline-block">
            Proven Proof
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mb-4 mt-2">
            Verifiable Case Studies
          </h2>
          <p className="text-sm md:text-base text-text-muted">
            Direct, sourced outcomes of real projects designed and implemented for healthcare, education, and automation.
          </p>
        </div>

        {/* Featured Case Studies Stack */}
        <div className="flex flex-col gap-16 md:gap-24 mb-24">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col md:flex-row gap-8 md:gap-12 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Left Column: Visual Representation Box */}
              <div className="w-full md:w-1/2 aspect-video rounded-3xl relative overflow-hidden glass-card flex flex-col justify-center items-center group cursor-pointer" onClick={() => setSelectedId(study.id)}>
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-100" />
                
                {/* Abstract Interactive Graphic Grid */}
                <div className="relative z-10 flex flex-col items-center gap-4 text-center p-6">
                  {study.id === "healthkinator" && <Cpu className="size-12 text-primary" />}
                  {study.id === "teachersathi" && <GraduationCap className="size-12 text-primary" />}
                  {study.id === "sentinelai" && <Eye className="size-12 text-primary" />}
                  {study.id === "msitwebsite" && <ExternalLink className="size-12 text-primary" />}
                  
                  <h4 className="font-serif text-lg md:text-xl font-bold text-text-base mt-2">
                    {study.client}
                  </h4>
                  <div className="flex items-center gap-2 border border-border-custom px-3 py-1 rounded-full bg-card-bg/80 text-xs font-semibold text-text-muted transition-colors group-hover:text-primary">
                    <FileText className="size-3.5" /> View Project Details
                  </div>
                </div>
              </div>

              {/* Right Column: Outcomes & Deliverables */}
              <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-left">
                <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-primary mb-2">
                  Featured Outcome Study
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-text-base mb-4 leading-tight">
                  {study.title}
                </h3>
                
                <p className="text-sm md:text-base text-text-muted mb-3">
                  <strong className="text-text-base font-semibold block mb-1">Problem:</strong>
                  {study.problem}
                </p>
                <p className="text-sm md:text-base text-text-muted mb-3">
                  <strong className="text-text-base font-semibold block mb-1">Solution:</strong>
                  {study.solution}
                </p>
                <p className="text-sm md:text-base text-text-muted mb-6">
                  <strong className="text-text-base font-semibold block mb-1">Result:</strong>
                  <span className="text-primary font-medium">{study.result}</span>
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {study.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] tracking-wide border border-border-custom bg-card-bg/30 px-2.5 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedId(study.id)}
                  className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-primary hover:text-primary-hover group cursor-pointer"
                >
                  Read Study Specifications <ArrowRightIcon />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gallery / Other Projects */}
        <div className="border-t border-border-custom pt-16">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-text-base text-center mb-10">
            Other Shipped Work
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherStudies.map((proj) => (
              <div
                key={proj.title}
                className="glass-card rounded-[20px] p-6 border border-border-custom flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-serif text-lg font-bold text-text-base mb-2">
                    {proj.title}
                  </h4>
                  <p className="text-xs md:text-sm text-text-muted mb-4 leading-relaxed">
                    {proj.problem}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[9px] border border-border-custom bg-card-bg/20 px-2 py-0.5 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Study Modal Overlays */}
      <AnimatePresence>
        {selectedId && activeStudy && (
          <div className="fixed inset-0 z-[6000] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative z-10 w-full max-w-2xl max-h-[85vh] overflow-y-auto glass-card rounded-[28px] p-6 md:p-10 border border-border-custom shadow-2xl"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-5 right-5 text-text-muted hover:text-text-base p-1.5 rounded-full border border-border-custom bg-card-bg hover:opacity-85 transition-opacity"
              >
                ✕
              </button>

              <span className="font-mono text-[10px] tracking-widest uppercase text-primary mb-2 block">
                Project Specification
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-text-base mb-6 leading-tight">
                {activeStudy.title}
              </h3>

              <div className="space-y-6 text-sm md:text-base text-text-muted">
                <div>
                  <strong className="text-text-base font-semibold block mb-1">Client Profile</strong>
                  <p>{activeStudy.client}</p>
                </div>

                <div>
                  <strong className="text-text-base font-semibold block mb-1">Problem & Requirement</strong>
                  <p>{activeStudy.problem}</p>
                </div>

                <div>
                  <strong className="text-text-base font-semibold block mb-1">Solution Built</strong>
                  <p>{activeStudy.solution}</p>
                </div>

                <div>
                  <strong className="text-text-base font-semibold block mb-1">Result & Business Outcome</strong>
                  <p className="text-primary font-medium">{activeStudy.result}</p>
                </div>

                <div>
                  <strong className="text-text-base font-semibold block mb-1">Technologies Employed</strong>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {activeStudy.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-xs border border-border-custom bg-card-bg/40 px-3 py-1 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="size-4 transition-transform group-hover:translate-x-1"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}
