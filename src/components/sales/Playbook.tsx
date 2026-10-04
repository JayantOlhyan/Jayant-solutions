"use client";
import { useState } from "react";
import {
  proof,
  callScript,
  objections,
  followups,
} from "@/data/sales-playbook";
export function CopyText({
  text,
  label = "Copy script",
}: {
  text: string;
  label?: string;
}) {
  const [message, setMessage] = useState("");
  return (
    <div className="sc-copy">
      <pre>{text}</pre>
      <button
        type="button"
        className="sc-button"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(text);
            setMessage("Copied");
          } catch {
            setMessage(
              "Copy unavailable. Select the text above and copy it manually.",
            );
          }
        }}
      >
        {label}
      </button>
      <span role="status">{message}</span>
    </div>
  );
}
export default function Playbook() {
  return (
    <div className="sc-stack">
      <section className="sc-panel">
        <h2>Business Lead & Conversion System</h2>
        <p>
          Diagnose the enquiry problem first. Scope a website or landing page,
          lead capture, WhatsApp routing, booking or follow-up around that
          problem. Add AI only when it serves the workflow.
        </p>
        <div className="sc-three">
          {[
            ["Fix", "₹35,000–₹45,000", "One major conversion problem"],
            [
              "Growth",
              "₹60,000–₹85,000",
              "Website or landing page plus lead system",
            ],
            [
              "Automation",
              "₹90,000–₹1,25,000+",
              "Lead system plus workflow or AI",
            ],
          ].map(([name, price, description]) => (
            <div className="sc-inset" key={name}>
              <h3>{name}</h3>
              <strong>{price}</strong>
              <p>{description}</p>
            </div>
          ))}
        </div>
        <p className="sc-muted">
          Test prices, not validated market benchmarks. Diagnose before quoting.
          Agree taxes, recurring costs, delivery dependencies and payment
          milestones in writing.
        </p>
      </section>
      <section className="sc-panel">
        <h2>Outreach & audit</h2>
        <CopyText
          text={
            "Hi [Name] — Jayant here. I came across [Business] in [City]. I noticed [specific, verified observation] in your enquiry flow. Would it be useful if I sent a short walkthrough of what I would change?"
          }
        />
        <details>
          <summary>After they say yes</summary>
          <CopyText
            text={
              "Here is the walkthrough I recorded: [actual link]. I noticed [observation]. This may make [next step] harder. I would change [specific element] so visitors can [clearer action]. If useful, I can walk you through the complete flow in 15 minutes. Would [time 1 IST] or [time 2 IST] work?"
            }
          />
        </details>
        <p className="sc-muted">
          Send manually after review. Use an appropriate contact channel. Stop
          when asked; do not claim measured conversion gains without evidence.
        </p>
      </section>
      <section className="sc-panel" id="call-script">
        <h2>The 20-minute discovery call</h2>
        {callScript.map(([title, body]) => (
          <details key={title} open>
            <summary>{title}</summary>
            <p>{body}</p>
          </details>
        ))}
      </section>
      <section className="sc-panel">
        <h2>Handle the objection</h2>
        {objections.map(([title, body]) => (
          <details key={title}>
            <summary>{title}</summary>
            <CopyText text={body} />
          </details>
        ))}
      </section>
      <section className="sc-panel">
        <h2>Follow up with a reason</h2>
        <p>
          The unanswered-outreach cadence is anchored to first contact. A reply
          stops that cadence. Agree a specific next action for active
          conversations; never send several overdue messages at once.
        </p>
        {followups.map(([title, body]) => (
          <details key={title}>
            <summary>{title}</summary>
            <CopyText text={body} />
          </details>
        ))}
        <p className="sc-muted">
          A follow-up after 18 November remains visible, but money received
          after that date does not count toward this sprint.
        </p>
      </section>
      <section className="sc-panel">
        <h2>From yes to payment</h2>
        <ol>
          <li>
            Confirm deliverables, exclusions, acceptance checks and delivery
            date.
          </li>
          <li>
            Agree price, initial payment and remaining milestones. Test 60–70%
            upfront for smaller scopes, or 50% / 30% / 20% for larger work where
            sensible.
          </li>
          <li>
            Confirm billing details; issue and review the agreement and invoice
            in Commercial operations.
          </li>
          <li>Send verified payment instructions and agree a payment date.</li>
          <li>
            Check the actual receipt, record it once, then hand off to
            fulfillment.
          </li>
        </ol>
        <CopyText
          text={
            "Great. I’ll send the agreed scope and invoice for ₹[initial payment]. Once that payment is received and the required inputs are ready, we can begin on [agreed date]. The remaining payments are [milestones]. Does that work for you?"
          }
        />
      </section>
      <section className="sc-panel">
        <h2>Only your real proof</h2>
        <p>
          Show the actual work. No invented testimonials, business outcomes or
          clinic case studies.
        </p>
        <div className="sc-two">
          {proof.map((p) => (
            <article className="sc-inset" key={p.name}>
              <h3>{p.name}</h3>
              <p>{p.detail}</p>
              <span className="sc-muted">Use for: {p.use}</span>
              {p.url && (
                <p>
                  <a href={p.url} target="_blank" rel="noreferrer">
                    Open FarmIQ
                  </a>
                </p>
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
