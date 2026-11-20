import SubServicePage, { subServiceMetadata } from "@/components/framework/SubServicePage";

export const metadata = subServiceMetadata("custom-software-development");

export default function CustomSoftwareDevelopmentPage() {
  return <SubServicePage slug="custom-software-development" />;
}
