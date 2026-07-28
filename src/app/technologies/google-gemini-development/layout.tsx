import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Gemini Development – Jayant Solutions",
  description: "Explore the Google Gemini Development page of Jayant Solutions. I build custom websites, AI automation systems, and business software designed for your operational needs.",
  alternates: {
    canonical: "/technologies/google-gemini-development",
    languages: {
      "en-IN": "/technologies/google-gemini-development",
      "hi-IN": "/hi/technologies/google-gemini-development",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
