import "@tanstack/react-router";
import type { router } from "@/components/providers/route-provider";
import type { QueryClient } from "@tanstack/react-query";

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
  export interface RouteContext {
    readonly title?: string;
    readonly query: QueryClient;
  }
}
