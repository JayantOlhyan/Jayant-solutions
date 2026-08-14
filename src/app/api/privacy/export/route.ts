import { createAdminClient } from "@/lib/supabase/admin";
import { logAdminAction } from "@/lib/auth/audit";
import { badRequest, unauthorized, internalError } from "@/lib/api-response";
import { checkRateLimit, getClientIp, createRateLimitResponse } from "@/lib/rate-limit";
import { z } from "zod";

const exportRequestSchema = z.object({
  token: z.string().min(10, "Proposal authorization token is required"),
});

export async function POST(request: Request) {
  try {
    const clientIp = getClientIp(request);

    // 1. Rate Limiting (5 export requests per 15 minutes per IP)
    const rateLimit = await checkRateLimit(`ip:${clientIp}:privacy_export`, 5, 900);
    if (!rateLimit.success) {
      return createRateLimitResponse(rateLimit.resetInSeconds);
    }

    const body = await request.json();
    const parsed = exportRequestSchema.safeParse(body);
    if (!parsed.success) {
      return badRequest("Invalid export request payload", parsed.error.flatten().fieldErrors);
    }

    const { token } = parsed.data;
    const adminDb = createAdminClient();

    // 2. Authenticate Client Ownership via Proposal Token
    const { data: proposal, error: propErr } = await adminDb
      .from("proposals")
      .select("id, client_id, token")
      .eq("token", token)
      .single();

    if (propErr || !proposal || !proposal.client_id) {
      return unauthorized("Invalid proposal authentication token.");
    }

    const clientId = proposal.client_id;
    const { data: client, error: clientErr } = await adminDb
      .from("clients")
      .select("id, name, company_name, email, phone, terms_version, privacy_version, created_at")
      .eq("id", clientId)
      .single();

    if (clientErr || !client) {
      return unauthorized("Associated client profile not found.");
    }

    // 3. Fetch All Associated Client Datasets
    const [
      { data: proposals },
      { data: packageSelections },
      { data: negotiations },
      { data: agreements },
      { data: invoices },
      { data: payments },
      { data: bookings },
      { data: onboarding },
      { data: consents },
    ] = await Promise.all([
      adminDb
        .from("proposals")
        .select("id, title, status, created_at, updated_at, expires_at")
        .eq("client_id", clientId),
      adminDb
        .from("package_selections")
        .select("id, proposal_id, package_code, price, notes, selected_at")
        .eq("proposal_id", proposal.id),
      adminDb
        .from("negotiations")
        .select("id, proposal_id, status, requested_changes, proposed_price, created_at")
        .eq("proposal_id", proposal.id),
      adminDb
        .from("agreements")
        .select("id, proposal_id, status, signed_at, signer_name, signer_email, terms_version, privacy_version, created_at")
        .eq("proposal_id", proposal.id),
      adminDb
        .from("invoices")
        .select("id, invoice_number, subtotal, tax_amount, total_amount, status, due_date, paid_at, created_at")
        .in(
          "agreement_id",
          (
            await adminDb.from("agreements").select("id").eq("proposal_id", proposal.id)
          ).data?.map((a) => a.id) || []
        ),
      adminDb
        .from("payments")
        .select("id, amount, currency, status, created_at")
        .in(
          "invoice_id",
          (
            await adminDb.from("invoices").select("id").in(
              "agreement_id",
              (
                await adminDb.from("agreements").select("id").eq("proposal_id", proposal.id)
              ).data?.map((a) => a.id) || []
            )
          ).data?.map((i) => i.id) || []
        ),
      adminDb
        .from("bookings")
        .select("id, proposal_id, event_title, start_time, end_time, status, created_at")
        .eq("proposal_id", proposal.id),
      adminDb
        .from("onboarding")
        .select("id, proposal_id, status, intake_payload, created_at, updated_at")
        .eq("proposal_id", proposal.id),
      adminDb
        .from("client_consents")
        .select("id, consent_type, document_name, document_version, accepted, accepted_at, context")
        .eq("client_id", clientId),
    ]);

    // 4. Construct Sanitized Portability Package (Zero Secrets, Zero Tokens)
    const exportPackage = {
      exportMetadata: {
        format: "GDPR_DPDP_DATA_PORTABILITY_JSON",
        generatedAt: new Date().toISOString(),
        clientId,
        complianceStandard: "GDPR Article 20 / India DPDP Act 2023 Section 12",
      },
      clientProfile: {
        name: client.name,
        companyName: client.company_name,
        email: client.email,
        phone: client.phone,
        termsVersion: client.terms_version,
        privacyVersion: client.privacy_version,
        createdAt: client.created_at,
      },
      proposals: proposals || [],
      packageSelections: packageSelections || [],
      negotiations: negotiations || [],
      agreements: agreements || [],
      invoices: invoices || [],
      payments: payments || [],
      bookings: bookings || [],
      onboarding: onboarding || [],
      legalConsents: consents || [],
    };

    // 5. Audit Logging
    await logAdminAction({
      actorId: clientId,
      action: "CLIENT_DATA_PORTABILITY_EXPORT",
      targetEntity: "clients",
      targetId: clientId,
      metadata: {
        clientId,
        proposalId: proposal.id,
      },
      ipAddress: clientIp,
    });

    const filename = `data_export_${client.name.toLowerCase().replace(/[^a-z0-9]/g, "_")}_${new Date().toISOString().split("T")[0]}.json`;

    return new Response(JSON.stringify(exportPackage, null, 2), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Content-Disposition": `attachment; filename="${filename}"`,
      },
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Data portability export failed";
    return internalError(msg);
  }
}
