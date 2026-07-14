import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Postgresql Development – Jayant Web & AI Systems",
  description: "Explore the Postgresql Development page of Jayant Web & AI Systems. We provide custom AI, Web & Software Development solutions tailored for your business needs.",
  alternates: {
    canonical: "/technologies/postgresql-development",
    languages: {
      "en-IN": "/technologies/postgresql-development",
      "hi-IN": "/hi/technologies/postgresql-development",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
