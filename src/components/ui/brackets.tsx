import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Brackets({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative", className)}>
      <span className="pointer-events-none absolute inset-0" aria-hidden="true">
        <span className="absolute left-0 top-0 h-2.5 w-2.5 border-l border-t border-fg/25" />
        <span className="absolute right-0 top-0 h-2.5 w-2.5 border-r border-t border-fg/25" />
        <span className="absolute bottom-0 left-0 h-2.5 w-2.5 border-b border-l border-fg/25" />
        <span className="absolute bottom-0 right-0 h-2.5 w-2.5 border-b border-r border-fg/25" />
      </span>
      {children}
    </div>
  );
}
