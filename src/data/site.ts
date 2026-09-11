export const site = {
  name: "Aadi",
  os: "AADI.OS",
  year: 2026,
  tagline: "Student. Developer. Builder.",
  support: "Building with AI, code, systems and curiosity.",
  title: "Aadi — Student. Developer. Builder.",
  description:
    "Personal developer lab of Aadi, a Class 10 student who learns by building — local AI, systems, cybersecurity, games, and the web.",
 
 githubUrl: "https://github.com/DrPhrma",
  academic: {
    board: "CBSE",
    class: "Class 10",
    batch: "Board Batch 2027",
  },
  status: {
    system: "AADI.OS",
    status: "ONLINE",
    focus: "BUILDING",
    stack: "PYTHON / AI / LINUX",
    current: "PEPPER",
  },
  currently: {
    note: "Static snapshot of current focus — not a live feed.",
    building: ["Pepper", "This portfolio", "Small automations"],
    learning: ["AI systems", "Cybersecurity", "Game development"],
    experimenting: ["Local LLMs", "Automation", "Linux"],
  },
} as const;

export const nav = [
  { href: "/AadiOS/#about", label: "About", id: "about" },
  { href: "/AadiOS/#work", label: "Work", id: "work" },
  { href: "/AadiOS/#skills", label: "Skills", id: "skills" },
  { href: "/AadiOS/#lab", label: "Lab", id: "lab" },
  { href: "/AadiOS/#timeline", label: "Timeline", id: "timeline" },
  { href: "/AadiOS/#contact", label: "Contact", id: "contact" },
] as const;
