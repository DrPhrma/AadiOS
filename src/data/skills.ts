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
    blurb: "Languages used in actual projects.",
    skills: ["Python", "HTML", "CSS", "JavaScript"],
  },
  {
    id: "ai",
    label: "AI",
    blurb: "Local models, prompts, and turning experiments into tools.",
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
    blurb: "Linux, virtualization, and the basics of how machines talk.",
    skills: ["Linux", "Windows", "VirtualBox"],
  },
  {
    id: "security",
    label: "Security",
    blurb: "Student-lab work: networks, OSINT, and how systems fail.",
    skills: ["Cybersecurity", "OSINT", "Networking"],
  },
  {
    id: "development",
    label: "Development",
    blurb: "Tools that keep experiments organised and usable.",
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
