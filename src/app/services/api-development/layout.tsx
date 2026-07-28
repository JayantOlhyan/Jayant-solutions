import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Api Development – Jayant Solutions",
  description: "Explore the Api Development page of Jayant Solutions. I build custom websites, AI automation systems, and business software designed for your operational needs.",
  alternates: {
    canonical: "/services/api-development",
    languages: {
      "en-IN": "/services/api-development",
      "hi-IN": "/hi/services/api-development",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
