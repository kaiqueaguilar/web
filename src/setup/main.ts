import HyperDX from "@hyperdx/browser";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import { env } from "./env";

createRoot(document.body).render(App());

HyperDX.init({
  apiKey: env.HYPERDX_API_KEY,
  service: env.HYPERDX_SERVICE,
  tracePropagationTargets: [env.API_URL],
  consoleCapture: true,
  advancedNetworkCapture: true,
});
