import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Build Ai Chatbot – Jayant Web & AI Systems",
  description: "Explore the Build Ai Chatbot page of Jayant Web & AI Systems. We provide custom AI, Web & Software Development solutions tailored for your business needs.",
  alternates: {
    canonical: "/promo/build-ai-chatbot",
    languages: {
      "en-IN": "/promo/build-ai-chatbot",
      "hi-IN": "/hi/promo/build-ai-chatbot",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
