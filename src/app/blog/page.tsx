"use client";

import React, { useState } from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { Search, Calendar, Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("All Articles");

  const categories = [
    "All Articles",
    "Web Development",
    "AI & Machine Learning",
    "Business & Growth",
    "Design & UX",
    "Tech Stack",
    "News & Updates",
  ];

  const popularPosts = [
    { title: "How AI is Transforming Businesses in 2025", date: "May 8, 2025", slug: "ai-solutions" },
    { title: "Next.js 14: What's New and Why It Matters", date: "Apr 28, 2025", slug: "web-development" },
    { title: "10 UI/UX Design Trends to Watch in 2025", date: "Apr 18, 2025", slug: "ui-ux-design" },
    { title: "Cloud vs. On-Premise: Which is Right for You?", date: "Apr 10, 2025", slug: "cloud-solutions" },
    { title: "Web Security Best Practices Every Business Should Know", date: "Apr 2, 2025", slug: "security-best-practices" },
  ];

  const topics = [
    "All",
    "Web Development",
    "AI & ML",
    "Business",
    "Design & UX",
    "Tech Stack",
    "News",
    "Career",
  ];

  const categoryMapping: { [key: string]: string } = {
    "Web Development": "Web Development",
    "AI & Machine Learning": "AI Solutions",
    "Business & Growth": "Custom Software",
    "Design & UX": "UI/UX Design",
    "Tech Stack": "Cloud Solutions",
    "News & Updates": "News & Updates",
  };

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const mappedCategory = categoryMapping[activeTab];
    const matchesTab = activeTab === "All Articles" || post.category === mappedCategory;
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
            <span className="text-text-base">Blog</span>
          </nav>

          {/* Hero */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <span className="font-mono text-[9px] uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 px-2.5 py-0.5 rounded-full mb-4">
                OUR BLOG
              </span>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-base leading-[1.08] mb-6">
                Insights. Ideas. <br />
                <span className="text-primary underline decoration-primary/40 decoration-4 underline-offset-8">
                  Impact.
                </span>
              </h1>
              <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl mb-8">
                Explore our latest articles on web development, AI, technology, business growth, and digital transformation.
              </p>

              {/* Search Bar */}
              <div className="flex gap-2 w-full max-w-md">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-text-muted" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-border-custom bg-white dark:bg-card-bg/60 text-xs text-text-base focus:outline-none focus:border-primary shadow-sm"
                  />
                </div>
                <button className="px-5 py-3 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-mono font-bold hover:opacity-90 transition-opacity">
                  Search
                </button>
              </div>
            </div>

            {/* Right: Mockup */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center p-8 select-none">
                <div className="w-full h-[85%] rounded-2xl bg-[#0B0F19] border-2 border-white/10 shadow-2xl p-6 flex flex-col justify-center text-left text-white/90">
                  <span className="text-xs font-mono text-white/40 uppercase tracking-widest border-b border-white/5 pb-2 mb-4">Blog Mockup View</span>
                  <div className="h-28 w-full bg-white/5 border border-white/5 rounded-xl p-3 flex flex-col justify-center gap-1.5 text-white/60 text-[10px] font-mono">
                    <div className="h-3 w-16 bg-primary/25 rounded" />
                    <div className="h-4 w-4/5 bg-white/10 rounded mt-1" />
                    <div className="h-3 w-3/5 bg-white/5 rounded" />
                  </div>
                </div>
              </div>
            </div>

          </section>

          {/* Filter Categories Tabs */}
          <div className="flex flex-wrap gap-2 justify-center py-4 border-t border-border-custom/20 pt-8">
            {categories.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all border ${
                  activeTab === tab
                    ? "bg-neutral-900 border-neutral-900 text-white dark:bg-white dark:border-white dark:text-neutral-950 shadow-sm"
                    : "bg-white border-border-custom text-text-muted hover:text-text-base dark:bg-card-bg/40"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Split Content & Sidebar */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start py-8">
            
            {/* Left Post Grid List */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left w-full">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <div
                    key={post.slug}
                    className="hog-card rounded-3xl p-6 border border-border-custom bg-card-bg/40 flex flex-col justify-between h-full group"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-[9px] font-mono font-bold text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded">
                          {post.category}
                        </span>
                        <span className="text-[9px] font-mono text-text-muted">{post.readTime}</span>
                      </div>
                      <h4 className="font-serif text-sm md:text-base font-bold text-text-base leading-snug mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-[10px] md:text-xs text-text-muted leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-border-custom/30 pt-4 mt-4 text-[10px] font-mono">
                      <span className="text-text-muted">{post.date}</span>
                      <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-1 font-bold text-primary hover:underline">
                        <span>Read More</span>
                        <ArrowRight className="size-3.5" />
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-2 text-center py-12 border border-dashed border-border-custom rounded-2xl">
                  <p className="text-xs text-text-muted font-mono">No matching articles found.</p>
                </div>
              )}
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4 flex flex-col gap-8 text-left w-full">
              
              {/* Popular Posts */}
              <div className="hog-card rounded-3xl p-6 md:p-8 bg-card-bg/60 border border-border-custom flex flex-col gap-6">
                <h3 className="font-serif text-base font-bold text-text-base border-b border-border-custom pb-2">
                  Popular Posts
                </h3>

                <div className="space-y-4">
                  {popularPosts.map((p, idx) => (
                    <Link
                      key={idx}
                      href={`/blog/${p.slug}`}
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

              {/* Topics Tag List */}
              <div className="hog-card rounded-3xl p-6 md:p-8 bg-card-bg/60 border border-border-custom flex flex-col gap-4">
                <h3 className="font-serif text-base font-bold text-text-base border-b border-border-custom pb-2">
                  Topics
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {topics.map((t) => (
                    <button
                      key={t}
                      onClick={() => setActiveTab(t === "All" ? "All Articles" : (categoryMapping[t] ? t : "All Articles"))}
                      className="text-[9px] font-mono text-text-base bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-850 dark:hover:bg-neutral-800 px-2 py-1 rounded"
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </section>

          {/* Newsletter subscription banner */}
          <section className="border border-border-custom bg-card-bg/40 rounded-3xl p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-left">
            <div>
              <h4 className="font-serif text-sm md:text-base font-bold text-text-base mb-1">Get the latest insights delivered to your inbox</h4>
              <p className="text-[10px] md:text-xs text-text-muted">Join 500+ professionals who get our latest articles, tips, and industry updates. No spam. Unsubscribe anytime.</p>
            </div>
            
            <div className="flex gap-2 shrink-0 w-full sm:w-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-4 py-3 rounded-xl border border-border-custom bg-white dark:bg-card-bg/60 text-xs text-text-base focus:outline-none focus:border-primary shadow-sm flex-1 sm:w-60"
              />
              <button className="px-5 py-3 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs font-mono font-bold shadow-sm transition-colors">
                Subscribe
              </button>
            </div>
          </section>

        </main>
      </div>
    </PageTransition>
  );
}
