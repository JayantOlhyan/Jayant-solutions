import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Client Portal | JAYANT SYSTEMS",
  description: "Secure private client portal and project management dashboard.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
