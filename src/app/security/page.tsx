import React from "react";

export default function SecurityPage() {
  return (
    <div className="hog-grid min-h-screen pb-20 pt-10">
      <main className="max-w-3xl mx-auto px-6 py-12 bg-card-bg border-2 border-border-custom rounded-[32px] shadow-[6px_6px_0px_0px_rgba(43,43,43,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
        <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mb-2">
          Security Policy
        </h1>
        <p className="font-mono text-xs text-text-muted mb-8">
          Effective Date: July 7, 2026
        </p>

        <div className="prose prose-neutral dark:prose-invert max-w-none text-xs md:text-sm text-text-muted space-y-6 leading-relaxed">
          <p>
            At <strong>Jayant Web & AI Systems</strong>, we take the security of our platforms and clients' codebases seriously. This document outlines our safety policies and guidance on reporting vulnerabilities.
          </p>

          <h2 className="font-serif text-lg font-bold text-text-base pt-4 border-t border-border-custom/50">
            System Defenses
          </h2>
          <p>
            We implement standard security guardrails across all development stages, including:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>HTTPS-only traffic routes and strict SSL controls</li>
            <li>Role-Based Access Control (RBAC) across data pipelines</li>
            <li>Secured API endpoints with JSON Web Tokens (JWT)</li>
            <li>Input validation, sanitized form layers, and automated dependency scanning</li>
          </ul>

          <h2 className="font-serif text-lg font-bold text-text-base pt-4 border-t border-border-custom/50">
            Reporting Vulnerabilities
          </h2>
          <p>
            If you identify a security vulnerability in our platforms or systems, please report it privately by emailing us at <a href="mailto:jayantwebaisystems@gmail.com" className="text-primary hover:underline">jayantwebaisystems@gmail.com</a>. We will respond within 48 hours to assess the report.
          </p>
        </div>
      </main>
    </div>
  );
}
