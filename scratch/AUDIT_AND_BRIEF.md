# Phase 1 Audit & Scroll-Craft Brief — Jayant Web & AI Systems

## 1. Phase 1 Audit of Current Homepage (`src/app/page.tsx`)

### A.Unsupported Claims, Fabricated Statistics & Misleading Credentials
- **`Hero.tsx` (L83–122)**: Displays 3 generic Unsplash stock-photo avatars (`photo-1534528741775...`, `photo-1507003211169...`, `photo-1494790108377...`) paired with unverifiable vanity claims: **"50+ Happy Clients"** and **"100% Client Satisfaction"**.
- **`NetworkDiagram.tsx` (L16, L26, L36, L46)**: Displays decorative, fabricated telemetry badges (`Lat: 118ms`, `Perf: 100%`, `Sync: 24/7`, `Up: 99.9%`) on an abstract circular radar widget rather than showing a real product interface or verifiable architecture.
- **`ProofStrip.tsx` (L24–26)**: Labels project names (`Healthkinator`, `Teacher Sathi`, `WeAct`, `KhelClan`, `FarmIQ`, `CivicSetu`) under **"VERIFIED CREDENTIALS"** as if they are enterprise client logos, whereas `src/data/content.ts` explicitly documents several of them as hackathon projects, academic portals, or internal product concepts.
- **Voice inconsistency**: Components alternate randomly between *"We understand / Our team"* (`Hero.tsx`, `CaseStudies.tsx`, `Process.tsx`) and *"I build / My process"* (`Process.tsx` L27, L58; `Footer.tsx` L97), undermining the clarity of a transparent, founder-led engineering practice.

### B. Structural & CRO Weaknesses
- **Missing Services Section on Homepage**: `src/app/page.tsx` jumps directly from `ProofStrip` to `CaseStudies` to `Process` to `Packages`, never explaining the agency's core services, the business problems they address, what is delivered, and what the client receives.
- **Missing "Why Work With Us" & "Founder Introduction" on Homepage**: Although `src/components/About.tsx` and `whyWorkWithMe` in `src/data/content.ts` exist, neither is rendered on the homepage. Visitors never meet Jayant Olhyan (`/jayant.webp`) or see the accountability of direct founder communication.
- **Navigation Overload & CTA Mismatch**: `Navbar.tsx` has nested multi-dropdowns (`Company`, `Resources`, `Pricing`) and a dropdown button labeled *"Book a free consultation"*, rather than a clean, compact navigation bar (`Services`, `Work`, `Process`, `About`, `Contact`, and primary CTA `"Discuss Your Project"`).
- **Template Visual Clichés**:
  - Uses burnished orange (`#C25E00` / `#FF8A00`) with ambient glowing blobs (`blur-3xl`), `.hog-card` rounded-3xl cards on every section, and an eyebrow pill above every single section heading.
  - Typography mixes `Instrument_Serif`, `DM_Serif_Display`, `Geist`, `Manrope`, and `Inter` inconsistently instead of a disciplined hierarchy (`Manrope` ExtraBold for headlines, `Inter` for body text, `IBM Plex Mono` for technical labels).

---

## 2. Scroll-Craft Brief (Self-Authored under Explicit User Direction)

- **Brand**: Jayant Web & AI Systems (`https://jayant-systems.online`) — Founder-led web, custom software, and AI engineering practice led by Jayant Olhyan (B.Tech CS at MSIT Delhi, Online BSc Data Science & AI at IIT Guwahati).
- **Vibe**: Technical editorial authority, architectural precision, founder-accountable, zero hype.
- **Color & Atmospheric Polarity**: Deep navy (`#0A0F1D`), charcoal slate (`#111827`), off-white editorial surface (`#F8FAFC`), crisp ink (`#0F172A`), and restrained engineering blue accents (`#2563EB` / `#3B82F6`).
- **Typography**:
  - Display / Headlines: `Manrope` (700/800 ExtraBold, tight tracking `-0.035em`)
  - Body Copy: `Inter` (400/500, comfortable reading measure `60ch–70ch`)
  - Technical Labels & Specs: `IBM Plex Mono` (400/600, restrained metadata and architecture tags)
- **Feeling Curve & Scroll Journey**:
  1. **Hero (Immediate Clarity & Confidence)**: Calm architectural authority. Headline: *"Websites and AI Systems Built to Solve Real Business Problems."* Paired with an interactive multi-plane System Architecture & Live Product Inspector showcasing real deployed systems (`TeacherSathi`, `Healthkinator`, `CivicSetu`).
  2. **Proof Before Promises (Early Capability Verification)**: Grounded credibility. A structured capability & shipped-deliverables ledger linking directly to live deployments (`healthkinator-1.netlify.app`, `msit-website.netlify.app`, `sentinel-ai-1.netlify.app`, `civicsetu-1.netlify.app`) and GitHub source repositories—explicitly distinguishing Client Engagements, Startup Platforms, Academic Portals, and Hackathon Builds.
  3. **Services (Outcomes Over Buzzwords)**: Diagnostic clarity. An interactive 5-pillar service matrix (*Website Design & Development*, *Custom Web Applications*, *AI-Powered Applications & Automation*, *Business Workflow Automation*, *Existing Website Modernization*) detailing: (1) Business Problem Addressed, (2) What We Deliver, (3) What You Receive, and (4) Next Step.
  4. **Selected Work (Editorial Evidence — The Engineered Peak)**: Deep conviction. Alternating large-format editorial case study compositions with sticky viewport framing, honest classification badges (`Client Project`, `Startup Project`, `Academic Portal`, `AI Prototype`), real `.webp` product interfaces, problem/contribution breakdown, technical architecture decisions, and live links.
  5. **Process (Reducing Client Uncertainty)**: Predictable control. A progressive 5-stage engineering timeline (`01 Discover`, `02 Plan`, `03 Design and Build`, `04 Test and Refine`, `05 Launch and Support`) showing exact client expectations and tangible artifacts at each stage.
  6. **Why Work With Us & Founder Introduction**: Personal accountability. Verifiable operating principles paired with an authentic introduction to **Jayant Olhyan** (`/jayant.webp`), his engineering background (MSIT Delhi & IIT Guwahati Data Science & AI), and direct founder-to-client execution.
  7. **Frequently Asked Questions**: Purchasing clarity. Addressing the 7 core purchasing questions (*project types accepted, engagement process, how pricing is determined, requirement changes, testing & QA, post-launch support, how to start*).
  8. **Final Conversion Section**: Decisive resolution. *"Have a Business Problem Worth Solving?"* with `"Discuss Your Project"` CTA connected to the working project inquiry form, direct email (`jayantwebaisystems@gmail.com`), WhatsApp (`+91 96673 44125`), and Cal.com strategy call scheduler.
