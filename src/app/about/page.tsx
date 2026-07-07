import React from "react";
import { coreValues, MISSION, VISION, USP } from "@/data/content";
import { Check, Code, Cpu, Award, GraduationCap, Server, Shield, Layers, MessageSquare, Terminal, Building2, Target, Globe, Languages, Users } from "lucide-react";
import PageTransition from "@/components/PageTransition";

export default function AboutPage() {
  const skillsList = [
    { category: "Artificial Intelligence", items: ["Generative AI", "Large Language Models (LLMs)", "Prompt Engineering", "RAG Systems", "AI Agents", "Computer Vision", "Natural Language Processing"] },
    { category: "Frontend Development", items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"] },
    { category: "Backend Development", items: ["Node.js", "Express.js", "FastAPI", "Python", "REST APIs", "JWT", "OAuth"] },
    { category: "Databases & Cloud", items: ["PostgreSQL", "MongoDB", "Firebase", "Supabase", "Redis", "Docker", "AWS", "GCP", "Vercel", "Netlify"] },
    { category: "Workflow Automation", items: ["n8n", "Make", "Zapier", "Google Workspace APIs", "WhatsApp Automation"] },
    { category: "AI APIs & Tools", items: ["Google Gemini", "OpenAI", "Anthropic Claude", "LangChain", "LlamaIndex", "Hugging Face"] }
  ];

  const certifications = [
    "Google AI & Machine Learning Fundamentals",
    "Google Cloud Fundamentals",
    "Introduction to Generative AI",
    "Git & GitHub",
    "Responsive Web Design",
    "JavaScript Algorithms",
    "Python Programming",
    "SQL & Database Fundamentals"
  ];

  const industries = [
    { name: "🤖 Artificial Intelligence", desc: "AI Apps, Generative AI, AI Agents, Machine Learning, Computer Vision, NLP" },
    { name: "💼 Business & Enterprise", desc: "Business Automation, CRM Systems, ERP Solutions, Dashboards, Workflows" },
    { name: "🏥 Healthcare", desc: "Healthcare Platforms, AI Symptom Checkers, Medical Dashboards, Appointments" },
    { name: "🎓 Education (EdTech)", desc: "School Websites, Learning Management Systems, Student Portals, Teacher Platforms" },
    { name: "🌾 Agriculture (AgriTech)", desc: "Farm Management, Crop Monitoring, AI Recommendations, Agri Dashboards" },
    { name: "🏛 Government & CivicTech", desc: "Digital Governance, Citizen Portals, Grievance Management Systems" },
    { name: "🛡 Cybersecurity", desc: "AI Scam Detection, Security Dashboards, Risk Monitoring, Auth Systems" },
    { name: "🛒 E-Commerce & Retail", desc: "Online Stores, Inventory Systems, Order Management, Payment Integration" },
    { name: "🏆 Sports Technology", desc: "Tournament Management, Player Registration, Team Communities" },
    { name: "🚀 SaaS & Startups", desc: "MVP Development, Multi-Tenant SaaS, Subscription Platforms" },
    { name: "📊 Finance & Productivity", desc: "Business Dashboards, Analytics Platforms, Reporting Tools, Productivity Apps" }
  ];

  const clientSizes = [
    { name: "👤 Individuals & Freelancers", desc: "Personal portfolios, landing pages, and digital presence." },
    { name: "🚀 Startups", desc: "MVP development, AI integration, SaaS platforms, and product engineering." },
    { name: "🏢 Small Businesses", desc: "Business websites, automation, CRM systems, and digital transformation." },
    { name: "🏬 Medium Enterprises", desc: "Custom software, internal tools, cloud migration, and scalable applications." },
    { name: "🏛 Large Enterprises", desc: "Enterprise software, AI solutions, cloud infrastructure, and ongoing partnerships." },
    { name: "🎓 Educational Institutions", desc: "Schools, colleges, universities, coaching institutes, and training organizations." },
    { name: "🏢 Government & NGOs", desc: "Digital public services, civic platforms, and social impact solutions." }
  ];

  const targetClients = [
    { name: "Startups", desc: "Early-stage founders, SaaS startups, AI startups, and product companies" },
    { name: "Businesses", desc: "Local businesses, service providers, manufacturing companies, and professional firms" },
    { name: "Educational Organizations", desc: "Schools, colleges, coaching institutes, and EdTech companies" },
    { name: "Healthcare Organizations", desc: "Clinics, hospitals, health startups, and medical professionals" },
    { name: "Technology Companies", desc: "SaaS providers, software companies, IT consultancies, and digital agencies" },
    { name: "Government & NGOs", desc: "Public sector organizations, civic technology initiatives, and NGO programs" }
  ];

  const regions = [
    { name: "🇮🇳 India", desc: "Primary market with support for startups, businesses, education, and enterprises." },
    { name: "🌏 Asia-Pacific", desc: "Supporting businesses and organizations across the APAC region." },
    { name: "🌍 Europe", desc: "Remote software development and AI consulting for European clients." },
    { name: "🌎 North America", desc: "Technology partnerships with startups and businesses in the US and Canada." },
    { name: "🌍 Middle East", desc: "Custom software, AI, and automation solutions for organizations across the GCC." },
    { name: "🌍 Worldwide", desc: "Remote-first delivery for clients around the globe." }
  ];

  return (
    <PageTransition>
      <div className="hog-grid min-h-screen pb-20 pt-10">
        <main className="max-w-5xl mx-auto px-6 flex flex-col gap-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-mono text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3 py-1 rounded-full mb-4 inline-block">
            About Us
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-text-base mb-4 mt-2">
            Company & Founder
          </h1>
          <p className="text-sm md:text-base text-text-muted">
            Empowering businesses by automating operations, designing modern software, and deploying AI solutions.
          </p>
        </div>

        {/* Brand Overview & Business Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="hog-card rounded-2xl p-6 flex flex-col gap-2">
            <Building2 className="size-6 text-primary" />
            <h4 className="font-serif font-bold text-text-base text-base">Company Information</h4>
            <p className="text-xs text-text-muted leading-relaxed">
              <strong>Founded:</strong> 2026<br />
              <strong>Type:</strong> AI & Software Development Agency<br />
              <strong>HQ:</strong> New Delhi, India (Remote-First)
            </p>
          </div>
          <div className="hog-card rounded-2xl p-6 flex flex-col gap-2">
            <Target className="size-6 text-primary" />
            <h4 className="font-serif font-bold text-text-base text-base">Engagement Models</h4>
            <p className="text-xs text-text-muted leading-relaxed">
              • Fixed-Price Projects<br />
              • Milestone-Based Development<br />
              • Monthly Retainer Agreements<br />
              • Technical Consulting Partnerships
            </p>
          </div>
          <div className="hog-card rounded-2xl p-6 flex flex-col gap-2">
            <Languages className="size-6 text-primary" />
            <h4 className="font-serif font-bold text-text-base text-base">Languages & Localization</h4>
            <p className="text-xs text-text-muted leading-relaxed">
              <strong>Communication:</strong> English, Hindi<br />
              <strong>Localization:</strong> Multilingual support (English, Hindi, Spanish, French, German, Arabic, Japanese, Chinese, etc.)
            </p>
          </div>
        </div>

        {/* Founder Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Profile Card left */}
          <div className="lg:col-span-1 hog-card rounded-[32px] p-8 flex flex-col items-center text-center">
            <div className="size-28 rounded-full overflow-hidden mb-6 border-2 border-border-custom shadow-md">
              <img
                src="/jayant.jpg"
                alt="Jayant Olhyan - Founder of Jayant Web & AI Systems"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="font-serif text-2xl font-bold text-text-base mb-1">Jayant Olhyan</h2>
            <p className="font-mono text-xs text-primary font-bold mb-4">Founder & AI Engineer</p>
            <p className="text-xs text-text-muted mb-6 italic">
              "Building intelligent software that transforms ideas into impactful digital solutions through AI, automation, and modern engineering."
            </p>
            <div className="flex flex-wrap justify-center gap-1.5 border-t border-border-custom/50 pt-4 w-full">
              <span className="text-[9px] font-mono text-text-muted bg-neutral-100 dark:bg-neutral-900 border border-border-custom/20 px-2 py-0.5 rounded">🚀 AI Enthusiast</span>
              <span className="text-[9px] font-mono text-text-muted bg-neutral-100 dark:bg-neutral-900 border border-border-custom/20 px-2 py-0.5 rounded">💻 Full-Stack</span>
              <span className="text-[9px] font-mono text-text-muted bg-neutral-100 dark:bg-neutral-900 border border-border-custom/20 px-2 py-0.5 rounded">⚡ Automation</span>
            </div>
          </div>

          {/* Profile Timeline right */}
          <div className="lg:col-span-2 hog-card rounded-[32px] p-8 flex flex-col gap-6 text-left">
            <div>
              <h3 className="font-serif text-2xl font-bold text-text-base mb-3">Professional Bio</h3>
              <p className="text-xs md:text-sm text-text-muted leading-relaxed mb-4">
                Jayant Olhyan is a software developer, AI engineer, and entrepreneur. He is the Founder of Jayant Web & AI Systems, an AI-first software development company focused on building intelligent digital products that solve real-world problems. He specializes in Artificial Intelligence, full-stack web development, workflow automation, and scalable cloud solutions.
              </p>
              <p className="text-xs md:text-sm text-text-muted leading-relaxed">
                Driven by a passion for innovation, Jayant has developed projects across healthcare, education, cybersecurity, agriculture, civic technology, and public safety. His work combines modern AI models with practical software engineering to create products that improve efficiency, automate workflows, and deliver measurable business value.
              </p>
            </div>

            {/* Certifications and achievements list */}
            <div>
              <h4 className="font-serif text-lg font-bold text-text-base mb-3 flex items-center gap-2">
                <Award className="size-5 text-primary" /> Key Certifications
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {certifications.map((cert) => (
                  <div key={cert} className="flex items-center gap-2 text-xs text-text-muted font-mono">
                    <span className="size-1.5 rounded-full bg-primary shrink-0" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Presentation of hackathons presentation bio note */}
        <div className="hog-card rounded-2xl p-6 text-left">
          <span className="font-mono text-xs text-primary font-bold block mb-1">Presented Technical Events</span>
          <p className="text-xs text-text-muted leading-relaxed">
            Jayant has actively presented technical projects and solutions at technical events and participated in hackathons hosted by IITs and leading universities.
          </p>
        </div>

        {/* Industries Served */}
        <div>
          <div className="text-center mb-8 max-w-xl mx-auto">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-text-base mb-2">Industries We Serve</h3>
            <p className="text-xs text-text-muted">Deploying customized systems engineered for industry-specific bottlenecks.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((ind) => (
              <div key={ind.name} className="border border-border-custom/40 p-5 rounded-2xl bg-background-base/60 flex flex-col gap-2">
                <h4 className="font-serif font-bold text-text-base text-sm">{ind.name}</h4>
                <p className="text-[11px] text-text-muted leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Business Sizes & Target Clients */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="hog-card rounded-[32px] p-8">
            <h3 className="font-serif text-2xl font-bold text-text-base mb-6 flex items-center gap-2">
              <Users className="size-5 text-primary" /> Business Scale
            </h3>
            <div className="space-y-4">
              {clientSizes.map((size) => (
                <div key={size.name} className="border-b border-border-custom/20 pb-3 last:border-0 last:pb-0">
                  <h4 className="font-serif font-bold text-text-base text-sm mb-1">{size.name}</h4>
                  <p className="text-xs text-text-muted leading-relaxed">{size.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hog-card rounded-[32px] p-8">
            <h3 className="font-serif text-2xl font-bold text-text-base mb-6 flex items-center gap-2">
              <Target className="size-5 text-primary" /> Target Clients
            </h3>
            <div className="space-y-4">
              {targetClients.map((client) => (
                <div key={client.name} className="border-b border-border-custom/20 pb-3 last:border-0 last:pb-0">
                  <h4 className="font-serif font-bold text-text-base text-sm mb-1">{client.name}</h4>
                  <p className="text-xs text-text-muted leading-relaxed">{client.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Regions Served */}
        <div className="hog-card rounded-[32px] p-8">
          <h3 className="font-serif text-2xl font-bold text-text-base mb-6 flex items-center gap-2">
            <Globe className="size-5 text-primary" /> Regions We Serve
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {regions.map((reg) => (
              <div key={reg.name} className="border border-border-custom/30 p-4 rounded-xl bg-background-base">
                <h4 className="font-serif font-bold text-text-base text-sm mb-1">{reg.name}</h4>
                <p className="text-[11px] text-text-muted leading-relaxed">{reg.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Board Grid */}
        <div className="hog-card rounded-[32px] p-8">
          <h3 className="font-serif text-2xl font-bold text-text-base mb-8 text-center flex items-center justify-center gap-2">
            <Layers className="size-6 text-primary" /> Skills Blueprint
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsList.map((skillGroup) => (
              <div key={skillGroup.category} className="border border-border-custom/40 p-5 rounded-2xl bg-background-base/60">
                <h4 className="font-mono text-xs text-primary uppercase font-bold border-b border-border-custom/30 pb-2 mb-3">
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {skillGroup.items.map((item) => (
                    <span
                      key={item}
                      className="text-[10px] font-mono text-text-muted bg-white/5 border border-border-custom px-2 py-0.5 rounded-md"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="hog-card rounded-[28px] p-8 flex flex-col gap-4">
            <span className="font-mono text-xs tracking-widest uppercase text-primary">Our Mission</span>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-text-base">{MISSION}</h3>
            <p className="text-xs md:text-sm text-text-muted leading-relaxed">
              We aim to empower small and medium enterprises in India by integrating intelligent automations into their operational workflows.
            </p>
          </div>

          <div className="hog-card rounded-[28px] p-8 flex flex-col gap-4">
            <span className="font-mono text-xs tracking-widest uppercase text-primary">Our Vision</span>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-text-base">{VISION}</h3>
            <p className="text-xs md:text-sm text-text-muted leading-relaxed">
              Becoming the standard of trust, quality, and quick turnaround execution for AI agent deployment and modern Web development.
            </p>
          </div>
        </div>

        {/* Core USP */}
        <div className="hog-card rounded-[28px] p-8 md:p-12 text-center max-w-3xl mx-auto w-full">
          <span className="font-mono text-xs tracking-widest uppercase text-primary mb-2 block">Our Core USP</span>
          <p className="font-serif text-xl md:text-2xl font-semibold text-text-base">
            &ldquo;{USP}&rdquo;
          </p>
        </div>

        {/* Core Values Section */}
        <div>
          <h2 className="font-serif text-3xl font-bold text-text-base text-center mb-10">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {coreValues.map((val) => (
              <div key={val.name} className="hog-card rounded-2xl p-6 flex flex-col gap-2">
                <h4 className="font-bold text-text-base flex items-center gap-2">
                  <Check className="size-4 text-primary" /> {val.name}
                </h4>
                <p className="text-xs md:text-sm text-text-muted">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  </PageTransition>
  );
}
