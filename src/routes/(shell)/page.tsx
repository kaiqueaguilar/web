import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(shell)/")({
  context: () => ({
    metadata: {
      title: "Welcome",
      description: "This is the welcome page.",
    },
  }),
  component: Component,
});

function Component() {
  return (
    <div className="p-2">
      <h3>Welcome</h3>
    </div>
  );
}
