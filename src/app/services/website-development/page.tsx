import SubServicePage, { subServiceMetadata } from "@/components/framework/SubServicePage";

export const metadata = subServiceMetadata("website-development");

export default function WebsiteDevelopmentPage() {
  return <SubServicePage slug="website-development" />;
}
