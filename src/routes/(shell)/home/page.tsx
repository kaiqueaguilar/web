import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/(shell)/home/")({
  context: () => ({
    metadata: {
      title: "Home",
      description: "This is the home page.",
    },
  }),
  component: Component,
})

function Component() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
    </div>
  )
}
