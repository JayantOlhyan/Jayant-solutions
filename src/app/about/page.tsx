import React from "react";
import { coreValues, MISSION, VISION, USP } from "@/data/content";
import { Check, Code, Cpu, Award, GraduationCap, Server, Shield, Layers, MessageSquare, Terminal } from "lucide-react";

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

  return (
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
              <span className="text-[9px] font-mono text-text-muted bg-neutral-100 dark:bg-neutral-900 border border-border-custom/20 px-2 py-0.5 rounded">🤖 Hackathon Builder</span>
            </div>
          </div>

          {/* Founder Bios right */}
          <div className="lg:col-span-2 hog-card rounded-[32px] p-8 flex flex-col gap-6">
            <div>
              <h3 className="font-serif text-xl font-bold text-text-base mb-2">Short Bio</h3>
              <p className="text-xs md:text-sm text-text-muted leading-relaxed">
                Jayant Olhyan is the Founder of Jayant Web & AI Systems, an AI-first software development company focused on building intelligent digital products that solve real-world problems. He specializes in Artificial Intelligence, full-stack web development, workflow automation, and scalable cloud solutions.
              </p>
            </div>

            <div className="border-t border-border-custom/40 pt-4">
              <h3 className="font-serif text-xl font-bold text-text-base mb-2">Professional Bio</h3>
              <p className="text-xs md:text-sm text-text-muted leading-relaxed">
                Jayant Olhyan is a software developer, AI engineer, and entrepreneur dedicated to creating impactful technology solutions. As the founder of Jayant Web & AI Systems, he leads the development of AI-powered applications, SaaS platforms, automation systems, and custom software for startups, educational institutions, and businesses.
                <br /><br />
                His expertise spans the entire product lifecycle—from idea validation and UI/UX design to backend architecture, cloud deployment, and AI integration. Jayant enjoys solving complex engineering challenges using modern technologies such as Large Language Models (LLMs), computer vision, cloud infrastructure, and intelligent automation.
              </p>
            </div>
          </div>
        </div>

        {/* Experience & Education */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="hog-card rounded-[32px] p-8">
            <h3 className="font-serif text-2xl font-bold text-text-base mb-6 flex items-center gap-2">
              <Terminal className="size-6 text-primary" /> Experience
            </h3>
            <div className="space-y-6">
              <div className="border-l-2 border-primary pl-4 relative">
                <span className="absolute size-3 bg-primary rounded-full -left-[7px] top-1.5" />
                <h4 className="font-serif font-bold text-text-base text-sm md:text-base">Founder & AI Engineer</h4>
                <p className="text-xs text-text-muted font-mono">Jayant Web & AI Systems | July 2026 – Present</p>
                <ul className="mt-2 space-y-1 text-xs text-text-muted list-disc pl-4">
                  <li>Building AI-powered software solutions</li>
                  <li>Designing scalable web applications</li>
                  <li>Developing intelligent automation systems</li>
                  <li>Leading product architecture</li>
                  <li>Building SaaS platforms</li>
                  <li>Consulting startups on AI adoption</li>
                  <li>Deploying cloud infrastructure</li>
                </ul>
              </div>

              <div className="border-l-2 border-border-custom pl-4 relative">
                <span className="absolute size-3 bg-border-custom rounded-full -left-[7px] top-1.5" />
                <h4 className="font-serif font-bold text-text-base text-sm md:text-base">Freelance Software Developer</h4>
                <p className="text-xs text-text-muted font-mono">Operations & Systems Scoping</p>
                <ul className="mt-2 space-y-1 text-xs text-text-muted list-disc pl-4">
                  <li>Custom Website Development</li>
                  <li>AI Chatbot Development</li>
                  <li>Business Automation</li>
                  <li>API Integration</li>
                  <li>Dashboard Development</li>
                  <li>UI/UX Implementation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="hog-card rounded-[32px] p-8 flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl font-bold text-text-base mb-6 flex items-center gap-2">
                <GraduationCap className="size-6 text-primary" /> Education & Credentials
              </h3>
              <div className="border-l-2 border-primary pl-4 relative mb-6">
                <span className="absolute size-3 bg-primary rounded-full -left-[7px] top-1.5" />
                <h4 className="font-serif font-bold text-text-base text-sm md:text-base">Bachelor of Technology (B.Tech.)</h4>
                <p className="text-xs text-text-muted font-mono">Computer Science & Engineering</p>
                <p className="text-xs text-text-muted mt-1 leading-relaxed">
                  Maharaja Surajmal Institute of Technology (MSIT), New Delhi
                  <br />
                  <span className="font-mono text-[10px] text-primary">Expected Graduation: 2029</span>
                </p>
              </div>
            </div>

            <div className="border-t border-border-custom/50 pt-4">
              <h4 className="font-serif font-bold text-text-base text-sm mb-3">Key Certifications</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-text-muted">
                {certifications.map((cert) => (
                  <div key={cert} className="flex items-center gap-1.5">
                    <span className="text-primary">✓</span>
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>
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
  );
}
