"use client";

import React, { useState } from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";

export default function CloudCategoryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSubTab, setActiveSubTab] = useState("All");

  const subTabs = [
    "All",
    "AWS",
    "Microsoft Azure",
    "Google Cloud",
    "DevOps on Cloud",
    "Serverless",
    "Cloud Security",
    "Cost Optimization",
    "Best Practices"
  ];

  const highlights = [
    { label: "130+ Articles", icon: "📄" },
    { label: "25K+ Cloud Engineers", icon: "👥" },
    { label: "Weekly New Articles", icon: "📅" },
    { label: "Expert Contributors", icon: "☁️" },
  ];

  const posts = [
    {
      title: "AWS for Beginners: Your Complete Guide to Get Started",
      category: "AWS",
      desc: "A beginner-friendly roadmap to understand AWS core services and get hands-on.",
      date: "May 20, 2024",
      readTime: "10 min read",
      author: "Rohit Sharma",
      featured: true,
    },
    {
      title: "Microsoft Azure Explained: Key Services You Should Know",
      category: "Microsoft Azure",
      desc: "Discover the most important Azure services and how they can power your applications.",
      date: "May 18, 2024",
      readTime: "8 min read",
      author: "Neha Verma",
    },
    {
      title: "Google Cloud Platform (GCP): Fundamentals for Developers",
      category: "Google Cloud",
      desc: "Learn the core GCP services and how to use them in real-world projects.",
      date: "May 16, 2024",
      readTime: "9 min read",
      author: "Amit Patel",
    },
    {
      title: "DevOps on Cloud: Best Practices and Tools",
      category: "DevOps on Cloud",
      desc: "Automate, deploy, and monitor like a pro with these DevOps best practices.",
      date: "May 14, 2024",
      readTime: "7 min read",
      author: "Karan Mehta",
    },
    {
      title: "Serverless Computing 101: Build More, Manage Less",
      category: "Serverless",
      desc: "Understand serverless architecture and build scalable apps without managing servers.",
      date: "May 12, 2024",
      readTime: "6 min read",
      author: "Priya Singh",
    },
    {
      title: "Cloud Security Best Practices to Keep Your Data Safe",
      category: "Cloud Security",
      desc: "Essential security practices every cloud engineer and business should follow.",
      date: "May 10, 2024",
      readTime: "8 min read",
      author: "Sneha Iyer",
    }
  ];

  const popularArticles = [
    { title: "AWS for Beginners: Your Complete Guide to Get Started", date: "May 20, 2024" },
    { title: "Microsoft Azure Explained: Key Services You Should Know", date: "May 18, 2024" },
    { title: "Google Cloud Platform (GCP): Fundamentals for Developers", date: "May 16, 2024" },
    { title: "DevOps on Cloud: Best Practices and Tools", date: "May 14, 2024" },
    { title: "Cloud Security Best Practices to Keep Your Data Safe", date: "May 10, 2024" }
  ];

  const tags = [
    "AWS", "Azure", "Google Cloud", "DevOps", "Serverless", "Cloud Security", "Kubernetes", "Terraform", "CI/CD", "Monitoring", "Cost Optimization", "Architecture"
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
            <span className="text-text-base">Cloud</span>
          </nav>

          {/* Hero */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <span className="font-mono text-[9px] uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 px-2.5 py-0.5 rounded-full mb-4">
                BLOG CATEGORY
              </span>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-base leading-[1.08] mb-6">
                Cloud
              </h1>
              <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl mb-8">
                In-depth guides, tutorials, and best practices on cloud computing to help you build, deploy, and scale with confidence.
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
                    <span>Scalability</span><span className="text-primary font-bold">Enabled</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span>Security</span><span className="text-primary font-bold">High Availability</span>
                  </div>
                </div>
                <div className="bg-white/5 border border-white/5 p-3 rounded-xl flex justify-between items-center text-[10px] mt-4">
                  <div className="flex flex-col text-left">
                    <span className="text-white/40 uppercase tracking-widest font-mono">Global Infrastructure</span>
                    <span className="font-bold font-serif text-white mt-1">Cost Optimization Active</span>
                  </div>
                  <span className="text-lg">☁️</span>
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
                  Everything you need to master the cloud. From foundational concepts to advanced architectures, we cover AWS, Azure, GCP, and more.
                </p>
                <Link href="/services/cloud-and-devops" className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-primary hover:underline">
                  <span>Explore Our Cloud Services</span>
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
                  Get the latest cloud articles, tutorials, and resources straight to your inbox.
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
                  Top Topics
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
