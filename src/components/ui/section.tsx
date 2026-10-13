import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Section({
  id,
  kicker,
  title,
  aside,
  children,
  className,
}: {
  id: string;
  kicker: string;
  title: string;
  aside?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24 border-t border-line px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl">
        <header className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="kicker">{kicker}</p>
            <h2 className="mt-2 font-display text-2xl text-fg sm:text-3xl">{title}</h2>
          </div>
          {aside ? (
            <p className="max-w-xs font-mono text-xs leading-snug text-subtle sm:text-right">
              {aside}
            </p>
          ) : null}
        </header>
        {children}
      </div>
    </section>
  );
}
