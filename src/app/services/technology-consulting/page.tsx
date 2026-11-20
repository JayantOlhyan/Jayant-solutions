import SubServicePage, { subServiceMetadata } from "@/components/framework/SubServicePage";

export const metadata = subServiceMetadata("technology-consulting");

export default function TechnologyConsultingPage() {
  return <SubServicePage slug="technology-consulting" />;
}
