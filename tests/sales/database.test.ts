import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { PGlite } from "@electric-sql/pglite";

test("migration enforces private access, duplicate receipt protection and atomic version updates", async () => {
  const db = new PGlite();
  try {
    await db.exec(`create role anon; create role authenticated; create role service_role bypassrls;
      create table public.admin_users (id uuid primary key);
      insert into public.admin_users values ('00000000-0000-4000-8000-000000000001');`);
    await db.exec(
      readFileSync("supabase/migrations/00014_india_sales_cockpit.sql", "utf8"),
    );
    await db.exec(
      `insert into sales_prospects(id,details,created_by) values ('00000000-0000-4000-8000-000000000002','{"country":"India"}','00000000-0000-4000-8000-000000000001');`,
    );
    const receipt = (ref: string, amount = 100) =>
      db.exec(
        `insert into sales_receipts(prospect_id,amount,received_on,reference,created_by) values ('00000000-0000-4000-8000-000000000002',${amount},'2026-10-04','${ref}','00000000-0000-4000-8000-000000000001')`,
      );
    await receipt("UTR-123");
    await assert.rejects(receipt(" utr-123 "), /duplicate key/);
    await assert.rejects(receipt("UTR-zero", 0), /check constraint/);
    for (const role of ["anon", "authenticated"]) {
      await db.exec(`set role ${role}`);
      await assert.rejects(
        db.query("select * from sales_prospects"),
        /permission denied/,
      );
      await assert.rejects(
        db.query("select * from sales_receipts"),
        /permission denied/,
      );
      await db.exec("reset role");
    }
    await db.exec("set role service_role");
    assert.equal(
      (await db.query("select * from sales_prospects")).rows.length,
      1,
    );
    await db.exec("reset role");
    const first = await db.query(
      "update sales_prospects set version=version+1 where version=0 returning id",
    );
    const stale = await db.query(
      "update sales_prospects set version=version+1 where version=0 returning id",
    );
    assert.equal(first.rows.length, 1);
    assert.equal(stale.rows.length, 0);
    await db.exec(
      `update sales_receipts set void_reason='Wrong amount',voided_by='00000000-0000-4000-8000-000000000001',voided_at=now()`,
    );
    await receipt("UTR-123", 200);
    assert.equal(
      (
        await db.query<{ total: string }>(
          "select sum(amount) as total from sales_receipts where void_reason is null",
        )
      ).rows[0].total,
      "200.00",
    );
    await assert.rejects(
      db.exec(
        `insert into sales_prospects(details,created_by) values ('{"country":"USA"}','00000000-0000-4000-8000-000000000001')`,
      ),
      /check constraint/,
    );
  } finally {
    await db.close();
  }
});
