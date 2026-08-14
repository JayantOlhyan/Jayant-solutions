import { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { createServiceSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "AI Chatbot & Assistant Development | Jayant Web & AI",
  description: "Build custom AI chatbots and conversational agents trained on your company data using Gemini, OpenAI, and Claude to automate customer support and lead triage.",
  alternates: {
    canonical: "/services/ai-chatbot-development",
    languages: {
      "en-IN": "/services/ai-chatbot-development",
      "hi-IN": "/hi/services/ai-chatbot-development",
    },
  },
  openGraph: {
    title: "AI Chatbot & Assistant Development | Jayant Web & AI",
    description: "Build custom AI chatbots and conversational agents trained on your company data using Gemini, OpenAI, and Claude to automate customer support and lead triage.",
    url: "https://jayant-systems.online/services/ai-chatbot-development",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Chatbot & Assistant Development | Jayant Web & AI",
    description: "Build custom AI chatbots and conversational agents trained on your company data using Gemini, OpenAI, and Claude to automate customer support and lead triage.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd schema={createServiceSchema({
        name: "AI Chatbot Development Services",
        description: "Build custom AI chatbots and conversational agents trained on your company data using Gemini, OpenAI, and Claude to automate support and lead triage.",
        url: "/services/ai-chatbot-development",
        serviceType: "AI Chatbot Development"
      })} />
      {children}
    </>
  );
}
