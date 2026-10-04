import { requireAdmin, AdminAuthError } from "@/lib/auth/admin-guard";
import { createAdminClient } from "@/lib/supabase/admin";
import type { Prospect, Receipt, SalesData } from "./model";

export async function salesAdmin() {
  const admin = await requireAdmin();
  const db = createAdminClient();
  // User-editable auth metadata is not sufficient to access prospect or cash data.
  const { data, error } = await db
    .from("admin_users")
    .select("role")
    .eq("id", admin.id)
    .maybeSingle();
  if (error) throw new Error("Unable to verify sales workspace access.");
  if (!data || !["admin", "super_admin"].includes(data.role))
    throw new AdminAuthError(
      "FORBIDDEN",
      "Sales workspace requires an administrator record.",
    );
  return { admin, db };
}

export async function loadSales(
  db: ReturnType<typeof createAdminClient>,
): Promise<SalesData> {
  // Supabase caps each response; page explicitly so sprint totals never silently truncate.
  async function allRows(table: string) {
    const rows = [];
    for (let from = 0; ; from += 500) {
      const { data, error } = await db
        .from(table)
        .select("*")
        .order("created_at")
        .order("id")
        .range(from, from + 499);
      if (error)
        throw new Error(
          "Sales data could not load. Check the connection and apply migration 00014 before using the cockpit.",
        );
      rows.push(...data);
      if (data.length < 500) return rows;
    }
  }
  const [prospects, receipts, proposals] = await Promise.all([
    allRows("sales_prospects"),
    allRows("sales_receipts"),
    db
      .from("proposals")
      .select("id,title,token")
      .is("deleted_at", null)
      .order("created_at", { ascending: false })
      .limit(100),
  ]);
  if (proposals.error)
    throw new Error(
      "Existing proposals could not load. Retry before linking a proposal.",
    );
  return {
    prospects: prospects.map((p) => ({
      ...p,
      followupIndex: p.followup_index,
    })) as Prospect[],
    receipts: receipts as Receipt[],
    proposals: proposals.data,
  };
}
