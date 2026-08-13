"use client";

import React, { useState, useEffect } from "react";
import { ShieldCheck, Smartphone, Check, Copy, AlertCircle, X, ShieldAlert } from "lucide-react";

interface MfaFactor {
  id: string;
  friendlyName: string;
  createdAt: string;
}

export default function MfaSettingsModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [statusLoading, setStatusLoading] = useState(true);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [isSuperAdmin, setIsSuperAdmin] = useState(false);
  const [factors, setFactors] = useState<MfaFactor[]>([]);

  // Enrollment State
  const [enrolling, setEnrolling] = useState(false);
  const [enrollData, setEnrollData] = useState<{
    factorId: string;
    qrCode: string;
    secret: string;
    uri: string;
  } | null>(null);
  const [verificationCode, setVerificationCode] = useState("");
  const [verifyLoading, setVerifyLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copiedSecret, setCopiedSecret] = useState(false);

  const fetchStatus = async () => {
    setStatusLoading(true);
    try {
      const res = await fetch("/api/auth/mfa/status");
      const json = await res.json();
      if (json.success && json.data) {
        setIsEnrolled(json.data.isMfaEnrolled);
        setIsSuperAdmin(json.data.isSuperAdmin);
        setFactors(json.data.factors || []);
      }
    } catch {
      // Fallback
    } finally {
      setStatusLoading(false);
    }
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  const handleStartEnroll = async () => {
    setError(null);
    setEnrolling(true);
    try {
      const res = await fetch("/api/auth/mfa/enroll", { method: "POST" });
      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.error || "Failed to start enrollment");
      }
      setEnrollData({
        factorId: json.factorId,
        qrCode: json.qrCode,
        secret: json.secret,
        uri: json.uri,
      });
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Enrollment error");
      setEnrolling(false);
    }
  };

  const handleVerifyEnrollment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!enrollData) return;
    setVerifyLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/auth/mfa/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          factorId: enrollData.factorId,
          code: verificationCode.trim(),
        }),
      });

      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.error || "Verification failed");
      }

      // Success
      setEnrollData(null);
      setEnrolling(false);
      setVerificationCode("");
      await fetchStatus();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Verification error");
    } finally {
      setVerifyLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSecret(true);
    setTimeout(() => setCopiedSecret(false), 2000);
  };

  return (
    <>
      <button
        onClick={() => {
          setIsOpen(true);
          fetchStatus();
        }}
        className="text-xs text-[#C5A880] hover:text-[#FAF7EE] border border-[#C5A880]/30 hover:border-[#C5A880] bg-[#C5A880]/10 px-3.5 py-2 rounded-lg transition-colors flex items-center gap-2 font-mono"
      >
        <Smartphone className="w-3.5 h-3.5" />
        {isEnrolled ? "2FA: Enforced" : "Configure MFA"}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-lg bg-[#0D1322] border border-[#1E2638] rounded-2xl p-6 shadow-2xl relative text-[#FAF7EE] font-sans">
            <button
              onClick={() => {
                setIsOpen(false);
                setEnrolling(false);
                setEnrollData(null);
                setError(null);
              }}
              className="absolute top-4 right-4 text-[#7A8499] hover:text-[#FAF7EE] transition-colors p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#C5A880]/10 border border-[#C5A880]/30 flex items-center justify-center text-[#C5A880]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-medium text-[#FAF7EE]">
                  Multi-Factor Authentication (MFA)
                </h3>
                <p className="text-xs text-[#7A8499]">
                  Hardware / TOTP Authenticator App Security Settings
                </p>
              </div>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-950/40 border border-red-800/50 rounded-xl text-xs text-red-300 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <p>{error}</p>
              </div>
            )}

            {statusLoading ? (
              <div className="py-8 text-center text-xs text-[#7A8499]">
                Checking authentication assurance level...
              </div>
            ) : !enrolling ? (
              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-[#080C16] border border-[#1E2638] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {isEnrolled ? (
                      <div className="w-8 h-8 rounded-lg bg-emerald-950/40 border border-emerald-800/50 flex items-center justify-center text-emerald-400">
                        <Check className="w-4 h-4" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-lg bg-amber-950/40 border border-amber-800/50 flex items-center justify-center text-amber-400">
                        <ShieldAlert className="w-4 h-4" />
                      </div>
                    )}
                    <div>
                      <span className="text-sm font-medium block">
                        {isEnrolled ? "Two-Factor Authentication Active" : "Two-Factor Authentication Inactive"}
                      </span>
                      <span className="text-xs text-[#7A8499]">
                        {isEnrolled
                          ? "Your account requires a 6-digit TOTP code on sign in."
                          : "Protect your account with an Authenticator app (Google Authenticator, 1Password, Authy)."}
                      </span>
                    </div>
                  </div>
                  <span
                    className={`font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded font-semibold ${
                      isEnrolled
                        ? "bg-emerald-950/50 text-emerald-300 border border-emerald-800/50"
                        : "bg-amber-950/50 text-amber-300 border border-amber-800/50"
                    }`}
                  >
                    {isEnrolled ? "AAL2 Enforced" : "AAL1"}
                  </span>
                </div>

                {isEnrolled && (
                  <div className="space-y-2">
                    <span className="font-mono text-[11px] text-[#A0A8B8] uppercase tracking-wider block">
                      Enrolled Factors
                    </span>
                    {factors.map((f) => (
                      <div
                        key={f.id}
                        className="p-3 bg-[#080C16] border border-[#1E2638] rounded-xl flex items-center justify-between text-xs"
                      >
                        <div className="flex items-center gap-2">
                          <Smartphone className="w-4 h-4 text-[#C5A880]" />
                          <span>{f.friendlyName}</span>
                        </div>
                        <span className="font-mono text-[10px] text-[#7A8499]">
                          ID: {f.id.slice(0, 8)}...
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    onClick={handleStartEnroll}
                    className="bg-[#C5A880] hover:bg-[#d4b992] text-[#080C16] font-semibold py-2.5 px-4 rounded-xl text-xs transition-colors flex items-center gap-2"
                  >
                    <Smartphone className="w-4 h-4" />
                    {isEnrolled ? "Enroll Additional Device" : "Setup Authenticator App (TOTP)"}
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-5">
                <p className="text-xs text-[#B0B8C8] leading-relaxed">
                  1. Scan this QR code in your Authenticator app (e.g. Google Authenticator, 1Password, Authy), or manually copy the secret key below.
                </p>

                {enrollData?.qrCode && (
                  <div className="flex flex-col items-center justify-center p-4 bg-white rounded-xl max-w-[200px] mx-auto shadow-lg">
                    {/* SVG QR Code from Supabase */}
                    <div
                      className="w-full h-full flex items-center justify-center"
                      dangerouslySetInnerHTML={{ __html: enrollData.qrCode }}
                    />
                  </div>
                )}

                {enrollData?.secret && (
                  <div>
                    <label className="block font-mono text-[10px] text-[#A0A8B8] uppercase tracking-wider mb-1.5">
                      Manual Secret Key
                    </label>
                    <div className="flex items-center gap-2 bg-[#080C16] border border-[#1E2638] rounded-xl px-3 py-2">
                      <code className="font-mono text-xs text-[#C5A880] flex-1 break-all select-all">
                        {enrollData.secret}
                      </code>
                      <button
                        type="button"
                        onClick={() => copyToClipboard(enrollData.secret)}
                        className="text-[#7A8499] hover:text-[#FAF7EE] transition-colors p-1"
                        title="Copy Secret"
                      >
                        {copiedSecret ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                )}

                <form onSubmit={handleVerifyEnrollment} className="space-y-4 pt-2">
                  <div>
                    <label className="block font-mono text-[11px] text-[#A0A8B8] uppercase tracking-wider mb-2">
                      2. Enter 6-Digit Code from App
                    </label>
                    <input
                      type="text"
                      maxLength={6}
                      required
                      autoFocus
                      value={verificationCode}
                      onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, ""))}
                      placeholder="123456"
                      className="w-full bg-[#080C16] border border-[#1E2638] rounded-xl py-2.5 text-center text-lg tracking-[0.3em] font-mono text-[#FAF7EE] placeholder-[#505A70] focus:outline-none focus:border-[#C5A880]"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setEnrolling(false);
                        setEnrollData(null);
                      }}
                      className="text-xs text-[#A0A8B8] hover:text-[#FAF7EE] transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={verifyLoading || verificationCode.length !== 6}
                      className="bg-[#C5A880] hover:bg-[#d4b992] text-[#080C16] font-semibold py-2.5 px-4 rounded-xl text-xs transition-colors disabled:opacity-50"
                    >
                      {verifyLoading ? "Verifying..." : "Verify & Enable MFA"}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
