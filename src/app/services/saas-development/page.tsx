import SubServicePage, { subServiceMetadata } from "@/components/framework/SubServicePage";

export const metadata = subServiceMetadata("saas-development");

export default function SaasDevelopmentPage() {
  return <SubServicePage slug="saas-development" />;
}
