export const site = {
  name: "Aadi",
  os: "AADI.OS",
  year: 2026,
  tagline: "Student. Developer. Builder.",
  support: "Building with AI, code, systems and curiosity.",
  title: "Aadi — Student. Developer. Builder.",
  description:
    "Personal developer lab of Aadi, a Class 10 student who learns by building — local AI, systems, cybersecurity, games, and the web.",
  /**
   * Set this to a full profile URL when it should be public.
   * Leave empty so the GitHub control stays visible without inventing a username.
   */
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
  { href: "#about", label: "About", id: "about" },
  { href: "#work", label: "Work", id: "work" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#lab", label: "Lab", id: "lab" },
  { href: "#timeline", label: "Timeline", id: "timeline" },
  { href: "#contact", label: "Contact", id: "contact" },
] as const;
