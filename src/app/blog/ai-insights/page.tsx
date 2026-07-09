"use client";

import React, { useState } from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { Search, ArrowRight, Brain, Cpu, Database, Network } from "lucide-react";

export default function AIInsightsCategoryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSubTab, setActiveSubTab] = useState("AI Insights");

  const subTabs = [
    "All Posts",
    "AI Insights",
    "Machine Learning",
    "Generative AI",
    "Data Science",
    "AI in Business",
    "Automation",
  ];

  const highlights = [
    { label: "Expert Perspectives", icon: "👨‍🔬" },
    { label: "Real-World Applications", icon: "🌐" },
    { label: "Latest AI Trends", icon: "📈" },
    { label: "Actionable Insights", icon: "💡" },
  ];

  const posts = [
    {
      title: "The Future of AI: Key Trends Shaping 2025 and Beyond",
      category: "AI Insights",
      desc: "Explore the top AI trends set to transform industries, from autonomous agents to multimodal models.",
      date: "May 10, 2025",
      readTime: "6 min read",
      avatar: "🤖",
    },
    {
      title: "How Generative AI is Revolutionizing Businesses",
      category: "AI Insights",
      desc: "From content creation to process automation, see how generative AI is driving productivity and innovation.",
      date: "Apr 28, 2025",
      readTime: "7 min read",
      avatar: "🧠",
    },
    {
      title: "Building Responsible AI: Ethics, Bias & Best Practices",
      category: "AI Insights",
      desc: "Understand the importance of ethics in AI and how to build fair, transparent, and trustworthy systems.",
      date: "Apr 15, 2025",
      readTime: "5 min read",
      avatar: "⚖️",
    },
  ];

  const popularInAi = [
    { title: "Top 10 AI Tools Every Developer Should Know in 2025", date: "May 5, 2025", slug: "top-10-ai-tools" },
    { title: "Machine Learning vs Deep Learning: What's the Difference?", date: "Apr 30, 2025", slug: "ml-vs-dl" },
    { title: "How AI is Improving Customer Experience", date: "Apr 20, 2025", slug: "ai-customer-experience" },
  ];

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeSubTab === "All Posts" || activeSubTab === "AI Insights" || post.category === activeSubTab;
    return matchesSearch && matchesTab;
  });

  return (
    <PageTransition>
      <div className="hog-grid min-h-screen pb-20 pt-10 text-left">
        <main className="max-w-none px-6 md:px-12 lg:px-16 flex flex-col gap-20 md:gap-28">
          
          {/* Breadcrumbs */}
          <nav className="text-xs font-mono text-text-muted flex items-center gap-2 pt-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>&gt;</span>
            <span className="text-text-muted">Resources</span>
            <span>&gt;</span>
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span>&gt;</span>
            <span className="text-text-base">AI Insights</span>
          </nav>

          {/* Hero */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <span className="font-mono text-[9px] uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 px-2.5 py-0.5 rounded-full mb-4">
                BLOG CATEGORY
              </span>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-base leading-[1.08] mb-6">
                AI Insights
              </h1>
              <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl mb-8">
                Explore the latest trends, breakthroughs, and practical insights in Artificial Intelligence and how businesses can leverage AI to innovate, automate, and grow.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-border-custom/50 pt-6 w-full">
                {highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-lg leading-none shrink-0">{h.icon}</span>
                    <span className="text-[10px] font-mono font-bold text-text-base leading-tight">{h.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Graphic illustration */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-[16/9] rounded-[24px] overflow-hidden border border-border-custom bg-neutral-900 shadow-2xl p-6 flex flex-col justify-end text-white">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                <div className="z-20 text-left">
                  <h4 className="font-serif text-sm font-bold text-white">Neural Net Integration</h4>
                  <p className="text-[9px] font-mono text-white/50 mt-1 uppercase tracking-widest leading-none">AI solutions & cognitive systems</p>
                </div>
              </div>
            </div>

          </section>

          {/* Sub Navigation Bar & Search Bar Split */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-t border-border-custom/25 pt-8 py-4 w-full">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2">
              {subTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveSubTab(tab)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all border ${
                    activeSubTab === tab
                      ? "bg-neutral-900 border-neutral-900 text-white dark:bg-white dark:border-white dark:text-neutral-950 shadow-sm"
                      : "bg-white border-border-custom text-text-muted hover:text-text-base dark:bg-card-bg/40"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-72 shrink-0">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-text-muted" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-border-custom bg-white dark:bg-card-bg/60 text-xs text-text-base focus:outline-none focus:border-primary shadow-sm"
              />
            </div>
          </div>

          {/* Grid List & Sidebar */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start py-8">
            
            {/* Left Posts cards */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left w-full">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post, idx) => (
                  <div
                    key={idx}
                    className="hog-card rounded-3xl p-6 border border-border-custom bg-card-bg/40 flex flex-col justify-between h-full group"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-[9px] font-mono font-bold text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded">
                          {post.category}
                        </span>
                        <span className="text-[9px] font-mono text-text-muted">{post.readTime}</span>
                      </div>
                      <h4 className="font-serif text-xs md:text-sm font-bold text-text-base leading-snug mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-[10px] text-text-muted leading-relaxed mb-4">{post.desc}</p>
                    </div>

                    <div className="flex items-center justify-between border-t border-border-custom/30 pt-4 mt-4 text-[9px] font-mono">
                      <span className="text-text-muted">{post.date}</span>
                      <Link href="/blog" className="inline-flex items-center gap-1 font-bold text-primary hover:underline">
                        <span>Read More</span>
                        <ArrowRight className="size-3.5" />
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-3 text-center py-12 border border-dashed border-border-custom rounded-2xl">
                  <p className="text-xs text-text-muted font-mono">No matching articles found.</p>
                </div>
              )}
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4 flex flex-col gap-6 text-left w-full">
              
              {/* Popular in AI Insights */}
              <div className="hog-card rounded-3xl p-6 md:p-8 bg-card-bg/60 border border-border-custom flex flex-col gap-6">
                <h3 className="font-serif text-sm font-bold text-text-base border-b border-border-custom pb-2">
                  Popular in AI Insights
                </h3>

                <div className="space-y-4">
                  {popularInAi.map((p, idx) => (
                    <Link
                      key={idx}
                      href="/blog"
                      className="flex items-start gap-3 group"
                    >
                      <span className="size-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px] font-mono font-bold shrink-0">
                        {idx + 1}
                      </span>
                      <div className="flex flex-col">
                        <span className="text-[10px] md:text-xs font-serif font-bold text-text-base leading-snug group-hover:text-primary transition-colors">
                          {p.title}
                        </span>
                        <span className="text-[9px] font-mono text-text-muted mt-1">{p.date}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Stay Updated with AI Insights */}
              <div className="hog-card rounded-3xl p-6 md:p-8 bg-card-bg/60 border border-border-custom flex flex-col gap-4">
                <h3 className="font-serif text-sm font-bold text-text-base border-b border-border-custom pb-2">
                  Stay Updated with AI Insights
                </h3>
                <p className="text-[10px] text-text-muted leading-relaxed">
                  Get the latest AI articles, tools, and insights delivered to your inbox.
                </p>
                
                <div className="flex gap-2 w-full mt-2">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="px-3 py-2 rounded-lg border border-border-custom bg-white dark:bg-card-bg/60 text-[10px] text-text-base focus:outline-none focus:border-primary shadow-sm flex-1"
                  />
                  <button className="px-4 py-2 rounded-lg bg-primary hover:bg-primary-hover text-white text-[10px] font-mono font-bold shadow-sm transition-colors shrink-0">
                    Subscribe
                  </button>
                </div>
                <span className="text-[8px] font-mono text-text-muted">No spam. Unsubscribe anytime.</span>
              </div>

            </div>

          </section>

        </main>
      </div>
    </PageTransition>
  );
}
