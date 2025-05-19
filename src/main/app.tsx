import { QueryProvider } from "@/providers/query-provider";
import { RouteProvider } from "@/providers/route-provider";
import { StrictMode } from "react";
import "./styles.css";

export function App() {
  return (
    <StrictMode>
      <QueryProvider>
        <RouteProvider />
      </QueryProvider>
    </StrictMode>
  );
}
