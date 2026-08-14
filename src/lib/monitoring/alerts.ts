import { createAdminClient } from "@/lib/supabase/admin";
import { logAdminAction } from "@/lib/auth/audit";
import { logger } from "@/lib/logger";

export interface PaymentFailureMetrics {
  totalPayments: number;
  failedPayments: number;
  failureRate: number; // percentage, e.g. 7.5
  alertTriggered: boolean;
}

/**
 * Checks rolling payment failure rate and alerts when exceeding threshold (Checklist 11B.6).
 * Threshold: Failure rate > 5% over recent payments (min 3 failures required).
 */
export async function checkPaymentFailureRateAlert(thresholdPercent = 5.0): Promise<PaymentFailureMetrics> {
  const adminDb = createAdminClient();

  try {
    // 1. Fetch recent payment transactions (last 50 payments)
    const { data: recentPayments, error } = await adminDb
      .from("payments")
      .select("id, status, created_at")
      .order("created_at", { ascending: false })
      .limit(50);

    if (error || !recentPayments || recentPayments.length === 0) {
      return {
        totalPayments: 0,
        failedPayments: 0,
        failureRate: 0,
        alertTriggered: false,
      };
    }

    const total = recentPayments.length;
    const failedCount = recentPayments.filter((p) => p.status === "FAILED").length;
    const failureRate = parseFloat(((failedCount / total) * 100).toFixed(2));

    const alertTriggered = total >= 5 && failedCount >= 3 && failureRate > thresholdPercent;

    if (alertTriggered) {
      logger.error(`🚨 HIGH PAYMENT FAILURE RATE DETECTED: ${failureRate}% (${failedCount}/${total} failed)`, {
        route: "monitoring/payment_failures",
        failureRate,
        failedCount,
        total,
      });

      await logAdminAction({
        actorId: "system",
        action: "ALERT_PAYMENT_FAILURE_RATE",
        targetEntity: "payments",
        metadata: {
          failureRate,
          failedCount,
          totalWindow: total,
          thresholdPercent,
        },
      });
    }

    return {
      totalPayments: total,
      failedPayments: failedCount,
      failureRate,
      alertTriggered,
    };
  } catch (err: unknown) {
    logger.warn("Failed to compute payment failure rate alert:", { error: String(err) });
    return {
      totalPayments: 0,
      failedPayments: 0,
      failureRate: 0,
      alertTriggered: false,
    };
  }
}
