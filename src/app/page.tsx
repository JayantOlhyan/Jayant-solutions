import React from "react";
import Hero from "@/components/Hero";
import ProofStrip from "@/components/ProofStrip";
import CaseStudies from "@/components/CaseStudies";
import Process from "@/components/Process";
import Packages from "@/components/Packages";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="hog-grid min-h-screen pb-16 md:pb-28">
      <main className="flex-1 w-full max-w-none px-6 md:px-12 lg:px-16 pt-12 md:pt-20 flex flex-col gap-16 md:gap-28 overflow-x-hidden">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Proof Strip */}
        <ProofStrip />

        {/* 3. Case Studies Section */}
        <section id="portfolio">
          <CaseStudies />
        </section>

        {/* 4. Process Section */}
        <section id="process">
          <Process />
        </section>

        {/* 5. Pricing Packages Section */}
        <Packages />

        {/* 6. FAQ Section */}
        <FAQ />

        {/* 7. CTA + Contact Form Section */}
        <Contact />
      </main>
    </div>
  );
}
