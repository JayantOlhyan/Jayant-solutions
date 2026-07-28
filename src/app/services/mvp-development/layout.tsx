import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mvp Development – Jayant Solutions",
  description: "Explore the Mvp Development page of Jayant Solutions. I build custom websites, AI automation systems, and business software designed for your operational needs.",
  alternates: {
    canonical: "/services/mvp-development",
    languages: {
      "en-IN": "/services/mvp-development",
      "hi-IN": "/hi/services/mvp-development",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
