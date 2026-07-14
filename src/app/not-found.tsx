import React from "react";
import Link from "next/link";
import { 
  Home, 
  Info, 
  Headset, 
  BookOpen, 
  Briefcase, 
  Mail, 
  ArrowRight
} from "lucide-react";
import PageTransition from "@/components/PageTransition";

export default function NotFound() {
  const helpCards = [
    {
      title: "Still need help?",
      description: "Our support team is here for you.",
      linkText: "Contact Support",
      href: "/contact",
      icon: <Headset className="size-6 text-primary" />,
    },
    {
      title: "Browse Resources",
      description: "Explore our guides and insights.",
      linkText: "View Resources",
      href: "/resources",
      icon: <BookOpen className="size-6 text-primary" />,
    },
    {
      title: "Check Our Services",
      description: "Find the right solution for your business.",
      linkText: "Explore Services",
      href: "/services",
      icon: <Briefcase className="size-6 text-primary" />,
    },
    {
      title: "Get in Touch",
      description: "Let's discuss your next big idea.",
      linkText: "Contact Us",
      href: "/contact",
      icon: <Mail className="size-6 text-primary" />,
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-text-base flex flex-col items-center pt-24 md:pt-32 pb-16 px-6 md:px-12 lg:px-16 overflow-hidden relative">
        {/* Main Content Area */}
        <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          
          {/* Left Text Column */}
          <div className="flex-1 max-w-xl text-left z-10">
            <span className="font-mono text-xs md:text-sm tracking-widest uppercase text-primary font-bold inline-block mb-4 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-px after:bg-primary/30">
              SOMETHING WENT WRONG!
            </span>
            <h1 className="text-8xl md:text-[150px] font-extrabold text-primary leading-none tracking-tighter mb-2">
              404
            </h1>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-base mb-4">
              Page Not Found
            </h2>
            <p className="text-base md:text-lg text-text-muted mb-8 leading-relaxed max-w-lg">
              Oops! The page you're looking for seems to have wandered off. It might have been moved, deleted, or never existed in the first place.
            </p>

            <div className="flex items-center gap-3 bg-card-bg border border-primary/20 rounded-xl p-4 mb-8 shadow-sm max-w-md">
              <Info className="size-5 text-primary flex-shrink-0" />
              <p className="text-sm text-text-base font-medium">
                Let's get you back on track to exploring our digital solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-white text-sm font-bold shadow-md shadow-primary/20 transition-all flex items-center justify-center gap-2"
              >
                <Home className="size-4" />
                <span>Go to Homepage</span>
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-card-bg border border-border-custom hover:bg-neutral-50 dark:hover:bg-neutral-900 text-text-base text-sm font-bold shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <span>Explore Services</span>
              </Link>
            </div>
          </div>

          {/* Right Illustration Column */}
          <div className="flex-1 flex justify-center items-center relative z-10 w-full max-w-md lg:max-w-none">
            {/* Abstract Decorative Elements representing a confused robot/404 state */}
            <div className="relative w-full aspect-square max-w-[500px]">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-[80px]" />
              
              {/* Central Illustration Area */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64 bg-card-bg rounded-3xl border-2 border-primary/20 shadow-2xl flex flex-col items-center justify-center">
                  <div className="absolute -top-6 -right-6 bg-white dark:bg-neutral-800 shadow-xl border border-border-custom rounded-2xl rounded-bl-none p-4 rotate-6 max-w-[200px]">
                    <p className="text-sm font-medium text-text-base leading-snug">
                      Uh-oh! <br/>We couldn't find that page. <span className="text-primary animate-pulse">🔍</span>
                    </p>
                  </div>
                  
                  {/* Robot Face - Confused */}
                  <div className="w-32 h-24 bg-neutral-900 rounded-2xl flex items-center justify-center gap-4 relative overflow-hidden border-4 border-neutral-700">
                    {/* Left Eye */}
                    <div className="w-5 h-5 bg-primary rounded-full absolute top-6 left-6 animate-pulse"></div>
                    {/* Right Eye (Different size for confused look) */}
                    <div className="w-3 h-3 bg-primary rounded-full absolute top-8 right-8"></div>
                    {/* Mouth (Squiggly/confused) */}
                    <svg className="absolute bottom-4 w-12 h-4 text-primary" viewBox="0 0 24 8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                      <path d="M2 4 Q 7 8 12 4 T 22 4" />
                    </svg>
                  </div>
                  
                  {/* Body Logo */}
                  <div className="mt-8 bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center border border-primary/20">
                     <span className="text-primary font-bold text-3xl font-serif">J</span>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-1/4 left-0 w-8 h-8 text-primary/50 animate-bounce">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              </div>
              <div className="absolute bottom-1/4 right-0 text-primary/40 animate-pulse">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Help Section */}
        <div className="w-full max-w-6xl mx-auto mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-card-bg/40 backdrop-blur-md border border-border-custom p-6 md:p-8 rounded-3xl">
            {helpCards.map((card, index) => (
              <div key={index} className="flex flex-col gap-3 group border-b md:border-b-0 md:border-r border-border-custom last:border-0 pb-6 md:pb-0 px-2 md:px-4 last:px-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/10 mb-2">
                  {card.icon}
                </div>
                <h3 className="font-serif text-lg font-bold text-text-base">{card.title}</h3>
                <p className="text-xs text-text-muted leading-relaxed mb-2 flex-1">
                  {card.description}
                </p>
                <Link 
                  href={card.href}
                  className="inline-flex items-center gap-1 text-xs font-mono font-bold text-primary group-hover:underline w-fit"
                >
                  <span>{card.linkText}</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
