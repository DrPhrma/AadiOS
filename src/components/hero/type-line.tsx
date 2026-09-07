import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

export function TypeLine({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (n >= text.length) return;
    const wait = n === 0 ? 420 : 36;
    const t = window.setTimeout(() => setN((v) => v + 1), wait);
    return () => window.clearTimeout(t);
  }, [n, text.length]);

  return (
    <p className={cn("type-cursor min-h-7 sm:min-h-8", className)} aria-label={text}>
      {text.slice(0, n)}
    </p>
  );
}
