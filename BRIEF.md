# House of Enablement — Build Brief

A single-file build brief for Claude Code. Self-contained: no prior context needed.

---

## 1\. What we're building

A web app called **The House of Enablement**. It's a tactile card-sort diagnostic for revenue leaders at Series B/C startups (founders, CROs, heads of sales/CS/enablement). The user enters a "house" with four rooms. Each room is a category of enablement work. Inside each room they sort cards into four buckets: YES, SOMETIMES, NO, I DON'T KNOW. At the end of any room they see what's missing and can get a branded PDF report by handing over an email.

The diagnostic is built on Mercy Bell's "four rooms" methodology:

1. Onboarding  
2. Solution & Role Depth  
3. Field Activation  
4. Career Development

---

## 2\. Tech stack

- **Framework:** Next.js 14+ (App Router), TypeScript strict mode  
- **Styling:** Tailwind CSS \+ CSS variables for brand tokens  
- **Drag-drop (desktop):** `@dnd-kit/core` and `@dnd-kit/sortable`  
- **Animations:** `framer-motion`  
- **PDF:** `@react-pdf/renderer` (client-side generation)  
- **Form submission:** Formspree (form POST to her endpoint, which delivers to her Gmail at [m@mercyb.com](mailto:m@mercyb.com))  
- **Hosting:** Vercel  
- **Domain:** `the-house.mercyb.com` (CNAME from Webflow DNS to Vercel)  
- **State:** React Context \+ `useReducer` for diagnostic state, `localStorage` for cross-room persistence within session

---

## 3\. Brand system

### Colors (CSS variables)

:root {

  \--chartreuse: \#D4EB86;

  \--carbon: \#0A0A0A;

  \--paper: \#FAFAF7;

  \--stone: \#5A5A55;

  \--rule: rgba(10, 10, 10, 0.18);

  \--rule-soft: rgba(10, 10, 10, 0.1);

}

### Fonts (Google Fonts)

\<link href="https://fonts.googleapis.com/css2?family=Archivo+Black\&family=Archivo:wght@400;500;600;700\&family=IBM+Plex+Mono:wght@400;500;600\&display=swap" rel="stylesheet"\>

- **Archivo Black** — display headlines, always lowercase  
- **Archivo** (400/500/600/700) — body, sentence case for client copy, lowercase elsewhere  
- **IBM Plex Mono** (500/600) — labels, always uppercase, tracked

### Voice rules (apply to all user-facing copy)

- Lowercase by default (including "ai", "gtm", "ic")  
- No em dashes. Use periods or commas.  
- No semicolons.  
- No italics in body copy.  
- No banned words: delve, embark, leverage, foster, resonate, tapestry, illuminate, pivotal, craft, utilize, game-changer, revolutionize, furthermore, moreover, boost, landscape, testament.  
- Short active sentences. One claim per line.

### Layout principles

- Chartreuse leads (70% of surfaces). Carbon is type and ink (25%). Paper is the relief surface (5%).  
- One emphasis per headline (underline OR bold OR carbon block — never two).  
- Generous whitespace. Premium minimalism.

---

## 4\. User journey

\[Landing: the house\] 

    │

    ├──\> \[Pick a room: 1, 2, 3, or 4\]

    │       │

    │       ├──\> \[Room intro screen\]

    │       │       │

    │       │       └──\> \[Card-sort flow: 8 items × 3–5 cards each\]

    │       │               │

    │       │               └──\> \[Room results: score \+ missing \+ sometimes \+ idk\]

    │       │                       │

    │       │                       ├──\> \[Email gate → PDF download \+ emailed to her Gmail\]

    │       │                       └──\> \[Back to house: pick another room OR see overview\]

    │       │

    │       └──\> \[Or "audit the whole house" runs all four in sequence\]

    │

    └──\> \[House overview, only if 2+ rooms completed: aggregate score, weakest room, full idk list\]

### Detailed screens

#### 4.1. House landing (`/`)

- Hero: `what's missing in your house of enablement?`  
- Sub-hero (smaller): `a diagnostic for revenue leaders at series b and c. four rooms. about four minutes each. start with one or audit the whole house.`  
- Visual: a stylized house with four rooms (one big SVG, each room clickable). Use chartreuse paper background, carbon outlines, plus chartreuse fills for rooms on hover.  
- Four room labels visible on the house:  
  - Room 1 / Onboarding  
  - Room 2 / Solution & Role Depth  
  - Room 3 / Field Activation  
  - Room 4 / Career Development  
- Primary CTA: `audit the whole house →` (starts at room 1\)  
- Each room is independently clickable to start there  
- Mobile: house collapses to a vertical stack of four room "doors" instead of one SVG

#### 4.2. Room intro (`/room/[1|2|3|4]`)

- Top label (mono uppercase): `room [n] / [name]`  
- Hero (Archivo Black, lowercase): the room's tagline, e.g., `the party room.`  
- Sub: 1-2 sentence framing  
- Mono: `8 items · about 4 minutes`  
- CTA: `begin →`

Per room copy:

- **Room 1 / Onboarding** — Hero: `where the brain gets wired.` Sub: `eight things that should be in this room when it's fully built. answer for what's actually there today, not what's on the roadmap.`  
- **Room 2 / Solution & Role Depth** — Hero: `depth that holds up under pressure.` Sub: same framing.  
- **Room 3 / Field Activation** — Hero: `the party room.` Sub: same framing.  
- **Room 4 / Career Development** — Hero: `where you deliver on the carrot.` Sub: same framing.

#### 4.3. Card-sort flow (`/room/[n]/audit`)

One item at a time. For each item:

- Mono label (top): `[item number] of 8`  
- Item title (Archivo Black): e.g., `deal pattern recognition.`  
- Tagline (Archivo regular): e.g., `the heuristics that tell reps what to chase and what to walk.`  
- Cards stacked beneath (3-5 per item)  
- Four buckets visible

**Desktop interaction:** drag a card into a bucket. Card animates into the bucket pile. Bucket pile counts increment. When all cards for this item are placed, auto-advance to next item after a 600ms pause.

**Mobile interaction:** card sits centered. Four big buttons below the card (2x2 grid or row of 4): YES / SOMETIMES / NO / IDK. User taps the button. Card animates off to the corresponding bucket pile (visible at top or side). Auto-advance same as desktop.

**Progress bar:** mono-style at the top, showing `[item n] of 8` plus a thin progress line.

**Card design:**

- Paper background, carbon border (1.5px solid), carbon type  
- Padding: 16-24px  
- Card text: Archivo regular, 14-16px on mobile, 16-18px on desktop, line-height 1.4  
- On hover (desktop): slight lift via `transform: translateY(-2px)` and box-shadow  
- On grab: stronger lift, slight rotation (1-2deg)

**Bucket design:**

- Four buckets in fixed positions:  
  - YES (top-right or top): chartreuse fill, carbon outline  
  - SOMETIMES (right or upper-right): paper fill, carbon outline  
  - NO (bottom-right): carbon fill, chartreuse type  
  - IDK (top-left or left): paper fill, dashed carbon outline  
- Each bucket shows a running count (e.g., `YES · 3`)  
- Buckets accept drop zones via `@dnd-kit`

#### 4.4. Room results (`/room/[n]/results`)

- Top label: `room [n] / [name] · results`  
- Big number: the count (e.g., `21 of 32 built.`)  
- Score percentage and tier label:  
  - 0–25% \= `foundation cracked`  
  - 26–50% \= `building up`  
  - 51–75% \= `operational`  
  - 76–100% \= `stacked`  
- Four-column or four-row visualization of the buckets, each showing the cards placed there (small chips)  
- "Missing" callout: the items where MOST cards landed in NO. Up to 3 items called out as priority gaps.  
- "Discuss later" list: every card placed in IDK, bulleted, in mono uppercase  
- CTA \#1 (primary): `get your full report →` (opens email gate modal)  
- CTA \#2 (secondary): `audit another room` (back to house landing)

#### 4.5. Email gate (modal or full-screen on mobile)

- Headline: `where should we send your report?`  
- Sub: `we'll email you a branded pdf with your priority moves and a soft invite to talk. no list, no spam. just you and mercy.`  
- Form fields:  
  - Name (required)  
  - Email (required)  
  - Company (optional)  
  - Role (optional, dropdown: Founder/CEO, CRO/VP Sales, Head of Sales/CS, Head of Enablement, Head of RevOps, Other)  
- Submit button: `send my report →`  
- On submit: POST to Formspree endpoint with all results data, name, email, company, role, idk list. Show loading state. On success: generate PDF client-side, trigger download, show success screen with `you're all set. mercy will be in touch personally if you want a deeper conversation. → book 30 min`.

#### 4.6. House overview (`/house`)

- Visible when 2+ rooms completed in this session (use localStorage)  
- Headline: `your house.`  
- Sub: aggregate score across all completed rooms  
- Visual: the four rooms drawn again, each colored by completion state:  
  - Stacked → chartreuse fill  
  - Operational → chartreuse outline, paper fill  
  - Building up → paper with dashed carbon outline  
  - Foundation cracked → carbon outline only  
  - Not yet audited → ghosted out  
- Weakest room flagged: `your priority gap: room [n] / [name]`  
- Aggregate "discuss later" list (all IDK across rooms)  
- CTA: `get your full house report →` (opens email gate, same flow, but the PDF is the full multi-room version)

---

## 5\. Scoring logic

type BucketChoice \= 'yes' | 'sometimes' | 'no' | 'idk';

const cardScore \= (choice: BucketChoice): number \=\> {

  switch (choice) {

    case 'yes': return 1;

    case 'sometimes': return 0.5;

    case 'no': return 0;

    case 'idk': return 0; // excluded from denominator

  }

};

const itemScore \= (cards: BucketChoice\[\]): { score: number; total: number } \=\> {

  const scored \= cards.filter(c \=\> c \!== 'idk');

  const score \= scored.reduce((sum, c) \=\> sum \+ cardScore(c), 0);

  return { score, total: scored.length };

};

const roomScore \= (allCards: BucketChoice\[\]): { score: number; total: number; percent: number } \=\> {

  const scored \= allCards.filter(c \=\> c \!== 'idk');

  const score \= scored.reduce((sum, c) \=\> sum \+ cardScore(c), 0);

  return { 

    score, 

    total: scored.length, 

    percent: scored.length ? (score / scored.length) \* 100 : 0 

  };

};

const tierLabel \= (percent: number): string \=\> {

  if (percent \<= 25\) return 'foundation cracked';

  if (percent \<= 50\) return 'building up';

  if (percent \<= 75\) return 'operational';

  return 'stacked';

};

**Priority gaps logic:** the top 3 items where the sum of NO scores is highest (in absolute count, not percentage) become the "priority gaps" callout on the results screen.

---

## 6\. Locked content — all four rooms

Store this in `src/content/rooms.ts` as a typed structure. The structure should be:

type Card \= { id: string; text: string };

type Item \= { id: string; title: string; tagline: string; cards: Card\[\] };

type Room \= { id: string; number: 1 | 2 | 3 | 4; name: string; hero: string; items: Item\[\] };

### Room 1 / Onboarding — `where the brain gets wired.`

**01\. deal pattern recognition.** — *the heuristics that tell reps what to chase and what to walk.*

- a written, ratified deal pattern playbook exists  
- it's rooted in closed-won and closed-lost data, or in call analysis if call volume is low  
- it's been updated in the last six months  
- new hires can articulate the top three heuristics by end of onboarding

**02\. success path with a carrot.** — *the picture of what good looks like and what comes next.*

- a documented definition of "good" in this role  
- ramp milestones (30 / 60 / 90 or equivalent)  
- at least three visible internal examples of people who moved up  
- the growth path gets named in the new hire's first two weeks

**03\. deep manager involvement.** — *managers in the room, not handing it off.*

- scheduled manager-new hire 1:1s during ramp  
- managers deliver some content alongside enablement  
- structured coaching rhythm (deal reviews, role play, ride-alongs)  
- new-hire ramp success shows up in the manager's own metrics

**04\. workflow \+ tooling architecture.** — *one workspace, not twelve tabs.*

- a single primary workspace is defined (slack, claude, etc.)  
- a day-1 access and tools checklist runs without surprises  
- daily work flows through one or two primary tools, not six  
- a "where things live" map exists for new hires

**05\. feedback loops.** — *you know if it worked because you asked.*

- pulse surveys at multiple ramp checkpoints (week 1, 4, 12\)  
- a structured exit interview at the end of ramp  
- feedback gets reviewed and changes get made  
- cohort-to-cohort learnings get documented

**06\. solution depth bar \+ initial certification.** — *the bar a new hire has to clear to leave the room.*

- a documented solution depth bar for the role  
- a consistent certification mechanism every hire goes through  
- it tests problem-to-solution matching, not feature recall  
- it has a pass/fail or scored outcome that determines graduation

**07\. real reps, not theoretical ones.** — *the brain rewires on real customers, not decks.*

- a safe lead pool is carved out for new hires  
- real discovery calls happen in week 1 or 2  
- live calls get observed and coached, not just listened to  
- ai role play supplements training, it does not substitute

**08\. a sales process where discovery is continuous.** — *process is ratified. discovery is everywhere.*

- a ratified sales process exists  
- discovery is taught as continuous, not a single stage  
- mid-cycle discovery questions get practiced in training  
- a discovery agent lets the new hire know what discovery opportunities they missed in a call

Room 1 total: 32 cards.

### Room 2 / Solution & Role Depth — `depth that holds up under pressure.`

**01\. role-specific depth maps.** — *what excellence looks like, by role.*

- a documented depth of technical understanding for every quota-carrying role  
- it names the technical, product, and customer knowledge required  
- ai role play established for product hot seat questions

**02\. living product knowledge.** — *current, findable, in one place.*

- product docs are current within 30 days of the last release  
- reps know where to find feature, edge-case, and integration details  
- the product team contributes to enablement when shipping  
- one source of truth, not five competing wikis

**03\. buyer persona playbooks.** — *per buyer, not per icp slide.*

- a documented playbook exists for each major buyer type  
- it includes their kpis, language, objections, and pressure points  
- reps practice persona-specific conversations in training  
- the playbooks get updated from field feedback at least twice a year

**04\. vertical / industry / geo expertise.** — *depth in the markets you actually sell into.*

- reps are organized or trained against their target markets  
- vertical case studies and reference architectures exist  
- customer panels or vertical experts get scheduled regularly  
- a single source of truth for your message in each market is established  
- vertical depth factors into deal and account assignments

**05\. advanced process mastery.** — *the deal mechanics beyond onboarding.*

- multithreading expectations are documented and coached  
- executive engagement playbooks exist for c-suite and board-level conversations  
- procurement and legal navigation guides exist  
- reps get coached through complex deal patterns, not just early-stage

**06\. continuous certification.** — *depth is not one-and-done.*

- reps re-certify on solution depth at least quarterly  
- new product releases trigger certification updates  
- failing certification leads to a coaching plan, not silence

**07\. peer learning forums.** — *top performers teach the rest.*

- structured deal post-mortems happen monthly or quarterly  
- top performers teach on a cadence  
- win/loss findings get circulated and acted on

**08\. ai-powered depth tools.** — *ai supports the rep brain, it doesn't replace it.*

- reps have access to ai role play for objections and discovery  
- ai-driven call coaching surfaces patterns from their own calls  
- ai quizzing supports memory and recall of depth content  
- reps know when to use ai and when not to

Room 2 total: 30 cards.

### Room 3 / Field Activation — `the party room.`

**01\. quarterly play cadence.** — *a rhythm, not a reaction.*

- a defined quarterly play calendar exists  
- plays get scoped six to eight weeks before launch  
- each play has an explicit owner  
- measurement starts before the play launches

**02\. cross-functional design table.** — *marketing, sales, revops, cs in the same room.*

- a working group convenes per play with marketing, sales, revops, and cs  
- the working group meets multiple times pre-launch, not once  
- decisions get documented, not assumed  
- product participates when the play is product-led

**03\. one message, not three.** — *ratified positioning before it hits the field.*

- the positioning gets reviewed and approved by all functions before field rollout  
- a shared narrative doc exists and gets used  
- competing decks get retired or consolidated  
- the same message shows up in marketing, sales, and cs copy

**04\. live activation event.** — *the field experiences the play together.*

- a live activation event happens (kickoff, all-hands, workshop)  
- it's interactive, not slide-only  
- managers attend and participate, not just watch  
- the event has a clear takeaway each rep can use day one

**05\. field activation kit.** — *everything a rep needs to run the play in a conversation.*

- talk tracks exist for each persona the play targets  
- email templates and sequences are ready at launch  
- the right accounts for the play are surfaced to the rep automatically  
- the kit gets refreshed when the field reports back

**06\. demand-gen to sales handoff.** — *pipeline lands clean, not lost.*

- lead scoring and routing for the play are set before launch  
- sales knows the play context when leads land  
- response time slas are agreed upon and monitored  
- feedback flows back to marketing on lead quality

**07\. measurement frame.** — *the play earns its keep or it doesn't.*

- success metrics for the play are defined pre-launch  
- pipeline impact gets tracked weekly during the play  
- rep confidence and adoption get measured  
- a post-play debrief happens within 30 days

**08\. skill development through the play.** — *reps practice the motion, not just hear about it.*

- reps practice the play's hardest conversations before live deals  
- ai role play simulates the play scenarios  
- managers coach reps through their first three play-driven deals  
- top performers share early wins with the team

Room 3 total: 32 cards.

### Room 4 / Career Development — `where you deliver on the carrot.`

**01\. career path clarity.** — *the map for every role.*

- documented progression paths for every quota-carrying role (ic track and manager track)  
- the path is shared with every new hire by week 4  
- each level has explicit criteria, not "in the manager's head"  
- the path gets refreshed as the org grows or changes

**02\. manager readiness program.** — *before the promotion, not after.*

- a defined program exists for ics interested in management  
- candidates are identified at least two quarters before promotion  
- the program covers people management, coaching, and operational rhythms  
- candidates demonstrate readiness through specific assignments, not just tenure

**03\. bench / succession planning.** — *every leader has named successors.*

- every people-manager role has a named "next up" candidate  
- the bench gets reviewed quarterly with senior leadership  
- candidates know they're on the bench (or that they aren't)  
- gaps in the bench trigger external hiring or development plans

**04\. stretch opportunities.** — *leadership before the title.*

- ics get to lead projects, plays, or peer-coaching before promotion  
- shadowing opportunities exist for those exploring management  
- new responsibilities come with explicit success measures  
- failure on a stretch is treated as data, not a strike

**05\. mentorship structure.** — *not "find one yourself."*

- a formal mentorship program exists  
- mentors are trained, not just assigned  
- meeting cadence is set, not optional  
- the program gets measured (matches, outcomes, satisfaction)

**06\. manager onboarding.** — *ic to manager is a different job.*

- newly promoted managers go through structured onboarding into the role  
- they get coached, not just handed a team  
- their first 90 days have defined milestones  
- they're not measured on individual numbers in the first quarter

**07\. continuous leadership development.** — *development doesn't end at week 12\.*

- managers attend ongoing development (peer cohorts, exec coaching, external programs)  
- they get exposed to functions beyond their own (cross-functional rotations or projects)  
- feedback flows up from their teams in a structured way  
- their growth is part of their own performance conversation

**08\. career conversation cadence.** — *growth isn't an annual review.*

- every rep has a quarterly career conversation, not just a performance review  
- the conversation is documented and revisited  
- managers are trained to run it, not improvising  
- conversation outcomes drive learning and development decisions

Room 4 total: 32 cards.

**Grand total: 126 cards across 4 rooms.**

---

## 7\. Form integration (Formspree)

1. Mercy creates a Formspree account, sets endpoint to deliver submissions to `m@mercyb.com`.  
2. Endpoint URL goes into `.env.local` as `NEXT_PUBLIC_FORMSPREE_ENDPOINT`.  
3. On email-gate submit, POST a JSON payload:

{

  "name": "Jane Doe",

  "email": "jane@company.com",

  "company": "Acme",

  "role": "CRO/VP Sales",

  "roomsCompleted": \[1, 3\],

  "roomScores": {

    "1": { "score": 21, "total": 30, "percent": 70, "tier": "operational" },

    "3": { "score": 14, "total": 30, "percent": 47, "tier": "building up" }

  },

  "priorityGaps": \[

    { "room": 3, "item": "demand-gen to sales handoff" },

    { "room": 3, "item": "measurement frame" }

  \],

  "idkList": \[

    { "room": 1, "card": "cohort-to-cohort learnings get documented" },

    { "room": 3, "card": "rep confidence and adoption get measured" }

  \]

}

Formspree forwards this to Mercy's Gmail as a structured email.

---

## 8\. PDF generation

- Use `@react-pdf/renderer` to generate the report client-side after email submission.  
- PDF layout mirrors the on-screen results:  
  - Header: `mercy bell · field activation systems` \+ `for [name] @ [company]` \+ date  
  - Section per completed room with score, tier, missing-list, sometimes-list, idk-list  
  - Priority gaps summary  
  - Closing CTA: `next step: 30 min, calendly.com/m-mercyb`  
- Trigger download via `<PDFDownloadLink>` immediately after Formspree success  
- File name: `house-of-enablement-[firstname]-[date].pdf`

---

## 9\. Deployment

1. Push to GitHub repo (Mercy creates).  
2. Connect to Vercel (one-click import).  
3. Add custom domain in Vercel: `the-house.mercyb.com`.  
4. Add CNAME record at Webflow DNS: `the-house` → `cname.vercel-dns.com`.  
5. SSL auto-provisions.  
6. Env vars in Vercel dashboard:  
   - `NEXT_PUBLIC_FORMSPREE_ENDPOINT`  
   - (No other secrets needed for v1)

---

## 10\. Suggested file structure

src/

  app/

    layout.tsx                    \# root layout with fonts \+ global styles

    page.tsx                      \# house landing

    room/\[id\]/page.tsx            \# room intro

    room/\[id\]/audit/page.tsx      \# card sort flow

    room/\[id\]/results/page.tsx    \# room results

    house/page.tsx                \# house overview (2+ rooms done)

  components/

    HouseSVG.tsx                  \# the house visual

    Card.tsx                      \# draggable/tappable card

    Bucket.tsx                    \# drop zone

    BucketPile.tsx                \# shows cards already in bucket

    ProgressBar.tsx

    ItemHeader.tsx

    RoomResults.tsx

    EmailGateModal.tsx

    PDFReport.tsx                 \# @react-pdf component tree

    MobileCardSorter.tsx          \# mobile tap-to-place UI

    DesktopCardSorter.tsx         \# desktop drag-drop UI

  content/

    rooms.ts                      \# all locked content typed as Room\[\]

  lib/

    scoring.ts                    \# scoring \+ tier logic

    storage.ts                    \# localStorage helpers

    formspree.ts                  \# submit helper

    types.ts

  styles/

    globals.css                   \# CSS variables, base typography

  hooks/

    useDeviceType.ts              \# returns 'mobile' | 'desktop'

public/

  fonts/                          \# if self-hosting fallback

  favicon.ico

---

## 11\. Out of scope for v1

- User authentication / accounts  
- Cross-session save (localStorage only within session)  
- Multi-user comparison  
- A/B testing of question wording  
- Editing the diagnostic itself in-app  
- Multi-language  
- Embedding inside other tools  
- Analytics beyond Vercel's default

---

## 12\. Acceptance criteria (v1 ships when)

- [ ] Landing page renders with house visual and all 4 rooms clickable  
- [ ] User can enter any room from the landing  
- [ ] Card sort works on desktop with drag-drop (cards animate into buckets, count updates)  
- [ ] Card sort works on mobile with tap-to-place (4 buttons, card animates off)  
- [ ] All 4 rooms have all locked content rendering correctly  
- [ ] Scoring is correct per the formula in section 5  
- [ ] Tier labels render correctly  
- [ ] Room results screen shows the full picture (score, tier, missing, sometimes, idk, priority gaps)  
- [ ] Email gate captures name, email, optional company, role  
- [ ] Formspree submission lands in `m@mercyb.com` as structured email  
- [ ] PDF downloads on success with branded layout  
- [ ] House overview renders when 2+ rooms completed  
- [ ] All copy follows voice rules (lowercase, no em dashes, no banned words)  
- [ ] All colors and fonts match the brand system in section 3  
- [ ] Lighthouse mobile score 90+ for Performance and Accessibility  
- [ ] Deployed to `the-house.mercyb.com` over HTTPS

---

## 13\. Notes for whoever builds this

- Voice is the most important thing to get right. The diagnostic IS the brand. If anything looks like a generic SaaS survey, we've failed.  
- Mobile UX matters most. \~60% of traffic will be on phones. Test on real devices before shipping.  
- The "tactile" feeling on desktop comes from the card weight \+ animation \+ the satisfying *plink* of placing it. Spend animation polish budget here.  
- The IDK pile is the secret weapon. It's how the diagnostic feels safe — you can admit you don't know without it counting against you. Make it visually equal to the others, not de-emphasized.  
- Don't add a back button to undo placements in v1. Forces honest first instincts. We can add it in v2 if testing demands.

