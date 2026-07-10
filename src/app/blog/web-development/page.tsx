"use client";

import React, { useState } from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";

export default function WebDevelopmentCategoryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSubTab, setActiveSubTab] = useState("All");

  const subTabs = [
    "All",
    "HTML & CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Backend",
    "CMS",
    "Performance",
    "UI/UX",
    "Tools"
  ];

  const highlights = [
    { label: "180+ Articles", icon: "📄" },
    { label: "35K+ Developers", icon: "👥" },
    { label: "Weekly New Articles", icon: "📅" },
    { label: "Expert Contributors", icon: "💻" },
  ];

  const posts = [
    {
      title: "Modern HTML & CSS Best Practices for 2024",
      category: "HTML & CSS",
      desc: "Write clean, semantic, and maintainable code that scales with your projects.",
      date: "May 16, 2024",
      readTime: "8 min read",
      author: "Rohit Sharma",
      featured: true,
    },
    {
      title: "Next.js 14 Features You Should Know in 2024",
      category: "Next.js",
      desc: "Explore the latest features and improvements in Next.js 14 and how to use them.",
      date: "May 13, 2024",
      readTime: "10 min read",
      author: "Neha Verma",
    },
    {
      title: "React Performance Optimization: Tips and Techniques",
      category: "React",
      desc: "Make your React apps faster with these proven performance optimization strategies.",
      date: "May 9, 2024",
      readTime: "7 min read",
      author: "Amit Patel",
    },
    {
      title: "10 JavaScript Tips That Will Make You a Better Developer",
      category: "JavaScript",
      desc: "Improve your JavaScript skills with these simple yet powerful tips.",
      date: "May 7, 2024",
      readTime: "6 min read",
      author: "Karan Mehta",
    },
    {
      title: "Responsive Web Design: Build Once, Fit Everywhere",
      category: "UI/UX",
      desc: "Learn how to create responsive layouts that provide the best experience on any device.",
      date: "May 4, 2024",
      readTime: "9 min read",
      author: "Priya Singh",
    },
    {
      title: "Tailwind CSS Tips & Tricks to Speed Up Your Workflow",
      category: "Tools",
      desc: "Boost your productivity with these Tailwind CSS tips and tricks.",
      date: "May 1, 2024",
      readTime: "6 min read",
      author: "Sneha Iyer",
    }
  ];

  const popularArticles = [
    { title: "Modern HTML & CSS Best Practices for 2024", date: "May 16, 2024" },
    { title: "Next.js 14 Features You Should Know in 2024", date: "May 13, 2024" },
    { title: "React Performance Optimization: Tips and Techniques", date: "May 9, 2024" },
    { title: "10 JavaScript Tips That Will Make You a Better Developer", date: "May 7, 2024" },
    { title: "Tailwind CSS Tips & Tricks to Speed Up Your Workflow", date: "May 1, 2024" }
  ];

  const tags = [
    "HTML", "CSS", "JavaScript", "React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "Bootstrap", "API", "UI/UX", "Web Performance", "SEO"
  ];

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeSubTab === "All" || post.category === activeSubTab;
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
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span>&gt;</span>
            <span className="text-text-base">Web Development</span>
          </nav>

          {/* Hero */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <span className="font-mono text-[9px] uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 px-2.5 py-0.5 rounded-full mb-4">
                BLOG CATEGORY
              </span>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-base leading-[1.08] mb-6">
                Web Development
              </h1>
              <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl mb-8">
                Tips, tutorials, and industry insights to help you build fast, responsive, and modern websites and web applications.
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
              <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-[24px] overflow-hidden border border-border-custom bg-neutral-900 shadow-2xl p-6 flex flex-col justify-between text-white/95">
                <div className="flex flex-col gap-3 font-mono text-[9px] text-white/60">
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span>Frontend Architecture</span><span className="text-primary font-bold">React & Next.js</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span>Styling & UX</span><span className="text-primary font-bold">Tailwind & Semantic CSS</span>
                  </div>
                </div>
                <div className="bg-white/5 border border-white/5 p-3 rounded-xl flex justify-between items-center text-[10px] mt-4">
                  <div className="flex flex-col text-left">
                    <span className="text-white/40 uppercase tracking-widest font-mono">Modern Frameworks</span>
                    <span className="font-bold font-serif text-white mt-1">Next.js 14 Active</span>
                  </div>
                  <span className="text-lg">💻</span>
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
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left w-full">
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
                      <span className="text-text-muted">By {post.author} • {post.date}</span>
                      <Link href="/blog" className="inline-flex items-center gap-1 font-bold text-primary hover:underline">
                        <span>Read More</span>
                        <ArrowRight className="size-3.5" />
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-2 text-center py-12 border border-dashed border-border-custom rounded-2xl w-full">
                  <p className="text-xs text-text-muted font-mono">No matching articles found.</p>
                </div>
              )}
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4 flex flex-col gap-6 text-left w-full">
              
              {/* About Category */}
              <div className="hog-card rounded-3xl p-6 md:p-8 bg-[#0B0F19] text-white border border-border-custom flex flex-col gap-4">
                <h3 className="font-serif text-sm font-bold border-b border-white/10 pb-2">
                  About This Category
                </h3>
                <p className="text-[10px] text-white/70 leading-relaxed">
                  Web development is constantly evolving. Stay updated with the latest trends, tools, frameworks, and best practices to build better and faster web experiences.
                </p>
                <Link href="/services/website-development" className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-primary hover:underline">
                  <span>Explore Our Web Development Services</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>

              {/* Popular Articles */}
              <div className="hog-card rounded-3xl p-6 md:p-8 bg-card-bg/60 border border-border-custom flex flex-col gap-6">
                <h3 className="font-serif text-sm font-bold text-text-base border-b border-border-custom pb-2">
                  Popular Articles
                </h3>
                <div className="space-y-4">
                  {popularArticles.map((p, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="size-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px] font-mono font-bold shrink-0">
                        {idx + 1}
                      </span>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-serif font-bold text-text-base leading-snug">
                          {p.title}
                        </span>
                        <span className="text-[9px] font-mono text-text-muted mt-1">{p.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="hog-card rounded-3xl p-6 md:p-8 bg-card-bg/60 border border-border-custom flex flex-col gap-4">
                <h3 className="font-serif text-sm font-bold text-text-base border-b border-border-custom pb-2">
                  Subscribe to Our Newsletter
                </h3>
                <p className="text-[10px] text-text-muted leading-relaxed">
                  Get the latest web development articles and resources straight to your inbox.
                </p>
                <div className="flex flex-col gap-2 w-full mt-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-3 py-2.5 rounded-xl border border-border-custom bg-white dark:bg-card-bg/60 text-xs text-text-base focus:outline-none focus:border-primary shadow-sm w-full"
                  />
                  <button className="w-full py-2.5 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs font-mono font-bold shadow-sm transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Tags */}
              <div className="hog-card rounded-3xl p-6 md:p-8 bg-card-bg/60 border border-border-custom flex flex-col gap-4">
                <h3 className="font-serif text-sm font-bold text-text-base border-b border-border-custom pb-2">
                  Top Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className="text-[9px] font-mono text-text-muted border border-border-custom/50 px-2.5 py-1 rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </section>

        </main>
      </div>
    </PageTransition>
  );
}
