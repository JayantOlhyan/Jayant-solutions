import SubServicePage, { subServiceMetadata } from "@/components/framework/SubServicePage";

export const metadata = subServiceMetadata("mvp-development");

export default function MvpDevelopmentPage() {
  return <SubServicePage slug="mvp-development" />;
}
