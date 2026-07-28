import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ui Ux Design – Jayant Solutions",
  description: "Explore the Ui Ux Design page of Jayant Solutions. I build custom websites, AI automation systems, and business software designed for your operational needs.",
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
