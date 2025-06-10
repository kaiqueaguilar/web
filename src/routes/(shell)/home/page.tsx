import { type RouteContext, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(shell)/home/")({
  context: (): Partial<RouteContext> => ({ title: "Home" }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <span>Home</span>
    </div>
  );
}
