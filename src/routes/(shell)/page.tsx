import { Button } from "@/components/primitives/button";
import { Text } from "@/components/primitives/text";
import { Box } from "@/styles/jsx";
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
    <Box>
      <Text>Welcome</Text>
      <Button>teste</Button>
    </Box>
  );
}
