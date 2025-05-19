import { QueryProvider } from "@/providers/query-provider";
import { RouteProvider } from "@/providers/route-provider";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

function Main() {
  return (
    <StrictMode>
      <QueryProvider>
        <RouteProvider />
      </QueryProvider>
    </StrictMode>
  );
}

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(<Main />);
}
