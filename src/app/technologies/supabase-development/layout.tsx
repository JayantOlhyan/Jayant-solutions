import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Supabase Development – Jayant Web & AI Systems",
  description: "Explore the Supabase Development page of Jayant Web & AI Systems. We provide custom AI, Web & Software Development solutions tailored for your business needs.",
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
