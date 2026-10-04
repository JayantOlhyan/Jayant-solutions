"use client";
import { useState, type FormEvent } from "react";
import { CopyText } from "./Playbook";
import {
  emptyDetails,
  indiaDate,
  inr,
  nextAction,
  prospectCollected,
  proposalText,
  stages,
  stageLabels,
  type Command,
  type Prospect,
  type ProspectDetails,
  type Receipt,
  type SalesData,
  type Stage,
} from "@/lib/sales/model";

type Props = {
  prospect?: Prospect;
  receipts: Receipt[];
  proposals: SalesData["proposals"];
  busy: boolean;
  run: (command: Command) => Promise<boolean>;
  close: () => void;
  onDirty: (dirty: boolean) => void;
  today: string;
};
const toLocalIST = (value: string) =>
  value
    ? new Date(new Date(value).getTime() + 330 * 60000)
        .toISOString()
        .slice(0, 16)
    : "";
export default function ProspectEditor({
  prospect: p,
  receipts,
  proposals,
  busy,
  run,
  close,
  onDirty,
  today,
}: Props) {
  const [d, setD] = useState<ProspectDetails>(
    p?.details || { ...emptyDetails },
  );
  const [stage, setStage] = useState<Stage>(p?.stage || "new");
  const [note, setNote] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(today);
  const [reference, setReference] = useState("");
  const [verified, setVerified] = useState(false);
  const [voidId, setVoidId] = useState("");
  const [voidReason, setVoidReason] = useState("");
  const dirty =
    JSON.stringify(d) !== JSON.stringify(p?.details || emptyDetails);
  const ownReceipts = receipts.filter((r) => r.prospect_id === p?.id);
  const action = p ? nextAction(p, today, receipts) : null;
  const set = <K extends keyof ProspectDetails>(
    key: K,
    value: ProspectDetails[K],
  ) => {
    setD((prev) => ({ ...prev, [key]: value }));
    onDirty(true);
  };
  function field(
    key: keyof ProspectDetails,
    label: string,
    type = "text",
    required = false,
  ) {
    return (
      <label>
        {label}
        <input
          type={type}
          required={required}
          value={String(d[key])}
          onChange={(e) =>
            set(
              key,
              type === "number" ? Number(e.target.value) : e.target.value,
            )
          }
          min={type === "number" ? 0 : undefined}
          step={type === "number" ? "0.01" : undefined}
          maxLength={type === "text" ? 200 : undefined}
        />
      </label>
    );
  }
  function area(
    key:
      | "problem"
      | "observation"
      | "notes"
      | "objection"
      | "scope"
      | "exclusions"
      | "terms",
    label: string,
  ) {
    return (
      <label>
        {label}
        <textarea
          rows={3}
          maxLength={5000}
          value={d[key]}
          onChange={(e) => set(key, e.target.value)}
        />
      </label>
    );
  }
  async function save(e: FormEvent) {
    e.preventDefault();
    await run(
      p
        ? { type: "save", id: p.id, version: p.version, details: d }
        : { type: "create", details: d },
    );
  }
  return (
    <section
      className="sc-panel sc-editor"
      aria-label={p ? `Prospect: ${p.details.business}` : "New prospect"}
    >
      <div className="sc-row">
        <div>
          <span className="sc-muted">India prospect</span>
          <h2>{p ? p.details.business : "Add a prospect"}</h2>
        </div>
        <button
          className="sc-button"
          disabled={busy}
          onClick={() => {
            if (!dirty || window.confirm("Discard your unsaved changes?"))
              close();
          }}
        >
          Close
        </button>
      </div>
      {action && (
        <div className="sc-next">
          <strong>{action.label}</strong>
          <span>
            {action.date < today ? "Overdue · " : ""}
            {action.date}
          </span>
        </div>
      )}
      <form onSubmit={save}>
        <fieldset disabled={busy}>
          <div className="sc-two">
            {field("business", "Business name", "text", true)}
            {field("city", "Indian city", "text", true)}
            <label>
              Segment
              <select
                value={d.niche}
                onChange={(e) =>
                  set("niche", e.target.value as ProspectDetails["niche"])
                }
              >
                {["Education", "Clinics", "Real estate", "Other"].map((n) => (
                  <option key={n}>{n}</option>
                ))}
              </select>
            </label>
            <label>
              Contact channel
              <select
                value={d.channel}
                onChange={(e) =>
                  set("channel", e.target.value as ProspectDetails["channel"])
                }
              >
                {["WhatsApp", "Email", "LinkedIn", "Phone"].map((n) => (
                  <option key={n}>{n}</option>
                ))}
              </select>
            </label>
            {field("contact", "Decision-maker / contact")}
            {field("phone", "Indian mobile (+91)", "tel")}
            {field("email", "Email", "email")}
            {field("website", "Website", "url")}
          </div>
          <details open>
            <summary>Research & qualification</summary>
            {area("problem", "Visible enquiry problem")}
            {area("observation", "Specific observation for the opening line")}
            <label className="sc-check">
              <input
                type="checkbox"
                checked={d.qualified}
                onChange={(e) => set("qualified", e.target.checked)}
              />
              Qualified: ability to pay, visible problem, lead value, reachable
              decision-maker and urgency checked
            </label>
          </details>
          <details>
            <summary>Call, objection & next action</summary>
            <label>
              Agreed call time (IST)
              <input
                type="datetime-local"
                value={toLocalIST(d.callAt)}
                onChange={(e) =>
                  set(
                    "callAt",
                    e.target.value
                      ? new Date(e.target.value + ":00+05:30").toISOString()
                      : "",
                  )
                }
              />
            </label>
            {area(
              "notes",
              "Call notes: lead source, response process, customer value, decision-maker, urgency",
            )}
            {area("objection", "Objection and agreed response")}
            <div className="sc-two">
              {field("nextTask", "Agreed next action")}
              {field("nextDate", "Next action date", "date")}
            </div>
            <p className="sc-muted">
              Both fields are required for a custom reminder. Logging a new
              outcome clears this reminder so the next stage can take over.
            </p>
          </details>
          <details>
            <summary>Proposal & closing</summary>
            {area("scope", "Deliverables and acceptance checks")}
            {area("exclusions", "Exclusions and client responsibilities")}
            <div className="sc-two">
              {field("quote", "Total agreed price (INR)", "number")}
              {field("deposit", "Initial payment (INR)", "number")}
              {field("paymentDue", "Payment due", "date")}
              {field("deliveryDate", "Agreed delivery date", "date")}
            </div>
            {area(
              "terms",
              "Payment milestones, tax treatment and recurring costs",
            )}
            <label>
              Link an existing proposal (latest 100)
              <select
                value={d.proposalId}
                onChange={(e) => set("proposalId", e.target.value)}
              >
                <option value="">No existing proposal linked</option>
                {proposals.map((pr) => (
                  <option key={pr.id} value={pr.id}>
                    {pr.title}
                  </option>
                ))}
              </select>
            </label>
            <p className="sc-muted">
              Link only this Indian prospect’s proposal. The draft below uses
              your sprint scope and INR terms. Review existing commercial
              templates before sending them.
            </p>
          </details>
          <button className="sc-button sc-primary" type="submit">
            {busy ? "Saving…" : p ? "Save details" : "Add prospect"}
          </button>
          {dirty && <span className="sc-muted"> Unsaved details</span>}
        </fieldset>
      </form>
      {p && (
        <>
          <section className="sc-section">
            <h3>Log what happened</h3>
            <p className="sc-muted">
              Current: {stageLabels[p.stage]}. Log only real outcomes; skipped
              steps are not counted. Save details before logging an outcome.
            </p>
            <fieldset disabled={busy || dirty || p.stage === "do_not_contact"}>
              <label>
                Outcome
                <select
                  value={stage}
                  onChange={(e) => setStage(e.target.value as Stage)}
                >
                  {stages.map((s) => (
                    <option key={s} value={s}>
                      {stageLabels[s]}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Outcome / follow-up note
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  rows={2}
                  maxLength={5000}
                />
              </label>
              <div className="sc-actions">
                <button
                  className="sc-button sc-primary"
                  disabled={stage === p.stage}
                  onClick={() =>
                    run({
                      type: "stage",
                      id: p.id,
                      version: p.version,
                      stage,
                      note,
                    })
                  }
                >
                  Log outcome
                </button>
                {p.stage === "contacted" && p.followupIndex < 5 && (
                  <button
                    className="sc-button"
                    disabled={!note.trim()}
                    onClick={() =>
                      run({
                        type: "followup",
                        id: p.id,
                        version: p.version,
                        note,
                      })
                    }
                  >
                    Log follow-up sent
                  </button>
                )}
              </div>
            </fieldset>
            {p.stage === "do_not_contact" && (
              <p>
                Contact is stopped. Keep this record to prevent further
                outreach.
              </p>
            )}
          </section>
          <details>
            <summary>Personalized outreach draft</summary>
            <CopyText
              text={`Hi ${d.contact || "[Name]"} — Jayant here. I came across ${d.business} in ${d.city}. I noticed ${d.observation || "[add a specific, verified observation]"}. Would a short walkthrough of what I would change be useful?`}
            />
            <p className="sc-muted">
              Review and send manually via {d.channel}. Copying does not log
              contact.
            </p>
          </details>
          <details>
            <summary>Proposal draft</summary>
            <CopyText text={proposalText(d)} label="Copy proposal draft" />
            {d.proposalId && proposals.find((pr) => pr.id === d.proposalId) && (
              <a
                href={`/proposal/${encodeURIComponent(proposals.find((pr) => pr.id === d.proposalId)!.token)}`}
                target="_blank"
                rel="noreferrer"
              >
                Open linked client proposal
              </a>
            )}
          </details>
          <details>
            <summary>
              Record money received · {inr(prospectCollected(p.id, receipts))}
            </summary>
            <p>
              Record a verified bank/UPI or Razorpay receipt once. This sprint
              ledger is entered manually; existing payment records are not added
              automatically.
            </p>
            <p className="sc-muted">
              Quoted: {inr(d.quote)} · Uncollected against quote:{" "}
              {inr(Math.max(0, d.quote - prospectCollected(p.id, receipts)))}
            </p>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                if (
                  await run({
                    type: "receipt",
                    receipt: {
                      prospectId: p.id,
                      amount: Number(amount),
                      receivedOn: date,
                      reference,
                      verified: true,
                    },
                  })
                ) {
                  setAmount("");
                  setReference("");
                  setVerified(false);
                }
              }}
            >
              <fieldset disabled={busy || dirty}>
                <div className="sc-two">
                  <label>
                    Amount received (INR)
                    <input
                      type="number"
                      min="0.01"
                      max="100000000"
                      step="0.01"
                      required
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </label>
                  <label>
                    Received date (IST)
                    <input
                      type="date"
                      required
                      max={today}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </label>
                </div>
                <label>
                  Unique bank / UPI / Razorpay payment reference
                  <input
                    required
                    minLength={3}
                    maxLength={150}
                    value={reference}
                    onChange={(e) => setReference(e.target.value)}
                  />
                </label>
                <label className="sc-check">
                  <input
                    type="checkbox"
                    required
                    checked={verified}
                    onChange={(e) => setVerified(e.target.checked)}
                  />
                  I verified this amount was received, and this is not a
                  duplicate.
                </label>
                <button
                  className="sc-button sc-primary"
                  type="submit"
                  disabled={!verified}
                >
                  Record receipt
                </button>
              </fieldset>
            </form>
            <div className="sc-stack">
              {ownReceipts.map((r) => (
                <div className="sc-inset" key={r.id}>
                  <strong>
                    {inr(Number(r.amount))} · {r.received_on}
                  </strong>
                  <p>{r.reference}</p>
                  {r.void_reason ? (
                    <span className="sc-muted">Voided: {r.void_reason}</span>
                  ) : (
                    <button
                      className="sc-button"
                      disabled={busy || dirty}
                      onClick={() => {
                        setVoidId(r.id);
                        setVoidReason("");
                      }}
                    >
                      Void incorrect receipt
                    </button>
                  )}
                </div>
              ))}
            </div>
            {voidId && (
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  if (
                    await run({ type: "void", id: voidId, reason: voidReason })
                  )
                    setVoidId("");
                }}
              >
                <label>
                  Reason for correction
                  <input
                    required
                    minLength={3}
                    maxLength={300}
                    value={voidReason}
                    onChange={(e) => setVoidReason(e.target.value)}
                  />
                </label>
                <button className="sc-button" disabled={busy}>
                  Confirm void
                </button>
                <button
                  type="button"
                  className="sc-button"
                  onClick={() => setVoidId("")}
                >
                  Cancel
                </button>
              </form>
            )}
          </details>
          <details>
            <summary>Activity history ({p.activity.length})</summary>
            <ol className="sc-history">
              {[...p.activity].reverse().map((a, i) => (
                <li key={`${a.at}-${i}`}>
                  <strong>{a.action}</strong>
                  <span>
                    {indiaDate(new Date(a.at))} ·{" "}
                    {new Date(a.at).toLocaleTimeString("en-IN", {
                      timeZone: "Asia/Kolkata",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}{" "}
                    IST
                  </span>
                  {a.note && <p>{a.note}</p>}
                </li>
              ))}
            </ol>
          </details>
        </>
      )}
    </section>
  );
}
