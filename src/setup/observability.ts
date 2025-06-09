import HyperDX from "@hyperdx/browser";
import { env } from "./env";

HyperDX.init({
  url: env.PUBLIC_HYPERDX_URL,
  apiKey: env.PUBLIC_HYPERDX_API_KEY,
  service: env.PUBLIC_HYPERDX_SERVICE,
  tracePropagationTargets: [env.PUBLIC_API_URL],
  consoleCapture: true,
  advancedNetworkCapture: true,
});
