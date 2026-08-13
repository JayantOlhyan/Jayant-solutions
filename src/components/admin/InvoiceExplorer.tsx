"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  FileText,
  Search,
  Download,
  ExternalLink,
  RotateCcw,
  CheckCircle2,
  Clock,
  XCircle,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  Receipt,
  DollarSign,
} from "lucide-react";

interface InvoiceRecord {
  id: string;
  invoice_number: string;
  subtotal: number;
  tax_amount: number;
  total_amount: number;
  status: string;
  due_date: string;
  paid_at: string | null;
  created_at: string;
  agreements?: {
    id: string;
    proposal_id: string;
    proposals?: {
      id: string;
      title: string;
      clients?: {
        name: string;
        company_name?: string | null;
        email: string;
        phone?: string | null;
      };
    };
  };
  payments?: Array<{
    id: string;
    razorpay_link_id?: string;
    razorpay_payment_id?: string;
    amount: number;
    currency: string;
    status: string;
    payment_url?: string;
    created_at: string;
  }>;
}

export default function InvoiceExplorer() {
  const [invoices, setInvoices] = useState<InvoiceRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  // Refund Modal State
  const [refundModalOpen, setRefundModalOpen] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState<InvoiceRecord | null>(null);
  const [refundAmount, setRefundAmount] = useState<string>("");
  const [refundReason, setRefundReason] = useState<string>("");
  const [refundLoading, setRefundLoading] = useState(false);
  const [refundError, setRefundError] = useState<string | null>(null);
  const [refundSuccess, setRefundSuccess] = useState<string | null>(null);

  const fetchInvoices = useCallback(async () => {
    setLoading(true);
    try {
      const query = new URLSearchParams({
        search,
        status: statusFilter,
        page: String(page),
        limit: "8",
      });
      const res = await fetch(`/api/admin/invoices?${query.toString()}`);
      const data = await res.json();

      if (data.success) {
        setInvoices(data.invoices || []);
        setTotalPages(data.pagination.totalPages || 1);
        setTotalCount(data.pagination.total || 0);
      }
    } catch {
      // Fallback
    } finally {
      setLoading(false);
    }
  }, [search, statusFilter, page]);

  useEffect(() => {
    fetchInvoices();
  }, [fetchInvoices]);

  const handleOpenRefund = (inv: InvoiceRecord) => {
    setSelectedInvoice(inv);
    setRefundAmount(String(inv.total_amount));
    setRefundReason("");
    setRefundError(null);
    setRefundSuccess(null);
    setRefundModalOpen(true);
  };

  const handleProcessRefund = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedInvoice) return;

    const paidPayment = selectedInvoice.payments?.find((p) => p.status === "PAID") || selectedInvoice.payments?.[0];
    if (!paidPayment) {
      setRefundError("No associated payment record found for this invoice.");
      return;
    }

    setRefundLoading(true);
    setRefundError(null);

    try {
      const res = await fetch("/api/admin/payments/refund", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          payment_id: paidPayment.id,
          amount: parseFloat(refundAmount) || undefined,
          reason: refundReason.trim(),
        }),
      });

      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.error || "Refund request failed");
      }

      setRefundSuccess(json.message);
      setTimeout(() => {
        setRefundModalOpen(false);
        fetchInvoices();
      }, 2000);
    } catch (err: unknown) {
      setRefundError(err instanceof Error ? err.message : "Refund execution error");
    } finally {
      setRefundLoading(false);
    }
  };

  const statusBadge = (status: string) => {
    switch (status.toUpperCase()) {
      case "PAID":
        return (
          <span className="inline-flex items-center gap-1 font-mono text-[10px] px-2.5 py-1 rounded bg-emerald-950/40 text-emerald-400 border border-emerald-800/40 font-semibold">
            <CheckCircle2 className="w-3 h-3" /> PAID
          </span>
        );
      case "ISSUED":
        return (
          <span className="inline-flex items-center gap-1 font-mono text-[10px] px-2.5 py-1 rounded bg-amber-950/40 text-amber-300 border border-amber-800/40 font-semibold">
            <Clock className="w-3 h-3" /> ISSUED
          </span>
        );
      case "CANCELLED":
      case "REFUNDED":
        return (
          <span className="inline-flex items-center gap-1 font-mono text-[10px] px-2.5 py-1 rounded bg-red-950/40 text-red-300 border border-red-800/40 font-semibold">
            <XCircle className="w-3 h-3" /> {status}
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 font-mono text-[10px] px-2.5 py-1 rounded bg-[#080C16] text-[#A0A8B8] border border-[#1E2638]">
            {status}
          </span>
        );
    }
  };

  return (
    <div className="bg-[#0D1322] border border-[#1E2638] rounded-xl p-6 mb-12">
      {/* Header & Title */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="font-serif text-xl font-normal text-[#FAF7EE] flex items-center gap-2">
            <Receipt className="w-5 h-5 text-[#C5A880]" />
            Invoice Management & GST Audit Explorer (6B.6)
          </h2>
          <p className="text-xs text-[#7A8499] mt-0.5">
            Search tax invoices, download Rule 46 GST PDFs, track Razorpay settlement statuses, and trigger refunds.
          </p>
        </div>
        <span className="font-mono text-xs text-[#C5A880] bg-[#C5A880]/10 border border-[#C5A880]/30 px-3 py-1.5 rounded-lg">
          {totalCount} Total Invoices
        </span>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col md:flex-row items-center gap-3 mb-6">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-[#7A8499] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            placeholder="Search by invoice number (e.g. INV-2026-1001)..."
            className="w-full bg-[#080C16] border border-[#1E2638] rounded-xl pl-10 pr-4 py-2 text-xs text-[#FAF7EE] placeholder-[#505A70] focus:outline-none focus:border-[#C5A880] transition-colors font-mono"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
          {["ALL", "PAID", "ISSUED", "DRAFT", "CANCELLED"].map((st) => (
            <button
              key={st}
              onClick={() => {
                setStatusFilter(st);
                setPage(1);
              }}
              className={`font-mono text-[11px] px-3 py-1.5 rounded-lg border transition-colors cursor-pointer ${
                statusFilter === st
                  ? "bg-[#C5A880] text-[#080C16] border-[#C5A880] font-semibold"
                  : "bg-[#080C16] text-[#A0A8B8] border-[#1E2638] hover:border-[#2A3650] hover:text-[#FAF7EE]"
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Invoices Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[#1E2638] text-[10px] font-mono text-[#7A8499] uppercase tracking-wider">
              <th className="py-3 px-4">Invoice #</th>
              <th className="py-3 px-4">Client / Company</th>
              <th className="py-3 px-4">Taxable / GST</th>
              <th className="py-3 px-4">Total Amount</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1E2638]/50 text-xs">
            {loading ? (
              <tr>
                <td colSpan={6} className="text-center py-10 text-[#7A8499] font-mono">
                  Loading invoices and payment records...
                </td>
              </tr>
            ) : invoices.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center py-10 text-[#7A8499]">
                  No matching tax invoices found.
                </td>
              </tr>
            ) : (
              invoices.map((inv) => {
                const client = inv.agreements?.proposals?.clients;
                const paidPayment = inv.payments?.find((p) => p.status === "PAID");
                const activePayment = inv.payments?.[0];

                return (
                  <tr key={inv.id} className="hover:bg-[#080C16]/50 transition-colors">
                    <td className="py-3 px-4">
                      <span className="font-mono font-medium text-[#FAF7EE] block">
                        #{inv.invoice_number}
                      </span>
                      <span className="font-mono text-[10px] text-[#7A8499]">
                        {new Date(inv.created_at).toLocaleDateString("en-IN")}
                      </span>
                    </td>

                    <td className="py-3 px-4">
                      <span className="font-medium text-[#FAF7EE] block">
                        {client?.name || "Client"}
                      </span>
                      <span className="text-[11px] text-[#7A8499] block truncate max-w-[200px]">
                        {client?.company_name || client?.email || "N/A"}
                      </span>
                    </td>

                    <td className="py-3 px-4 font-mono text-[11px]">
                      <span className="text-[#A0A8B8]">₹{inv.subtotal.toLocaleString("en-IN")}</span>
                      <span className="text-[10px] text-[#7A8499] block">SAC: 998313</span>
                    </td>

                    <td className="py-3 px-4 font-mono font-semibold text-[#FAF7EE]">
                      ₹{inv.total_amount.toLocaleString("en-IN")}
                    </td>

                    <td className="py-3 px-4">{statusBadge(inv.status)}</td>

                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {/* Download PDF Button */}
                        <a
                          href={`/api/invoice/${inv.id}/download`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg bg-[#080C16] border border-[#1E2638] hover:border-[#C5A880] text-[#A0A8B8] hover:text-[#C5A880] transition-colors"
                          title="Download GST PDF Invoice"
                        >
                          <Download className="w-3.5 h-3.5" />
                        </a>

                        {/* Payment Link (if Issued) */}
                        {activePayment?.payment_url && (
                          <a
                            href={activePayment.payment_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg bg-[#080C16] border border-[#1E2638] hover:border-blue-400 text-[#A0A8B8] hover:text-blue-400 transition-colors"
                            title="Open Razorpay Payment URL"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}

                        {/* Refund Button (if Paid) */}
                        {inv.status === "PAID" && (
                          <button
                            onClick={() => handleOpenRefund(inv)}
                            className="p-1.5 rounded-lg bg-[#080C16] border border-amber-800/40 hover:border-amber-500 text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
                            title="Issue Refund (5A.10)"
                          >
                            <RotateCcw className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between border-t border-[#1E2638] pt-4 mt-4 text-xs font-mono text-[#7A8499]">
          <span>
            Page {page} of {totalPages}
          </span>
          <div className="flex items-center gap-2">
            <button
              disabled={page <= 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="p-1.5 rounded-lg bg-[#080C16] border border-[#1E2638] disabled:opacity-30 hover:border-[#C5A880] text-[#FAF7EE] transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              disabled={page >= totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              className="p-1.5 rounded-lg bg-[#080C16] border border-[#1E2638] disabled:opacity-30 hover:border-[#C5A880] text-[#FAF7EE] transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Refund Modal */}
      {refundModalOpen && selectedInvoice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-md bg-[#0D1322] border border-[#1E2638] rounded-2xl p-6 shadow-2xl relative text-[#FAF7EE] font-sans">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-amber-950/40 border border-amber-800/50 flex items-center justify-center text-amber-400">
                <RotateCcw className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-medium text-[#FAF7EE]">
                  Issue Administrative Refund
                </h3>
                <p className="text-xs text-[#7A8499]">
                  Invoice #{selectedInvoice.invoice_number} &bull; Max ₹{selectedInvoice.total_amount}
                </p>
              </div>
            </div>

            {refundError && (
              <div className="mb-4 p-3 bg-red-950/40 border border-red-800/50 rounded-xl text-xs text-red-300 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <p>{refundError}</p>
              </div>
            )}

            {refundSuccess ? (
              <div className="p-4 bg-emerald-950/40 border border-emerald-800/50 rounded-xl text-xs text-emerald-300 flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                <p>{refundSuccess}</p>
              </div>
            ) : (
              <form onSubmit={handleProcessRefund} className="space-y-4">
                <div>
                  <label className="block font-mono text-[11px] text-[#A0A8B8] uppercase tracking-wider mb-2">
                    Refund Amount (INR)
                  </label>
                  <div className="relative">
                    <DollarSign className="w-4 h-4 text-[#7A8499] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="number"
                      step="0.01"
                      min="1"
                      max={selectedInvoice.total_amount}
                      required
                      value={refundAmount}
                      onChange={(e) => setRefundAmount(e.target.value)}
                      className="w-full bg-[#080C16] border border-[#1E2638] rounded-xl pl-10 pr-4 py-2.5 text-sm font-mono text-[#FAF7EE] focus:outline-none focus:border-[#C5A880]"
                    />
                  </div>
                  <span className="text-[10px] text-[#7A8499] font-mono mt-1 block">
                    Full or partial amount in Rupees (Paise conversion handled automatically).
                  </span>
                </div>

                <div>
                  <label className="block font-mono text-[11px] text-[#A0A8B8] uppercase tracking-wider mb-2">
                    Reason for Refund
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={refundReason}
                    onChange={(e) => setRefundReason(e.target.value)}
                    placeholder="Enter compliance reason (e.g., Client requested scope reduction prior to kickoff execution)..."
                    className="w-full bg-[#080C16] border border-[#1E2638] rounded-xl p-3 text-xs text-[#FAF7EE] focus:outline-none focus:border-[#C5A880] resize-none"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setRefundModalOpen(false)}
                    className="text-xs text-[#A0A8B8] hover:text-[#FAF7EE] transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={refundLoading}
                    className="bg-amber-600 hover:bg-amber-500 text-white font-semibold py-2.5 px-4 rounded-xl text-xs transition-colors disabled:opacity-50 flex items-center gap-2 cursor-pointer"
                  >
                    {refundLoading ? "Processing Refund..." : "Execute Razorpay Refund"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
