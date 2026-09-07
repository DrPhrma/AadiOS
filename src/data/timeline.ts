export type TimelineEvent = {
  id: string;
  kicker: string;
  title: string;
  text: string;
};

export const timeline: TimelineEvent[] = [
  {
    id: "class-8",
    kicker: "Class 8",
    title: "First personal portfolio",
    text: "A site that existed because it was made, not because it was good. The first proof that shipping is a skill.",
  },
  {
    id: "cyber",
    kicker: "Cybersecurity",
    title: "Deepcytes Cyber Labs",
    text: "A school-collaboration program that turned curiosity into lab hours, a certificate, and a badge.",
  },
  {
    id: "systems",
    kicker: "Systems",
    title: "Linux / VirtualBox / Networking",
    text: "Guests, adapters, logs. The habit of isolating a fault instead of starting over.",
  },
  {
    id: "ai",
    kicker: "AI",
    title: "Ollama / Qwen / Local AI",
    text: "Models that run here. Latency, context, and the first useful local loops.",
  },
  {
    id: "pepper",
    kicker: "Pepper",
    title: "Local AI assistant",
    text: "The flagship: modules, memory, routing, desktop control — still being argued into shape.",
  },
  {
    id: "game",
    kicker: "Game development",
    title: "Static on the Line",
    text: "Mirehaven, a radio, Elias Voss, an APK, and the bugs that only exist on a phone.",
  },
  {
    id: "now",
    kicker: "2026",
    title: "Portfolio 2.0",
    text: "This workspace. A clearer record of what was built, what is in progress, and what is still a question.",
  },
];
