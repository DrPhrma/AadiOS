export type Achievement = {
  id: string;
  group: "Cybersecurity" | "Development" | "Academic";
  title: string;
  detail: string;
};

export const achievements: Achievement[] = [
  {
    id: "cyber-labs",
    group: "Cybersecurity",
    title: "Deepcytes.io Cyber Labs",
    detail: "Completed the UK school-collaboration cybersecurity program.",
  },
  {
    id: "cyber-cert",
    group: "Cybersecurity",
    title: "Certificate received",
    detail: "Program completion documented. Student credential, not employment.",
  },
  {
    id: "cyber-badge",
    group: "Cybersecurity",
    title: "Permanent digital badge",
    detail: "Issued with the Cyber Labs completion.",
  },
  {
    id: "pepper",
    group: "Development",
    title: "Built a local AI assistant",
    detail: "Pepper — modular, experimental, still in active iteration.",
  },
  {
    id: "game",
    group: "Development",
    title: "Mobile game prototype",
    detail: "Static on the Line — built, packaged as an APK, tested, iterated.",
  },
  {
    id: "web",
    group: "Development",
    title: "Personal web projects",
    detail: "From the Class 8 portfolio through this lab.",
  },
  {
    id: "llms",
    group: "Development",
    title: "Worked with local LLMs",
    detail: "Ollama / Qwen — on-machine inference, not a wrapped cloud demo.",
  },
  {
    id: "linux",
    group: "Development",
    title: "Linux and virtualized environments",
    detail: "VirtualBox labs, networking, and system debugging practice.",
  },
  {
    id: "class",
    group: "Academic",
    title: "CBSE Class 10 student",
    detail: "Secondary to the build record. Listed for context.",
  },
  {
    id: "batch",
    group: "Academic",
    title: "Board Batch 2027",
    detail: "Academic timeline, not a substitute for the work.",
  },
];
