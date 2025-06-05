import { css } from "@/styles/classnames/css";
import { Link, Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(shell)")({
  component: Component,
});

function Component() {
  return (
    <>
      <div className={css({ bgColor: "", w: "" })}>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <hr />
      <Outlet />
    </>
  );
}
