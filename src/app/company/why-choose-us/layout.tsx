import { Metadata } from "next";

export const metadata: Metadata = {
  title: "why work with me – Jayant Solutions",
  description: "Explore the why work with me page of Jayant Solutions. I build custom websites, AI automation systems, and business software designed for your operational needs.",
  alternates: {
    canonical: "/company/why-choose-us",
    languages: {
      "en-IN": "/company/why-choose-us",
      "hi-IN": "/hi/company/why-choose-us",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
