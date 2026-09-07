export type ProjectStatus = "flagship" | "prototype" | "completed" | "lab";

export type Project = {
  slug: string;
  index: string;
  title: string;
  category: string;
  status: ProjectStatus;
  statusLabel: string;
  summary: string;
  purpose: string;
  cover: string;
  coverAlt: string;
  stills: { src: string; alt: string; caption: string }[];
  stack: string[];
  overview: string[];
  architecture?: { name: string; detail: string }[];
  journey: { phase: string; text: string }[];
  challenges: string[];
  honesty: string;
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "pepper",
    index: "01",
    title: "Pepper",
    category: "Local AI Assistant",
    status: "flagship",
    statusLabel: "In progress · experimental",
    summary:
      "A modular Python desktop assistant inspired by JARVIS — running local models, not a cloud demo.",
    purpose:
      "Explore what a personal assistant can do when inference, memory, and control stay on the machine.",
    cover: "images/pepper-cover.jpg",
    coverAlt:
      "Dark workstation with overlapping terminal panes and modular HUD panels — visual for Pepper, not a product screenshot.",
    stills: [
      {
        src: "images/pepper-cover.jpg",
        alt: "Night workstation still used as a Pepper workspace visual.",
        caption: "Workspace visual · replace with a real capture later",
      },
      {
        src: "images/pepper-modules.jpg",
        alt: "Abstract modular panels connected by thin traces.",
        caption: "Architecture visual · modules are still being rewritten",
      },
    ],
    stack: [
      "Python",
      "Ollama",
      "Qwen",
      "Local LLMs",
      "Memory",
      "Automation",
      "Prompt engineering",
      "Modular architecture",
      "Debugging",
      "Windows integration",
    ],
    overview: [
      "Pepper is the flagship experiment: a desktop AI assistant assembled in Python, talking to local models through Ollama (Qwen and related runtimes) instead of a hosted API.",
      "The work is about architecture more than a single trick. Routing, memory, application launching, PC control, and voice are treated as separate modules so each piece can fail without taking the rest down.",
      "Nothing here is claimed as production-ready. Features exist at different depths — some hold together, some are still being argued with in the debugger.",
    ],
    architecture: [
      {
        name: "Input",
        detail: "Text first. Voice is an optional loop, not the foundation.",
      },
      {
        name: "Router",
        detail: "Intent is classified before a model is asked to do everything.",
      },
      {
        name: "Memory",
        detail: "Notes and short-term context — experimental, not a second brain.",
      },
      {
        name: "LLM",
        detail: "Local inference via Ollama / Qwen. Latency is part of the design problem.",
      },
      {
        name: "Actions",
        detail: "Launch apps, run small automations, talk to the desktop — carefully, and still evolving.",
      },
      {
        name: "Voice",
        detail: "A later layer. Useful when it works. Honest when it doesn't.",
      },
    ],
    journey: [
      {
        phase: "Spark",
        text: "A question, not a spec: could a JARVIS-like assistant run locally, on this machine, with models I can actually inspect?",
      },
      {
        phase: "First loop",
        text: "A Python process talking to Ollama. Ugly. Slow. Proof that local inference was enough to start.",
      },
      {
        phase: "Routing",
        text: "One giant prompt collapsed. Intent routing and smaller tools started to look like a system.",
      },
      {
        phase: "Memory",
        text: "Context that survives a session — and the new failure modes that come with it.",
      },
      {
        phase: "Control",
        text: "Application launching and Windows hooks. Power that has to be fenced, not just wired.",
      },
      {
        phase: "Now",
        text: "Still iterating. Modules get split, renamed, and rewritten when they stop earning their place.",
      },
    ],
    challenges: [
      "Local models are honest about latency. Responsiveness has to be designed around it, not wished away.",
      "Memory that is too eager starts inventing continuity. Memory that is too shy forgets the point of having it.",
      "Desktop control is a privilege. The hard part is not launching an app — it is refusing to launch the wrong one.",
      "Voice adds noise, timing, and failure modes that text never had.",
      "Keeping modules decoupled is slower at the start and the only reason the project is still alive.",
    ],
    honesty:
      "Pepper is a living experiment. Treat feature names as directions of work, not a shipped product checklist.",
  },
  {
    slug: "static-on-the-line",
    index: "02",
    title: "Static on the Line",
    category: "Game Development",
    status: "prototype",
    statusLabel: "Prototype · iterating",
    summary:
      "A 2D prototype set in Mirehaven — a coastal town, a radio station, and broadcasts that should not exist.",
    purpose:
      "Learn 2D game development by making a place, a character, and a build that actually runs on a phone.",
    cover: "images/mirehaven-cover.jpg",
    coverAlt:
      "Foggy coastal night with a radio tower and wet stone — atmosphere for Mirehaven, not in-engine footage.",
    stills: [
      {
        src: "images/mirehaven-cover.jpg",
        alt: "Fog, harbor light, and a radio tower at night.",
        caption: "Mirehaven atmosphere · concept visual",
      },
      {
        src: "images/mirehaven-studio.jpg",
        alt: "A small radio studio in warm tungsten light.",
        caption: "Broadcast room · concept visual",
      },
    ],
    stack: [
      "2D development",
      "Pixel-art presentation",
      "Side-view gameplay",
      "Android APK builds",
      "Full-screen mobile UI",
      "Save / continue",
      "Menus",
      "Character movement",
      "Debugging",
      "Iterative design",
    ],
    overview: [
      "Static on the Line is a 2D game prototype centered on Mirehaven: a coastal town, a radio station, mysterious broadcasts, and a character named Elias Voss.",
      "The work was never 'make a game and ship it.' It was a sequence of practical problems — movement, menus, a full-screen mobile UI, a save/continue path, an APK that installs, then the bugs that only appear on a real device.",
      "Pixel-art presentation and side-view play were treated as experiments in feel, not as a finished art bible.",
    ],
    journey: [
      {
        phase: "Concept",
        text: "A town on the water. A radio that says things the town will not. Elias Voss as the person who has to listen.",
      },
      {
        phase: "Prototype",
        text: "A side-view space that could be walked. Menus that could be opened. The first time it felt like a place instead of a file.",
      },
      {
        phase: "APK",
        text: "Packaging for Android. Full-screen mobile UI. The moment a personal prototype left the desktop.",
      },
      {
        phase: "Testing",
        text: "Install, launch, rotate, resume. Devices do not care about your editor layout.",
      },
      {
        phase: "Bugs",
        text: "Save/continue that did not. Movement that fought the camera. UI that looked finished until a thumb covered it.",
      },
      {
        phase: "Iteration",
        text: "Cut, fix, rebuild. The prototype is still a prototype — that is the honest status.",
      },
    ],
    challenges: [
      "Full-screen mobile UI has to survive thumbs, notches, and the player's patience.",
      "Save/continue is a small sentence and a large state machine.",
      "Pixel-art adjacent presentation is easy to start and hard to keep consistent.",
      "An APK is not the end of the project. It is when testing actually begins.",
    ],
    honesty:
      "This is a prototype, not a released game. Progression, writing, and art are still in motion.",
  },
  {
    slug: "cybersecurity-labs",
    index: "03",
    title: "Cybersecurity Labs",
    category: "Cybersecurity",
    status: "completed",
    statusLabel: "Program completed",
    summary:
      "Deepcytes.io Cyber Labs — a UK school-collaboration program, with a certificate and a permanent digital badge.",
    purpose:
      "Learn how networks, Linux, and OSINT actually behave, in a structured student lab — not as a job title.",
    cover: "images/cyber-cover.jpg",
    coverAlt:
      "Quiet network-node study visual over a dark laptop — not a screenshot of lab software.",
    stills: [
      {
        src: "images/cyber-cover.jpg",
        alt: "Abstract network nodes above a dark laptop.",
        caption: "Study visual · not a capture of lab tooling",
      },
    ],
    stack: [
      "Cybersecurity",
      "OSINT",
      "Networking",
      "Linux",
      "Virtual machines",
      "Troubleshooting",
    ],
    overview: [
      "Aadi completed the Deepcytes.io Cyber Labs UK school-collaboration cybersecurity program. The program issued a certificate and a permanent digital badge.",
      "Around that structure, the work widened into OSINT, networking, Linux, virtual machines, and the kind of troubleshooting that only shows up when something refuses to connect.",
      "This is student lab work. It is not professional cybersecurity employment, and it is not claimed as penetration-testing experience.",
    ],
    journey: [
      {
        phase: "Program",
        text: "Cyber Labs as a school collaboration — a framed way into the field instead of random tutorials.",
      },
      {
        phase: "Certificate",
        text: "Completion documented. A badge that stays. Proof of the hours, not a license to operate.",
      },
      {
        phase: "Around it",
        text: "OSINT notes, networking labs, Linux in VMs, and the troubleshooting habit that outlives any single module.",
      },
    ],
    challenges: [
      "Labs are tidy. Real networks are not. The useful skill is staying calm when the tidy path breaks.",
      "OSINT is easy to overclaim. The work here is method, not a private-investigator act.",
      "Keeping the distinction between student labs and professional pentesting is part of the ethics, not a footnote.",
    ],
    honesty:
      "Completed as a student in a school-collaboration program. Not employment. Not a professional pentest credential.",
  },
  {
    slug: "linux-systems-lab",
    index: "04",
    title: "Linux / Systems Lab",
    category: "Systems",
    status: "lab",
    statusLabel: "Ongoing lab",
    summary:
      "Linux, VirtualBox, networking environments, CLI tooling — a lab for breaking things on purpose.",
    purpose:
      "Build a troubleshooting mindset: isolate the fault, change one variable, write down what actually happened.",
    cover: "images/linux-cover.jpg",
    coverAlt:
      "Stacked translucent frames suggesting virtual machines and a terminal pane.",
    stills: [
      {
        src: "images/linux-cover.jpg",
        alt: "Virtual-machine frames and a dim terminal pane.",
        caption: "Systems visual · lab atmosphere",
      },
    ],
    stack: [
      "Linux",
      "VirtualBox",
      "Networking",
      "Command-line tooling",
      "Connectivity troubleshooting",
      "System debugging",
    ],
    overview: [
      "A standing lab: Linux guests in VirtualBox, small networking environments, command-line tooling, and the connectivity problems that appear the moment two machines are asked to agree.",
      "The point is not a distro collection. The point is the loop — boot, break, read the log, try again — until the system makes sense.",
      "This remains a learning environment. There is no production fleet, no claimed sysadmin role.",
    ],
    journey: [
      {
        phase: "Guests",
        text: "VirtualBox as a safe place to get Linux wrong without taking down the host.",
      },
      {
        phase: "Networks",
        text: "Adapters, NAT, host-only, the quiet war of 'why can this ping and that cannot.'",
      },
      {
        phase: "CLI",
        text: "Tooling that only pays off after the tenth use. Notes beat memory.",
      },
      {
        phase: "Debug",
        text: "Connectivity issues as a teacher. One change at a time. Write it down.",
      },
    ],
    challenges: [
      "Virtual networking fails in ways that look identical until they don't.",
      "The host and the guest disagree about what 'connected' means.",
      "Resisting the urge to reinstall instead of reading the error.",
    ],
    honesty:
      "An ongoing student lab. Troubleshooting practice, not a claim of professional systems administration.",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const statusTone: Record<ProjectStatus, string> = {
  flagship: "text-accent",
  prototype: "text-warn",
  completed: "text-signal",
  lab: "text-muted",
};
