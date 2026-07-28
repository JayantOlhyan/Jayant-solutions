import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book A Consultation – Jayant Solutions",
  description: "Explore the Book A Consultation page of Jayant Solutions. I build custom websites, AI automation systems, and business software designed for your operational needs.",
  alternates: {
    canonical: "/contact/book-a-consultation",
    languages: {
      "en-IN": "/contact/book-a-consultation",
      "hi-IN": "/hi/contact/book-a-consultation",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
