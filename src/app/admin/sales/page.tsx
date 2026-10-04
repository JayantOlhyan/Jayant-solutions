import Link from "next/link";
import { redirect } from "next/navigation";
import { AdminAuthError } from "@/lib/auth/admin-guard";
import { salesAdmin } from "@/lib/sales/server";
import SalesCockpit from "@/components/sales/SalesCockpit";
import "./sales.css";

export const dynamic = "force-dynamic";
export default async function SalesPage() {
  try {
    await salesAdmin();
  } catch (error) {
    if (error instanceof AdminAuthError && error.status === 401)
      redirect("/admin/login?redirect=/admin/sales");
    return (
      <div className="sales-cockpit">
        <main className="sc-main">
          <section className="sc-panel">
            <h1>Sales workspace unavailable</h1>
            <p>
              {error instanceof AdminAuthError
                ? error.message
                : "Check the Supabase configuration and your administrator access, then retry."}
            </p>
            <Link href="/admin/dashboard">Return to admin</Link>
          </section>
        </main>
      </div>
    );
  }
  return <SalesCockpit />;
}
