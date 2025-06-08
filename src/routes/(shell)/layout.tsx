import { Divider, HStack } from "@/styles/jsx";
import { Link, Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(shell)")({
  component: Component,
});

function Component() {
  return (
    <>
      <HStack>
        <Link to="/">Start</Link>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
      </HStack>
      <Divider />
      <Outlet />
    </>
  );
}
