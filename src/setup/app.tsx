import { QueryProvider } from "@/providers/query-provider";
import { RouteProvider } from "@/providers/route-provider";

export function App() {
  return (
    <QueryProvider>
      <RouteProvider />
    </QueryProvider>
  );
}
