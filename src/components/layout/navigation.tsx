import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { nav, site } from "@/data/site";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { cn } from "@/lib/cn";

const spyIds = nav.map((item) => item.id);

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useScrollSpy(spyIds);
  const panelId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-[var(--motion-fast)] ease-[var(--ease-out)]",
        scrolled || open
          ? "bg-bg/85 shadow-[var(--shadow-border)] backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-3 font-mono text-xs tracking-wide text-fg"
          onClick={() => setOpen(false)}
        >
          <span className="inline-flex size-6 items-center justify-center rounded-xs bg-accent text-micro font-semibold text-accent-fg">
            A
          </span>
          <span>{site.os}</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={cn(
                "rounded-sm px-3 py-2 font-mono text-xs tracking-wide text-muted transition-colors duration-[var(--motion-quick)] hover:text-fg",
                active === item.id && "text-fg",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <p className="hidden items-center gap-2 font-mono text-micro tracking-wide text-muted sm:flex">
            <span className="status-dot size-1.5 rounded-full bg-signal" />
            ONLINE
          </p>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-sm text-fg lg:hidden"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id={panelId}
          className="border-t border-line bg-bg lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-4">
            {nav.map((item, i) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center justify-between border-b border-line font-mono text-sm text-fg last:border-b-0"
              >
                <span>{item.label}</span>
                <span className="text-subtle">0{i + 1}</span>
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
