import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Report A Bug – Jayant Web & AI Systems",
  description: "Explore the Report A Bug page of Jayant Web & AI Systems. I build custom websites, AI automation systems, and business software designed for your operational needs.",
  alternates: {
    canonical: "/support/report-a-bug",
    languages: {
      "en-IN": "/support/report-a-bug",
      "hi-IN": "/hi/support/report-a-bug",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
