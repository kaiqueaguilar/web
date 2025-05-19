import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_index/home")({
  context: () => ({
    metadata: {
      title: "Home",
      description: "This is the home page.",
      keywords: ["home", "welcome"],
    },
  }),
  component: Component,
});

function Component() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
    </div>
  );
}
