import React from "react";

export default function AccessibilityPage() {
  return (
    <div className="hog-grid min-h-screen pb-20 pt-10">
      <main className="max-w-3xl mx-auto px-6 py-12 bg-card-bg border-2 border-border-custom rounded-[32px] shadow-[6px_6px_0px_0px_rgba(43,43,43,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
        <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mb-2">
          Accessibility Statement
        </h1>
        <p className="font-mono text-xs text-text-muted mb-8">
          Effective Date: July 7, 2026
        </p>

        <div className="prose prose-neutral dark:prose-invert max-w-none text-xs md:text-sm text-text-muted space-y-6 leading-relaxed">
          <p>
            <strong>Jayant Web & AI Systems</strong> is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone, and applying the relevant accessibility standards to make our systems accessible.
          </p>

          <h2 className="font-serif text-lg font-bold text-text-base pt-4 border-t border-border-custom/50">
            Conformance Status
          </h2>
          <p>
            The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. This portal strives to maintain conformance with Level AA standards.
          </p>

          <h2 className="font-serif text-lg font-bold text-text-base pt-4 border-t border-border-custom/50">
            Feedback & Assistance
          </h2>
          <p>
            We welcome your feedback on the accessibility of our site. Please let us know if you encounter accessibility barriers on this website by emailing us at: <a href="mailto:jayantwebaisystems@gmail.com" className="text-primary hover:underline">jayantwebaisystems@gmail.com</a>.
          </p>
        </div>
      </main>
    </div>
  );
}
