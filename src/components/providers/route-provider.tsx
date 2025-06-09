import { query } from "@/components/providers/query-provider";
import { ErrorScreen } from "@/components/screens/error-screen";
import { PendingScreen } from "@/components/screens/pending-screen";
import { routeTree } from "@/lib/gen/route-tree.gen";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { NotFoundScreen } from "../screens/not-found-screen";

export const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  context: { query },
  defaultPendingComponent: PendingScreen,
  defaultErrorComponent: ErrorScreen,
  defaultNotFoundComponent: NotFoundScreen,
});

export function RouteProvider() {
  return <RouterProvider router={router} />;
}
