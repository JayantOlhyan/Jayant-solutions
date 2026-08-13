import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { sendTransactionalEmail } from "@/lib/notifications/email";
import { checkRateLimit, getClientIp, createRateLimitResponse } from "@/lib/rate-limit";
import { z } from "zod";

const onboardingSubmitSchema = z
  .object({
    proposal_id: z.string().uuid("Invalid proposal ID"),
    token: z.string().min(10, "Proposal authentication token is required"),
    responses: z
      .object({
        company_overview: z.string().min(5, "Company overview is required").max(2000),
        target_icp: z.string().min(5, "Target ICP / audience description is required").max(2000),
        primary_goals: z.array(z.string().max(200)).min(1, "At least one primary goal is required").max(5),
        brand_assets_url: z.string().url("Invalid asset URL").max(500).optional().or(z.literal("")),
        social_profiles: z
          .object({
            linkedin: z.string().max(300).optional().or(z.literal("")),
            instagram: z.string().max(300).optional().or(z.literal("")),
            twitter_x: z.string().max(300).optional().or(z.literal("")),
            youtube: z.string().max(300).optional().or(z.literal("")),
          })
          .strict()
          .optional(),
        key_stakeholders: z
          .array(
            z
              .object({
                name: z.string().max(100),
                role: z.string().max(100),
                email: z.string().email("Invalid email format"),
              })
              .strict()
          )
          .max(5)
          .optional(),
        additional_notes: z.string().max(1000).optional(),
      })
      .strict(),
    is_draft: z.boolean().default(false),
  })
  .strict();

export async function POST(request: Request) {
  try {
    const clientIp = getClientIp(request);

    // 1. IP Rate limit: 20 attempts per 15 minutes
    const ipRateLimit = await checkRateLimit(`ip:${clientIp}:onboarding_submit`, 20, 900);
    if (!ipRateLimit.success) {
      return createRateLimitResponse(ipRateLimit.resetInSeconds);
    }

    const body = await request.json();
    const parsed = onboardingSubmitSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { proposal_id, token, responses, is_draft } = parsed.data;

    // 2. Token Rate limit: 20 attempts per 15 minutes per token
    const tokenRateLimit = await checkRateLimit(`token:${token}:onboarding_submit`, 20, 900);
    if (!tokenRateLimit.success) {
      return createRateLimitResponse(tokenRateLimit.resetInSeconds);
    }

    const adminDb = createAdminClient();

    // 3. CLIENT AUTHORIZATION: Verify proposal exists and token matches
    const { data: proposal, error: propErr } = await adminDb
      .from("proposals")
      .select("id, client_id, token, title, clients(name, email)")
      .eq("id", proposal_id)
      .single();

    if (propErr || !proposal || proposal.token !== token) {
      return NextResponse.json(
        { success: false, error: "Unauthorized access to proposal onboarding" },
        { status: 403 }
      );
    }

    // 4. LIFECYCLE GATE: Require Signed Contract & Verified Invoice Payment
    const { data: agreement } = await adminDb
      .from("agreements")
      .select("status, invoices(status)")
      .eq("proposal_id", proposal_id)
      .eq("status", "SIGNED")
      .maybeSingle();

    if (!agreement) {
      return NextResponse.json(
        { success: false, error: "Onboarding intake is locked. Signed agreement not found." },
        { status: 402 }
      );
    }

    const invoice = Array.isArray(agreement.invoices) ? agreement.invoices[0] : agreement.invoices;
    if (!invoice || invoice.status !== "PAID") {
      return NextResponse.json(
        { success: false, error: "Onboarding intake is locked until invoice payment is verified." },
        { status: 402 }
      );
    }

    // 5. Determine Onboarding State
    const { data: existingOnboarding } = await adminDb
      .from("onboarding")
      .select("id, status, submitted_at")
      .eq("proposal_id", proposal_id)
      .maybeSingle();

    const isResubmission = existingOnboarding?.status === "REVISION_REQUESTED";
    const newStatus = is_draft
      ? "IN_PROGRESS"
      : isResubmission
      ? "SUBMITTED"
      : "SUBMITTED";

    const submittedAt = is_draft ? existingOnboarding?.submitted_at || null : new Date().toISOString();

    // 6. Authoritative Database Upsert
    const { data: onboarding, error: onboardErr } = await adminDb
      .from("onboarding")
      .upsert(
        {
          proposal_id,
          responses,
          status: newStatus,
          submitted_at: submittedAt,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "proposal_id" }
      )
      .select("*")
      .single();

    if (onboardErr) {
      return NextResponse.json(
        { success: false, error: onboardErr.message },
        { status: 500 }
      );
    }

    const clientObj = Array.isArray(proposal.clients) ? proposal.clients[0] : proposal.clients;
    const clientEmail = clientObj?.email || "";
    const clientName = clientObj?.name || "";

    // 7. Audit Logging
    const auditAction = is_draft
      ? "CLIENT_ONBOARDING_DRAFT_SAVED"
      : isResubmission
      ? "CLIENT_ONBOARDING_RESUBMITTED"
      : "CLIENT_ONBOARDING_SUBMITTED";

    await adminDb.from("audit_events").insert({
      actor_type: "CLIENT",
      actor_id: proposal.client_id,
      action: auditAction,
      target_entity: "onboarding",
      target_id: onboarding.id,
      metadata: { proposal_id, client_email: clientEmail, status: newStatus },
      ip_address: clientIp,
      user_agent: request.headers.get("user-agent") || undefined,
    });

    // 8. Resilient Notification Handling
    if (!is_draft) {
      try {
        const adminEmail = process.env.ADMIN_EMAIL || "jayantwebaisystems@gmail.com";
        await sendTransactionalEmail({
          recipientEmail: adminEmail,
          templateKey: "KICKOFF_BOOKED",
          subject: `[Onboarding ${isResubmission ? "Resubmitted" : "Submitted"}] Intake details from ${clientName}`,
          payload: {
            clientName,
            clientEmail,
            proposalTitle: proposal.title,
            submittedAt: new Date().toLocaleString("en-IN"),
          },
          idempotencyKey: `onboard_${proposal_id}_${newStatus}`,
        });
      } catch (emailErr) {
        console.warn("⚠️ Onboarding notification dispatch warning:", emailErr);
      }
    }

    return NextResponse.json({
      success: true,
      status: newStatus,
      onboarding,
      message: is_draft
        ? "Onboarding draft saved successfully"
        : "Onboarding intake questionnaire submitted successfully",
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to process onboarding intake";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
