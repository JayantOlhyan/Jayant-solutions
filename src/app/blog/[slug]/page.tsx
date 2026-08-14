import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";
import JsonLd from "@/components/seo/JsonLd";
import { createBlogPostingSchema } from "@/lib/seo/schema";
import { Calendar, Clock, ArrowLeft, CheckCircle2 } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found | Jayant Web & AI Systems",
      description: "The requested article could not be found.",
    };
  }

  const title = post.seoTitle || `${post.title} | Jayant Web & AI Systems`;
  const description = post.excerpt;
  const url = `https://jayant-systems.online/blog/${post.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Jayant Web & AI Systems",
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="hog-grid min-h-screen pb-20 pt-10">
      <JsonLd schema={createBlogPostingSchema(post)} />
      <main className="max-w-4xl mx-auto px-6">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-xs font-mono text-text-muted hover:text-primary mb-8"
        >
          <ArrowLeft className="size-3.5" /> Back to Blog
        </Link>

        {/* Article Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Article Body */}
          <article className="lg:col-span-8 hog-card rounded-[32px] p-6 md:p-10 shadow-sm flex flex-col gap-6">
            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-4 border-b border-border-custom/30 pb-4">
              <span className="font-mono text-xs text-primary border border-primary/20 bg-primary/5 px-2.5 py-1 rounded">
                {post.category}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-text-muted font-mono">
                <Calendar className="size-3.5" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-text-muted font-mono">
                <Clock className="size-3.5" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="font-serif text-2xl md:text-4xl font-bold tracking-tight text-text-base leading-snug">
              {post.title}
            </h1>

            {/* Article Content */}
            <div
              className="prose prose-neutral dark:prose-invert max-w-none text-xs md:text-sm text-text-muted space-y-6 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Author Bio & E-E-A-T Credentials Card */}
            <div className="border-t border-border-custom/40 pt-8 mt-6">
              <div className="rounded-2xl border border-border-custom bg-card-bg/60 p-5 md:p-6 flex flex-col sm:flex-row gap-5 items-start">
                <div className="size-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary font-serif font-bold text-xl">
                  JO
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h4 className="font-serif font-bold text-text-base text-sm md:text-base leading-none">
                        {post.author}
                      </h4>
                      <span className="text-[10px] font-mono text-primary mt-1 block">
                        Founder & Lead Software Engineer • B.Tech CSE (MSIT Delhi)
                      </span>
                    </div>
                    <Link
                      href="/company/founder"
                      className="text-[10px] font-mono font-bold text-primary hover:underline"
                    >
                      View Profile →
                    </Link>
                  </div>
                  <p className="text-[11px] md:text-xs text-text-muted leading-relaxed">
                    Jayant specializes in full-stack architecture with Next.js, Python/FastAPI backend engineering, and custom AI systems integration. He designs and deploys production web applications and autonomous workflow pipelines for businesses.
                  </p>
                  <div className="flex items-center gap-3 pt-2 text-[10px] font-mono text-text-muted border-t border-border-custom/20">
                    <span>🛡️ Technically Reviewed & Verified</span>
                    <span>•</span>
                    <span>Published: {post.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Right Sidebar: Commercial Packaging */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Package Details Card */}
            <div className="hog-card rounded-[28px] p-6 border-2 border-primary/40 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl pointer-events-none" />
              
              <span className="font-mono text-[9px] uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded mb-3 inline-block">
                Service Package Info
              </span>

              <h3 className="font-serif text-lg font-bold text-text-base mb-1">
                {post.category}
              </h3>
              
              <div className="font-mono text-xs text-text-muted mb-4">
                Starting at <strong className="text-primary text-base block mt-0.5">{post.startingPrice}</strong>
              </div>

              {/* Scope Deliverables */}
              <div className="border-t border-border-custom/25 pt-4">
                <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted block mb-3">
                  📦 Deliverables Included:
                </span>
                <ul className="space-y-2">
                  {post.deliverables.map((item, idx) => (
                    <li key={idx} className="text-xs text-text-muted flex items-start gap-2 leading-tight">
                      <CheckCircle2 className="size-3.5 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Timeline metric */}
              <div className="border-t border-border-custom/25 pt-4 mt-4 font-mono text-[10px] text-text-muted flex justify-between">
                <span>⏳ Delivery Timeline:</span>
                <span className="text-text-base font-bold">{post.timeline}</span>
              </div>
            </div>

            {/* CTA action block */}
            <div className="hog-card rounded-[28px] p-6 text-center">
              <h4 className="font-serif font-bold text-text-base text-sm mb-2 leading-snug">
                Need This Solution?
              </h4>
              <p className="text-[11px] text-text-muted mb-4 leading-relaxed">
                Book a strategy audit slot. We will map requirements and draw up a detailed scoping proposal.
              </p>
              <a
                href="https://cal.com/jayant-web-and-ai-systems/strategy-call"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2 text-xs font-mono font-bold bg-primary hover:bg-primary-hover text-white rounded-xl block transition-colors shadow-sm"
              >
                Schedule Strategy Session
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
