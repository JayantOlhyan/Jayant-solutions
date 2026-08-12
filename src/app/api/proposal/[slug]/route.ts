import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const adminDb = createAdminClient();

    // 1. Fetch proposal by token/slug or client slug match
    let { data: proposal } = await adminDb
      .from("proposals")
      .select("*, clients(*)")
      .or(`token.eq.${slug},title.ilike.%${slug}%`)
      .filter("deleted_at", "is", null)
      .single();

    // If no proposal exists yet for this slug, auto-provision a demo proposal for testing
    if (!proposal) {
      // Find or create client
      let { data: client } = await adminDb
        .from("clients")
        .select("*")
        .eq("email", `demo-${slug}@client.com`)
        .single();

      if (!client) {
        const { data: newClient, error: clientErr } = await adminDb
          .from("clients")
          .insert({
            name: decodeURIComponent(slug).replace(/-/g, " "),
            email: `demo-${slug}@client.com`,
            company_name: decodeURIComponent(slug).toUpperCase(),
          })
          .select()
          .single();

        if (clientErr) throw clientErr;
        client = newClient;
      }

      // Create proposal linked to client
      const { data: newProposal, error: propErr } = await adminDb
        .from("proposals")
        .insert({
          client_id: client.id,
          token: slug,
          title: `Growth & Automation Proposal for ${client.name}`,
          status: "SENT",
        })
        .select("*, clients(*)")
        .single();

      if (propErr) throw propErr;
      proposal = newProposal;
    }

    // 2. Fetch authoritative packages catalog from database
    const { data: packages } = await adminDb
      .from("packages")
      .select("*")
      .eq("is_active", true)
      .order("standard_price", { ascending: true });

    // 3. Fetch latest package selection if present
    const { data: existingSelection } = await adminDb
      .from("package_selections")
      .select("*, packages(*)")
      .eq("proposal_id", proposal.id)
      .order("selected_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    return NextResponse.json({
      success: true,
      proposal,
      packages,
      existingSelection,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to fetch proposal data";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
