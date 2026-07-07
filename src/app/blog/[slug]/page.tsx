import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="hog-grid min-h-screen pb-20 pt-10">
      <main className="max-w-3xl mx-auto px-6">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-xs font-mono text-text-muted hover:text-primary mb-8"
        >
          <ArrowLeft className="size-3.5" /> Back to Blog
        </Link>

        {/* Article Container */}
        <article className="hog-card rounded-[32px] p-8 md:p-12 shadow-lg">
          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-4 mb-4 border-b border-border-custom/30 pb-4">
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
            <div className="flex items-center gap-1.5 text-xs text-text-muted font-mono">
              <User className="size-3.5" />
              <span>{post.author}</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mb-6">
            {post.title}
          </h1>

          {/* Content Body */}
          <div
            className="prose prose-neutral dark:prose-invert max-w-none text-xs md:text-sm text-text-muted space-y-6 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
    </div>
  );
}
