import React from "react";

export default function CookiesPage() {
  return (
    <div className="hog-grid min-h-screen pb-20 pt-10">
      <main className="max-w-3xl mx-auto px-6 py-12 bg-card-bg border-2 border-border-custom rounded-[32px] shadow-[6px_6px_0px_0px_rgba(43,43,43,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
        <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mb-2">
          Cookie Policy
        </h1>
        <p className="font-mono text-xs text-text-muted mb-8">
          Effective Date: July 7, 2026
        </p>

        <div className="prose prose-neutral dark:prose-invert max-w-none text-xs md:text-sm text-text-muted space-y-6 leading-relaxed">
          <p>
            This Cookie Policy explains how <strong>Jayant Web & AI Systems</strong> uses cookies and similar technologies on{" "}
            <a href="https://jayant-solution.netlify.app/" className="text-primary hover:underline">
              https://jayant-solution.netlify.app/
            </a>
            .
          </p>

          <h2 className="font-serif text-lg font-bold text-text-base pt-4 border-t border-border-custom/50">
            What Are Cookies?
          </h2>
          <p>
            Cookies are small text files stored on your device that help websites function efficiently, remember your preferences, and improve your browsing experience.
          </p>

          <h2 className="font-serif text-lg font-bold text-text-base pt-4 border-t border-border-custom/50">
            Types of Cookies We Use
          </h2>
          <div className="space-y-4">
            <div>
              <strong className="text-text-base">Essential Cookies:</strong>
              <p className="mt-0.5">These cookies are required for the website to function correctly.</p>
            </div>
            <div>
              <strong className="text-text-base">Performance Cookies:</strong>
              <p className="mt-0.5">These cookies help us understand how visitors interact with our website, allowing us to improve performance and usability.</p>
            </div>
            <div>
              <strong className="text-text-base">Functional Cookies:</strong>
              <p className="mt-0.5">These remember preferences such as language, browser settings, or previous interactions.</p>
            </div>
            <div>
              <strong className="text-text-base">Analytics Cookies:</strong>
              <p className="mt-0.5">We may use analytics services to collect anonymous information regarding website traffic and visitor behaviour.</p>
            </div>
            <div>
              <strong className="text-text-base">Marketing Cookies:</strong>
              <p className="mt-0.5">If enabled in the future, these cookies may be used to deliver relevant advertisements and measure campaign performance.</p>
            </div>
          </div>

          <h2 className="font-serif text-lg font-bold text-text-base pt-4 border-t border-border-custom/50">
            Managing Cookies
          </h2>
          <p>Most web browsers allow you to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>View stored cookies</li>
            <li>Delete cookies</li>
            <li>Block cookies</li>
            <li>Receive notifications before cookies are stored</li>
          </ul>
          <p>Please note that disabling certain cookies may affect website functionality.</p>

          <h2 className="font-serif text-lg font-bold text-text-base pt-4 border-t border-border-custom/50">
            Third-Party Cookies
          </h2>
          <p>
            Some integrated services, including embedded content and analytics providers, may place their own cookies subject to their own privacy policies.
          </p>

          <h2 className="font-serif text-lg font-bold text-text-base pt-4 border-t border-border-custom/50">
            Changes to This Cookie Policy
          </h2>
          <p>
            We may revise this Cookie Policy periodically. Updates will be published on this page with a new effective date.
          </p>

          <h2 className="font-serif text-lg font-bold text-text-base pt-4 border-t border-border-custom/50">
            Contact
          </h2>
          <p className="font-bold text-text-base">Jayant Web & AI Systems</p>
          <ul className="list-none space-y-1 pl-0">
            <li>
              Website: <a href="https://jayant-solution.netlify.app/" className="text-primary hover:underline">https://jayant-solution.netlify.app/</a>
            </li>
            <li>
              Email: <a href="mailto:jayantwebaisystems@gmail.com" className="text-primary hover:underline">jayantwebaisystems@gmail.com</a>
            </li>
            <li>
              LinkedIn: <a href="https://linkedin.com/company/jayant-systems" target="_blank" rel="noreferrer" className="text-primary hover:underline">https://linkedin.com/company/jayant-systems</a>
            </li>
            <li>
              GitHub: <a href="https://github.com/JayantOlhyan" target="_blank" rel="noreferrer" className="text-primary hover:underline">https://github.com/JayantOlhyan</a>
            </li>
            <li>
              Instagram: <a href="https://www.instagram.com/jayantolhyan/" target="_blank" rel="noreferrer" className="text-primary hover:underline">https://www.instagram.com/jayantolhyan/</a>
            </li>
            <li>
              YouTube: <a href="https://www.youtube.com/@JayantWebAISystems" target="_blank" rel="noreferrer" className="text-primary hover:underline">https://www.youtube.com/@JayantWebAISystems</a>
            </li>
            <li>
              X: <a href="https://x.com/JayantSystems" target="_blank" rel="noreferrer" className="text-primary hover:underline">https://x.com/JayantSystems</a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
