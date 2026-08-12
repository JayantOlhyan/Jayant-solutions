import { Metadata } from "next";
import CommercialsContent from "@/components/CommercialsContent";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ client: string }>;
}

function formatClientName(slug: string): string {
  if (!slug) return "Client";
  return decodeURIComponent(slug)
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { client } = await params;
  if (!client) return { title: "Commercial Proposal | Jayant Web & AI Systems" };
  const clientName = formatClientName(client);
  return {
    title: `Commercial & Payment Proposal for ${clientName} | Jayant Web & AI Systems`,
    description: `Commercial execution options and payment structure for ${clientName}.`,
    robots: {
      index: false,
      follow: false,
      nocache: true,
      googleBot: {
        index: false,
        follow: false,
      },
    },
  };
}

export default async function CommercialsPage({ params }: PageProps) {
  const { client } = await params;

  if (!client) {
    notFound();
  }

  const clientName = formatClientName(client);

  return (
    <CommercialsContent clientSlug={client} clientName={clientName} />
  );
}
