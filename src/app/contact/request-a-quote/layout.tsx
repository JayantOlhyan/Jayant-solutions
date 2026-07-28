import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request A Quote – Jayant Web & AI Systems",
  description: "Explore the Request A Quote page of Jayant Web & AI Systems. I build custom websites, AI automation systems, and business software designed for your operational needs.",
  alternates: {
    canonical: "/contact/request-a-quote",
    languages: {
      "en-IN": "/contact/request-a-quote",
      "hi-IN": "/hi/contact/request-a-quote",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
