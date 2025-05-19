import "@tanstack/react-router";
import type { router } from "@/providers/route-provider";

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
