import SubServicePage, { subServiceMetadata } from "@/components/framework/SubServicePage";

export const metadata = subServiceMetadata("cloud-and-devops");

export default function CloudAndDevopsPage() {
  return <SubServicePage slug="cloud-and-devops" />;
}
