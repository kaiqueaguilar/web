import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(shell)/")({
  context: () => ({
    title: "Start",
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <span>Start</span>
    </div>
  );
}
