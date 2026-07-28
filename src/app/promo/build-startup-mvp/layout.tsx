import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Build Startup Mvp – Jayant Solutions",
  description: "Explore the Build Startup Mvp page of Jayant Solutions. I build custom websites, AI automation systems, and business software designed for your operational needs.",
  alternates: {
    canonical: "/promo/build-startup-mvp",
    languages: {
      "en-IN": "/promo/build-startup-mvp",
      "hi-IN": "/hi/promo/build-startup-mvp",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
