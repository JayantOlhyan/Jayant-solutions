import Razorpay from "razorpay";

export type RazorpayMode = "TEST" | "LIVE" | "UNCONFIGURED";

/**
 * Determines whether the configured Razorpay keys are TEST mode or LIVE mode (5A.2).
 */
export function getRazorpayKeyMode(): RazorpayMode {
  const key_id = process.env.RAZORPAY_KEY_ID;
  if (!key_id) return "UNCONFIGURED";
  if (key_id.startsWith("rzp_test_")) return "TEST";
  if (key_id.startsWith("rzp_live_")) return "LIVE";
  return "TEST"; // Default safe fallback
}

export function isTestKey(): boolean {
  return getRazorpayKeyMode() === "TEST";
}

export function isLiveKey(): boolean {
  return getRazorpayKeyMode() === "LIVE";
}

/**
 * Converts Indian Rupee amounts to smallest currency unit (Paise) with integer precision (5A.6).
 * Minimum Razorpay transaction amount is ₹1.00 (100 paise).
 */
export function toPaise(rupees: number): number {
  if (typeof rupees !== "number" || isNaN(rupees) || rupees < 0) {
    throw new Error(`Invalid currency amount: ${rupees}`);
  }
  // Math.round avoids IEEE-754 floating point precision issues (e.g. 19.99 * 100 = 1998.9999999999998)
  return Math.round(rupees * 100);
}

/**
 * Converts Paise to Indian Rupees with 2 decimal precision.
 */
export function fromPaise(paise: number): number {
  if (typeof paise !== "number" || isNaN(paise) || paise < 0) {
    throw new Error(`Invalid paise amount: ${paise}`);
  }
  return Number((paise / 100).toFixed(2));
}

/**
 * Formats Rupee amounts in standard Indian numbering format (e.g. ₹1,45,000.00).
 */
export function formatINR(rupees: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(rupees);
}

/**
 * Returns an authenticated Razorpay SDK client instance.
 */
export function getRazorpayClient(): Razorpay {
  const key_id = process.env.RAZORPAY_KEY_ID;
  const key_secret = process.env.RAZORPAY_KEY_SECRET;

  if (!key_id || !key_secret) {
    throw new Error("Razorpay credentials (RAZORPAY_KEY_ID / RAZORPAY_KEY_SECRET) are not configured.");
  }

  return new Razorpay({
    key_id,
    key_secret,
  });
}

export interface RazorpayRefundResponse {
  id: string;
  entity: string;
  amount: number;
  currency: string;
  payment_id: string;
  status: string;
  notes?: Record<string, string>;
  created_at: number;
}

/**
 * Dispatches an administrative refund request to Razorpay (5A.10).
 */
export async function createRazorpayRefund(
  paymentId: string,
  amountInRupees?: number,
  notes: Record<string, string> = {}
): Promise<RazorpayRefundResponse> {
  const razorpay = getRazorpayClient();
  const options: Record<string, unknown> = {
    notes,
  };

  if (amountInRupees && amountInRupees > 0) {
    options.amount = toPaise(amountInRupees);
  }

  // Calls Razorpay Payments Refund API
  const response = await razorpay.payments.refund(paymentId, options);
  return response as RazorpayRefundResponse;
}
