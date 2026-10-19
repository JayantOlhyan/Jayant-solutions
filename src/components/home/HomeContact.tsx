import ContactForm from "@/components/ContactForm";
import Container from "./Container";

const channels = [
  { label: "Email", value: "jayantwebaisystems@gmail.com", href: "mailto:jayantwebaisystems@gmail.com" },
  { label: "WhatsApp (fastest)", value: "+91 96673 44125", href: "https://wa.me/919667344125?text=Hi%20Jayant,%20I%20would%20like%20to%20discuss%20a%20project" },
  { label: "Phone", value: "+91 96673 44125", href: "tel:+919667344125" },
];

const nextSteps = [
  "I review your brief, live URL or the problem you describe.",
  "We hold a focused 15–20 minute discovery call.",
  "You get a written scope, architecture recommendation and fixed-milestone proposal.",
];

export default function HomeContact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-24 py-16 md:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div>
              <h2 id="contact-title" className="text-[48px] md:text-[72px] font-medium leading-none tracking-[-0.04em] text-neutral-950">
                Let&apos;s talk.
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-neutral-700">
                Tell me about your business and the problem you want solved. I reply personally within 12–24 business hours.
              </p>
            </div>

            <ul className="flex flex-col border-t border-neutral-200">
              {channels.map((c) => (
                <li key={c.label} className="border-b border-neutral-200">
                  <a href={c.href} className="flex min-h-14 flex-wrap items-center justify-between gap-x-6 gap-y-1 py-4 hover:text-neutral-500">
                    <span className="text-sm text-neutral-500">{c.label}</span>
                    <span className="text-[17px] font-medium">{c.value}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div>
              <h3 className="text-sm font-medium text-neutral-950">What happens next</h3>
              <ol className="mt-3 flex flex-col gap-2.5 text-[15px] leading-relaxed text-neutral-700">
                {nextSteps.map((s, i) => (
                  <li key={s} className="flex gap-3">
                    <span className="font-mono text-sm text-neutral-400">0{i + 1}</span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>

            <p className="text-sm text-neutral-500">Dwarka, New Delhi · Working remotely worldwide · Mon–Sat, 9 AM – 8 PM IST</p>
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
