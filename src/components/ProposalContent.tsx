"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  UserCheck,
  Video,
  MessageSquare,
  Calendar,
  Award,
  Plane,
  Briefcase,
  GraduationCap,
  Users,
  Heart,
  Target,
  ChevronDown,
  ArrowUp,
  CheckCircle,
  AlertCircle,
  HelpCircle,
  Menu,
  X
} from "lucide-react";

interface ProposalContentProps {
  clientSlug: string;
  clientName: string;
}

export default function ProposalContent({ clientSlug, clientName }: ProposalContentProps) {
  // Navigation state
  const [activeSection, setActiveSection] = useState("overview");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Roadmap state
  const [expandedWeek, setExpandedWeek] = useState<number | null>(1);

  // Refs for scroll-spy
  const overviewRef = useRef<HTMLElement>(null);
  const currentPositionRef = useRef<HTMLElement>(null);
  const strategyRef = useRef<HTMLElement>(null);
  const roadmapRef = useRef<HTMLElement>(null);
  const deliverablesRef = useRef<HTMLElement>(null);
  const measurementRef = useRef<HTMLElement>(null);
  const yourRoleRef = useRef<HTMLElement>(null);
  const nextStepsRef = useRef<HTMLElement>(null);

  // Scroll tracking and scroll-spy
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      if (totalHeight > 0) {
        setScrollProgress(scrollPosition / totalHeight);
      }

      setShowBackToTop(scrollPosition > 800);

      const sections = [
        { id: "overview", ref: overviewRef },
        { id: "current-position", ref: currentPositionRef },
        { id: "strategy", ref: strategyRef },
        { id: "roadmap", ref: roadmapRef },
        { id: "deliverables", ref: deliverablesRef },
        { id: "measurement", ref: measurementRef },
        { id: "your-role", ref: yourRoleRef },
        { id: "next-steps", ref: nextStepsRef }
      ];

      const navHeight = 90;
      const currentScroll = window.scrollY + navHeight + 20;

      for (const section of sections) {
        if (section.ref.current) {
          const top = section.ref.current.offsetTop;
          const height = section.ref.current.offsetHeight;
          if (currentScroll >= top && currentScroll < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: "smooth"
      });
    }
  };

  const navItems = [
    { label: "Overview", id: "overview" },
    { label: "Current Position", id: "current-position" },
    { label: "Strategy", id: "strategy" },
    { label: "90-Day Roadmap", id: "roadmap" },
    { label: "Deliverables", id: "deliverables" },
    { label: "Measurement", id: "measurement" },
    { label: "Your Role", id: "your-role" },
    { label: "Next Steps", id: "next-steps" }
  ];

  // 12-week roadmap data
  const roadmapWeeks = [
    {
      week: 1,
      title: "Discovery and alignment",
      objective: "Define growth goals, audit existing relationships, and map target segments.",
      activities: [
        "Strategic discovery consultation.",
        "Detailed review of personal business history and travel insights.",
        "Gathering existing assets (stories, reference material, private notes).",
        "Formulating audience profiles and communication angles."
      ],
      outputs: [
        "Brand definition and positioning brief.",
        "Target client segments mapping."
      ],
      involvement: "1-hour alignment interview; provision of basic background history."
    },
    {
      week: 2,
      title: "Positioning and messaging",
      objective: "Formulate the core narrative matching client authority to the travel opportunity.",
      activities: [
        "Structuring core message guidelines.",
        "Formulating custom storytelling framework.",
        "Preparing private engagement guides for online messaging.",
        "Drafting customized visual layouts for the digital channels."
      ],
      outputs: [
        "Personal brand messaging guide.",
        "Core narrative copy templates."
      ],
      involvement: "Review and approve draft messaging guidelines (15 to 20 mins)."
    },
    {
      week: 3,
      title: "Digital presence setup",
      objective: "Build and structure the key touchpoints for professional interaction.",
      activities: [
        "Constructing customized entry profiles.",
        "Setting up simple booking and response pathways.",
        "Configuring enquiry validation questions.",
        "Structuring calendar integration for qualified client review."
      ],
      outputs: [
        "Polished, professional digital entry points.",
        "Active meeting scheduling pathway."
      ],
      involvement: "Provide credential access where needed; test booking flow."
    },
    {
      week: 4,
      title: "First content launch",
      objective: "Introduce the personal brand presence and launch the initial batch of content.",
      activities: [
        "First production session to capture raw stories and lessons.",
        "Editing, refining, and formatting content for clarity and premium appearance.",
        "Setting up the weekly publishing schedule.",
        "Activating inquiry pathways."
      ],
      outputs: [
        "Launch-ready content library.",
        "First set of published insights and stories."
      ],
      involvement: "Participate in a 45-minute structured recording session; approve final edits."
    },
    {
      week: 5,
      title: "Establishing rhythm",
      objective: "Maintain consistency and begin analyzing early audience response.",
      activities: [
        "Publishing structured content at set intervals.",
        "Monitoring response, comments, and direct questions.",
        "Compiling initial community feedback.",
        "Refining the publication process for maximum output consistency."
      ],
      outputs: [
        "Second batch of published insights.",
        "Initial feedback and engagement report."
      ],
      involvement: "Review weekly report; low-friction chat check-in."
    },
    {
      week: 6,
      title: "Audience development",
      objective: "Expand visibility to entrepreneurs, travellers, and network-marketing prospects.",
      activities: [
        "Refining content structure to highlight business opportunities and travel lifestyle.",
        "Directing profile visibility toward qualified demographic targets.",
        "Initiating outreach to industry-specific connections.",
        "Monitoring growing interest metrics."
      ],
      outputs: [
        "Audience expansion metrics report.",
        "Qualified connection log."
      ],
      involvement: "None (Fully handled by Jayant Web & AI Systems)."
    },
    {
      week: 7,
      title: "Enquiry activation",
      objective: "Drive audience interest toward active enquiries.",
      activities: [
        "Deploying targeted call-to-actions in content.",
        "Sharing lessons that encourage business dialogue.",
        "Activating direct communication paths.",
        "Reviewing incoming messages."
      ],
      outputs: [
        "Initial flow of warm inbound messages.",
        "Conversation tracking sheet."
      ],
      involvement: "None (Fully handled by Jayant Web & AI Systems)."
    },
    {
      week: 8,
      title: "Qualification and filtering",
      objective: "Identify and shortlist highly qualified prospects.",
      activities: [
        "Applying validation parameters to incoming enquiries.",
        "Determining interest level, business experience, and resource fit.",
        "Filtering out low-intent queries.",
        "Inviting qualified prospects to schedule discussions."
      ],
      outputs: [
        "Shortlist of vetted prospects.",
        "Meeting bookings confirmed."
      ],
      involvement: "Review the vetted prospect summaries."
    },
    {
      week: 9,
      title: "Meeting setting flow",
      objective: "Seamlessly transition qualified interest into structured meetings.",
      activities: [
        "Managing meeting schedules and calendar bookings.",
        "Sending professional confirmation messages.",
        "Delivering brief pre-meeting context to set expectation parameters.",
        "Providing the client with structured background briefs for each attendee."
      ],
      outputs: [
        "Active meeting calendar.",
        "Briefing documents for each prospect."
      ],
      involvement: "Host and run the 20 to 30 minute introductory business calls (vetted leads only)."
    },
    {
      week: 10,
      title: "Follow-up systemization",
      objective: "Nurture prospects post-meeting to finalize decisions.",
      activities: [
        "Structuring custom follow-up messaging.",
        "Sharing relevant travel or business information sheets with prospects.",
        "Tracking decision stages of active conversations.",
        "Providing guidance on next-step communications."
      ],
      outputs: [
        "Follow-up logs and templates.",
        "Status tracking sheets."
      ],
      involvement: "Maintain direct relations; update prospect status feedback."
    },
    {
      week: 11,
      title: "Performance assessment",
      objective: "Analyze growth data and identify improvement opportunities.",
      activities: [
        "Evaluating total reach, enquiries, and booked conversations.",
        "Analyzing conversion metrics from discovery to booking.",
        "Gathering prospect feedback to adjust core messaging.",
        "Compiling key performance indicators."
      ],
      outputs: [
        "Comprehensive 80-day growth report.",
        "Refinement recommendations."
      ],
      involvement: "30-minute review session to discuss outcomes and strategies."
    },
    {
      week: 12,
      title: "Scale and growth strategy",
      objective: "Prepare the digital acquisition asset for subsequent expansion stages.",
      activities: [
        "Increasing publishing resources for high-converting content topics.",
        "Optimizing the meeting-booking journey for efficiency.",
        "Outlining the strategy for the next quarter.",
        "Confirming long-term content and distribution structures."
      ],
      outputs: [
        "Quarter-2 scaling blueprint.",
        "Final asset valuation and system transition overview."
      ],
      involvement: "Collaborative session to align on subsequent goals."
    }
  ];

  return (
    <div className="proposal-page relative min-h-screen bg-[#070A13] text-slate-100 selection:bg-[#C5A880]/20 selection:text-[#C5A880] font-sans antialiased overflow-x-hidden">
      
      {/* 1. Persistent top navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#070A13]/85 backdrop-blur-md border-b border-slate-800 transition-all duration-300">
        {/* Scroll progress bar */}
        <div 
          aria-hidden="true" 
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#C5A880] to-[#E5C8A0] origin-left transition-transform duration-75"
          style={{ transform: `scaleX(${scrollProgress})`, width: "100%" }}
        />
        
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-[#C5A880] font-bold font-mono">
              Private client proposal
            </span>
            <span className="text-sm font-serif font-bold text-slate-200">
              Prepared for: {clientName}
            </span>
          </div>

          {/* Desktop nav items */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-xs font-semibold tracking-wide transition-all ${
                  activeSection === item.id 
                    ? "text-[#C5A880] scale-105" 
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden sm:flex items-center">
            <button
              onClick={() => scrollToSection("next-steps")}
              className="inline-flex items-center gap-1.5 px-4.5 py-2 text-xs font-bold rounded-lg bg-[#C5A880] hover:bg-[#D8B992] text-slate-950 transition-all duration-200 active:scale-95 shadow-md hover:shadow-[#C5A880]/10"
            >
              <span>Discuss the plan</span>
              <ArrowRight className="size-3.5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-slate-400 hover:text-slate-200 p-2"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* Mobile navigation drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-20 left-0 right-0 bg-[#0C1225] border-b border-slate-800 p-6 flex flex-col space-y-4 shadow-xl z-40 lg:hidden"
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left text-sm font-semibold py-2 border-b border-slate-800/50 ${
                    activeSection === item.id ? "text-[#C5A880]" : "text-slate-400"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("next-steps")}
                className="w-full inline-flex items-center justify-center gap-1.5 px-5 py-3 text-sm font-bold rounded-lg bg-[#C5A880] text-slate-950 hover:bg-[#D8B992] transition-all"
              >
                <span>Discuss the plan</span>
                <ArrowRight className="size-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main content area */}
      <main className="max-w-7xl mx-auto px-6 pt-32 pb-24 flex flex-col gap-24 md:gap-36">

        {/* ==========================================
            Hero section
            ========================================== */}
        <section 
          ref={overviewRef}
          id="overview" 
          className="relative min-h-[70vh] flex flex-col justify-center items-start text-left pt-8 md:pt-16 border-b border-slate-800/40 pb-20"
        >
          {/* Subtle accent light */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#C5A880]/5 rounded-full blur-[100px] pointer-events-none" />
          
          {/* Prepared by label */}
          <div className="inline-flex flex-col mb-8">
            <span className="font-mono text-xs font-bold tracking-widest text-[#C5A880] uppercase">
              Prepared by
            </span>
            <span className="text-sm font-semibold text-slate-400 mt-1">
              JAYANT WEB & AI SYSTEMS
            </span>
          </div>

          {/* Headline */}
          <h1 className="h1-proposal text-5xl md:text-7xl lg:text-8xl mb-8 max-w-5xl">
            Your experience, built for the digital world.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mb-12 font-light">
            A 90-day digital growth and business development plan designed to turn your existing business credibility, travel experience, and personal authority into a professional digital presence and a measurable flow of business conversations.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => scrollToSection("roadmap")}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#C5A880] hover:bg-[#D8B992] text-slate-950 px-8 py-4 text-sm font-semibold transition-all duration-200 shadow-lg hover:shadow-[#C5A880]/10 active:scale-[0.98]"
            >
              <span>Review the 90-day plan</span>
              <ArrowRight className="size-4" />
            </button>

            <button
              onClick={() => scrollToSection("strategy")}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/50 hover:bg-slate-900 text-slate-200 px-8 py-4 text-sm font-semibold transition-all duration-200 active:scale-[0.98]"
            >
              <span>See what we are building</span>
              <ArrowRight className="size-4" />
            </button>
          </div>
        </section>


        {/* ==========================================
            Executive summary section
            ========================================== */}
        <section className="border-b border-slate-800/40 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs uppercase tracking-widest text-[#C5A880] font-bold font-mono">
                Executive summary
              </span>
              <h2 className="h2-proposal text-3xl md:text-5xl mt-3">
                Where you are today.<br />Where we want to go.
              </h2>
            </div>
            
            <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed font-light text-base md:text-lg">
              <p>
                You have built a successful career in corporate governance, compliance, and large scale operations at global enterprises like NTT DATA. Your credibility in physical business environments is solid.
              </p>
              <p>
                However, when potential partners, associates, or opportunities look for you in the digital space, they find a gap. This absence of digital presence creates a friction point. It prevents prospective contacts from understanding your background and starting meaningful business relationships.
              </p>
              
              {/* Highlight quote card */}
              <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 my-8">
                <span className="text-xs uppercase tracking-widest text-[#C5A880] font-bold font-mono block mb-2">
                  The core strategy
                </span>
                <p className="font-serif text-xl md:text-2xl text-slate-200 italic leading-snug">
                  "The objective is not to turn you into an influencer. The objective is to build a digital business asset around the credibility you already have."
                </p>
              </div>

              <p>
                We do not expect you to write posts daily, edit video footage, or manage code. Our purpose is to design, produce, and run a digital system that translates your expertise into digital authority, leaving you free to focus entirely on building high-value business relationships.
              </p>
            </div>
          </div>
        </section>


        {/* ==========================================
            Current position section
            ========================================== */}
        <section ref={currentPositionRef} id="current-position" className="border-b border-slate-800/40 pb-20 scroll-mt-24">
          <div className="mb-12">
            <span className="text-xs uppercase tracking-widest text-[#C5A880] font-bold font-mono">
              The digital gap
            </span>
            <h2 className="h2-proposal text-3xl md:text-5xl mt-2">
              Today's assessment
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* What already exists */}
            <div className="p-8 rounded-2xl bg-slate-900/20 border border-slate-800/60 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="p-2.5 rounded-lg bg-green-500/10 text-green-400">
                    <CheckCircle className="size-6" />
                  </div>
                  <h3 className="h3-proposal text-2xl">
                    What already exists
                  </h3>
                </div>
                
                <ul className="space-y-4">
                  {[
                    "Proven executive leadership at global technology organizations.",
                    "Deep understanding of corporate governance and compliance.",
                    "An active, high-value professional network.",
                    "First-hand corporate travel and logistics insights.",
                    "Existing trust and direct relationship skills.",
                    "Personal authority in executive boardrooms."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-300 font-light text-sm md:text-base">
                      <span className="size-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-8 pt-6 border-t border-slate-800/50">
                <span className="text-xs text-green-400/80 font-mono uppercase tracking-wider block">
                  Current asset valuation
                </span>
                <span className="text-sm text-slate-400 mt-1 block">
                  High value foundation waiting to be leveraged.
                </span>
              </div>
            </div>

            {/* What is missing digitally */}
            <div className="p-8 rounded-2xl bg-slate-900/20 border border-slate-800/60 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="p-2.5 rounded-lg bg-[#C5A880]/10 text-[#C5A880]">
                    <AlertCircle className="size-6" />
                  </div>
                  <h3 className="h3-proposal text-2xl">
                    What is missing digitally
                  </h3>
                </div>

                <ul className="space-y-4">
                  {[
                    "Professional and authoritative digital presence.",
                    "Consistent, trust building insights and updates.",
                    "Clear positioning showing who you are online.",
                    "A structured enquiry path for digital visitors.",
                    "An organized digital pathway to secure meetings.",
                    "Complete performance data and conversation visibility."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-300 font-light text-sm md:text-base">
                      <span className="size-1.5 rounded-full bg-[#C5A880] mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800/50">
                <span className="text-xs text-[#C5A880]/80 font-mono uppercase tracking-wider block">
                  Current digital vulnerability
                </span>
                <span className="text-sm text-slate-400 mt-1 block">
                  Lost leverage and missing connection pathways.
                </span>
              </div>
            </div>
          </div>

          {/* Bottom statement */}
          <div className="p-6 rounded-2xl bg-[#C5A880]/[0.02] border border-[#C5A880]/10 text-center">
            <p className="text-base md:text-lg text-slate-300 font-light max-w-4xl mx-auto">
              "Credibility already exists. The opportunity is to make it visible, understandable, and accessible online."
            </p>
          </div>
        </section>


        {/* ==========================================
            The opportunity section
            ========================================== */}
        <section className="border-b border-slate-800/40 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs uppercase tracking-widest text-[#C5A880] font-bold font-mono">
                The objective
              </span>
              <h2 className="h2-proposal text-3xl md:text-5xl mt-3">
                Turn offline trust<br />into digital authority
              </h2>
              <p className="text-slate-400 mt-6 font-light text-sm md:text-base leading-relaxed">
                By bridging your physical track record with online structures, we unlock access to qualified business partners who value credentials and mature leadership.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-8">
              {/* Op 1 */}
              <div className="relative pl-16">
                <div className="absolute left-0 top-1 text-2xl font-serif text-[#C5A880]/40">
                  01
                </div>
                <h3 className="h3-proposal text-xl mb-2">
                  Build recognition
                </h3>
                <p className="text-slate-300 font-light text-sm md:text-base leading-relaxed">
                  Establish a recognizable and highly credible online personality that matches your physical authority. We define your content layout, messaging tone, and profile layouts to build digital trust immediately.
                </p>
              </div>

              {/* Op 2 */}
              <div className="relative pl-16">
                <div className="absolute left-0 top-1 text-2xl font-serif text-[#C5A880]/40">
                  02
                </div>
                <h3 className="h3-proposal text-xl mb-2">
                  Create relevant conversations
                </h3>
                <p className="text-slate-300 font-light text-sm md:text-base leading-relaxed">
                  Use structured insights and stories to attract individuals who are genuinely interested in travel lifestyle, entrepreneurship, and alternative business structures, starting clean, high intent dialogues.
                </p>
              </div>

              {/* Op 3 */}
              <div className="relative pl-16">
                <div className="absolute left-0 top-1 text-2xl font-serif text-[#C5A880]/40">
                  03
                </div>
                <h3 className="h3-proposal text-xl mb-2">
                  Establish a repeatable business development process
                </h3>
                <p className="text-slate-300 font-light text-sm md:text-base leading-relaxed">
                  Design a smooth pathway that guides prospects from initial discovery, through structured interest qualification, directly into scheduled consultations, followed by structured partner onboarding.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* ==========================================
            What we are building section
            ========================================== */}
        <section ref={strategyRef} id="strategy" className="border-b border-slate-800/40 pb-20 scroll-mt-24">
          <div className="mb-12">
            <span className="text-xs uppercase tracking-widest text-[#C5A880] font-bold font-mono">
              The solution
            </span>
            <h2 className="h2-proposal text-3xl md:text-5xl mt-2">
              What we are building
            </h2>
            <p className="text-slate-400 mt-4 max-w-3xl font-light text-sm md:text-base">
              A comprehensive digital asset designed to work in the background, reinforcing your credibility and delivering qualified enquiries without requiring your operational involvement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="p-8 rounded-2xl bg-[#0E1326]/30 border border-[#1E2544] flex flex-col justify-between hover:border-[#C5A880]/30 transition-all group">
              <div>
                <span className="font-mono text-xs font-semibold text-[#C5A880]/60 block mb-6">
                  01 / PRESENCE
                </span>
                <h3 className="h3-proposal text-xl mb-3 group-hover:text-[#C5A880] transition-colors">
                  Professional digital presence
                </h3>
                <p className="text-slate-400 font-light text-xs md:text-sm leading-relaxed">
                  A polished online landing portal that immediately communicates your background, expertise, and what a prospective partner should do next.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-2xl bg-[#0E1326]/30 border border-[#1E2544] flex flex-col justify-between hover:border-[#C5A880]/30 transition-all group">
              <div>
                <span className="font-mono text-xs font-semibold text-[#C5A880]/60 block mb-6">
                  02 / TRUST
                </span>
                <h3 className="h3-proposal text-xl mb-3 group-hover:text-[#C5A880] transition-colors">
                  Personal brand positioning
                </h3>
                <p className="text-slate-400 font-light text-xs md:text-sm leading-relaxed">
                  A structured messaging framework that defines your target audience, core topics, and profile copy, establishing instant authority.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-2xl bg-[#0E1326]/30 border border-[#1E2544] flex flex-col justify-between hover:border-[#C5A880]/30 transition-all group">
              <div>
                <span className="font-mono text-xs font-semibold text-[#C5A880]/60 block mb-6">
                  03 / DISTRIBUTION
                </span>
                <h3 className="h3-proposal text-xl mb-3 group-hover:text-[#C5A880] transition-colors">
                  Consistent content systems
                </h3>
                <p className="text-slate-400 font-light text-xs md:text-sm leading-relaxed">
                  A high-end content pipeline that packages your insights and distributes them systematically, creating regular market visibility.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="p-8 rounded-2xl bg-[#0E1326]/30 border border-[#1E2544] flex flex-col justify-between hover:border-[#C5A880]/30 transition-all group">
              <div>
                <span className="font-mono text-xs font-semibold text-[#C5A880]/60 block mb-6">
                  04 / ACQUISITION
                </span>
                <h3 className="h3-proposal text-xl mb-3 group-hover:text-[#C5A880] transition-colors">
                  Enquiry and conversation journey
                </h3>
                <p className="text-slate-400 font-light text-xs md:text-sm leading-relaxed">
                  A clean, friction free mechanism that qualifies incoming interest and starts discussions with prospects who match your partner profile.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="p-8 rounded-2xl bg-[#0E1326]/30 border border-[#1E2544] flex flex-col justify-between hover:border-[#C5A880]/30 transition-all group">
              <div>
                <span className="font-mono text-xs font-semibold text-[#C5A880]/60 block mb-6">
                  05 / RELATIONSHIP
                </span>
                <h3 className="h3-proposal text-xl mb-3 group-hover:text-[#C5A880] transition-colors">
                  Meeting and onboarding process
                </h3>
                <p className="text-slate-400 font-light text-xs md:text-sm leading-relaxed">
                  A professional booking flow that manages invitations, coordinates reminders, and prepares prospects for serious, structured business calls.
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="p-8 rounded-2xl bg-[#0E1326]/30 border border-[#1E2544] flex flex-col justify-between hover:border-[#C5A880]/30 transition-all group">
              <div>
                <span className="font-mono text-xs font-semibold text-[#C5A880]/60 block mb-6">
                  06 / ANALYTICS
                </span>
                <h3 className="h3-proposal text-xl mb-3 group-hover:text-[#C5A880] transition-colors">
                  Reporting and system optimization
                </h3>
                <p className="text-slate-400 font-light text-xs md:text-sm leading-relaxed">
                  A transparent review dashboard that highlights reach metrics, qualified lead volume, and conversion trends to continuously improve outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* ==========================================
            Who we want to reach section
            ========================================== */}
        <section className="border-b border-slate-800/40 pb-20">
          <div className="mb-12">
            <span className="text-xs uppercase tracking-widest text-[#C5A880] font-bold font-mono">
              Audience alignment
            </span>
            <h2 className="h2-proposal text-3xl md:text-5xl mt-2">
              The right audience matters more than the biggest audience
            </h2>
            <p className="text-slate-400 mt-4 max-w-3xl font-light text-sm md:text-base">
              We focus our efforts on targeting specific groups that match your background and hold high value for a travel business opportunity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {/* Profile 1 */}
            <div className="p-6 rounded-2xl bg-slate-900/20 border border-[#1E2544]">
              <div className="size-11 rounded-lg bg-[#C5A880]/10 text-[#C5A880] flex items-center justify-center mb-5">
                <Plane className="size-5.5" />
              </div>
              <h3 className="h3-proposal text-lg mb-2">
                The traveller
              </h3>
              <p className="text-slate-400 font-light text-xs md:text-sm leading-relaxed">
                Individuals motivated by premium travel experiences, unique destination access, lifestyle flexibility, and leisure oriented growth.
              </p>
            </div>

            {/* Profile 2 */}
            <div className="p-6 rounded-2xl bg-slate-900/20 border border-[#1E2544]">
              <div className="size-11 rounded-lg bg-[#C5A880]/10 text-[#C5A880] flex items-center justify-center mb-5">
                <Briefcase className="size-5.5" />
              </div>
              <h3 className="h3-proposal text-lg mb-2">
                The entrepreneur
              </h3>
              <p className="text-slate-400 font-light text-xs md:text-sm leading-relaxed">
                Existing business owners looking for secondary opportunities to diversify income using their current professional networks.
              </p>
            </div>

            {/* Profile 3 */}
            <div className="p-6 rounded-2xl bg-slate-900/20 border border-[#1E2544]">
              <div className="size-11 rounded-lg bg-[#C5A880]/10 text-[#C5A880] flex items-center justify-center mb-5">
                <Users className="size-5.5" />
              </div>
              <h3 className="h3-proposal text-lg mb-2">
                The corporate executive
              </h3>
              <p className="text-slate-400 font-light text-xs md:text-sm leading-relaxed">
                Experienced directors, VPs, and corporate executives who understand high-level governance and are looking for professional diversification.
              </p>
            </div>

            {/* Profile 4 */}
            <div className="p-6 rounded-2xl bg-slate-900/20 border border-[#1E2544]">
              <div className="size-11 rounded-lg bg-[#C5A880]/10 text-[#C5A880] flex items-center justify-center mb-5">
                <GraduationCap className="size-5.5" />
              </div>
              <h3 className="h3-proposal text-lg mb-2">
                The professional
              </h3>
              <p className="text-slate-400 font-light text-xs md:text-sm leading-relaxed">
                Experienced corporate leaders and specialists seeking a viable, high potential transition channel out of standard routines.
              </p>
            </div>
          </div>

          <div className="p-5.5 rounded-xl border border-slate-800/50 bg-[#0C1225]/40 flex items-start gap-3.5">
            <HelpCircle className="size-5 text-[#C5A880] mt-0.5 shrink-0" />
            <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-light">
              <strong>Please note:</strong> This target audience definition will be refined, tested, and systematically adapted during Phase 1 (Discovery & Positioning) to focus on the absolute highest-converting profiles.
            </p>
          </div>
        </section>


        {/* ==========================================
            Personal brand strategy section
            ========================================== */}
        <section className="border-b border-slate-800/40 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs uppercase tracking-widest text-[#C5A880] font-bold font-mono">
                Positioning framework
              </span>
              <h2 className="h2-proposal text-3xl md:text-5xl mt-3">
                Build the person before<br />promoting the opportunity
              </h2>
              <div className="p-6 rounded-2xl bg-[#0E1326]/30 border border-[#1E2544] mt-8">
                <span className="text-xs uppercase tracking-widest text-[#C5A880] font-bold font-mono block mb-2">
                  The ecosystem concept
                </span>
                <p className="text-slate-300 font-light text-xs md:text-sm leading-relaxed">
                  We establish your identity as a mature corporate leader and entrepreneur first. The specific travel business proposal will act as a natural extension of your lessons and leadership, not the sole focus of your presence.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Pillar 1 */}
              <div className="p-6.5 rounded-xl bg-slate-900/30 border border-[#1E2544] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4 text-[#C5A880]">
                    <Briefcase className="size-5" />
                    <h3 className="h3-proposal text-lg">
                      Corporate governance
                    </h3>
                  </div>
                  <p className="text-slate-400 font-light text-xs md:text-sm leading-relaxed">
                    Business lessons, compliance guidelines, decision frameworks, career stories, and large scale global operational experiences.
                  </p>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="p-6.5 rounded-xl bg-slate-900/30 border border-[#1E2544] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4 text-[#C5A880]">
                    <Plane className="size-5" />
                    <h3 className="h3-proposal text-lg">
                      Travel insights
                    </h3>
                  </div>
                  <p className="text-slate-400 font-light text-xs md:text-sm leading-relaxed">
                    Destination analysis, premium travel reviews, cultural perspectives, and advice on balancing lifestyle freedom with operations.
                  </p>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="p-6.5 rounded-xl bg-slate-900/30 border border-[#1E2544] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4 text-[#C5A880]">
                    <TrendingUp className="size-5" />
                    <h3 className="h3-proposal text-lg">
                      Entrepreneurship
                    </h3>
                  </div>
                  <p className="text-slate-400 font-light text-xs md:text-sm leading-relaxed">
                    Modern business opportunities, diversification approaches, resilience, risk management, and scaling business networks.
                  </p>
                </div>
              </div>

              {/* Pillar 4 */}
              <div className="p-6.5 rounded-xl bg-slate-900/30 border border-[#1E2544] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4 text-[#C5A880]">
                    <Heart className="size-5" />
                    <h3 className="h3-proposal text-lg">
                      Executive lifestyle
                    </h3>
                  </div>
                  <p className="text-slate-400 font-light text-xs md:text-sm leading-relaxed">
                    Personal updates, reflections on achievement, behind the scenes insights, showing the authentic professional behind the portfolio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ==========================================
            Content strategy section
            ========================================== */}
        <section className="border-b border-slate-800/40 pb-20">
          <div className="mb-12">
            <span className="text-xs uppercase tracking-widest text-[#C5A880] font-bold font-mono">
              Narrative structure
            </span>
            <h2 className="h2-proposal text-3xl md:text-5xl mt-2">
              Content that builds recognition, trust, and conversation
            </h2>
            <p className="text-slate-400 mt-4 max-w-3xl font-light text-sm md:text-base">
              Content is our vehicle. We package your expertise into structured insights that establish trust with prospects before they reach out.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 rounded-2xl bg-slate-900/10 border border-slate-800/60">
              <h3 className="h3-proposal text-lg border-b border-slate-850 pb-3 mb-4">
                Core themes
              </h3>
              <ul className="space-y-3 text-slate-300 font-light text-xs md:text-sm">
                <li>&bull; Business history stories</li>
                <li>&bull; Travel destination reviews</li>
                <li>&bull; Leadership lessons</li>
                <li>&bull; Personal success metrics</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/10 border border-slate-800/60">
              <h3 className="h3-proposal text-lg border-b border-slate-850 pb-3 mb-4">
                Educational content
              </h3>
              <ul className="space-y-3 text-slate-300 font-light text-xs md:text-sm">
                <li>&bull; Industry trends analysis</li>
                <li>&bull; Answering common partner concerns</li>
                <li>&bull; Overcoming business misconceptions</li>
                <li>&bull; Clarifying network growth dynamics</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/10 border border-slate-800/60">
              <h3 className="h3-proposal text-lg border-b border-slate-850 pb-3 mb-4">
                Conversion assets
              </h3>
              <ul className="space-y-3 text-slate-300 font-light text-xs md:text-sm">
                <li>&bull; Behind the scenes activity</li>
                <li>&bull; Invitation parameters for meetings</li>
                <li>&bull; Success patterns in team building</li>
                <li>&bull; Travel luxury features</li>
              </ul>
            </div>
          </div>

          {/* Formula diagram */}
          <div className="p-8 rounded-2xl bg-[#0E1326]/40 border border-[#1E2544] text-center flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div className="flex flex-col items-center">
              <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 mb-1">Authentic authority</span>
              <span className="text-lg md:text-xl font-serif font-bold text-slate-200">REAL PERSON</span>
            </div>
            <span className="text-xl text-[#C5A880] font-serif">+</span>
            <div className="flex flex-col items-center">
              <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 mb-1">Industry background</span>
              <span className="text-lg md:text-xl font-serif font-bold text-slate-200">REAL EXPERIENCE</span>
            </div>
            <span className="text-xl text-[#C5A880] font-serif">+</span>
            <div className="flex flex-col items-center">
              <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 mb-1">Polished distribution</span>
              <span className="text-lg md:text-xl font-serif font-bold text-slate-200">PROFESSIONAL STORYTELLING</span>
            </div>
            <span className="text-xl text-[#C5A880] font-serif">=</span>
            <div className="flex flex-col items-center bg-[#C5A880]/5 px-6 py-3 rounded-xl border border-[#C5A880]/20">
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#C5A880] mb-1">The asset</span>
              <span className="text-lg md:text-xl font-serif font-bold text-[#C5A880]">CREDIBLE DIGITAL PRESENCE</span>
            </div>
          </div>
        </section>


        {/* ==========================================
            Content production section
            ========================================== */}
        <section className="border-b border-slate-800/40 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs uppercase tracking-widest text-[#C5A880] font-bold font-mono">
                Workflow efficiency
              </span>
              <h2 className="h2-proposal text-3xl md:text-5xl mt-3 leading-tight">
                A simple process that does not consume your time
              </h2>
              <p className="text-slate-300 mt-6 font-light text-sm md:text-base leading-relaxed">
                You do not need to create, film, or edit content. We structure low friction, scheduled recording sessions (e.g., 45 minutes once a month) where we interview you on stories, travel topics, and business decisions.
              </p>
              <p className="text-slate-300 mt-4 font-light text-sm md:text-base leading-relaxed">
                Our production team then processes these raw assets into high end written insights and clean presentations, managing publishing and tracking responses completely.
              </p>
            </div>

            <div className="lg:col-span-7">
              {/* Process flow diagram */}
              <div className="p-8 rounded-2xl bg-slate-900/20 border border-[#1E2544] relative overflow-hidden">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6 relative z-10">
                  {/* Step 1 */}
                  <div className="flex-1 text-center sm:text-left">
                    <div className="size-10 rounded-full bg-[#C5A880]/10 text-[#C5A880] flex items-center justify-center mx-auto sm:mx-0 mb-4 font-serif">
                      01
                    </div>
                    <h4 className="h3-proposal text-base mb-1">RECORD</h4>
                    <p className="text-slate-400 font-light text-xs leading-relaxed">
                      Monthly 45-min guided interview session to extract insights.
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="hidden sm:block text-[#C5A880]/40 font-bold text-lg">&rarr;</div>

                  {/* Step 2 */}
                  <div className="flex-1 text-center sm:text-left">
                    <div className="size-10 rounded-full bg-[#C5A880]/10 text-[#C5A880] flex items-center justify-center mx-auto sm:mx-0 mb-4 font-serif">
                      02
                    </div>
                    <h4 className="h3-proposal text-base mb-1">PRODUCE</h4>
                    <p className="text-slate-400 font-light text-xs leading-relaxed">
                      We draft, edit, format, and package assets professionally.
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="hidden sm:block text-[#C5A880]/40 font-bold text-lg">&rarr;</div>

                  {/* Step 3 */}
                  <div className="flex-1 text-center sm:text-left">
                    <div className="size-10 rounded-full bg-[#C5A880]/10 text-[#C5A880] flex items-center justify-center mx-auto sm:mx-0 mb-4 font-serif">
                      03
                    </div>
                    <h4 className="h3-proposal text-base mb-1">PUBLISH</h4>
                    <p className="text-slate-400 font-light text-xs leading-relaxed">
                      We manage layout, posting, and scheduling.
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="hidden sm:block text-[#C5A880]/40 font-bold text-lg">&rarr;</div>

                  {/* Step 4 */}
                  <div className="flex-1 text-center sm:text-left">
                    <div className="size-10 rounded-full bg-[#C5A880]/10 text-[#C5A880] flex items-center justify-center mx-auto sm:mx-0 mb-4 font-serif">
                      04
                    </div>
                    <h4 className="h3-proposal text-base mb-1">LEARN</h4>
                    <p className="text-slate-400 font-light text-xs leading-relaxed">
                      Review results and focus on topics with positive response.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-start gap-3 text-slate-400 font-light text-xs leading-relaxed max-w-xl">
                <CheckCircle className="size-4 text-green-400 mt-0.5 shrink-0" />
                <span>
                  <strong>Low friction for you:</strong> Scheduled, structured, and managed. You only focus on the raw storytelling; we handle the operational workload.
                </span>
              </div>
            </div>
          </div>
        </section>


        {/* ==========================================
            The business development journey section
            ========================================== */}
        <section ref={roadmapRef} id="roadmap" className="border-b border-slate-800/40 pb-20 scroll-mt-24">
          <div className="mb-12">
            <span className="text-xs uppercase tracking-widest text-[#C5A880] font-bold font-mono">
              The relationship pathway
            </span>
            <h2 className="h2-proposal text-3xl md:text-5xl mt-2">
              From attention to business conversation
            </h2>
            <p className="text-slate-400 mt-4 max-w-3xl font-light text-sm md:text-base">
              Our plan outlines a clean pathway to shift attention into qualified one on one partner dialogues.
            </p>
          </div>

          {/* Business development funnel */}
          <div className="grid grid-cols-1 lg:grid-cols-7 gap-8 items-center mb-12">
            <div className="lg:col-span-4 space-y-6">
              {[
                { title: "SEE", desc: "Qualified demographics view your insights and storytelling assets." },
                { title: "UNDERSTAND", desc: "Visitors review your profile, discovering your credentials and alignment with the travel opportunity." },
                { title: "BECOME INTERESTED", desc: "Prospects recognize value and bookmark your insights, demonstrating growing affinity." },
                { title: "START A CONVERSATION", desc: "Prospects reach out via direct channels or leave positive comments on business topics." },
                { title: "SERIOUS PROSPECT", desc: "We vet incoming enquiries to confirm business readiness, experience, and capability." },
                { title: "MEETING", desc: "Qualified prospects book directly onto your calendar for a structured consultation." },
                { title: "FOLLOW-UP", desc: "We supply post-discussion material to nurture decisions and close deals." }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-4 items-start pl-6 border-l border-[#C5A880]/30 relative">
                  <div className="absolute -left-[6px] top-1.5 size-3 rounded-full bg-[#C5A880]" />
                  <div className="flex flex-col">
                    <span className="font-mono text-xs font-bold text-[#C5A880]">{step.title}</span>
                    <p className="text-slate-300 font-light text-sm mt-1">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-3 p-8 rounded-2xl bg-[#0E1326]/30 border border-[#1E2544]">
              <span className="text-xs uppercase tracking-widest text-[#C5A880] font-bold font-mono block mb-3">
                Focus on conversation
              </span>
              <p className="font-serif text-xl text-slate-200 mb-4 leading-snug">
                "The objective is not maximum views. The objective is meaningful business conversations."
              </p>
              <p className="text-slate-400 font-light text-xs leading-relaxed">
                Many online strategies focus on generic views and high follower counts. We prioritize relationship value. We want a smaller, highly vetted audience that turns into actual scheduled meetings on your calendar.
              </p>
            </div>
          </div>
        </section>


        {/* ==========================================
            Enquiry and prospect management section
            ========================================== */}
        <section className="border-b border-slate-800/40 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs uppercase tracking-widest text-[#C5A880] font-bold font-mono">
                Prospect handling
              </span>
              <h2 className="h2-proposal text-3xl md:text-5xl mt-3 leading-tight">
                Make sure serious opportunities do not get lost
              </h2>
              <p className="text-slate-300 mt-6 font-light text-sm md:text-base leading-relaxed">
                When prospects inquire, they expect professional, prompt responses. We run a structured enquiry handling system that answers questions, checks suitability, and coordinates dates.
              </p>
              <p className="text-slate-300 mt-4 font-light text-sm md:text-base leading-relaxed">
                Every active dialogue is logged, categorized, and nurtured, ensuring that serious business partners remain visible and follow up activities occur on time.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-xl bg-slate-900/20 border border-[#1E2544]">
                <h4 className="h3-proposal text-base mb-2">Respond professionally</h4>
                <p className="text-slate-400 font-light text-xs leading-relaxed">
                  Timely, high end messaging that respects prospective partner inquiries.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-900/20 border border-[#1E2544]">
                <h4 className="h3-proposal text-base mb-2">Qualify fit</h4>
                <p className="text-slate-400 font-light text-xs leading-relaxed">
                  Brief, structured questions to separate curiosity seekers from business builders.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-900/20 border border-[#1E2544]">
                <h4 className="h3-proposal text-base mb-2">Clear calendar pathway</h4>
                <p className="text-slate-400 font-light text-xs leading-relaxed">
                  Simplifying booking details so qualified candidates schedule calls instantly.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-900/20 border border-[#1E2544]">
                <h4 className="h3-proposal text-base mb-2">Systematic follow-up</h4>
                <p className="text-slate-400 font-light text-xs leading-relaxed">
                  Keeping track of next steps so positive conversations stay active and convert.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* ==========================================
            Meeting journey section
            ========================================== */}
        <section className="border-b border-slate-800/40 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="p-8 rounded-2xl bg-slate-900/20 border border-[#1E2544]">
                {/* Visual flow diagram */}
                <div className="flex flex-wrap items-center gap-3">
                  {[
                    "Warm inbound conversation",
                    "Interest confirmed",
                    "Qualified review",
                    "Calendar booking",
                    "Context reminder",
                    "Strategy call",
                    "Follow-up onboarding"
                  ].map((flowStep, idx, arr) => (
                    <React.Fragment key={idx}>
                      <span className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-[#0C1225] border border-slate-800 text-slate-300">
                        {flowStep}
                      </span>
                      {idx < arr.length - 1 && (
                        <span className="text-[#C5A880]/50 font-bold">&rarr;</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2">
              <span className="text-xs uppercase tracking-widest text-[#C5A880] font-bold font-mono">
                Meeting management
              </span>
              <h2 className="h2-proposal text-3xl md:text-5xl mt-3 leading-tight">
                Turn interest into a clear next step
              </h2>
              <p className="text-slate-300 mt-6 font-light text-sm md:text-base leading-relaxed">
                Before a prospect meets you, they receive a brief confirmation outlining the conversation purpose and background resources to review.
              </p>
              <p className="text-slate-300 mt-4 font-light text-sm md:text-base leading-relaxed">
                <strong>Your role:</strong> Your main involvement begins only when the prospect is qualified, primed, and scheduled on your calendar for a direct discussion.
              </p>
            </div>
          </div>
        </section>


        {/* ==========================================
            Reporting section
            ========================================== */}
        <section ref={measurementRef} id="measurement" className="border-b border-slate-800/40 pb-20 scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs uppercase tracking-widest text-[#C5A880] font-bold font-mono">
                Accountability
              </span>
              <h2 className="h2-proposal text-3xl md:text-5xl mt-3">
                What we measure
              </h2>
              <p className="text-slate-400 mt-6 font-light text-sm md:text-base leading-relaxed">
                We believe in tracking concrete, operational indicators that represent system health and real business conversations. We do not provide fabricated milestones.
              </p>
              <div className="p-5.5 rounded-xl border border-slate-800/80 bg-[#0C1225]/40 mt-8">
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  "Initial performance data gathered during the first 30 days will be used to establish realistic benchmarks and improve the overall journey."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-8">
              {/* Category 1 */}
              <div>
                <h3 className="h3-proposal text-xl border-b border-slate-850 pb-2 mb-4 flex items-center gap-2">
                  <span className="size-2 rounded-full bg-[#C5A880]" />
                  Awareness indicators
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-slate-900/30 border border-[#1E2544]">
                    <span className="text-slate-400 text-xs font-mono block">REACH</span>
                    <span className="text-slate-500 text-[10px] mt-1 block">Account views</span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/30 border border-[#1E2544]">
                    <span className="text-slate-400 text-xs font-mono block">VISITS</span>
                    <span className="text-slate-500 text-[10px] mt-1 block">Profile views</span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/30 border border-[#1E2544]">
                    <span className="text-slate-400 text-xs font-mono block">IMPRESSIONS</span>
                    <span className="text-slate-500 text-[10px] mt-1 block">Content discovery</span>
                  </div>
                </div>
              </div>

              {/* Category 2 */}
              <div>
                <h3 className="h3-proposal text-xl border-b border-slate-850 pb-2 mb-4 flex items-center gap-2">
                  <span className="size-2 rounded-full bg-[#C5A880]" />
                  Interest indicators
                </h3>
                <div className="grid grid-cols-4 gap-3">
                  <div className="p-4 rounded-xl bg-slate-900/30 border border-[#1E2544]">
                    <span className="text-slate-400 text-xs font-mono block">SAVES</span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/30 border border-[#1E2544]">
                    <span className="text-slate-400 text-xs font-mono block">SHARES</span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/30 border border-[#1E2544]">
                    <span className="text-slate-400 text-xs font-mono block">REPLIES</span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/30 border border-[#1E2544]">
                    <span className="text-slate-400 text-xs font-mono block">ENQUIRIES</span>
                  </div>
                </div>
              </div>

              {/* Category 3 */}
              <div>
                <h3 className="h3-proposal text-xl border-b border-slate-850 pb-2 mb-4 flex items-center gap-2">
                  <span className="size-2 rounded-full bg-[#C5A880]" />
                  Business development indicators
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4.5 rounded-xl bg-[#0E1326]/30 border border-[#1E2544] flex flex-col justify-between">
                    <span className="text-slate-400 text-xs font-mono">QUALIFIED LEADS</span>
                    <span className="text-[10px] text-slate-500 mt-2">Vetted prospect summaries</span>
                  </div>
                  <div className="p-4.5 rounded-xl bg-[#0E1326]/30 border border-[#1E2544] flex flex-col justify-between">
                    <span className="text-slate-400 text-xs font-mono">CALLS SCHEDULED</span>
                    <span className="text-[10px] text-slate-500 mt-2">Calendar booking confirmations</span>
                  </div>
                  <div className="p-4.5 rounded-xl bg-[#0E1326]/30 border border-[#1E2544] flex flex-col justify-between">
                    <span className="text-slate-400 text-xs font-mono">PARTNER ONBOARDINGS</span>
                    <span className="text-[10px] text-slate-500 mt-2">Successful business signups</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ==========================================
            First 30 days section
            ========================================== */}
        <section className="border-b border-slate-800/40 pb-20">
          <div className="mb-12">
            <span className="text-xs uppercase tracking-widest text-[#C5A880] font-bold font-mono">
              The launch plan
            </span>
            <h2 className="h2-proposal text-3xl md:text-5xl mt-2">
              The first 30 days: build the foundation
            </h2>
            <p className="text-slate-400 mt-4 max-w-3xl font-light text-sm md:text-base">
              A rapid, structured timeline designed to set up your profiles, messaging, and initial content pipeline within 4 weeks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Week 1 */}
            <div className="p-6.5 rounded-2xl bg-slate-900/20 border border-[#1E2544] relative">
              <span className="font-mono text-xs font-bold text-[#C5A880] block mb-4">WEEK 1</span>
              <h3 className="h3-proposal text-lg mb-3">
                Discovery and positioning
              </h3>
              <ul className="space-y-2 text-slate-400 font-light text-xs leading-relaxed">
                <li>&bull; Align brand requirements</li>
                <li>&bull; Clarify audience definition</li>
                <li>&bull; Draft core messaging tone</li>
                <li>&bull; Identify content opportunities</li>
              </ul>
            </div>

            {/* Week 2 */}
            <div className="p-6.5 rounded-2xl bg-slate-900/20 border border-[#1E2544] relative">
              <span className="font-mono text-xs font-bold text-[#C5A880] block mb-4">WEEK 2</span>
              <h3 className="h3-proposal text-lg mb-3">
                Digital presence setup
              </h3>
              <ul className="space-y-2 text-slate-400 font-light text-xs leading-relaxed">
                <li>&bull; Optimize profile details</li>
                <li>&bull; Construct layout messaging</li>
                <li>&bull; Setup contact pathways</li>
                <li>&bull; Configure calendar links</li>
              </ul>
            </div>

            {/* Week 3 */}
            <div className="p-6.5 rounded-2xl bg-slate-900/20 border border-[#1E2544] relative">
              <span className="font-mono text-xs font-bold text-[#C5A880] block mb-4">WEEK 3</span>
              <h3 className="h3-proposal text-lg mb-3">
                Content preparation
              </h3>
              <ul className="space-y-2 text-slate-400 font-light text-xs leading-relaxed">
                <li>&bull; First storytelling interview</li>
                <li>&bull; Package core asset drafts</li>
                <li>&bull; Compile baseline library</li>
                <li>&bull; Plan publishing templates</li>
              </ul>
            </div>

            {/* Week 4 */}
            <div className="p-6.5 rounded-2xl bg-slate-900/20 border border-[#1E2544] relative">
              <span className="font-mono text-xs font-bold text-[#C5A880] block mb-4">WEEK 4</span>
              <h3 className="h3-proposal text-lg mb-3">
                Launch and assessment
              </h3>
              <ul className="space-y-2 text-slate-400 font-light text-xs leading-relaxed">
                <li>&bull; Initiate regular publishing</li>
                <li>&bull; Track early user feedback</li>
                <li>&bull; Review validation questions</li>
                <li>&bull; Deliver first report summary</li>
              </ul>
            </div>
          </div>
        </section>


        {/* ==========================================
            Phases section
            ========================================== */}
        <section className="border-b border-slate-800/40 pb-20">
          <div className="mb-12">
            <span className="text-xs uppercase tracking-widest text-[#C5A880] font-bold font-mono">
              Operational structure
            </span>
            <h2 className="h2-proposal text-3xl md:text-5xl mt-2">
              Strategic growth phases
            </h2>
          </div>

          <div className="space-y-12">
            {/* Phase 1 */}
            <div className="p-8 rounded-2xl bg-slate-900/10 border border-[#1E2544]">
              <div className="flex flex-col lg:flex-row justify-between lg:items-center border-b border-slate-850 pb-5 mb-6 gap-4">
                <div>
                  <span className="font-mono text-xs font-bold text-[#C5A880] uppercase tracking-widest">
                    PHASE 1 (WEEKS 1-4)
                  </span>
                  <h3 className="h3-proposal text-2xl mt-1">
                    Foundation setup
                  </h3>
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  Objective: Establish presence, values, and narrative baseline.
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">Core activities</h4>
                  <ul className="space-y-2 text-slate-300 font-light text-xs leading-relaxed">
                    <li>&bull; Brand positioning brief</li>
                    <li>&bull; Content calendar layout</li>
                    <li>&bull; Entry pathway setup</li>
                    <li>&bull; First content recording</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">Deliverable outputs</h4>
                  <ul className="space-y-2 text-slate-300 font-light text-xs leading-relaxed">
                    <li>&bull; Formatted digital profile layouts</li>
                    <li>&bull; Integrated calendar schedules</li>
                    <li>&bull; Initial content library</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">Client involvement</h4>
                  <ul className="space-y-2 text-slate-300 font-light text-xs leading-relaxed">
                    <li>&bull; Share career stories and insights</li>
                    <li>&bull; Participate in recording sessions</li>
                    <li>&bull; Verify positioning statements</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="p-8 rounded-2xl bg-slate-900/10 border border-[#1E2544]">
              <div className="flex flex-col lg:flex-row justify-between lg:items-center border-b border-slate-850 pb-5 mb-6 gap-4">
                <div>
                  <span className="font-mono text-xs font-bold text-[#C5A880] uppercase tracking-widest">
                    PHASE 2 (MONTH 2)
                  </span>
                  <h3 className="h3-proposal text-2xl mt-1">
                    Acquisition and dialogue
                  </h3>
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  Objective: Drive consistent engagement and qualify prospective partners.
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">Core activities</h4>
                  <ul className="space-y-2 text-slate-300 font-light text-xs leading-relaxed">
                    <li>&bull; Maintain publishing frequency</li>
                    <li>&bull; Direct visibility to targeted cohorts</li>
                    <li>&bull; Filter incoming questions</li>
                    <li>&bull; Run conversation pathways</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">Deliverable outputs</h4>
                  <ul className="space-y-2 text-slate-300 font-light text-xs leading-relaxed">
                    <li>&bull; Warm inbound message logs</li>
                    <li>&bull; Vetted prospect lists</li>
                    <li>&bull; Confirmed strategy meeting bookings</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">Client involvement</h4>
                  <ul className="space-y-2 text-slate-300 font-light text-xs leading-relaxed">
                    <li>&bull; Host 20-min vetted strategy calls</li>
                    <li>&bull; Review qualified lead reports</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="p-8 rounded-2xl bg-slate-900/10 border border-[#1E2544]">
              <div className="flex flex-col lg:flex-row justify-between lg:items-center border-b border-slate-850 pb-5 mb-6 gap-4">
                <div>
                  <span className="font-mono text-xs font-bold text-[#C5A880] uppercase tracking-widest">
                    PHASE 3 (MONTH 3)
                  </span>
                  <h3 className="h3-proposal text-2xl mt-1">
                    Improve and expand
                  </h3>
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  Objective: Scale proven narratives and improve booking conversions.
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* 3 blocks required: Measure, Learn, Expand */}
                <div className="p-5 rounded-xl bg-[#0E1326]/40 border border-[#1E2544]">
                  <h4 className="text-xs font-mono font-bold text-[#C5A880] uppercase tracking-wider mb-3">01 / MEASURE</h4>
                  <p className="text-slate-300 font-light text-xs leading-relaxed">
                    Trace where the highest-quality enquiries, relationship interactions, and meeting bookings are coming from.
                  </p>
                </div>
                
                <div className="p-5 rounded-xl bg-[#0E1326]/40 border border-[#1E2544]">
                  <h4 className="text-xs font-mono font-bold text-[#C5A880] uppercase tracking-wider mb-3">02 / LEARN</h4>
                  <p className="text-slate-300 font-light text-xs leading-relaxed">
                    Identify which storytelling frameworks, positioning angles, and topics generate the most positive feedback from prospects.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#0E1326]/40 border border-[#1E2544]">
                  <h4 className="text-xs font-mono font-bold text-[#C5A880] uppercase tracking-wider mb-3">03 / EXPAND</h4>
                  <p className="text-slate-300 font-light text-xs leading-relaxed">
                    Direct production efforts toward highest-value topics. Expand outreach activities that demonstrate the strongest prospect response.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ==========================================
            Master calendar section
            ========================================== */}
        <section className="border-b border-slate-800/40 pb-20">
          <div className="mb-12">
            <span className="text-xs uppercase tracking-widest text-[#C5A880] font-bold font-mono">
              The calendar
            </span>
            <h2 className="h2-proposal text-3xl md:text-5xl mt-2">
              90-day master calendar
            </h2>
            <p className="text-slate-400 mt-4 max-w-3xl font-light text-sm md:text-base">
              Explore the week-by-week actions. Click any week to review specific objectives, activities, outputs, and your expected involvement.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left list: Week buttons */}
            <div className="lg:col-span-5 space-y-2 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
              {roadmapWeeks.map((w) => (
                <button
                  key={w.week}
                  onClick={() => setExpandedWeek(w.week)}
                  className={`w-full text-left p-4.5 rounded-xl border transition-all flex items-center justify-between group ${
                    expandedWeek === w.week
                      ? "bg-slate-900 border-[#C5A880]/80 shadow-md text-[#C5A880]"
                      : "bg-[#0E1326]/20 border-[#1E2544] hover:bg-slate-900/60 text-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`font-mono text-xs font-bold ${
                      expandedWeek === w.week ? "text-[#C5A880]" : "text-slate-500"
                    }`}>
                      W{w.week < 10 ? `0${w.week}` : w.week}
                    </span>
                    <span className="text-sm font-semibold tracking-wide font-serif">
                      {w.title}
                    </span>
                  </div>
                  <ChevronDown className={`size-4 transition-transform duration-200 ${
                    expandedWeek === w.week ? "rotate-180 text-[#C5A880]" : "text-slate-500 group-hover:text-slate-300"
                  }`} />
                </button>
              ))}
            </div>

            {/* Right block: Detailed expanded week */}
            <div className="lg:col-span-7 bg-[#0C1225]/40 border border-slate-800 rounded-2xl p-8 min-h-[420px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                {expandedWeek !== null && (
                  <motion.div
                    key={expandedWeek}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-mono text-xs font-bold bg-[#C5A880]/10 text-[#C5A880] px-2 py-0.5 rounded">
                          Week {expandedWeek < 10 ? `0${expandedWeek}` : expandedWeek}
                        </span>
                        <span className="text-xs text-slate-400 uppercase tracking-widest font-mono font-bold">
                          Detailed timeline overview
                        </span>
                      </div>
                      
                      <h3 className="h3-proposal text-2xl">
                        {roadmapWeeks[expandedWeek - 1].title}
                      </h3>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                        Weekly objective
                      </h4>
                      <p className="text-slate-350 text-sm font-light leading-relaxed">
                        {roadmapWeeks[expandedWeek - 1].objective}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Major activities
                      </h4>
                      <ul className="space-y-1.5">
                        {roadmapWeeks[expandedWeek - 1].activities.map((act, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 font-light leading-relaxed">
                            <span className="size-1 rounded-full bg-[#C5A880] mt-2 shrink-0" />
                            <span>{act}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-850">
                      <div>
                        <h4 className="text-xs font-mono font-bold text-[#C5A880] uppercase tracking-wider mb-1.5">
                          Expected outputs
                        </h4>
                        <ul className="space-y-1">
                          {roadmapWeeks[expandedWeek - 1].outputs.map((out, idx) => (
                            <li key={idx} className="text-xs text-slate-300 font-light">
                              &bull; {out}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xs font-mono font-bold text-[#C5A880] uppercase tracking-wider mb-1.5">
                          Your involvement
                        </h4>
                        <p className="text-xs text-slate-300 font-light leading-relaxed">
                          {roadmapWeeks[expandedWeek - 1].involvement}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-8 pt-5 border-t border-slate-850 text-center">
                <span className="text-[10px] text-slate-500 font-mono">
                  All dates and focus timelines represent a customizable trajectory tailored to your specific speed of review.
                </span>
              </div>
            </div>
          </div>
        </section>


        {/* ==========================================
            Deliverables section
            ========================================== */}
        <section ref={deliverablesRef} id="deliverables" className="border-b border-slate-800/40 pb-20 scroll-mt-24">
          <div className="mb-12">
            <span className="text-xs uppercase tracking-widest text-[#C5A880] font-bold font-mono">
              Strategic assets
            </span>
            <h2 className="h2-proposal text-3xl md:text-5xl mt-2">
              What you receive
            </h2>
            <p className="text-slate-400 mt-4 max-w-3xl font-light text-sm md:text-base">
              A comprehensive breakdown of all key digital business development structures we set up and run.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Del 1 */}
            <div className="p-8 rounded-2xl bg-slate-900/10 border border-[#1E2544] flex gap-5">
              <div className="size-11 rounded-lg bg-[#C5A880]/10 text-[#C5A880] flex items-center justify-center shrink-0">
                <UserCheck className="size-5.5" />
              </div>
              <div className="space-y-2">
                <h3 className="h3-proposal text-xl">
                  Digital presence and profiles
                </h3>
                <p className="text-slate-400 font-light text-sm leading-relaxed">
                  Fully configured landing page, copy parameters for relationship profiles, messaging assets, and validated calendar booking journeys.
                </p>
              </div>
            </div>

            {/* Del 2 */}
            <div className="p-8 rounded-2xl bg-slate-900/10 border border-[#1E2544] flex gap-5">
              <div className="size-11 rounded-lg bg-[#C5A880]/10 text-[#C5A880] flex items-center justify-center shrink-0">
                <Video className="size-5.5" />
              </div>
              <div className="space-y-2">
                <h3 className="h3-proposal text-xl">
                  Content production and strategy
                </h3>
                <p className="text-slate-400 font-light text-sm leading-relaxed">
                  Monthly content guides, custom written insights, storytelling formats, raw file reviews, publishing pipeline management, and content calendar schedules.
                </p>
              </div>
            </div>

            {/* Del 3 */}
            <div className="p-8 rounded-2xl bg-slate-900/10 border border-[#1E2544] flex gap-5">
              <div className="size-11 rounded-lg bg-[#C5A880]/10 text-[#C5A880] flex items-center justify-center shrink-0">
                <MessageSquare className="size-5.5" />
              </div>
              <div className="space-y-2">
                <h3 className="h3-proposal text-xl">
                  Conversation and meeting setup
                </h3>
                <p className="text-slate-400 font-light text-sm leading-relaxed">
                  Qualification question forms, inbox reply templates, vetted contact briefings, automated scheduling alerts, and post-call nurture templates.
                </p>
              </div>
            </div>

            {/* Del 4 */}
            <div className="p-8 rounded-2xl bg-slate-900/10 border border-[#1E2544] flex gap-5">
              <div className="size-11 rounded-lg bg-[#C5A880]/10 text-[#C5A880] flex items-center justify-center shrink-0">
                <Target className="size-5.5" />
              </div>
              <div className="space-y-2">
                <h3 className="h3-proposal text-xl">
                  Performance reports
                </h3>
                <p className="text-slate-400 font-light text-sm leading-relaxed">
                  Comprehensive monthly analytics dashboard, reach insights, conversion metrics, audience response summaries, and operational adjustments list.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* ==========================================
            Roles and expectations section
            ========================================== */}
        <section ref={yourRoleRef} id="your-role" className="border-b border-slate-800/40 pb-20 scroll-mt-24">
          <div className="mb-12">
            <span className="text-xs uppercase tracking-widest text-[#C5A880] font-bold font-mono">
              Partnership rules
            </span>
            <h2 className="h2-proposal text-3xl md:text-5xl mt-2">
              Roles and expectations
            </h2>
            <p className="text-slate-400 mt-4 max-w-3xl font-light text-sm md:text-base">
              A clean breakdown of who handles what to ensure the digital asset functions seamlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Client Role */}
            <div className="p-8 rounded-2xl bg-slate-900/20 border border-[#1E2544]">
              <div className="flex items-center gap-3.5 mb-6">
                <div className="p-2.5 rounded-lg bg-[#C5A880]/10 text-[#C5A880]">
                  <UserCheck className="size-6" />
                </div>
                <h3 className="h3-proposal text-2xl">
                  Your role (The face and partner)
                </h3>
              </div>

              <ul className="space-y-4">
                {[
                  "Provide raw corporate insights, governance lessons, and travel stories.",
                  "Participate in the scheduled 45-min recording sessions.",
                  "Deliver accurate, real world backgrounds and career facts.",
                  "Review and approve major, public facing brand content.",
                  "Conduct calls and build partnerships with warm, vetted leads.",
                  "Provide feedback on call outcomes to improve qualification."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-300 font-light text-sm leading-relaxed">
                    <span className="size-1.5 rounded-full bg-[#C5A880] mt-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Jayant Role */}
            <div className="p-8 rounded-2xl bg-slate-900/20 border border-[#1E2544]">
              <div className="flex items-center gap-3.5 mb-6">
                <div className="p-2.5 rounded-lg bg-[#C5A880]/10 text-[#C5A880]">
                  <Award className="size-6" />
                </div>
                <h3 className="h3-proposal text-2xl">
                  Our role (The growth partner)
                </h3>
              </div>

              <ul className="space-y-4">
                {[
                  "Define positioning strategy, brand messaging, and audience paths.",
                  "Run content outlines and interview scripts for sessions.",
                  "Edit, write, refine, and schedule all digital content pieces.",
                  "Build, optimize, and manage the profile and landing platforms.",
                  "Coordinate dialogue filtering and vetted meeting bookings.",
                  "Deliver analytical reports and continuous performance adjustments."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-300 font-light text-sm leading-relaxed">
                    <span className="size-1.5 rounded-full bg-[#C5A880] mt-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Responsible communication */}
          <div className="p-8 rounded-2xl bg-[#C5A880]/[0.02] border border-[#C5A880]/10 mb-12">
            <h3 className="h3-proposal text-xl mb-3 flex items-center gap-2">
              <AlertCircle className="size-5 text-[#C5A880]" />
              Responsible communication
            </h3>
            <p className="text-slate-300 font-light text-sm md:text-base leading-relaxed">
              To preserve credibility and target high-quality corporate partners, all business claims, lifestyle details, and experience testimonials must be accurate, verified, and approved before publication. We do not use fabricated reviews, guaranteed revenue representations, or misleading claims under any circumstances.
            </p>
          </div>
        </section>


        {/* ==========================================
            Next steps section
            ========================================== */}
        <section ref={nextStepsRef} id="next-steps" className="relative scroll-mt-24">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C5A880]/5 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 bg-[#0C1225]/30 border border-slate-800 rounded-3xl p-8 md:p-16">
            <span className="text-xs uppercase tracking-widest text-[#C5A880] font-bold font-mono">
              Action plan
            </span>
            <h2 className="h2-proposal text-4xl md:text-6xl font-bold tracking-tight text-slate-100 leading-tight">
              Ready to establish your digital asset?
            </h2>
            <p className="text-slate-300 font-light text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              The first step is to host our initial discovery session. We will align on your specific business details, confirm strategic directions, and prepare the foundation parameters.
            </p>

            <div className="pt-6">
              <a
                href={`mailto:jayantwebaisystems@gmail.com?subject=Proposal%20Discussion%20-%20${clientName}&body=Hi%20Jayant,%250A%250AI've%2520reviewed%2520the%252090-day%2520proposal%252520microsite.%2520Let's%2520schedule%2520our%2520initial%2520Discovery%2520Session.%250A%250APreferred%2520Days/Times:%250A%250ARegards,%250A${clientName}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#C5A880] hover:bg-[#D8B992] text-slate-950 px-8 py-4.5 text-base font-bold transition-all duration-200 shadow-xl hover:shadow-[#C5A880]/25 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Book the discovery session</span>
                <ArrowRight className="size-5" />
              </a>
              <span className="text-xs text-slate-400 block mt-4 font-mono uppercase tracking-wider">
                Align Goals &rarr; Confirm Direction &rarr; Begin Foundation Phase
              </span>
            </div>
          </div>
        </section>

      </main>

      {/* Persistent back to top button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 z-50 size-11 bg-slate-900 border border-slate-700 hover:border-[#C5A880]/80 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-200 transition-all shadow-md active:scale-95"
            aria-label="Back to top"
          >
            <ArrowUp className="size-5" />
          </motion.button>
        )}
      </AnimatePresence>
      
      {/* Footer copyright */}
      <footer className="w-full py-12 border-t border-slate-800/40 text-center relative z-10">
        <p className="text-xs text-slate-500 font-mono uppercase tracking-widest">
          &copy; {new Date().getFullYear()} JAYANT WEB & AI SYSTEMS. ALL RIGHTS RESERVED. CONFIDENTIAL PRIVATE PROPOSAL.
        </p>
      </footer>

    </div>
  );
}
