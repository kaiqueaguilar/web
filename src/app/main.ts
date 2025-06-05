import HyperDX from "@hyperdx/browser";
import { createRoot } from "react-dom/client";
import { env } from "./env";
import { Root } from "./root";

createRoot(document.body).render(Root());

HyperDX.init({
  apiKey: env.HYPERDX_API_KEY,
  service: env.HYPERDX_SERVICE,
  tracePropagationTargets: [env.API_URL],
  consoleCapture: true,
  advancedNetworkCapture: true,
});
