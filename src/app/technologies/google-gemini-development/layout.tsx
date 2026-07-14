import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Gemini Development – Jayant Web & AI Systems",
  description: "Explore the Google Gemini Development page of Jayant Web & AI Systems. We provide custom AI, Web & Software Development solutions tailored for your business needs.",
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
