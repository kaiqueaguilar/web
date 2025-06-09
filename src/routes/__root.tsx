import { QueryProvider } from "@/components/providers/query-provider";
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
    const context = matches.at(-1)?.context;

    if (!context) {
      return { meta: [] };
    }

    const meta: AnyRouteMatch["meta"] = [];

    if (context.title) {
      meta.push({ title: context.title });
    }

    if (context.description) {
      meta.push({
        name: "description",
        content: context.description,
      });
    }

    return { meta };
  },
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <HeadContent />
      <Scripts />
      <QueryProvider>
        <Outlet />
      </QueryProvider>
    </>
  );
}
