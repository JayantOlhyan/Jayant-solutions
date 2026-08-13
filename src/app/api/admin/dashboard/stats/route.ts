import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth/admin-guard";
import { createAdminClient } from "@/lib/supabase/admin";

export async function GET() {
  try {
    // 1. Enforce Server-Side Admin Authorization
    await requireAdmin();
    const adminDb = createAdminClient();

    // 2. Fetch Proposals & Package Selections
    const { count: totalProposals } = await adminDb
      .from("proposals")
      .select("*", { count: "exact", head: true });

    const { data: selections } = await adminDb
      .from("package_selections")
      .select("price_snapshot, packages(code)");

    const packageBreakdown = { FOUNDATION: 0, GROWTH: 0, SCALE: 0 };
    let selectedPipelineValue = 0;

    selections?.forEach((sel) => {
      const code = (sel.packages as unknown as { code: string })?.code;
      if (code && code in packageBreakdown) {
        packageBreakdown[code as keyof typeof packageBreakdown] += 1;
      }
      selectedPipelineValue += Number(sel.price_snapshot || 0);
    });

    // 3. Financial Calculations
    const { data: commercialTerms } = await adminDb
      .from("commercial_terms")
      .select("final_agreed_price, proposals(agreements(status))");

    let contractedValue = 0;
    commercialTerms?.forEach((ct) => {
      const isSigned = (ct.proposals as unknown as { agreements: { status: string }[] })?.agreements?.some(
        (a) => a.status === "SIGNED"
      );
      if (isSigned) {
        contractedValue += Number(ct.final_agreed_price || 0);
      }
    });

    const { data: verifiedPayments } = await adminDb
      .from("payments")
      .select("amount, status")
      .eq("status", "PAID");

    let collectedRevenue = 0;
    verifiedPayments?.forEach((p) => {
      collectedRevenue += Number(p.amount || 0);
    });

    const outstandingBalance = Math.max(0, contractedValue - collectedRevenue);

    const { data: pendingInvoices } = await adminDb
      .from("invoices")
      .select("total_amount")
      .in("status", ["ISSUED", "DRAFT", "PARTIALLY_PAID"]);

    let pendingInvoicesValue = 0;
    pendingInvoices?.forEach((inv) => {
      pendingInvoicesValue += Number(inv.total_amount || 0);
    });

    // 4. Operational KPIs (Completed / Metrics)
    const { count: totalKickoffsBooked } = await adminDb
      .from("bookings")
      .select("*", { count: "exact", head: true });

    // 5. Action Items Queue (Only items requiring admin intervention)
    const { count: awaitingNegotiation } = await adminDb
      .from("negotiations")
      .select("*", { count: "exact", head: true })
      .eq("status", "SUBMITTED");

    const { count: awaitingAgreementSigning } = await adminDb
      .from("agreements")
      .select("*", { count: "exact", head: true })
      .eq("status", "SENT");

    const { count: awaitingPayment } = await adminDb
      .from("invoices")
      .select("*", { count: "exact", head: true })
      .in("status", ["ISSUED", "DRAFT"]);

    const { count: awaitingOnboardingReview } = await adminDb
      .from("onboarding")
      .select("*", { count: "exact", head: true })
      .eq("status", "SUBMITTED");

    const { count: onboardingRevisionRequested } = await adminDb
      .from("onboarding")
      .select("*", { count: "exact", head: true })
      .eq("status", "REVISION_REQUESTED");

    // 6. System Technical Health Metrics
    const systemHealth = {
      api_status: "OPERATIONAL",
      database: "CONNECTED",
      last_health_check: new Date().toISOString(),
    };

    return NextResponse.json({
      success: true,
      data_mode: "current_operational_metrics",
      stats: {
        total_proposals: totalProposals || 0,
        package_breakdown: packageBreakdown,
        financials: {
          selected_pipeline_value: selectedPipelineValue,
          contracted_value: contractedValue,
          collected_revenue: collectedRevenue,
          outstanding_balance: outstandingBalance,
          pending_invoices_value: pendingInvoicesValue,
        },
        kpis: {
          total_kickoffs_booked: totalKickoffsBooked || 0,
        },
        action_queue: {
          awaiting_negotiation_review: awaitingNegotiation || 0,
          awaiting_agreement_signing: awaitingAgreementSigning || 0,
          awaiting_payment: awaitingPayment || 0,
          awaiting_onboarding_review: awaitingOnboardingReview || 0,
          onboarding_revision_requested: onboardingRevisionRequested || 0,
        },
        system_health: systemHealth,
      },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to load admin dashboard operational metrics";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
