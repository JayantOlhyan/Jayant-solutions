import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border-custom bg-card-bg/10 py-12">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-center">
        {/* Left Side: Brand & Copyright */}
        <div className="flex flex-col md:items-start items-center gap-1.5">
          <span className="font-serif text-base font-bold tracking-tight text-text-base">
            Jayant&apos;s Studio
          </span>
          <span className="text-[11px] font-mono tracking-wide text-text-muted">
            © {currentYear} Jayant Olhyan. All system protocols active.
          </span>
        </div>

        {/* Right Side: Links & Contact */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs md:text-sm text-text-muted">
          <a
            href="https://github.com/jayantolhyan"
            target="_blank"
            rel="noreferrer"
            className="hover:text-text-base transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/jayantolhyan"
            target="_blank"
            rel="noreferrer"
            className="hover:text-text-base transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:hello@jayantolhyan.in"
            className="hover:text-text-base transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
