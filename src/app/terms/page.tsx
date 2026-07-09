import React from "react";

export default function TermsPage() {
  return (
    <div className="hog-grid min-h-screen pb-20 pt-10">
      <main className="max-w-none px-6 md:px-12 lg:px-16 py-12 bg-card-bg border-2 border-border-custom rounded-[32px] shadow-[6px_6px_0px_0px_rgba(43,43,43,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
        <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mb-2">
          Terms & Conditions
        </h1>
        <p className="font-mono text-xs text-text-muted mb-8">
          Effective Date: July 7, 2026
        </p>

        <div className="prose prose-neutral dark:prose-invert max-w-none text-xs md:text-sm text-text-muted space-y-6 leading-relaxed">
          <p>
            Welcome to <strong>Jayant Web & AI Systems</strong>.
          </p>
          <p>
            By accessing or using our website located at{" "}
            <a href="https://jayant-solution.netlify.app/" className="text-primary hover:underline">
              https://jayant-solution.netlify.app/
            </a>
            , you agree to these Terms & Conditions.
          </p>

          <h2 className="font-serif text-lg font-bold text-text-base pt-4 border-t border-border-custom/50">
            1. Acceptance
          </h2>
          <p>
            By using our website or services, you acknowledge that you have read, understood, and agreed to these Terms.
          </p>

          <h2 className="font-serif text-lg font-bold text-text-base pt-4 border-t border-border-custom/50">
            2. Services
          </h2>
          <p>Jayant Web & AI Systems provides services including but not limited to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>AI Development</li>
            <li>Custom Software Development</li>
            <li>Website Design & Development</li>
            <li>Automation Solutions</li>
            <li>Technical Consulting</li>
            <li>Digital Products</li>
          </ul>
          <p>Service availability may change without prior notice.</p>

          <h2 className="font-serif text-lg font-bold text-text-base pt-4 border-t border-border-custom/50">
            3. User Responsibilities
          </h2>
          <p>You agree not to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Violate any applicable laws</li>
            <li>Attempt unauthorized access to our systems</li>
            <li>Upload malicious software</li>
            <li>Copy or reproduce our content without permission</li>
            <li>Interfere with website functionality</li>
            <li>Misuse our services</li>
          </ul>

          <h2 className="font-serif text-lg font-bold text-text-base pt-4 border-t border-border-custom/50">
            4. Intellectual Property
          </h2>
          <p>
            All content on this website—including text, graphics, logos, software, code, branding, and design—is the intellectual property of Jayant Web & AI Systems unless otherwise stated.
          </p>
          <p>Unauthorized reproduction, modification, or distribution is prohibited.</p>

          <h2 className="font-serif text-lg font-bold text-text-base pt-4 border-t border-border-custom/50">
            5. Payments
          </h2>
          <p>Where applicable:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Prices are communicated before work begins.</li>
            <li>Payments are due according to agreed terms.</li>
            <li>Failure to pay may result in suspension of services.</li>
          </ul>

          <h2 className="font-serif text-lg font-bold text-text-base pt-4 border-t border-border-custom/50">
            6. Project Delivery
          </h2>
          <p>Project timelines depend on:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Client cooperation</li>
            <li>Timely approvals</li>
            <li>Availability of required resources</li>
            <li>Scope changes</li>
          </ul>
          <p>
            Changes requested after project commencement may require revised pricing or delivery schedules.
          </p>

          <h2 className="font-serif text-lg font-bold text-text-base pt-4 border-t border-border-custom/50">
            7. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by law, Jayant Web & AI Systems shall not be liable for indirect, incidental, special, or consequential damages arising from the use of our website or services.
          </p>

          <h2 className="font-serif text-lg font-bold text-text-base pt-4 border-t border-border-custom/50">
            8. Disclaimer
          </h2>
          <p>
            Our services are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. While we strive for accuracy and reliability, we do not guarantee uninterrupted operation or error-free performance.
          </p>

          <h2 className="font-serif text-lg font-bold text-text-base pt-4 border-t border-border-custom/50">
            9. Termination
          </h2>
          <p>
            We reserve the right to suspend or terminate access to our services if these Terms are violated.
          </p>

          <h2 className="font-serif text-lg font-bold text-text-base pt-4 border-t border-border-custom/50">
            10. Governing Law
          </h2>
          <p>
            These Terms shall be governed by and interpreted in accordance with the laws of India.
          </p>

          <h2 className="font-serif text-lg font-bold text-text-base pt-4 border-t border-border-custom/50">
            11. Updates
          </h2>
          <p>
            We may modify these Terms at any time. Continued use of the website constitutes acceptance of the updated Terms.
          </p>

          <h2 className="font-serif text-lg font-bold text-text-base pt-4 border-t border-border-custom/50">
            12. Contact
          </h2>
          <p className="font-bold text-text-base">Jayant Web & AI Systems</p>
          <ul className="list-none space-y-1 pl-0">
            <li>
              Email: <a href="mailto:jayantwebaisystems@gmail.com" className="text-primary hover:underline">jayantwebaisystems@gmail.com</a>
            </li>
            <li>
              Website: <a href="https://jayant-solution.netlify.app/" className="text-primary hover:underline">https://jayant-solution.netlify.app/</a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
