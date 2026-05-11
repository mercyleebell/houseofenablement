import type { Room } from "@/lib/types";

export const rooms: Room[] = [
  {
    id: "onboarding",
    number: 1,
    name: "onboarding",
    hero: "where the brain gets wired.",
    sub: "eight things that should be in this room when it's fully built. answer for what's actually there today, not what's on the roadmap.",
    items: [
      {
        id: "deal-pattern-recognition",
        title: "deal pattern recognition.",
        tagline:
          "the heuristics that tell reps what to chase and what to walk.",
        cards: [
          {
            id: "deal-pattern-recognition-c1",
            text: "a written, ratified deal pattern playbook exists",
          },
          {
            id: "deal-pattern-recognition-c2",
            text: "it's rooted in closed-won and closed-lost data, or in call analysis if call volume is low",
          },
          {
            id: "deal-pattern-recognition-c3",
            text: "it's been updated in the last six months",
          },
          {
            id: "deal-pattern-recognition-c4",
            text: "new hires can articulate the top three heuristics by end of onboarding",
          },
        ],
      },
      {
        id: "success-path-with-a-carrot",
        title: "success path with a carrot.",
        tagline:
          "the picture of what good looks like and what comes next.",
        cards: [
          {
            id: "success-path-with-a-carrot-c1",
            text: 'a documented definition of "good" in this role',
          },
          {
            id: "success-path-with-a-carrot-c2",
            text: "ramp milestones (30 / 60 / 90 or equivalent)",
          },
          {
            id: "success-path-with-a-carrot-c3",
            text: "at least three visible internal examples of people who moved up",
          },
          {
            id: "success-path-with-a-carrot-c4",
            text: "the growth path gets named in the new hire's first two weeks",
          },
        ],
      },
      {
        id: "deep-manager-involvement",
        title: "deep manager involvement.",
        tagline: "managers in the room, not handing it off.",
        cards: [
          {
            id: "deep-manager-involvement-c1",
            text: "scheduled manager-new hire 1:1s during ramp",
          },
          {
            id: "deep-manager-involvement-c2",
            text: "managers deliver some content alongside enablement",
          },
          {
            id: "deep-manager-involvement-c3",
            text: "structured coaching rhythm (deal reviews, role play, ride-alongs)",
          },
          {
            id: "deep-manager-involvement-c4",
            text: "new-hire ramp success shows up in the manager's own metrics",
          },
        ],
      },
      {
        id: "workflow-tooling-architecture",
        title: "workflow + tooling architecture.",
        tagline: "one workspace, not twelve tabs.",
        cards: [
          {
            id: "workflow-tooling-architecture-c1",
            text: "a single primary workspace is defined (slack, claude, etc.)",
          },
          {
            id: "workflow-tooling-architecture-c2",
            text: "a day-1 access and tools checklist runs without surprises",
          },
          {
            id: "workflow-tooling-architecture-c3",
            text: "daily work flows through one or two primary tools, not six",
          },
          {
            id: "workflow-tooling-architecture-c4",
            text: 'a "where things live" map exists for new hires',
          },
        ],
      },
      {
        id: "feedback-loops",
        title: "feedback loops.",
        tagline: "you know if it worked because you asked.",
        cards: [
          {
            id: "feedback-loops-c1",
            text: "pulse surveys at multiple ramp checkpoints (week 1, 4, 12)",
          },
          {
            id: "feedback-loops-c2",
            text: "a structured exit interview at the end of ramp",
          },
          {
            id: "feedback-loops-c3",
            text: "feedback gets reviewed and changes get made",
          },
          {
            id: "feedback-loops-c4",
            text: "cohort-to-cohort learnings get documented",
          },
        ],
      },
      {
        id: "solution-depth-bar",
        title: "solution depth bar + initial certification.",
        tagline: "the bar a new hire has to clear to leave the room.",
        cards: [
          {
            id: "solution-depth-bar-c1",
            text: "a documented solution depth bar for the role",
          },
          {
            id: "solution-depth-bar-c2",
            text: "a consistent certification mechanism every hire goes through",
          },
          {
            id: "solution-depth-bar-c3",
            text: "it tests problem-to-solution matching, not feature recall",
          },
          {
            id: "solution-depth-bar-c4",
            text: "it has a pass/fail or scored outcome that determines graduation",
          },
        ],
      },
      {
        id: "real-reps-not-theoretical",
        title: "real reps, not theoretical ones.",
        tagline: "the brain rewires on real customers, not decks.",
        cards: [
          {
            id: "real-reps-not-theoretical-c1",
            text: "a safe lead pool is carved out for new hires",
          },
          {
            id: "real-reps-not-theoretical-c2",
            text: "real discovery calls happen in week 1 or 2",
          },
          {
            id: "real-reps-not-theoretical-c3",
            text: "live calls get observed and coached, not just listened to",
          },
          {
            id: "real-reps-not-theoretical-c4",
            text: "ai role play supplements training, it does not substitute",
          },
        ],
      },
      {
        id: "sales-process-continuous-discovery",
        title: "a sales process where discovery is continuous.",
        tagline: "process is ratified. discovery is everywhere.",
        cards: [
          {
            id: "sales-process-continuous-discovery-c1",
            text: "a ratified sales process exists",
          },
          {
            id: "sales-process-continuous-discovery-c2",
            text: "discovery is taught as continuous, not a single stage",
          },
          {
            id: "sales-process-continuous-discovery-c3",
            text: "mid-cycle discovery questions get practiced in training",
          },
          {
            id: "sales-process-continuous-discovery-c4",
            text: "a discovery agent lets the new hire know what discovery opportunities they missed in a call",
          },
        ],
      },
    ],
  },
  {
    id: "solution-role-depth",
    number: 2,
    name: "solution & role depth",
    hero: "depth that holds up under pressure.",
    sub: "eight things that should be in this room when it's fully built. answer for what's actually there today, not what's on the roadmap.",
    items: [
      {
        id: "role-specific-depth-maps",
        title: "role-specific depth maps.",
        tagline: "what excellence looks like, by role.",
        cards: [
          {
            id: "role-specific-depth-maps-c1",
            text: "a documented depth of technical understanding for every quota-carrying role",
          },
          {
            id: "role-specific-depth-maps-c2",
            text: "it names the technical, product, and customer knowledge required",
          },
          {
            id: "role-specific-depth-maps-c3",
            text: "ai role play established for product hot seat questions",
          },
        ],
      },
      {
        id: "living-product-knowledge",
        title: "living product knowledge.",
        tagline: "current, findable, in one place.",
        cards: [
          {
            id: "living-product-knowledge-c1",
            text: "product docs are current within 30 days of the last release",
          },
          {
            id: "living-product-knowledge-c2",
            text: "reps know where to find feature, edge-case, and integration details",
          },
          {
            id: "living-product-knowledge-c3",
            text: "the product team contributes to enablement when shipping",
          },
          {
            id: "living-product-knowledge-c4",
            text: "one source of truth, not five competing wikis",
          },
        ],
      },
      {
        id: "buyer-persona-playbooks",
        title: "buyer persona playbooks.",
        tagline: "per buyer, not per icp slide.",
        cards: [
          {
            id: "buyer-persona-playbooks-c1",
            text: "a documented playbook exists for each major buyer type",
          },
          {
            id: "buyer-persona-playbooks-c2",
            text: "it includes their kpis, language, objections, and pressure points",
          },
          {
            id: "buyer-persona-playbooks-c3",
            text: "reps practice persona-specific conversations in training",
          },
          {
            id: "buyer-persona-playbooks-c4",
            text: "the playbooks get updated from field feedback at least twice a year",
          },
        ],
      },
      {
        id: "vertical-industry-geo-expertise",
        title: "vertical / industry / geo expertise.",
        tagline: "depth in the markets you actually sell into.",
        cards: [
          {
            id: "vertical-industry-geo-expertise-c1",
            text: "reps are organized or trained against their target markets",
          },
          {
            id: "vertical-industry-geo-expertise-c2",
            text: "vertical case studies and reference architectures exist",
          },
          {
            id: "vertical-industry-geo-expertise-c3",
            text: "customer panels or vertical experts get scheduled regularly",
          },
          {
            id: "vertical-industry-geo-expertise-c4",
            text: "a single source of truth for your message in each market is established",
          },
          {
            id: "vertical-industry-geo-expertise-c5",
            text: "vertical depth factors into deal and account assignments",
          },
        ],
      },
      {
        id: "advanced-process-mastery",
        title: "advanced process mastery.",
        tagline: "the deal mechanics beyond onboarding.",
        cards: [
          {
            id: "advanced-process-mastery-c1",
            text: "multithreading expectations are documented and coached",
          },
          {
            id: "advanced-process-mastery-c2",
            text: "executive engagement playbooks exist for c-suite and board-level conversations",
          },
          {
            id: "advanced-process-mastery-c3",
            text: "procurement and legal navigation guides exist",
          },
          {
            id: "advanced-process-mastery-c4",
            text: "reps get coached through complex deal patterns, not just early-stage",
          },
        ],
      },
      {
        id: "continuous-certification",
        title: "continuous certification.",
        tagline: "depth is not one-and-done.",
        cards: [
          {
            id: "continuous-certification-c1",
            text: "reps re-certify on solution depth at least quarterly",
          },
          {
            id: "continuous-certification-c2",
            text: "new product releases trigger certification updates",
          },
          {
            id: "continuous-certification-c3",
            text: "failing certification leads to a coaching plan, not silence",
          },
        ],
      },
      {
        id: "peer-learning-forums",
        title: "peer learning forums.",
        tagline: "top performers teach the rest.",
        cards: [
          {
            id: "peer-learning-forums-c1",
            text: "structured deal post-mortems happen monthly or quarterly",
          },
          {
            id: "peer-learning-forums-c2",
            text: "top performers teach on a cadence",
          },
          {
            id: "peer-learning-forums-c3",
            text: "win/loss findings get circulated and acted on",
          },
        ],
      },
      {
        id: "ai-powered-depth-tools",
        title: "ai-powered depth tools.",
        tagline: "ai supports the rep brain, it doesn't replace it.",
        cards: [
          {
            id: "ai-powered-depth-tools-c1",
            text: "reps have access to ai role play for objections and discovery",
          },
          {
            id: "ai-powered-depth-tools-c2",
            text: "ai-driven call coaching surfaces patterns from their own calls",
          },
          {
            id: "ai-powered-depth-tools-c3",
            text: "ai quizzing supports memory and recall of depth content",
          },
          {
            id: "ai-powered-depth-tools-c4",
            text: "reps know when to use ai and when not to",
          },
        ],
      },
    ],
  },
  {
    id: "field-activation",
    number: 3,
    name: "field activation",
    hero: "the party room.",
    sub: "eight things that should be in this room when it's fully built. answer for what's actually there today, not what's on the roadmap.",
    items: [
      {
        id: "quarterly-play-cadence",
        title: "quarterly play cadence.",
        tagline: "a rhythm, not a reaction.",
        cards: [
          {
            id: "quarterly-play-cadence-c1",
            text: "a defined quarterly play calendar exists",
          },
          {
            id: "quarterly-play-cadence-c2",
            text: "plays get scoped six to eight weeks before launch",
          },
          {
            id: "quarterly-play-cadence-c3",
            text: "each play has an explicit owner",
          },
          {
            id: "quarterly-play-cadence-c4",
            text: "measurement starts before the play launches",
          },
        ],
      },
      {
        id: "cross-functional-design-table",
        title: "cross-functional design table.",
        tagline: "marketing, sales, revops, cs in the same room.",
        cards: [
          {
            id: "cross-functional-design-table-c1",
            text: "a working group convenes per play with marketing, sales, revops, and cs",
          },
          {
            id: "cross-functional-design-table-c2",
            text: "the working group meets multiple times pre-launch, not once",
          },
          {
            id: "cross-functional-design-table-c3",
            text: "decisions get documented, not assumed",
          },
          {
            id: "cross-functional-design-table-c4",
            text: "product participates when the play is product-led",
          },
        ],
      },
      {
        id: "one-message-not-three",
        title: "one message, not three.",
        tagline: "ratified positioning before it hits the field.",
        cards: [
          {
            id: "one-message-not-three-c1",
            text: "the positioning gets reviewed and approved by all functions before field rollout",
          },
          {
            id: "one-message-not-three-c2",
            text: "a shared narrative doc exists and gets used",
          },
          {
            id: "one-message-not-three-c3",
            text: "competing decks get retired or consolidated",
          },
          {
            id: "one-message-not-three-c4",
            text: "the same message shows up in marketing, sales, and cs copy",
          },
        ],
      },
      {
        id: "live-activation-event",
        title: "live activation event.",
        tagline: "the field experiences the play together.",
        cards: [
          {
            id: "live-activation-event-c1",
            text: "a live activation event happens (kickoff, all-hands, workshop)",
          },
          {
            id: "live-activation-event-c2",
            text: "it's interactive, not slide-only",
          },
          {
            id: "live-activation-event-c3",
            text: "managers attend and participate, not just watch",
          },
          {
            id: "live-activation-event-c4",
            text: "the event has a clear takeaway each rep can use day one",
          },
        ],
      },
      {
        id: "field-activation-kit",
        title: "field activation kit.",
        tagline:
          "everything a rep needs to run the play in a conversation.",
        cards: [
          {
            id: "field-activation-kit-c1",
            text: "talk tracks exist for each persona the play targets",
          },
          {
            id: "field-activation-kit-c2",
            text: "email templates and sequences are ready at launch",
          },
          {
            id: "field-activation-kit-c3",
            text: "the right accounts for the play are surfaced to the rep automatically",
          },
          {
            id: "field-activation-kit-c4",
            text: "the kit gets refreshed when the field reports back",
          },
        ],
      },
      {
        id: "demand-gen-to-sales-handoff",
        title: "demand-gen to sales handoff.",
        tagline: "pipeline lands clean, not lost.",
        cards: [
          {
            id: "demand-gen-to-sales-handoff-c1",
            text: "lead scoring and routing for the play are set before launch",
          },
          {
            id: "demand-gen-to-sales-handoff-c2",
            text: "sales knows the play context when leads land",
          },
          {
            id: "demand-gen-to-sales-handoff-c3",
            text: "response time slas are agreed upon and monitored",
          },
          {
            id: "demand-gen-to-sales-handoff-c4",
            text: "feedback flows back to marketing on lead quality",
          },
        ],
      },
      {
        id: "measurement-frame",
        title: "measurement frame.",
        tagline: "the play earns its keep or it doesn't.",
        cards: [
          {
            id: "measurement-frame-c1",
            text: "success metrics for the play are defined pre-launch",
          },
          {
            id: "measurement-frame-c2",
            text: "pipeline impact gets tracked weekly during the play",
          },
          {
            id: "measurement-frame-c3",
            text: "rep confidence and adoption get measured",
          },
          {
            id: "measurement-frame-c4",
            text: "a post-play debrief happens within 30 days",
          },
        ],
      },
      {
        id: "skill-development-through-the-play",
        title: "skill development through the play.",
        tagline: "reps practice the motion, not just hear about it.",
        cards: [
          {
            id: "skill-development-through-the-play-c1",
            text: "reps practice the play's hardest conversations before live deals",
          },
          {
            id: "skill-development-through-the-play-c2",
            text: "ai role play simulates the play scenarios",
          },
          {
            id: "skill-development-through-the-play-c3",
            text: "managers coach reps through their first three play-driven deals",
          },
          {
            id: "skill-development-through-the-play-c4",
            text: "top performers share early wins with the team",
          },
        ],
      },
    ],
  },
  {
    id: "career-development",
    number: 4,
    name: "career development",
    hero: "where you deliver on the carrot.",
    sub: "eight things that should be in this room when it's fully built. answer for what's actually there today, not what's on the roadmap.",
    items: [
      {
        id: "career-path-clarity",
        title: "career path clarity.",
        tagline: "the map for every role.",
        cards: [
          {
            id: "career-path-clarity-c1",
            text: "documented progression paths for every quota-carrying role (ic track and manager track)",
          },
          {
            id: "career-path-clarity-c2",
            text: "the path is shared with every new hire by week 4",
          },
          {
            id: "career-path-clarity-c3",
            text: 'each level has explicit criteria, not "in the manager\'s head"',
          },
          {
            id: "career-path-clarity-c4",
            text: "the path gets refreshed as the org grows or changes",
          },
        ],
      },
      {
        id: "manager-readiness-program",
        title: "manager readiness program.",
        tagline: "before the promotion, not after.",
        cards: [
          {
            id: "manager-readiness-program-c1",
            text: "a defined program exists for ics interested in management",
          },
          {
            id: "manager-readiness-program-c2",
            text: "candidates are identified at least two quarters before promotion",
          },
          {
            id: "manager-readiness-program-c3",
            text: "the program covers people management, coaching, and operational rhythms",
          },
          {
            id: "manager-readiness-program-c4",
            text: "candidates demonstrate readiness through specific assignments, not just tenure",
          },
        ],
      },
      {
        id: "bench-succession-planning",
        title: "bench / succession planning.",
        tagline: "every leader has named successors.",
        cards: [
          {
            id: "bench-succession-planning-c1",
            text: 'every people-manager role has a named "next up" candidate',
          },
          {
            id: "bench-succession-planning-c2",
            text: "the bench gets reviewed quarterly with senior leadership",
          },
          {
            id: "bench-succession-planning-c3",
            text: "candidates know they're on the bench (or that they aren't)",
          },
          {
            id: "bench-succession-planning-c4",
            text: "gaps in the bench trigger external hiring or development plans",
          },
        ],
      },
      {
        id: "stretch-opportunities",
        title: "stretch opportunities.",
        tagline: "leadership before the title.",
        cards: [
          {
            id: "stretch-opportunities-c1",
            text: "ics get to lead projects, plays, or peer-coaching before promotion",
          },
          {
            id: "stretch-opportunities-c2",
            text: "shadowing opportunities exist for those exploring management",
          },
          {
            id: "stretch-opportunities-c3",
            text: "new responsibilities come with explicit success measures",
          },
          {
            id: "stretch-opportunities-c4",
            text: "failure on a stretch is treated as data, not a strike",
          },
        ],
      },
      {
        id: "mentorship-structure",
        title: "mentorship structure.",
        tagline: 'not "find one yourself."',
        cards: [
          {
            id: "mentorship-structure-c1",
            text: "a formal mentorship program exists",
          },
          {
            id: "mentorship-structure-c2",
            text: "mentors are trained, not just assigned",
          },
          {
            id: "mentorship-structure-c3",
            text: "meeting cadence is set, not optional",
          },
          {
            id: "mentorship-structure-c4",
            text: "the program gets measured (matches, outcomes, satisfaction)",
          },
        ],
      },
      {
        id: "manager-onboarding",
        title: "manager onboarding.",
        tagline: "ic to manager is a different job.",
        cards: [
          {
            id: "manager-onboarding-c1",
            text: "newly promoted managers go through structured onboarding into the role",
          },
          {
            id: "manager-onboarding-c2",
            text: "they get coached, not just handed a team",
          },
          {
            id: "manager-onboarding-c3",
            text: "their first 90 days have defined milestones",
          },
          {
            id: "manager-onboarding-c4",
            text: "they're not measured on individual numbers in the first quarter",
          },
        ],
      },
      {
        id: "continuous-leadership-development",
        title: "continuous leadership development.",
        tagline: "development doesn't end at week 12.",
        cards: [
          {
            id: "continuous-leadership-development-c1",
            text: "managers attend ongoing development (peer cohorts, exec coaching, external programs)",
          },
          {
            id: "continuous-leadership-development-c2",
            text: "they get exposed to functions beyond their own (cross-functional rotations or projects)",
          },
          {
            id: "continuous-leadership-development-c3",
            text: "feedback flows up from their teams in a structured way",
          },
          {
            id: "continuous-leadership-development-c4",
            text: "their growth is part of their own performance conversation",
          },
        ],
      },
      {
        id: "career-conversation-cadence",
        title: "career conversation cadence.",
        tagline: "growth isn't an annual review.",
        cards: [
          {
            id: "career-conversation-cadence-c1",
            text: "every rep has a quarterly career conversation, not just a performance review",
          },
          {
            id: "career-conversation-cadence-c2",
            text: "the conversation is documented and revisited",
          },
          {
            id: "career-conversation-cadence-c3",
            text: "managers are trained to run it, not improvising",
          },
          {
            id: "career-conversation-cadence-c4",
            text: "conversation outcomes drive learning and development decisions",
          },
        ],
      },
    ],
  },
];

export const getRoom = (n: 1 | 2 | 3 | 4): Room => {
  const room = rooms.find((r) => r.number === n);
  if (!room) throw new Error(`room ${n} not found`);
  return room;
};
