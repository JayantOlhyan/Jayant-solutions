import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom AI Chatbot Solutions for Business | Jayant Web & AI",
  description: "Deploy intelligent AI chatbots that resolve up to 80% of customer support queries 24/7 with zero hallucinations, trained strictly on your documentation.",
  alternates: {
    canonical: "/promo/build-ai-chatbot",
    languages: {
      "en-IN": "/promo/build-ai-chatbot",
      "hi-IN": "/hi/promo/build-ai-chatbot",
    },
  },
  openGraph: {
    title: "Custom AI Chatbot Solutions for Business | Jayant Web & AI",
    description: "Deploy intelligent AI chatbots that resolve up to 80% of customer support queries 24/7 with zero hallucinations, trained strictly on your documentation.",
    url: "https://jayant-systems.online/promo/build-ai-chatbot",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom AI Chatbot Solutions for Business | Jayant Web & AI",
    description: "Deploy intelligent AI chatbots that resolve up to 80% of customer support queries 24/7 with zero hallucinations, trained strictly on your documentation.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
