import SubServicePage, { subServiceMetadata } from "@/components/framework/SubServicePage";

export const metadata = subServiceMetadata("business-automation");

export default function BusinessAutomationPage() {
  return <SubServicePage slug="business-automation" />;
}
