/**
 * Capability gate.
 *
 * Every service offering in `src/data/framework.ts` carries `confirmed: boolean`.
 * Unconfirmed offerings are shown (with an "Unconfirmed" badge) in local and
 * Netlify deploy-preview builds so they can be reviewed, and are removed from
 * the Netlify production build.
 *
 * To publish an offering: set `confirmed: true` on it. Nothing else.
 *
 * Only read this from server components. It is evaluated at build time and is
 * passed to client components as a prop.
 */
export const SHOW_UNCONFIRMED: boolean = process.env.CONTEXT
  ? process.env.CONTEXT !== "production"
  : process.env.NODE_ENV !== "production" || process.env.SHOW_UNCONFIRMED === "1";

/** A division gets its own page once this many offerings are confirmed. */
export const DIVISION_MIN_CONFIRMED = 4;
