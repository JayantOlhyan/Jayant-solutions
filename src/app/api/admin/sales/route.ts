import { NextResponse } from "next/server";
import { AdminAuthError } from "@/lib/auth/admin-guard";
import { salesAdmin, loadSales } from "@/lib/sales/server";
import {
  commandSchema,
  indiaDate,
  transition,
  type Prospect,
} from "@/lib/sales/model";

export const dynamic = "force-dynamic";
const reply = (data: unknown, status = 200) =>
  NextResponse.json(data, { status, headers: { "Cache-Control": "no-store" } });
function failure(error: unknown) {
  if (error instanceof AdminAuthError)
    return reply({ error: error.message }, error.status);
  return reply(
    {
      error:
        "Sales data could not be saved or loaded. Check the connection and migration 00014, then retry.",
    },
    503,
  );
}
export async function GET() {
  try {
    const { db } = await salesAdmin();
    return reply(await loadSales(db));
  } catch (error) {
    return failure(error);
  }
}
export async function POST(request: Request) {
  try {
    if (request.headers.get("origin") !== new URL(request.url).origin)
      return reply(
        { error: "Open the sales cockpit on this site to save changes." },
        403,
      );
    const { admin, db } = await salesAdmin();
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return reply({ error: "Invalid request body." }, 400);
    }
    const parsed = commandSchema.safeParse(body);
    if (!parsed.success)
      return reply(
        {
          error: parsed.error.issues
            .map((i) => `${i.path.join(".")}: ${i.message}`)
            .join("; "),
        },
        400,
      );
    const c = parsed.data;
    const now = new Date().toISOString();
    if (c.type === "create" || c.type === "save") {
      if (Boolean(c.details.nextDate) !== Boolean(c.details.nextTask))
        return reply({ error: "Set both a next action and its date." }, 400);
      if (c.details.proposalId) {
        const { data, error } = await db
          .from("proposals")
          .select("id")
          .eq("id", c.details.proposalId)
          .is("deleted_at", null)
          .maybeSingle();
        if (error) throw error;
        if (!data)
          return reply({ error: "Choose an existing active proposal." }, 400);
      }
    }
    if (c.type === "create") {
      const { data, error } = await db
        .from("sales_prospects")
        .insert({
          details: c.details,
          created_by: admin.id,
          milestones: { new: now },
          activity: [{ at: now, action: "Prospect added", note: "" }],
        })
        .select("id")
        .single();
      if (error) throw error;
      return reply({ id: data.id }, 201);
    }
    if (c.type === "receipt") {
      const r = c.receipt;
      if (r.receivedOn > indiaDate())
        return reply(
          { error: "Future payments cannot be recorded as collected." },
          400,
        );
      const { error } = await db
        .from("sales_receipts")
        .insert({
          prospect_id: r.prospectId,
          amount: r.amount,
          received_on: r.receivedOn,
          reference: r.reference,
          created_by: admin.id,
        });
      if (error?.code === "23505")
        return reply(
          {
            error:
              "That payment reference is already recorded. Do not count the same receipt twice.",
          },
          409,
        );
      if (error?.code === "23503")
        return reply(
          { error: "Prospect no longer exists. Reload the workspace." },
          404,
        );
      if (error) throw error;
      return reply({ ok: true });
    }
    if (c.type === "void") {
      const { data, error } = await db
        .from("sales_receipts")
        .update({ void_reason: c.reason, voided_by: admin.id, voided_at: now })
        .eq("id", c.id)
        .is("void_reason", null)
        .select("id")
        .maybeSingle();
      if (error) throw error;
      if (!data)
        return reply(
          {
            error:
              "Receipt already voided or unavailable. Reload the workspace.",
          },
          409,
        );
      return reply({ ok: true });
    }
    const { data: row, error } = await db
      .from("sales_prospects")
      .select("*")
      .eq("id", c.id)
      .single();
    if (error)
      return reply(
        { error: "Prospect could not load. Reload and retry." },
        404,
      );
    if (row.version !== c.version)
      return reply(
        {
          error:
            "This prospect changed in another session. Reload before editing again.",
        },
        409,
      );
    const p = { ...row, followupIndex: row.followup_index } as Prospect;
    let updated: Prospect;
    try {
      updated =
        c.type === "save"
          ? {
              ...p,
              details: c.details,
              activity: [
                ...p.activity,
                { at: now, action: "Details updated", note: "" },
              ],
            }
          : transition(p, c);
    } catch (err) {
      return reply(
        { error: err instanceof Error ? err.message : "Invalid outcome" },
        400,
      );
    }
    const { data: saved, error: saveError } = await db
      .from("sales_prospects")
      .update({
        details: updated.details,
        stage: updated.stage,
        milestones: updated.milestones,
        activity: updated.activity,
        followup_index: updated.followupIndex,
        version: p.version + 1,
        updated_at: now,
      })
      .eq("id", c.id)
      .eq("version", c.version)
      .select("id")
      .maybeSingle();
    if (saveError) throw saveError;
    if (!saved)
      return reply(
        { error: "Another session saved first. Reload before editing again." },
        409,
      );
    return reply({ ok: true });
  } catch (error) {
    return failure(error);
  }
}
