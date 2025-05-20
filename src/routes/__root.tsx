import { HeadContent, Outlet, type RouteContext, Scripts, createRootRouteWithContext } from "@tanstack/react-router"

export const Route = createRootRouteWithContext<RouteContext>()({
  head: ({ matches }) => {
    const metadata = matches.pop()?.context.metadata
    return {
      meta: [
        {
          title: metadata?.title,
        },
        {
          name: "description",
          content: metadata?.description,
        },
      ],
    }
  },
  component: () => (
    <>
      <HeadContent />
      <Outlet />
      <Scripts />
    </>
  ),
})
