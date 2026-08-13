import React from "react";
import { requireAdmin } from "@/lib/auth/admin-guard";
import { createAdminClient } from "@/lib/supabase/admin";
import { ShieldCheck, LogOut, FileText, DollarSign, Users, Calendar, CheckCircle2, Clock } from "lucide-react";
import MfaSettingsModal from "@/components/admin/MfaSettingsModal";

export default async function AdminDashboardPage() {
  const admin = await requireAdmin();
  const adminDb = createAdminClient();

  // 1. Fetch Metrics Server-Side
  const { count: totalProposals } = await adminDb
    .from("proposals")
    .select("*", { count: "exact", head: true });

  const { data: verifiedPayments } = await adminDb
    .from("payments")
    .select("amount")
    .eq("status", "PAID");

  let collectedRevenue = 0;
  verifiedPayments?.forEach((p) => {
    collectedRevenue += Number(p.amount || 0);
  });

  const { count: signedAgreements } = await adminDb
    .from("agreements")
    .select("*", { count: "exact", head: true })
    .eq("status", "SIGNED");

  const { count: kickoffsBooked } = await adminDb
    .from("bookings")
    .select("*", { count: "exact", head: true })
    .eq("status", "BOOKED");

  // 2. Action Items Requiring Intervention
  const { count: pendingNegotiations } = await adminDb
    .from("negotiations")
    .select("*", { count: "exact", head: true })
    .eq("status", "SUBMITTED");

  const { count: pendingAgreements } = await adminDb
    .from("agreements")
    .select("*", { count: "exact", head: true })
    .eq("status", "SENT");

  const { count: pendingPayments } = await adminDb
    .from("invoices")
    .select("*", { count: "exact", head: true })
    .in("status", ["ISSUED", "DRAFT"]);

  const { count: pendingOnboardings } = await adminDb
    .from("onboarding")
    .select("*", { count: "exact", head: true })
    .eq("status", "SUBMITTED");

  const { count: revisionsRequested } = await adminDb
    .from("onboarding")
    .select("*", { count: "exact", head: true })
    .eq("status", "REVISION_REQUESTED");

  return (
    <div className="min-h-screen bg-[#080C16] text-[#FAF7EE] font-sans selection:bg-[#C5A880]/20 selection:text-[#C5A880]">
      {/* Admin Top Navigation */}
      <nav className="border-b border-[#1E2638] bg-[#0D1322]/80 backdrop-blur-md sticky top-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#C5A880]/10 border border-[#C5A880]/30 flex items-center justify-center text-[#C5A880]">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <span className="font-serif text-lg font-medium text-[#FAF7EE] block leading-none">
                Jayant Systems Admin
              </span>
              <span className="font-mono text-[10px] text-[#7A8499]">
                Authorized: {admin.email}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <MfaSettingsModal />
            <form action="/api/auth/logout" method="POST">
              <button
                type="submit"
                className="text-xs text-[#A0A8B8] hover:text-[#FAF7EE] border border-[#1E2638] hover:border-[#2A3650] bg-[#080C16] px-3.5 py-2 rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" />
                Sign Out
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-10">
          <h1 className="font-serif text-3xl font-normal text-[#FAF7EE] mb-2">
            Operations & Commercial Control
          </h1>
          <p className="text-sm text-[#B0B8C8] font-light">
            Manage proposals, review package selections, override negotiations, track kickoff bookings, and audit logs.
          </p>
        </div>

        {/* Financial & Operational KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Active Proposals", count: totalProposals || 0, icon: FileText },
            { label: "Collected Revenue (INR)", count: `₹${collectedRevenue.toLocaleString("en-IN")}`, icon: DollarSign },
            { label: "Signed Agreements", count: signedAgreements || 0, icon: Users },
            { label: "Kickoffs Booked", count: kickoffsBooked || 0, icon: Calendar },
          ].map((stat, idx) => (
            <div key={idx} className="bg-[#0D1322] border border-[#1E2638] rounded-xl p-6">
              <div className="flex items-center justify-between mb-4 text-[#C5A880]">
                <stat.icon className="w-5 h-5" />
                <span className="font-mono text-xl font-medium text-[#FAF7EE]">{stat.count}</span>
              </div>
              <span className="font-mono text-xs text-[#A0A8B8] uppercase tracking-wider block">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Prioritized Operational Queue (Next Actions Requiring Admin Intervention) */}
        <div className="bg-[#0D1322] border border-[#1E2638] rounded-xl p-6 mb-12">
          <h2 className="font-serif text-xl font-normal text-[#FAF7EE] mb-6 flex items-center gap-2">
            <Clock className="w-5 h-5 text-[#C5A880]" />
            Next Actions (Requires Admin Intervention)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-[#080C16] border border-[#1E2638] flex items-center justify-between">
              <div>
                <span className="text-sm font-medium text-[#FAF7EE] block">Awaiting Negotiation Review</span>
                <span className="text-xs text-[#7A8499]">Client proposed terms</span>
              </div>
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#C5A880]/10 text-[#C5A880] border border-[#C5A880]/30 font-semibold">
                {pendingNegotiations || 0} Action Needed
              </span>
            </div>

            <div className="p-4 rounded-lg bg-[#080C16] border border-[#1E2638] flex items-center justify-between">
              <div>
                <span className="text-sm font-medium text-[#FAF7EE] block">Awaiting Agreement Signing</span>
                <span className="text-xs text-[#7A8499]">Sent to client</span>
              </div>
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/30 font-semibold">
                {pendingAgreements || 0} Pending
              </span>
            </div>

            <div className="p-4 rounded-lg bg-[#080C16] border border-[#1E2638] flex items-center justify-between">
              <div>
                <span className="text-sm font-medium text-[#FAF7EE] block">Awaiting Invoice Payment</span>
                <span className="text-xs text-[#7A8499]">Issued invoices</span>
              </div>
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30 font-semibold">
                {pendingPayments || 0} Unpaid
              </span>
            </div>

            <div className="p-4 rounded-lg bg-[#080C16] border border-[#1E2638] flex items-center justify-between">
              <div>
                <span className="text-sm font-medium text-[#FAF7EE] block">Awaiting Onboarding Review</span>
                <span className="text-xs text-[#7A8499]">Intake questionnaire submitted</span>
              </div>
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#C5A880]/10 text-[#C5A880] border border-[#C5A880]/30 font-semibold">
                {pendingOnboardings || 0} Review Needed
              </span>
            </div>

            <div className="p-4 rounded-lg bg-[#080C16] border border-[#1E2638] flex items-center justify-between">
              <div>
                <span className="text-sm font-medium text-[#FAF7EE] block">Revision Requested</span>
                <span className="text-xs text-[#7A8499]">Client updating intake</span>
              </div>
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-purple-500/10 text-purple-400 border border-purple-500/30 font-semibold">
                {revisionsRequested || 0} Revisions
              </span>
            </div>
          </div>
        </div>

        {/* System Technical Health Footer */}
        <div className="border-t border-[#1E2638] pt-6 flex items-center justify-between text-xs text-[#7A8499] font-mono">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>API & Database Operational</span>
          </div>
          <span>Fetched Mode: Current Operational Metrics</span>
        </div>
      </main>
    </div>
  );
}
