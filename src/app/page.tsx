import React from "react";
import Hero from "@/components/Hero";
import ProofStrip from "@/components/ProofStrip";
import ServicesSection from "@/components/ServicesSection";
import CaseStudies from "@/components/CaseStudies";
import Process from "@/components/Process";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="hog-grid min-h-screen pb-12 md:pb-20">
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 pt-6 md:pt-10 flex flex-col overflow-x-hidden">
        {/* Section 1: Hero — Immediate Clarity and Positioning */}
        <Hero />

        {/* Section 2: Selected Work — Real Evidence & Verified Deliverables */}
        <CaseStudies />
        <ProofStrip />

        {/* Section 3: Capabilities — Services Built Around Business Outcomes */}
        <ServicesSection />

        {/* Section 4: Engineering Approach — 5-Step Delivery Sequence */}
        <Process />

        {/* Section 5 & 6: Why JAYANT SYSTEMS & Founder Accountability */}
        <About />

        {/* Section 7: Process and FAQs */}
        <FAQ />

        {/* Section 8: Contact — Let's Build Something That Works */}
        <Contact />
      </main>
    </div>
  );
}
