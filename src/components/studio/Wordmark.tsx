/** Oversized edge-to-edge wordmark above the footer; letters rise in on scroll. */
export default function Wordmark() {
  return (
    <div aria-hidden="true" className="overflow-hidden px-2 pt-16 md:px-4">
      <p className="display select-none whitespace-nowrap text-center uppercase leading-[.8] text-[var(--ink)]" style={{ fontSize: "11.4vw" }} data-wordmark>
        Jayant <span className="text-[var(--flame-ink)]">Systems</span>
      </p>
    </div>
  );
}
