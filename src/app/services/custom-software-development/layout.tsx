import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Software & Dashboard Development | Jayant Systems",
  description: "Engineer scalable custom software, proprietary databases, and internal dashboards tailored to your operational workflows with zero subscription bloat.",
  alternates: {
    canonical: "/services/custom-software-development",
    languages: {
      "en-IN": "/services/custom-software-development",
      "hi-IN": "/hi/services/custom-software-development",
    },
  },
  openGraph: {
    title: "Custom Software & Dashboard Development | Jayant Systems",
    description: "Engineer scalable custom software, proprietary databases, and internal dashboards tailored to your operational workflows with zero subscription bloat.",
    url: "https://jayant-systems.online/services/custom-software-development",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software & Dashboard Development | Jayant Systems",
    description: "Engineer scalable custom software, proprietary databases, and internal dashboards tailored to your operational workflows with zero subscription bloat.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
