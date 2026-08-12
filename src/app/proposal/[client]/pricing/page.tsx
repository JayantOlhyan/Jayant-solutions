import { redirect } from "next/navigation";

interface PageProps {
  params: Promise<{ client: string }>;
}

export default async function PricingRedirectPage({ params }: PageProps) {
  const { client } = await params;
  redirect(`/proposal/${client}/commercials`);
}
