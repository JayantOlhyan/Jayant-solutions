const stickers = [
  { text: "Founder-led", style: { left: "2%", top: "-12%", rotate: "-6deg" } },
  { text: "Scope agreed in writing", style: { right: "3%", top: "-12%", rotate: "5deg" } },
  { text: "Elite Hack 1.0 winner", style: { left: "10%", bottom: "-10%", rotate: "-3deg" } },
];

/**
 * Scroll-read statement (DESIGN.md motif 2). As you scroll, a flame "reading
 * wave" travels through the letters: unread ember → flame at the front → ink
 * once read. The motion lives in StudioMotion ([data-scrub]); without JS or
 * with reduced motion the paragraph is plain ink.
 */
export default function Statement() {
  return (
    <section id="story" aria-labelledby="about-title" className="scroll-mt-24 py-28 md:py-44">
      <div className="container-x">
        <h2 id="about-title" className="eyebrow text-center text-[var(--ink)]">
          A bit about us
        </h2>
        <div className="relative mx-auto mt-10 max-w-[1180px] md:mt-14" data-stickers>
          <p
            className="display-soft text-center text-[var(--ink)]"
            style={{ fontSize: "clamp(34px, 5.4vw, 92px)", lineHeight: 1.04, fontWeight: 700, letterSpacing: "-0.035em" }}
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
              className="sticker absolute hidden md:inline-flex"
              style={{ ...s.style, transform: `rotate(${s.style.rotate})` }}
            >
              {s.text}
            </span>
          ))}
          <ul className="mt-10 flex flex-wrap justify-center gap-2 md:hidden" aria-label="Highlights">
            {stickers.map((s) => (
              <li key={s.text} className="sticker inline-flex">
                {s.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
