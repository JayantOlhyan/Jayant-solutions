import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud Infrastructure & DevOps Engineering | Jayant Systems",
  description: "Architect secure, scalable cloud infrastructure on AWS and Google Cloud with Docker containerization, CI/CD automated deployments, and proactive monitoring.",
  alternates: {
    canonical: "/services/cloud-and-devops",
    languages: {
      "en-IN": "/services/cloud-and-devops",
      "hi-IN": "/hi/services/cloud-and-devops",
    },
  },
  openGraph: {
    title: "Cloud Infrastructure & DevOps Engineering | Jayant Systems",
    description: "Architect secure, scalable cloud infrastructure on AWS and Google Cloud with Docker containerization, CI/CD automated deployments, and proactive monitoring.",
    url: "https://jayant-systems.online/services/cloud-and-devops",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud Infrastructure & DevOps Engineering | Jayant Systems",
    description: "Architect secure, scalable cloud infrastructure on AWS and Google Cloud with Docker containerization, CI/CD automated deployments, and proactive monitoring.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
