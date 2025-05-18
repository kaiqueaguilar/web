import { routeTree } from "@/gen/route-tree.gen";
import { RouterProvider, createRouter } from "@tanstack/react-router";

export const router = createRouter({
	routeTree,
	defaultPreload: "intent",
});

export function RouteProvider() {
	return <RouterProvider router={router} />;
}
