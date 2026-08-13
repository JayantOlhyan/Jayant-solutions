"use client";

import React, { useState } from "react";
import Link from "next/link";
import { KeyRound, Mail, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/auth/recovery/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(typeof data.error === "string" ? data.error : "Failed to process recovery request.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#080C16] text-[#FAF7EE] flex items-center justify-center px-4 font-sans selection:bg-[#C5A880]/20 selection:text-[#C5A880]">
      <div className="w-full max-w-md bg-[#0D1322] border border-[#1E2638] rounded-2xl p-8 shadow-2xl">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-12 h-12 rounded-full bg-[#C5A880]/10 border border-[#C5A880]/30 flex items-center justify-center mb-4 text-[#C5A880]">
            <KeyRound className="w-6 h-6" />
          </div>
          <span className="font-mono text-xs text-[#C5A880] uppercase tracking-widest font-semibold mb-1">
            Jayant Web & AI Systems
          </span>
          <h1 className="font-serif text-2xl text-[#FAF7EE] font-medium">
            Password Recovery
          </h1>
          <p className="text-xs text-[#B0B8C8] font-light mt-1">
            Enter your admin email to receive a secure password recovery token link.
          </p>
        </div>

        {error && (
          <div className="mb-6 p-3.5 bg-red-950/40 border border-red-800/50 rounded-xl text-xs text-red-300 flex items-start gap-2">
            <span>&bull;</span>
            <p>{error}</p>
          </div>
        )}

        {submitted ? (
          <div className="space-y-6 text-center">
            <div className="p-4 bg-emerald-950/30 border border-emerald-800/40 rounded-xl text-xs text-emerald-300 flex flex-col items-center gap-3">
              <CheckCircle2 className="w-8 h-8 text-emerald-400" />
              <p className="leading-relaxed">
                If an administrative account exists for <strong>{email}</strong>, a secure recovery link has been dispatched to your inbox.
              </p>
            </div>
            <Link
              href="/admin/login"
              className="w-full inline-flex items-center justify-center gap-2 border border-[#1E2638] hover:border-[#2A3650] bg-[#080C16] text-[#FAF7EE] font-medium py-3 px-4 rounded-xl text-xs transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Return to Admin Sign In
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block font-mono text-[11px] text-[#A0A8B8] uppercase tracking-wider mb-2">
                Admin Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-[#7A8499] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="hello@jayantolhyan.in"
                  className="w-full bg-[#080C16] border border-[#1E2638] rounded-xl pl-10 pr-4 py-3 text-sm text-[#FAF7EE] placeholder-[#505A70] focus:outline-none focus:border-[#C5A880] transition-colors font-sans"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#C5A880] hover:bg-[#d4b992] text-[#080C16] font-semibold py-3 px-4 rounded-xl text-sm transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 mt-6 shadow-lg shadow-[#C5A880]/10"
            >
              {loading ? "Dispatching Recovery Link..." : "Send Recovery Link"}
              {!loading && <ArrowRight className="w-4 h-4" />}
            </button>

            <div className="text-center pt-2">
              <Link
                href="/admin/login"
                className="text-xs text-[#A0A8B8] hover:text-[#FAF7EE] transition-colors inline-flex items-center gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back to Sign In
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
