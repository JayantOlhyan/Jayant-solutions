import React from "react";

export default function AIUsagePage() {
  return (
    <div className="hog-grid min-h-screen pb-20 pt-10">
      <main className="max-w-3xl mx-auto px-6 py-12 bg-card-bg border-2 border-border-custom rounded-[32px] shadow-[6px_6px_0px_0px_rgba(43,43,43,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
        <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mb-2">
          AI Usage Policy
        </h1>
        <p className="font-mono text-xs text-text-muted mb-8">
          Effective Date: July 7, 2026
        </p>

        <div className="prose prose-neutral dark:prose-invert max-w-none text-xs md:text-sm text-text-muted space-y-6 leading-relaxed">
          <p>
            This AI Usage Policy governs the integration, development, and deployment of Artificial Intelligence systems by <strong>Jayant Web & AI Systems</strong>.
          </p>

          <h2 className="font-serif text-lg font-bold text-text-base pt-4 border-t border-border-custom/50">
            AI-First Commitments
          </h2>
          <p>
            We leverage modern generative AI models (including Google Gemini, OpenAI GPT, and Anthropic Claude) to enhance coding workflows, automate data operations, and build intelligent business assistants. We ensure all LLM endpoints operate on secure API networks to protect client IP.
          </p>

          <h2 className="font-serif text-lg font-bold text-text-base pt-4 border-t border-border-custom/50">
            Responsible Engineering & Verification
          </h2>
          <p>
            AI outputs are statistical in nature. Our engineering processes mandate that all AI-generated code snippets and system files undergo manual verification, security unit testing, and viewport inspections to eliminate hallucinated errors before shipping to staging or production.
          </p>

          <h2 className="font-serif text-lg font-bold text-text-base pt-4 border-t border-border-custom/50">
            Contact
          </h2>
          <p>
            For questions about our AI practices, reach out to us at: <a href="mailto:jayantwebaisystems@gmail.com" className="text-primary hover:underline">jayantwebaisystems@gmail.com</a>.
          </p>
        </div>
      </main>
    </div>
  );
}
