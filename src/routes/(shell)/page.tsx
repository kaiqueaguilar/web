import { type RouteContext, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(shell)/")({
  context: (): Partial<RouteContext> => ({ title: "Start" }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <span>Start</span>
    </div>
  );
}
