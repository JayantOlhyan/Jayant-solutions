import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ai Chatbot Development – Jayant Solutions",
  description: "Explore the Ai Chatbot Development page of Jayant Solutions. I build custom websites, AI automation systems, and business software designed for your operational needs.",
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
