import React from "react";
import { requireAdmin } from "@/lib/auth/admin-guard";
import { ShieldCheck, LogOut, FileText, DollarSign, Users, Calendar } from "lucide-react";
import Link from "next/link";

export default async function AdminDashboardPage() {
  const admin = await requireAdmin();

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

          <form action="/api/auth/logout" method="POST">
            <button
              type="submit"
              className="text-xs text-[#A0A8B8] hover:text-[#FAF7EE] border border-[#1E2638] hover:border-[#2A3650] bg-[#080C16] px-3.5 py-2 rounded-lg transition-colors flex items-center gap-2"
            >
              <LogOut className="w-3.5 h-3.5" />
              Sign Out
            </button>
          </form>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-10">
          <h1 className="font-serif text-3xl font-normal text-[#FAF7EE] mb-2">
            Operations & Commercial Control
          </h1>
          <p className="text-sm text-[#B0B8C8] font-light">
            Manage proposals, review package selections, override negotiations, and track kickoff bookings.
          </p>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Active Proposals", count: "0", icon: FileText },
            { label: "Pending Negotiations", count: "0", icon: DollarSign },
            { label: "Signed Agreements", count: "0", icon: Users },
            { label: "Upcoming Kickoffs", count: "0", icon: Calendar },
          ].map((stat, idx) => (
            <div key={idx} className="bg-[#0D1322] border border-[#1E2638] rounded-xl p-6">
              <div className="flex items-center justify-between mb-4 text-[#C5A880]">
                <stat.icon className="w-5 h-5" />
                <span className="font-mono text-2xl font-medium text-[#FAF7EE]">{stat.count}</span>
              </div>
              <span className="font-mono text-xs text-[#A0A8B8] uppercase tracking-wider block">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
