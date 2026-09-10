import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDirectory = path.join(process.cwd(), "src/content/blog");

export interface BlogPostFrontmatter {
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  tags?: string[];
  canonical?: string;
}

export interface BlogPost {
  slug: string;
  frontmatter: BlogPostFrontmatter;
  content: string;
}

export function getBlogPosts(): BlogPost[] {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(blogDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(blogDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const { data, content } = matter(fileContents);

      // Hard Constraint: Build must FAIL if < 800 words
      const wordCount = content.split(/\s+/).filter(Boolean).length;
      if (wordCount < 800) {
        throw new Error(
          `Post "${slug}" has only ${wordCount} words. Minimum required is 800 words to prevent thin content.`
        );
      }

      return {
        slug,
        frontmatter: data as BlogPostFrontmatter,
        content,
      };
    })
    .sort((a, b) => {
      if (a.frontmatter.publishedAt < b.frontmatter.publishedAt) {
        return 1;
      } else {
        return -1;
      }
    });

  return allPostsData;
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  const posts = getBlogPosts();
  return posts.find((post) => post.slug === slug);
}
