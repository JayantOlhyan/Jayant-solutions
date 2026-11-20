import Link from "next/link";
import { Plus, ArrowRight } from "lucide-react";
import Container from "./Container";

interface CoreFAQ {
  question: string;
  answer: string;
}

const coreFaqs: CoreFAQ[] = [
  {
    question: "How is project scope defined and managed?",
    answer: "Every project starts with a technical discovery call to define your business goals, user requirements, and technical constraints. Before writing any code, I provide a detailed written scope document outlining exact deliverables, architecture choices, milestone dates, and acceptance criteria.",
  },
  {
    question: "How much does a project typically cost?",
    answer: "Projects are billed on a fixed milestone basis based on the agreed written scope—never surprise hourly rates. Website projects start from ₹40,000, while custom web applications and practical AI systems start from ₹90,000. Each proposal contains an itemized milestone breakdown.",
  },
  {
    question: "How long does a project take, and how do we communicate?",
    answer: "Typical websites take 2–4 weeks, while custom applications and AI integrations take 2–6 weeks depending on complexity. You get a private live staging preview link early in development to test real progress, with direct communication via Slack or WhatsApp—no middle managers.",
  },
  {
    question: "Who owns the source code and project assets?",
    answer: "You own 100% of the custom source code, documentation, repository access, and project assets upon completion of milestones and final payment. There are no proprietary vendor lock-ins or recurring code licensing fees.",
  },
  {
    question: "What support do you provide after the project is launched?",
    answer: "Every project includes 30 days of post-launch technical support to ensure stable operation, resolve any unexpected edge-case bugs, and ensure smooth handover. Optional monthly maintenance agreements are available for ongoing improvements and technical management.",
  },
];

export default function HomeFAQ() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="scroll-mt-24 bg-neutral-50 py-16 md:py-24">
      <Container>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <span className="font-mono text-xs uppercase tracking-wider text-neutral-500 font-medium block mb-2">
              Common Questions
            </span>
            <h2 id="faq-title" className="text-[32px] md:text-[44px] font-medium leading-[1.08] tracking-[-0.03em] text-neutral-950">
              Frequently asked questions
            </h2>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-neutral-600">
              Clear answers on how we scope, estimate, communicate, build, and support client projects.
            </p>
            <div className="mt-6">
              <Link
                href="/faq"
                className="inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-neutral-950 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
              >
                <span>Read all answers</span>
                <ArrowRight className="size-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="md:col-span-8 flex flex-col">
            {coreFaqs.map((f, i) => (
              <details
                key={f.question}
                open={i === 0}
                className="group border-b border-neutral-300 first:border-t"
              >
                <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 [&::-webkit-details-marker]:hidden">
                  <span className="text-lg md:text-xl font-medium tracking-[-0.01em] text-neutral-950">
                    {f.question}
                  </span>
                  <Plus
                    className="size-5 shrink-0 text-neutral-500 transition-transform duration-200 group-open:rotate-45"
                    aria-hidden="true"
                  />
                </summary>
                <p className="max-w-[65ch] pb-6 text-[15px] leading-relaxed text-neutral-700">
                  {f.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
