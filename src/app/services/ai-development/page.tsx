import SubServicePage, { subServiceMetadata } from "@/components/framework/SubServicePage";

export const metadata = subServiceMetadata("ai-development");

export default function AiDevelopmentPage() {
  return <SubServicePage slug="ai-development" />;
}
