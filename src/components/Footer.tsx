import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border-custom bg-card-bg/10 py-12">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-center">
        {/* Left Side: Brand & Copyright */}
        <div className="flex flex-col md:items-start items-center gap-1.5">
          <div className="flex items-center gap-2">
            <div className="size-6 text-text-base">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <rect x="10" y="10" width="180" height="180" rx="42" fill="none" stroke="currentColor" strokeWidth="16" />
                <path d="M 100 50 L 132 50 L 132 115 C 132 135, 115 152, 95 152 C 78 152, 65 140, 65 125 L 89 125 C 89 130, 91 132, 95 132 C 99 132, 108 128, 108 115 L 108 72 L 100 72 Z" fill="currentColor" />
                <path d="M 52 108 L 82 108 L 82 128 L 67 141 L 65 128 L 52 128 Z" fill="#FF8A00" />
              </svg>
            </div>
            <span className="font-mono text-sm font-bold tracking-tight text-text-base">
              Jayant Web & AI Systems
            </span>
          </div>
          <span className="text-[11px] font-mono tracking-wide text-text-muted mt-1">
            © {currentYear} Jayant Olhyan. All system protocols active.
          </span>
        </div>

        {/* Right Side: Links & Contact */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs md:text-sm text-text-muted">
          <a
            href="https://github.com/JayantOlhyan"
            target="_blank"
            rel="noreferrer"
            className="hover:text-text-base transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/company/jayant-systems"
            target="_blank"
            rel="noreferrer"
            className="hover:text-text-base transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/JayantSystems"
            target="_blank"
            rel="noreferrer"
            className="hover:text-text-base transition-colors"
          >
            Twitter/X
          </a>
          <a
            href="https://www.instagram.com/jayantolhyan/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-text-base transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://www.youtube.com/@JayantWebAISystems"
            target="_blank"
            rel="noreferrer"
            className="hover:text-text-base transition-colors"
          >
            YouTube
          </a>
          <a
            href="mailto:jayantwebaisystems@gmail.com"
            className="hover:text-text-base transition-colors"
          >
            Email
          </a>
        </div>
      </div>

      {/* Compliance / Legal Links Sub-Footer */}
      <div className="max-w-5xl mx-auto px-4 mt-8 pt-6 border-t border-border-custom/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
        <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-text-muted font-mono">
          <a href="/privacy" className="hover:text-primary hover:underline transition-colors">
            Privacy Policy
          </a>
          <span className="text-border-custom">•</span>
          <a href="/terms" className="hover:text-primary hover:underline transition-colors">
            Terms & Conditions
          </a>
          <span className="text-border-custom">•</span>
          <a href="/cookies" className="hover:text-primary hover:underline transition-colors">
            Cookie Policy
          </a>
          <span className="text-border-custom">•</span>
          <a href="/pricing-policy" className="hover:text-primary hover:underline transition-colors">
            Pricing Policy
          </a>
        </div>
        <span className="text-[10px] font-mono text-text-muted">
          Systems engineered in Dwarka, New Delhi.
        </span>
      </div>
    </footer>
  );
}
