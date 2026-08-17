"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Plane,
  Briefcase,
  GraduationCap,
  Users,
  ChevronDown,
  ArrowUp,
  CheckCircle,
  AlertCircle,
  Plus,
  Minus,
  ShieldCheck
} from "lucide-react";
import ProposalNavbar from "@/components/ProposalNavbar";
import ProposalFooter from "@/components/ProposalFooter";

interface ProposalContentProps {
  clientSlug: string;
  clientName: string;
}

interface ProposalDataSchema {
  success: boolean;
  proposal: { id: string; status: string; client_id: string; title: string };
  packages: Array<{ id: string; code: string; name: string; standard_price: number }>;
  existingSelection?: {
    price_snapshot: number;
    packages?: {
      name: string;
      standard_price: number;
      code: string;
    };
  };
}

export default function ProposalContent({ clientSlug, clientName }: ProposalContentProps) {
  // Navigation states
  const [activeSection, setActiveSection] = useState("overview");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Month-by-month and weekly roadmap states
  const [expandedMonth, setExpandedMonth] = useState<number | null>(1);
  const [expandedWeek, setExpandedWeek] = useState<number | null>(1);

  // FAQ state
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Dynamic proposal selection state
  const [proposalData, setProposalData] = useState<ProposalDataSchema | null>(null);

  // Refs for scroll-spy sections
  const overviewRef = useRef<HTMLElement>(null);
  const problemRef = useRef<HTMLElement>(null);
  const opportunityRef = useRef<HTMLElement>(null);
  const strategyRef = useRef<HTMLElement>(null);
  const deliverablesRef = useRef<HTMLElement>(null);
  const journeyRef = useRef<HTMLElement>(null);
  const roadmapRef = useRef<HTMLElement>(null);
  const responsibilitiesRef = useRef<HTMLElement>(null);
  const measurementRef = useRef<HTMLElement>(null);
  const investmentRef = useRef<HTMLElement>(null);
  const nextStepsRef = useRef<HTMLElement>(null);

  // Load proposal data on mount
  useEffect(() => {
    async function loadProposal() {
      try {
        const res = await fetch(`/api/proposal/${clientSlug}`);
        const data = await res.json();
        if (data.success) {
          setProposalData(data);
        }
      } catch (err) {
        console.error("Failed to load proposal details:", err);
      }
    }
    loadProposal();
  }, [clientSlug]);

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      if (totalHeight > 0) {
        setScrollProgress(scrollPosition / totalHeight);
      }

      setShowBackToTop(scrollPosition > 800);

      // Edge-case bottom of page
      if (scrollPosition + window.innerHeight >= document.documentElement.scrollHeight - 100) {
        setActiveSection("next-steps");
        return;
      }

      const sections = [
        { id: "overview", ref: overviewRef },
        { id: "problem", ref: problemRef },
        { id: "opportunity", ref: opportunityRef },
        { id: "strategy", ref: strategyRef },
        { id: "deliverables", ref: deliverablesRef },
        { id: "journey", ref: journeyRef },
        { id: "roadmap", ref: roadmapRef },
        { id: "responsibilities", ref: responsibilitiesRef },
        { id: "measurement", ref: measurementRef },
        { id: "investment", ref: investmentRef },
        { id: "next-steps", ref: nextStepsRef }
      ];

      const navHeight = 90;
      let currentActive = "overview";

      for (const section of sections) {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          if (rect.top <= navHeight + 120 && rect.bottom > navHeight) {
            currentActive = section.id;
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
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
    { label: "Why", id: "problem" },
    { label: "Opportunity", id: "opportunity" },
    { label: "Plan", id: "strategy" },
    { label: "What You Get", id: "deliverables" },
    { label: "How It Works", id: "journey" },
    { label: "90 Days", id: "roadmap" },
    { label: "Responsibilities", id: "responsibilities" },
    { label: "Measurement", id: "measurement" },
    { label: "Investment", id: "investment" },
    { label: "Next Step", id: "next-steps" }
  ];

  // Month timelines definitions
  const roadmapMonths = [
    {
      month: 1,
      title: "Month 1 — Foundation",
      objective: "Establish a clear digital identity, positioning parameters, and initial content publishing loops.",
      activities: [
        "Strategic discovery consultation and audience mapping.",
        "Refining bio, messaging copy, and configuring booking pipelines.",
        "Monthly content filming session and copywriting of first 8 posts.",
        "Launching profiles and monitoring early visitor response signals."
      ],
      outputs: [
        "Approved positioning framework and audience map.",
        "Optimized digital profiles and direct booking routes.",
        "Month 1 short-form content library.",
        "Initial reach and engagement tracking logs."
      ],
      involvement: "Provide business context, participate in first content recording session, and sign off on content layouts.",
      weeks: [1, 2, 3, 4]
    },
    {
      month: 2,
      title: "Month 2 — Acquisition",
      objective: "Transition from establishing the presence to actively initiating qualified business conversations.",
      activities: [
        "Maintain regular publishing schedule with optimized publishing times.",
        "Targeted visibility development to attract target professional cohorts.",
        "Activate simple inbound enquiry filters and responses.",
        "Qualify prospects and prepare them for direct conversation."
      ],
      outputs: [
        "Month 2 content batches successfully published.",
        "Enquiry tracking log containing incoming queries.",
        "Qualified prospect list filtered based on fit-check rules."
      ],
      involvement: "Review response logs, review prospect profiles, and participate in initial discussions.",
      weeks: [5, 6, 7, 8]
    },
    {
      month: 3,
      title: "Month 3 — Improvement & Expansion",
      objective: "Scale high-performing content angles, book meetings on client calendar, and review performance data.",
      activities: [
        "Book direct calendar consultation meetings with verified prospects.",
        "Deliver follow-up details and nurture materials post-call.",
        "Evaluate full operational data (enquiries, bookings, outcomes).",
        "Formulate scaling roadmap for the next quarter."
      ],
      outputs: [
        "Confirmed booking entries on client calendar.",
        "Personalized nurture follow-up records.",
        "Comprehensive 80-day performance audit sheet.",
        "Future growth scaling transition roadmap."
      ],
      involvement: "Host direct business meetings with qualified candidates and review final performance audits.",
      weeks: [9, 10, 11, 12]
    }
  ];

  // 12-week roadmap data with strict key fields
  const roadmapWeeks = [
    {
      week: 1,
      title: "Discovery and positioning",
      objective: "Define goals, audience hypotheses and positioning.",
      activities: [
        "Strategic discovery consultation.",
        "Business background review.",
        "Initial audience mapping.",
        "Content opportunity mapping."
      ],
      outputs: [
        "Positioning direction.",
        "Initial audience map.",
        "Initial content themes."
      ],
      involvement: "Participate in discovery discussions; provide background information.",
      signal: "Clear direction is agreed for the first phase."
    },
    {
      week: 2,
      title: "Digital foundation",
      objective: "Setup initial profiles and pathways.",
      activities: [
        "Profile layout mapping.",
        "Refining bio and messaging copy.",
        "Establishing meeting pathway links."
      ],
      outputs: [
        "Draft bios.",
        "Contact pathway framework.",
        "Meeting pathway framework."
      ],
      involvement: "Provide access credentials; verify profile copy.",
      signal: "Profile layouts are approved for setup."
    },
    {
      week: 3,
      title: "Content preparation",
      objective: "Conduct first recording and draft initial assets.",
      activities: [
        "Recording session preparation.",
        "Guided storytelling interview.",
        "Text drafting and layout reviews."
      ],
      outputs: [
        "Initial short-form content library.",
        "First publishing batch."
      ],
      involvement: "Participate in scheduled recording; review content assets.",
      signal: "First content batch is signed off."
    },
    {
      week: 4,
      title: "Launch and learn",
      objective: "Launch initial content and test communication pathways.",
      activities: [
        "Publishing schedule activation.",
        "Profile configuration finalisation.",
        "Monitoring early reach."
      ],
      outputs: [
        "Active profiles.",
        "First set of live content posts.",
        "Initial visitor logs."
      ],
      involvement: "Verify profiles are live; review first response report.",
      signal: "All digital platforms are active and publishing."
    },
    {
      week: 5,
      title: "Consistency and monitoring",
      objective: "Maintain regular publishing and track initial visitor response.",
      activities: [
        "Publish scheduled assets.",
        "Log early replies.",
        "Compile engagement statistics."
      ],
      outputs: [
        "Weekly content batch.",
        "First engagement summary."
      ],
      involvement: "Review response logs.",
      signal: "Content is published on schedule with zero operational issues."
    },
    {
      week: 6,
      title: "Audience development",
      objective: "Grow profile visibility toward the target cohorts.",
      activities: [
        "Relevant outreach and interactions.",
        "Comment responses.",
        "Profile visibility optimisation."
      ],
      outputs: [
        "Visibility reports.",
        "Growth analytics log."
      ],
      involvement: "Review monthly progress report.",
      signal: "Profile impressions demonstrate positive trend."
    },
    {
      week: 7,
      title: "Enquiry activation",
      objective: "Encourage interested profile visitors to ask questions.",
      activities: [
        "Introduce clear enquiry prompts in content.",
        "Share evaluation perspectives."
      ],
      outputs: [
        "Incoming enquiry tracking sheet."
      ],
      involvement: "Provide answers to specialized enquiry questions.",
      signal: "First set of direct enquiries are logged."
    },
    {
      week: 8,
      title: "Filter and qualify",
      objective: "Identify high-relevance prospects.",
      activities: [
        "Apply simple qualification questions.",
        "Review responses.",
        "Filter out casual queries."
      ],
      outputs: [
        "List of suitable prospects ready for conversation."
      ],
      involvement: "Review prospect backgrounds.",
      signal: "Prospects are qualified using the structured framework."
    },
    {
      week: 9,
      title: "Meeting setting",
      objective: "Book direct calls with suitable prospects.",
      activities: [
        "Send booking confirmations.",
        "Coordinate schedules.",
        "Deliver meeting brief context."
      ],
      outputs: [
        "Confirmed meeting entries on client calendar."
      ],
      involvement: "Host business conversations with interested prospects.",
      signal: "Qualified prospects are scheduled for direct meetings."
    },
    {
      week: 10,
      title: "Follow-up and nurture",
      objective: "Maintain engagement post-meeting and support decisions.",
      activities: [
        "Send customized follow-up emails.",
        "Supply travel opportunity sheets."
      ],
      outputs: [
        "Follow-up status records.",
        "Nurture communications."
      ],
      involvement: "Maintain personal relation updates.",
      signal: "Prospects receive customized context information post-meeting."
    },
    {
      week: 11,
      title: "Performance review",
      objective: "Evaluate initial calendar operations and conversion paths.",
      activities: [
        "Compile reach statistics.",
        "Calculate enquiries and meetings attended.",
        "Highlight bottleneck areas."
      ],
      outputs: [
        "80-day performance audit sheet."
      ],
      involvement: "Participate in brief review meeting.",
      signal: "Operational metrics are structured and ready for scaling adjustments."
    },
    {
      week: 12,
      title: "Growth scaling strategy",
      objective: "Setup scaling actions for the next quarter.",
      activities: [
        "Design next-step content framework.",
        "Expand outreach parameters."
      ],
      outputs: [
        "Next-quarter scaling plan.",
        "Final system transition overview."
      ],
      involvement: "Align on future targets and resource allocations.",
      signal: "Transition plan is finalized and signed off."
    }
  ];

  // FAQ Objection data
  const faqs = [
    {
      q: "How much time do I need to give each week?",
      a: "Your time commitment is structured to be as low as possible. You participate in a 2-hour recording/interview session once a month and spend 15–20 minutes a week reviewing drafts. We handle all editing, production, publishing, and scheduling."
    },
    {
      q: "Do I need to know social media or editing?",
      a: "Not at all. We handle all technical and creative elements, including video editing, caption writing, graphic formatting, publishing parameters, and inbox tool setup. Your focus remains entirely on sharing your real stories and handling serious calls."
    },
    {
      q: "Do you write and produce the content?",
      a: "Yes. We plan all content hooks, script concepts, edit the raw recording files, and schedule the posts. The material is built from your spoken answers in our guided recordings, ensuring it sounds authentic to you."
    },
    {
      q: "How do we decide what content to publish?",
      a: "We work from a predefined content calendar mapped to the five positioning pillars (Business, Travel, Entrepreneurship, Personal Experience, Opportunity Education). You review and sign off on all finished assets before anything is published."
    },
    {
      q: "What happens if a post performs poorly?",
      a: "Individual post reach is directional. We focus on month-wide engagement and high-quality visitor actions (enquiries and bookings) rather than chasing viral metrics on a single post."
    },
    {
      q: "What results are measured?",
      a: "We track primary business signals: serious direct enquiries, meetings booked, and meetings attended on your calendar. Reach, impressions, and views are tracked secondary as directional audience signals."
    },
    {
      q: "Is this guaranteed to generate business?",
      a: "No. We build, manage, and operate the complete digital presence and business development process. However, final business outcomes rely on your offer, your sales call performance, and market fit, which are outside the scope of digital execution."
    },
    {
      q: "What happens after 90 days?",
      a: "After 90 days, we perform a system transition audit. You will have a fully functioning digital system and conversation path. You can decide to renew the partnership, scale the scope, or manage the operations in-house."
    },
    {
      q: "Who handles enquiries before a serious conversation?",
      a: "We establish direct messaging templates and qualification forms (like fit-check paths) so casual queries are filtered out automatically. Only serious opportunities are forwarded to you for calendar bookings."
    },
    {
      q: "Can the plan be adjusted based on what we learn?",
      a: "Yes. The 90-day master calendar is a flexible roadmap. We audit results bi-weekly and update topics, messaging filters, or target positioning elements dynamically based on real visitor response signals."
    }
  ];

  // Helper variables for dynamically loaded selection
  const selection = proposalData?.existingSelection;
  const chosenPkg = selection?.packages;
  const agreedPrice = selection?.price_snapshot || chosenPkg?.standard_price;

  return (
    <div className="proposal-page relative min-h-screen bg-[#070A13] text-slate-100 selection:bg-[#C5A880]/20 selection:text-[#C5A880] font-sans antialiased overflow-x-hidden">
      
      {/* Scroll progress bar */}
      <div className="fixed top-20 left-0 right-0 h-[2px] bg-[#C5A880]/10 z-50">
        <div 
          className="h-full bg-[#C5A880] transition-all duration-75"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Persistent top navigation */}
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
            Section 1: Hero
            ========================================== */}
        <section 
          ref={overviewRef}
          id="overview" 
          className="relative min-h-[70vh] flex flex-col justify-center items-start text-left pt-8 md:pt-16 border-b border-slate-800/40 pb-20"
        >
          {/* Subtle accent light */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#C5A880]/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="inline-flex flex-col mb-8">
            <span className="proposal-eyebrow text-xs font-bold tracking-widest text-[#C5A880] uppercase">
              Prepared by
            </span>
            <span className="text-sm font-semibold text-slate-400 mt-1 font-mono">
              Jayant Web & AI Systems
            </span>
          </div>

          <h1 className="h1-proposal mb-8 max-w-5xl">
            Your Experience, Built for the Digital World.
          </h1>

          <p className="proposal-body-text text-slate-300 max-w-3xl mb-12 font-light leading-relaxed">
            A 90-day system to turn your existing business experience and professional credibility into a stronger digital presence and a structured path to qualified business conversations.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => scrollToSection("roadmap")}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#C5A880] hover:bg-[#D8B992] text-slate-950 px-8 py-4.5 text-sm font-bold transition-all duration-200 shadow-lg hover:shadow-[#C5A880]/10 active:scale-[0.98] cursor-pointer"
            >
              <span>Explore the 90-Day Plan</span>
              <ArrowRight className="size-4" />
            </button>

            <button
              onClick={() => scrollToSection("investment")}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/50 hover:bg-slate-900 text-slate-200 px-8 py-4.5 text-sm font-bold transition-all duration-200 active:scale-[0.98] cursor-pointer"
            >
              <span>Review Investment</span>
              <ArrowRight className="size-4" />
            </button>
          </div>
        </section>


        {/* ==========================================
            Section 2: PROBLEM (Why This Matters)
            ========================================== */}
        <section ref={problemRef} id="problem" className="border-b border-slate-800/40 pb-20 scroll-mt-24 text-left">
          <div className="mb-12">
            <span className="proposal-eyebrow text-xs tracking-widest text-[#C5A880] font-bold">
              Why Invest Now
            </span>
            <h2 className="h2-proposal mt-2">
              Where You Are Today. Where We Want to Go.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* What already exists */}
            <div className="p-8 rounded-2xl bg-slate-900/10 border border-slate-800/60 flex flex-col justify-between">
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
                    "Decades of direct business leadership and experience",
                    "Established professional credibility built offline",
                    "A strong pool of real-world business relationships",
                    "Deep knowledge of entrepreneurship, operations, and travel"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-300 font-light proposal-body-text">
                      <span className="size-1.5 rounded-full bg-green-500 mt-2.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* The Digital Gap */}
            <div className="p-8 rounded-2xl bg-slate-900/10 border border-slate-800/60 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="p-2.5 rounded-lg bg-[#C5A880]/10 text-[#C5A880]">
                    <AlertCircle className="size-6" />
                  </div>
                  <h3 className="h3-proposal text-2xl">
                    The Digital Gap
                  </h3>
                </div>

                <ul className="space-y-4">
                  {[
                    "Weak online visibility relative to offline capability",
                    "Inconsistent publishing schedules and content production",
                    "Unclear enquiry pathways for interested visitors",
                    "No structured, measurable digital relationship process"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-300 font-light proposal-body-text">
                      <span className="size-1.5 rounded-full bg-[#C5A880] mt-2.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom statement block quote */}
          <div className="p-8 rounded-2xl bg-[#C5A880]/[0.02] border border-[#C5A880]/10 text-center">
            <p className="font-serif text-2xl text-slate-200 font-normal italic max-w-4xl mx-auto leading-relaxed">
              &quot;Credibility already exists. Our job is to make it easier to discover, understand, and act on.&quot;
            </p>
          </div>
        </section>


        {/* ==========================================
            Section 3: OPPORTUNITY (Target Transformation)
            ========================================== */}
        <section ref={opportunityRef} id="opportunity" className="border-b border-slate-800/40 pb-20 scroll-mt-24 text-left">
          <div className="mb-12">
            <span className="proposal-eyebrow text-xs tracking-widest text-[#C5A880] font-bold">
              The opportunity
            </span>
            <h2 className="h2-proposal mt-2">
              Target Transformation
            </h2>
            <p className="text-xs text-[#7A8499] font-mono tracking-widest uppercase mt-4 block font-semibold">
              OPERATING TARGET &mdash; NOT A GUARANTEED COMMERCIAL RESULT
            </p>
          </div>

          {/* Today vs After 90 days grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Today */}
            <div className="p-8 rounded-2xl bg-[#0E1326]/10 border border-[#1E2544]">
              <span className="proposal-eyebrow text-xs text-red-500 font-bold block mb-5">TODAY</span>
              <ul className="space-y-4">
                {[
                  "Fragmented digital presence across networks",
                  "Inconsistent content output without a system",
                  "Manual and unorganized visitor follow-up",
                  "Weak overall visibility to primary audiences"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-400 font-light proposal-body-text">
                    <span className="size-1.5 rounded-full bg-red-500 mt-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After 90 days */}
            <div className="p-8 rounded-2xl bg-[#C5A880]/5 border border-[#C5A880]/20">
              <span className="proposal-eyebrow text-xs text-[#C5A880] font-bold block mb-5">AFTER 90 DAYS</span>
              <ul className="space-y-4">
                {[
                  "Professional digital presence aligned with offline trust",
                  "Repeatable, structured content system",
                  "Clear, filterable path to enquiries and consultations",
                  "Organized meeting bookings and follow-up templates",
                  "Measurable visitor actions and system metrics"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-200 font-light proposal-body-text">
                    <span className="size-1.5 rounded-full bg-[#C5A880] mt-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Personal Branding Strategy & Audience hypotheses split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-6">
            
            {/* Strategy Pillar */}
            <div className="lg:col-span-5 space-y-6">
              <span className="proposal-eyebrow text-xs tracking-widest text-[#C5A880] font-bold">
                Brand positioning framework
              </span>
              <h3 className="h3-proposal text-2xl">
                Build the Person Before Promoting the Opportunity
              </h3>
              <p className="proposal-body-text text-slate-400 font-light leading-relaxed">
                We believe that trust is established by presenting your personal expertise, choices, and journeys. The business opportunity should sit as a natural outcome of your narrative, not the sole pitch.
              </p>
              
              <ul className="space-y-3 font-mono text-xs text-slate-350">
                <li className="flex items-center gap-2">
                  <span className="text-[#C5A880] font-bold">01 /</span> Familiarity &mdash; Show the person behind the desk
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C5A880] font-bold">02 /</span> Trust &mdash; Share verified leadership decisions
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C5A880] font-bold">03 /</span> Relevance &mdash; Filter out raw opportunities
                </li>
              </ul>
              
              <p className="font-serif italic text-lg text-[#C5A880] pt-2">
                &quot;The opportunity becomes part of the story, not the entire story.&quot;
              </p>
            </div>

            {/* Target cohorts list */}
            <div className="lg:col-span-7 space-y-4">
              <span className="proposal-eyebrow text-xs tracking-widest text-[#C5A880] font-bold block mb-2">
                Audience Cohorts (Hypotheses)
              </span>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: Plane,
                    title: "The Frequent Traveller",
                    desc: "Individuals who value travel experiences, lifestyle flexibility, and travel-oriented opportunities."
                  },
                  {
                    icon: Briefcase,
                    title: "The Entrepreneur / Owner",
                    desc: "Existing business owners and operators looking for diversification and new projects."
                  },
                  {
                    icon: Users,
                    title: "The Experienced Professional",
                    desc: "Mid-to-senior corporate professionals seeking alternate paths and flexible business setups."
                  },
                  {
                    icon: GraduationCap,
                    title: "The Relationship Connector",
                    desc: "Natural networkers who thrive on direct referrals, relationship-building, and collaborative business models."
                  }
                ].map((cohort, idx) => (
                  <div key={idx} className="p-5 rounded-xl bg-slate-900/20 border border-[#1E2544] flex items-start gap-4">
                    <div className="p-2 rounded bg-[#C5A880]/10 text-[#C5A880] shrink-0 mt-0.5">
                      <cohort.icon className="size-4.5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-slate-200 mb-1">{cohort.title}</h4>
                      <p className="text-xs text-slate-400 font-light leading-relaxed">{cohort.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* ==========================================
            Section 4: PLAN (What Exactly Are We Building?)
            ========================================== */}
        <section ref={strategyRef} id="strategy" className="border-b border-slate-800/40 pb-20 scroll-mt-24 text-left">
          <div className="mb-12">
            <span className="proposal-eyebrow text-xs tracking-widest text-[#C5A880] font-bold">
              The plan
            </span>
            <h2 className="h2-proposal mt-2">
              What Exactly Are We Building?
            </h2>
            <p className="proposal-body-text text-slate-400 mt-4 max-w-3xl font-light">
              A structured digital presence and business-development system built around your experience, positioning, and target audience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                tag: "PRESENCE",
                title: "Professional Digital Presence",
                what: "A clear online identity that communicates who you are and what you represent.",
                get: "Optimized bios, profile layout frameworks, and booking page setups.",
                why: "Creates a trustworthy, professional first impression when candidates search for you."
              },
              {
                num: "02",
                tag: "POSITIONING",
                title: "Brand Positioning Framework",
                what: "A defined framework outlining your story, expertise, content pillars, and style.",
                get: "Positioning guide, tone-of-voice directives, and target audience alignment sheets.",
                why: "Ensures all public communications remain coherent and represent you accurately."
              },
              {
                num: "03",
                tag: "CONTENT",
                title: "Consistent Content System",
                what: "A repeatable content planning, production, and scheduling pipeline.",
                get: "Filming interview outlines, written text drafts, edited videos, and publishing calendars.",
                why: "Maintains regular online visibility with minimal demands on your daily schedule."
              },
              {
                num: "04",
                tag: "ENQUIRY JOURNEY",
                title: "Enquiry & Conversation Journey",
                what: "A structured path for interested profile visitors to ask questions and request info.",
                get: "Direct message copy, profile path optimizations, and initial inquiry filters.",
                why: "Turns generic online interest into direct, filterable business conversations."
              },
              {
                num: "05",
                tag: "MEETING & FOLLOW-UP",
                title: "Meeting & Follow-up Process",
                what: "A structured pipeline to schedule fit-check calls and manage subsequent nurture.",
                get: "Calendar booking configurations, email confirmation templates, and opportunity briefs.",
                why: "Ensures serious opportunities are handled professionally and never get lost."
              },
              {
                num: "06",
                tag: "MEASUREMENT",
                title: "Performance Review",
                what: "A regular audit loop checking reach, bookings, conversions, and signals.",
                get: "Monthly analytics reports, bi-weekly reviews, and scaling recommendation logs.",
                why: "Provides data-backed visibility into what content and positioning angles perform best."
              }
            ].map((card, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-[#0E1326]/30 border border-[#1E2544] flex flex-col justify-between hover:border-[#C5A880]/30 transition-all duration-200 text-left">
                <div className="space-y-4">
                  <span className="proposal-eyebrow text-xs text-[#C5A880]/60 font-mono block">
                    {card.num} / {card.tag}
                  </span>
                  
                  <h3 className="h3-proposal text-xl text-slate-100 font-serif leading-tight">
                    {card.title}
                  </h3>

                  <div className="space-y-3 pt-2 text-xs">
                    <div>
                      <span className="text-[#C5A880] font-mono uppercase tracking-wider block mb-0.5">What is it:</span>
                      <p className="text-slate-300 font-light leading-relaxed">{card.what}</p>
                    </div>
                    <div>
                      <span className="text-[#C5A880] font-mono uppercase tracking-wider block mb-0.5">What you receive:</span>
                      <p className="text-slate-300 font-light leading-relaxed">{card.get}</p>
                    </div>
                    <div>
                      <span className="text-[#C5A880] font-mono uppercase tracking-wider block mb-0.5">Why it matters:</span>
                      <p className="text-slate-400 font-light italic leading-relaxed">{card.why}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* ==========================================
            Section 5: DELIVERABLES ("What You Actually Get")
            ========================================== */}
        <section ref={deliverablesRef} id="deliverables" className="border-b border-slate-800/40 pb-20 scroll-mt-24 text-left">
          <div className="mb-12">
            <span className="proposal-eyebrow text-xs tracking-widest text-[#C5A880] font-bold">
              The assets
            </span>
            <h2 className="h2-proposal mt-2">
              What You Actually Get
            </h2>
            <p className="proposal-body-text text-slate-400 mt-4 max-w-3xl font-light">
              A breakdown of the concrete digital assets, configurations, and systems built and deployed for your proposal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Col 1 */}
            <div className="p-6 rounded-2xl bg-slate-900/10 border border-[#1E2544] flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-[#C5A880] font-bold block mb-4 uppercase">DIGITAL FOUNDATION</span>
                <ul className="space-y-3 text-xs text-slate-300 font-light leading-relaxed">
                  <li>&bull; Complete profile setup and bio designs</li>
                  <li>&bull; Aligned bio copywriting and tags</li>
                  <li>&bull; Calendar scheduling link setup</li>
                  <li>&bull; Contact links landing layout</li>
                  <li>&bull; Discovery questionnaire assets</li>
                </ul>
              </div>
            </div>

            {/* Col 2 */}
            <div className="p-6 rounded-2xl bg-slate-900/10 border border-[#1E2544] flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-[#C5A880] font-bold block mb-4 uppercase">CONTENT SYSTEM</span>
                <ul className="space-y-3 text-xs text-slate-300 font-light leading-relaxed">
                  <li>&bull; 5 content pillar script templates</li>
                  <li>&bull; Monthly guided recording templates</li>
                  <li>&bull; Short-form edits (video & graphics)</li>
                  <li>&bull; Written posts for selected channels</li>
                  <li>&bull; 90-day active editorial calendar</li>
                </ul>
              </div>
            </div>

            {/* Col 3 */}
            <div className="p-6 rounded-2xl bg-slate-900/10 border border-[#1E2544] flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-[#C5A880] font-bold block mb-4 uppercase">BUSINESS DEVELOPMENT</span>
                <ul className="space-y-3 text-xs text-slate-300 font-light leading-relaxed">
                  <li>&bull; Enquiry qualification questions</li>
                  <li>&bull; Fit-check evaluation steps</li>
                  <li>&bull; Calendar meeting email flows</li>
                  <li>&bull; Meeting confirmation templates</li>
                  <li>&bull; Nurture opportunity briefs</li>
                </ul>
              </div>
            </div>

            {/* Col 4 */}
            <div className="p-6 rounded-2xl bg-slate-900/10 border border-[#1E2544] flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-[#C5A880] font-bold block mb-4 uppercase">MEASUREMENT SYSTEM</span>
                <ul className="space-y-3 text-xs text-slate-300 font-light leading-relaxed">
                  <li>&bull; Bi-weekly metrics update charts</li>
                  <li>&bull; Monthly visitor response audits</li>
                  <li>&bull; Serious enquiry log sheets</li>
                  <li>&bull; Meeting-setting efficiency reviews</li>
                  <li>&bull; Roadmap scaling adjustments list</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <span className="text-[10px] text-slate-500 font-mono">
              *All features, delivery volumes, and exact asset inclusions map directly to your chosen package selection. No arbitrary quantities are promised.
            </span>
          </div>
        </section>


        {/* ==========================================
            Section 6: HOW IT WORKS (Journey & Workflow)
            ========================================== */}
        <section ref={journeyRef} id="journey" className="border-b border-slate-800/40 pb-20 scroll-mt-24 text-left">
          <div className="mb-12">
            <span className="proposal-eyebrow text-xs tracking-widest text-[#C5A880] font-bold">
              The conversion path
            </span>
            <h2 className="h2-proposal mt-2">
              The Relationship Pathway
            </h2>
            <p className="proposal-body-text text-slate-400 mt-4 max-w-3xl font-light">
              How cold profile visitors are moved toward direct, qualified business discussions.
            </p>
          </div>

          {/* Visual flow map */}
          <div className="p-8 rounded-2xl bg-[#0E1326]/30 border border-[#1E2544] mb-16">
            <div className="flex flex-wrap items-center justify-start gap-4">
              {[
                "CONTENT",
                "WHATSAPP / ENQUIRY",
                "INTEREST UNDERSTOOD",
                "FIT CHECK",
                "CALL / MEETING",
                "FOLLOW-UP"
              ].map((step, idx, arr) => (
                <React.Fragment key={idx}>
                  <div className="px-4 py-3 text-xs font-semibold font-mono rounded-lg bg-[#0C1225] border border-slate-800 text-slate-200">
                    {step}
                  </div>
                  {idx < arr.length - 1 && (
                    <span className="text-[#C5A880] font-bold shrink-0">&rarr;</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Workflow execution steps */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="proposal-eyebrow text-xs tracking-widest text-[#C5A880] font-bold">
                Workflow efficiency
              </span>
              <h3 className="h3-proposal text-2xl mt-2 leading-tight">
                A Simple Content Process That Minimises Your Work
              </h3>
              <p className="proposal-body-text text-slate-350 mt-4 font-light leading-relaxed">
                Scheduled monthly interview sessions are sized to gather your insights, stories, and details. We translate these directly into finished public content posts, managing the execution on your behalf.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="p-8 rounded-2xl bg-slate-900/20 border border-[#1E2544] relative overflow-hidden">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 text-left">
                  {/* Step 1 */}
                  <div>
                    <span className="text-[10px] text-slate-500 font-mono block mb-1">STEP 01</span>
                    <h4 className="font-bold text-sm text-[#C5A880] mb-2 uppercase">YOU SHARE</h4>
                    <p className="text-slate-400 font-light text-xs leading-relaxed">
                      Stories, business choices, experience, and scheduled monthly recording.
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div>
                    <span className="text-[10px] text-slate-500 font-mono block mb-1">STEP 02</span>
                    <h4 className="font-bold text-sm text-[#C5A880] mb-2 uppercase">WE PRODUCE</h4>
                    <p className="text-slate-400 font-light text-xs leading-relaxed">
                      Written copy, edited reels/videos, and publishing assets.
                    </p>
                  </div>

                  {/* Step 3 */}
                  <div>
                    <span className="text-[10px] text-slate-500 font-mono block mb-1">STEP 03</span>
                    <h4 className="font-bold text-sm text-[#C5A880] mb-2 uppercase">WE PUBLISH</h4>
                    <p className="text-slate-400 font-light text-xs leading-relaxed">
                      Regular publishing on agreed schedules.
                    </p>
                  </div>

                  {/* Step 4 */}
                  <div>
                    <span className="text-[10px] text-slate-500 font-mono block mb-1">STEP 04</span>
                    <h4 className="font-bold text-sm text-[#C5A880] mb-2 uppercase">WE REVIEW</h4>
                    <p className="text-slate-400 font-light text-xs leading-relaxed">
                      Audience response trends and enquiry counts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ==========================================
            Section 7: TIMELINE (90-Day Roadmap)
            ========================================== */}
        <section ref={roadmapRef} id="roadmap" className="border-b border-slate-800/40 pb-20 scroll-mt-24 text-left">
          <div className="mb-12">
            <span className="proposal-eyebrow text-xs tracking-widest text-[#C5A880] font-bold">
              The timeline
            </span>
            <h2 className="h2-proposal mt-2">
              90-Day Roadmap
            </h2>
            <p className="proposal-body-text text-slate-400 mt-4 max-w-3xl font-light">
              Explore the monthly objectives and click into specific weeks to review detailed plans.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Month Accordions */}
            <div className="lg:col-span-5 space-y-4">
              {roadmapMonths.map((m) => (
                <div 
                  key={m.month}
                  className={`rounded-xl border transition-all overflow-hidden ${
                    expandedMonth === m.month
                      ? "bg-slate-900/60 border-[#C5A880]/60 shadow-lg"
                      : "bg-[#0E1326]/20 border-[#1E2544] hover:bg-slate-900/30"
                  }`}
                >
                  <button
                    onClick={() => {
                      setExpandedMonth(expandedMonth === m.month ? null : m.month);
                      // Auto-select first week of that month
                      if (m.month === 1) setExpandedWeek(1);
                      if (m.month === 2) setExpandedWeek(5);
                      if (m.month === 3) setExpandedWeek(9);
                    }}
                    className="w-full text-left p-6 flex items-center justify-between group cursor-pointer"
                  >
                    <div>
                      <span className={`font-mono text-xs block mb-1 font-bold ${
                        expandedMonth === m.month ? "text-[#C5A880]" : "text-slate-500"
                      }`}>
                        MONTH 0{m.month}
                      </span>
                      <span className="text-lg font-bold tracking-wide font-serif text-slate-200">
                        {m.title.split(" — ")[1]}
                      </span>
                    </div>
                    <ChevronDown className={`size-5 transition-transform duration-250 ${
                      expandedMonth === m.month ? "rotate-180 text-[#C5A880]" : "text-slate-500 group-hover:text-slate-350"
                    }`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {expandedMonth === m.month && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-6 pb-6 pt-2 border-t border-[#1E2544]/60 space-y-4 text-xs"
                      >
                        <div>
                          <span className="text-[#C5A880] font-mono uppercase tracking-wider block mb-1">Monthly Objective:</span>
                          <p className="text-slate-300 font-light leading-relaxed">{m.objective}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <span className="text-[#C5A880] font-mono uppercase tracking-wider block mb-1">Activities:</span>
                            <ul className="space-y-1 text-slate-400">
                              {m.activities.map((a, i) => <li key={i}>&bull; {a}</li>)}
                            </ul>
                          </div>
                          <div>
                            <span className="text-[#C5A880] font-mono uppercase tracking-wider block mb-1">Outputs:</span>
                            <ul className="space-y-1 text-slate-400">
                              {m.outputs.map((o, i) => <li key={i}>&bull; {o}</li>)}
                            </ul>
                          </div>
                        </div>

                        {/* Week selector buttons inside accordion */}
                        <div className="pt-4 border-t border-[#1E2544]/60">
                          <span className="text-[#C5A880] font-mono uppercase tracking-wider block mb-2">Explore Weekly Details:</span>
                          <div className="flex flex-wrap gap-2">
                            {m.weeks.map((wk) => (
                              <button
                                key={wk}
                                onClick={() => setExpandedWeek(wk)}
                                className={`px-3 py-1.5 rounded text-[11px] font-mono font-bold transition-all cursor-pointer ${
                                  expandedWeek === wk
                                    ? "bg-[#C5A880] text-[#080C16]"
                                    : "bg-[#080C16] text-[#A0A8B8] hover:text-[#FAF7EE] border border-[#1E2638]"
                                }`}
                              >
                                Week 0{wk}
                              </button>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right: Detailed expanded week */}
            <div className="lg:col-span-7 bg-[#0C1225]/40 border border-slate-800 rounded-2xl p-8 min-h-[460px] flex flex-col justify-between">
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
                          Detailed Timeline Overview
                        </span>
                      </div>
                      
                      <h3 className="h3-proposal text-2xl font-serif text-[#C5A880]">
                        {roadmapWeeks[expandedWeek - 1].title}
                      </h3>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                        Weekly objective
                      </h4>
                      <p className="text-slate-300 text-sm font-light leading-relaxed">
                        {roadmapWeeks[expandedWeek - 1].objective}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Major activities
                      </h4>
                      <ul className="space-y-2">
                        {roadmapWeeks[expandedWeek - 1].activities.map((act, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-350 font-light leading-relaxed">
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
                        <ul className="space-y-1 text-xs text-slate-300 font-light">
                          {roadmapWeeks[expandedWeek - 1].outputs.map((out, idx) => (
                            <li key={idx}>
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
                          <p className="text-xs text-slate-400 font-light leading-relaxed italic">
                            &quot;{roadmapWeeks[expandedWeek - 1].signal}&quot;
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-8 pt-5 border-t border-slate-850 text-center">
                <span className="text-[10px] text-slate-500 font-mono">
                  *Timeline dates are flexible and adapt to your availability and confirmation speeds.
                </span>
              </div>
            </div>
          </div>
        </section>


        {/* ==========================================
            Section 8: RESPONSIBILITIES (Your Time Commitment)
            ========================================== */}
        <section ref={responsibilitiesRef} id="responsibilities" className="border-b border-slate-800/40 pb-20 scroll-mt-24 text-left">
          <div className="mb-12">
            <span className="proposal-eyebrow text-xs tracking-widest text-[#C5A880] font-bold">
              Time Commitment
            </span>
            <h2 className="h2-proposal mt-2">
              How Much of My Time Does This Need?
            </h2>
          </div>

          {/* Time commitment visual indicators */}
          <div className="p-8 rounded-2xl bg-[#0E1326]/30 border border-[#1E2544] mb-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="h3-proposal text-2xl font-serif">Your Involvement</h3>
              <p className="text-xs text-slate-400 font-light mt-1">Structured schedule designed around busy business leaders.</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs text-slate-400">LOW</span>
              <span className="text-slate-500 font-bold">&bull;</span>
              <span className="px-4 py-2 rounded-xl bg-[#C5A880]/10 border border-[#C5A880]/20 font-mono text-xs text-[#C5A880] font-semibold">STRUCTURED</span>
              <span className="text-slate-500 font-bold">&bull;</span>
              <span className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs text-slate-400">SCHEDULED</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Client Role */}
            <div className="p-8 rounded-2xl bg-slate-900/10 border border-[#1E2544]">
              <span className="font-mono text-xs text-[#C5A880] block mb-4 font-bold">YOU PROVIDE:</span>
              <ul className="space-y-4">
                {[
                  "Stories, leadership examples, and business experience",
                  "Accurate details and facts regarding travel opportunities",
                  "Attendance at a 2-hour scheduled filming session each month",
                  "Final review and approval of monthly written drafts",
                  "Serious business conversations with qualified leads"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-300 font-light proposal-body-text">
                    <span className="size-1.5 rounded-full bg-[#C5A880] mt-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Jayant Role */}
            <div className="p-8 rounded-2xl bg-slate-900/10 border border-[#1E2544]">
              <span className="font-mono text-xs text-[#C5A880] block mb-4 font-bold">WE HANDLE:</span>
              <ul className="space-y-4">
                {[
                  "Personal brand positioning framework designs",
                  "Monthly content strategy planning and caption writing",
                  "Video editing, graphic design, and asset layouts",
                  "Publishing operations and consistent post scheduling",
                  "Automated enquiry qualification pathways setup",
                  "Bi-weekly data collection and monthly reviews"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-300 font-light proposal-body-text">
                    <span className="size-1.5 rounded-full bg-[#C5A880] mt-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Simple Content Pillars grid simplified */}
          <div className="p-8 rounded-2xl bg-slate-900/20 border border-slate-800/60">
            <span className="proposal-eyebrow text-xs block mb-6 text-[#C5A880] font-bold text-left">CONTENT POSITIONING PILLARS</span>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-left">
              {[
                { title: "BUSINESS", desc: "Lessons, decisions, leadership", purpose: "Build offline authority" },
                { title: "TRAVEL", desc: "Destinations, experiences, insights", purpose: "Humanise brand & reach" },
                { title: "ENTREPRENEURSHIP", desc: "Risk, diversification, thoughts", purpose: "Qualify business context" },
                { title: "PERSONAL", desc: "Journey, milestones, opinions", purpose: "Establish trust & familiarity" },
                { title: "OPPORTUNITY", desc: "FAQs, details, pathways", purpose: "Filter for serious prospects" }
              ].map((pillar, i) => (
                <div key={i} className="p-5 rounded-xl bg-slate-950/40 border border-slate-800">
                  <h4 className="font-mono text-xs text-[#C5A880] font-bold mb-2">{pillar.title}</h4>
                  <p className="text-xs text-slate-300 font-light mb-3">{pillar.desc}</p>
                  <span className="text-[10px] text-slate-500 font-mono block border-t border-slate-850 pt-2">
                    PURPOSE: {pillar.purpose}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ==========================================
            Section 9: MEASUREMENT (Expectations & Signals)
            ========================================== */}
        <section ref={measurementRef} id="measurement" className="border-b border-slate-800/40 pb-20 scroll-mt-24 text-left">
          <div className="mb-12">
            <span className="proposal-eyebrow text-xs tracking-widest text-[#C5A880] font-bold">
              Accountability
            </span>
            <h2 className="h2-proposal mt-2">
              How Success is Measured
            </h2>
          </div>

          {/* Business Signals vs secondary metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            <div className="lg:col-span-5 space-y-4">
              <h3 className="h3-proposal text-2xl font-serif">Operational Transparency</h3>
              <p className="proposal-body-text text-slate-400 font-light leading-relaxed">
                We track two layers of indicators: primary signals that drive direct business conversations, and secondary signals that show overall audience alignment.
              </p>
              
              <div className="p-5 rounded-xl bg-[#0E1326]/30 border border-[#1E2544] mt-6">
                <p className="text-xs text-[#C5A880] font-mono leading-relaxed">
                  &quot;Audience metrics are directional signals. Business conversations are the primary commercial indicators.&quot;
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="p-6 rounded-2xl bg-slate-900/10 border border-slate-800/60">
                <span className="font-mono text-xs text-[#C5A880] font-bold block mb-4">PRIMARY BUSINESS SIGNALS</span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono">
                  <div className="p-3.5 rounded bg-slate-900 border border-[#1E2544]">Serious Enquiries</div>
                  <div className="p-3.5 rounded bg-slate-900 border border-[#1E2544]">Meetings Booked</div>
                  <div className="p-3.5 rounded bg-slate-900 border border-[#1E2544]">Meetings Attended</div>
                  <div className="p-3.5 rounded bg-slate-900 border border-[#1E2544]">Follow-up Activity</div>
                  <div className="p-3.5 rounded bg-slate-900 border border-[#1E2544]">Client Conversions</div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/10 border border-slate-800/60">
                <span className="font-mono text-xs text-slate-450 font-bold block mb-4">SECONDARY AUDIENCE SIGNALS</span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono text-slate-400">
                  <div className="p-3 rounded bg-slate-950 border border-slate-900">Total Reach</div>
                  <div className="p-3 rounded bg-slate-950 border border-slate-900">Profile Visits</div>
                  <div className="p-3 rounded bg-slate-950 border border-slate-900">Video Views</div>
                  <div className="p-3 rounded bg-slate-950 border border-slate-900">Post Saves</div>
                </div>
              </div>
            </div>
          </div>

          {/* Success limits section - Control vs Guarantee */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {/* Control */}
            <div className="p-8 rounded-2xl bg-slate-900/10 border border-[#1E2544]">
              <span className="font-mono text-xs text-[#C5A880] block mb-4 font-bold">WHAT WE CAN CONTROL:</span>
              <ul className="space-y-3 text-xs text-slate-300 font-light leading-relaxed">
                <li>&bull; Strict adherence to agreed content scheduling</li>
                <li>&bull; Editorial and brand positioning quality</li>
                <li>&bull; Consistent publishing and channel management</li>
                <li>&bull; Direct message and qualification filter configs</li>
                <li>&bull; Systematic data reviews and monthly reports</li>
              </ul>
            </div>

            {/* Cannot Guarantee */}
            <div className="p-8 rounded-2xl bg-slate-900/10 border border-slate-800/60">
              <span className="font-mono text-xs text-slate-500 block mb-4 font-bold">WHAT WE CANNOT GUARANTEE:</span>
              <ul className="space-y-3 text-xs text-slate-400 font-light leading-relaxed">
                <li>&bull; Exact counts of comments, reach, or organic visibility</li>
                <li>&bull; Total number of new profile followers</li>
                <li>&bull; Exact volume of direct enquiries or requests</li>
                <li>&bull; Final sales closes or business income generated</li>
              </ul>
            </div>
          </div>
        </section>


        {/* ==========================================
            Section 10: INVESTMENT (Commercial Tiers)
            ========================================== */}
        <section ref={investmentRef} id="investment" className="border-b border-slate-800/40 pb-20 scroll-mt-24 text-left">
          <div className="mb-12">
            <span className="proposal-eyebrow text-xs tracking-widest text-[#C5A880] font-bold">
              The investment
            </span>
            <h2 className="h2-proposal mt-2">
              The 90-Day Engagement
            </h2>
            <p className="proposal-body-text text-slate-400 mt-4 max-w-3xl font-light">
              All commercial options and scopes are managed transparently by the commercials system.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {selection ? (
              // Case 1: Client has already selected a package tier
              <div className="p-8 sm:p-12 rounded-3xl bg-[#0D162D] border-2 border-[#C5A880]/60 space-y-6">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="size-5 text-[#C5A880]" />
                  <span className="font-mono text-xs font-bold text-[#C5A880] uppercase tracking-wider">
                    CONFIRMED SELECTION DATA
                  </span>
                </div>
                
                <h3 className="h3-proposal text-3xl font-serif text-slate-100">
                  {chosenPkg?.name} Tier Plan
                </h3>

                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  You have confirmed your digital trajectory. We have logged this choice and are preparing the required onboarding details.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-800 text-left">
                  <div>
                    <span className="text-[10px] text-slate-500 font-mono block uppercase">Agreed Investment</span>
                    <span className="font-serif text-2xl text-slate-200 mt-1 block">
                      ₹{agreedPrice?.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-mono block uppercase">Engagement Duration</span>
                    <span className="font-serif text-2xl text-slate-200 mt-1 block">
                      90 Days
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-mono block uppercase">Status</span>
                    <span className="font-serif text-2xl text-[#C5A880] mt-1 block uppercase">
                      Selected
                    </span>
                  </div>
                </div>

                <div className="pt-6 flex justify-start">
                  <Link
                    href={`/proposal/${clientSlug}/commercials`}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#C5A880] hover:bg-[#D8B992] text-slate-950 px-8 py-4 text-xs font-mono font-bold transition-all cursor-pointer"
                  >
                    <span>Proceed to Agreement & Payment Flow</span>
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            ) : (
              // Case 2: No package has been selected yet
              <div className="p-8 sm:p-12 rounded-3xl bg-[#0D1322] border border-[#1E2638] text-center space-y-6">
                <span className="font-mono text-xs uppercase tracking-widest text-[#C5A880] font-bold block">
                  COMMERCIAL PROPOSAL OVERVIEW
                </span>
                
                <h3 className="h3-proposal text-2xl font-serif text-slate-100">
                  Tailored Execution Options Available
                </h3>

                <p className="text-sm text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
                  We have prepared three execution scopes (Foundation, Growth, and Scale) tailored to how much of the outreach and lead filtering operations you want us to execute on your behalf.
                </p>

                {/* Quick pricing summary cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-left">
                  <div className="p-5 rounded-xl bg-[#070B14] border border-[#1E2638]">
                    <span className="text-[10px] text-slate-500 font-mono block uppercase">FOUNDATION</span>
                    <span className="font-serif text-xl text-slate-200 mt-1 block">₹69,000</span>
                    <span className="text-[10px] text-[#C5A880] font-mono mt-1 block">90-day engagement</span>
                  </div>
                  <div className="p-5 rounded-xl bg-[#070B14] border border-[#C5A880]/30 shadow-md">
                    <span className="text-[10px] text-[#C5A880] font-mono block uppercase font-bold">GROWTH (REC.)</span>
                    <span className="font-serif text-xl text-slate-200 mt-1 block">₹1,45,000</span>
                    <span className="text-[10px] text-[#C5A880] font-mono mt-1 block">90-day engagement</span>
                  </div>
                  <div className="p-5 rounded-xl bg-[#070B14] border border-[#1E2638]">
                    <span className="text-[10px] text-slate-500 font-mono block uppercase">SCALE</span>
                    <span className="font-serif text-xl text-slate-200 mt-1 block">₹2,25,000</span>
                    <span className="text-[10px] text-[#C5A880] font-mono mt-1 block">90-day engagement</span>
                  </div>
                </div>

                <div className="pt-6 flex justify-center">
                  <Link
                    href={`/proposal/${clientSlug}/commercials`}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#C5A880] hover:bg-[#D8B992] text-slate-950 px-8 py-4 text-xs font-mono font-bold transition-all"
                  >
                    <span>View Pricing Details & Choose Option</span>
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>


        {/* ==========================================
            Section 11: NEXT STEP & FAQs
            ========================================== */}
        <section ref={nextStepsRef} id="next-steps" className="relative scroll-mt-24 text-left">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C5A880]/5 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="relative z-10 max-w-5xl mx-auto space-y-16">
            
            {/* Step flow */}
            <div className="bg-[#0C1225]/40 border border-slate-800 rounded-3xl p-8 md:p-12 text-center space-y-8">
              <span className="proposal-eyebrow text-xs tracking-widest text-[#C5A880] font-bold uppercase block">
                WHAT HAPPENS AFTER YOU CONFIRM?
              </span>
              <h2 className="h2-proposal text-slate-100 leading-tight">
                Your Next Onboarding Steps
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 text-left pt-6">
                {[
                  { step: "01", title: "Confirm Selection", desc: "Choose your package tier on the Commercials page." },
                  { step: "02", title: "Complete Forms", desc: "Provide basic business details via discovery link." },
                  { step: "03", title: "Strategy Session", desc: "Attend a 1-on-1 positioning call to align calendar themes." },
                  { step: "04", title: "Week 1 Setup", desc: "Discovery parameters are agreed and setup begins." }
                ].map((item, idx) => (
                  <div key={idx} className="p-5 rounded-xl bg-[#080C16] border border-slate-800/80">
                    <span className="font-mono text-xs font-bold text-[#C5A880] block mb-2">STEP {item.step}</span>
                    <h4 className="font-semibold text-sm text-slate-200 mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-400 font-light leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs Accordion */}
            <div className="space-y-6">
              <div className="text-center">
                <span className="proposal-eyebrow text-xs tracking-widest text-[#C5A880] font-bold block mb-2">
                  QUESTIONS & RESPONSES
                </span>
                <h2 className="h2-proposal text-slate-200">
                  Objection Handling & FAQs
                </h2>
              </div>

              <div className="max-w-4xl mx-auto space-y-3">
                {faqs.map((faq, idx) => (
                  <div 
                    key={idx}
                    className="border border-[#1E2544] rounded-xl overflow-hidden bg-[#0C1225]/20"
                  >
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                      className="w-full text-left p-5 flex items-center justify-between gap-4 group cursor-pointer"
                    >
                      <span className="font-sans text-sm font-semibold text-slate-200 group-hover:text-[#C5A880] transition-colors">
                        {faq.q}
                      </span>
                      {expandedFaq === idx ? (
                        <Minus className="size-4 text-[#C5A880] shrink-0" />
                      ) : (
                        <Plus className="size-4 text-slate-500 group-hover:text-slate-350 shrink-0" />
                      )}
                    </button>

                    <AnimatePresence initial={false}>
                      {expandedFaq === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="px-5 pb-5 pt-1 border-t border-[#1E2544]/60"
                        >
                          <p className="text-xs text-slate-400 font-light leading-relaxed">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            {/* Final CTA Card */}
            <div className="bg-[#0D1322] border border-[#C5A880]/30 rounded-3xl p-8 md:p-16 text-center space-y-6">
              <h2 className="font-serif text-3xl sm:text-4xl text-slate-100 font-normal leading-tight">
                Your experience already has value.<br />
                Now build the digital system around it.
              </h2>
              
              <p className="text-xs text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
                Choose the digital execution scope that matches your goals and begin week 1 Discovery.
              </p>

              <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href={`/proposal/${clientSlug}/commercials`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#C5A880] hover:bg-[#D8B992] text-slate-950 px-8 py-4 text-xs font-mono font-bold transition-all shadow-lg cursor-pointer"
                >
                  <span>Start the 90-Day Engagement</span>
                  <ArrowRight className="size-4" />
                </Link>

                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl border border-slate-700 bg-slate-900/50 hover:bg-slate-900 text-slate-200 px-8 py-4 text-xs font-mono font-bold transition-all cursor-pointer"
                >
                  <span>Review the Plan Again</span>
                  <ArrowUp className="size-4" />
                </button>
              </div>
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
            className="fixed bottom-8 right-8 z-50 size-11 bg-slate-900 border border-slate-700 hover:border-[#C5A880]/80 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-200 transition-all shadow-md active:scale-95 cursor-pointer"
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
