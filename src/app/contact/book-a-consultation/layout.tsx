import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book A Consultation – Jayant Web & AI Systems",
  description: "Explore the Book A Consultation page of Jayant Web & AI Systems. We provide custom AI, Web & Software Development solutions tailored for your business needs.",
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
