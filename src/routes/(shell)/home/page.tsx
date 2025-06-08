import { Text } from "@/components/text";
import { Box, Flex } from "@/styles/jsx";
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
      <Flex direction="column">
        <Text>Home</Text>
      </Flex>
    </Box>
  );
}
