import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flutter Development – Jayant Web & AI Systems",
  description: "Explore the Flutter Development page of Jayant Web & AI Systems. We provide custom AI, Web & Software Development solutions tailored for your business needs.",
  alternates: {
    canonical: "/technologies/flutter-development",
    languages: {
      "en-IN": "/technologies/flutter-development",
      "hi-IN": "/hi/technologies/flutter-development",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
