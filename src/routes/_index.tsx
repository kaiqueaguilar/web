import { Link, Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_index")({
  component: Component,
});

function Component() {
  return (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/home" className="[&.active]:font-bold">
          Home
        </Link>
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </div>
      <hr />
      <Outlet />
    </>
  );
}
