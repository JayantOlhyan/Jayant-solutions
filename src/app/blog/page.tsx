import React from "react";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

export default function BlogPage() {
  return (
    <div className="hog-grid min-h-screen pb-20 pt-10">
      <main className="max-w-5xl mx-auto px-6 flex flex-col gap-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-mono text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3 py-1 rounded-full mb-4 inline-block">
            Resources & Insights
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-text-base mb-4 mt-2">
            The Agency Blog
          </h1>
          <p className="text-sm md:text-base text-text-muted">
            Tech analysis, development guides, and business automation strategies written by our engineering team.
          </p>
        </div>

        {/* Blog Post List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div key={post.slug} className="hog-card rounded-3xl p-6 flex flex-col justify-between hover:border-primary/45 transition-colors">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-primary border border-primary/20 bg-primary/5 px-2 py-0.5 rounded">
                    {post.category}
                  </span>
                  <span className="text-[10px] font-mono text-text-muted">{post.readTime}</span>
                </div>
                
                <h3 className="font-serif font-bold text-text-base text-lg mb-2 leading-snug">
                  {post.title}
                </h3>
                
                <p className="text-xs text-text-muted leading-relaxed mb-4">
                  {post.excerpt}
                </p>
              </div>

              <div className="border-t border-border-custom/30 pt-4 mt-4 flex items-center justify-between">
                <div className="flex items-center gap-1 text-[10px] text-text-muted font-mono">
                  <Calendar className="size-3" />
                  <span>{post.date}</span>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs font-mono font-bold text-primary flex items-center gap-1 hover:underline"
                >
                  Read Article <ArrowRight className="size-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
