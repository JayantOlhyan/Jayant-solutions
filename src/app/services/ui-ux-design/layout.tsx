import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ui Ux Design – Jayant Web & AI Systems",
  description: "Explore the Ui Ux Design page of Jayant Web & AI Systems. We provide custom AI, Web & Software Development solutions tailored for your business needs.",
  alternates: {
    canonical: "/services/ui-ux-design",
    languages: {
      "en-IN": "/services/ui-ux-design",
      "hi-IN": "/hi/services/ui-ux-design",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
