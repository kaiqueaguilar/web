import HyperDX from "@hyperdx/browser";
import { env } from "./env";

HyperDX.init({
  apiKey: env.HYPERDX_API_KEY,
  service: env.HYPERDX_SERVICE,
  tracePropagationTargets: [env.API_URL],
  consoleCapture: true,
  advancedNetworkCapture: true,
});
