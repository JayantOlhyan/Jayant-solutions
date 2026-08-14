import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Client Proposal | Jayant Web & AI Systems",
  description: "Confidential client proposal and commercial agreement terms.",
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

export default function ProposalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
