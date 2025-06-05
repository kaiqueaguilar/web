import { QueryProvider } from "@/providers/query-provider";
import { RouteProvider } from "@/providers/route-provider";
import "./styles.css";

export function App() {
  return (
    <QueryProvider>
      <RouteProvider />
    </QueryProvider>
  );
}
