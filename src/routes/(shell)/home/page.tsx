import { Text } from "@/components/primitives/text";
import { Box } from "@/styles/jsx";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(shell)/home/")({
  context: () => ({
    metadata: {
      title: "Home",
      description: "This is the home page.",
    },
  }),
  component: Component,
});

function Component() {
  return (
    <Box>
      <Text>Home</Text>
    </Box>
  );
}
