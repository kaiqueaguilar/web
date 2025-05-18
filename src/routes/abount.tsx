import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/abount")({
  component: Component,
});

function Component() {
  return <div className="p-2">Hello from About!</div>;
}
