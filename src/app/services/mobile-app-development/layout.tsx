import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile App Development – Jayant Web & AI Systems",
  description: "Explore the Mobile App Development page of Jayant Web & AI Systems. We provide custom AI, Web & Software Development solutions tailored for your business needs.",
  alternates: {
    canonical: "/services/mobile-app-development",
    languages: {
      "en-IN": "/services/mobile-app-development",
      "hi-IN": "/hi/services/mobile-app-development",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
