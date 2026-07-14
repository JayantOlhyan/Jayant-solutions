import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Process – Jayant Web & AI Systems",
  description: "Explore the Process page of Jayant Web & AI Systems. We provide custom AI, Web & Software Development solutions tailored for your business needs.",
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
