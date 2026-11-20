import SubServicePage, { subServiceMetadata } from "@/components/framework/SubServicePage";

export const metadata = subServiceMetadata("api-development");

export default function ApiDevelopmentPage() {
  return <SubServicePage slug="api-development" />;
}
