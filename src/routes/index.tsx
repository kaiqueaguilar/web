import { Link, Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Component,
});

function Component() {
  return (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/home" className="[&.active]:font-bold">
          Home
        </Link>
        <Link to="/abount" className="[&.active]:font-bold">
          About
        </Link>
      </div>
      <hr />
      <Outlet />
    </>
  );
}
