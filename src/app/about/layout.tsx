import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Jayant – Jayant Solutions",
  description: "Explore the About page of Jayant Solutions. I build custom websites, AI automation systems, and business software designed for your operational needs.",
  alternates: {
    canonical: "/about",
    languages: {
      "en-IN": "/about",
      "hi-IN": "/hi/about",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
