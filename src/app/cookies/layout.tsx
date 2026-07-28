import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies – Jayant Solutions",
  description: "Explore the Cookies page of Jayant Solutions. I build custom websites, AI automation systems, and business software designed for your operational needs.",
  alternates: {
    canonical: "/cookies",
    languages: {
      "en-IN": "/cookies",
      "hi-IN": "/hi/cookies",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
