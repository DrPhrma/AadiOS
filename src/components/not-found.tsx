import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center bg-bg px-6 text-center text-fg">
      <p className="kicker">404 / missing process</p>
      <h1 className="mt-4 font-display text-3xl">This path is empty.</h1>
      <p className="mt-3 max-w-md text-sm text-muted">
        The route does not exist in AADI.OS. Return to the workspace.
      </p>
      <div className="mt-8">
        <Button asChild>
          <Link to="/">Back to lab</Link>
        </Button>
      </div>
    </main>
  );
}
