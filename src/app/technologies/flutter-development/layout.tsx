import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flutter Development – Jayant Solutions",
  description: "Explore the Flutter Development page of Jayant Solutions. I build custom websites, AI automation systems, and business software designed for your operational needs.",
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
