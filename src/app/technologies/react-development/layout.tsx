import { Metadata } from "next";

export const metadata: Metadata = {
  title: "React Development – Jayant Web & AI Systems",
  description: "Explore the React Development page of Jayant Web & AI Systems. We provide custom AI, Web & Software Development solutions tailored for your business needs.",
  alternates: {
    canonical: "/technologies/react-development",
    languages: {
      "en-IN": "/technologies/react-development",
      "hi-IN": "/hi/technologies/react-development",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
