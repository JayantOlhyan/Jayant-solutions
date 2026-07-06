import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProofStrip from "@/components/ProofStrip";
import Packages from "@/components/Packages";
import CaseStudies from "@/components/CaseStudies";
import ProblemSolver from "@/components/ProblemSolver";
import Process from "@/components/Process";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* 1. Global Navigation */}
      <Navbar />

      <main className="flex-1 w-full max-w-5xl mx-auto px-4 md:px-6 pt-16 flex flex-col gap-12 overflow-x-hidden">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Credibility Proof Strip */}
        <ProofStrip />

        {/* 4. Pricing / Packages Section */}
        <Packages />

        {/* 5. Case Studies Showcase */}
        <CaseStudies />

        {/* 6. Interactive Problem Solver (Outcome-Based Services & Verticals) */}
        <ProblemSolver />

        {/* 7. Stepper Process Timeline */}
        <Process />

        {/* 8. About the Solo Founder */}
        <About />

        {/* 9. FAQ Segment */}
        <FAQ />

        {/* 10. Contact Booking & Scheduler */}
        <Contact />
      </main>

      {/* 11. Persistent Widgets & Global Footer */}
      <FloatingWhatsApp />
      <Footer />
    </>
  );
}
