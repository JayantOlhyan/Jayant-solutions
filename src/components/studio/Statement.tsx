import LoopVideo from "./LoopVideo";

const stickers = [
  { text: "Founder-led", style: { left: "-4%", top: "-9%", rotate: "-6deg" } },
  { text: "Scope agreed in writing", style: { right: "-7%", top: "46%", rotate: "5deg" } },
  { text: "Elite Hack 1.0 winner", style: { left: "8%", bottom: "-14%", rotate: "-3deg" } },
];

const gallery = [
  { name: "teachersathi", alt: "Teacher Sathi generating an NCERT lesson", offset: "md:mt-0" },
  { name: "healthkinator", alt: "Healthkinator AI symptom checker on a phone", offset: "md:mt-24" },
  { name: "sentinelai", alt: "Sentinel AI scam-detection site", offset: "md:mt-10" },
  { name: "farmiq", alt: "FarmIQ language picker", offset: "md:mt-32" },
];

export default function Statement() {
  return (
    <section id="story" aria-labelledby="about-title" className="scroll-mt-24 py-24 md:py-40">
      <div className="container-x">
        <h2 id="about-title" className="eyebrow text-center text-[var(--muted)]">The digital team behind your work</h2>
        <div className="relative mx-auto mt-10 max-w-[1100px]" data-stickers>
          <p
            className="display-soft text-center"
            style={{ fontSize: "clamp(30px, 4.4vw, 64px)", lineHeight: 1.08 }}
            data-scrub
          >
            Running a business is already complicated. Managing websites, software, automation, design and content
            shouldn&apos;t make it harder. So we bring them together under one roof, and make technology work for the
            business.
          </p>
          {stickers.map((s) => (
            <span
              key={s.text}
              data-sticker
              className="sticker absolute hidden md:inline-flex"
              style={{ ...s.style, transform: `rotate(${s.style.rotate})` }}
            >
              {s.text}
            </span>
          ))}
          <ul className="mt-8 flex flex-wrap justify-center gap-2 md:hidden" aria-label="Highlights">
            {stickers.map((s) => (
              <li key={s.text} className="sticker inline-flex">{s.text}</li>
            ))}
          </ul>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-3 md:mt-32 md:grid-cols-4 md:gap-5">
          {gallery.map((g) => (
            <div key={g.name} className={`overflow-hidden rounded-[20px] ${g.offset}`} data-rise>
              <LoopVideo name={g.name} alt={g.alt} className="block aspect-square w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
