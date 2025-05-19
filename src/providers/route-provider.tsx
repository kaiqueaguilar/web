import { routeTree } from "@/gen/route-tree.gen";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { queryClient } from "./query-provider";

export const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  context: {
    queryClient,
  },
});

export function RouteProvider() {
  return <RouterProvider router={router} />;
}
