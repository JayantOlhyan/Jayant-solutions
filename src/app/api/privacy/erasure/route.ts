import { createAdminClient } from "@/lib/supabase/admin";
import { logAdminAction } from "@/lib/auth/audit";
import { recordEmailSuppression } from "@/lib/notifications/delivery";
import { apiSuccess, badRequest, unauthorized, internalError } from "@/lib/api-response";
import { checkRateLimit, getClientIp, createRateLimitResponse } from "@/lib/rate-limit";
import { createHash, randomUUID } from "crypto";
import { z } from "zod";

const erasureRequestSchema = z.object({
  token: z.string().min(10, "Proposal authorization token is required"),
  confirmation: z.literal("CONFIRM_ERASURE"),
  reason: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const clientIp = getClientIp(request);

    // 1. Rate Limiting (5 erasure requests per 15 minutes per IP)
    const rateLimit = await checkRateLimit(`ip:${clientIp}:privacy_erasure`, 5, 900);
    if (!rateLimit.success) {
      return createRateLimitResponse(rateLimit.resetInSeconds);
    }

    const body = await request.json();
    const parsed = erasureRequestSchema.safeParse(body);
    if (!parsed.success) {
      return badRequest("Invalid erasure request payload", parsed.error.flatten().fieldErrors);
    }

    const { token, reason = "User requested right to erasure" } = parsed.data;
    const adminDb = createAdminClient();

    // 2. Verify Authorization via Proposal Token
    const { data: proposal, error: propErr } = await adminDb
      .from("proposals")
      .select("id, client_id, token")
      .eq("token", token)
      .single();

    if (propErr || !proposal || !proposal.client_id) {
      return unauthorized("Invalid or expired authorization token.");
    }

    const clientId = proposal.client_id;
    const { data: client, error: clientErr } = await adminDb
      .from("clients")
      .select("id, name, email, phone, is_erased")
      .eq("id", clientId)
      .single();

    if (clientErr || !client) {
      return unauthorized("Associated client record not found.");
    }

    if (client.is_erased) {
      return badRequest("This client record has already been erased and anonymized.");
    }

    // 3. Generate Irreversible Pseudonymized Hash
    const idHash = createHash("sha256").update(clientId + Date.now().toString()).digest("hex").slice(0, 12);
    const anonymizedEmail = `erased-${idHash}@anonymized.invalid`;
    const originalEmail = client.email;

    // 4. Anonymize Client Profile (PII removal while maintaining relational integrity)
    const { error: clientUpdateErr } = await adminDb
      .from("clients")
      .update({
        name: `Deleted User [${idHash}]`,
        company_name: null,
        email: anonymizedEmail,
        phone: null,
        is_erased: true,
        erased_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .eq("id", clientId);

    if (clientUpdateErr) throw clientUpdateErr;

    // 5. Invalidate All Active Proposal Access Tokens (Security Credential Revocation)
    const { error: tokenRevokeErr } = await adminDb
      .from("proposals")
      .update({
        token: `revoked_${randomUUID()}`,
        updated_at: new Date().toISOString(),
      })
      .eq("client_id", clientId);

    if (tokenRevokeErr) throw tokenRevokeErr;

    // 6. Invalidate Active Onboarding Intake Drafts
    await adminDb
      .from("onboarding")
      .update({
        intake_payload: { anonymized: true, erasedAt: new Date().toISOString() },
        updated_at: new Date().toISOString(),
      })
      .eq("proposal_id", proposal.id);

    // 7. Add Original Email to Suppression List
    await recordEmailSuppression(originalEmail, "MANUAL", undefined, {
      erasureReason: "GDPR / DPDP Right to Erasure Request",
      erasedAt: new Date().toISOString(),
    });

    // 8. Log De-Identified Audit Event (Zero PII, Zero Tokens)
    await logAdminAction({
      actorId: clientId,
      action: "CLIENT_DATA_ERASURE",
      targetEntity: "clients",
      targetId: clientId,
      metadata: {
        idHash,
        anonymizedEmail,
        reason,
        financialRecordsRetainedForStatutoryCompliance: true,
      },
      ipAddress: clientIp,
    });

    return apiSuccess({
      erased: true,
      clientId,
      anonymizedId: idHash,
      erasedAt: new Date().toISOString(),
      message:
        "Personal data erased and anonymized. Commercial and financial records retained in accordance with statutory accounting and tax regulations.",
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Right to erasure execution failure";
    return internalError(msg);
  }
}
