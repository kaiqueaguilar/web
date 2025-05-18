import { QueryProvider } from "@/providers/query-provider";
import { RouteProvider } from "@/providers/route-provider";
import { StrictMode } from "react";

export function App() {
  return (
    <StrictMode>
      <QueryProvider>
        <RouteProvider />
      </QueryProvider>
    </StrictMode>
  );
}
