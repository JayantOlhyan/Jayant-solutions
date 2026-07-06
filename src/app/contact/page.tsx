import React from "react";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";

export default function ContactPage() {
  return (
    <section className="py-20 md:py-28 max-w-5xl mx-auto px-4">
      {/* Contact component includes booking scheduler and fit pre-qualification */}
      <Contact />

      {/* FAQ Component */}
      <div className="mt-20">
        <FAQ />
      </div>
    </section>
  );
}
