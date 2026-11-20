const stickers = [
  { text: "Founder-led", style: { left: "2%", top: "-12%", rotate: "-6deg" } },
  { text: "Scope agreed in writing", style: { right: "3%", top: "-12%", rotate: "5deg" } },
  { text: "Elite Hack 1.0 winner", style: { left: "10%", bottom: "-10%", rotate: "-3deg" } },
];

/**
 * Scroll-read statement (DESIGN.md motif 2). The section fills the screen and pins
 * when it reaches the top; as you keep scrolling, each letter pops from pale ember
 * to flame and settles to ink, and the sticker chips pop in. Motion lives in
 * StudioMotion ([data-scrub]); without JS or with reduced motion the paragraph is
 * plain ink and the chips are simply shown.
 */
export default function Statement() {
  return (
    <section id="story" aria-labelledby="about-title" className="flex min-h-[100svh] scroll-mt-24 items-center py-16 md:py-20">
      <div className="container-x w-full">
        <h2 id="about-title" className="eyebrow text-center text-[var(--ink)]">
          A bit about us
        </h2>
        <div className="relative mx-auto mt-10 max-w-[1180px] md:mt-14" data-stickers>
          <p
            className="display-soft text-center text-[var(--ink)]"
            style={{ fontSize: "clamp(30px, min(5.4vw, 8.6svh), 92px)", lineHeight: 1.04, fontWeight: 700, letterSpacing: "-0.035em" }}
            data-scrub
          >
            Running a business is already complicated. Websites, software, automation, design and content shouldn&apos;t
            make it harder. So we bring them under one roof, and make technology work for the business.
          </p>
          {stickers.map((s) => (
            <span
              key={s.text}
              data-sticker
              aria-hidden="true"
              className="sticker absolute hidden lg:inline-flex"
              style={{ ...s.style, transform: `rotate(${s.style.rotate})` }}
            >
              {s.text}
            </span>
          ))}
          <ul className="mt-10 flex flex-wrap justify-center gap-2 lg:hidden" aria-label="Highlights">
            {stickers.map((s) => (
              <li key={s.text} data-pill className="sticker inline-flex">
                {s.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
