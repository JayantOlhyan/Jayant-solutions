import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ai Chatbot Development – Jayant Web & AI Systems",
  description: "Explore the Ai Chatbot Development page of Jayant Web & AI Systems. We provide custom AI, Web & Software Development solutions tailored for your business needs.",
  alternates: {
    canonical: "/services/ai-chatbot-development",
    languages: {
      "en-IN": "/services/ai-chatbot-development",
      "hi-IN": "/hi/services/ai-chatbot-development",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
