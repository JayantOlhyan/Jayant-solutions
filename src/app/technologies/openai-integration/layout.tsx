import { Metadata } from "next";

export const metadata: Metadata = {
  title: "OpenAI API Integration & Custom GPT Agents | Jayant",
  description: "Integrate OpenAI GPT-4 models, custom Assistants API agents, and Whisper voice transcription into your software applications for automated workflows.",
  alternates: {
    canonical: "/technologies/openai-integration",
    languages: {
      "en-IN": "/technologies/openai-integration",
      "hi-IN": "/hi/technologies/openai-integration",
    },
  },
  openGraph: {
    title: "OpenAI API Integration & Custom GPT Agents | Jayant",
    description: "Integrate OpenAI GPT-4 models, custom Assistants API agents, and Whisper voice transcription into your software applications for automated workflows.",
    url: "https://jayant-systems.online/technologies/openai-integration",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenAI API Integration & Custom GPT Agents | Jayant",
    description: "Integrate OpenAI GPT-4 models, custom Assistants API agents, and Whisper voice transcription into your software applications for automated workflows.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
