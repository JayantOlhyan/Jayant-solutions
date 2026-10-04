import test from "node:test";
import assert from "node:assert/strict";
import {
  actionQueue,
  addDays,
  collected,
  commandSchema,
  dateSchema,
  daysLeft,
  emptyDetails,
  funnel,
  indiaDate,
  nextAction,
  prospectSchema,
  proposalText,
  receiptSchema,
  transition,
  type Prospect,
  type Receipt,
  type Stage,
} from "../../src/lib/sales/model";
const id = "00000000-0000-4000-8000-000000000001";
function prospect(overrides: Partial<Prospect> = {}): Prospect {
  return {
    id,
    details: {
      ...emptyDetails,
      business: "Test business",
      city: "Delhi",
      observation: "Booking button is missing",
      qualified: true,
      problem: "No enquiry action",
    },
    stage: "new",
    milestones: { new: "2026-10-03T10:00:00Z" },
    followupIndex: 0,
    version: 0,
    activity: [],
    created_at: "2026-10-03T10:00:00Z",
    ...overrides,
  };
}
function outcome(p: Prospect, stage: Stage, date = "2026-10-03T10:00:00Z") {
  return transition(
    p,
    { type: "stage", id, version: p.version, stage, note: "Actual outcome" },
    new Date(date),
  );
}
function receipt(
  amount: number,
  received_on: string,
  void_reason: string | null = null,
): Receipt {
  return {
    id,
    prospect_id: id,
    amount,
    received_on,
    reference: "BANK-REF",
    void_reason,
    created_at: "2026-10-03T10:00:00Z",
  };
}
test("India date changes at IST midnight independently of host timezone", () => {
  assert.equal(indiaDate(new Date("2026-11-18T18:29:59Z")), "2026-11-18");
  assert.equal(indiaDate(new Date("2026-11-18T18:30:00Z")), "2026-11-19");
});
test("calendar dates reject impossible and malformed dates", () => {
  assert.equal(dateSchema.safeParse("2026-02-30").success, false);
  assert.equal(dateSchema.safeParse("2026-2-03").success, false);
  assert.equal(dateSchema.safeParse("2026-11-18").success, true);
});
test("deadline is inclusive and never divides by zero", () => {
  assert.equal(daysLeft("2026-11-18"), 1);
  assert.equal(daysLeft("2026-11-19"), 0);
  assert.equal(daysLeft("2026-09-01"), 47);
  assert.equal(addDays("2026-10-31", 2), "2026-11-02");
});
test("only unvoided receipts inside the sprint count; opening cash is not revenue", () => {
  assert.equal(collected([]), 0);
  assert.equal(
    collected([
      receipt(10000, "2026-10-03"),
      receipt(50000, "2026-11-18"),
      receipt(3000, "2026-10-02"),
      receipt(4000, "2026-11-19"),
      receipt(1000, "2026-11-01", "Incorrect"),
    ]),
    60000,
  );
});
test("receipt sums preserve paise", () => {
  assert.equal(
    collected([receipt(0.1, "2026-10-03"), receipt(0.2, "2026-10-03")]),
    0.3,
  );
});
test("amounts and receipt references are validated and normalized", () => {
  const base = {
    prospectId: id,
    amount: 12000.25,
    receivedOn: "2026-10-03",
    reference: "  utr-123  ",
    verified: true,
  };
  assert.equal(receiptSchema.parse(base).reference, "UTR-123");
  for (const amount of [0, -1, Infinity, 1.001])
    assert.equal(receiptSchema.safeParse({ ...base, amount }).success, false);
  assert.equal(
    receiptSchema.safeParse({ ...base, verified: false }).success,
    false,
  );
});
test("only Indian prospects, safe website schemes, sensible deposits", () => {
  const d = prospect().details;
  assert.equal(prospectSchema.safeParse(d).success, true);
  assert.equal(
    prospectSchema.safeParse({ ...d, country: "USA" }).success,
    false,
  );
  assert.equal(
    prospectSchema.safeParse({ ...d, website: "javascript:alert(1)" }).success,
    false,
  );
  assert.equal(
    prospectSchema.safeParse({ ...d, quote: 100, deposit: 101 }).success,
    false,
  );
  assert.equal(
    prospectSchema.safeParse({ ...d, phone: "+1 555 123 1234" }).success,
    false,
  );
});
test("server-owned fields cannot be injected into prospect details", () => {
  assert.equal(
    prospectSchema.safeParse({ ...prospect().details, stage: "won" }).success,
    false,
  );
  assert.equal(
    commandSchema.safeParse({
      type: "stage",
      id,
      version: -1,
      stage: "won",
      note: "",
    }).success,
    false,
  );
});
test("research and booked calls require their evidence", () => {
  assert.throws(
    () =>
      outcome(
        prospect({ details: { ...prospect().details, qualified: false } }),
        "researched",
      ),
    /qualification/,
  );
  assert.throws(() => outcome(prospect(), "call_booked"), /call time/);
});
test("proposal and win require scope, terms, price and payment date", () => {
  assert.throws(() => outcome(prospect(), "won"), /scope/);
  assert.throws(() => outcome(prospect(), "proposal_sent"), /scope/);
});
test("first contact starts the Day 2 cadence", () => {
  const p = outcome(prospect(), "contacted");
  assert.equal(nextAction(p, "2026-10-03", [])?.date, "2026-10-05");
});
test("early follow-up is blocked and sending advances to next due date", () => {
  const p = outcome(prospect(), "contacted");
  const command = {
    type: "followup" as const,
    id,
    version: 0,
    note: "Sent useful observation",
  };
  assert.throws(
    () => transition(p, command, new Date("2026-10-04T10:00:00Z")),
    /not due/,
  );
  const next = transition(p, command, new Date("2026-10-05T10:00:00Z"));
  assert.equal(nextAction(next, "2026-10-05", [])?.date, "2026-10-08");
});
test("late follow-up skips missed slots rather than suggesting a burst of messages", () => {
  const p = outcome(prospect(), "contacted");
  const next = transition(
    p,
    { type: "followup", id, version: 0, note: "Sent today" },
    new Date("2026-10-11T10:00:00Z"),
  );
  assert.equal(nextAction(next, "2026-10-11", [])?.date, "2026-10-13");
});
test("reply stops unanswered cadence and stage change clears old reminder", () => {
  const p = outcome(prospect(), "contacted");
  p.details.nextDate = "2026-10-06";
  p.details.nextTask = "Old reminder";
  const replied = outcome(p, "replied");
  assert.equal(
    nextAction(replied, "2026-10-04", [])?.label,
    "Read the reply and qualify interest",
  );
  assert.throws(
    () => transition(replied, { type: "followup", id, version: 0, note: "x" }),
    /only for unanswered/,
  );
});
test("lost and do-not-contact records produce no action; do-not-contact cannot reopen", () => {
  for (const stage of ["lost", "do_not_contact"] as const)
    assert.equal(
      nextAction(outcome(prospect(), stage), "2026-10-04", []),
      null,
    );
  assert.throws(
    () => outcome(outcome(prospect(), "do_not_contact"), "contacted"),
    /cannot be reopened/,
  );
});
test("explicit agreed action overrides cadence, including dates after sprint", () => {
  const p = prospect({
    details: {
      ...prospect().details,
      nextTask: "Review in December",
      nextDate: "2026-12-01",
    },
  });
  assert.deepEqual(nextAction(p, "2026-10-04", []), {
    label: "Review in December",
    date: "2026-12-01",
  });
});
test("call dates display in India timezone", () => {
  const p = prospect({
    stage: "call_booked",
    details: { ...prospect().details, callAt: "2026-10-03T20:00:00Z" },
  });
  assert.equal(nextAction(p, "2026-10-03", [])?.date, "2026-10-04");
});
test("won still prompts collection until the full quote is received", () => {
  const p = prospect({
    stage: "won",
    details: { ...prospect().details, quote: 60000, paymentDue: "2026-10-10" },
  });
  assert.equal(
    nextAction(p, "2026-10-04", [receipt(30000, "2026-10-03")])?.date,
    "2026-10-10",
  );
  assert.equal(
    nextAction(p, "2026-10-04", [receipt(60000, "2026-10-03")]),
    null,
  );
});
test("queue sorts overdue first and hides terminal prospects", () => {
  const a = prospect({
    id: "a",
    details: {
      ...prospect().details,
      nextDate: "2026-10-01",
      nextTask: "Overdue",
    },
  });
  const b = prospect({ id: "b", stage: "lost" });
  assert.deepEqual(
    actionQueue([prospect(), b, a], "2026-10-04", []).map((a) => a.prospect.id),
    ["a", id],
  );
});
test("funnel keeps actual historical milestones when a prospect is lost", () => {
  let p = outcome(prospect(), "contacted");
  p = outcome(p, "replied");
  p = outcome(p, "positive");
  p = outcome(p, "lost");
  const counts = funnel([p]);
  assert.equal(counts[0].count, 1);
  assert.equal(counts[1].count, 1);
  assert.equal(counts[2].count, 1);
  assert.equal(counts[3].count, 0);
});
test("skipped outcomes and out-of-sprint outcomes are never fabricated", () => {
  const p = prospect({
    stage: "won",
    milestones: { won: "2026-11-19T10:00:00Z" },
  });
  assert.ok(funnel([p]).every((m) => m.count === 0));
});
test("proposal contains saved scope and INR prices without invented proof", () => {
  const text = proposalText({
    ...prospect().details,
    quote: 65000,
    scope: "One landing page",
    terms: "50% upfront",
    deposit: 32500,
  });
  assert.match(text, /₹65,000/);
  assert.match(text, /One landing page/);
  assert.doesNotMatch(text, /\$|testimonial|37%/);
});
