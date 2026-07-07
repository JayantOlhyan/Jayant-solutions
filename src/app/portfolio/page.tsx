import React from "react";
import { caseStudies, customerPersonas, industriesList } from "@/data/content";
import { Heart, GraduationCap, Coffee } from "lucide-react";
import PageTransition from "@/components/PageTransition";

export default function PortfolioPage() {
  return (
    <PageTransition>
      <section className="py-20 md:py-28 max-w-5xl mx-auto px-4">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="font-mono text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3 py-1 rounded-full mb-4 inline-block">
          Portfolio
        </span>
        <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-text-base mb-4 mt-2">
          Shipped Outcomes
        </h1>
        <p className="text-sm md:text-base text-text-muted">
          Explore actual systems and platforms sorted strictly by target business verticals.
        </p>
      </div>

      {/* Case Studies sorted by Industry */}
      <div className="mb-24">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-base mb-8">Case Studies by Industry</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <div key={study.id} className="glass-card rounded-[28px] border border-border-custom p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-2.5 py-0.5 rounded-full">
                    {study.industry}
                  </span>
                  <span className="text-xs text-text-muted">{study.client}</span>
                </div>
                <h3 className="font-serif text-xl md:text-2xl font-bold text-text-base mb-3">{study.title}</h3>
                
                <div className="mt-2.5">
                  <span className="font-bold text-[10px] text-red-600 block mb-0.5">❌ BEFORE:</span>
                  <p className="text-xs text-text-muted">{study.beforeState}</p>
                </div>
                <div className="mt-2.5">
                  <span className="font-bold text-[10px] text-emerald-600 block mb-0.5">✅ AFTER:</span>
                  <p className="text-xs text-text-muted">{study.afterState}</p>
                </div>
                <div className="mt-2.5">
                  <span className="text-[10px] font-mono text-text-base block">Operational Helper Built</span>
                  <p className="text-xs text-text-muted">{study.solution}</p>
                </div>
                <div className="mt-2.5">
                  <span className="text-[10px] font-mono text-text-base block">Result</span>
                  <p className="text-xs font-semibold text-primary">{study.result}</p>
                </div>
              </div>
              <div className="border-t border-border-custom pt-4 mt-6">
                {study.features && (
                  <div className="mb-4">
                    <span className="text-[10px] font-mono text-text-base block mb-1">Key Features:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {study.features.slice(0, 3).map((f) => (
                        <span key={f} className="text-[9px] bg-neutral-100 dark:bg-neutral-900 border border-border-custom/35 px-1.5 py-0.5 rounded text-text-muted">
                          {f}
                        </span>
                      ))}
                      {study.features.length > 3 && (
                        <span className="text-[9px] text-text-muted font-mono self-center">+{study.features.length - 3} more</span>
                      )}
                    </div>
                  </div>
                )}
                
                {(study.liveWebsite || study.githubLink) && (
                  <div className="flex items-center gap-3 mb-4">
                    {study.liveWebsite && (
                      <a href={study.liveWebsite} target="_blank" rel="noreferrer" className="text-[10px] font-mono font-bold text-primary hover:underline">
                        🔗 Website
                      </a>
                    )}
                    {study.githubLink && (
                      <a href={study.githubLink} target="_blank" rel="noreferrer" className="text-[10px] font-mono font-bold text-text-base hover:underline">
                        📂 GitHub
                      </a>
                    )}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 pt-2 border-t border-border-custom/30">
                  {study.tech.map((t) => (
                    <span key={t} className="text-[9px] font-mono text-text-muted bg-white/5 border border-border-custom px-2 py-0.5 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Customer Personas Section */}
      <div className="mb-24">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="font-mono text-[10px] tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3 py-1 rounded-full mb-3 inline-block">
            Targeting
          </span>
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-text-base mt-1">Our Target Personas</h2>
          <p className="text-xs md:text-sm text-text-muted mt-2">
            How we map client pain points, budgets, and operational goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {customerPersonas.map((p) => (
            <div key={p.industry} className="glass-card rounded-3xl border border-border-custom p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  {p.industry === "Healthcare" && <Heart className="size-5 text-red-500" />}
                  {p.industry === "Schools & Education" && <GraduationCap className="size-5 text-blue-500" />}
                  {p.industry === "Restaurants & Hospitality" && <Coffee className="size-5 text-orange-500" />}
                  <h3 className="font-serif text-lg font-bold text-text-base">{p.industry}</h3>
                </div>
                <p className="text-xs font-mono text-text-muted mb-4 border-b border-border-custom pb-2">
                  Target: {p.ownerType}
                </p>

                <div className="space-y-3 mb-6">
                  <div>
                    <span className="text-[10px] font-mono text-text-base uppercase block">Key Pain Points</span>
                    <ul className="text-xs text-text-muted list-disc pl-4 space-y-1">
                      {p.painPoints.map((item, idx) => <li key={idx}>{item}</li>)}
                    </ul>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-text-base uppercase block">Operational Goal</span>
                    <ul className="text-xs text-text-muted list-disc pl-4 space-y-1">
                      {p.goals.map((item, idx) => <li key={idx}>{item}</li>)}
                    </ul>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-text-base uppercase block">Objections</span>
                    <ul className="text-xs text-text-muted list-disc pl-4 space-y-1">
                      {p.objections.map((item, idx) => <li key={idx}>{item}</li>)}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-t border-border-custom pt-4 space-y-1.5 text-xs text-text-muted">
                <div className="flex justify-between">
                  <span>Est. Budget:</span>
                  <span className="font-bold text-text-base">{p.budget}</span>
                </div>
                <div className="flex justify-between">
                  <span>Decision Maker:</span>
                  <span className="text-text-base">{p.decisionMaker}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Target Industries Quick list */}
      <div className="glass-card rounded-[28px] border border-border-custom p-8 text-center max-w-4xl mx-auto">
        <h3 className="font-serif text-xl md:text-2xl font-bold text-text-base mb-4">Industries We Serve</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {industriesList.map((ind) => (
            <span key={ind.name} className="text-xs md:text-sm font-medium text-text-muted border border-border-custom px-4 py-1.5 rounded-full bg-white/5">
              {ind.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  </PageTransition>
  );
}
