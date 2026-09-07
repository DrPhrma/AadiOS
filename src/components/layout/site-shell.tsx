import type { ReactNode } from "react";
import { Footer } from "@/components/layout/footer";
import { Navigation } from "@/components/layout/navigation";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-dvh bg-bg text-fg">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-fg"
      >
        Skip to content
      </a>
      <div className="site-grid grid-drift pointer-events-none absolute inset-0" />
      <div className="noise pointer-events-none absolute inset-0" />
      <Navigation />
      <main id="main" className="relative">
        {children}
      </main>
      <Footer />
    </div>
  );
}
