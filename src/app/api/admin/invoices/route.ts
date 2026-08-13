import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth/admin-guard";
import { createAdminClient } from "@/lib/supabase/admin";

export async function GET(request: Request) {
  try {
    await requireAdmin();
    const { searchParams } = new URL(request.url);

    const search = searchParams.get("search")?.trim() || "";
    const status = searchParams.get("status")?.trim().toUpperCase() || "ALL";
    const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10));
    const limit = Math.min(50, Math.max(1, parseInt(searchParams.get("limit") || "10", 10)));
    const offset = (page - 1) * limit;

    const adminDb = createAdminClient();

    let query = adminDb
      .from("invoices")
      .select(
        `
        id,
        invoice_number,
        subtotal,
        tax_amount,
        total_amount,
        status,
        due_date,
        paid_at,
        pdf_storage_path,
        created_at,
        agreements:agreement_id (
          id,
          proposal_id,
          proposals:proposal_id (
            id,
            title,
            client_id,
            clients:client_id (
              id,
              name,
              company_name,
              email,
              phone
            )
          )
        ),
        payments:payments (
          id,
          razorpay_link_id,
          razorpay_payment_id,
          amount,
          currency,
          status,
          payment_url,
          created_at
        )
      `,
        { count: "exact" }
      )
      .order("created_at", { ascending: false });

    if (status !== "ALL") {
      query = query.eq("status", status);
    }

    if (search) {
      query = query.ilike("invoice_number", `%${search}%`);
    }

    const { data: invoices, count, error } = await query.range(offset, offset + limit - 1);

    if (error) {
      throw error;
    }

    return NextResponse.json({
      success: true,
      invoices: invoices || [],
      pagination: {
        total: count || 0,
        page,
        limit,
        totalPages: Math.ceil((count || 0) / limit),
      },
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Failed to fetch invoices";
    return NextResponse.json(
      { success: false, error: msg },
      { status: 500 }
    );
  }
}
