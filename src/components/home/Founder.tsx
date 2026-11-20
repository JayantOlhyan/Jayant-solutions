import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { whyWorkWithMe } from "@/data/content";
import Container from "./Container";
import { CONTACT_INFO } from "@/data/contact";

export default function Founder() {
  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-24 py-16 md:py-24">
      <Container>
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5 lg:col-span-4">
            <div className="overflow-hidden rounded-[10px] bg-neutral-100">
              <Image
                src="/jayant.webp"
                alt="Jayant Olhyan, founder and software engineer at Jayant Systems"
                width={1024}
                height={1024}
                sizes="(min-width: 768px) 400px, 100vw"
                className="h-auto w-full"
              />
            </div>
            <p className="mt-4 text-[15px] font-medium text-neutral-950">Jayant Olhyan</p>
            <p className="text-sm text-neutral-500">Founder & engineer · New Delhi</p>
            <div className="mt-3 flex gap-5 text-[15px] font-medium">
              <a
                href="https://github.com/JayantOlhyan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-1 text-neutral-950 hover:text-neutral-600 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
              >
                GitHub <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/in/jayant-olhyan/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-1 text-neutral-950 hover:text-neutral-600 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
              >
                LinkedIn <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="md:col-span-7 md:col-start-6 lg:col-span-7 lg:col-start-6 flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-neutral-500 font-medium block mb-2">
                  Founder & Engineering Lead
                </span>
                <h2 id="about-title" className="text-[32px] md:text-[44px] font-medium leading-[1.08] tracking-[-0.03em] text-neutral-950">
                  Engineering-led studio, single point of contact
                </h2>
              </div>
              <p className="text-lg leading-[1.6] text-neutral-700">
                Jayant Systems is an independent software studio based in New Delhi. Every project is scoped, built, tested, and deployed directly by me. You always communicate with the person writing the code—ensuring zero miscommunication, rapid iteration, and complete technical accountability.
              </p>
            </div>

            <dl className="grid gap-6 border-t border-neutral-200 pt-8 sm:grid-cols-2">
              <div>
                <dt className="text-sm font-medium text-neutral-950">Academic Pursuits</dt>
                <dd className="mt-1 text-[15px] leading-relaxed text-neutral-600">
                  Pursuing B.Tech in Computer Science at MSIT New Delhi and online BSc in Data Science & Artificial Intelligence with IIT Guwahati.
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-neutral-950">Technical Leadership</dt>
                <dd className="mt-1 text-[15px] leading-relaxed text-neutral-600">
                  Former Lead, MSIT Web Development Society. Active builder shipping applications across EdTech, healthcare prototypes, and civic platforms.
                </dd>
              </div>
            </dl>

            <ul className="grid gap-x-8 gap-y-6 border-t border-neutral-200 pt-8 sm:grid-cols-2">
              {whyWorkWithMe.map((w) => (
                <li key={w.title}>
                  <h3 className="text-[15px] font-medium text-neutral-950">{w.title}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-neutral-600">{w.desc}</p>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Link
                href={CONTACT_INFO.bookingPath}
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-neutral-950 px-6 text-[15px] font-medium text-white transition-colors hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
              >
                <span>Book a call with Jayant</span>
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
