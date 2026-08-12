"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
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
  X,
  Plus,
  Minus
} from "lucide-react";
import ProposalNavbar from "@/components/ProposalNavbar";
import ProposalFooter from "@/components/ProposalFooter";

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

      // Handle bottom of page edge-case automatically
      if (scrollPosition + window.innerHeight >= document.documentElement.scrollHeight - 50) {
        setActiveSection("next-steps");
        return;
      }

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
      let currentActive = "overview";

      for (const section of sections) {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          // Active if top of the section is near the navbar view line and bottom is below it
          if (rect.top <= navHeight + 120 && rect.bottom > navHeight) {
            currentActive = section.id;
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [clientName]);

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
    { label: "Today's Assessment", id: "current-position" },
    { label: "What We Build", id: "strategy" },
    { label: "90-Day Roadmap", id: "roadmap" },
    { label: "What You Receive", id: "deliverables" },
    { label: "Measurement", id: "measurement" },
    { label: "Roles", id: "your-role" },
    { label: "Next Steps", id: "next-steps" }
  ];

  // 12-week roadmap data with strict key fields
  const roadmapWeeks = [
    {
      week: 1,
      title: "Discovery and positioning",
      objective: "Define goals, audience hypotheses and positioning.",
      activities: [
        "strategic discovery consultation.",
        "business background review.",
        "initial audience mapping.",
        "content opportunity mapping."
      ],
      outputs: [
        "positioning direction.",
        "initial audience map.",
        "initial content themes."
      ],
      involvement: "participate in discovery discussions; provide background information.",
      signal: "Clear direction is agreed for the first phase."
    },
    {
      week: 2,
      title: "Digital foundation",
      objective: "Setup initial profiles and pathways.",
      activities: [
        "profile layout mapping.",
        "refining bio and messaging copy.",
        "establishing meeting pathway links."
      ],
      outputs: [
        "draft bios.",
        "contact pathway framework.",
        "meeting pathway framework."
      ],
      involvement: "provide access credentials; verify profile copy.",
      signal: "Profile layouts are approved for setup."
    },
    {
      week: 3,
      title: "Content preparation",
      objective: "Conduct first recording and draft initial assets.",
      activities: [
        "recording session preparation.",
        "guided storytelling interview.",
        "text drafting and layout reviews."
      ],
      outputs: [
        "initial short-form content library.",
        "first publishing batch."
      ],
      involvement: "participate in scheduled recording; review content assets.",
      signal: "First content batch is signed off."
    },
    {
      week: 4,
      title: "Launch and learn",
      objective: "Launch initial content and test communication pathways.",
      activities: [
        "publishing schedule activation.",
        "profile configuration finalisation.",
        "monitoring early reach."
      ],
      outputs: [
        "active profiles.",
        "first set of live content posts.",
        "initial visitor logs."
      ],
      involvement: "verify profiles are live; review first response report.",
      signal: "All digital platforms are active and publishing."
    },
    {
      week: 5,
      title: "Consistency and monitoring",
      objective: "Maintain regular publishing and track initial visitor response.",
      activities: [
        "publish scheduled assets.",
        "log early replies.",
        "compile engagement statistics."
      ],
      outputs: [
        "weekly content batch.",
        "first engagement summary."
      ],
      involvement: "review response logs.",
      signal: "Content is published on schedule with zero operational issues."
    },
    {
      week: 6,
      title: "Audience development",
      objective: "Grow profile visibility toward the target cohorts.",
      activities: [
        "relevant outreach and interactions.",
        "comment responses.",
        "profile visibility optimisation."
      ],
      outputs: [
        "visibility reports.",
        "growth analytics log."
      ],
      involvement: "review monthly progress report.",
      signal: "Profile impressions demonstrate positive trend."
    },
    {
      week: 7,
      title: "Enquiry activation",
      objective: "Encourage interested profile visitors to ask questions.",
      activities: [
        "introduce clear enquiry prompts in content.",
        "share evaluation perspectives."
      ],
      outputs: [
        "incoming enquiry tracking sheet."
      ],
      involvement: "provide answers to specialized enquiry questions.",
      signal: "First set of direct enquiries are logged."
    },
    {
      week: 8,
      title: "Filter and qualify",
      objective: "Identify high-relevance prospects.",
      activities: [
        "apply simple qualification questions.",
        "review responses.",
        "filter out casual queries."
      ],
      outputs: [
        "list of suitable prospects ready for conversation."
      ],
      involvement: "review prospect backgrounds.",
      signal: "Prospects are qualified using the structured framework."
    },
    {
      week: 9,
      title: "Meeting setting",
      objective: "Book direct calls with suitable prospects.",
      activities: [
        "send booking confirmations.",
        "coordinate schedules.",
        "deliver meeting brief context."
      ],
      outputs: [
        "confirmed meeting entries on client calendar."
      ],
      involvement: "host business conversations with interested prospects.",
      signal: "Qualified prospects are scheduled for direct meetings."
    },
    {
      week: 10,
      title: "Follow-up and nurture",
      objective: "Maintain engagement post-meeting and support decisions.",
      activities: [
        "send customized follow-up emails.",
        "supply travel opportunity sheets."
      ],
      outputs: [
        "follow-up status records.",
        "nurture communications."
      ],
      involvement: "maintain personal relation updates.",
      signal: "Prospects receive customized context information post-meeting."
    },
    {
      week: 11,
      title: "Performance review",
      objective: "Evaluate initial calendar operations and conversion paths.",
      activities: [
        "compile reach statistics.",
        "calculate enquiries and meetings attended.",
        "highlight bottleneck areas."
      ],
      outputs: [
        "80-day performance audit sheet."
      ],
      involvement: "participate in brief review meeting.",
      signal: "Operational metrics are structured and ready for scaling adjustments."
    },
    {
      week: 12,
      title: "Growth scaling strategy",
      objective: "Setup scaling actions for the next quarter.",
      activities: [
        "design next-step content framework.",
        "expand outreach parameters."
      ],
      outputs: [
        "next-quarter scaling plan.",
        "final system transition overview."
      ],
      involvement: "align on future targets and resource allocations.",
      signal: "Transition plan is finalized and signed off."
    }
  ];

  return (
    <div className="proposal-page relative min-h-screen bg-[#070A13] text-slate-100 selection:bg-[#C5A880]/20 selection:text-[#C5A880] font-sans antialiased overflow-x-hidden">
      
      {/* 1. Persistent top navigation */}
      <ProposalNavbar
        clientSlug={clientSlug}
        clientName={clientName}
        sectionNavItems={navItems}
        activeSection={activeSection}
        onScrollToSection={scrollToSection}
      />

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
            <span className="proposal-eyebrow text-xs font-bold tracking-widest text-[#C5A880] uppercase">
              Prepared by
            </span>
            <span className="text-sm font-semibold text-slate-400 mt-1 font-mono">
              Jayant Web & AI Systems
            </span>
          </div>

          {/* Headline */}
          <h1 className="h1-proposal mb-8 max-w-5xl">
            Your Experience, Built for the Digital World.
          </h1>

          {/* Subheadline */}
          <p className="proposal-body-text text-slate-300 max-w-3xl mb-12 font-light">
            A 90-day plan to turn your business experience into a professional digital presence and a consistent path to meaningful business conversations.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => scrollToSection("roadmap")}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#C5A880] hover:bg-[#D8B992] text-slate-950 px-8 py-4 text-sm font-semibold transition-all duration-200 shadow-lg hover:shadow-[#C5A880]/10 active:scale-[0.98]"
            >
              <span>Explore the 90-Day Plan</span>
              <ArrowRight className="size-4" />
            </button>

            <button
              onClick={() => scrollToSection("strategy")}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/50 hover:bg-slate-900 text-slate-200 px-8 py-4 text-sm font-semibold transition-all duration-200 active:scale-[0.98]"
            >
              <span>See What We’re Building</span>
              <ArrowRight className="size-4" />
            </button>
          </div>
        </section>


        {/* ==========================================
            Executive summary section (Why this matters)
            ========================================== */}
        <section className="border-b border-slate-800/40 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="proposal-eyebrow text-xs tracking-widest text-[#C5A880] font-bold">
                Why this matters
              </span>
              <h2 className="h2-proposal mt-3">
                Where You Are Today. Where We Want to Go.
              </h2>
            </div>
            
            <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed font-light">
              <p className="proposal-body-text">
                You already have valuable assets that take years to build: business experience, professional credibility, relationships and real-world knowledge.
              </p>
              <p className="proposal-body-text">
                The current gap is digital visibility.
              </p>
              <p className="proposal-body-text">
                The objective is not to turn you into an influencer. The objective is to build a professional online presence around the credibility you already have and create a clear path from discovery to meaningful business conversations.
              </p>
              <p className="proposal-body-text">
                Over the next 90 days, the focus is on building the foundation, establishing the content presence, creating the enquiry and meeting journey, and using real response data to improve what works.
              </p>
            </div>
          </div>
        </section>


        {/* ==========================================
            Today's Assessment section (Where you are today)
            ========================================== */}
        <section ref={currentPositionRef} id="current-position" className="border-b border-slate-800/40 pb-20 scroll-mt-24">
          <div className="mb-12">
            <span className="proposal-eyebrow text-xs tracking-widest text-[#C5A880] font-bold">
              Where you are today
            </span>
            <h2 className="h2-proposal mt-2">
              Today’s Assessment
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
                    What Already Exists
                  </h3>
                </div>
                
                <ul className="space-y-4">
                  {[
                    "Established business experience",
                    "Professional credibility",
                    "Existing professional relationships",
                    "Business and travel knowledge",
                    "Direct relationship-building ability",
                    "Real-world experience"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-350 font-light proposal-body-text">
                      <span className="size-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
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
                    What Is Missing Digitally
                  </h3>
                </div>

                <ul className="space-y-4">
                  {[
                    "Professional digital presence",
                    "Consistent content presence",
                    "Clear online positioning",
                    "Clear enquiry path",
                    "Structured meeting journey",
                    "Performance visibility"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-355 font-light proposal-body-text">
                      <span className="size-1.5 rounded-full bg-[#C5A880] mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom statement */}
          <div className="p-6 rounded-2xl bg-[#C5A880]/[0.02] border border-[#C5A880]/10 text-center">
            <p className="proposal-body-text text-slate-300 font-light max-w-4xl mx-auto">
              "Credibility already exists. The opportunity is to make it visible, understandable and accessible online."
            </p>
          </div>
        </section>


        {/* ==========================================
            Target transformation section [NEW SECTION]
            ========================================== */}
        <section className="border-b border-slate-800/40 pb-20">
          <div className="mb-12">
            <span className="proposal-eyebrow text-xs tracking-widest text-[#C5A880] font-bold">
              The transformation
            </span>
            <h2 className="h2-proposal mt-2">
              Target Transformation
            </h2>
            <p className="proposal-body-text text-slate-400 mt-4 max-w-3xl font-light">
              This represents our operational target, not a guaranteed result.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Today */}
            <div className="p-8 rounded-2xl bg-[#0E1326]/20 border border-[#1E2544]">
              <span className="proposal-eyebrow text-xs text-red-500 font-bold block mb-4">TODAY</span>
              <ul className="space-y-4">
                {[
                  "limited digital visibility",
                  "no structured content presence",
                  "no clear enquiry pathway",
                  "manual follow-up",
                  "limited performance visibility"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-400 font-light proposal-body-text">
                    <span className="size-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After 90 days */}
            <div className="p-8 rounded-2xl bg-[#C5A880]/5 border border-[#C5A880]/20">
              <span className="proposal-eyebrow text-xs text-[#C5A880] font-bold block mb-4">AFTER THE INITIAL 90 DAYS</span>
              <ul className="space-y-4">
                {[
                  "professional digital presence",
                  "consistent content system",
                  "clear enquiry journey",
                  "structured meeting process",
                  "organised follow-up",
                  "performance visibility",
                  "clear next-step growth plan"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-200 font-light proposal-body-text">
                    <span className="size-1.5 rounded-full bg-[#C5A880] mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>


        {/* ==========================================
            The opportunity section
            ========================================== */}
        <section className="border-b border-slate-800/40 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="proposal-eyebrow text-xs tracking-widest text-[#C5A880] font-bold">
                The objective
              </span>
              <h2 className="h2-proposal mt-3">
                Turn Offline Trust Into Digital Authority
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-8">
              {/* Op 1 */}
              <div className="relative pl-16">
                <div className="absolute left-0 top-1 text-2xl font-serif text-[#C5A880]/40">
                  01
                </div>
                <h3 className="h3-proposal text-xl mb-2">
                  Build Recognition
                </h3>
                <p className="proposal-body-text text-slate-400 font-light leading-relaxed">
                  Create a recognisable and credible online presence that reflects the authority already established offline.
                </p>
              </div>

              {/* Op 2 */}
              <div className="relative pl-16">
                <div className="absolute left-0 top-1 text-2xl font-serif text-[#C5A880]/40">
                  02
                </div>
                <h3 className="h3-proposal text-xl mb-2">
                  Create Relevant Conversations
                </h3>
                <p className="proposal-body-text text-slate-400 font-light leading-relaxed">
                  Use useful stories, experience and education to attract people who are genuinely interested in the subject.
                </p>
              </div>

              {/* Op 3 */}
              <div className="relative pl-16">
                <div className="absolute left-0 top-1 text-2xl font-serif text-[#C5A880]/40">
                  03
                </div>
                <h3 className="h3-proposal text-xl mb-2">
                  Establish a Repeatable Business-Development Process
                </h3>
                <p className="proposal-body-text text-slate-400 font-light leading-relaxed">
                  Create a clear path from discovery to enquiry, serious conversation, meeting and follow-up.
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
            <span className="proposal-eyebrow text-xs tracking-widest text-[#C5A880] font-bold">
              The solution
            </span>
            <h2 className="h2-proposal mt-2">
              What We Are Building
            </h2>
            <p className="proposal-body-text text-slate-400 mt-4 max-w-3xl font-light">
              A structured digital presence and business-development system built around your experience, positioning and target audience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="p-8 rounded-2xl bg-[#0E1326]/30 border border-[#1E2544] flex flex-col justify-between hover:border-[#C5A880]/30 transition-all group">
              <div>
                <span className="proposal-eyebrow text-[#C5A880]/60 block mb-6">
                  01 / PRESENCE
                </span>
                <h3 className="h3-proposal text-xl mb-3 group-hover:text-[#C5A880] transition-colors">
                  Professional Digital Presence
                </h3>
                <p className="text-slate-450 font-light text-sm leading-relaxed">
                  A clear online identity that communicates who you are, what you represent and what an interested person should do next.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-2xl bg-[#0E1326]/30 border border-[#1E2544] flex flex-col justify-between hover:border-[#C5A880]/30 transition-all group">
              <div>
                <span className="proposal-eyebrow text-[#C5A880]/60 block mb-6">
                  02 / POSITIONING
                </span>
                <h3 className="h3-proposal text-xl mb-3 group-hover:text-[#C5A880] transition-colors">
                  Personal Brand Positioning
                </h3>
                <p className="text-slate-450 font-light text-sm leading-relaxed">
                  A clear framework for your story, expertise, audience and content themes.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-2xl bg-[#0E1326]/30 border border-[#1E2544] flex flex-col justify-between hover:border-[#C5A880]/30 transition-all group">
              <div>
                <span className="proposal-eyebrow text-[#C5A880]/60 block mb-6">
                  03 / CONTENT
                </span>
                <h3 className="h3-proposal text-xl mb-3 group-hover:text-[#C5A880] transition-colors">
                  Consistent Content
                </h3>
                <p className="text-slate-450 font-light text-sm leading-relaxed">
                  A professional content system that turns your experience and insights into a steady publishing presence.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="p-8 rounded-2xl bg-[#0E1326]/30 border border-[#1E2544] flex flex-col justify-between hover:border-[#C5A880]/30 transition-all group">
              <div>
                <span className="proposal-eyebrow text-[#C5A880]/60 block mb-6">
                  04 / JOURNEY
                </span>
                <h3 className="h3-proposal text-xl mb-3 group-hover:text-[#C5A880] transition-colors">
                  Enquiry & Conversation Journey
                </h3>
                <p className="text-slate-450 font-light text-sm leading-relaxed">
                  A clear path for interested people to start a conversation and understand the next step.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="p-8 rounded-2xl bg-[#0E1326]/30 border border-[#1E2544] flex flex-col justify-between hover:border-[#C5A880]/30 transition-all group">
              <div>
                <span className="proposal-eyebrow text-[#C5A880]/60 block mb-6">
                  05 / PROCESS
                </span>
                <h3 className="h3-proposal text-xl mb-3 group-hover:text-[#C5A880] transition-colors">
                  Meeting & Follow-Up Process
                </h3>
                <p className="text-slate-450 font-light text-sm leading-relaxed">
                  A structured process for moving suitable conversations into meetings and keeping next steps visible.
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="p-8 rounded-2xl bg-[#0E1326]/30 border border-[#1E2544] flex flex-col justify-between hover:border-[#C5A880]/30 transition-all group">
              <div>
                <span className="proposal-eyebrow text-[#C5A880]/60 block mb-6">
                  06 / MEASUREMENT
                </span>
                <h3 className="h3-proposal text-xl mb-3 group-hover:text-[#C5A880] transition-colors">
                  Performance Review
                </h3>
                <p className="text-slate-450 font-light text-sm leading-relaxed">
                  Regular review of audience response, enquiries, meetings and outcomes so the plan can improve over time.
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
            <span className="proposal-eyebrow text-xs tracking-widest text-[#C5A880] font-bold">
              Audience alignment
            </span>
            <h2 className="h2-proposal mt-2">
              The Right Audience Matters More Than the Biggest Audience
            </h2>
            <p className="proposal-body-text text-slate-450 mt-4 max-w-3xl font-light">
              These are initial audience hypotheses and will be refined during the discovery and testing phase.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {/* Profile 1 */}
            <div className="p-6 rounded-2xl bg-slate-900/20 border border-[#1E2544]">
              <div className="size-11 rounded-lg bg-[#C5A880]/10 text-[#C5A880] flex items-center justify-center mb-5">
                <Plane className="size-5.5" />
              </div>
              <h3 className="h3-proposal text-lg mb-2">
                The Frequent Traveller
              </h3>
              <p className="text-slate-400 font-light text-sm leading-relaxed">
                People who value travel experiences, lifestyle flexibility and travel-related opportunities.
              </p>
            </div>

            {/* Profile 2 */}
            <div className="p-6 rounded-2xl bg-slate-900/20 border border-[#1E2544]">
              <div className="size-11 rounded-lg bg-[#C5A880]/10 text-[#C5A880] flex items-center justify-center mb-5">
                <Briefcase className="size-5.5" />
              </div>
              <h3 className="h3-proposal text-lg mb-2">
                The Entrepreneur / Business Owner
              </h3>
              <p className="text-slate-400 font-light text-sm leading-relaxed">
                Existing business owners who are open to additional opportunities and diversification.
              </p>
            </div>

            {/* Profile 3 */}
            <div className="p-6 rounded-2xl bg-slate-900/20 border border-[#1E2544]">
              <div className="size-11 rounded-lg bg-[#C5A880]/10 text-[#C5A880] flex items-center justify-center mb-5">
                <Users className="size-5.5" />
              </div>
              <h3 className="h3-proposal text-lg mb-2">
                The Experienced Professional
              </h3>
              <p className="text-slate-400 font-light text-sm leading-relaxed">
                Professionals with established careers who may be interested in new business directions.
              </p>
            </div>

            {/* Profile 4 */}
            <div className="p-6 rounded-2xl bg-slate-900/20 border border-[#1E2544]">
              <div className="size-11 rounded-lg bg-[#C5A880]/10 text-[#C5A880] flex items-center justify-center mb-5">
                <GraduationCap className="size-5.5" />
              </div>
              <h3 className="h3-proposal text-lg mb-2">
                The Relationship-Driven Connector
              </h3>
              <p className="text-slate-400 font-light text-sm leading-relaxed">
                People who are naturally comfortable with networking, referrals and relationship-based business.
              </p>
            </div>
          </div>
        </section>


        {/* ==========================================
            Personal brand strategy section
            ========================================== */}
        <section className="border-b border-slate-800/40 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="proposal-eyebrow text-xs tracking-widest text-[#C5A880] font-bold">
                Positioning framework
              </span>
              <h2 className="h2-proposal mt-3">
                Build the Person Before Promoting the Opportunity
              </h2>
              <div className="p-6 rounded-2xl bg-[#0E1326]/30 border border-[#1E2544] mt-8">
                <span className="proposal-eyebrow text-xs block mb-2 font-bold">
                  The central framework
                </span>
                <p className="proposal-body-text text-slate-300 font-light">
                  The travel opportunity should become part of the broader story — not the only thing people see.
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
                      BUSINESS
                    </h3>
                  </div>
                  <p className="text-slate-400 font-light text-sm leading-relaxed">
                    Business lessons, decisions, leadership and experience.
                  </p>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="p-6.5 rounded-xl bg-slate-900/30 border border-[#1E2544] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4 text-[#C5A880]">
                    <Plane className="size-5" />
                    <h3 className="h3-proposal text-lg">
                      TRAVEL
                    </h3>
                  </div>
                  <p className="text-slate-400 font-light text-sm leading-relaxed">
                    Real travel experiences, destinations, lessons and lifestyle.
                  </p>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="p-6.5 rounded-xl bg-slate-900/30 border border-[#1E2544] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4 text-[#C5A880]">
                    <TrendingUp className="size-5" />
                    <h3 className="h3-proposal text-lg">
                      ENTREPRENEURSHIP
                    </h3>
                  </div>
                  <p className="text-slate-400 font-light text-sm leading-relaxed">
                    Business thinking, diversification, risk and opportunity.
                  </p>
                </div>
              </div>

              {/* Pillar 4 */}
              <div className="p-6.5 rounded-xl bg-slate-900/30 border border-[#1E2544] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4 text-[#C5A880]">
                    <Heart className="size-5" />
                    <h3 className="h3-proposal text-lg">
                      PERSONAL EXPERIENCE
                    </h3>
                  </div>
                  <p className="text-slate-400 font-light text-sm leading-relaxed">
                    Personal journey, opinions, milestones and the person behind the business.
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
            <span className="proposal-eyebrow text-xs tracking-widest text-[#C5A880] font-bold">
              Narrative structure
            </span>
            <h2 className="h2-proposal mt-2">
              Content That Builds Recognition, Trust and Conversation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Block 1 */}
            <div className="p-6 rounded-2xl bg-slate-900/10 border border-slate-800/60 space-y-4">
              <h3 className="h3-proposal text-lg border-b border-slate-850 pb-3">
                Business & Travel
              </h3>
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-mono text-[#C5A880] uppercase tracking-wider block mb-1">Business Stories</span>
                  <ul className="space-y-1 text-slate-300 font-light text-xs md:text-sm">
                    <li>&bull; lessons from business</li>
                    <li>&bull; decisions and mistakes</li>
                    <li>&bull; leadership experiences</li>
                    <li>&bull; business perspective</li>
                  </ul>
                </div>
                <div className="border-t border-slate-850 pt-3">
                  <span className="text-xs font-mono text-[#C5A880] uppercase tracking-wider block mb-1">Travel Stories</span>
                  <ul className="space-y-1 text-slate-300 font-light text-xs md:text-sm">
                    <li>&bull; destinations</li>
                    <li>&bull; experiences</li>
                    <li>&bull; travel lessons</li>
                    <li>&bull; travel recommendations</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Block 2 */}
            <div className="p-6 rounded-2xl bg-slate-900/10 border border-slate-800/60 space-y-4">
              <h3 className="h3-proposal text-lg border-b border-slate-850 pb-3">
                Entrepreneurship & Personal
              </h3>
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-mono text-[#C5A880] uppercase tracking-wider block mb-1">Entrepreneurship</span>
                  <ul className="space-y-1 text-slate-300 font-light text-xs md:text-sm">
                    <li>&bull; diversification</li>
                    <li>&bull; risk</li>
                    <li>&bull; opportunity evaluation</li>
                    <li>&bull; business thinking</li>
                  </ul>
                </div>
                <div className="border-t border-slate-850 pt-3">
                  <span className="text-xs font-mono text-[#C5A880] uppercase tracking-wider block mb-1">Personal Experience</span>
                  <ul className="space-y-1 text-slate-300 font-light text-xs md:text-sm">
                    <li>&bull; personal journey</li>
                    <li>&bull; opinions</li>
                    <li>&bull; milestones</li>
                    <li>&bull; behind the scenes</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Block 3 */}
            <div className="p-6 rounded-2xl bg-slate-900/10 border border-slate-800/60 space-y-4">
              <h3 className="h3-proposal text-lg border-b border-slate-850 pb-3">
                Opportunity Education
              </h3>
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-mono text-[#C5A880] uppercase tracking-wider block mb-1">Education Details</span>
                  <ul className="space-y-1 text-slate-300 font-light text-xs md:text-sm">
                    <li>&bull; how the business works</li>
                    <li>&bull; common questions</li>
                    <li>&bull; misconceptions</li>
                    <li>&bull; who it may be suitable for</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Example content strip */}
          <div className="p-8 rounded-2xl bg-[#0E1326]/40 border border-[#1E2544]">
            <span className="proposal-eyebrow text-xs block mb-4 text-[#C5A880] font-bold">EXAMPLE CONTENT</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              {[
                "\"Three lessons I learned from building a business.\"",
                "\"What I learned from travelling to ___.\"",
                "\"Why I decided to explore the travel industry.\"",
                "\"What people usually misunderstand about this business.\""
              ].map((exampleText, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-sm font-serif italic text-slate-300">
                  {exampleText}
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ==========================================
            Content production section (How it works)
            ========================================== */}
        <section className="border-b border-slate-800/40 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="proposal-eyebrow text-xs tracking-widest text-[#C5A880] font-bold">
                Workflow efficiency
              </span>
              <h2 className="h2-proposal mt-3 leading-tight">
                A Simple Process That Minimises Your Day-to-Day Digital Work
              </h2>
              <p className="proposal-body-text text-slate-300 mt-6 font-light">
                Scheduled recording sessions sized to the agreed content plan. We gather your insights, stories, and background details, translating them directly into consistent public posts.
              </p>
            </div>

            <div className="lg:col-span-7">
              {/* Process flow diagram */}
              <div className="p-8 rounded-2xl bg-slate-900/20 border border-[#1E2544] relative overflow-hidden">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 text-center sm:text-left">
                  {/* Step 1 */}
                  <div>
                    <span className="text-[10px] text-slate-500 font-mono block mb-1">STEP 01</span>
                    <h4 className="font-bold text-sm text-[#C5A880] mb-2 uppercase">YOU SHARE</h4>
                    <p className="text-slate-400 font-light text-xs leading-relaxed">
                      Stories • experience • opinions • business knowledge
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div>
                    <span className="text-[10px] text-slate-500 font-mono block mb-1">STEP 02</span>
                    <h4 className="font-bold text-sm text-[#C5A880] mb-2 uppercase">WE PRODUCE</h4>
                    <p className="text-slate-400 font-light text-xs leading-relaxed">
                      Professional short-form content • written content • publishing assets
                    </p>
                  </div>

                  {/* Step 3 */}
                  <div>
                    <span className="text-[10px] text-slate-500 font-mono block mb-1">STEP 03</span>
                    <h4 className="font-bold text-sm text-[#C5A880] mb-2 uppercase">WE PUBLISH</h4>
                    <p className="text-slate-400 font-light text-xs leading-relaxed">
                      Consistent agreed content
                    </p>
                  </div>

                  {/* Step 4 */}
                  <div>
                    <span className="text-[10px] text-slate-500 font-mono block mb-1">STEP 04</span>
                    <h4 className="font-bold text-sm text-[#C5A880] mb-2 uppercase">WE REVIEW</h4>
                    <p className="text-slate-400 font-light text-xs leading-relaxed">
                      What attracts attention and meaningful responses
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ==========================================
            What You Do NOT Need to Do [NEW SECTION]
            ========================================== */}
        <section className="border-b border-slate-800/40 pb-20">
          <div className="mb-12">
            <span className="proposal-eyebrow text-xs tracking-widest text-[#C5A880] font-bold">
              Operational clarity
            </span>
            <h2 className="h2-proposal mt-2">
              What You Do NOT Need to Do
            </h2>
            <p className="proposal-body-text text-slate-450 mt-4 max-w-3xl font-light">
              You do not need to become a digital marketer to make this work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* What you do not need to do */}
            <div className="p-8 rounded-2xl bg-slate-900/20 border border-[#1E2544]">
              <h3 className="font-sans text-lg font-bold text-red-500 mb-6 uppercase tracking-wider flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-red-500" /> You do not need to:
              </h3>
              <ul className="space-y-4">
                {[
                  "learn video editing",
                  "manage publishing every day",
                  "create graphics",
                  "learn technical systems",
                  "build the enquiry process yourself"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-300 font-light proposal-body-text">
                    <span className="size-1.5 rounded-full bg-red-500 mt-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* You do need to do */}
            <div className="p-8 rounded-2xl bg-[#C5A880]/5 border border-[#C5A880]/20">
              <h3 className="font-sans text-lg font-bold text-[#C5A880] mb-6 uppercase tracking-wider flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#C5A880]" /> You do need to:
              </h3>
              <ul className="space-y-4">
                {[
                  "share your experience",
                  "participate in scheduled recording",
                  "provide accurate information",
                  "review important content",
                  "speak with serious prospects"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-200 font-light proposal-body-text">
                    <span className="size-1.5 rounded-full bg-[#C5A880] mt-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>


        {/* ==========================================
            Business development journey section (roadmap/journey)
            ========================================== */}
        <section ref={roadmapRef} id="roadmap" className="border-b border-slate-800/40 pb-20 scroll-mt-24">
          <div className="mb-12">
            <span className="proposal-eyebrow text-xs tracking-widest text-[#C5A880] font-bold">
              The relationship pathway
            </span>
            <h2 className="h2-proposal mt-2">
              From Attention to Business Conversation
            </h2>
            <p className="proposal-body-text text-slate-400 mt-4 max-w-3xl font-light">
              This describes the intended relationship pathway from initial discovery to consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-7 gap-8 items-center mb-12">
            <div className="lg:col-span-4 space-y-6">
              {[
                { title: "SEE", desc: "Relevant people discover the content." },
                { title: "UNDERSTAND", desc: "They learn who you are and what you represent." },
                { title: "BECOME INTERESTED", desc: "They explore the subject further." },
                { title: "START A CONVERSATION", desc: "They contact you through the agreed channel." },
                { title: "SERIOUS CONVERSATION", desc: "Interest, fit and readiness are explored." },
                { title: "MEETING", desc: "Suitable prospects are given a clear path to a business conversation." },
                { title: "FOLLOW-UP", desc: "Next steps and relevant information are managed after the discussion." }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-4 items-start pl-6 border-l border-[#C5A880]/30 relative">
                  <div className="absolute -left-[6px] top-1.5 size-3 rounded-full bg-[#C5A880]" />
                  <div className="flex flex-col">
                    <span className="font-mono text-xs font-bold text-[#C5A880]">{step.title}</span>
                    <p className="proposal-body-text text-slate-300 mt-1">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-3 p-8 rounded-2xl bg-[#0E1326]/30 border border-[#1E2544]">
              <span className="proposal-eyebrow text-xs block mb-3 font-bold">
                Clear expectations
              </span>
              <p className="font-serif text-xl text-slate-200 mb-4 leading-snug">
                "We will build and operate the digital foundation and business-development process that creates a credible online presence and a measurable path to meaningful business conversations."
              </p>
            </div>
          </div>
        </section>


        {/* ==========================================
            Prospect handling section
            ========================================== */}
        <section className="border-b border-slate-800/40 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="proposal-eyebrow text-xs tracking-widest text-[#C5A880] font-bold">
                Prospect handling
              </span>
              <h2 className="h2-proposal mt-3 leading-tight">
                Make Sure Serious Opportunities Do Not Get Lost
              </h2>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-xl bg-slate-900/20 border border-[#1E2544]">
                <h4 className="font-bold text-sm text-[#C5A880] mb-2 uppercase">RESPOND PROFESSIONALLY</h4>
                <p className="text-slate-400 font-light text-xs leading-relaxed">
                  Respond clearly and respectfully to incoming enquiries.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-900/20 border border-[#1E2544]">
                <h4 className="font-bold text-sm text-[#C5A880] mb-2 uppercase">UNDERSTAND INTEREST</h4>
                <p className="text-slate-400 font-light text-xs leading-relaxed">
                  Identify what the person is actually looking for.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-900/20 border border-[#1E2544]">
                <h4 className="font-bold text-sm text-[#C5A880] mb-2 uppercase">ASSESS FIT</h4>
                <p className="text-slate-400 font-light text-xs leading-relaxed">
                  Use a simple process to understand relevance and readiness for a business conversation.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-900/20 border border-[#1E2544]">
                <h4 className="font-bold text-sm text-[#C5A880] mb-2 uppercase">CLARIFY THE NEXT STEP</h4>
                <p className="text-slate-400 font-light text-xs leading-relaxed">
                  Move suitable conversations toward the appropriate next step.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-900/20 border border-[#1E2544] sm:col-span-2">
                <h4 className="font-bold text-sm text-[#C5A880] mb-2 uppercase">STAY ORGANISED</h4>
                <p className="text-slate-400 font-light text-xs leading-relaxed">
                  Keep active conversations and follow-up actions visible.
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
                    "Enquiry",
                    "Interest Confirmed",
                    "Suitable for Conversation",
                    "Meeting Scheduled",
                    "Confirmation / Reminder",
                    "Business Conversation",
                    "Follow-Up"
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
              <span className="proposal-eyebrow text-xs tracking-widest text-[#C5A880] font-bold">
                Meeting pathway
              </span>
              <h2 className="h2-proposal mt-3 leading-tight">
                Turn Interest Into a Clear Next Step
              </h2>
              <p className="proposal-body-text text-slate-300 mt-6 font-light">
                Your main involvement is focused on serious business conversations once a prospect is ready for direct discussion. We handle the process coordination leading up to the call.
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
              <span className="proposal-eyebrow text-xs tracking-widest text-[#C5A880] font-bold">
                Accountability
              </span>
              <h2 className="h2-proposal mt-3">
                How We Measure
              </h2>
              <p className="proposal-body-text text-slate-400 mt-6 font-light">
                Initial performance data will be used to establish realistic benchmarks and identify where the strongest response is coming from.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-8">
              {/* Category 1 */}
              <div>
                <h3 className="h3-proposal text-xl border-b border-slate-850 pb-2 mb-4 flex items-center gap-2">
                  <span className="size-2 rounded-full bg-[#C5A880]" />
                  AWARENESS
                </h3>
                <div className="grid grid-cols-3 gap-4 text-xs font-mono">
                  <div className="p-4 rounded-xl bg-slate-900/30 border border-[#1E2544]">Reach</div>
                  <div className="p-4 rounded-xl bg-slate-900/30 border border-[#1E2544]">Profile visits</div>
                  <div className="p-4 rounded-xl bg-slate-900/30 border border-[#1E2544]">Content views</div>
                </div>
              </div>

              {/* Category 2 */}
              <div>
                <h3 className="h3-proposal text-xl border-b border-slate-850 pb-2 mb-4 flex items-center gap-2">
                  <span className="size-2 rounded-full bg-[#C5A880]" />
                  INTEREST
                </h3>
                <div className="grid grid-cols-4 gap-3 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-slate-900/30 border border-[#1E2544]">Saves</div>
                  <div className="p-3 rounded-xl bg-slate-900/30 border border-[#1E2544]">Shares</div>
                  <div className="p-3 rounded-xl bg-slate-900/30 border border-[#1E2544]">Replies</div>
                  <div className="p-3 rounded-xl bg-slate-900/30 border border-[#1E2544]">Enquiries</div>
                </div>
              </div>

              {/* Category 3 */}
              <div>
                <h3 className="h3-proposal text-xl border-b border-slate-850 pb-2 mb-4 flex items-center gap-2">
                  <span className="size-2 rounded-full bg-[#C5A880]" />
                  BUSINESS DEVELOPMENT
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs font-mono">
                  <div className="p-4 rounded-xl bg-[#0E1326]/30 border border-[#1E2544]">Serious prospects</div>
                  <div className="p-4 rounded-xl bg-[#0E1326]/30 border border-[#1E2544]">Meetings booked</div>
                  <div className="p-4 rounded-xl bg-[#0E1326]/30 border border-[#1E2544]">Meetings attended</div>
                  <div className="p-4 rounded-xl bg-[#0E1326]/30 border border-[#1E2544]">Follow-up status</div>
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
            <span className="proposal-eyebrow text-xs tracking-widest text-[#C5A880] font-bold">
              The launch plan
            </span>
            <h2 className="h2-proposal mt-2">
              The First 30 Days: Build the Foundation
            </h2>
            <p className="proposal-body-text text-slate-400 mt-4 max-w-3xl font-light">
              A structured first-month launch designed to establish the core platforms and outline positioning parameters.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Week 1 */}
            <div className="p-6.5 rounded-2xl bg-slate-900/20 border border-[#1E2544] relative">
              <span className="font-mono text-xs font-bold text-[#C5A880] block mb-4">WEEK 1</span>
              <h3 className="h3-proposal text-lg mb-3">
                Discovery & Positioning
              </h3>
              <ul className="space-y-2 text-slate-400 font-light text-xs leading-relaxed">
                <li>&bull; understand the business</li>
                <li>&bull; define initial audience hypotheses</li>
                <li>&bull; clarify positioning</li>
                <li>&bull; identify content opportunities</li>
                <li>&bull; collect verified business information</li>
              </ul>
            </div>

            {/* Week 2 */}
            <div className="p-6.5 rounded-2xl bg-slate-900/20 border border-[#1E2544] relative">
              <span className="font-mono text-xs font-bold text-[#C5A880] block mb-4">WEEK 2</span>
              <h3 className="h3-proposal text-lg mb-3">
                Digital Foundation
              </h3>
              <ul className="space-y-2 text-slate-400 font-light text-xs leading-relaxed">
                <li>&bull; establish the professional profile</li>
                <li>&bull; refine messaging</li>
                <li>&bull; create clear contact pathways</li>
                <li>&bull; establish meeting journey</li>
              </ul>
            </div>

            {/* Week 3 */}
            <div className="p-6.5 rounded-2xl bg-slate-900/20 border border-[#1E2544] relative">
              <span className="font-mono text-xs font-bold text-[#C5A880] block mb-4">WEEK 3</span>
              <h3 className="h3-proposal text-lg mb-3">
                Content Preparation
              </h3>
              <ul className="space-y-2 text-slate-400 font-light text-xs leading-relaxed">
                <li>&bull; first recording session</li>
                <li>&bull; initial content library</li>
                <li>&bull; first publishing batch</li>
                <li>&bull; initial messaging tests</li>
              </ul>
            </div>

            {/* Week 4 */}
            <div className="p-6.5 rounded-2xl bg-slate-900/20 border border-[#1E2544] relative">
              <span className="font-mono text-xs font-bold text-[#C5A880] block mb-4">WEEK 4</span>
              <h3 className="h3-proposal text-lg mb-3">
                Launch & Learn
              </h3>
              <ul className="space-y-2 text-slate-400 font-light text-xs leading-relaxed">
                <li>&bull; begin consistent publishing</li>
                <li>&bull; observe audience response</li>
                <li>&bull; monitor initial enquiries</li>
                <li>&bull; establish first review</li>
              </ul>
            </div>
          </div>
        </section>


        {/* ==========================================
            Phases section
            ========================================== */}
        <section className="border-b border-slate-800/40 pb-20">
          <div className="mb-12">
            <span className="proposal-eyebrow text-xs tracking-widest text-[#C5A880] font-bold">
              Operational structure
            </span>
            <h2 className="h2-proposal mt-2">
              Strategic Growth Phases
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
                    Phase 1 — Foundation | Weeks 1–4
                  </h3>
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  Objective: Establish a clear digital identity, positioning and initial content presence.
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">Core activities</h4>
                  <ul className="space-y-2 text-slate-300 font-light text-xs leading-relaxed">
                    <li>&bull; positioning</li>
                    <li>&bull; audience hypotheses</li>
                    <li>&bull; digital presence</li>
                    <li>&bull; content preparation</li>
                    <li>&bull; first recording</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">Planned outputs</h4>
                  <ul className="space-y-2 text-slate-300 font-light text-xs leading-relaxed">
                    <li>&bull; professional profile</li>
                    <li>&bull; messaging direction</li>
                    <li>&bull; initial content library</li>
                    <li>&bull; enquiry pathway</li>
                    <li>&bull; first publishing cycle</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">Client involvement</h4>
                  <ul className="space-y-2 text-slate-300 font-light text-xs leading-relaxed">
                    <li>&bull; provide information</li>
                    <li>&bull; share experience</li>
                    <li>&bull; participate in recording</li>
                    <li>&bull; review important public-facing content</li>
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
                    Phase 2 — Acquisition | Month 2
                  </h3>
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  Objective: Move from building the presence to actively creating meaningful business conversations.
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">Core activities</h4>
                  <ul className="space-y-2 text-slate-300 font-light text-xs leading-relaxed">
                    <li>&bull; consistent publishing</li>
                    <li>&bull; audience development</li>
                    <li>&bull; relevant outreach where appropriate</li>
                    <li>&bull; enquiry handling</li>
                    <li>&bull; identifying serious conversations</li>
                    <li>&bull; meeting-setting</li>
                    <li>&bull; follow-up</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">Planned outputs</h4>
                  <ul className="space-y-2 text-slate-300 font-light text-xs leading-relaxed">
                    <li>&bull; enquiry response log</li>
                    <li>&bull; candidate schedule lists</li>
                    <li>&bull; next-step tracking</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">Client involvement</h4>
                  <ul className="space-y-2 text-slate-300 font-light text-xs leading-relaxed">
                    <p className="proposal-body-text text-slate-300">
                      Review serious enquiries and participate in direct business conversations.
                    </p>
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
                    Phase 3 — Improve & Expand | Month 3
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-5 rounded-xl bg-[#0E1326]/40 border border-[#1E2544]">
                  <h4 className="text-xs font-mono font-bold text-[#C5A880] uppercase tracking-wider mb-3">MEASURE</h4>
                  <p className="text-slate-300 font-light text-xs leading-relaxed">
                    Review reach, enquiries, serious prospects, meetings and outcomes.
                  </p>
                </div>
                
                <div className="p-5 rounded-xl bg-[#0E1326]/40 border border-[#1E2544]">
                  <h4 className="text-xs font-mono font-bold text-[#C5A880] uppercase tracking-wider mb-3">LEARN</h4>
                  <p className="text-slate-300 font-light text-xs leading-relaxed">
                    Identify which topics, formats, messages and audiences are showing the strongest response.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#0E1326]/40 border border-[#1E2544]">
                  <h4 className="text-xs font-mono font-bold text-[#C5A880] uppercase tracking-wider mb-3">EXPAND</h4>
                  <p className="text-slate-300 font-light text-xs leading-relaxed">
                    Increase focus on activities that have evidence of positive response and improve weaker parts of the journey.
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
            <span className="proposal-eyebrow text-xs tracking-widest text-[#C5A880] font-bold">
              The calendar
            </span>
            <h2 className="h2-proposal mt-2">
              90-day master calendar
            </h2>
            <p className="proposal-body-text text-slate-400 mt-4 max-w-3xl font-light">
              Explore the week-by-week actions. Click any week to review specific objectives, activities, planned outputs, and your expected involvement.
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
                        <span className="proposal-eyebrow text-xs text-slate-400 font-bold">
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
                          Planned outputs
                        </h4>
                        <ul className="space-y-1">
                          {roadmapWeeks[expandedWeek - 1].outputs.map((out, idx) => (
                            <li key={idx} className="text-xs text-slate-300 font-light">
                              &bull; {out}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="text-xs font-mono font-bold text-[#C5A880] uppercase tracking-wider mb-1.5">
                            Your involvement
                          </h4>
                          <p className="text-xs text-slate-300 font-light leading-relaxed">
                            {roadmapWeeks[expandedWeek - 1].involvement}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="text-xs font-mono font-bold text-[#C5A880] uppercase tracking-wider mb-1.5">
                            Success signal
                          </h4>
                          <p className="text-xs text-slate-300 font-light leading-relaxed italic">
                            "{roadmapWeeks[expandedWeek - 1].signal}"
                          </p>
                        </div>
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
            <span className="proposal-eyebrow text-xs tracking-widest text-[#C5A880] font-bold">
              Strategic assets
            </span>
            <h2 className="h2-proposal mt-2">
              What You Will Have in Place
            </h2>
            <p className="proposal-body-text text-slate-400 mt-4 max-w-3xl font-light">
              The following assets and processes are built and managed as part of the 90-day plan.
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
                  Professional Digital Presence
                </h3>
                <ul className="text-slate-400 font-light text-sm leading-relaxed space-y-1.5">
                  <li>&bull; Profile positioning and bio details</li>
                  <li>&bull; Unified brand narrative copy</li>
                  <li>&bull; Direct contact pathway setup</li>
                  <li>&bull; Meeting booking journey configuration</li>
                </ul>
              </div>
            </div>

            {/* Del 2 */}
            <div className="p-8 rounded-2xl bg-slate-900/10 border border-[#1E2544] flex gap-5">
              <div className="size-11 rounded-lg bg-[#C5A880]/10 text-[#C5A880] flex items-center justify-center shrink-0">
                <Video className="size-5.5" />
              </div>
              <div className="space-y-2">
                <h3 className="h3-proposal text-xl">
                  Content
                </h3>
                <ul className="text-slate-400 font-light text-sm leading-relaxed space-y-1.5">
                  <li>&bull; Editorial content strategy</li>
                  <li>&bull; Storytelling content library</li>
                  <li>&bull; Professional short-form text and visual assets</li>
                  <li>&bull; Agreed publishing schedule</li>
                </ul>
              </div>
            </div>

            {/* Del 3 */}
            <div className="p-8 rounded-2xl bg-slate-900/10 border border-[#1E2544] flex gap-5">
              <div className="size-11 rounded-lg bg-[#C5A880]/10 text-[#C5A880] flex items-center justify-center shrink-0">
                <MessageSquare className="size-5.5" />
              </div>
              <div className="space-y-2">
                <h3 className="h3-proposal text-xl">
                  Business Development
                </h3>
                <ul className="text-slate-400 font-light text-sm leading-relaxed space-y-1.5">
                  <li>&bull; Enquiry handling process guidelines</li>
                  <li>&bull; Simple qualification framework</li>
                  <li>&bull; Meeting-setting process coordination</li>
                  <li>&bull; Follow-up support templates</li>
                </ul>
              </div>
            </div>

            {/* Del 4 */}
            <div className="p-8 rounded-2xl bg-slate-900/10 border border-[#1E2544] flex gap-5">
              <div className="size-11 rounded-lg bg-[#C5A880]/10 text-[#C5A880] flex items-center justify-center shrink-0">
                <Target className="size-5.5" />
              </div>
              <div className="space-y-2">
                <h3 className="h3-proposal text-xl">
                  Measurement
                </h3>
                <ul className="text-slate-400 font-light text-sm leading-relaxed space-y-1.5">
                  <li>&bull; Monthly performance reviews</li>
                  <li>&bull; Audience response observations</li>
                  <li>&bull; Continuous improvement recommendations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>


        {/* ==========================================
            Roles and expectations section
            ========================================== */}
        <section ref={yourRoleRef} id="your-role" className="border-b border-slate-800/40 pb-20 scroll-mt-24">
          <div className="mb-12">
            <span className="proposal-eyebrow text-xs tracking-widest text-[#C5A880] font-bold">
              Partnership rules
            </span>
            <h2 className="h2-proposal mt-2">
              Roles and Expectations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Client Role */}
            <div className="p-8 rounded-2xl bg-slate-900/20 border border-[#1E2544]">
              <div className="flex items-center gap-3.5 mb-6">
                <div className="p-2.5 rounded-lg bg-[#C5A880]/10 text-[#C5A880]">
                  <UserCheck className="size-6" />
                </div>
                <h3 className="h3-proposal text-2xl">
                  YOUR ROLE
                </h3>
              </div>
              <span className="text-xs font-serif italic text-slate-350 block mb-4">
                "Your expertise, experience and business conversations."
              </span>

              <ul className="space-y-4">
                {[
                  "Provide accurate business information",
                  "Share stories and experience",
                  "Participate in scheduled recording sessions",
                  "Review important public-facing content",
                  "Speak with serious prospects",
                  "Provide feedback on business outcomes"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-300 font-light proposal-body-text">
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
                  OUR ROLE
                </h3>
              </div>
              <span className="text-xs font-serif italic text-slate-350 block mb-4">
                "Strategy, content and digital execution."
              </span>

              <ul className="space-y-4">
                {[
                  "Positioning",
                  "Content planning",
                  "Production",
                  "Publishing",
                  "Audience development",
                  "Enquiry support",
                  "Meeting support",
                  "Reporting",
                  "Optimisation"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-300 font-light proposal-body-text">
                    <span className="size-1.5 rounded-full bg-[#C5A880] mt-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Responsible communication */}
          <div className="p-8 rounded-2xl bg-[#C5A880]/[0.02] border border-[#C5A880]/10 mb-12">
            <span className="proposal-eyebrow text-xs block mb-2 text-[#C5A880] font-bold">COMPLIANCE AND STANDARDS</span>
            <h3 className="h3-proposal text-xl mb-3 flex items-center gap-2">
              <AlertCircle className="size-5 text-[#C5A880]" />
              Responsible Communication
            </h3>
            <p className="proposal-body-text text-slate-300 font-light leading-relaxed">
              All public-facing business, product, income, testimonial and lifestyle claims must be accurate and approved before publication. We do not use fabricated testimonials, guaranteed-income claims or misleading representations.
            </p>
          </div>
        </section>

        {/* ==========================================
            Next steps section: Separate Commercial Proposal Page Link
            ========================================== */}
        <section ref={nextStepsRef} id="next-steps" className="relative scroll-mt-24">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C5A880]/5 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 bg-[#0C1225]/40 border border-slate-800 rounded-3xl p-8 md:p-16">
            <span className="proposal-eyebrow text-xs tracking-widest text-[#C5A880] font-bold uppercase">
              Commercial Proposal & Pricing
            </span>
            <h2 className="h2-proposal text-slate-100 leading-tight">
              Ready to Review Commercial Options & Payment Structure?
            </h2>
            <p className="proposal-body-text text-slate-300 font-light max-w-2xl mx-auto">
              We have prepared a separate, dedicated commercial proposal for {clientName} featuring three tailored execution tiers (Foundation, Growth & Scale) with complete feature comparison and payment terms.
            </p>

            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/proposal/${clientSlug}/commercials`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#C5A880] hover:bg-[#D8B992] text-slate-950 px-8 py-4.5 text-sm font-bold transition-all duration-200 shadow-xl hover:shadow-[#C5A880]/25 hover:scale-[1.02] active:scale-[0.98] font-mono"
              >
                <span>VIEW COMMERCIAL PROPOSAL & PRICING</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="pt-4 border-t border-slate-800/60">
              <span className="text-xs text-slate-400 block font-mono uppercase tracking-wider">
                Strategy & Roadmap &rarr; Dedicated Commercial Proposal &rarr; Confirm Direction
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
      
      {/* Footer copyright & site links */}
      <ProposalFooter clientSlug={clientSlug} clientName={clientName} />

    </div>
  );
}
