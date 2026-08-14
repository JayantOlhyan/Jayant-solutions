import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PostgreSQL Database Architecture & Tuning | Jayant",
  description: "Design robust relational database schemas, high-speed SQL queries, index tuning, and secure enterprise data storage architectures using PostgreSQL.",
  alternates: {
    canonical: "/technologies/postgresql-development",
    languages: {
      "en-IN": "/technologies/postgresql-development",
      "hi-IN": "/hi/technologies/postgresql-development",
    },
  },
  openGraph: {
    title: "PostgreSQL Database Architecture & Tuning | Jayant",
    description: "Design robust relational database schemas, high-speed SQL queries, index tuning, and secure enterprise data storage architectures using PostgreSQL.",
    url: "https://jayant-systems.online/technologies/postgresql-development",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PostgreSQL Database Architecture & Tuning | Jayant",
    description: "Design robust relational database schemas, high-speed SQL queries, index tuning, and secure enterprise data storage architectures using PostgreSQL.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
