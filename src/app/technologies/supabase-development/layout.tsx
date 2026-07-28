import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Supabase Development – Jayant Web & AI Systems",
  description: "Explore the Supabase Development page of Jayant Web & AI Systems. I build custom websites, AI automation systems, and business software designed for your operational needs.",
  alternates: {
    canonical: "/technologies/supabase-development",
    languages: {
      "en-IN": "/technologies/supabase-development",
      "hi-IN": "/hi/technologies/supabase-development",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
