import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_index/about")({
  context: () => ({
    metadata: {
      title: "About",
      description: "This is the about page.",
      keywords: ["about", "information"],
    },
  }),
  component: Component,
});

function Component() {
  return (
    <div className="p-2">
      <h3>Welcome About!</h3>
    </div>
  );
}
