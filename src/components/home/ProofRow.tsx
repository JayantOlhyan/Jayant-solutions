import Container from "./Container";

const facts = [
  { value: "Winner", label: "Elite Hack 1.0 — FarmIQ" },
  { value: "Speaker", label: "MRIIRS International AI Conference, March 2026" },
  { value: "30+", label: "National hackathon selections" },
  { value: "Former Lead", label: "MSIT Web Development Society" },
];

export default function ProofRow() {
  return (
    <section aria-label="Track record" className="border-y border-neutral-200">
      <Container>
        <dl className="grid grid-cols-2 lg:grid-cols-4">
          {facts.map((f, i) => (
            <div
              key={f.label}
              className={`flex flex-col gap-1 py-8 ${i % 2 === 1 ? "pl-6 border-l border-neutral-200" : "pr-6"} ${
                i >= 2 ? "border-t border-neutral-200 lg:border-t-0" : ""
              } ${i === 2 ? "lg:pl-6 lg:border-l" : ""}`}
            >
              <dt className="order-2 text-sm leading-snug text-neutral-600">{f.label}</dt>
              <dd className="order-1 text-2xl md:text-[28px] font-medium tracking-[-0.02em] text-neutral-950">{f.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
