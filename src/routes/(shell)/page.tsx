import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(shell)/")({
  context: () => ({
    metadata: {
      title: "Start",
      description: "This is the start page.",
    },
  }),
  component: Component,
});

function Component() {
  return (
    <div>
      <span>Start</span>
    </div>
  );
}
