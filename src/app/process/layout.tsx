import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Process – Jayant Solutions",
  description: "Explore the Process page of Jayant Solutions. I build custom websites, AI automation systems, and business software designed for your operational needs.",
  alternates: {
    canonical: "/process",
    languages: {
      "en-IN": "/process",
      "hi-IN": "/hi/process",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
