import { Metadata } from "next";
import ProposalContent from "@/components/ProposalContent";
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
  if (!client) return { title: "Private Proposal | Jayant Web & AI Systems" };
  const clientName = formatClientName(client);
  return {
    title: `Private Client Proposal for ${clientName} | Jayant Web & AI Systems`,
    description: `A custom digital growth and business development plan for ${clientName}.`,
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

export default async function ProposalPage({ params }: PageProps) {
  const { client } = await params;

  if (!client) {
    notFound();
  }

  const clientName = formatClientName(client);

  return (
    <ProposalContent clientSlug={client} clientName={clientName} />
  );
}
