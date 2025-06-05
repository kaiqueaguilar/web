import { QueryProvider } from "@/providers/query-provider";
import { RouteProvider } from "@/providers/route-provider";

export function Root() {
  return (
    <QueryProvider>
      <RouteProvider />
    </QueryProvider>
  );
}
