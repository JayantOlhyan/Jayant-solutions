import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPosts, getBlogPostBySlug } from "@/lib/blog";
import JsonLd from "@/components/seo/JsonLd";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | Jayant Web & AI Systems",
      description: "The requested article could not be found.",
    };
  }

  const title = post.frontmatter.title || `${post.frontmatter.title} | Jayant Web & AI Systems`;
  const description = post.frontmatter.description;
  const url = post.frontmatter.canonical || `https://jayant-systems.online/blog/${post.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Jayant Web & AI Systems",
      type: "article",
      publishedTime: post.frontmatter.publishedAt,
      authors: [post.frontmatter.author],
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
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Create JSON-LD with existing Person entity
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.frontmatter.title,
    description: post.frontmatter.description,
    datePublished: post.frontmatter.publishedAt,
    dateModified: post.frontmatter.updatedAt || post.frontmatter.publishedAt,
    author: {
      "@id": "https://jayant-systems.online/company/founder#person"
    },
    url: post.frontmatter.canonical || `https://jayant-systems.online/blog/${post.slug}`
  };

  return (
    <div className="hog-grid min-h-screen pb-20 pt-10">
      <JsonLd schema={jsonLd as any} />
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
              {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
                <span className="font-mono text-xs text-primary border border-primary/20 bg-primary/5 px-2.5 py-1 rounded">
                  {post.frontmatter.tags[0]}
                </span>
              )}
              <div className="flex items-center gap-1.5 text-xs text-text-muted font-mono">
                <Calendar className="size-3.5" />
                <span>{new Date(post.frontmatter.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="font-serif text-2xl md:text-4xl font-bold tracking-tight text-text-base leading-snug">
              {post.frontmatter.title}
            </h1>

            {/* Article Content */}
            <div className="prose prose-neutral dark:prose-invert max-w-none text-xs md:text-sm text-text-muted space-y-6 leading-relaxed">
              <MDXRemote source={post.content} />
            </div>

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
                        {post.frontmatter.author}
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
                </div>
              </div>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
