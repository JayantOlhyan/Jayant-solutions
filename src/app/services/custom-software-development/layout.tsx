import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Software Development – Jayant Web & AI Systems",
  description: "Explore the Custom Software Development page of Jayant Web & AI Systems. I build custom websites, AI automation systems, and business software designed for your operational needs.",
  alternates: {
    canonical: "/services/custom-software-development",
    languages: {
      "en-IN": "/services/custom-software-development",
      "hi-IN": "/hi/services/custom-software-development",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
