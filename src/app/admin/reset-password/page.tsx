"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Lock, ShieldCheck, Check, X, ArrowRight, CheckCircle2 } from "lucide-react";
import { validatePasswordStrength } from "@/lib/auth/password-policy";
import { createClient } from "@/lib/supabase/client";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [sessionReady, setSessionReady] = useState(false);
  const router = useRouter();

  const strength = validatePasswordStrength(password);
  const passwordsMatch = password.length > 0 && password === confirmPassword;

  useEffect(() => {
    // Check if recovery session is active
    const supabase = createClient();
    supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY" || event === "SIGNED_IN") {
        setSessionReady(true);
      }
    });

    supabase.auth.getSession().then(({ data }) => {
      if (data.session) {
        setSessionReady(true);
      }
    });
  }, []);

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!strength.valid) {
      setError("Please ensure your new password satisfies all security requirements.");
      return;
    }
    if (!passwordsMatch) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/auth/recovery/confirm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(typeof data.error === "string" ? data.error : "Failed to update password.");
      }

      setSuccess(true);
      setTimeout(() => {
        router.push("/admin/login");
      }, 3000);
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
            <ShieldCheck className="w-6 h-6" />
          </div>
          <span className="font-mono text-xs text-[#C5A880] uppercase tracking-widest font-semibold mb-1">
            Jayant Web & AI Systems
          </span>
          <h1 className="font-serif text-2xl text-[#FAF7EE] font-medium">
            Set New Password
          </h1>
          <p className="text-xs text-[#B0B8C8] font-light mt-1">
            Create a hardened password for your administrator account.
          </p>
        </div>

        {error && (
          <div className="mb-6 p-3.5 bg-red-950/40 border border-red-800/50 rounded-xl text-xs text-red-300 flex items-start gap-2">
            <span>&bull;</span>
            <p>{error}</p>
          </div>
        )}

        {success ? (
          <div className="space-y-6 text-center">
            <div className="p-4 bg-emerald-950/30 border border-emerald-800/40 rounded-xl text-xs text-emerald-300 flex flex-col items-center gap-3">
              <CheckCircle2 className="w-8 h-8 text-emerald-400" />
              <p className="leading-relaxed">
                Password updated successfully! Redirecting to sign in portal...
              </p>
            </div>
            <Link
              href="/admin/login"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#C5A880] hover:bg-[#d4b992] text-[#080C16] font-semibold py-3 px-4 rounded-xl text-sm transition-colors"
            >
              Proceed to Sign In Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <form onSubmit={handleResetPassword} className="space-y-5">
            <div>
              <label className="block font-mono text-[11px] text-[#A0A8B8] uppercase tracking-wider mb-2">
                New Password
              </label>
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

            {/* Password Policy Real-time Feedback (1B.2) */}
            <div className="bg-[#080C16] border border-[#1E2638] rounded-xl p-3 space-y-2 text-xs">
              <span className="font-mono text-[10px] text-[#7A8499] uppercase tracking-wider block mb-1">
                Password Requirements
              </span>
              <div className="flex items-center gap-2">
                {strength.rules.minLength ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <X className="w-3.5 h-3.5 text-[#7A8499]" />
                )}
                <span className={strength.rules.minLength ? "text-emerald-300" : "text-[#7A8499]"}>
                  Minimum 8 characters
                </span>
              </div>
              <div className="flex items-center gap-2">
                {strength.rules.hasNumber ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <X className="w-3.5 h-3.5 text-[#7A8499]" />
                )}
                <span className={strength.rules.hasNumber ? "text-emerald-300" : "text-[#7A8499]"}>
                  At least 1 number (0-9)
                </span>
              </div>
              <div className="flex items-center gap-2">
                {strength.rules.hasSpecial ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <X className="w-3.5 h-3.5 text-[#7A8499]" />
                )}
                <span className={strength.rules.hasSpecial ? "text-emerald-300" : "text-[#7A8499]"}>
                  At least 1 special character (!@#$%^&*...)
                </span>
              </div>
            </div>

            <div>
              <label className="block font-mono text-[11px] text-[#A0A8B8] uppercase tracking-wider mb-2">
                Confirm New Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-[#7A8499] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-[#080C16] border border-[#1E2638] rounded-xl pl-10 pr-4 py-3 text-sm text-[#FAF7EE] placeholder-[#505A70] focus:outline-none focus:border-[#C5A880] transition-colors font-sans"
                />
              </div>
              {confirmPassword.length > 0 && !passwordsMatch && (
                <span className="text-[11px] text-red-400 mt-1.5 block">
                  Passwords do not match
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={loading || !strength.valid || !passwordsMatch}
              className="w-full bg-[#C5A880] hover:bg-[#d4b992] text-[#080C16] font-semibold py-3 px-4 rounded-xl text-sm transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 mt-6 shadow-lg shadow-[#C5A880]/10"
            >
              {loading ? "Updating Password..." : "Save Hardened Password"}
              {!loading && <ArrowRight className="w-4 h-4" />}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
