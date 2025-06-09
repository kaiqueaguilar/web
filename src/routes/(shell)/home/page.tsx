import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(shell)/home/")({
  context: () => ({
    title: "Home",
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <span>Home</span>
    </div>
  );
}
