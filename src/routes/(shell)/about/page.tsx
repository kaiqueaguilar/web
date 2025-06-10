import { type RouteContext, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(shell)/about/")({
  context: (): Partial<RouteContext> => ({ title: "About" }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <span>About</span>
    </div>
  );
}
