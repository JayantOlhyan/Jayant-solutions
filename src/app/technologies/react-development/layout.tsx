import { Metadata } from "next";

export const metadata: Metadata = {
  title: "React Development – Jayant Solutions",
  description: "Explore the React Development page of Jayant Solutions. I build custom websites, AI automation systems, and business software designed for your operational needs.",
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
