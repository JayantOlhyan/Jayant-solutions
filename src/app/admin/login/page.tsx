"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ShieldCheck, Lock, Mail, ArrowRight, Smartphone, ArrowLeft, AlertCircle } from "lucide-react";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [totpCode, setTotpCode] = useState("");
  const [mfaFactorId, setMfaFactorId] = useState<string | null>(null);
  const [step, setStep] = useState<"CREDENTIALS" | "MFA_CHALLENGE">("CREDENTIALS");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLocked, setIsLocked] = useState(false);
  const router = useRouter();

  const handlePasswordLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setIsLocked(false);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        if (res.status === 423 || data.isLocked) {
          setIsLocked(true);
        }
        throw new Error(typeof data.error === "string" ? data.error : "Login failed. Check your credentials.");
      }

      if (data.mfaRequired && data.factorId) {
        setMfaFactorId(data.factorId);
        setStep("MFA_CHALLENGE");
        return;
      }

      router.push("/admin/dashboard");
      router.refresh();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleMfaVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!mfaFactorId) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/auth/mfa/challenge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          factorId: mfaFactorId,
          code: totpCode.trim(),
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(typeof data.error === "string" ? data.error : "Invalid 6-digit authenticator code.");
      }

      router.push("/admin/dashboard");
      router.refresh();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "MFA verification failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#080C16] text-[#FAF7EE] flex items-center justify-center px-4 font-sans selection:bg-[#C5A880]/20 selection:text-[#C5A880]">
      <div className="w-full max-w-md bg-[#0D1322] border border-[#1E2638] rounded-2xl p-8 shadow-2xl">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-12 h-12 rounded-full bg-[#C5A880]/10 border border-[#C5A880]/30 flex items-center justify-center mb-4 text-[#C5A880]">
            {step === "CREDENTIALS" ? (
              <ShieldCheck className="w-6 h-6" />
            ) : (
              <Smartphone className="w-6 h-6" />
            )}
          </div>
          <span className="font-mono text-xs text-[#C5A880] uppercase tracking-widest font-semibold mb-1">
            Jayant Web & AI Systems
          </span>
          <h1 className="font-serif text-2xl text-[#FAF7EE] font-medium">
            {step === "CREDENTIALS" ? "Admin Authentication" : "Two-Factor Verification"}
          </h1>
          <p className="text-xs text-[#B0B8C8] font-light mt-1">
            {step === "CREDENTIALS"
              ? "Sign in to access proposal and commercial management controls."
              : "Enter the 6-digit security code from your Authenticator app."}
          </p>
        </div>

        {error && (
          <div
            className={`mb-6 p-3.5 rounded-xl text-xs flex items-start gap-2 ${
              isLocked
                ? "bg-amber-950/40 border border-amber-800/50 text-amber-300"
                : "bg-red-950/40 border border-red-800/50 text-red-300"
            }`}
          >
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p>{error}</p>
              {isLocked && (
                <p className="text-[11px] text-amber-400 font-mono">
                  Tip: You can use the Password Recovery link below to reset your credentials.
                </p>
              )}
            </div>
          </div>
        )}

        {step === "CREDENTIALS" ? (
          <form onSubmit={handlePasswordLogin} className="space-y-5">
            <div>
              <label className="block font-mono text-[11px] text-[#A0A8B8] uppercase tracking-wider mb-2">
                Admin Email
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

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block font-mono text-[11px] text-[#A0A8B8] uppercase tracking-wider">
                  Password
                </label>
                <Link
                  href="/admin/forgot-password"
                  className="text-xs text-[#C5A880] hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-[#7A8499] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-[#080C16] border border-[#1E2638] rounded-xl pl-10 pr-4 py-3 text-sm text-[#FAF7EE] placeholder-[#505A70] focus:outline-none focus:border-[#C5A880] transition-colors font-sans"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#C5A880] hover:bg-[#d4b992] text-[#080C16] font-semibold py-3 px-4 rounded-xl text-sm transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 mt-6 shadow-lg shadow-[#C5A880]/10 cursor-pointer"
            >
              {loading ? "Authenticating..." : "Sign In to Admin Portal"}
              {!loading && <ArrowRight className="w-4 h-4" />}
            </button>
          </form>
        ) : (
          <form onSubmit={handleMfaVerify} className="space-y-5">
            <div>
              <label className="block font-mono text-[11px] text-[#A0A8B8] uppercase tracking-wider mb-2">
                6-Digit Authenticator Code
              </label>
              <div className="relative">
                <input
                  type="text"
                  maxLength={6}
                  required
                  autoFocus
                  value={totpCode}
                  onChange={(e) => setTotpCode(e.target.value.replace(/\D/g, ""))}
                  placeholder="123456"
                  className="w-full bg-[#080C16] border border-[#1E2638] rounded-xl py-3 text-center text-xl tracking-[0.4em] font-mono text-[#FAF7EE] placeholder-[#505A70] focus:outline-none focus:border-[#C5A880] transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading || totpCode.length !== 6}
              className="w-full bg-[#C5A880] hover:bg-[#d4b992] text-[#080C16] font-semibold py-3 px-4 rounded-xl text-sm transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 mt-6 shadow-lg shadow-[#C5A880]/10 cursor-pointer"
            >
              {loading ? "Verifying Token..." : "Verify & Authorize"}
              {!loading && <ArrowRight className="w-4 h-4" />}
            </button>

            <button
              type="button"
              onClick={() => {
                setStep("CREDENTIALS");
                setTotpCode("");
                setError(null);
              }}
              className="w-full text-center text-xs text-[#A0A8B8] hover:text-[#FAF7EE] transition-colors inline-flex items-center justify-center gap-1.5 pt-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Password Sign In
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
