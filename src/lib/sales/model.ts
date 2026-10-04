import { z } from "zod";

export const SPRINT = {
  start: "2026-10-03",
  end: "2026-11-18",
  target: 320000,
  openingCash: 3000,
  dailyProspects: 30,
} as const;
export const stages = [
  "new",
  "researched",
  "contacted",
  "replied",
  "positive",
  "audit_sent",
  "call_booked",
  "call_attended",
  "proposal_sent",
  "won",
  "lost",
  "do_not_contact",
] as const;
export type Stage = (typeof stages)[number];
export const stageLabels: Record<Stage, string> = {
  new: "New",
  researched: "Researched",
  contacted: "Contacted",
  replied: "Replied",
  positive: "Positive reply",
  audit_sent: "Audit sent",
  call_booked: "Call booked",
  call_attended: "Call attended",
  proposal_sent: "Proposal sent",
  won: "Won",
  lost: "Lost",
  do_not_contact: "Do not contact",
};
export const indiaDate = (now = new Date()) =>
  new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
export const dateSchema = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/)
  .refine(
    (s) =>
      !isNaN(Date.parse(s)) && new Date(s).toISOString().slice(0, 10) === s,
    "Use a valid date",
  );
const optionalDate = z.union([dateSchema, z.literal("")]);
const text = z.string().trim().max(5000);
const money = z
  .number()
  .finite()
  .min(0)
  .max(100000000)
  .refine(
    (n) => Math.abs(n * 100 - Math.round(n * 100)) < 0.0001,
    "Use at most two decimal places",
  );
export const prospectSchema = z
  .object({
    business: z.string().trim().min(1).max(200),
    niche: z.enum(["Education", "Clinics", "Real estate", "Other"]),
    city: z.string().trim().min(1).max(120),
    country: z.literal("India"),
    contact: text,
    phone: z
      .string()
      .trim()
      .max(30)
      .refine(
        (v) => !v || /^(\+91[\s-]?)?[6-9][\d\s-]{9,14}$/.test(v),
        "Use an Indian mobile number, optionally with +91",
      ),
    email: z.union([z.email(), z.literal("")]),
    website: z.union([
      z.url().refine((v) => /^https?:\/\//.test(v), "Use an http or https URL"),
      z.literal(""),
    ]),
    problem: text,
    observation: text,
    channel: z.enum(["WhatsApp", "Email", "LinkedIn", "Phone"]),
    qualified: z.boolean(),
    notes: text,
    objection: text,
    callAt: z.union([z.iso.datetime({ offset: true }), z.literal("")]),
    nextDate: optionalDate,
    nextTask: z.string().trim().max(300),
    scope: text,
    exclusions: text,
    terms: text,
    quote: money,
    deposit: money,
    paymentDue: optionalDate,
    deliveryDate: optionalDate,
    proposalId: z.union([z.uuid(), z.literal("")]),
  })
  .strict()
  .refine((d) => d.deposit <= d.quote, "Deposit cannot exceed the quote");
export type ProspectDetails = z.infer<typeof prospectSchema>;
export interface Activity {
  at: string;
  action: string;
  note: string;
}
export interface Prospect {
  id: string;
  details: ProspectDetails;
  stage: Stage;
  milestones: Partial<Record<Stage, string>>;
  activity: Activity[];
  followupIndex: number;
  version: number;
  created_at: string;
}
export interface Receipt {
  id: string;
  prospect_id: string;
  amount: number;
  received_on: string;
  reference: string;
  void_reason: string | null;
  created_at: string;
}
export interface SalesData {
  prospects: Prospect[];
  receipts: Receipt[];
  proposals: { id: string; title: string; token: string }[];
}
export const emptyDetails: ProspectDetails = {
  business: "",
  niche: "Education",
  city: "",
  country: "India",
  contact: "",
  phone: "",
  email: "",
  website: "",
  problem: "",
  observation: "",
  channel: "WhatsApp",
  qualified: false,
  notes: "",
  objection: "",
  callAt: "",
  nextDate: "",
  nextTask: "",
  scope: "",
  exclusions: "",
  terms: "",
  quote: 0,
  deposit: 0,
  paymentDue: "",
  deliveryDate: "",
  proposalId: "",
};
export const receiptSchema = z
  .object({
    prospectId: z.uuid(),
    amount: money.refine((n) => n > 0, "Enter a positive amount"),
    receivedOn: dateSchema,
    reference: z
      .string()
      .trim()
      .min(3)
      .max(150)
      .transform((v) => v.toUpperCase()),
    verified: z.literal(true),
  })
  .strict();
export const commandSchema = z.discriminatedUnion("type", [
  z.object({ type: z.literal("create"), details: prospectSchema }),
  z.object({
    type: z.literal("save"),
    id: z.uuid(),
    version: z.number().int().nonnegative(),
    details: prospectSchema,
  }),
  z.object({
    type: z.literal("stage"),
    id: z.uuid(),
    version: z.number().int().nonnegative(),
    stage: z.enum(stages),
    note: text,
  }),
  z.object({
    type: z.literal("followup"),
    id: z.uuid(),
    version: z.number().int().nonnegative(),
    note: z.string().trim().min(1).max(5000),
  }),
  z.object({ type: z.literal("receipt"), receipt: receiptSchema }),
  z.object({
    type: z.literal("void"),
    id: z.uuid(),
    reason: z.string().trim().min(3).max(300),
  }),
]);
export type Command = z.infer<typeof commandSchema>;
export const followupDays = [2, 5, 10, 20, 45];
export function addDays(date: string, days: number) {
  return new Date(Date.parse(date + "T00:00:00Z") + days * 86400000)
    .toISOString()
    .slice(0, 10);
}
export const inSprint = (date: string) =>
  date >= SPRINT.start && date <= SPRINT.end;
export const inr = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(value);
export function daysLeft(today: string) {
  return Math.max(
    0,
    Math.floor(
      (Date.parse(SPRINT.end) -
        Date.parse(today < SPRINT.start ? SPRINT.start : today)) /
        86400000,
    ) + 1,
  );
}
export function collected(receipts: Receipt[]) {
  return (
    Math.round(
      receipts
        .filter((r) => !r.void_reason && inSprint(r.received_on))
        .reduce((sum, r) => sum + Number(r.amount), 0) * 100,
    ) / 100
  );
}
export function prospectCollected(id: string, receipts: Receipt[]) {
  return (
    Math.round(
      receipts
        .filter((r) => r.prospect_id === id && !r.void_reason)
        .reduce((sum, r) => sum + Number(r.amount), 0) * 100,
    ) / 100
  );
}
const closed = (p: Prospect) => ["lost", "do_not_contact"].includes(p.stage);
export function nextAction(p: Prospect, today: string, receipts: Receipt[]) {
  if (closed(p)) return null;
  const d = p.details;
  if (d.nextDate && d.nextTask) return { date: d.nextDate, label: d.nextTask };
  if (p.stage === "won") {
    if (prospectCollected(p.id, receipts) >= d.quote && d.quote > 0)
      return null;
    return {
      date: d.paymentDue || today,
      label: "Confirm payment and record the receipt",
    };
  }
  if (p.stage === "call_booked")
    return {
      date: d.callAt ? indiaDate(new Date(d.callAt)) : today,
      label: "Attend discovery call and log the outcome",
    };
  if (p.stage === "contacted") {
    const offset = followupDays[p.followupIndex];
    if (offset === undefined)
      return {
        date: today,
        label: "Cadence complete — close or agree a next step",
      };
    return {
      date: addDays(indiaDate(new Date(p.milestones.contacted!)), offset),
      label: `Day ${offset}: send a useful follow-up`,
    };
  }
  const labels: Partial<Record<Stage, string>> = {
    new: "Research the enquiry flow and qualify",
    researched: "Personalize the opener and make first contact",
    replied: "Read the reply and qualify interest",
    positive: "Record and share a 60–120 second audit",
    audit_sent: "Offer two times for a 15-minute call",
    call_attended: "Write the scoped proposal and agree a decision date",
    proposal_sent: "Review the proposal with the decision-maker",
  };
  return { date: today, label: labels[p.stage] || "Agree the next step" };
}
export function actionQueue(
  prospects: Prospect[],
  today: string,
  receipts: Receipt[],
) {
  return prospects
    .flatMap((p) => {
      const action = nextAction(p, today, receipts);
      return action ? [{ prospect: p, ...action }] : [];
    })
    .sort(
      (a, b) =>
        a.date.localeCompare(b.date) ||
        (b.prospect.stage === "won" ? 1 : 0) -
          (a.prospect.stage === "won" ? 1 : 0) ||
        a.prospect.created_at.localeCompare(b.prospect.created_at),
    );
}
export function transition(
  p: Prospect,
  command: Extract<Command, { type: "stage" | "followup" }>,
  now = new Date(),
): Prospect {
  const at = now.toISOString();
  const today = indiaDate(now);
  if (command.type === "followup") {
    if (p.stage !== "contacted" || p.followupIndex >= followupDays.length)
      throw new Error(
        "Follow-up cadence is only for unanswered first contact.",
      );
    const due = addDays(
      indiaDate(new Date(p.milestones.contacted!)),
      followupDays[p.followupIndex],
    );
    if (today < due) throw new Error("This follow-up is not due yet.");
    const firstContact = indiaDate(new Date(p.milestones.contacted!));
    const nextIndex = followupDays.findIndex(
      (offset, index) =>
        index > p.followupIndex && addDays(firstContact, offset) > today,
    );
    return {
      ...p,
      followupIndex: nextIndex < 0 ? followupDays.length : nextIndex,
      details: { ...p.details, nextDate: "", nextTask: "" },
      activity: [
        ...p.activity,
        { at, action: "Follow-up sent", note: command.note },
      ],
    };
  }
  const stage = command.stage;
  if (stage === p.stage) throw new Error("This outcome is already recorded.");
  if (p.stage === "do_not_contact")
    throw new Error("Do-not-contact records cannot be reopened.");
  if (
    stage === "researched" &&
    (!p.details.qualified || !p.details.problem || !p.details.observation)
  )
    throw new Error(
      "Record the visible problem, observation and qualification first.",
    );
  if (stage === "contacted" && !p.details.observation)
    throw new Error("Save a specific observation before outreach.");
  if (stage === "call_booked" && !p.details.callAt)
    throw new Error("Save the agreed call time first.");
  if (
    ["proposal_sent", "won"].includes(stage) &&
    (!p.details.scope ||
      !p.details.terms ||
      p.details.quote <= 0 ||
      !p.details.paymentDue)
  )
    throw new Error(
      "Save scope, payment terms, quote and payment due date first.",
    );
  if (["lost", "do_not_contact"].includes(stage) && !command.note)
    throw new Error("Record the reason before closing this prospect.");
  return {
    ...p,
    stage,
    details: { ...p.details, nextDate: "", nextTask: "" },
    milestones: { ...p.milestones, [stage]: p.milestones[stage] || at },
    activity: [
      ...p.activity,
      { at, action: stageLabels[stage], note: command.note },
    ],
  };
}
export function funnel(prospects: Prospect[]) {
  const keys: Stage[] = [
    "contacted",
    "replied",
    "positive",
    "call_booked",
    "call_attended",
    "proposal_sent",
    "won",
  ];
  return keys.map((stage) => ({
    stage,
    label: stageLabels[stage],
    count: prospects.filter(
      (p) =>
        p.milestones[stage] &&
        inSprint(indiaDate(new Date(p.milestones[stage]!))),
    ).length,
  }));
}
export function proposalText(d: ProspectDetails) {
  return `Proposal for ${d.business}\n\nProblem to address\n${d.problem || "[Confirm the problem]"}\n\nAgreed scope\n${d.scope || "[List deliverables and acceptance criteria]"}\n\nExclusions\n${d.exclusions || "[Confirm exclusions]"}\n\nTotal: ${inr(d.quote)}\nInitial payment: ${inr(d.deposit)}\nPayment due: ${d.paymentDue || "[Agree date]"}\nDelivery: ${d.deliveryDate || "[Agree date after inputs are received]"}\nPayment terms: ${d.terms || "[Milestones, tax treatment and recurring costs]"}\n\nIf this scope works for you, please confirm the decision-maker and billing details. We will issue the agreement and invoice with verified payment instructions. Work begins once the agreed initial payment is received.\n\nNo lead or revenue uplift is guaranteed.`;
}
