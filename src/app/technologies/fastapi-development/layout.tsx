import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fastapi Development – Jayant Web & AI Systems",
  description: "Explore the Fastapi Development page of Jayant Web & AI Systems. We provide custom AI, Web & Software Development solutions tailored for your business needs.",
  alternates: {
    canonical: "/technologies/fastapi-development",
    languages: {
      "en-IN": "/technologies/fastapi-development",
      "hi-IN": "/hi/technologies/fastapi-development",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
