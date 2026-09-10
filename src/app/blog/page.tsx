import React from "react";
import { Metadata } from "next";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { getBlogPosts } from "@/lib/blog";


// The /blog index is set to noindex until it contains at least 3 real published articles
// to prevent indexing an empty or thin category page.
// Remove this logic and allow normal indexing once the threshold is met.
export async function generateMetadata(): Promise<Metadata> {
  const posts = getBlogPosts();
  if (posts.length < 3) {
    return {
      title: "Blog | Jayant Web & AI Systems",
      description: "Technical deep dives, systems architecture, and engineering philosophy.",
      robots: {
        index: false,
        follow: true,
      }
    };
  }
  return {
    title: "Blog | Jayant Web & AI Systems",
    description: "Technical deep dives, systems architecture, and engineering philosophy.",
    robots: {
      index: true,
      follow: true,
    }
  };
}

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <PageTransition>
      <div className="hog-grid min-h-screen pb-20 pt-10 text-left">
        <main className="max-w-none px-6 md:px-12 lg:px-16 flex flex-col gap-20 md:gap-28">
          {/* Breadcrumbs */}
          <nav className="text-xs font-mono text-text-muted flex items-center gap-2 pt-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>&gt;</span>
            <span className="text-text-base">Blog</span>
          </nav>

          {/* Hero */}
          <section className="flex flex-col items-start text-left max-w-2xl">
            <span className="font-mono text-[9px] uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 px-2.5 py-0.5 rounded-full mb-4">
              OUR BLOG
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-text-base leading-[1.08] mb-6">
              Insights & Engineering.
            </h1>
            <p className="text-sm md:text-base text-text-muted leading-relaxed mb-8">
              Technical deep dives, systems architecture, and engineering philosophy.
            </p>
          </section>

          {/* Posts List */}
          <section className="max-w-4xl w-full">
            <h2 className="font-serif text-2xl font-bold mb-8 text-text-base border-b border-border-custom/30 pb-4">
              Latest Articles
            </h2>

            {posts.length > 0 ? (
              <div className="flex flex-col gap-8">
                {posts.map((post) => (
                  <Link href={`/blog/${post.slug}`} key={post.slug} className="group block hog-card rounded-[32px] p-6 md:p-8 bg-card-bg/40 border border-border-custom transition-all hover:bg-card-bg/60">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
                        <span className="font-mono text-[10px] text-primary border border-primary/20 bg-primary/5 px-2.5 py-1 rounded">
                          {post.frontmatter.tags[0]}
                        </span>
                      )}
                      <div className="flex items-center gap-1.5 text-xs text-text-muted font-mono">
                        <Calendar className="size-3.5" />
                        <span>{new Date(post.frontmatter.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-text-base mb-3 group-hover:text-primary transition-colors">
                      {post.frontmatter.title}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed mb-6">
                      {post.frontmatter.description}
                    </p>
                    <div className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-primary group-hover:underline">
                      Read Article <ArrowRight className="size-3.5" />
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="py-20 text-center border-2 border-dashed border-border-custom/50 rounded-[32px] bg-card-bg/20">
                <p className="font-mono text-sm text-text-muted">No articles published yet.</p>
                <p className="font-mono text-xs text-text-muted mt-2">Check back soon for engineering insights.</p>
              </div>
            )}
          </section>
        </main>
      </div>
    </PageTransition>
  );
}
