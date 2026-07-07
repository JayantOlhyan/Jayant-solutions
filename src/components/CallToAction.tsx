import React from "react";
import Link from "next/link";
import { ArrowRight, Cpu, Sparkles } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden rounded-[36px] border-2 border-border-custom bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 px-8 py-16 md:py-24 text-center shadow-[6px_6px_0px_0px_rgba(43,43,43,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
      {/* Background decoration elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute -top-24 -left-24 size-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 size-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Network Grid lines simulation using pure CSS */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to right, #4f46e5 1px, transparent 1px), linear-gradient(to bottom, #4f46e5 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
        {/* Floating badge lockup */}
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary font-mono text-[10px] uppercase tracking-wider mb-6">
          <Sparkles className="size-3 animate-pulse" /> Let's Build Together
        </div>

        <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
          Ready to Build Your Next AI-Powered Product?
        </h2>

        <p className="text-xs md:text-sm text-slate-300 max-w-lg mb-8 leading-relaxed">
          Transform your ideas into intelligent, scalable digital solutions with custom AI development, modern web applications, automation, and cloud technologies. Let's discuss your project and create something exceptional together.
        </p>

        {/* Buttons Action Group */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-hover px-6 py-3.5 text-xs font-mono font-bold text-white shadow-md transition-all duration-200"
          >
            Book a Free Consultation <ArrowRight className="size-3.5" />
          </Link>
          
          <Link
            href="/portfolio"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900/60 border border-slate-700/80 hover:bg-slate-950 px-6 py-3.5 text-xs font-mono font-bold text-slate-200 transition-all duration-200"
          >
            View Our Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
