import { requireAdmin, requireSuperAdmin, AdminAuthError } from "@/lib/auth/admin-guard";
import { createAdminClient } from "@/lib/supabase/admin";
import { logAdminAction } from "@/lib/auth/audit";
import { badRequest, unauthorized, forbidden, mfaRequired, internalError } from "@/lib/api-response";
import { checkRateLimit, getClientIp, createRateLimitResponse } from "@/lib/rate-limit";

const ALLOWED_DATASETS = [
  "proposals",
  "clients",
  "agreements",
  "invoices",
  "payments",
  "onboarding",
  "audit_events",
] as const;

type DatasetType = typeof ALLOWED_DATASETS[number];

function convertToCSV(data: Array<Record<string, unknown>>): string {
  if (data.length === 0) return "";

  const headers = Object.keys(data[0]);
  const csvRows: string[] = [];

  // Header row
  csvRows.push(headers.map((h) => `"${h.replace(/"/g, '""')}"`).join(","));

  // Data rows
  for (const row of data) {
    const values = headers.map((header) => {
      const val = row[header];
      if (val === null || val === undefined) return '""';
      if (typeof val === "object") {
        return `"${JSON.stringify(val).replace(/"/g, '""')}"`;
      }
      return `"${String(val).replace(/"/g, '""')}"`;
    });
    csvRows.push(values.join(","));
  }

  return csvRows.join("\n");
}

export async function GET(request: Request) {
  try {
    const ip = getClientIp(request);

    // 1. Rate Limiting (15 export queries per 15 minutes)
    const rateLimit = await checkRateLimit(`ip:${ip}:admin_export`, 15, 900);
    if (!rateLimit.success) {
      return createRateLimitResponse(rateLimit.resetInSeconds);
    }

    const { searchParams } = new URL(request.url);
    const dataset = searchParams.get("dataset")?.toLowerCase() as DatasetType;
    const format = (searchParams.get("format")?.toLowerCase() || "csv") as "csv" | "json";
    const limit = Math.min(1000, Math.max(1, parseInt(searchParams.get("limit") || "100", 10)));
    const startDate = searchParams.get("startDate");
    const endDate = searchParams.get("endDate");

    if (!dataset || !ALLOWED_DATASETS.includes(dataset)) {
      return badRequest(`Invalid dataset requested. Allowed options: ${ALLOWED_DATASETS.join(", ")}`);
    }

    // 2. Authorization Guard
    let admin;
    try {
      if (dataset === "audit_events") {
        // Audit events dataset requires strict Super-Admin access
        admin = await requireSuperAdmin();
      } else {
        admin = await requireAdmin();
      }
    } catch (authErr: unknown) {
      if (authErr instanceof AdminAuthError) {
        if (authErr.code === "UNAUTHORIZED") return unauthorized(authErr.message);
        if (authErr.code === "MFA_REQUIRED") return mfaRequired(authErr.message);
        return forbidden(authErr.message);
      }
      return unauthorized();
    }

    const adminDb = createAdminClient();
    let records: Array<Record<string, unknown>> = [];

    // 3. Sanitized Dataset Queries (Zero Secrets, Zero Access Tokens)
    switch (dataset) {
      case "proposals": {
        let q = adminDb
          .from("proposals")
          .select("id, title, status, client_id, expires_at, created_at, updated_at")
          .order("created_at", { ascending: false })
          .limit(limit);
        if (startDate) q = q.gte("created_at", startDate);
        if (endDate) q = q.lte("created_at", endDate);
        const { data, error } = await q;
        if (error) throw error;
        records = (data || []) as Array<Record<string, unknown>>;
        break;
      }

      case "clients": {
        let q = adminDb
          .from("clients")
          .select("id, name, company_name, email, phone, created_at, updated_at")
          .order("created_at", { ascending: false })
          .limit(limit);
        if (startDate) q = q.gte("created_at", startDate);
        if (endDate) q = q.lte("created_at", endDate);
        const { data, error } = await q;
        if (error) throw error;
        records = (data || []) as Array<Record<string, unknown>>;
        break;
      }

      case "agreements": {
        let q = adminDb
          .from("agreements")
          .select("id, proposal_id, status, signed_at, signer_name, signer_email, created_at, updated_at")
          .order("created_at", { ascending: false })
          .limit(limit);
        if (startDate) q = q.gte("created_at", startDate);
        if (endDate) q = q.lte("created_at", endDate);
        const { data, error } = await q;
        if (error) throw error;
        records = (data || []) as Array<Record<string, unknown>>;
        break;
      }

      case "invoices": {
        let q = adminDb
          .from("invoices")
          .select("id, agreement_id, invoice_number, subtotal, tax_amount, total_amount, status, due_date, paid_at, created_at")
          .order("created_at", { ascending: false })
          .limit(limit);
        if (startDate) q = q.gte("created_at", startDate);
        if (endDate) q = q.lte("created_at", endDate);
        const { data, error } = await q;
        if (error) throw error;
        records = (data || []) as Array<Record<string, unknown>>;
        break;
      }

      case "payments": {
        let q = adminDb
          .from("payments")
          .select("id, invoice_id, razorpay_link_id, razorpay_payment_id, amount, currency, status, created_at, updated_at")
          .order("created_at", { ascending: false })
          .limit(limit);
        if (startDate) q = q.gte("created_at", startDate);
        if (endDate) q = q.lte("created_at", endDate);
        const { data, error } = await q;
        if (error) throw error;
        records = (data || []) as Array<Record<string, unknown>>;
        break;
      }

      case "onboarding": {
        let q = adminDb
          .from("onboarding")
          .select("id, proposal_id, status, intake_payload, reviewer_id, review_notes, created_at, updated_at")
          .order("created_at", { ascending: false })
          .limit(limit);
        if (startDate) q = q.gte("created_at", startDate);
        if (endDate) q = q.lte("created_at", endDate);
        const { data, error } = await q;
        if (error) throw error;
        records = (data || []) as Array<Record<string, unknown>>;
        break;
      }

      case "audit_events": {
        let q = adminDb
          .from("audit_events")
          .select("id, actor_id, actor_type, action, target_entity, target_id, metadata, ip_address, created_at")
          .order("created_at", { ascending: false })
          .limit(limit);
        if (startDate) q = q.gte("created_at", startDate);
        if (endDate) q = q.lte("created_at", endDate);
        const { data, error } = await q;
        if (error) throw error;
        records = (data || []) as Array<Record<string, unknown>>;
        break;
      }
    }

    // 4. Log Data Export Audit Event
    await logAdminAction({
      actorId: admin.id,
      action: "ADMIN_DATA_EXPORT",
      targetEntity: dataset,
      metadata: {
        dataset,
        format,
        recordsExported: records.length,
        limit,
        startDate,
        endDate,
      },
      ipAddress: ip,
    });

    const timestamp = new Date().toISOString().split("T")[0];
    const filename = `export_${dataset}_${timestamp}.${format}`;

    if (format === "json") {
      return new Response(JSON.stringify(records, null, 2), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Content-Disposition": `attachment; filename="${filename}"`,
        },
      });
    }

    const csvContent = convertToCSV(records);
    return new Response(csvContent, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="${filename}"`,
      },
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Data export failed";
    return internalError(msg);
  }
}
