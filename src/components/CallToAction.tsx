import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0B0F19] px-8 py-16 md:py-20 text-center shadow-lg">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,138,0,0.04),transparent)] pointer-events-none" />
      
      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
        <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
          Ready to Build Something Great?
        </h2>

        <p className="text-xs md:text-sm text-white/70 max-w-lg mb-8 leading-relaxed">
          Let&apos;s turn your ideas into a powerful digital solution. Book a free consultation and let&apos;s talk about your project.
        </p>

        {/* Buttons Action Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link
            href="https://cal.com/jayant-web-and-ai-systems/strategy-call"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-hover px-7 py-3 text-xs font-mono font-bold text-white shadow-md transition-all duration-200"
          >
            Book a Free Consultation <ArrowRight className="size-3.5" />
          </Link>
          
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 hover:bg-white/5 px-7 py-3 text-xs font-mono font-bold text-white transition-all duration-200"
          >
            Contact Us <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
