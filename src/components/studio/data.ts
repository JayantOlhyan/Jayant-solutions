import { caseStudies, agencyServices, faqItems } from "@/data/content";
import { CONTACT_INFO } from "@/data/contact";

export { CONTACT_INFO, agencyServices, faqItems };

/** Homepage work list: only live, verifiable projects with a real product loop in /public/media. */
const featured: { id: string; kind: string; line: string; media: string }[] = [
  { id: "teachersathi", kind: "Own startup", line: "AI lesson plans, slides and worksheets from any NCERT chapter.", media: "teachersathi" },
  { id: "healthkinator", kind: "Own product · Conference talk", line: "AI symptom checker in English and Hindi.", media: "healthkinator" },
  { id: "farmiq", kind: "Hackathon winner", line: "Crop and weather guidance for farmers in 11 languages.", media: "farmiq" },
  { id: "sentinelai", kind: "Hackathon build", line: "Real-time scam detection for SMS, email and links.", media: "sentinelai" },
  { id: "khelclan", kind: "Own project", line: "Home of an offline sports community in Delhi NCR.", media: "khelclan" },
  { id: "civicsetu", kind: "Hackathon build", line: "Grievance platform for citizens, authorities and NGOs.", media: "civicsetu" },
];

export const work = featured
  .map((f) => {
    const cs = caseStudies.find((c) => c.id === f.id);
    if (!cs) return null;
    return { ...f, name: cs.title.split(" — ")[0], industry: cs.industry, href: cs.liveWebsite ?? "/portfolio" };
  })
  .filter((x): x is NonNullable<typeof x> => x !== null);

export const projectCount = caseStudies.filter((c) => c.liveWebsite).length;
