import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(shell)/about/")({
  context: () => ({
    metadata: {
      title: "About",
      description: "This is the about page.",
    },
  }),
  component: Component,
});

function Component() {
  return (
    <div>
      <h3>Welcome About!</h3>
    </div>
  );
}
