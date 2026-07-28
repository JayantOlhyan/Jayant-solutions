import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile App Development – Jayant Solutions",
  description: "Explore the Mobile App Development page of Jayant Solutions. I build custom websites, AI automation systems, and business software designed for your operational needs.",
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
