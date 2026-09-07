import { createRootRoute, Outlet } from "@tanstack/react-router";
import { NotFound } from "@/components/not-found";
import { site } from "@/data/site";

export const Route = createRootRoute({
  notFoundComponent: NotFound,
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="dark antialiased min-h-screen bg-bg text-fg">
      <Outlet />
    </div>
  );
}
