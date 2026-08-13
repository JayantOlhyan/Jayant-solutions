import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { sendTransactionalEmail } from "@/lib/notifications/email";
import { checkRateLimit, getClientIp, createRateLimitResponse } from "@/lib/rate-limit";
import { z } from "zod";

const selectPackageSchema = z
  .object({
    proposal_id: z.string().uuid("Invalid proposal ID"),
    token: z.string().min(10, "Proposal authorization token is required"),
    package_code: z.enum(["FOUNDATION", "GROWTH", "SCALE"]),
    client_notes: z.string().optional(),
    kickoff_timeline: z.string().optional(),
  })
  .strict();

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);

    // 1. IP Rate limit: 10 attempts per 15 minutes
    const ipRateLimit = await checkRateLimit(`ip:${ip}:select_package`, 10, 900);
    if (!ipRateLimit.success) {
      return createRateLimitResponse(ipRateLimit.resetInSeconds);
    }

    const body = await request.json();
    const parsed = selectPackageSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { proposal_id, token, package_code, client_notes, kickoff_timeline } = parsed.data;

    // 2. Token-specific abuse rate limit: 10 attempts per 15 minutes per token
    const tokenRateLimit = await checkRateLimit(`token:${token}:select_package`, 10, 900);
    if (!tokenRateLimit.success) {
      return createRateLimitResponse(tokenRateLimit.resetInSeconds);
    }

    const adminDb = createAdminClient();

    // 3. Verify proposal exists and token matches
    const { data: proposal, error: propErr } = await adminDb
      .from("proposals")
      .select("id, status, client_id, token")
      .eq("id", proposal_id)
      .single();

    if (propErr || !proposal || proposal.token !== token) {
      return NextResponse.json(
        { success: false, error: "Unauthorized access to proposal" },
        { status: 403 }
      );
    }

    // 4. Lock check: If agreement already signed or sent, block selection changes
    const { data: activeAgreement } = await adminDb
      .from("agreements")
      .select("id, status")
      .eq("proposal_id", proposal_id)
      .in("status", ["SENT", "SIGNED"])
      .maybeSingle();

    if (activeAgreement) {
      return NextResponse.json(
        { 
          success: false, 
          error: `Package selection is locked because an agreement is currently ${activeAgreement.status.toLowerCase()}.` 
        },
        { status: 422 }
      );
    }

    // 5. SERVER-SIDE PRICE LOOKUP: Fetch standard package price directly from DB catalog
    const { data: dbPackage, error: pkgErr } = await adminDb
      .from("packages")
      .select("id, name, standard_price, period")
      .eq("code", package_code)
      .eq("is_active", true)
      .single();

    if (pkgErr || !dbPackage) {
      return NextResponse.json(
        { success: false, error: "Selected package is invalid or inactive" },
        { status: 400 }
      );
    }

    const fullNotes = [
      client_notes ? `Notes: ${client_notes}` : null,
      kickoff_timeline ? `Preferred Timeline: ${kickoff_timeline}` : null,
    ]
      .filter(Boolean)
      .join(" | ");

    // 6. Store selection with authoritative server-side price snapshot
    const { data: selection, error: selectErr } = await adminDb
      .from("package_selections")
      .insert({
        proposal_id: proposal.id,
        package_id: dbPackage.id,
        price_snapshot: dbPackage.standard_price,
        client_notes: fullNotes || null,
        selected_at: new Date().toISOString(),
      })
      .select("*, packages(*)")
      .single();

    if (selectErr) {
      throw selectErr;
    }

    // 7. Update proposal status to ACCEPTED
    await adminDb
      .from("proposals")
      .update({ status: "ACCEPTED", updated_at: new Date().toISOString() })
      .eq("id", proposal.id);

    // 8. Record audit trail event
    await adminDb.from("audit_events").insert({
      actor_type: "CLIENT",
      action: "PACKAGE_SELECTED",
      target_entity: "package_selections",
      target_id: selection.id,
      metadata: {
        proposal_id: proposal.id,
        package_code: dbPackage.name,
        price_snapshot: dbPackage.standard_price,
      },
      ip_address: ip,
      user_agent: request.headers.get("user-agent") || undefined,
    });

    // 9. Dispatch transactional notification
    const adminEmail = process.env.ADMIN_EMAIL || "jayantwebaisystems@gmail.com";
    await sendTransactionalEmail({
      recipientEmail: adminEmail,
      templateKey: "PACKAGE_SELECTED",
      subject: `[Package Selected] ${dbPackage.name} for Proposal #${proposal.id.substring(0, 8)}`,
      payload: {
        packageCode: dbPackage.name,
        price: `₹${dbPackage.standard_price.toLocaleString('en-IN')}`,
        notes: fullNotes,
      },
      idempotencyKey: `pkg_select_${selection.id}`,
    });

    return NextResponse.json({
      success: true,
      message: "Package selected successfully",
      selection: {
        id: selection.id,
        package_code: dbPackage.name,
        standard_price: dbPackage.standard_price,
        period: dbPackage.period,
        price_snapshot: selection.price_snapshot,
        selected_at: selection.selected_at,
      },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to record package selection";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
