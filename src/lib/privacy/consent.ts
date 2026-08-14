import { createAdminClient } from "@/lib/supabase/admin";
import { logAdminAction } from "@/lib/auth/audit";

export const CURRENT_TERMS_VERSION = "v2026.1";
export const CURRENT_PRIVACY_VERSION = "v2026.1";

export type ConsentType =
  | "TERMS_OF_SERVICE"
  | "PRIVACY_POLICY"
  | "COMMERCIAL_AGREEMENT"
  | "DATA_PROCESSING"
  | "MARKETING";

export interface RecordConsentParams {
  clientId: string;
  proposalId?: string | null;
  consentType: ConsentType;
  documentName: string;
  documentVersion: string;
  ipAddress?: string | null;
  userAgent?: string | null;
  context?: string;
  metadata?: Record<string, unknown>;
}

/**
 * Records an immutable legal consent record (Checklist 13.1, 13.9).
 */
export async function recordConsent(params: RecordConsentParams): Promise<string> {
  const adminDb = createAdminClient();
  const {
    clientId,
    proposalId = null,
    consentType,
    documentName,
    documentVersion,
    ipAddress = null,
    userAgent = null,
    context = "COMMERCIAL_SIGNING",
    metadata = {},
  } = params;

  const { data, error } = await adminDb
    .from("client_consents")
    .insert({
      client_id: clientId,
      proposal_id: proposalId,
      consent_type: consentType,
      document_name: documentName,
      document_version: documentVersion,
      accepted: true,
      ip_address: ipAddress,
      user_agent: userAgent,
      context,
      accepted_at: new Date().toISOString(),
      metadata,
    })
    .select("id")
    .single();

  if (error) {
    console.error("❌ Failed to record consent:", error);
    throw error;
  }

  // Audit event for consent record (no secrets/passwords logged)
  await logAdminAction({
    actorId: clientId,
    action: "CONSENT_RECORDED",
    targetEntity: "client_consents",
    targetId: data.id,
    metadata: {
      clientId,
      proposalId,
      consentType,
      documentVersion,
      context,
    },
    ipAddress: ipAddress || undefined,
  });

  return data.id;
}

/**
 * Records complete Terms of Service & Privacy Policy agreement package acceptance (13.1, 13.9).
 */
export async function recordTermsAcceptance(
  clientId: string,
  proposalId: string,
  ipAddress?: string | null,
  userAgent?: string | null,
  termsVersion: string = CURRENT_TERMS_VERSION,
  privacyVersion: string = CURRENT_PRIVACY_VERSION
): Promise<void> {
  const adminDb = createAdminClient();

  // 1. Record Terms of Service Consent
  await recordConsent({
    clientId,
    proposalId,
    consentType: "TERMS_OF_SERVICE",
    documentName: "Terms & Conditions",
    documentVersion: termsVersion,
    ipAddress,
    userAgent,
    context: "PROPOSAL_AGREEMENT_SIGNING",
  });

  // 2. Record Privacy Policy Consent
  await recordConsent({
    clientId,
    proposalId,
    consentType: "PRIVACY_POLICY",
    documentName: "Privacy Policy",
    documentVersion: privacyVersion,
    ipAddress,
    userAgent,
    context: "PROPOSAL_AGREEMENT_SIGNING",
  });

  // 3. Update client record with current accepted versions
  await adminDb
    .from("clients")
    .update({
      terms_version: termsVersion,
      privacy_version: privacyVersion,
      updated_at: new Date().toISOString(),
    })
    .eq("id", clientId);
}
