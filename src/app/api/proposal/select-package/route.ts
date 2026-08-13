import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { sendTransactionalEmail } from "@/lib/notifications/email";
import { z } from "zod";

const selectPackageSchema = z.object({
  proposal_id: z.string().uuid("Invalid proposal ID"),
  package_code: z.enum(["FOUNDATION", "GROWTH", "SCALE"]),
  client_notes: z.string().optional(),
  kickoff_timeline: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = selectPackageSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { proposal_id, package_code, client_notes, kickoff_timeline } = parsed.data;
    const adminDb = createAdminClient();

    // 1. Verify proposal exists and is active
    const { data: proposal, error: propErr } = await adminDb
      .from("proposals")
      .select("id, status, client_id")
      .eq("id", proposal_id)
      .single();

    if (propErr || !proposal) {
      return NextResponse.json(
        { success: false, error: "Proposal not found" },
        { status: 404 }
      );
    }

    // 2. Lock check: If agreement already signed or sent, block selection changes
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

    // 3. SERVER-SIDE PRICE LOOKUP: Fetch standard package price directly from DB catalog
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

    // Combine notes and timeline preference
    const fullNotes = [
      client_notes ? `Notes: ${client_notes}` : null,
      kickoff_timeline ? `Preferred Timeline: ${kickoff_timeline}` : null,
    ]
      .filter(Boolean)
      .join(" | ");

    // 4. Store selection with authoritative server-side price snapshot
    const { data: selection, error: selectErr } = await adminDb
      .from("package_selections")
      .insert({
        proposal_id: proposal.id,
        package_id: dbPackage.id,
        price_snapshot: dbPackage.standard_price, // Authoritative price snapshot
        client_notes: fullNotes || null,
        selected_at: new Date().toISOString(),
      })
      .select("*, packages(*)")
      .single();

    if (selectErr) {
      throw selectErr;
    }

    // 5. Update proposal status to ACCEPTED
    await adminDb
      .from("proposals")
      .update({ status: "ACCEPTED", updated_at: new Date().toISOString() })
      .eq("id", proposal.id);

    // 6. Record audit trail event
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
      ip_address: request.headers.get("x-forwarded-for") || undefined,
      user_agent: request.headers.get("user-agent") || undefined,
    });

    // 7. Dispatch transactional notification
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
