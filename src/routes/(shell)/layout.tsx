import { Link, Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(shell)")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div>
        <Link to="/">Start</Link>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <hr />
      <Outlet />
    </>
  );
}
