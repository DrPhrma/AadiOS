export type ExperimentStatus = "completed" | "in-progress" | "experiment" | "archived";
export type ExperimentCategory =
  | "ai"
  | "linux"
  | "cyber"
  | "game"
  | "web"
  | "random";

export type Experiment = {
  id: string;
  title: string;
  blurb: string;
  category: ExperimentCategory;
  status: ExperimentStatus;
};

export const experimentCategories: { id: ExperimentCategory | "all"; label: string }[] =
  [
    { id: "all", label: "All" },
    { id: "ai", label: "AI experiments" },
    { id: "linux", label: "Linux labs" },
    { id: "cyber", label: "Cyber labs" },
    { id: "game", label: "Game prototypes" },
    { id: "web", label: "Web experiments" },
    { id: "random", label: "Random builds" },
  ];

export const experiments: Experiment[] = [
  {
    id: "ollama-routing",
    title: "Local LLM routing",
    blurb: "Sending different jobs to different local models instead of one prompt that pretends to be everything.",
    category: "ai",
    status: "experiment",
  },
  {
    id: "pepper-memory",
    title: "Pepper memory sketches",
    blurb: "What should persist between sessions, and what should be allowed to forget.",
    category: "ai",
    status: "in-progress",
  },
  {
    id: "prompt-notes",
    title: "Prompt routing notes",
    blurb: "Written rules for when a model is the wrong tool.",
    category: "ai",
    status: "completed",
  },
  {
    id: "vbox-net",
    title: "VirtualBox networking lab",
    blurb: "NAT, host-only, and the afternoon a ping refused to explain itself.",
    category: "linux",
    status: "completed",
  },
  {
    id: "cli-tooling",
    title: "CLI tooling kit",
    blurb: "A small, growing set of commands that actually get used twice.",
    category: "linux",
    status: "in-progress",
  },
  {
    id: "connectivity",
    title: "Connectivity troubleshooting",
    blurb: "One variable at a time. Logs before reinstalls.",
    category: "linux",
    status: "completed",
  },
  {
    id: "deepcytes",
    title: "Deepcytes Cyber Labs",
    blurb: "UK school-collaboration program — completed, certificated, badged.",
    category: "cyber",
    status: "completed",
  },
  {
    id: "osint-notes",
    title: "OSINT methodology notes",
    blurb: "Sources, restraint, and not turning curiosity into a performance.",
    category: "cyber",
    status: "experiment",
  },
  {
    id: "net-fundamentals",
    title: "Networking fundamentals",
    blurb: "Packets, paths, and the difference between down and misconfigured.",
    category: "cyber",
    status: "completed",
  },
  {
    id: "mirehaven",
    title: "Static on the Line",
    blurb: "Mirehaven prototype — still being walked, broken, and rebuilt.",
    category: "game",
    status: "in-progress",
  },
  {
    id: "mobile-ui",
    title: "Full-screen mobile UI tests",
    blurb: "Menus and HUD that have to survive a real thumb.",
    category: "game",
    status: "completed",
  },
  {
    id: "save-continue",
    title: "Save / continue experiments",
    blurb: "The unglamorous state machine behind 'continue'.",
    category: "game",
    status: "completed",
  },
  {
    id: "portfolio-v1",
    title: "Portfolio v01",
    blurb: "First personal site, end of Class 8. Kept as an origin, not a shrine.",
    category: "web",
    status: "archived",
  },
  {
    id: "portfolio-v2",
    title: "Portfolio v02",
    blurb: "This lab. Built to last through Class 10 and to be rewritten when it should.",
    category: "web",
    status: "in-progress",
  },
  {
    id: "web-components",
    title: "Interface experiments",
    blurb: "Small UI studies that may or may not earn a place in a real page.",
    category: "web",
    status: "experiment",
  },
  {
    id: "automation-scripts",
    title: "Automation scripts",
    blurb: "Tiny programs that do one boring thing so it stays done.",
    category: "random",
    status: "experiment",
  },
  {
    id: "app-launch",
    title: "Application launching tests",
    blurb: "Teaching Pepper — carefully — how to open a thing on the desktop.",
    category: "random",
    status: "experiment",
  },
];

export const statusCopy: Record<ExperimentStatus, string> = {
  completed: "Completed",
  "in-progress": "In progress",
  experiment: "Experiment",
  archived: "Archived",
};
