import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

const ROLES = [
  "Student",
  "Developer",
  "Builder",
  "Photographer",
  "Editor",
  "Cybersecurity",
] as const;

const TYPE_MS = 70;
const ERASE_MS = 40;
const HOLD_MS = 1400;
const GAP_MS = 350;

export function TypeLine({
  className,
}: {
  text?: string;
  className?: string;
}) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [phase, setPhase] = useState<"typing" | "holding" | "erasing">("typing");

  const full = ROLES[roleIndex];

  useEffect(() => {
    let timer: number;

    if (phase === "typing") {
      if (display.length < full.length) {
        timer = window.setTimeout(() => {
          setDisplay(full.slice(0, display.length + 1));
        }, TYPE_MS);
      } else {
        timer = window.setTimeout(() => setPhase("holding"), HOLD_MS);
      }
    } else if (phase === "holding") {
      timer = window.setTimeout(() => setPhase("erasing"), 0);
    } else if (phase === "erasing") {
      if (display.length > 0) {
        timer = window.setTimeout(() => {
          setDisplay(display.slice(0, -1));
        }, ERASE_MS);
      } else {
        timer = window.setTimeout(() => {
          setRoleIndex((i) => (i + 1) % ROLES.length);
          setPhase("typing");
        }, GAP_MS);
      }
    }

    return () => window.clearTimeout(timer);
  }, [display, phase, full]);

  return (
    <p
      className={cn("type-cursor min-h-7 sm:min-h-8", className)}
      aria-label={ROLES.join(", ")}
    >
      {display}
    </p>
  );
}
