import { Root } from "@/app/root";
import { createRoot } from "react-dom/client";

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(<Root />);
}
