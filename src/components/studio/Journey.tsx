import Link from "next/link";
import { Search, FileCheck2, PenTool, Code2, ShieldCheck, Rocket, LifeBuoy, type LucideIcon } from "lucide-react";
import { processSteps } from "@/data/framework";

/**
 * "Your journey with us" — the 7 process steps strung along a flame line that
 * draws itself as you scroll (motion: StudioMotion, [data-journey]).
 *
 * Desktop layout rules (so nothing overlaps):
 *  - Each stop's ICON sits exactly on the line; the number is to its left and
 *    the name to its right, so the line only ever meets a title at the icon.
 *  - Between stops the line is a single smooth S-curve that leaves each icon
 *    straight down and arrives at the next straight from above.
 *  - The caption hangs below the title on the side the line does NOT head to.
 * Mobile: a straight rail on the left with stops in normal flow.
 * Without JS / reduced motion everything is shown, fully drawn.
 */

const VB = { w: 1000, h: 2080 };

type Pt = [number, number];

// Stop positions (viewBox units). x is clamped so the longest name still fits on the right.
const STOPS: Pt[] = [
  [560, 210], // 01 Discover
  [360, 470], // 02 Define
  [600, 730], // 03 Design
  [380, 990], // 04 Build
  [620, 1250], // 05 Verify
  [400, 1510], // 06 Launch
  [460, 1770], // 07 Support & improve
];
const START: Pt = [900, 30];
const END: Pt = [920, 2040];

const ICONS: LucideIcon[] = [Search, FileCheck2, PenTool, Code2, ShieldCheck, Rocket, LifeBuoy];

/** Vertical-tangent S-curves through every stop: smooth, no loops, never runs along a title row. */
function buildPath() {
  const f = (n: number) => n.toFixed(1);
  const [s0x, s0y] = STOPS[0];
  // Lead-in from the start dot: sweeps left above the first title, then drops onto the icon.
  let d = `M ${START[0]} ${START[1]} C ${START[0]} ${START[1] + 110}, ${s0x} ${s0y - 170}, ${s0x} ${s0y}`;
  for (let i = 0; i < STOPS.length - 1; i++) {
    const [ax, ay] = STOPS[i];
    const [bx, by] = STOPS[i + 1];
    const k = (by - ay) * 0.58;
    d += ` C ${ax} ${f(ay + k)}, ${bx} ${f(by - k)}, ${bx} ${by}`;
  }
  // Tail: down from the last stop, then a long easy sweep off to the right.
  const [lx, ly] = STOPS[STOPS.length - 1];
  d += ` C ${lx} ${ly + 170}, ${END[0] - 260} ${END[1] - 10}, ${END[0]} ${END[1]}`;
  return d;
}

const PATH = buildPath();

/** Caption goes opposite to where the line heads next (last stop: line exits right → caption left). */
function pillSide(i: number): "left" | "right" {
  const here = STOPS[i][0];
  const next = STOPS[i + 1]?.[0] ?? END[0];
  return next < here ? "right" : "left";
}

export default function Journey() {
  return (
    <section id="journey" aria-labelledby="journey-title" className="overflow-hidden py-24 md:py-36" data-journey>
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow text-[var(--muted)]">How a project runs</p>
            <h2
              id="journey-title"
              className="display-soft mt-3"
              style={{ fontSize: "clamp(42px, 6.4vw, 104px)", lineHeight: 0.96, fontWeight: 700, letterSpacing: "-0.04em" }}
            >
              Your journey
              <br />
              <span className="text-[var(--flame-ink)]">with us.</span>
            </h2>
          </div>
          <p className="max-w-[40ch] text-[17px] leading-relaxed text-[var(--muted)]">
            Seven stops from first call to long-term support. You always know where we are and what comes next.{" "}
            <Link href="/process" className="draw font-medium text-[var(--ink)]">
              Read the full process
            </Link>
          </p>
        </div>

        <div className="relative mx-auto mt-14 max-w-[1240px] lg:mt-10">
          {/* Desktop line: faint track + flame line drawn on scroll + start dot */}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
            viewBox={`0 0 ${VB.w} ${VB.h}`}
            fill="none"
          >
            <path d={PATH} stroke="var(--flame)" strokeOpacity=".2" strokeWidth="10" strokeLinecap="round" />
            <path d={PATH} stroke="var(--flame)" strokeWidth="10" strokeLinecap="round" data-journey-path />
            <circle cx={START[0]} cy={START[1]} r="11" fill="var(--flame)" stroke="var(--ink)" strokeWidth="3" />
          </svg>

          {/* Mobile rail */}
          <div aria-hidden="true" className="absolute bottom-6 left-[21px] top-6 w-[6px] rounded-full bg-[var(--ember)]/60 lg:hidden">
            <div className="h-full w-full origin-top rounded-full bg-[var(--flame)]" data-journey-rail />
          </div>

          <ol className="relative flex flex-col gap-12 lg:block lg:aspect-[1000/2080]" aria-label="Project journey">
            {processSteps.map((s, i) => {
              const [x, y] = STOPS[i];
              const Icon = ICONS[i];
              const side = pillSide(i);
              return (
                <li
                  key={s.n}
                  data-journey-stop
                  data-x={x}
                  data-y={y}
                  className="journey-stop relative flex items-start gap-5 lg:absolute lg:left-[var(--x)] lg:top-[var(--y)] lg:block lg:size-0"
                  style={{ "--x": `${(x / VB.w) * 100}%`, "--y": `${(y / VB.h) * 100}%` } as React.CSSProperties}
                >
                  {/* Mobile icon on the rail */}
                  <span
                    aria-hidden="true"
                    className="j-icon relative z-10 grid size-12 shrink-0 place-items-center rounded-[14px] border-[3px] border-[var(--ink)] bg-[var(--flame)] text-[var(--ink)] shadow-[4px_4px_0_var(--ink)] lg:hidden"
                    style={{ rotate: `${i % 2 ? 8 : -8}deg` }}
                  >
                    <Icon className="size-6" strokeWidth={2.25} />
                  </span>

                  {/* On desktop this wrapper dissolves (contents) so title + caption position from the stop point */}
                  <div className="min-w-0 lg:contents">
                    {/* Desktop: 3-column row centred on the point — [number | icon | name] — so the icon is exactly on the line */}
                    <h3
                      className="j-title display flex items-center uppercase text-[var(--flame-ink)] lg:pointer-events-none lg:absolute lg:left-0 lg:top-0 lg:grid lg:w-[1400px] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:grid-cols-[1fr_auto_1fr] lg:gap-x-[0.12em]"
                      style={{ fontSize: "clamp(30px, 4.4vw, 76px)", lineHeight: 0.86, letterSpacing: "-0.02em" }}
                    >
                      <span className="eyebrow mr-2 !text-[12px] text-[var(--muted)] lg:sr-only">{s.n}</span>
                      <span aria-hidden="true" className="hidden lg:block lg:justify-self-end">
                        {s.n}
                      </span>
                      <span aria-hidden="true" className="jd-icon-wrap hidden lg:inline-flex lg:justify-center" data-journey-icon>
                        <span
                          className="jd-icon mx-[0.04em] grid size-[0.9em] place-items-center rounded-[0.2em] border-[3px] border-[var(--ink)] bg-[var(--flame)] text-[var(--ink)]"
                          style={{ rotate: `${i % 2 ? 6 : -6}deg` }}
                        >
                          <Icon className="size-[0.5em]" strokeWidth={2.25} />
                        </span>
                      </span>
                      <span className="lg:justify-self-start">{s.name}</span>
                    </h3>
                    <p
                      className={`j-pill mt-3 inline-block max-w-[300px] rounded-[18px] border-2 border-[var(--flame)] bg-[var(--paper)] px-4 py-2 text-[14px] leading-snug text-[var(--ink)] lg:absolute lg:top-[clamp(40px,3.6vw,60px)] lg:mt-0 lg:w-max lg:max-w-[280px] lg:rounded-[28px] lg:border lg:px-5 lg:py-2.5 lg:text-[15px] ${
                        side === "right" ? "lg:left-[clamp(36px,3vw,52px)]" : "lg:right-[clamp(36px,3vw,52px)]"
                      }`}
                      data-journey-pill
                      data-side={side}
                    >
                      {s.line}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
