import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Build Startup Mvp – Jayant Web & AI Systems",
  description: "Explore the Build Startup Mvp page of Jayant Web & AI Systems. We provide custom AI, Web & Software Development solutions tailored for your business needs.",
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
