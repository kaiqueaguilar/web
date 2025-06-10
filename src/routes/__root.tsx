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
    const meta: AnyRouteMatch["meta"] = [];
    const match = matches.at(-1);

    if (match?.context.title) {
      meta.push({ title: match.context.title });
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
