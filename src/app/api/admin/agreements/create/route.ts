import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth/admin-guard";
import { createAdminClient } from "@/lib/supabase/admin";
import { logAdminAction } from "@/lib/auth/audit";
import { z } from "zod";

const createAgreementSchema = z.object({
  proposal_id: z.string().uuid("Invalid proposal ID"),
  custom_terms: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const admin = await requireAdmin();
    const body = await request.json();
    const parsed = createAgreementSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { proposal_id, custom_terms } = parsed.data;
    const adminDb = createAdminClient();

    // 1. Fetch proposal and client details
    const { data: proposal, error: propErr } = await adminDb
      .from("proposals")
      .select("*, clients(*)")
      .eq("id", proposal_id)
      .single();

    if (propErr || !proposal) {
      return NextResponse.json(
        { success: false, error: "Proposal not found" },
        { status: 404 }
      );
    }

    // 2. Fetch commercial terms or package selection for pricing
    let { data: commercialTerms } = await adminDb
      .from("commercial_terms")
      .select("*")
      .eq("proposal_id", proposal_id)
      .order("scope_version", { ascending: false })
      .limit(1)
      .maybeSingle();

    // If no custom commercial terms exist, auto-create from package selection
    if (!commercialTerms) {
      const { data: selection } = await adminDb
        .from("package_selections")
        .select("*, packages(*)")
        .eq("proposal_id", proposal_id)
        .order("selected_at", { ascending: false })
        .limit(1)
        .single();

      if (!selection) {
        return NextResponse.json(
          { success: false, error: "No package selected or commercial terms finalized for this proposal." },
          { status: 400 }
        );
      }

      const { data: newTerms, error: termsErr } = await adminDb
        .from("commercial_terms")
        .insert({
          proposal_id,
          final_agreed_price: selection.price_snapshot,
          scope_version: 1,
          scope_summary: `Standard ${selection.packages.name} 90-day engagement scope.`,
          approved_by: admin.id,
          approved_at: new Date().toISOString(),
        })
        .select()
        .single();

      if (termsErr) throw termsErr;
      commercialTerms = newTerms;
    }

    // 3. Approved Standard Contract Template
    const contractHtml = `
      <div class="contract-document">
        <h2>SERVICE AGREEMENT & COMMERCIAL STATEMENT OF WORK</h2>
        <p><strong>Client:</strong> ${proposal.clients.name} (${proposal.clients.company_name || 'N/A'})</p>
        <p><strong>Provider:</strong> Jayant Web & AI Systems</p>
        <p><strong>Scope Version:</strong> v${commercialTerms.scope_version}</p>
        <p><strong>Agreed Price:</strong> ₹${commercialTerms.final_agreed_price.toLocaleString('en-IN')}</p>
        <p><strong>Period:</strong> 90-day engagement</p>
        <hr/>
        <h3>1. Scope of Work</h3>
        <p>${commercialTerms.scope_summary}</p>
        ${custom_terms ? `<p><strong>Additional Terms:</strong> ${custom_terms}</p>` : ''}
        <h3>2. Commercial Terms & Payment</h3>
        <p>Full commercial payment of ₹${commercialTerms.final_agreed_price.toLocaleString('en-IN')} is payable upon invoice issuance following digital signature acceptance.</p>
        <h3>3. Governance</h3>
        <p>This agreement represents the entire binding understanding for the 90-day engagement period.</p>
      </div>
    `;

    // 4. Create Agreement in SENT status
    const { data: agreement, error: agreeErr } = await adminDb
      .from("agreements")
      .insert({
        proposal_id,
        commercial_terms_id: commercialTerms.id,
        status: "SENT",
        contract_html: contractHtml,
      })
      .select()
      .single();

    if (agreeErr) throw agreeErr;

    // 5. Update proposal status
    await adminDb
      .from("proposals")
      .update({ status: "SENT", updated_at: new Date().toISOString() })
      .eq("id", proposal_id);

    // 6. Log audit event
    await logAdminAction({
      actorId: admin.id,
      action: "AGREEMENT_GENERATED_AND_SENT",
      targetEntity: "agreements",
      targetId: agreement.id,
      metadata: {
        proposal_id,
        commercial_terms_id: commercialTerms.id,
        agreed_price: commercialTerms.final_agreed_price,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Agreement generated and sent to client successfully",
      agreement,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to generate agreement";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
