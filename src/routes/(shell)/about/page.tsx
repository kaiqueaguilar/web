import { Text } from "@/components/primitives/text";
import { Box } from "@/styles/jsx";
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
    <Box>
      <Text>About</Text>
    </Box>
  );
}
