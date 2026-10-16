import { ImageResponse } from "next/og";
import { getBlogPostBySlug } from "@/lib/blog";

export const alt = "JAYANT SYSTEMS Engineering Blog";
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
  const title = post ? post.frontmatter.title : "JAYANT SYSTEMS";

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 56,
          color: "#F8FAFC",
          background: "#0A0F1D",
          width: "100%",
          height: "100%",
          padding: "64px 120px",
          textAlign: "left",
          justifyContent: "space-between",
          alignItems: "flex-start",
          display: "flex",
          flexDirection: "column",
          border: "4px solid #2563EB",
        }}
      >
        <div
          style={{
            fontSize: 24,
            color: "#3B82F6",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          JAYANT SYSTEMS &bull; Engineering Blog
        </div>
        <div style={{ fontWeight: 800, lineHeight: 1.15 }}>{title}</div>
        <div style={{ fontSize: 20, color: "#94A3B8" }}>jayant-systems.online</div>
      </div>
    ),
    {
      ...size,
    }
  );
}
