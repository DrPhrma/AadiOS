import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <p className="font-display text-statement tracking-tight text-fg">
          Still building.
        </p>
        <div className="flex flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs">
            © {site.year} {site.name}. Built with curiosity.
          </p>
          <p className="font-mono text-xs text-subtle">{site.os} · workspace</p>
        </div>
      </div>
    </footer>
  );
}
