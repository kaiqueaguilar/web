import { query } from "@/components/providers/query-provider";
import { routeTree } from "@/lib/gen/route-tree.gen";
import { RouterProvider, createRouter } from "@tanstack/react-router";

export const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  context: {
    query,
  },
});

export function RouteProvider() {
  return <RouterProvider router={router} />;
}
