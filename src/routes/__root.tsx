import {
  type AnyRouteMatch,
  HeadContent,
  Outlet,
  type RouteContext,
  Scripts,
  createRootRouteWithContext,
} from "@tanstack/react-router";

export const Route = createRootRouteWithContext<RouteContext>()({
  head: ({ matches }) => {
    const metadata = matches.at(-1)?.context.metadata;

    if (!metadata) {
      return { meta: [] };
    }

    const meta: AnyRouteMatch["meta"] = [];

    if (metadata.title) {
      meta.push({ title: metadata.title });
    }

    if (metadata.description) {
      meta.push({
        name: "description",
        content: metadata.description,
      });
    }

    return { meta };
  },
  component: Component,
});

function Component() {
  return (
    <>
      <HeadContent />
      <Outlet />
      <Scripts />
    </>
  );
}
