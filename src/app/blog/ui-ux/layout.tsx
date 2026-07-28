import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ui Ux – Jayant Web & AI Systems",
  description: "Explore the Ui Ux page of Jayant Web & AI Systems. I build custom websites, AI automation systems, and business software designed for your operational needs.",
  alternates: {
    canonical: "/blog/ui-ux",
    languages: {
      "en-IN": "/blog/ui-ux",
      "hi-IN": "/hi/blog/ui-ux",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
