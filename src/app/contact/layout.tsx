import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact – Jayant Web & AI Systems",
  description: "Explore the Contact page of Jayant Web & AI Systems. I build custom websites, AI automation systems, and business software designed for your operational needs.",
  alternates: {
    canonical: "/contact",
    languages: {
      "en-IN": "/contact",
      "hi-IN": "/hi/contact",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://cal.com" />
        <link rel="dns-prefetch" href="https://cal.com" />
      </head>
      {children}
    </>
  );
}
