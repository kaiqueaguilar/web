import { routeTree } from "@/gen/route-tree.gen";
import { query } from "@/providers/query-provider";
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
