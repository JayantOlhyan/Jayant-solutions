"use client";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import {
  ArrowUpRight,
  RefreshCw,
  Target,
  Users,
  BookOpen,
  IndianRupee,
} from "lucide-react";
import {
  SPRINT,
  actionQueue,
  collected,
  daysLeft,
  funnel,
  indiaDate,
  inr,
  stageLabels,
  stages,
  type Command,
  type SalesData,
} from "@/lib/sales/model";
import { steps } from "@/data/sales-playbook";
import Playbook from "./Playbook";
import ProspectEditor from "./ProspectEditor";

type View = "today" | "prospects" | "playbook";
export default function SalesCockpit() {
  const [data, setData] = useState<SalesData | null>(null);
  const [view, setView] = useState<View>("today");
  const [selected, setSelected] = useState<string | null>(null);
  const [editorDirty, setEditorDirty] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [segment, setSegment] = useState("all");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [today, setToday] = useState(indiaDate());
  const load = useCallback(async () => {
    const response = await fetch("/api/admin/sales", { cache: "no-store" });
    const result = await response.json();
    if (!response.ok)
      throw new Error(result.error || "Could not load the sales workspace.");
    setData(result);
  }, []);
  useEffect(() => {
    let active = true;
    Promise.resolve()
      .then(load)
      .catch((e) => {
        if (active) setError(e.message);
      });
    const interval = setInterval(() => setToday(indiaDate()), 60000);
    return () => {
      active = false;
      clearInterval(interval);
    };
  }, [load]);
  useEffect(() => {
    const read = () => {
      const hash = window.location.hash.slice(1);
      if (["today", "prospects", "playbook"].includes(hash))
        setView(hash as View);
    };
    queueMicrotask(read);
    window.addEventListener("hashchange", read);
    return () => window.removeEventListener("hashchange", read);
  }, []);
  useEffect(() => {
    const warn = (event: BeforeUnloadEvent) => {
      if (editorDirty) {
        event.preventDefault();
        event.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [editorDirty]);
  function navigate(next: View) {
    if (
      editorDirty &&
      next !== view &&
      !window.confirm("Discard your unsaved prospect changes?")
    )
      return;
    if (next !== view) setEditorDirty(false);
    setView(next);
    window.history.pushState(null, "", `#${next}`);
  }
  function open(id: string) {
    setSelected(id);
    navigate("prospects");
  }
  async function refresh() {
    if (editorDirty && !window.confirm("Reload and discard unsaved changes?"))
      return;
    setEditorDirty(false);
    setSelected(null);
    setBusy(true);
    setError("");
    try {
      await load();
      setMessage("Workspace refreshed.");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not refresh.");
    } finally {
      setBusy(false);
    }
  }
  async function run(command: Command) {
    setBusy(true);
    setError("");
    setMessage("");
    try {
      const response = await fetch("/api/admin/sales", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(command),
      });
      const result = await response.json();
      if (!response.ok)
        throw new Error(result.error || "Change could not be saved.");
      try {
        await load();
      } catch {
        setError(
          "Change saved, but the refreshed data could not load. Reload before making another change.",
        );
        setData(null);
        return false;
      }
      if (command.type === "create") setSelected(result.id);
      setEditorDirty(false);
      setMessage(
        command.type === "receipt"
          ? "Receipt recorded. Sprint totals updated."
          : command.type === "void"
            ? "Receipt voided. Sprint totals updated."
            : "Saved.",
      );
      return true;
    } catch (e) {
      setError(
        e instanceof Error
          ? e.message
          : "Could not save. Your edits are still here.",
      );
      return false;
    } finally {
      setBusy(false);
    }
  }
  const prospects = data?.prospects || [];
  const receipts = data?.receipts || [];
  const cash = collected(receipts);
  const remaining = Math.max(0, SPRINT.target - cash);
  const days = daysLeft(today);
  const queue = actionQueue(prospects, today, receipts);
  const due = queue.filter((a) => a.date <= today);
  const metrics = funnel(prospects);
  const selectedProspect = prospects.find((p) => p.id === selected);
  const visible = prospects.filter(
    (p) =>
      (filter === "all" ||
        p.stage === filter ||
        (filter === "due" && due.some((a) => a.prospect.id === p.id))) &&
      (segment === "all" || p.details.niche === segment) &&
      `${p.details.business} ${p.details.city} ${p.details.contact}`
        .toLowerCase()
        .includes(search.toLowerCase()),
  );
  const todayCount = (kind: string) =>
    prospects.filter((p) =>
      Object.entries(p.milestones).some(
        ([stage, at]) =>
          stageLabels[stage as keyof typeof stageLabels] === kind &&
          indiaDate(new Date(at)) === today,
      ),
    ).length;
  function exportData() {
    if (!data) return;
    const url = URL.createObjectURL(
      new Blob(
        [
          JSON.stringify(
            { sprint: SPRINT, exportedAt: new Date().toISOString(), ...data },
            null,
            2,
          ),
        ],
        { type: "application/json" },
      ),
    );
    const a = document.createElement("a");
    a.href = url;
    a.download = `india-sales-${today}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }
  return (
    <div className="sales-cockpit">
      <header className="sc-header">
        <div className="sc-brand">
          <span className="sc-mark">J.</span>
          <div>
            <strong>Jayant Systems</strong>
            <span>India sales cockpit</span>
          </div>
        </div>
        <Link href="/admin/dashboard">
          Commercial operations <ArrowUpRight size={15} />
        </Link>
      </header>
      <main className="sc-main">
        <div className="sc-row sc-title">
          <div>
            <p className="sc-muted">
              3 October – 18 November 2026 · India only
            </p>
            <h1>Turn conversations into collections.</h1>
          </div>
          <div className="sc-actions">
            <button className="sc-button" disabled={busy} onClick={refresh}>
              <RefreshCw size={15} />
              Refresh
            </button>
            <button
              className="sc-button"
              disabled={!data || busy}
              onClick={exportData}
            >
              Export data
            </button>
          </div>
        </div>
        <nav className="sc-tabs" aria-label="Sales workspace">
          {(
            [
              ["today", "Today", Target],
              ["prospects", "Prospects", Users],
              ["playbook", "Playbook", BookOpen],
            ] as const
          ).map(([key, label, Icon]) => (
            <a
              key={key}
              href={`#${key}`}
              aria-current={view === key ? "page" : undefined}
              onClick={(e) => {
                e.preventDefault();
                navigate(key);
              }}
            >
              <Icon size={18} />
              {label}
              {key === "today" && data && <span>{due.length}</span>}
            </a>
          ))}
        </nav>
        {error && (
          <div className="sc-alert" role="alert">
            {error}{" "}
            <button className="sc-button" disabled={busy} onClick={refresh}>
              Reload workspace
            </button>
          </div>
        )}
        <div role="status" className="sc-status">
          {busy ? "Saving / loading…" : message}
        </div>
        {!data && !error && <p>Loading your sales workspace…</p>}
        {data && view === "today" && (
          <div className="sc-stack">
            <section className="sc-cash">
              <div>
                <span>
                  <IndianRupee size={18} />
                  Actual sprint collections
                </span>
                <strong>{inr(cash)}</strong>
                <p>of {inr(SPRINT.target)} received by 18 November</p>
                <progress
                  aria-label="Sprint collection progress"
                  value={Math.min(cash, SPRINT.target)}
                  max={SPRINT.target}
                />
                <p className="sc-muted">
                  Verified receipts dated 3 Oct–18 Nov. Opening cash of{" "}
                  {inr(SPRINT.openingCash)} is separate.
                </p>
              </div>
              <div className="sc-cash-aside">
                <div>
                  <span>Still to collect</span>
                  <strong>{inr(remaining)}</strong>
                </div>
                <div>
                  <span>
                    {today < SPRINT.start
                      ? "Sprint starts 3 October"
                      : days
                        ? `${days} calendar days, including today`
                        : "Sprint ended"}
                  </span>
                  <strong>
                    {remaining === 0
                      ? "Target reached"
                      : days
                        ? `${inr(Math.ceil(remaining / days))} / day`
                        : "Review final receipts"}
                  </strong>
                </div>
              </div>
            </section>
            <div className="sc-two sc-work-grid">
              <section className="sc-panel">
                <div className="sc-row">
                  <h2>Do this next</h2>
                  <span className="sc-badge">{due.length} due</span>
                </div>
                {due.length ? (
                  <div className="sc-queue">
                    {due.slice(0, 8).map((a) => (
                      <button
                        key={a.prospect.id}
                        onClick={() => open(a.prospect.id)}
                      >
                        <div>
                          <strong>{a.prospect.details.business}</strong>
                          <span>{a.label}</span>
                        </div>
                        <small className={a.date < today ? "sc-overdue" : ""}>
                          {a.date < today ? "Overdue " : "Today "}
                          {a.date < today ? a.date : ""}
                        </small>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="sc-empty">
                    <h3>
                      {prospects.length
                        ? "No actions due today"
                        : "Start with one qualified business"}
                    </h3>
                    <p>
                      Find an Indian business with a visible enquiry problem.
                      Save the observation, then use it in your opener.
                    </p>
                    <button
                      className="sc-button sc-primary"
                      onClick={() => open("new")}
                    >
                      Add a prospect
                    </button>
                  </div>
                )}
                {due.length > 8 && (
                  <button
                    className="sc-button"
                    onClick={() => {
                      setFilter("due");
                      navigate("prospects");
                    }}
                  >
                    View all {due.length} due actions in prospects
                  </button>
                )}
                {queue.some((a) => a.date > today) && (
                  <details>
                    <summary>Upcoming actions</summary>
                    {queue
                      .filter((a) => a.date > today)
                      .slice(0, 8)
                      .map((a) => (
                        <button
                          className="sc-upcoming"
                          key={a.prospect.id}
                          onClick={() => open(a.prospect.id)}
                        >
                          {a.date} · {a.prospect.details.business} · {a.label}
                        </button>
                      ))}
                  </details>
                )}
              </section>
              <section className="sc-panel">
                <h2>Today’s execution</h2>
                <p className="sc-muted">{today} · India Standard Time</p>
                <div className="sc-daily">
                  {[
                    [
                      "Qualified prospects added",
                      prospects.filter(
                        (p) =>
                          p.details.qualified &&
                          indiaDate(new Date(p.created_at)) === today,
                      ).length,
                      `/ ${SPRINT.dailyProspects}`,
                    ],
                    ["First contacts", todayCount("Contacted"), ""],
                    ["Replies logged", todayCount("Replied"), ""],
                    ["Calls attended", todayCount("Call attended"), ""],
                    ["Proposals sent", todayCount("Proposal sent"), ""],
                  ].map(([label, count, suffix]) => (
                    <div key={label}>
                      <span>{label}</span>
                      <strong>
                        {count} {suffix}
                      </strong>
                    </div>
                  ))}
                </div>
                <p className="sc-muted">
                  Start with 30 qualified prospects a day. Prioritize due
                  conversations and payment commitments before fresh outreach.
                </p>
                <button className="sc-button" onClick={() => open("new")}>
                  Add a prospect
                </button>
              </section>
            </div>
            <section className="sc-panel">
              <h2>The sprint funnel</h2>
              <p className="sc-muted">
                Distinct prospects with each outcome logged during the sprint.
                Skipped outcomes are not inferred; closing a record preserves
                its history.
              </p>
              <div className="sc-funnel">
                <div>
                  <strong>{prospects.length}</strong>
                  <span>Prospects</span>
                </div>
                {metrics.map((m) => (
                  <div key={m.stage}>
                    <strong>{m.count}</strong>
                    <span>{m.label}</span>
                  </div>
                ))}
              </div>
              <div className="sc-three">
                {[
                  ["Positive / contacted", metrics[2].count, metrics[0].count],
                  ["Proposal / attended", metrics[5].count, metrics[4].count],
                  ["Won / proposal", metrics[6].count, metrics[5].count],
                ].map(([label, numerator, denominator]) => (
                  <div className="sc-inset" key={label}>
                    <span>{label}</span>
                    <strong className="sc-stat">
                      {Number(denominator)
                        ? `${Math.round((Number(numerator) / Number(denominator)) * 100)}%`
                        : "—"}
                    </strong>
                  </div>
                ))}
              </div>
              <p className="sc-muted">
                Compare counts to spot gaps. These ratios describe logged
                activity, not a forecast or a guaranteed conversion rate.
              </p>
            </section>
            <section className="sc-panel">
              <h2>The daily sequence</h2>
              <div className="sc-steps">
                {steps.map(([title, body], i) => (
                  <details key={title}>
                    <summary>
                      <span className="sc-step-number">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {title}
                    </summary>
                    <p>{body}</p>
                    <button
                      className="sc-button"
                      onClick={() =>
                        navigate(
                          [2, 5, 7, 8].includes(i) ? "playbook" : "prospects",
                        )
                      }
                    >
                      {[2, 5, 7, 8].includes(i)
                        ? "Open scripts"
                        : "Open prospects"}
                    </button>
                  </details>
                ))}
              </div>
            </section>
          </div>
        )}
        {data && view === "prospects" && (
          <div className="sc-stack">
            {selected ? (
              <ProspectEditor
                key={`${selected}-${selectedProspect?.version ?? 0}`}
                prospect={selectedProspect}
                receipts={receipts}
                proposals={data.proposals}
                busy={busy}
                run={run}
                close={() => {
                  setSelected(null);
                  setEditorDirty(false);
                }}
                onDirty={setEditorDirty}
                today={today}
              />
            ) : (
              <>
                <div className="sc-row">
                  <div>
                    <h2>Your prospects</h2>
                    <p className="sc-muted">
                      Keep the next decision, action and date clear.
                    </p>
                  </div>
                  <button
                    className="sc-button sc-primary"
                    onClick={() => open("new")}
                  >
                    Add a prospect
                  </button>
                </div>
                <div className="sc-filters">
                  <label>
                    Search
                    <input
                      type="search"
                      placeholder="Business, city or person"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </label>
                  <label>
                    Stage
                    <select
                      value={filter}
                      onChange={(e) => setFilter(e.target.value)}
                    >
                      <option value="all">All stages</option>
                      <option value="due">Due or overdue</option>
                      {stages.map((s) => (
                        <option key={s} value={s}>
                          {stageLabels[s]}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label>
                    Segment
                    <select
                      value={segment}
                      onChange={(e) => setSegment(e.target.value)}
                    >
                      <option value="all">All segments</option>
                      {["Education", "Clinics", "Real estate", "Other"].map(
                        (n) => (
                          <option key={n}>{n}</option>
                        ),
                      )}
                    </select>
                  </label>
                </div>
                <section className="sc-panel sc-prospect-list">
                  {visible.length ? (
                    visible.map((p) => {
                      const action = queue.find((a) => a.prospect.id === p.id);
                      return (
                        <button
                          className="sc-prospect"
                          key={p.id}
                          onClick={() => open(p.id)}
                        >
                          <div>
                            <strong>{p.details.business}</strong>
                            <span>
                              {p.details.niche} · {p.details.city}
                            </span>
                          </div>
                          <span className="sc-badge">
                            {stageLabels[p.stage]}
                          </span>
                          <div>
                            <span>{action?.label || "No outreach action"}</span>
                            <small
                              className={
                                action && action.date < today
                                  ? "sc-overdue"
                                  : ""
                              }
                            >
                              {action?.date || "Closed"}
                            </small>
                          </div>
                        </button>
                      );
                    })
                  ) : (
                    <div className="sc-empty">
                      <h3>
                        {prospects.length
                          ? "No prospects match these filters"
                          : "Your first prospect goes here"}
                      </h3>
                      <p>
                        {prospects.length
                          ? "Try another name, stage or segment."
                          : "Start with a real Indian business and a specific problem you can help solve."}
                      </p>
                    </div>
                  )}
                </section>
              </>
            )}
          </div>
        )}
        {view === "playbook" && <Playbook />}
      </main>
      <footer className="sc-footer">
        India only · INR only · Actual work, honest proof, recorded receipts
      </footer>
    </div>
  );
}
