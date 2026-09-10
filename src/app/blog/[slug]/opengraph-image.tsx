import { ImageResponse } from "next/og";
import { getBlogPostBySlug } from "@/lib/blog";

export const alt = "Jayant Web & AI Systems Blog";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

interface Props {
  params: { slug: string };
}

export default async function Image({ params }: Props) {
  const post = getBlogPostBySlug(params.slug);
  const title = post ? post.frontmatter.title : "Jayant Web & AI Systems";

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          color: "white",
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          padding: "50px 200px",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          border: "4px solid #3b82f6",
        }}
      >
        <div style={{ fontSize: 32, color: "#3b82f6", marginBottom: 20 }}>
          Jayant Web &amp; AI Systems Blog
        </div>
        <div style={{ fontWeight: 700, lineHeight: 1.2 }}>{title}</div>
      </div>
    ),
    {
      ...size,
    }
  );
}
