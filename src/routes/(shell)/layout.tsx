import { Divider, Flex } from "@/styles/jsx";
import { Link, Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(shell)")({
  component: Component,
});

function Component() {
  return (
    <>
      <Flex gap="2">
        <Link to="/">Start</Link>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
      </Flex>
      <Divider />
      <Outlet />
    </>
  );
}
