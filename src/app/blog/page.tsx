"use client";

import React, { useState } from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { name: "All Articles", href: "/blog", active: true },
    { name: "Artificial Intelligence", href: "/blog/artificial-intelligence" },
    { name: "Software Development", href: "/blog/software-development" },
    { name: "Web Development", href: "/blog/web-development" },
    { name: "Startup Guides", href: "/blog/startup-guides" },
    { name: "Automation", href: "/blog/automation" },
    { name: "Cloud", href: "/blog/cloud" },
    { name: "UI/UX", href: "/blog/ui-ux" },
    { name: "Case Studies", href: "/blog/case-studies" },
    { name: "Company Updates", href: "/blog/company-updates" },
  ];

  const popularPosts = [
    { title: "AI Solutions: How Generative AI & LLMs are Transforming Small Business Operations", date: "July 7, 2026", slug: "ai-solutions" },
    { title: "Building Modern High-Performance Web Applications using Next.js & React", date: "July 5, 2026", slug: "web-development" },
    { title: "Why Startups & Businesses Need Custom Software Over Off-the-Shelf Templates", date: "July 6, 2026", slug: "custom-software" },
    { title: "Mobile App Development: Creating Highly Scalable Cross-Platform Apps", date: "July 4, 2026", slug: "mobile-apps" },
    { title: "Business Process Automation: Eliminating Manual Overhead & Spreadsheet Errors", date: "July 3, 2026", slug: "business-automation" },
  ];

  const topics = [
    { name: "Artificial Intelligence", href: "/blog/artificial-intelligence" },
    { name: "Software Development", href: "/blog/software-development" },
    { name: "Web Development", href: "/blog/web-development" },
    { name: "Startup Guides", href: "/blog/startup-guides" },
    { name: "Automation", href: "/blog/automation" },
    { name: "Cloud", href: "/blog/cloud" },
    { name: "UI/UX", href: "/blog/ui-ux" },
    { name: "Case Studies", href: "/blog/case-studies" },
    { name: "Company Updates", href: "/blog/company-updates" },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
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
                  <span className="text-xs font-mono text-white/40 uppercase tracking-widest border-b border-white/5 pb-2 mb-4">Blog Categories</span>
                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-[10px] font-mono text-white/70">
                    <Link href="/blog/artificial-intelligence" className="hover:text-primary transition-colors">→ Artificial Intelligence</Link>
                    <Link href="/blog/software-development" className="hover:text-primary transition-colors">→ Software Development</Link>
                    <Link href="/blog/web-development" className="hover:text-primary transition-colors">→ Web Development</Link>
                    <Link href="/blog/startup-guides" className="hover:text-primary transition-colors">→ Startup Guides</Link>
                    <Link href="/blog/automation" className="hover:text-primary transition-colors">→ Automation</Link>
                    <Link href="/blog/cloud" className="hover:text-primary transition-colors">→ Cloud</Link>
                    <Link href="/blog/ui-ux" className="hover:text-primary transition-colors">→ UI/UX</Link>
                    <Link href="/blog/case-studies" className="hover:text-primary transition-colors">→ Case Studies</Link>
                    <Link href="/blog/company-updates" className="hover:text-primary transition-colors">→ Company Updates</Link>
                  </div>
                </div>
              </div>
            </div>

          </section>

          {/* Filter Categories Tabs */}
          <div className="flex flex-wrap gap-2 justify-center py-4 border-t border-border-custom/20 pt-8">
            {categories.map((tab) => (
              <Link
                key={tab.name}
                href={tab.href}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all border ${
                  tab.active
                    ? "bg-neutral-900 border-neutral-900 text-white dark:bg-white dark:border-white dark:text-neutral-950 shadow-sm"
                    : "bg-white border-border-custom text-text-muted hover:text-text-base dark:bg-card-bg/40"
                }`}
              >
                {tab.name}
              </Link>
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
                  Categories
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {topics.map((t) => (
                    <Link
                      key={t.name}
                      href={t.href}
                      className="text-[9px] font-mono text-text-base bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-850 dark:hover:bg-neutral-800 px-2.5 py-1 rounded"
                    >
                      {t.name}
                    </Link>
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
