import "@tanstack/react-router";
import type { router } from "@/providers/route-provider";
import type { QueryClient } from "@tanstack/react-query";

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
  export interface RouteContext {
    metadata?: {
      title: string;
      description?: string;
    };
    query: QueryClient;
  }
}
