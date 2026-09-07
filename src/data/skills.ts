export type SkillGroupId =
  | "programming"
  | "ai"
  | "systems"
  | "security"
  | "development"
  | "game";

export type SkillGroup = {
  id: SkillGroupId;
  label: string;
  blurb: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "programming",
    label: "Programming",
    blurb: "The languages actually used to build, not a list of tutorials watched.",
    skills: ["Python", "HTML", "CSS", "JavaScript"],
  },
  {
    id: "ai",
    label: "AI",
    blurb: "Local models, prompts, and the messy middle between a demo and a tool.",
    skills: [
      "Ollama",
      "Qwen",
      "Local LLMs",
      "Prompt engineering",
      "AI-assisted development",
    ],
  },
  {
    id: "systems",
    label: "Systems",
    blurb: "Hosts, guests, and the seams between them.",
    skills: ["Linux", "Windows", "VirtualBox"],
  },
  {
    id: "security",
    label: "Security",
    blurb: "Student-lab range: networks, OSINT, and how machines fail.",
    skills: ["Cybersecurity", "OSINT", "Networking"],
  },
  {
    id: "development",
    label: "Development",
    blurb: "The unglamorous tools that keep experiments from rotting.",
    skills: ["Git", "GitHub", "Automation", "Debugging", "Modular architecture"],
  },
  {
    id: "game",
    label: "Game development",
    blurb: "A prototype that had to run on a phone, not just in an editor.",
    skills: [
      "2D development",
      "Game UI",
      "Android builds",
      "Pixel-art experimentation",
    ],
  },
];
